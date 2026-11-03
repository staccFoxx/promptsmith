/**
 * PromptSmith AI - Precision Multi-Model Prompt Transformation Engine
 * Optimizes prompts across 7 distinct profiles tailored to the active IDE/device,
 * frontier model architectures (Claude 3.5, o1/o3, GPT-4o, Gemini 2.0, DeepSeek R1),
 * and enriched by our multi-domain training corpus.
 */

import { KnowledgeBase, DomainRule } from "./knowledge_base";

export type EnhancementProfile =
  | "precision"
  | "claude_xml"
  | "openai_o"
  | "gpt4o_schema"
  | "gemini_context"
  | "adversarial"
  | "executive";

export class PromptEnhancer {
  public static enhance(prompt: string, profile: EnhancementProfile = "precision", targetRuntime = "Cursor / Claude Code"): string {
    const cleanPrompt = prompt.trim();
    if (!cleanPrompt) return "";

    const domainRule = KnowledgeBase.getDomainEnrichment(cleanPrompt);

    switch (profile) {
      case "precision":
        return this.enhancePrecision(cleanPrompt, targetRuntime, domainRule);
      case "claude_xml":
        return this.enhanceClaudeXml(cleanPrompt, targetRuntime, domainRule);
      case "openai_o":
        return this.enhanceOpenAiReasoning(cleanPrompt, targetRuntime, domainRule);
      case "gpt4o_schema":
        return this.enhanceGpt4oSchema(cleanPrompt, targetRuntime, domainRule);
      case "gemini_context":
        return this.enhanceGeminiContext(cleanPrompt, targetRuntime, domainRule);
      case "adversarial":
        return this.enhanceAdversarial(cleanPrompt, targetRuntime, domainRule);
      case "executive":
        return this.enhanceExecutive(cleanPrompt, domainRule);
    }
  }

