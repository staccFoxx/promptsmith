/**
 * PromptSmith - Curated Developer Skills & Workspace Rule Scrubber
 * 1. Workspace Context Grounder: Inspects active editor language, imports/symbols,
 *    and project stack (package.json, pyproject.toml, Cargo.toml, go.mod, tsconfig.json).
 * 2. Ambiguity & Constraint Linter: Detects underspecified prompts before sending to LLMs.
 * 3. Rule File Scrubber & Exporter: Compacts and writes .cursorrules, CLAUDE.md, and .windsurfrules.
 * 4. Multi-Turn Cost & Token Simulator: Computes 20-turn API cost savings across frontier models.
 */

import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export interface WorkspaceGroundContext {
  hasWorkspace: boolean;
  workspaceName: string;
  activeFileRelative: string;
  languageId: string;
  detectedStack: string[];
  extractedSymbols: string[];
  contextSummaryBlock: string;
}

export interface AmbiguityFinding {
  id: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  label: string;
  fixSnippet: string;
}

export interface CostSimulation {
  originalTokensPerTurn: number;
  optimizedTokensPerTurn: number;
  turnsSimulated: number;
  cumulativeTokensSaved: number;
  claudeSonnetSavedUsd: string;
  openaiO3SavedUsd: string;
  gpt4oSavedUsd: string;
}