  private static stripFiller(text: string): string {
    return text
      .replace(/\b(can you please|could you please|please kindly|i would like you to|i want you to)\b/gi, "")
      .replace(/\b(as an ai language model|as a helpful assistant|in order to help me)\b/gi, "")
      .replace(/\b(feel free to|make sure that you|try your best to)\b/gi, "")
      .replace(/\b(basically|essentially|actually|obviously|literally)\b/gi, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  // 1. Universal Technical Precision
  private static enhancePrecision(prompt: string, targetRuntime: string, domainRule: DomainRule | null): string {
    const core = this.stripFiller(prompt);
    const domainConstraints = domainRule
      ? domainRule.injectedConstraints.map(c => `- [${domainRule.domain}] ${c}`).join("\n")
      : "";

    const outputFormat = domainRule
      ? domainRule.recommendedOutputFormat
      : "Return the solution structured logically: 1. Specification / Root Cause -> 2. Production Code / Artifact -> 3. Step-by-Step Validation Test.";

    return `<context>
You are an expert technical intelligence operating within ${targetRuntime}${domainRule ? ` specializing in ${domainRule.domain}` : ""}. Execute the task with deterministic precision, zero conversational preamble, and complete adherence to provided constraints.
</context>

<task>
${core}
</task>

<constraints>
- Maintain production-grade correctness with zero unverified assumptions or unstated mock implementations.
- Provide self-contained, drop-in replacement artifacts with explicit error-handling and boundary edge cases.
- NEVER include meta-commentary, apology preambles, or conversational transitions before or after the deliverables.
${domainConstraints ? domainConstraints + "\n" : ""}- Prioritize high token-to-signal clarity and executable syntax.
</constraints>

<output_format>
${outputFormat}
</output_format>`;
  }

  // 2. Anthropic Claude 3.5 Sonnet / Opus XML Architecture
  private static enhanceClaudeXml(prompt: string, targetRuntime: string, domainRule: DomainRule | null): string {
    const core = this.stripFiller(prompt);
    return `<system_role>
Frontier Software Architect & Empirical Systems Verifier operating in ${targetRuntime}.
${domainRule ? `Domain Expertise: ${domainRule.domain}` : ""}
</system_role>

<scratchpad>
Before outputting deliverables:
1. Deconstruct the prompt requirements and implicit invariant constraints.
2. Formulate alternative edge cases and failure modes.
3. Validate deterministic syntax correctness without placeholders.
</scratchpad>

<instructions>
${core}
</instructions>

<rules>
- Adhere strictly to provided specifications without conversational introductions or summaries.
- Enclose all production artifacts in clean, delimited syntax blocks.
- If edge-case ambiguities exist, implement the most resilient industry-standard pattern and document assumptions inline.
</rules>

<output_specification>
${domainRule ? domainRule.recommendedOutputFormat : "Deliver direct executable source code followed by verification test assertions."}
</output_specification>`;
  }

  // 3. OpenAI o1 / o3-mini & DeepSeek R1 Autonomous Problem Specification
  private static enhanceOpenAiReasoning(prompt: string, targetRuntime: string, domainRule: DomainRule | null): string {
    // Strip micromanaging "think step by step" to free up autonomous test-time compute
    const core = prompt
      .replace(/\b(think step by step|walk through step by step|let's think step by step|explain your reasoning step by step)\b/gi, "")
      .replace(/\s+/g, " ")
      .trim();

    return `### Problem Specification
${core}

### Invariant & Boundary Criteria
- Target Environment: ${targetRuntime}
${domainRule ? `- Domain Focus: ${domainRule.domain}` : ""}
- Deterministic correctness is required across all edge cases (null/empty inputs, concurrency, boundary overflow).
- Do NOT provide high-level abstractions or pseudo-code; deliver fully implemented, runnable production artifacts.

### Formal Acceptance Verification
- Provide 3 rigorous unit/integration test assertions verifying happy path, boundary threshold, and failure recovery.
- State asymptotic computational complexity (Time & Space) if applicable.`;
  }

  // 4. OpenAI GPT-4o / GPT-4.5 Structured Markdown & Schema
  private static enhanceGpt4oSchema(prompt: string, targetRuntime: string, domainRule: DomainRule | null): string {
    const core = this.stripFiller(prompt);
    return `## Objective & System Context
Act as a Senior Staff Engineer in ${targetRuntime}. Execute the objective with high token efficiency and structured markdown output.

## Input Prompt
${core}

## Hard Constraints
- Output must be structured under clean markdown headings (## Architecture, ## Implementation, ## Verification).
- Code snippets must include language tags and complete variable types.
- Zero markdown backticks surrounding non-code conversational text.
${domainRule ? domainRule.injectedConstraints.map(c => `- ${c}`).join("\n") : ""}

## Few-Shot Demonstration Pattern
Input: Calculate verified hash digest of payload
Output: 
\`\`\`typescript
import * as crypto from 'crypto';
export function hashPayload(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}
\`\`\``;
  }

  // 5. Google Gemini 2.0 Flash / 1.5 Pro Context Anchoring
  private static enhanceGeminiContext(prompt: string, targetRuntime: string, domainRule: DomainRule | null): string {
    const core = this.stripFiller(prompt);
    return `[SYSTEM INSTRUCTION: FRONTIER GEMINI RUNTIME]
You are operating within ${targetRuntime}. You possess multi-modal context understanding and high-throughput recall.
${domainRule ? `Domain Context: ${domainRule.domain}` : ""}

============================= BEGIN REFERENCE CONTEXT =============================
Environment: Production IDE (${targetRuntime})
Knowledge Rules: ${domainRule ? domainRule.injectedConstraints.join("; ") : "Production standard compliance"}
============================== END REFERENCE CONTEXT ==============================

[ACTIONABLE OBJECTIVE]
${core}

[STRICT DELIVERABLE FORMAT]
- Deliver self-contained, fully resolved implementations.
- Ground all assertions directly in technical specifications.
- Avoid repetitive disclaimers or speculative non-answers.`;
  }

  // 6. Adversarial / RLHF Red-Teaming
  private static enhanceAdversarial(prompt: string, targetRuntime: string, domainRule: DomainRule | null): string {
    const checklist = domainRule
      ? domainRule.reasoningChecklist.map((c, i) => `${i + 1}. ${c}`).join("\n")
      : "1. Negative Constraint Adherence\n2. Fact-Checking & Grounding\n3. Edge-Case Boundaries";

    return `<system_identity>
Frontier Reasoning & Empirical Verification Evaluator (${targetRuntime})
${domainRule ? `Domain Specialization: ${domainRule.domain}` : ""}
</system_identity>

<objective>
Execute a rigorous multi-turn evaluation of the following scenario, proactively testing for subtle failure modes, boundary contradictions, and hallucination vectors:
</objective>

<scenario_prompt>
${prompt}
</scenario_prompt>

<adversarial_rubric>
1. Constraint Adherence: Verify that every negative constraint, formatting instruction, and length requirement is strictly followed without drift.
2. Fact-Checking & Semantic Grounding: Expose any historical, mathematical, or accounting hallucinations (e.g. inverted signs, misattributed entities, broken references).
3. Domain-Specific Verification Checklist:
${checklist}
4. Failure Classification: If a failure is elicited, classify the root cause (Instruction Neglect, Parametric Hallucination, Semantic Homonym Trap, or Logic Inversion).
</adversarial_rubric>

<required_output>
Provide an unsparing, analytical assessment backed by explicit mathematical or textual evidence. Quote exact offending phrases before delivering the remediated ground-truth answer.
</required_output>`;
  }

  // 7. Executive & Commercial High-Yield Conversion
  private static enhanceExecutive(prompt: string, domainRule: DomainRule | null): string {
    return `### Context & Strategic Objective
${prompt}

### Constraints & Commercial Parameters
- Audience: Enterprise Technical Decision-Maker / Principal Architect / Managing Director.
- Format: Strict 3-sentence high-signal conversion framework:
  1. Proven Technical Capability & Value Wedge (backed by verifiable benchmark data).
  2. Frictionless Integration Path (zero migration overhead, drop-in SDK/MCP).
  3. Low-Commitment Concrete Call-to-Action (pilot activation link or 15-minute verification sandbox).
- Tone: Crisp, commanding, professional, zero marketing hyperbole.
${domainRule ? `- Industry Anchor: ${domainRule.domain}` : ""}`;
  }
}