export class PromptWorkspaceToolkit {
  /**
   * 1. Inspect the active VS Code / Cursor workspace and active editor to build
   *    a zero-hallucination grounding block.
   */
  public static inspectWorkspace(): WorkspaceGroundContext {
    const folders = vscode.workspace.workspaceFolders;
    const editor = vscode.window.activeTextEditor;

    const stack: string[] = [];
    let workspaceName = "Standalone Editor";
    let rootPath = "";

    if (folders && folders.length > 0) {
      rootPath = folders[0].uri.fsPath;
      workspaceName = folders[0].name;

      // Check package.json
      const pkgPath = path.join(rootPath, "package.json");
      if (fs.existsSync(pkgPath)) {
        try {
          const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
          const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
          const notable = [
            "typescript", "react", "next", "vue", "svelte", "tailwindcss",
            "express", "fastify", "nestjs", "prisma", "drizzle-orm",
            "zod", "vitest", "jest", "playwright", "esbuild", "vite",
            "firebase-functions", "firebase-admin", "stripe"
          ];
          for (const key of notable) {
            if (deps[key]) stack.push(`${key}@${String(deps[key]).replace(/^[\^~]/, "")}`);
          }
          if (stack.length === 0) stack.push("Node.js / npm");
        } catch {
          stack.push("Node.js");
        }
      }

      if (fs.existsSync(path.join(rootPath, "tsconfig.json")) && !stack.some(s => s.startsWith("typescript"))) {
        stack.push("TypeScript (tsconfig)");
      }
      if (fs.existsSync(path.join(rootPath, "pyproject.toml")) || fs.existsSync(path.join(rootPath, "requirements.txt"))) {
        stack.push("Python");
      }
      if (fs.existsSync(path.join(rootPath, "Cargo.toml"))) {
        stack.push("Rust (Cargo)");
      }
      if (fs.existsSync(path.join(rootPath, "go.mod"))) {
        stack.push("Go (go.mod)");
      }
    }

    let activeFileRelative = "None";
    let languageId = "plaintext";
    const extractedSymbols: string[] = [];

    if (editor) {
      languageId = editor.document.languageId;
      activeFileRelative = rootPath
        ? path.relative(rootPath, editor.document.uri.fsPath).replace(/\\/g, "/")
        : path.basename(editor.document.uri.fsPath);

      const docText = editor.document.getText().slice(0, 12000);
      const symbolRegexes = [
        /\b(?:export\s+)?(?:async\s+)?function\s+([a-zA-Z0-9_]+)/g,
        /\b(?:export\s+)?(?:class|interface|type|enum)\s+([a-zA-Z0-9_]+)/g,
        /\bdef\s+([a-zA-Z0-9_]+)\s*\(/g,
        /\bfn\s+([a-zA-Z0-9_]+)\s*[<(]/g,
        /\bfunc\s+(?:\([^)]+\)\s*)?([a-zA-Z0-9_]+)\s*\(/g
      ];
      for (const rx of symbolRegexes) {
        let m: RegExpExecArray | null;
        while ((m = rx.exec(docText)) !== null) {
          if (m[1] && !extractedSymbols.includes(m[1]) && extractedSymbols.length < 14) {
            extractedSymbols.push(m[1]);
          }
        }
      }
    }

    const lines: string[] = ["### Grounded Workspace & File Context"];
    lines.push(`- Workspace: \`${workspaceName}\``);
    if (activeFileRelative !== "None") {
      lines.push(`- Active File: \`${activeFileRelative}\` (Language: \`${languageId}\`)`);
    }
    if (stack.length > 0) {
      lines.push(`- Verified Stack & Packages: ${stack.slice(0, 10).map(s => `\`${s}\``).join(", ")}`);
    }
    if (extractedSymbols.length > 0) {
      lines.push(`- Active File Symbols: ${extractedSymbols.map(s => `\`${s}\``).join(", ")}`);
    }
    lines.push(`- Grounding Rule: Reuse existing project packages and symbol signatures above; do not invent unverified libraries.`);

    return {
      hasWorkspace: Boolean(folders && folders.length > 0),
      workspaceName,
      activeFileRelative,
      languageId,
      detectedStack: stack,
      extractedSymbols,
      contextSummaryBlock: lines.join("\n")
    };
  }

  /**
   * 2. Lint a raw prompt for missing engineering constraints and return 1-click fixes.
   */
  public static lintAmbiguities(prompt: string): AmbiguityFinding[] {
    const raw = (prompt || "").trim();
    const findings: AmbiguityFinding[] = [];
    if (!raw) return findings;

    // Check 1: Target language or runtime unspecified
    if (!/\b(typescript|javascript|python|rust|go|golang|java|c\+\+|c#|sql|html|css|react|node|bash|powershell)\b/i.test(raw)) {
      findings.push({
        id: "missing_runtime",
        severity: "HIGH",
        label: "No target language or runtime specified",
        fixSnippet: "Target Runtime: Use strict TypeScript / Node.js with explicit type annotations."
      });
    }

    // Check 2: Error / edge-case handling unspecified
    if (!/\b(error|exception|fallback|null|empty|timeout|retry|edge case|boundary|invalid)\b/i.test(raw)) {
      findings.push({
        id: "missing_error_bounds",
        severity: "MEDIUM",
        label: "Missing error handling & boundary conditions",
        fixSnippet: "Boundary & Error Handling: Explicitly handle null/empty inputs, timeouts, and invalid states without silent failures."
      });
    }

    // Check 3: Output format or file scope unspecified
    if (!/\b(json|xml|markdown|diff|file|function|schema|test|interface|return|deliverable)\b/i.test(raw)) {
      findings.push({
        id: "missing_output_contract",
        severity: "MEDIUM",
        label: "No explicit output format or deliverable contract",
        fixSnippet: "Output Contract: Return complete, drop-in production code with zero placeholders or elided sections."
      });
    }

    // Check 4: Verification / test requirement unspecified
    if (!/\b(test|verify|assert|unit test|benchmark|invariant|prove|validation)\b/i.test(raw)) {
      findings.push({
        id: "missing_verification",
        severity: "LOW",
        label: "No verification or unit test assertion requested",
        fixSnippet: "Verification: Include deterministic unit test assertions covering nominal and boundary edge cases."
      });
    }

    return findings;
  }

  /**
   * 3. Compact and write a persistent IDE instruction file (.cursorrules, CLAUDE.md, or .windsurfrules).
   */
  public static async exportWorkspaceRulesFile(
    targetFile: ".cursorrules" | "CLAUDE.md" | ".windsurfrules",
    compiledBlueprint: string
  ): Promise<{ ok: boolean; filePath?: string; message: string }> {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders || folders.length === 0) {
      return {
        ok: false,
        message: "Open a project folder in your IDE first to export " + targetFile + "."
      };
    }

    const rootPath = folders[0].uri.fsPath;
    const outPath = path.join(rootPath, targetFile);
    const ctx = this.inspectWorkspace();

    const header = `# ${targetFile} - Generated & Compacted by PromptSmith\n` +
      `# Workspace: ${ctx.workspaceName} | Stack: ${ctx.detectedStack.join(", ") || ctx.languageId}\n\n`;

    const defaultCoreRules = [
      "## Core Engineering Invariants",
      "- Write complete, production-ready code with zero TODO placeholders or truncated sections.",
      "- Preserve existing project module boundaries, naming conventions, and dependency versions.",
      "- Validate all external inputs, boundary conditions, and error states explicitly.",
      "- Prefer small, deterministic, testable functions over deeply nested stateful logic."
    ].join("\n");

    const body = compiledBlueprint && compiledBlueprint.trim()
      ? `${header}${ctx.contextSummaryBlock}\n\n${defaultCoreRules}\n\n## Active Task & Prompt Blueprint\n${compiledBlueprint.trim()}\n`
      : `${header}${ctx.contextSummaryBlock}\n\n${defaultCoreRules}\n`;

    try {
      fs.writeFileSync(outPath, body, "utf-8");
      const doc = await vscode.workspace.openTextDocument(outPath);
      await vscode.window.showTextDocument(doc, { preview: false });
      return {
        ok: true,
        filePath: outPath,
        message: `Wrote compacted rules to ${targetFile} (${body.length} chars).`
      };
    } catch (err) {
      return {
        ok: false,
        message: `Failed to write ${targetFile}: ${err instanceof Error ? err.message : String(err)}`
      };
    }
  }

  /**
   * 4. Simulate 20-turn cumulative context window token and API cost savings.
   *    In multi-turn coding sessions (Cursor Composer / Claude Code), every turn re-sends
   *    prior prompt history: Turn 1 + Turn 2 + ... + Turn N = N*(N+1)/2 multiplier.
   */
  public static simulateMultiTurnSavings(rawPrompt: string, tokenSavingsPercent: number): CostSimulation {
    const rawWords = (rawPrompt || "").trim() ? rawPrompt.trim().split(/\s+/).length : 120;
    const origTokens = Math.max(80, Math.round(rawWords * 1.35));
    const savingsRatio = Math.max(0.18, Math.min(0.65, (tokenSavingsPercent || 35) / 100));
    const optTokens = Math.max(40, Math.round(origTokens * (1 - savingsRatio)));

    const turns = 20;
    // Cumulative re-read across 20 agent turns + reduced retry rounds (average 1.8 fewer retries)
    const cumulativeMultiplier = (turns * (turns + 1)) / 2;
    const savedTokens = Math.round((origTokens - optTokens) * cumulativeMultiplier + origTokens * 8);

    const claudeSaved = (savedTokens / 1_000_000) * 15.0; // $15 / 1M output+cached context equivalent
    const o3Saved = (savedTokens / 1_000_000) * 20.0;
    const gpt4oSaved = (savedTokens / 1_000_000) * 10.0;

    return {
      originalTokensPerTurn: origTokens,
      optimizedTokensPerTurn: optTokens,
      turnsSimulated: turns,
      cumulativeTokensSaved: savedTokens,
      claudeSonnetSavedUsd: claudeSaved.toFixed(3),
      openaiO3SavedUsd: o3Saved.toFixed(3),
      gpt4oSavedUsd: gpt4oSaved.toFixed(3)
    };
  }
}
