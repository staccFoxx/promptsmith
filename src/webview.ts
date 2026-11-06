/**
 * PromptSmith - Universal Screen Companion & Adaptive Cognitive Learning Studio (2027 Edition)
 * Hyper-interactive webview for Cursor, Windsurf, and VS Code.
 * Benchmarks prompts across Frontier Models, Coding Bots, and Next-Gen AI.
 * Adapts cognitive scaffolding dynamically to any age and knowledge level.
 */

import { PromptMetrics } from "./analyzer";
import { EnhancementProfile } from "./enhancer";
import { ModelBenchmarkEngine, BenchmarkTarget } from "./benchmarks";
import { CognitiveAudience } from "./learner";
import { DisciplinaryLens, OmniEqualizerEngine } from "./equalizer";
import { PromptWorkspaceToolkit } from "./workspace_skills";

export class PromptWebviewProvider {
  public static getHtml(
    originalPrompt: string,
    enhancedPrompt: string,
    metrics: PromptMetrics,
    activeProfile: EnhancementProfile,
    isLicensed: boolean,
    remainingTrial: number,
    activeAudience?: CognitiveAudience,
    activeDiscipline?: DisciplinaryLens,
    autoHookEnabled = true,
    detectedModelLabel = "Claude 3.7 / Auto",
    historyVault: { ts: string; raw: string; compiled: string; profile: string }[] = []
  ): string {
    const safeOriginal = (originalPrompt || "Select text in your editor and press Alt+P to improve it.")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const benchmarks = ModelBenchmarkEngine.benchmarkPrompt(originalPrompt);
    const modelTargets = benchmarks.filter(b => b.category === "model");
    const botTargets = benchmarks.filter(b => b.category === "bot");
    const futureTargets = benchmarks.filter(b => b.category === "future");

    const cognitive = metrics.cognitive;
    const currentAudience = activeAudience || cognitive.audience;
    const currentDiscipline = activeDiscipline || metrics.discipline;
    const equalizerProf = OmniEqualizerEngine.PROFILES[currentDiscipline] || metrics.equalizer;
    const wsContext = PromptWorkspaceToolkit.inspectWorkspace();
    const ambiguities = PromptWorkspaceToolkit.lintAmbiguities(originalPrompt);
    const secretFindings = PromptWorkspaceToolkit.detectSecrets(originalPrompt);
    const costSim = PromptWorkspaceToolkit.simulateMultiTurnSavings(originalPrompt, metrics.tokenSavingsPercent);

    let mascotMessage = "Calibrated for maximum reasoning precision: high-density tokens, invariant constraints, and zero conversational fluff.";
    if (currentAudience === "explorer") {
      mascotMessage = "Friendly learning mode active: intuitive real-world analogies, step-by-step scaffolding, and clear explanations.";
    } else if (currentAudience === "architect") {
      mascotMessage = "Staff-architect precision active: formal Hoare invariants, strict schema validation, and maximum signal density.";
    } else if (currentAudience === "executive") {
      mascotMessage = "Executive decision mode active: strategic deliverables, risk trade-offs, and clear ROI contracts.";
    }

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>PromptSmith Studio</title>
  <style>
    :root {
      --bg: var(--vscode-editor-background, #080c16);
      --fg: var(--vscode-editor-foreground, #e2e8f0);
      --card: rgba(14, 20, 36, 0.75);
      --card-border: rgba(255, 255, 255, 0.09);
      --accent: #38bdf8;
      --accent-glow: rgba(56, 189, 248, 0.25);
      --emerald: #10b981;
      --purple: #a855f7;
      --amber: #f59e0b;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      --font-mono: "JetBrains Mono", Consolas, "SF Mono", monospace;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background: radial-gradient(circle at 50% 0%, #111827 0%, var(--bg) 80%);
      color: var(--fg);
      font-family: var(--font-sans);
      padding: 12px;
      min-height: 100vh;
      overflow-x: hidden;
      font-size: 11.5px;
      line-height: 1.45;
    }

    /* Top HUD / Mascot Header */
    .hud-header {
      display: flex;
      align-items: center;
      gap: 12px;
      background: var(--card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 10px 14px;
      margin-bottom: 12px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.08);
      user-select: none;
    }
    .mascot-avatar {
      width: 48px;
      height: 48px;
      object-fit: contain;
      filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.6));
      cursor: grab;
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      flex-shrink: 0;
    }
    .mascot-avatar:hover {
      transform: scale(1.1) rotate(-3deg);
    }
    .mascot-avatar:active {
      cursor: grabbing;
      transform: scale(0.95);
    }
    .hud-meta {
      flex: 1;
      min-width: 0;
    }
    .hud-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2px;
    }
    .brand-title {
      font-family: var(--font-sans);
      font-size: 13px;
      font-weight: 800;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .brand-title span.pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--emerald);
      box-shadow: 0 0 8px var(--emerald);
    }
    .license-badge {
      font-family: var(--font-mono);
      font-size: 9px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 999px;
      border: 1px solid rgba(16, 185, 129, 0.4);
      background: rgba(16, 185, 129, 0.12);
      color: var(--emerald);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .license-badge.trial {
      border-color: rgba(245, 158, 11, 0.4);
      background: rgba(245, 158, 11, 0.12);
      color: var(--amber);
    }
    .hud-sub {
      font-size: 10.5px;
      color: #94a3b8;
      line-height: 1.35;
    }

    /* Template Quick Chips */
    .chips-bar {
      display: flex;
      gap: 5px;
      overflow-x: auto;
      padding-bottom: 6px;
      margin-bottom: 10px;
    }
    .chips-bar::-webkit-scrollbar {
      height: 3px;
    }
    .chips-bar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
    }
    .chip-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.09);
      color: #94a3b8;
      font-size: 9.5px;
      font-family: var(--font-mono);
      padding: 3px 8px;
      border-radius: 6px;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .chip-btn:hover {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.4);
      color: #fff;
    }

    /* Cognitive Level HUD */
    .panel-box {
      background: var(--card);
      backdrop-filter: blur(12px);
      border: 1px solid var(--card-border);
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 10px;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
    }
    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .panel-label {
      font-family: var(--font-mono);
      font-size: 9.5px;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .badge-pill {
      font-family: var(--font-mono);
      font-size: 9px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .pill-cyan { background: rgba(56, 189, 248, 0.15); color: var(--accent); border: 1px solid rgba(56, 189, 248, 0.3); }
    .pill-purple { background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); }
    .pill-emerald { background: rgba(16, 185, 129, 0.15); color: var(--emerald); border: 1px solid rgba(16, 185, 129, 0.3); }

    /* Audience Selector Tabs */
    .button-group {
      display: flex;
      gap: 4px;
      margin-top: 6px;
      overflow-x: auto;
      padding-bottom: 2px;
    }
    .pill-btn {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #94a3b8;
      font-size: 9.5px;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: 6px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s ease;
    }
    .pill-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #fff;
    }
    .pill-btn.active {
      background: rgba(56, 189, 248, 0.15);
      border-color: rgba(56, 189, 248, 0.45);
      color: #38bdf8;
      font-weight: 700;
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.2);
    }

    /* Lateral Brainstormer 3 Divergent Vectors */
    .vectors-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
      margin-top: 8px;
    }
    .vector-pill {
      background: rgba(168, 85, 247, 0.05);
      border: 1px solid rgba(168, 85, 247, 0.2);
      border-radius: 6px;
      padding: 6px 8px;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .vector-pill:hover {
      background: rgba(168, 85, 247, 0.15);
      border-color: #c084fc;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(168, 85, 247, 0.25);
    }
    .v-title { font-size: 9.5px; font-weight: 700; color: #e9d5ff; font-family: var(--font-mono); }
    .v-desc { font-size: 8.5px; color: #a855f7; line-height: 1.25; }

    /* Target Category Tabs */
    .category-tabs {
      display: flex;
      gap: 4px;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 6px;
      margin-bottom: 8px;
    }
    .cat-tab-btn {
      background: transparent;
      border: none;
      color: #64748b;
      font-family: var(--font-mono);
      font-size: 9.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 3px 8px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .cat-tab-btn.active {
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.12);
    }

    /* Benchmarks Cards Grid */
    .targets-scroll-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      max-height: 160px;
      overflow-y: auto;
      padding-right: 2px;
      margin-bottom: 10px;
    }
    .targets-scroll-grid::-webkit-scrollbar {
      width: 4px;
    }
    .targets-scroll-grid::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.12);
      border-radius: 4px;
    }
    .target-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 6px;
      padding: 6px 8px;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .target-card:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(56, 189, 248, 0.4);
      transform: translateY(-1px);
    }
    .target-card.active {
      background: rgba(56, 189, 248, 0.12);
      border-color: #38bdf8;
      box-shadow: 0 0 14px rgba(56, 189, 248, 0.18);
    }
    .t-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      font-size: 10.5px;
    }
    .t-score {
      font-family: var(--font-mono);
      font-size: 9.5px;
      font-weight: 800;
      padding: 1px 5px;
      border-radius: 4px;
    }
    .score-green { background: rgba(16, 185, 129, 0.2); color: #10b981; }
    .score-yellow { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
    .t-bottom {
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #64748b;
      font-family: var(--font-mono);
    }

    /* Telemetry HUD Quick Strip */
    .telemetry-strip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 6px;
      padding: 6px 10px;
      margin-bottom: 8px;
      font-family: var(--font-mono);
      font-size: 9.5px;
    }
    .telemetry-val {
      font-weight: 800;
      color: #38bdf8;
    }

    /* View Mode Switcher (Compiled vs Diff) */
    .view-mode-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .mode-switch-btns {
      display: flex;
      gap: 4px;
    }
    .mode-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #94a3b8;
      font-family: var(--font-mono);
      font-size: 9px;
      padding: 2px 7px;
      border-radius: 4px;
      cursor: pointer;
    }
    .mode-btn.active {
      background: rgba(56, 189, 248, 0.15);
      border-color: rgba(56, 189, 248, 0.4);
      color: #fff;
    }

    /* Adaptive Dark Code Editor */
    .editor-wrapper {
      position: relative;
      margin-bottom: 10px;
    }
    textarea.prompt-editor {
      width: 100%;
      min-height: 130px;
      max-height: 280px;
      background: rgba(0, 4, 10, 0.55);
      border: 1px solid var(--card-border);
      border-radius: 8px;
      color: #f1f5f9;
      font-family: var(--font-mono);
      font-size: 11px;
      padding: 10px 12px;
      line-height: 1.45;
      resize: vertical;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    textarea.prompt-editor:focus {
      border-color: rgba(56, 189, 248, 0.6);
      box-shadow: 0 0 16px rgba(56, 189, 248, 0.15);
    }

    /* Interactive Diff Viewport */
    .diff-viewport {
      display: none;
      width: 100%;
      min-height: 130px;
      max-height: 280px;
      overflow-y: auto;
      background: rgba(0, 4, 10, 0.55);
      border: 1px solid var(--card-border);
      border-radius: 8px;
      color: #cbd5e1;
      font-family: var(--font-mono);
      font-size: 11px;
      padding: 10px 12px;
      line-height: 1.5;
    }
    .diff-del {
      background: rgba(239, 68, 68, 0.2);
      color: #f87171;
      text-decoration: line-through;
      padding: 1px 4px;
      border-radius: 3px;
    }
    .diff-add {
      background: rgba(16, 185, 129, 0.2);
      color: #34d399;
      font-weight: 700;
      padding: 1px 4px;
      border-radius: 3px;
    }

    /* Primary Actions */
    .action-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 6px;
      margin-bottom: 10px;
    }
    .btn-primary {
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
      color: #fff;
      border: 1px solid rgba(56, 189, 248, 0.5);
      padding: 8px 12px;
      border-radius: 6px;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.15s ease;
      box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3);
    }
    .btn-primary:hover {
      background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(2, 132, 199, 0.45);
    }
    .btn-secondary {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #e2e8f0;
      padding: 8px 10px;
      border-radius: 6px;
      font-family: var(--font-mono);
      font-size: 10.5px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-1px);
    }

    /* Passkey Pro Box ($9/mo or $10 Passkey) */
    .pro-box {
      background: rgba(16, 185, 129, 0.04);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: 8px;
      padding: 8px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    .pro-meta {
      font-size: 10px;
      color: #94a3b8;
    }
    .pro-title {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 800;
      color: #fff;
    }
    .btn-sub {
      background: #10b981;
      color: #042f1a;
      border: none;
      padding: 4px 10px;
      border-radius: 5px;
      font-family: var(--font-mono);
      font-weight: 800;
      font-size: 10px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .btn-sub:hover {
      background: #34d399;
      box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
    }    .mascot-stride-stage {
      width: 64px;
      height: 66px;
      position: relative;
      flex-shrink: 0;
      cursor: grab;
    }
    .mascot-facing {
      width: 64px;
      height: 66px;
      position: relative;
      transition: transform 0.16s ease;
      transform-origin: center center;
      filter: drop-shadow(0 5px 12px rgba(0, 0, 0, 0.65));
    }
    .mascot-facing.flip-left {
      transform: scaleX(-1);
    }
    .mascot-layered-rig {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .pose-front,
    .pose-side {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      transition: opacity 0.14s ease;
      pointer-events: none;
    }
    .pose-front { opacity: 1; }
    .pose-side  { opacity: 0; }
    .rig-state-walking .pose-front { opacity: 0; }
    .rig-state-walking .pose-side  { opacity: 1; }
    .rig-layer {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
    }
    .rig-ground-shadow {
      position: absolute;
      bottom: 2px;
      left: 20%;
      width: 56%;
      height: 6px;
      background: radial-gradient(ellipse at center, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0) 75%);
      border-radius: 50%;
      transform-origin: center center;
    }
    .rig-layer-leg-l  { transform-origin: 36.1% 72.6%; }
    .rig-layer-leg-r  { transform-origin: 48.4% 72.6%; }
    .rig-layer-upper  { transform-origin: 45% 65%; }
    .rig-layer-hammer { transform-origin: 57.6% 55.6%; }

    .rig-side-leg-near { transform-origin: 51.2% 72.6%; }
    .rig-side-leg-far  { transform-origin: 51.2% 72.6%; }
    .rig-side-upper    { transform-origin: 48.0% 66.0%; }

    /* 1. Front-Facing Idle Breathing */
    .rig-state-idle .rig-layer-upper { animation: gentIdleBreath 2.6s infinite ease-in-out; }
    .rig-state-idle .rig-layer-hammer { animation: gentIdleHammer 2.6s infinite ease-in-out; }
    .rig-state-idle .rig-ground-shadow { animation: gentShadowIdle 2.6s infinite ease-in-out; }

    /* 2. True 90-Degree Side-Profile Stroll (Hands Clasped Behind Back, Scissoring Strides) */
    .rig-state-walking .rig-side-upper { animation: gentSideTorsoBob 0.31s infinite ease-in-out; }
    .rig-state-walking .rig-side-leg-near { animation: gentSideStrideNear 0.62s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-side-leg-far { animation: gentSideStrideFar 0.62s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-ground-shadow { animation: gentStrideShadow 0.31s infinite ease-in-out; }

    /* 3. Front-Facing Gold Hammer Forge Strike */
    .rig-state-forging .rig-layer-hammer { animation: gentForgeStrike 0.24s infinite alternate ease-in-out; }
    .rig-state-forging .rig-layer-upper { animation: gentStrideBounce 0.24s infinite ease-in-out; }

    /* 4. Gentleman Hat-Tip / Monocle Salute */
    .rig-state-salute .rig-layer-upper { animation: gentSaluteBow 0.85s ease-in-out; }
    .rig-state-salute .rig-layer-hammer { animation: gentSaluteRaise 0.85s ease-in-out; }

    @keyframes gentIdleBreath { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-2.5px); } }
    @keyframes gentIdleHammer { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-2.5px) rotate(-5deg); } }
    @keyframes gentShadowIdle { 0%, 100% { transform: scaleX(1); opacity: 0.55; } 50% { transform: scaleX(0.88); opacity: 0.38; } }
    @keyframes gentSideTorsoBob { 0%, 100% { transform: translateY(0px) rotate(1.4deg); } 50% { transform: translateY(-3px) rotate(-1.0deg); } }
    @keyframes gentSideStrideNear {
      0%   { transform: rotate(-26deg) translate(1.5px, -1px); }
      25%  { transform: rotate(0deg) translate(0px, 0px); }
      50%  { transform: rotate(24deg) translate(-1.5px, -1px); }
      75%  { transform: rotate(0deg) translate(1px, -3px); }
      100% { transform: rotate(-26deg) translate(1.5px, -1px); }
    }
    @keyframes gentSideStrideFar {
      0%   { transform: rotate(24deg) translate(-1.5px, -1px); }
      25%  { transform: rotate(0deg) translate(1px, -3px); }
      50%  { transform: rotate(-26deg) translate(1.5px, -1px); }
      75%  { transform: rotate(0deg) translate(0px, 0px); }
      100% { transform: rotate(24deg) translate(-1.5px, -1px); }
    }
    @keyframes gentStrideBounce { 0%, 100% { transform: translateY(0px) rotate(1.2deg); } 50% { transform: translateY(-3.5px) rotate(-1.2deg); } }
    @keyframes gentStrideShadow { 0%, 100% { transform: scaleX(1.14); opacity: 0.65; } 50% { transform: scaleX(0.82); opacity: 0.34; } }
    @keyframes gentForgeStrike { 0% { transform: rotate(-28deg); } 100% { transform: rotate(24deg); } }
    @keyframes gentSaluteBow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      35% { transform: translateY(1.5px) rotate(9deg); }
      70% { transform: translateY(-2.5px) rotate(-3deg); }
    }
    @keyframes gentSaluteRaise {
      0%, 100% { transform: rotate(0deg); }
      35% { transform: rotate(-32deg) translateY(-3px); }
      70% { transform: rotate(10deg); }
    }
  </style>
</head>
<body>

  <!-- Top Interactive HUD -->
  <div class="hud-header" id="draggable-hud" title="Drag to reposition companion, hover to salute, or click to toggle side-profile stroll">
    <div class="mascot-stride-stage" id="mascot-drag-target" onclick="toggleMascotStride()">
      <div class="mascot-facing" id="mascot-facing">
        <div id="mascot-svg-rig" class="mascot-layered-rig rig-state-walking">
          <div class="rig-ground-shadow"></div>
          <!-- Front-Facing Pose (Idle Breathing, Gold Hammer Strike, Hat-Tip Salute) -->
          <div class="pose-front">
            <img src="data:image/png;base64,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" class="rig-layer rig-layer-leg-r" alt="Right Leg">
            <img src="data:image/png;base64,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" class="rig-layer rig-layer-leg-l" alt="Left Leg">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAABOs0lEQVR42u29d5ykV3Um/Jx77xsqV3Wc6clZmlEcRYRAAZFFpgev+ZzXeAFnYxuD7Z4meA2LwxpjLMDYhjWYGcyCSQIkMRKSEMqjyXl6OndXDm+84fvjrW4NOHy//RYJBtXRr1VS9XSrS/3Uic95DtCznvWsZz3r2ZJR96Nnz4Lx5xq4xsbGGAC+fv16du2119Lhw6ME3Pv/BUgGgN100008+ZpDAMZ76OnZf25jY2NsdHSUj46OcgCc6N93bN3nCQDt2bPHPnjwoG2MIcYYGGP4D76OAcn3Nsb0POb/Rbj5yXpBRPjc5z7Hd+3aZQDoH/h0bmhoaH1//8hGBT2Sy6XXOsJeZQz1RzKy4yiCZVkrjQH5nj9n2ZZybCfmFq9wzs/Ygk2k08UTW7duO/3hD39gWkr19He+6SZh9u1TRGR6sHoOAtAYQ7t27WJ79+5VAJBKpXDnnXeu/Nznv3h5FMWvK5fLFwlm9a0cWbEqnUqVHMeFgUGn1UatWsHCwiIWK4tot9vwOj7iMIRUEkorMBCIE4QQ4NyKLUvMFEt9k9dfd93kVVdd9aVf+IU3301EZQAYHR3le/fu1QB6QHyuAHB0dA/fu3eX6gIx/Z73f+hF09OTPxsG4S2FfL5/7do1GB4aRqlUBDGGwO/oWrWh5+ZnMT01Q9PT01hYWKRavYrADxBFIaIogtIKSiujlYaBgtbaQJMgAhjjcN0U+gcHsWnzpnNbtm37h1/9rf/68a1rtk4tvSF63vAnHIDdXzIB0MaY/J9/+G9Gn3zsiV+bnVu4LJ/N0kXbtmHTpo06k0kb3/fgex4FfkBeEFCn3UatXsPi/AIWy2U0Gg202i0EQQgZR5BSQmsNpRW00TDGwBgDMsk/aWOMVhpSaghh8aGVq7Fl67bZ66+96o43vn7n/7j66ld7578xevYTVgWPjY2xW265xTDGzEc+8vHR//lXf/N39+7b9yvTU1Mrcpk0+vv6NAHUbrdYq9lkYRgyKRVpaNJaI45jRFEIPwjQ6XgIAh9hGELGMZRS0FrDGA1tDGA0oM0y6LXRBAMGEONcMM6Z8XxPVWrtQiOkm2cruOGF119x1yc/+Y7G2NgYu/fee3ue8CcJgGNjY2x8fFwbY7KBpL/86le/+sFHH314ZafVlpbg0NowrRSzOCfXTcFNubAtC5xzEBGMVpBxjCCM0el04HkePN9HFESIpYQ6D3zG6G6cSDCkjYHRBslfABnAgIhzwSwnZchNydLIlk3rt1760je9+hX3vOMdv7U4Zgy7d3y8B8J/x8QFCj5jjBn5o/d+4DNf/Jcv3FReWNCWbRkiEn4QggsfscrBEGDIgDMOzgU4Z4AhaKEhuoBMPhiIAE0mQVQXXAAh+YSBMZSAMSm1sZTdGUqahAQCIyLBLKvVakmdGtgRZehTd9zxpy+e2b271csJ/31jF1rO131k//OvP/n3X/nfX7ppfmYmEoIzLRXXSkMpBdUNr1prMBAYY0+D0OIQwgLnFizOupVt0usjoq63o8ThLePRgJZAaQyMSYC9jEAyACMwISAsG4xxUW804v41W67hg9f+0vj4uN69bx/vwe0CB+Du3aD3vOc9+pEnju3ev//AS+Zmp+NUOmUrpWBgkrxNayhjIJVGLCWkVgAMGGewhIDFLXAuIASHsC0IIUDEwYiBESWA7Q7jCJTgkM6r2YgSZH5f75mBiIF416sKC8IW3IsiLdzcWx//2tcGx2+5RfUa1hdwCO6GMG2MGfrsv9z5q9VKFdlsTnQ6rcRzdfM1ZRIvKOMYcSyhpYIxBpwzCEtAa8ASFmzLgmXZsCwLnDMwzpbDawK9JedGIBA0Ei+ozXJwhjFPT46JGBjjYMKB5Thw3BQppanViUvfnDw9BGBx9+7drNcfvEA94N69exkAHDh29gZGvMg4046bJqLkJSSR0gDGQEmJOI4RxyGU0jCaQGBgrOv5LAEhrC74kjyQsAQ8+oE+Vfcz3XEcfd/UJYm+1B0XE7HEuzoubNcFgaFab6v9p6d7rZgLHYCDo6MEACqWt+QLRfT1D2g3nYbgPJlULPmVbu8uiiLEUQypFYzRMDDgLAnDCQgtCM4hRBeAxJajK5Dkg4kXNEvp4Pe5LtP9Gy0VJYyBcwvctmFZNmzLglQKJvRpfX+2h7QLPwfcBwCIlWSZTBZDwyuQzebBLQcg9nTdYACjDWIpEYYRtFTQWoFA4LzroUTywYWAJQQ4FyDGEk9GSz6QlgGXgNEkLZcu6JL2C2CWfCTjYBaHZSch2LJtBL6PtA3cfvMNPaRd6ABc3LtoAKDT8R+0bIGhoSHKF4oQtg3wBCxLeZk2GlorRFGMKI6hu307EIExAmO86/1E4rU4A2foekF6uu9HydeYH6xBQEkNYp4OyQwA4xaE7cJxXXBhaWMMFhcXjt2Qy50aGzNsfHxc9yB3gQJwdHTUAEBa8AWjlekf6Gd9/X1w3RQYsS74kkLEdJvFsUzaMcqoxGsxgHEGzhh4NwxzS4AxDs7401RUc172Z8xSs7n7/ZczzqRKJgKIgRiBcw5h2bBtFxbnCIMAffmUoquvjg8f3turgC/wNoyBMfS1r33hO1HkHRkaHqb+vgGdTmfABP/+6qA7t5VaQsYxtFLQS61lSkLxEtePcw7L6obhJd4fOz/R63o7mPN4gWa5HFn2j8TAhAVuWbAdB2BAHIWI/PDhHsx+AgBIRMYAND4+HgnOH8gX8ij1l0wmmwcX1tP1qU7Ap7SGkgqxUpBKQymd+DTGQDxpmXBi4JR4Py442HKlS6Bu+AUlHpAMJfkfJb5vqRWoCTBEyfcUAtyyYDkWjAagFQr5zGTiwXtgu+Ab0fv27WMA4LXbD3LBMDAwaLLZLISwQIwBBtDdTpvWGlpJSCmhVNythNEN12y5L8hFAsilSpZoqcfc7bF0gW2WxyJL7wiTNF+IQMx0PauAsF3YtgNlDBDH2LZ+hd2D2U8OADUAeK36ARnHjXyhT+TyOSO4DQLrTi+eztGkVJBSQkq1PCUxMCBKgMhYMopLKmF+Xq+Plr1cgsGltgx9X5749MSYJXkgtyGEnYRzEK83qnr//mPfBoBDhw71GtAXOgC7JAQqFr1jvuefKfX1oVAoGstxEi+2FBq7xYPSeplepZSCMQBbGpsxJADs9gIt0c0BDS1j7N+lSy47wqT5vAxUJGE9aXILKKUBJQ0TcbMHs58QAAIwe/eC3XLLrraS4UQ6k0ap1G/S6TQYCTxdIyR5oNYKkYwRhTGUTKrjJGwmjGbOOVh3ErJc9bKlEuPpcdx548DzmtGm6ye7YZpRt7AREFxASYl0yqarr7rE6sHsJweAyxkY59bDjptCoVhEOp3tjtO+31OZ7lhuqRI2JqFcEUv6gUn/j3fnuIlHZEhICaCniS7A033Ep3uEtAxBEHVDOk/6jJxDGQ3SxqTT6V7v7ycJgKOjS2NfuV+Gvi6VSpTNZcAtDjB2fs8GWikopSGVhDY6YTZ36S0J/Yp1wcjBKKmCk/yQlqcd5/cFsfTcUpg+L1wzMKALaiIGKZWxLMaH0ukeDesnCYC7dyePjcWp41pLlslkWDabg7DsZSJBQkpIpiJKygSEcQylJAADzhPQETEILmDbFhzHgeACxDgMGBLm1FI8TihajLphlnfHc+w8ZgwhqcQZhwGMsG3ygvjU4vR0Ofm5d/eKkJ8EAI6PJ/7I87wGgR3LF4pIpdJGCOu8RvFSzy55BGkwRtAAlAGUMVBKGqMiaBVDxwpaGzBu4AiGtMOQchhsy8DiAJGBNgSpDMJYIYwNImkQq2TuTCBwloCUiIMYtGU7aAd64pdf+tJ6l9zQAyB+Aij5Sw24P/3TP63/3ae/MJdKp7al0xlj2U6XSZpEYt5llUZSodUO0fEDxF4TLGOQTmeMSKdQyqbN5nVEz7vSQNYItcU0piZmMTdXRaXaRLXRRqsTQWoNYwixIviRRsuTaPoa7UAj1ARJhCAG4m4TUhtD3GgIruyXjo7yw3s/30PaTw4AARhDH/rQXxHnCLkQSKXTsB0bnFvQFCOSGlIr2I7GYA7YuZHwguelsWnHWhPrfvICi4rFQWM5moYHGwYBp/B0E0cig0UKoOMOZOxBRz60iiCMgWsx2BkLHICUQCsAOiGDNALMcYCMDaQV/DBCqAhZG+AgkySsmpamOT3I/QQA8I5HHxOvuPo3wi985Z4HR9ZsfEk6m9Wu7bJYJvnfUJ5j00gK1140iBuuXI3Lr1iDgXVp0CCjTixMGBLC9gnIZmSePHaS1q/OgEmCHylESkNqQCqCNEkuqAwgNYFiDQkgkhphJBGGCpH0kTUxNg67uOKyCIM7tFlgdVNvZxBKZT6yd6/8i2XgjfKbblqgobe/3ewZHdU9QF6gANzausoAwMBAUXBBsB0XwuLYuiaFVSmDUkqjkOMopmIQYlSrLcyUT4OXmthw2ZWUc7OozVbQCYumMLzR5Pti8tqLsIXohm4DQ+rpxSOcPyPGMg+LJRM8SBWj44ewWYyXXzNAqaFBPHSccG8lZz/44INDz3ve8ySAiBHV7r0XwL33ggCM7tnDtx8aNePjpHsAvIBscXGpEAkPGhHJkf4Mu2W7i5njbbSbDQTkwLI5OqFEEEkYYyBSaWy5+jpoDRw/cABrt201dioHKRVBL4C4AOPUbcUQYFgXcN11TAMYKHBDyfyDDAwYiHFonkItsvHg/jKOfOiL8NWdLAyhZxaql937RdyTSqeMsO3gRa9405EtWzZPb9684bs7L9n0vVtuuWUKAPbsMXzXLlI9AF5YvUDMzy6eu6iYi2/dodyv7K+Y422fQgnYNsBZwmKRSkMqhb5CBo3FCibOzoGsdThyRKKQOYuVIzbOTk9hZdbqdri7M2ICBBmQ0d3tIwZpbHhGoCUZ6iGhEwK+1IjaGsFMA/4T84iCh5AouhEcx01blrWVuIBluygNrLjcDxXKLYnFDpqf/tL9nx6ww4++/OV06LkKQnEh//Dr1o2Ii9bbpGY0iAmybQtRHHfHcMlHLBWgDKqLNXRa5+D2XWvypSLSaQ7HWUuLEw9hcX4OG1esRibFkXM5UjYBJBAjg4Bl4GsLQcjRrCu0/QhBECOWiX6MMTJZTCeDlE3I2s7SSiclo7tIQ0dQYYjaQqC9xiIq85NsYW4q3/bV26+6audPf+HuJ37l9S+ivXuM4bvouQVCcQGIJ5n/oH+p1xXDa1OW5XaYI1OOLUSXGZ30+ZI9YSWBKIpBrIMdN15iQqyn8syUcVFFtdwwMxOTtHHHGhw7VcbhSYPDC3mcbnBM+T4qHQ+NZhudjocwbkJLCWPipT10OFwvj+poScbDJGugoC5RgQwDETQUjFZMRSFivwWvUTaTJw7Ig49eUXrpG3/6019+4KB5FdHnjTGM6LmTE4of/3Xg/0TSIgqLUhKYsLRl22CcLa9XJhuaGhbTiKMYnU4EFTUojGfhhXmanG6b2clFansCX/r2Uzg7sYjFSgONlodmsw6v1UAc+TAyBpGB6KorMG4nDWdwGEqmbKa7Tqe1hu7S/013FGPO05RJRoAcGkAUBgRjrNMHvqf21quO9Za3f/zg2fJhIjo8Zgwbf46AUPwYSW4wANi7Fxgc3Ef79u3G+vU/L4goABJNGAA4fPgwff3rX+ejo6MmMlwZGDDHpbQroJVEFIdgFCOOBUIpUPEcMK8PsVPEZ/eexPzCQVSqLVOu1lCtJvJstWoVYdCBjEIYLdGVvoLdzQmXh8A6mScbAGCJaBFxDkYC4LwbipM/uyTnlmwSJDsqy19rEgKDlBKWY/PK9Bn5jS/uLQ4VU79mjHn7rl27qKcP+GNgR4+f+ExlYb7y3ve97x133nln+G+A25z8A23Rn8yc3R/f/fl/tu767lEEUiCdK8HJ9sF2c4g0oVpvYmGhjFp5EV6nCRX7YEqCG5VovuiEqiUNEiq/0pBGdz3a00DqUk+7ejMERhzEGBQXIG6DeLJbIqyE4IquYsMSeTVZGX2aGAsAjAvYTtqk8v140UtfWfnz9/32eiLq/CfpR88D/pDlNsyddz7Yt3Pn9l8LouDmOAoVAUYqpE4ee+qGytzU1Ne//vU/+frXvy6PnZkegIouqy7Wd2jCZb/+7j+7PAo9Uy5Xue8HCOQwfN+HX64h8CYReh2YOACpCDYMBAOybEkJKwFZJBXCWCGSEpEyCWsGS4pXgAK684wEDeq8naSExpU0BDWLwLgNLmwImWzHCcuCEDaIs6eJ/XoJjN01URBICNJaYWZ2OvXAw4e2AHhybGyMxp8Dkm7iRz7YNYYOHTrxzlgGv3v00GFkczlEUYT9T+7HvnvuwvDwUOnOfb+0Z2Zqam2o5NpOqwUlNXzfg+97CMMIliCyOIFrBSgJDg2bETKMgQMgi6CkRhwr+Eoilgk30GaEFGcoWQzCdZ+mYREguur4nCUezxBB60T1XBuNUCl04hi1UKIDBq01wqgNEIcQDmwrgmXZcFIGtpsGW9q6s87TnukGIc45pJJKMGRiHVwB4MkdO3ZQLwd85jfdNACcOXPmT6anZy49c/bUbV/4ly/I+cWKyGVyxAXnJ06fyXqd9o1B4EMpbShZUzO2EMg7FsvkUkRagXQM0hxhTPCjEO0wRhhHUErDIULB5ig4AinXgWsJWILBZkneJijJ0dpMILIzUMJCJGOQVrC1REqGSDGTbL1194e1SRg0fhThbCQQZ/sgiNDyPJQrVbQ7DQjuJGwZYmBuBmSJpFAiWvaxjCV5pCBG7VZLBm1/qquF06uC8QwLTd58881sYHj41mPHZh8dHs5/8XWve93LHn30MXz3e4+ILZs2odmsw2IchUxGD5aKxIiRkoaY4LCIgRkNHbYReB4arQ6qHR9KxXBg4DJg2LZQyKaRdWykXYGUYBA8YTybpXVeYjAwaKX7kF+9HulsPvF8IhEs8rwOWvU6ZHUOxbAOS1iQS3Wu0XBdG8aPMesI2KkMBoYGsHHdelTqdUycO4dGqwEwBm47EBDdLbpEDo5YIunBGTdc2IwLXlm/euB7XQDqXhHyLNjhIyf+Bsa8wXZSjysZvXTi7Bm8e/f76czpU0jbNob6++HaNgw0ZBSCgYO7aRgYxH4HfqOMeqOCeruDvC0wkM0glc3DSbkgo+CEPopcw7YsOIIj7dhwbAuuI2BZNlzbQsvOQq27BIVCHsyyl7UB41gtS/U2my3UTx9FujIBRzBoDcTaQGoFGYc4Y7JAvh9axuDMQjZXALMEJs6dw+FDR5EulJAr9sGy7GQHmYsEhJyBDKlUJs8vu/ziz//N/xh/U5fX2GvDPEM5H9u9e7f5uZ/7r9eEYeT5fvvLmXTmv02cnXhZPp/WwwP97KYbrkPDC+E1G1io1mFbQLvdQBQGyOX6MLRyHYxWCMMQ1XYHJpa4fmQAdrEIP9uPVC6PvlIJbiqFVq2MwdoU1vQlrOmM6yCVdpByHAjHQdpmKJsUzvIswlYLLPLApQ8TB9AgMDcPZErIZTKwd+xEPJlFsXoWigmEcSJ8pGILVi1Eo+Nh1YphuKk0pE4kO6699gYMj2zAPfd8E5l8KQEcY10PyMCZMFob5LNZs2p44JNEpLvq+r0Q/MOuePclMrVmfHxcv/q1b7g8l8l9sFAsHfH9jgk6bVNdXGClXBr9adsMDgxiyzVX0Y3XXYk4jDE1dRYTp09jfmYe5VBCKo12EKDaaeOm1X1Yv2YtojVb0D8wCMey4DouMtksOoEHd66IK4azMGCwbbYsTimsRBFhJRFSszWEqob+FEM67UKIFDjjiJRGpT2LqZrGoijCrNoMjRDZsIlU2kasYgRBgEzA4AsHba8N23FQLBSRyg+gE2nsvO6F6IQxDhx4EtlcfpllwxI6jc7m8nzL5vV3vvsdv/aNuF1h4+NvUr1JyA/R9uzZwymZccoHHzzY98ADD4hCqbSNG1M4d+7c9blCAflcCmePHcJsHJtVA33m537qtXTFZTvMhk2baW56EpOTI2Z1f5HKU9P4yiOHEMYh2kGE4b5+rFuzGutf+FJYmQxkvQoRNmGpBjLMR5oYNm1eg1VFO9kB6fbolooBpQ20kbjM6ocaTKMjPdSjNmLLwJCBiDRGUkVsXCmw0GjhicosyiKLfoRglotApqA0oVhykR9cA8EZjDEIoxDt2Sms2XwZ1m3ahHypD9PTU1BagttWQt0HKWKCrxgemtxxyfpfIUqukIyPj/dmwT/kXp/64he/OLJqzfrfFYJu6SttSIFoXb1aNl6rqRfn5nkunYLxWpBSUs3v0II3Y6658jJqNJvwOy0Vzc+TV6viu8cnyIsTDzK8YgQjLnDJDc+HNTSMxacewuUr01g1kofFCJwAK+0ilcmCc9ZVRLUSIp9WUDJGFEUIO4mQ5ZRqoh4p5EuboL02OvNnEMsawAkldzVWFUq4QbRwxrSg4jRiCDg8OfuQMxFSK1bA4gx+FCGWBMMsnD11BCtXrzJXX30VHrj0CnrqqcdRSKUA4soYxtevXd158YtufMsv/+yuc2NjY8+pOfCzAsB9+/ZlZuYqf9ls1F/cajTXPvLowyiWCti8eTO0UmiUF/jM5DQKpT4wrWBzgeOnz8Ap9BGMRnl2xkwfOcKfeOIA7nzyEDpBrNKOw0PFcdGWrRhAC8PrNuL449/Dyy8exEAxC6/Vgui+NBFLCGik0lnYrgMuLBgQdBwjChSijg8yEc56ZQTuGnPldS+j9twM5vbfD8cTEFEBmns41ziIdmMVNo2sw4YVwGK1jXaQaMLYuRwK7VlUy/NI9/WDtAIRR64wgIsuvx7TEyfhtZt06RVX4uDB/QYgyS3X2r5tS+fGGy4d/aX/Z9edY2NjYnx8XAI9OtYPy/NxIlKbtm270bL4LzHGUK/VZBSF7O677zGl/j4WeQFqCwvECYhDH2CEh/cfhBfEeMHFl6LVaGH+7BmyiNqp9Zsn+qarW3NhZFWrFdM/OGg2rFvDhuwQptPArduGsHZFCV69hqJroepHcBwXDhkYz4OVy8FJpUGWlVS2ZBB7GiyMMVGbReCsMpc/bxfmjzyC4PQTGCoQqG8V2q0WOtU2BkLCXPMsSukC0o4N1+GQKgbTHDHZGMim0fHqUPkiKvML8KMYbG4R+b5BXPO8G1EtV+DajraES9lCv3Xp9q2P/sJPvepdO3fu/NZNN930nATfs5MDStbn60AJy8La9WtFKpPSYRgx3w9No1olh3PUgxaEZWOmXAO3BNYOrUChUEB9fk5xv8OLGzb+/vjbXv83H/nrv33x4RNTbz926vRrVqxYQevWjpi8DujmK9aCV84AvofFeht3HZ4x+VWbzNBwnjamQtqQ4tCRBBMW4KZAWgNRAB0E8GIPU5UaLn3+62jh6CNQM4ewadt6FAoZIOrAa9RRzi5icZYhoBamypO4aOVmOILBpARYnDSUc/39SJ2bRmgkhlevQhARNLfw8P13Iw592nnNtebJgwfZxi2bwhuuveoTv/+bb3kXETWfq57vWQOglKG0bJsToIMgQDqVpmuu3kmnz5xFu1qmdqWMoyfOwHIspGwHW7duw8DgAGyLadVsMM4wkb3yyj1RGNEv//Ivfstx7G+998/++opLtmx55+Tp02+yONeDpRxrNRgWOj6+cHDevPE3x7Bq7Rr2ta9/w9w/N2lKeY5VAqQIYE4KpGIYraDbHdQ6FZiYo3zoUXjlCVxz7WUYXjOERrmGqbOTaNcbcARhRX8W3B7GqfoMfNaBzQVkZMBkCCE4WCqLoVIex+dn4K7ZBEswbL5kp77q+lto7z/9I4Sbp8uvvPKJUpb9wh/93tv3v/O3fgWjo3v4+Piu5yz4nqUqmJOUErbjIlcoolopU7FUNFvYBnpkZhIzU9PIZbKwHAsrV6zEytWr0F/Mol2tG+W1mUln/vWatWvLe/bs4QDwgQ/cxX7vV9/y5OnTZx88d+rMrnw6beJmDSmb44kTU+b2t/w2XXrZDnzyE3+Hxx571Nx1112EN9xKv/66GyGXFo6iECoMoVSEdquBuOljdv5RrF9Twsz0DP72c9/AuXIDnjGIoxBGKfQ5Fl6wfTXyqzmO1Y7hsvylSDsOWCoDX3IEkqG/fwUGFxbQlBKxUjh84Ek2OLAKxU5VNx74Cl350pedfsHoz07+we/8Ovbs2cN37epd0nzGAcg5Nx2vjTCMwFgy9pJKmlQmhR2XX0YuAyrVOvJDKzA01I9sJgVSCnGnSQ5netXmLZ81Kvk97dq1S+3ZsweHDq1kExPnarZj0cBAFqQ68BtNINNHl+y8GocOHMJdX/uyrnUCOnP2LKbLVUhjwHUMU5uHbDXg1+qAIcQyQqtew0qniDNTZXzv0TO4/oXX4y3XXIoc15CNMhrlCg6cnkdNeYjKVaRiC7KkkbFcBM02oDi4yENkChguhpCcwRlcBTc7iIf/9v24ZkWWrYA01W9++g12dfJ5Z89O71q/ftUDZmyM0XNcuPwZB6AmxYgI9XodXHAYrY2wHYqjiBzXxeCKYTAO9K8dQTaVQex10KyUZYZDZIdXfPXa22773tjYGFvyFqOjo3rXrl3mF3/rt74yOz1zUnC+2RJMh1CsUMjDlxq5Yj9k0MHd9+yjjZvW49JLt8OkMzAyAsIIxgvhVSqQgUTWzsAPTsJJFbBi1Qq88vUvR6kvh7BRgx/HgO2iNLICt68awanmAk6d4BgupFBZaKN/qIiMITDF4cUWtOWgWBrExEINxQ398GemcHHJRl+pAK9aIa4D5T3yzZFZy76jZsyNABpm9+7n9BFD8YyKigPwJPsuGV23LFEkGGOnUmS6M9RYaUAnbBWuDVQcoVmp6HhxDtnhlfXhHZeNE5FeCr/fz6AO+o4Vi+SK0AStBrQQuHh90ZizD6Mvk8evveWn6afe8FI4jout60YgUmnoThvMGDCjAalQm59FLp1GscigSWLb2tWwuYHvR+DFfuSyOTBhw3g+DBQee/wBXD68FkZ1QLqB2AshlYHl5OC6KUQig6IzjNRCFfVGE31MI+Qa7coigvk5ZGzB64Ev3ROP7zj4vz9/6wteP/qFb4+NCQC9IuSZoFp1m9ATx46f+V4uK27zA98oqUUQBvA6HtqtFnw/gNYanWoFHTATVhbZyMhq5gyN/MGll176SHdJR513s4vRrl3q1F1fe3df5G9KDeYl033CdlJYzRWp8gGDCsetazOEi7cCdgaKuUAcgff3AYuTQFwDwcBrtiF8hW2D63GuPo2WluhPF8CyacB2kr0PBbB8CQePfw+5SMEtN3Bq/jTahiFn5WGYDRUGQDoHK5WHk+3DyOAInjh3CinZQtay0KzVkCsWkOKAbVuw444RkX89iL6wePiw6YVgPHP33Ywx+uy52WPQ5qVzcwuQMtZxFLF2q4nm4gIizwcHIWg3DNNArlQqO6vW/MHNr3jFJ39wQ8wYQyDSB9tmRe2O99/cATdrL38tiVpsKIwIhoGnLNLEIA0DJCVLwo06kM0ny0q+D+n7iNodyFhh5ebVWMEZGq0qDpx9GOhPY23+YlhcAGQQmgDHDn4PE/c/iOHYRZlmUejrx+zZCQRWC8iWILkwRoMsy4EhgY1bdoLbx7H4+D3wvAAq8CGyaViZDGwOclMuZfr6LoKwcGjv3h4A8cwdl9FEZG66Cb/zFx96Ulu2vavVbI/MzsyYMOhQ7HeAMICJIqgw1MWsy9PFNZ+55ZWv/MToKPjevVA/IA5IBJizzUpf+9Bj2WhoHbmCkynPkLEtsHQOyGbAXAfEOBB6kAowlUXoWhlGG+jqIsJaDe1qC82GD2+uAssisAUDx+Lm4fu+gacOPkzpdBax56M2U4VVaWHj6g0Y2rQGhUIOi5V5xEoj8j1ocDP40tebysnT0KFPIjsAcBsjqzYgPF2EH/YhrDeAWMJxHLhZCyyVQWO+fBxKYcfoKOE5Qj59VgG4RECYmC6/WBFbuWnt8G/d+8D9Hx0aKL1yw8a1fz47M60b9QoL22106nXEjQYGcmkor6nHxsbEjt27zV76frri3oSmrkNEhufy6N9xKdyFU0AcApksSAiYOIAKW8YoQ9prAT6A6iKkUtAyRuB5qM5VMD1XgbFdPHXwBGAxZC5/vtnystdjmxCYPnfS1KZOIZo5QZsdhg03X4P8ihHEcYygVkbcCWCQ7BsbBKawdiO1pUDn6GHYRiUSH1wATCDd3w+/1gAjCTvlwMlmjEnlsdBo7IdWGNy+nXoe8Bk6rWWMEScPHHhFbXLiN+7/wr+8bXhopM6EVQIMVq5di0w+j2ajBYvPouUFmJiaRt/atf74+Ljcs2MH//dIDWNve1vWLa0MmwOrO4W+4iBbOGd0FILVFuC3hW4PbqHQLZGyGWBJUz72HbInjqPoCgRSotHsoNFoI9YGX330CDrpovmZ3/09XPTC2yibLUAIjtT67ahV5kFxCFmdRmvyMMKzJ4Ggk2xmhhFsblBfmEf/1TeBp/PU1kbBsZgMOuS46UT83LIQ1H2oIITTn4XluobSWd4mpzP0vFuOAMC+5wjx9FkFYHcOrBcWapfNH3rq10/f9w21fePgdWcO3w/PzqHmS/ixYqHvw69XTVBZpGNTc5RZuRrPHxy4/o5/+qeBQ4cOVZfvD3a35w6eO9cXTEx+dnZy6pd0JndwTc5eH0/VQa0KWrkBE1/3GnJHNpELgowiLMxPk7jkenNsoUby6OPIqBCMMXSiGPednEFtcC1+5Q/ejUuuvpYcywaHhowicC2hogix1zYiO4jaumsIvAgcewRUm4WMfUglkd5yidn46l+kSnnRzM+X2RBxioI2bN0PZiUXOKNWA5YgOIU8rIyrOeO8kynd+7ydlz42Njb2nD9g+IwAcNeuXcn6NWe3rtp5HauW5/WazcV4pFWh+TNnQbOzfL5cQ6cTgGVKpn/1Bty883pa29cnv/Gd+2+5/wtf+qXHHnnkAwAsADGSDR5l2u2XrFk59JKHnnjkii2XX/OvHK3bvfq86WQGjbzujVRYuRZCSRBjsFMOXNtG7KZp022vNAfSRfreXd/A/ORZhNzC6suuw2+/9W1m5aq1RMYk+s6cQzCGVquDKAyMbVlQcUTQCnr1FmDFethhC24cmB1CkD28iUw6g8knnzStjk/52AcTFmTkw3ALRoZIZzNwBgfgOkLrMKKWO+iltlwzTkRmbGyMepMQ/PCXjXbv3q3fNPrm9//9Jz7xrtGffrO+6qd+WciwDYo6WHFFbPJRSBv8yNSaHXS8CK1aBWFtkWZmpnD/o48Yuzi0ecmLnt9TTHH+xsDv6IKtf61w3a1/tnjf54xfWMfVda+Glcog7rRg5bLQSqO6OA8nlUYmX8Dxg09i6zXXmtTAID383YewcetWXHfjC0z/4Aoq9Q8ijmPU6zWkUmnAAO1WK9kp18neMGfJOVeRTkGUSrAcByxUJvA9TM5MY3Z2Ho2qh2HuQ6YzUHGYTFlaTQgZKZfSWrU9S/ePQGy75o9veNlND/emIM8AAEdHR/n4+LjKZgf+24MP3f+uptdRL752NVP+jClu30VhzNBqRZRO2dqHJF9qeM06a5YXcfbMSXznvm+zaqVGb3jlGy5Boozhd2U7DADyPO+KfDrFSkPDL45nTlxXH96MYHgbicAH2m2Y/gEYGNPutKlQKMF1Uzh94ohJ5wsUBZ7uGxyg619wI1avXWNyxRJZloPFhXmTL5bIsmzMz84gDD0Yo+FYnMhwcE4IQwUtly5U+1CeT2EcGs8LqON1MDU7C0cC4B60sCBlBEEMqlFDCoo73OJ89fqm2HbVn9z6iz//Z2bPHk69OfAPH4B79+4FEeGBBx/4L3Nzs2bT1ot0ZX6Gfe+LH8KLfnUn0sVhZGxmbMGZ4gJaS5ydPIcH7r8Pjz/6CLxaxQwNrMDE5KTXnQ5QIhDZFfhRKoyVgpsv6TAOCtq2jAkjA0UUS4VmrYyaVEjlcmg26jhx5IDJFYrEYTA7M8Nsy8Lxo8fhZLJkOSnTabVg2Q4WF2YMFwK2SPaFwyCgpp+cd2DdEw1aaXiRl9ycMxpSSvL8CAcPHESrE2HEkVB+ByY/AIpCNGNjFtdcRrm82EPDK58cvvm2r1x9+eUHxgDWA98z5wGxd+9eDAz0hZdedgUFfptkYSutufm3ECqDqFYxvufh7NnTOHrkOJ46cADHjhxGs1aFTRqWbbGO74G02fr40XODAGaW78AAShE9zC1xcej5xjDoOAyJJ2cRjGAgGQeGcQudZhWTCwsmlc6g026ZI4cPQ3BOC+0O5k6fQWf6LG64/XVkp9Igzk2hkIPXbtFCu41sNgvXTTT+ojhGGIRQMoaUMYw2kEohDALU603MTE+j6UVYk0/Brp6DyQ9BxTFsMjhRqZl63zr50+O/+dtENA0AvbD7LAFw51VXfOv48WMvPn36JP3u7/8RVq1aY+LPf9O0Wx1q1OpUr1fhBQFgDDjnsG0bUBEMQFEUQRuzul6ulgDMjI2N0ZJKgB+Gd6Gufl5qZRgR01qDMYOg5cGxXHDbonarZRq1GhzHoVa7gzNPPAk/iCAYw9zZc4jLM6jU5vAdzbDqoh0YHhmheqUGy2JQWmN+bgEgQi6bgZtKJQdtBIeKJTrtNmq1GqqLVTSbbUQKGLQVslP7YSwXsAQMaShtZEtzsXrF4KNHH/hS89E77rCuestb1HNt3+NZB+DSSVIy6qsp1/5A4AesIstYnJ0nMENAIgzEuEAmk4ZSGnEcQyoDpg00AMYJs9Oz+s5vfDM6f6JijKH9+/d/sVyp7tNxdDMRRVxwG8bAsix4XgO1Sg0amvKFPKZn5zB7bhJh20MmnUazVofLgIuueyHWbdsGN5VBtVrF5MQEXNeFlU4lqgWCo1FvYuL0BLRS4CI5Zqi0QuCF6HgB4lhBxx0UO4vIhlUYW8Ckc9AGEJal6wpCW1bl2iu2/97FN+xsjY2Nsat74Hv22jDtdjvpwohk79ay7eSqpAGUUpBKQWkDpWVy0617A1ADiGSsiBHfvnXD8wGc2LFjBxGR7vbMOnu+8pX/EtaaX9KxvFbLWNqOQ77v8TAMkMvnYDsuDj91BI16DSbWcBnD5KnTePDRh6CJsGLtemSf2o8gDFBZKGNh6hwcpbDzsiuQXb0GxVIRzHIQG0BJgyjqIFYxtJQgpcBlALtdRadyEtmsC2bloJgNIgGAtJ3OsbBYqrgsft0Lb9j5neea4umPFIDvec97NAD2jne8Y3L/wYN38QP8tjiMtO04TBs8rRhKpnt4cunsAcEYgoGG0QZxFKFaqQ/i+28F69HRUb7r9tvnPvOZz7xuYa72561W600qjuCkHJPN5WhmdhGNag0ylrBJg4c+GpMnceCJx/HwdBkcwIZDh7AKQIHBrLAFbUpljATR1He+jeL6lRi5eCO82EARg2E2uGEQpMF1DEtHsFQIAQOLSwg7DSIOMAHNbMOEA6d/oDawef1rX3P1Ffc/+uijFhHFPZg9SwA0xmB0dJSEEK3//oE/P3zoqSO3TUyc0bbjMqIEeFovyYhi+SovAVCUgJAB6LQ7eOLJpwgY5XfddRdbkuXbu3ev6nqUGQA/9eWvffNTx5468Jb6uVOvmTlc0RbjTKgYLPKhwxZE2EbGxHj91dtw+YYVODTZwE3btmPz6hEzMDQAd2AAkWUT6dDk05JYu4wn9x9FywsBJSFliFjrRCOQOJhFYHYKIMAVEQTnUJpBCBcGTBWGRoS7YuX7rr76ivvvuOMO6+qrr+6B70cRgqWU/F3vGsv6np/4OG26MkgMBL18cZyIzrtMzhKRbwBBGGJoePhG4K8/+LGPQQFgo6OjtH37dtNVD6Ddu3fTq17xkq8ZY771hQ+MPzw5f/yKTuBrLWPGCbAtgXR/AZlcDgODfXjVxRuhLBeBU4LdNwzjZuCkLJPhhrJxi2onD+OJA5MolYpYs7GAMIrQaQfo+AH8MIaUCkorkDaQKoawBCjxfNDMUv3Da0Rxw+YvXn/LTR/59re/LW655RbZg9ePAIBdkOhPfOLTH1y9ZvXrF8sLRXRvVwJPh150w2+iJN+9P04AtGFKSRw9fOAFb3vbr7/zne989+c3bFh58ny9vKuvvtq66qqrsGfPHoeI/Ie+c89/7cxN3ElTZ/udTJ+xOadU2kU+m0ZfXwGZfBaNtofBfgeDGQWh5wltY1QlhNfxcWRiElOTM8j09WHdyArEMkar4wFdxX2TnDlCHGtIYxArBWLovmmYLvSv5LnNF391y+0v/1kiCs9rnvcMPxp5NrIty/zh7g889Kl/+PvrvFZN27bLpJagpUvmRkJJ1dVklpBSgroKp/niAAwxMMFwy0teNec44onVa9fcvf2iS+4efe1LjhGRf17Yt8vAgHf08N898Zk7XlabOq3yxT6eSTsoFrPIl4oolvKwOEdjoYKg3YGOY8S+j9BvIwxjUDqLwfXrUBzqQ+wHaNbqqNfqmF+oodMJIbWEjCWCMEKsgXbQQUw++txhsHS/Gbj21vD1b/ul67NE+79tjLiFqOf9fpQA7MqL6b+64x8/vOez//z2U0cOKMdNcam60o5aQ5lE2kwrBakkZKyApX/XMbiwjIxjtWbdFpFOpZBOpVAs9anhVasfyReLd2/csC7euPUi3L/v3heePnns+avXb7AzsWeG5w7T2uESiZSLQi6HoeE+9A30IZvPwsmkEUsNv+Mj9gNoFYMLBtt2oIgQBCFajSbqC2VMnpvFQrUFYxRgAKkkolhCKYZyuwrHdeCkhvHATFunL76eXX3lpZ9+8+0r3/LGN35W/f7v36Z7K5c/whxwdBTYuxdmoK+wv1AsgDiHMRqEpwMTmeQeG6BBJMCZgdQafhTCtgVkHNPKkVVCx76pNmu6oRXmOednjx+6fmB45PrHHrwPK9ZtwYmDT2Bm+hxsyzGawLaOrMDtRmBzUaLmK0BruCkXtuuCWTEs24HTV4QhQEURZOAj6vgIvACdtodquYzpc9OYma8ikslFGmN0oqKlYvhBDF+FqIYZfO3B+xFaJbbZ7tPZbPZnvnw3O/7YYx97365dHwMAGhsb47t379a9NsyPiJJf6M8f7h8cBGf8PFVuszxcIwBkOBiTUIzghT7cVAqCJzc/1q5Zg0a9TnP1Bi8M9gNaw+u09cSJAzqMJeZnpxBHMctmMwSjybZTWAgMPnukiotSIW4cKSFYLEP5PtZevBlZPwNLEBhj0NpASgUZhQg7HhqNFsqLVczNl1Gp1hFrJFfSpUYcS4RhDE/GCOwMosJafO2hJzBfb2FwMIfF6VMUBB0VeLV3/+4ffnD4pS974Z4XPf+6+4lIJlJrY2xsLGkl9SD3LITgJQKpMWbw13/3j+775le/cpHfbmqtDUM3BBvS0N3jLUop1Ot1gDQ2btyC02dOYt3qtdi8eQtq1RpOHD+KoRVDyGVzqJcraLfrUMZgxcgqNJptOK4LAkccx1BRCM0EZssLyNsav/nKF2Ol9NCfS2HNhnVI57PQZKAVECuJKAzRaXVQqzbRaLbheT6MiuHLGC3fRzOI4RmG0MlB9K1Apm8A9z/0IJ46egwpJwNu2bCEjfzASjjpLHKpDFatX6tWr1p198VbN3391S+/7VsbN4wcUrpXkzxrHpCIzE1jY4IxtvjOsf9+X2lgcJvXbmoCmIHGUo1IlHiZjufDkMal2y9BtVaD1gqrV69Gs1GH1hqWm0K77aNUHARPudBeEtJtJ4V02iCTyaJWr0HLABEprI853pG+FGc6FbQmAsRbhjHdaeLYfY9hMGVjeKCElGNDG4NQSvieD9/30Wh2MFWpY7ZWRzMKwdMFuCtXwSkNIV3ogyUYjp84ioPHj8ESFrRWICURSonAa6LTKJvZdktNnDrE+4dXveT40Q0v2X/oaGX3h+7Yt3H96r/86VLqIdx8s+odqn4WQvDQjh3GGIPLr9r5paOHj7xleuI0AydA6uX7uwAQRREAg+07doCEwLmpSaweWQXBOaYWyrBdB5Yt4HU8+GEHnDhAHMQEGBfI5wuIogiMEbhlw1MhLmnbeElqBQY3X4MDR47gwccfwsT2PvRffQXK7RYeP3kWrFZGckQQMJyjGQQ4Nz2HZjNAPyzstEYAAup9abgrRyB9D7VKGfsPH4HWgGWxblahYQwQRSGioEVklNBhB5XpU7o6N6FPHz/cP7x63RuGV6153cMb19/4P2+55bujo6N87969vSLlmQTg3qQKpDfd/uK7v/Ptex8u9g1eW68sagIxIoI2yUksAjA0OAAVK0xPTsO2HOSyeUzNzKDltZExiQhkFMdoNlvgjEHp5DklFfL5XKJq3+EwpJEVDtbENkJbQTk2dl55DdZOr8Y9Tz6EA9Pfwsaf2YUT5QYeObEfC2GE0rYtsI2COLOANbGFi6yVuKq0CUWWxj1z+1FdaEApBdt2MFupoFJvIu2mQUtnFogABqg4hJYStmV3nwdjzDCvWTZHnpiKO/41trbzmR7knsUiZM+ePYyIwjv+4dPvP338+JcqC3OKc0ZGajImGcLZlg2lDRYXFhEGEXK5LDp+G+22B2MMIhHBwEBphVa7A9dxkvttKgZAsISFTJogY4VIxjDtNvokAzGBytw8qq0GYgKev/V6DM8cx/TH7sRt2T7ssDajyULsn6pjB+vDanc7NhQHMZzrg5vN4vTcJHwo+KTBohjCSeHU2UnksjkQY8nxQQDECJxxaENgtg3H6V7T5AIyllAqItdNcYJBu1Hteb1nE4C7du1SY2Nj4r/9/M/86/v+9M8+2Wq2fvHUiaOKcU5EmikkNzgCL0AsZbf6NWg0WlBSgTFCFEeg7vnVIPDBiCBjuSw2Xq03ktNaQqAV+sjFGjnDIRwbMwtzONaYQB0dYFYj6xZx08ZrsKY4DMYIR+sTqB/dh4zQOGea8L0IKctFulgAYg0FjaYJkDYaBw4fQr3eQDafh1IqYUpzDmgCYxxtr41MJg1L2AAl3j2CQTabQRDE6NTLS1dBe3aecTzzGtFm9/g43f2tb9w1NTefanX8az3P5zKOJWNkAJDWZjkrl0ov094NAKMBrRXiOIZWGpwLhGGIdCqNXDYLz+sg8EMEfgcSCoMQuKFhYeOq9Vi9bhUGRRrrUv1YWxqE47o4Mz2LM7PnMLswh2O1CfBCClJLWLFEv0mh4OTR11/CXHkBx4J51EaKKKsQBw8fhuO4YIwhl8/D8wP4gY8wChDFIWzHQj6fA08Oz6Dje8jncrBtB74XGAKYDMNP1WrzZw4fPsx6o7pnSZ5tqeLrniD97Y9+8h/vOnTgyHsPHzy8c3pmBq163QjEkhnJpVSkpYRRBgCDNoCUEksdbKWTqYlSCpawwJiA4BY00zCKoKCRy+WgmYTX9lAY6sPQyjVotTuYqczjbHUatbAJFwwqJCzAx7Wpbbhpw0UImYIOJbKFPKTWqIcddKDR0hEmz07AdVNgjEEZDSJCJpNGynHAebK45DgOYJJrm4GKoLRCf38/qtUaLFsAJkYY9iLwj/RQDdFueusv/tzXjDH3/fPeL77yS1+5883lyuIrK4sVUatW4LeamhHTkiQ3RpPSKsm1VEJW0DphUBsYWI4FouRur9EGymjYjo1sPo/AlFGrNVDf38SsV8c5v4IGPISCYbHkoC9bhPFDhLGNfZVjCCs1XLF2O4rFAkLfQ63eRDlsoy0MOlCwbBvZrINWqw3BBOIoQspJwc7b4DzRiPa9NmAMIqXg+T4sy4LFBYzRSKddKKWh/N6I+EcGwK4nNKOjo5yI2gA+Z1nic3/3T5+59aknjrzk+MmTr2nU6heVywusXq0hDDyFKAKYIWMUMzFgmIKWCkIkd96IAVwkeZhWGrlsDr7RaMoInbCDmXYD87qBmtBopGy01pTMZW96FW647UVUmZk1URhTc3bGeP/yHdz70KO0cW4lBotF1H0PVd1BzTWYqlWxbt0GBGEI27XR5dMC0IhCH7adQhAGWFhcRKlQQBSH6HQ6WDE8BKmTqthxHMRxBOgeAJ/1HPAH7fDhw8YYQ4cPH+YHDhxk/3vv3tMP3r/vrqOH9v8vBX04k8m0+gaH+910uiicFKOlRNFoaQyD1ppcx0WhkO9ur5lE+tcAwwODKDfrqM9MoWxaOMU9lAs26huH0P+y55vX/OZb8ao3vonWbtiIbZdcTCPr1mPjlVfQhlfchHLs4ciRp8iv1hHHMea4h6/HC2ClEjatXYtWuw2re66Vd8+uOrYDYgwnTh5DLGVySVNKeH6A/v4BMMbgplxkM1lDBBZH0acqtdqZ7pZfLwf8UZ1r7XpDBQB7RvfwvdgLImoA+DQRPn3g5Km1D9330DUHjx590anTZ2+tVesbywtzVrW8iFq5rFPpNGOcdc9tCRgAnHEUCkWcPH0ShzIBuPJw5fZLcetLXmquf9FNuOLKq6hQKCKIIsycPmRsNw1JLuWyWeRWraGb/vg3TfF5l+mH/34Paz95DAeaTcwZhVs2b4Y0gOs4SePaaMAQlFIgLnDy9HFIpZHPZ6GkRhRLMEYJw0cq9PX1wbZEcpxJxt+3PdizH/3FdOzau0xboj179rBdH/kIXbJp0zkA5wD8izEm9Rcf/fjzThw/9aqZ6ZlbTp88eTlnDKRDaG1gCzu5OskZ0pk02u02SsUSLNs2O553DX77D98FbjmktEYURTDGQBtFUimjuYHtOIDW6C8M0HWvfAXWXnmJ+YsPfoju+vSnsXLFMEaGV2B2bgaOa8MYk+yumOTO8MlTJ1Cv1kwmkydLJH0/KWMABmEUIZfNwhIclmWBMYJGLwT/2AHw/DpliUM3NjbGDh8+TF1v6QO4B8A9xpjcn3/4b193/NTkxx6+7y4HBhDCAghIp9OwhIDveUiVShjo70N5sWI0GaZlDGOSUM2JsHL9JYiikGqVMjgXUFpCK4nBviI9dP+D5uixY2ZkxUratnVbl7GdrH5qnYzehLBw5uw5LCwumPe+/08wPTlp/u4Tf0/5Qh5SKUipEAUR4iiGHwQgxpDNZOCk7B7ifowBiPM34PADmjOlUokRUcsY8/l3jn/oLxjjDhEZLjhppeG6LuI4QiwlXNcFF4KmpifN0SNHzc4rr6SOF2CJicM5QxgEELa9PNIr5FL4xjfuMh/60J/qIAh4Op3C0PAwwsADY6xbcQOM21hYKKPZrJmPfOSjePGLX2yeevIJds/d92Di3CQAQCkNKRU830O9lvwvdm0bvS70vzV2IfyQe/fuVbfddps2xtB3Hzt8u22n+wygjQFxLsC5gGO7aLbaUFol5FPOAQLdc/e3wFhX3YgITAgwxhHHEWzLhtYK2WwKX/rSl82fvu89WoYhl1Iik8uhr9SHKE6KC844LGGh1WrDaGU+/rFP4PZX3W6mJyconyvgNbe/Glqr7mKVRhxHCMMIba+DSrWO2flFlMv1HuIuBA/4nxUv/+tf7yGlJCyekEoZMYADlmVjcXEBYRgg8H1kXBfpdIbu23effvVrXk+bNm+CH0RYnJuEEA6IC9i2hZQr8KlPfVp//KMfIRnFPNYGQRBi3YqR5K4JTHJhUyeM7anpGbz0xbfR4vwC/u5jH6dqrYpz5yYxNTkN23Hge8kyUywjRFEEzjm0NnBtG/lMroe4CxmAACCIbvD9EETMGBODOAPTGowRqrUabMuBZdkJcSHlwu902Kf+8R/Me9/7HjIGCFp1owyhNLSaUq6Dj93xcf2ZT/8jpFQklUYYx6jUath55U7EUQTiBDIMJAiTE+cwMzONr3z1a/jyl7+KMIogpYQxBnH3sbvwByUTBYgoTgQzlVJoNBo9xF2IIRgA7qrVGABUFqv5OPQBgpFSJvNhJsA5odGogTFCIV+AAWF6ehaO6+J7333I3HX3t00h62B43Tbasv0K8r0O/scHP6A/+0//C1xYDESo1hs4c/YMlIrhptPoeB4YMQjB0fE6OHHsGBzbgRAWuBBwEy8L13XhOjYYo+U8T2mJKEwKkTiWaHU6mJ6fW5ax69mFBEBjaOXMjDLGiFDqPs/zYbShWCpEcQhiSW7X6bQguIVYxujvK8FJuTg3eQ62Jdg/f+afzOzsHAZKOZw6dRJ/+Wcf0vd++9tERGx2fh6nz55Fx+9g9arV2LBuIyxuIQhCEBE0CIcPH4Ef+MjnCyCY5NqmVslqqZKJCn9XxzBh75huRSwRxxK+FyIIwh7iLsQQbADQ+Lh+61t/djCfTW9vt5sgEJmuVl8hn08mEJ6fSL1BQ8oIQwMD6Hge5hcX0Gq36G/+5qPqZS9/GfvwX/4Vzp07R612kxbLZViWhbWrVyOfz6Hd8buCmIkCAsBw6vRpzMzMoFTsQyaTgowlGHGo5PRiIjfS1b45f9MmjgMIzsAYg+Cih7YLPQd8+OFzarFSi6RWUFAwZOD5HsCATqeDIAxQLJSgFWA4EIUhstkMUmkXjUaTvvvdB/i+e+81586eoVDGKOSy2Lp5M3LZDGIp0Wl34PseiqU+KJ30x8uVCo4cPgzXTSGfz0PrhC6mdDKXNl3qmF7eN2WA0RCcY+XIaj157iwBXLtuirtuD4QXNABZxs74YZCXcQStDABCFEZQ0qDptxBFMSzLgtEKUibVgPYTr1gq9eHcuUl0WnUqlAawZXgQmXQaKpbwowBRGCXjM6UgLAtSS0SRxNEjRyClxODAECwuIJWE1iaZipBJGtXGAN3VARgDwQXiWOrf/8Pd7MhTj+Ejf/1hK51OG5DTQ9wF2gdkAJDPZjfbgq0OvLYmSjaLpZIIwxC17jbdEjHBaAXd5e4ZGEycncCbX7YRd/zBi7CmaOAFESqVMiq1GtqtDjzfRxCGkDJZmIpjhcnpSZQriygWS0i5LpRJGNxm6XEp8i6VviAwImhl9MCKtazpBd/Y/d73vOja59140g8CajSqvVnchVoFA0CrXjeBF0B3l2wZJXslrWYT9Vqtm34xSK0SsGjdLRQ0shkHa1MtZDqnkI6TBXQ/CBCEIcIomaAolfx5IoZ2u4NTJ0/Ctm3kc0n/TutEXk6Zrgc8j7m9pDjHGANjXA+PrMYDj+7/9mCpdM9v/M7vvWr7pZfMua6b70HuAgbg7EKVfN+D6k4ckvmugOd5aDTqy0tCRutl5YMwjOF1OmDcwTcfr2Hf4QgNawSbNqxBMV9EJp2B3R3JJWSDhFlz5swpeF4H/X2DEEIkwprGdLVilnzf02WS6b4hGHG46SyyxUHsvOLqTcYY681vfPXR22659fbXve4Nk11ybk8h4ULKAZe6ZvONOsI47moQagiRrBpHUsLzO2CMg1EiNg5NXUDYAFMQ3MKBOYXHpgyGB3IwgY84iiFjjVh1+3XdZnKj2cTZibPIZfNw3VTX05kk7GoNaCyDFYZAMGBgMCwhR2RyJZbKFrFuzcilAPjY2JgaHx9/DD+wptCzC8QDjnYfN6xZfa1gFozShhFBcAGCQhxFyViOJYIzWhvIWCGMYnhhgDCUaLXbeMHVI3j+jhzmpqdRLldRq9fRbDfRbnfgBSH8MIJWGpVyGXEco1AoJtrWy7leUvgYnB92zXLfhRGH5WaRKfbBzebRbnkxkJArxsbG2DMoh9cD4DNphw4dMkTA7OTUre1WHYwY62qeY3ahjFa7BaV0N1QCSsmu6haBE+BHCn1OiDffkMJtmwMI1USkEhBpk8DJGAPohMVSq9eQTmVh2TZ0d0sP3ZCvARg6T2upW38QUXJywk0jUxyEm8picqEsH3vsY+o8hk/P812IABwfH9daG1cxd1O71UTgtRK1hDCG1gTbtuH7bVhWshSO7h4xDCA4R9q1ESiBu+78Hs5N1JAv9KOvVEIuk0Em5SLlOHAsC3aXOMoZh2s7iKMIQRRCKpUouGoNo1U3BHfR112wBxGIC3DLhjGK/MCHxcV2x7lhBZBwHHtwuwABaEyiqHXgwNFLiIvhhflZ02rVGZGBUhKDg0Pd6lTDEvb3uRgNgzhOyKYdaeOf91v416M2tmzdhKDThNQaspvfGYPlsOq4DpgQICKkHAeWJaCV7oZfYGmL2Rjd9YCJ5BsABH4b7VqF/HYLRGx4errca/5dyABMxB3H2NTUmQON+uL97WaD4iBUainnM4RmK2GZWJZIdoe1hFQaSirEKllqj8IATAjM19sIfB9ph6NebyAMI4RRjDiOEcsYsisZTETJIZ1uWDbdCUhX0BraGLiOC844GBio6xVtJ41MsR+McR1FUreU2gIAO5Jr7z27IIuQPTvoFa94RUjG2r9uw2bYqdTywrqUETrtNhjjSQ6oTUKFkjHCKEQQ+Gh7AVI8wh/9zCa87kqBoyfOYMVQP8IgQBhFiKIQsYyhVdJiieIIRNrYtoBWyW6yXrpx0qVcEQicJ7vJACWECM5gYBAFAWIZa2bZzPPVxd9fSvXswpuE7NqljTFULKZvE5aDVCpN2ihoAzRaTURxCMt2EgB0SQGqu5shpUQYxbC5QjBzChevEPA7DVQbHezYvAae50EbgHfl3oIwQjadNre94CoIwQDqVr0swZ7WGkYnCv++7ycL50ZBdjWvjdEQrgsnlaV6q42FcuOipJXUo2BdyI3obtKl0nEcwnRHXkpp1GtVAIDjON3dDYAYB2ccgjNwLpByLSx2OL56yOCLj4eIWRZnp+YguMALrtqOYi4NgyTEblw3gte+/Cbaf+gYTc8swLa6eaUGqHttwnQftdGQWnZBaUDEwEjAaI049BEEITpecKkxhm3v3tHr2YVLRqAokppYAgAhbNQbi+h4bRAxOLa7XAgk7RcCuvp9hERf8OGzBEMWUikOpTQOnZ7E1nUjuP7KiyG1AWcWbEG4577v4sTEHNJuCs1mC+lMGpGKnn4vkO6uZia9SMOWjlkbKBlBRRFUHDG/0wazRlY/cv/968fHx0937931piAXIgA5Z/pd7/swMWLJkrdSXe9HSLtZOHZy45dRssF2fmVqWRbiWKJRL2NoYACcJfE0nc7g2Nk5HDszhWzagVIa8wtVkBDo7ytBSQWvk8j3uo6LMAySdrSmblu6OxNeGuFBQ8URZBRCyghhEBjPDwcPnKutAXC6V4hcmCGYjDF06lS1CJCjlYawbFTrVbS9FhgTUEol4DBL47cEfASCEAKe56O8WEEQRKhW6wiCCIyLLghd2G4K7UDBCxVK/X0oFHLLt53clI0wCBGEftLm6T6/5A3p+3tG0EoiikIoJSmKQhVr7TDLvjppqA/2AHihAbCrsmrK5akrUqnUiJSxCTyfLS7MAcYkIism4QW2mm0EQZyIoMOAGKFRb2J2dh4EQj6Xh5NKodPqoNloLjesCcltOce2QMTQ3axEHCVkBm0MGo0m/NCD1fW0S7dOzNPDkGROrCRUl18YxxE12x4iaXYSgHHs64XfCy0Ej46OGgCYr1Z1HMcmDDuYOncWYRR0z71yIyyhU+kMbFsgjGLIloTjOvA6TXTaHTi2Ddu2wYiBgSGVSsELPNRqTWQyKQgrWZ1USiHq7vPKOOn9gQDbFrBtAd8PoLVGKpWGjGMoqRIQGiwzZIxRUDJGHHR4HAbUaXcwu1i7VB8/7tDWrdES66ZnFxgdK/ADSCUxeeYUyuXZpNolBuKCbNvmtmVx23Z4PpfntmVzr+NzGUueSae566S4ZdlcCM4Bw0GMu26KWxbnnhdwr5N8NBtt3mn7XMeGW1xw13V5Op3iKSfFU67Ls5ksV1LxVqvJiYhzITgR8eRoMPHk3jtxLWMeBz7iKGTtZsMEYXjRPZO1zQDMH//xH/dGcheSB9y9uwtAANX5eUyeOUlKK4BIJ6me+aiw+GegjRvFWgtoOMKBcQ0UcUgoGGhAEbQAECsoQYCUIEGwbI52vYNASrhCwBJiWbiOCWv5XSo5AEvCVSnU22UoFaE4MAxZ74AEkh0SwxmDinUs18dh8JdR4BV9r6P8WFuLnc6NAA71CpELtAp2DDfnJk5Ro1lL1h6XyChEBxcXZ+//Yfw3wv+DrUmlFOanz/27n+vr23xKRWEY+h1EYWg8L8BsubETWN5v7mn1XmgAtG2ymvU6jNGGMUbJuS+DWMlUV2iT/xj8YpPri4jyWjuUANCjdrMJPxjYYoxxiChaOmXWg98FAcAkBq/bsG5ByiAk4jYRM0RJC0RHgT4PeOrHYGKjiaQiJCwbGYXUbrfR9sMN37jvG0MAJtEjpl44RUh3csCuunTbwWKp9LhlucRIaMYEDAH6x/AVtFpltOtziFpVxHHIPK+tG/Xm2vn5aDXw9JZfzy4UNszoKCml8IbXvPaDl1x2KaSURli2SaLuj99LiKIIzVYNc1MnMHvqAFqVBeOHEQulvuT8HZeeXSAA/PznP6/GxsbYW9/6i19//s0v+MORNWuEjKWxhGWWxm0/ZgkrGGOI4wiL06dw4ol9mJs+C8+Xl6KHwAs/Z/2Ft7ztjzZt3W4sK21Sqdxv4Eek+P8fvaFtO7eNMzEPIsOY0ADJNRu3mzf98u/8FWMMo6OjvPervAAtIX+C2baN9//3D/3amnWbK9l837t/3ADYb/dvs4Q7DyLDuaUFd1QqUzCveu1PPZCIJ/WKkAv9yrsAgBtuuumK7dsvu/WZvP7+/weA2y69YVv/0Pp5Im6EcLUQqThfGNaXXXbt31+IggC9PuC/bXVIAPzBe+998t+QVn+kNgZgHLmRVcj0DaLdrEHFoRGuw9yUSynL+syP0ZulV4T8X5rq/vw/Pq9hbKkN08TAirXoH1oJA6PT6Vw0smrFHz/y+IPfQrKe2ZuE9N6Jz5xt377d3nDRK9dNTDzMDx74Lq1dty2cPHnwdPdecG8C0rNetOnZT7oloZb92KUJPetZz3rWs571rGc961nPetaznvWsZz3rWc961rOe9axnPetZz3rWs571rGc961nPetaznvWsZz3rWc961rOe9axnPetZz3rWs571rGc961nPevZ/aP8vspmVxiE2gnAAAAAASUVORK5CYII=" class="rig-layer rig-layer-upper" alt="PromptSmith Gentleman">
            <img src="data:image/png;base64,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" class="rig-layer rig-layer-hammer" alt="Gold Hammer">
          </div>
          <!-- 90-Degree Side-Profile Pose (Hands Clasped Behind Back, Scissoring Strides) -->
          <div class="pose-side">
            <img src="data:image/png;base64,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" class="rig-layer rig-side-leg-far" alt="Far Stride Leg">
            <img src="data:image/png;base64,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" class="rig-layer rig-side-leg-near" alt="Near Stride Leg">
            <img src="data:image/png;base64,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KGm3Oiw3VnDWEgQBSZKV+rTvIXDBvffeq+fm5uTIyMgFjW90dNTNzs6K/fv3Z42DfQJe/rj33nvVV77ylfS++77zp6I4uWVobI1prTRVmqTEUeRMGgtjUiGc/YnFxZkP5c9BeikBVbeeUsxTWeEudMGs6oYXa8OKXjei1WxhrKEQBggh8mbXfLeMtXiB7/bv35/m2o7t270rdDA9uwO333708/s3vnDo+V8YGl1npV8Q3W6XqNezcRxZk6bWGPeTc3PTH4J7LyXfNz8xklRCKqxLnXOpyDLlVEiVKqnTXi9Oz5+fSedmZlOlRDoyMpiOjg2nI6ND6cjIUDo4WE/H1m9KpeelURSZPtWuAgJOTEwIIYR96D2//+uLi0vrr73hVtdrd2Sv23VRFGHiRBnLg/MzJz547733atif/supdUPgGJZaa6m0p5XWWntaKqWjKNazc/N6ZmZGW2v0wGBNl4pFba3TaZJqa6yWWmnP8/Tg4HDwshtfrhG6mv+F9Bl3pbrg1cTjt979H1/7/j9+34/V6iNmdO0G1VhctkmvRxJ1XZqaH5868eyH7rjjDm///v3/t63vxWKxZx1/YdK04qQ0gDAGelGHpaVlrDVUqxUqtQpFP8ALPLTWBIGHEookNfRsj167acdH1gbl6sijnD2O27PHiYmJPuuuwCxYANI5V7rrlfft//pjj956z+u/297+yvs4e/qUW56fk42l2Z98/NHPfTDX2tL+r75vAf+XJh5fffTR9K3f/4O7X3j+uVurtQGzeesNstvtYkwq0jj5iccf/dyH/l+ST3/L12A/+2H///C1+X8+kH31ZrlXPHbu3KkAJn73j75jw6atiReUk5fdeJd51//+x8kP/W970je9/Wd/PCPKbt1/tvoWkH+FISXrnBu+69Wv/bPlpWUVFMpi/ZZt1line+2Vd37mo3/6wXvv3a3375/ou90+/pe7Xu2cE9/z1h/84PDYJje2dou74cY7Dj74y3/ofuCnf/Ovc2mmb/no7wf8V3G9n/3sZ0078X7sCw9/5jd9P5T1eu1vvvdtP3Kg3Y1PHnj0kz+57cEH5X+ZmOhrcH3wr7Kc6Ctff3bLtu23zg+PbXCv/PbX/+n/8YlPrP2lPe/7lXt3/kz5QqtzH338K0AWCgXuetVrHx5be4193Xe++VcF8Cu///u1hx56yMtZKvtPUx//alnva1//3T913bYb3Zve/Oa35FNo6krv8unjJZL5Atx117e97YEHHnhD/mrvEtL1yddHv57dx1WQiOzux3l99NFHH3300UcfffTRRx999NFHH3300UcfffTRRx999NFHH3300UcfffTRRx999NFHH3300UcfffTRRx999NFHH3300UcfffTRRx999NFHH3300ceVif8Le46y62dfJi8AAAAASUVORK5CYII=" class="rig-layer rig-side-upper" alt="Side-Profile Gentleman with Hands Behind Back">
          </div>
        </div>
      </div>
    </div>
    <div class="hud-meta">
      <div class="hud-top">
        <div class="brand-title">
          <span class="pulse-dot"></span>
          PromptSmith
        </div>
        <span class="license-badge ${isLicensed ? '' : 'trial'}">
          ${isLicensed ? 'PRO UNLOCKED' : remainingTrial + ' TRIES LEFT'}
        </span>
      </div>
      <div class="hud-sub">${mascotMessage}</div>
    </div>
  </div>

  <!-- Zero-Clutter Model Auto-Hook & Voice-to-Spec Dictation Bridge -->
  <div class="panel-box" style="border-color: rgba(56, 189, 248, 0.35); background: rgba(56, 189, 248, 0.06);">
    <div class="panel-header">
      <span class="panel-label" style="color: #38bdf8;">
        Auto-Hook Model Bridge &amp; Voice-to-Spec
      </span>
      <span class="badge-pill pill-cyan">${detectedModelLabel}</span>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-top:4px;">
      <label style="display:inline-flex; align-items:center; gap:5px; font-size:9.5px; color:#e2e8f0; cursor:pointer;" title="Works alongside your active IDE model automatically without cluttering your screen">
        <input type="checkbox" id="chk-auto-hook" ${autoHookEnabled ? 'checked' : ''} onchange="toggleAutoHook(this.checked)" style="accent-color:#38bdf8; cursor:pointer;">
        <span>Auto-Hook Active Model (Zero-Clutter)</span>
      </label>
      <div style="display:flex; gap:4px;">
        <button class="pill-btn active" id="btn-voice-mic" onclick="startVoiceDictation()" title="Speak thoughts or voice commands directly">Voice Input</button>
        <button class="pill-btn" onclick="cleanVoiceNow()" title="Strip spoken filler words, resolve 'no wait' self-corrections, and format spoken code tokens">Clean Voice</button>
        <button class="pill-btn" onclick="saluteMascot()" title="Tip Hat & Salute">Salute</button>
        <button class="pill-btn" id="btn-stride-toggle" onclick="toggleMascotStride()" title="Toggle 90-degree side-profile stroll">Stroll: ON</button>
      </div>
    </div>
  </div>

  <!-- Quick Template Chips -->
  <div class="chips-bar">
    <button class="chip-btn" onclick="applyQuickPrompt('sys-design')">System Design</button>
    <button class="chip-btn" onclick="applyQuickPrompt('algo-proof')">Algorithmic Proof</button>
    <button class="chip-btn" onclick="applyQuickPrompt('ui-tokens')">UI Design Tokens</button>
    <button class="chip-btn" onclick="applyQuickPrompt('root-cause')">Root Cause Debug</button>
    <button class="chip-btn" onclick="applyQuickPrompt('age-10')">Explain Like I'm 10</button>
  </div>

  <!-- Adaptive Pattern Recognition HUD -->
  <div class="panel-box">
    <div class="panel-header">
      <span class="panel-label">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        Cognitive Pattern Calibration
      </span>
      <span class="badge-pill pill-cyan">${cognitive.audienceLabel} &bull; ${metrics.detectedDomain}</span>
    </div>
    <div style="font-size: 9.5px; color: #94a3b8; margin-bottom: 4px;">
      Readability: <b>Grade ${cognitive.fleschKincaidGrade}</b> &bull; Bloom's Taxonomy: <b>${cognitive.bloomsLevel}</b>
    </div>
    <div class="button-group">
      <button class="pill-btn ${!activeAudience ? 'active' : ''}" onclick="setAudience('auto')">Auto-Detect</button>
      <button class="pill-btn ${activeAudience === 'explorer' ? 'active' : ''}" onclick="setAudience('explorer')">Explorer (All Ages)</button>
      <button class="pill-btn ${activeAudience === 'practitioner' ? 'active' : ''}" onclick="setAudience('practitioner')">Practitioner</button>
      <button class="pill-btn ${activeAudience === 'architect' ? 'active' : ''}" onclick="setAudience('architect')">Staff Architect</button>
      <button class="pill-btn ${activeAudience === 'executive' ? 'active' : ''}" onclick="setAudience('executive')">Executive ROI</button>
    </div>
  </div>

  <!-- Omni-Disciplinary Equalizer (Level the Playing Field) -->
  <div class="panel-box">
    <div class="panel-header">
      <span class="panel-label">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
        Omni-Disciplinary Equalizer
      </span>
      <span class="badge-pill pill-emerald">${equalizerProf.title}</span>
    </div>
    <div class="button-group">
      <button class="pill-btn ${!activeDiscipline ? 'active' : ''}" onclick="setDiscipline('auto')">Auto</button>
      <button class="pill-btn ${activeDiscipline === 'architect' ? 'active' : ''}" onclick="setDiscipline('architect')">Systems Architect</button>
      <button class="pill-btn ${activeDiscipline === 'designer' ? 'active' : ''}" onclick="setDiscipline('designer')">UI/UX Designer</button>
      <button class="pill-btn ${activeDiscipline === 'analyst' ? 'active' : ''}" onclick="setDiscipline('analyst')">Data Analyst</button>
      <button class="pill-btn ${activeDiscipline === 'creator' ? 'active' : ''}" onclick="setDiscipline('creator')">Everyday Creator</button>
    </div>
  </div>

  <!-- Autonomous Lateral Brainstormer -->
  <div class="panel-box" style="border-color: rgba(168, 85, 247, 0.3);">
    <div class="panel-header">
      <span class="panel-label" style="color: #c084fc;">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        Autonomous Lateral Brainstormer
      </span>
      <span class="badge-pill pill-purple">Transcend Consensus</span>
    </div>
    <div class="vectors-grid">
      <div class="vector-pill" onclick="selectVector('inversion')" title="Asymmetric Inversion: Forbid conventional CRUD/cache">
        <div class="v-title">Vector A</div>
        <div class="v-desc">Inversion</div>
      </div>
      <div class="vector-pill" onclick="selectVector('bisociation')" title="Bisociation: Cross-domain biological/physics synthesis">
        <div class="v-title">Vector B</div>
        <div class="v-desc">Bisociation</div>
      </div>
      <div class="vector-pill" onclick="selectVector('transcendence')" title="Transcendence: Zero-state edge mathematical determinism">
        <div class="v-title">Vector C</div>
        <div class="v-desc">Transcendence</div>
      </div>
    </div>
    <div style="margin-top: 8px; display: flex; justify-content: flex-end;">
      <button class="pill-btn" onclick="triggerBrainstorm()" style="background: rgba(168, 85, 247, 0.2); border-color: rgba(168, 85, 247, 0.5); color: #fff; font-weight: 700;">
        Synthesize Lateral Blueprint &rarr;
      </button>
    </div>
  </div>

  <!-- Multi-Model Target Selector & Benchmark Suite -->
  <div class="panel-box">
    <div class="category-tabs">
      <button class="cat-tab-btn active" id="tab-models" onclick="switchCategory('models')">Frontier Models (8)</button>
      <button class="cat-tab-btn" id="tab-bots" onclick="switchCategory('bots')">Coding Bots (7)</button>
      <button class="cat-tab-btn" id="tab-future" onclick="switchCategory('future')">Next-Gen AI (4)</button>
    </div>

    <!-- Models Grid -->
    <div class="targets-scroll-grid" id="grid-models">
      ${modelTargets.map(t => {
        const scoreClass = t.compatibilityScore >= 85 ? "score-green" : t.compatibilityScore >= 70 ? "score-yellow" : "";
        const isActive = activeProfile === t.profileKey;
        return `
        <div class="target-card ${isActive ? 'active' : ''}" onclick="selectTarget('${t.profileKey}')">
          <div class="t-top">
            <span>${t.name}</span>
            <span class="t-score ${scoreClass}">${t.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${t.provider}</span>
            <span>${t.latencyRating}</span>
          </div>
        </div>`;
      }).join('')}
    </div>

    <!-- Bots Grid -->
    <div class="targets-scroll-grid" id="grid-bots" style="display:none;">
      ${botTargets.map(t => {
        const scoreClass = t.compatibilityScore >= 85 ? "score-green" : t.compatibilityScore >= 70 ? "score-yellow" : "";
        const isActive = activeProfile === t.profileKey;
        return `
        <div class="target-card ${isActive ? 'active' : ''}" onclick="selectTarget('${t.profileKey}')">
          <div class="t-top">
            <span>${t.name}</span>
            <span class="t-score ${scoreClass}">${t.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${t.provider}</span>
            <span>${t.latencyRating}</span>
          </div>
        </div>`;
      }).join('')}
    </div>

    <!-- Future AI Grid -->
    <div class="targets-scroll-grid" id="grid-future" style="display:none;">
      ${futureTargets.map(t => {
        const scoreClass = t.compatibilityScore >= 85 ? "score-green" : t.compatibilityScore >= 70 ? "score-yellow" : "";
        const isActive = activeProfile === t.profileKey;
        return `
        <div class="target-card ${isActive ? 'active' : ''}" onclick="selectTarget('${t.profileKey}')">
          <div class="t-top">
            <span>${t.name}</span>
            <span class="t-score ${scoreClass}">${t.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${t.provider}</span>
            <span>${t.latencyRating}</span>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <!-- Curated Workspace Grounder & Rules Scrubber -->
  <div class="panel-box" style="border-color: rgba(16, 185, 129, 0.3);">
    <div class="panel-header">
      <span class="panel-label" style="color: var(--emerald);">
        Workspace Context Grounder &amp; Rules Exporter
      </span>
      <span class="badge-pill pill-emerald">${wsContext.workspaceName}</span>
    </div>
    <div style="font-size: 9.5px; color: #94a3b8; margin-bottom: 6px;">
      Active: <b>${wsContext.activeFileRelative}</b> (${wsContext.languageId}) &bull; Stack: <b>${wsContext.detectedStack.slice(0, 4).join(", ") || "Auto"}</b>
    </div>
    <div class="button-group">
      <button class="pill-btn active" onclick="groundWorkspaceNow()" title="Inject verified project stack &amp; active file symbols">+ Ground Stack</button>
      <button class="pill-btn active" onclick="groundDiagnosticsNow()" style="border-color:rgba(245,158,11,0.45); color:#fbbf24;" title="Pull active IDE compiler/linter errors directly into your prompt">+ Ground Errors</button>
      <button class="pill-btn" onclick="exportRules('.cursorrules')" title="Write compacted .cursorrules to workspace root">Export .cursorrules</button>
      <button class="pill-btn" onclick="exportRules('CLAUDE.md')" title="Write compacted CLAUDE.md to workspace root">Export CLAUDE.md</button>
      <button class="pill-btn" onclick="exportRules('.github/copilot-instructions.md')" title="Write compacted .github/copilot-instructions.md">Export Copilot Rules</button>
      <button class="pill-btn" onclick="exportRules('.windsurfrules')" title="Write compacted .windsurfrules to workspace root">Export .windsurfrules</button>
    </div>
  </div>

  ${secretFindings.length > 0 ? `
  <!-- Pre-Flight Secret & Credential Leak Guard -->
  <div class="panel-box" style="border-color: rgba(244, 63, 94, 0.55); background: rgba(244, 63, 94, 0.08);">
    <div class="panel-header">
      <span class="panel-label" style="color: #fda4af;">
        Pre-Flight Secret Guard (${secretFindings.reduce((acc, s) => acc + s.count, 0)} Credential Leak Risk)
      </span>
      <button class="mode-btn active" onclick="scrubSecretsNow()" style="background:#e11d48; border-color:#fb7185; font-weight:700;">Scrub Secrets</button>
    </div>
    <div style="font-size:9.5px; color:#fecdd3;">
      Detected: ${secretFindings.map(s => `<b>${s.count}x ${s.label}</b>`).join(', ')}
    </div>
  </div>
  ` : ''}

  ${secretFindings.length > 0 ? `
  <!-- Pre-Flight Secret & Credential Leak Guard -->
  <div class="panel-box" style="border-color: rgba(244, 63, 94, 0.55); background: rgba(244, 63, 94, 0.08);">
    <div class="panel-header">
      <span class="panel-label" style="color: #fda4af;">
        Pre-Flight Secret Guard (${secretFindings.reduce((acc, s) => acc + s.count, 0)} Credential Risk)
      </span>
      <button class="mode-btn active" onclick="scrubSecretsNow()" style="background:#e11d48; border-color:#fb7185; font-weight:700;">Scrub Secrets</button>
    </div>
    <div style="font-size:9.5px; color:#fecdd3;">
      Detected: ${secretFindings.map(s => `<b>${s.count}x ${s.label}</b>`).join(', ')}
    </div>
  </div>
  ` : ''}

  ${ambiguities.length > 0 ? `
  <!-- Pre-Flight Ambiguity & Missing Constraint Linter -->
  <div class="panel-box" style="border-color: rgba(245, 158, 11, 0.35);">
    <div class="panel-header">
      <span class="panel-label" style="color: var(--amber);">
        Pre-Flight Ambiguity Linter (${ambiguities.length} Detected)
      </span>
      <span class="badge-pill" style="background:rgba(245,158,11,0.15); color:var(--amber); border:1px solid rgba(245,158,11,0.3);">1-Click Fix</span>
    </div>
    <div style="display:flex; flex-direction:column; gap:4px;">
      ${ambiguities.map(a => `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; background:rgba(255,255,255,0.02); padding:4px 6px; border-radius:4px; border:1px solid rgba(255,255,255,0.06);">
          <span style="font-size:9.5px; color:#e2e8f0;"><b style="color:var(--amber);">[${a.severity}]</b> ${a.label}</span>
          <button class="mode-btn active" onclick='applyFix(${JSON.stringify(a.fixSnippet)})' style="white-space:nowrap;">+ Inject Guard</button>
        </div>
      `).join('')}
    </div>
  </div>
  ` : ''}

  <!-- Real-Time Token & 20-Turn Cost Telemetry Strip -->
  <div class="telemetry-strip" style="flex-wrap:wrap; gap:6px;">
    <span>Compression: <span class="telemetry-val" style="color:var(--emerald); font-weight:800;">-${metrics.tokenSavingsPercent}%</span></span>
    <span>Signal: <span class="telemetry-val" style="color:#38bdf8; font-weight:800;">${metrics.iqScore}/100</span></span>
    <span>20-Turn Saved: <span class="telemetry-val" style="color:var(--emerald); font-weight:800;">${costSim.cumulativeTokensSaved.toLocaleString()} tok (~$${costSim.openaiO3SavedUsd})</span></span>
    <span>Tokens: <span class="telemetry-val" id="cnt-tokens">0</span></span>
  </div>

  <!-- Direct Input Draft Box -->
  <div class="view-mode-bar">
    <span class="panel-label" style="font-size: 10px; color: #38bdf8;">
      Input Draft (Type, Paste, or Select in Editor + Alt+P)
    </span>
    <button class="mode-btn active" onclick="optimizeNow()" style="background:linear-gradient(135deg,#0284c7,#0369a1); border-color:#38bdf8; font-weight:700; padding:3px 10px;">
      Optimize Prompt &rarr;
    </button>
  </div>
  <div class="editor-wrapper" style="margin-bottom: 8px;">
    <textarea id="input-box" class="prompt-editor" style="min-height: 68px; max-height: 150px;" placeholder="Type or paste your raw prompt here, or highlight text in any code file and press Alt+P...">${(originalPrompt || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
  </div>

  <!-- View Mode Switcher & Compiled Blueprint -->
  <div class="view-mode-bar">
    <span class="panel-label" style="font-size: 10px; color: #fff;">
      Compiled Prompt Blueprint
    </span>
    <div class="mode-switch-btns">
      <button class="mode-btn active" id="btn-mode-compiled" onclick="switchViewMode('compiled')">Blueprint</button>
      <button class="mode-btn" id="btn-mode-diff" onclick="switchViewMode('diff')">Live Diff</button>
    </div>
  </div>

  <div class="editor-wrapper">
    <textarea id="output-box" class="prompt-editor" oninput="updateLiveCounters()" placeholder="Your structured, high-density prompt blueprint will appear here...">${(enhancedPrompt || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
    <div id="diff-box" class="diff-viewport"></div>
  </div>

  <!-- Action Buttons Row -->
  <div class="action-row">
    <button class="btn-primary" onclick="optimizeNow()" title="Compile and structure the Input Draft">
      Optimize
    </button>
    <button class="btn-secondary" id="btn-copy" onclick="copyToClipboard()" title="Copy Blueprint to Clipboard">Copy</button>
    <button class="btn-secondary" onclick="applyToEditor()" title="Insert Blueprint into Active Editor">Insert</button>
    <button class="btn-secondary" onclick="scrubSecretsNow()" title="Redact exposed API keys, tokens, and passwords">Scrub</button>
  </div>

  ${historyVault.length > 0 ? `
  <!-- Local Recent Prompts Vault -->
  <div class="panel-box" style="border-color: rgba(56, 189, 248, 0.22);">
    <div class="panel-header">
      <span class="panel-label" style="color: #94a3b8;">
        Recent Prompts Vault (${historyVault.length})
      </span>
      <button class="pill-btn" onclick="clearHistoryVault()" style="font-size:8.5px; padding:1px 6px;">Clear</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:4px; max-height:95px; overflow-y:auto;">
      ${historyVault.map((h, idx) => `
        <div onclick="loadHistoryItem(${idx})" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:6px; padding:4px 6px; border-radius:4px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05);">
          <span style="font-size:9.5px; color:#cbd5e1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:190px;">${h.raw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
          <span style="font-size:8.5px; color:#38bdf8; font-family:var(--font-mono); text-transform:uppercase;">${h.target}</span>
        </div>
      `).join('')}
    </div>
  </div>
  ` : ''}

  <!-- Pro Passkey ($9/mo or $10 Passkey) -->
  <div class="pro-box">
    <div>
      <div class="pro-title">PromptSmith Pro ($9/mo or $10 Passkey)</div>
      <div class="pro-meta">Unlimited offline optimizations &amp; 19-target benchmarks.</div>
    </div>
    ${!isLicensed ? `<div style="display:flex; gap:5px;"><button class="btn-sub" onclick="openCheckout()">Get Passkey</button><button class="btn-secondary" style="padding:4px 8px; font-size:9.5px;" onclick="enterPasskey()">Enter Key</button></div>` : '<span style="color:var(--emerald); font-weight:800; font-family:var(--font-mono); font-size:10px;">ACTIVE PRO PASSKEY</span>'}
  </div>

  <script>
    const vscode = acquireVsCodeApi();
    const originalText = ${JSON.stringify(originalPrompt)};

    function getDraftText() {
      const inp = document.getElementById('input-box');
      const out = document.getElementById('output-box');
      return (inp && inp.value.trim()) ? inp.value.trim() : ((out && out.value.trim()) ? out.value.trim() : '');
    }

    function optimizeNow() {
      pulseMascotForge(850);
      const text = getDraftText();
      vscode.postMessage({ command: "optimizeInput", text });
    }

    function groundWorkspaceNow() {
      vscode.postMessage({ command: "groundWorkspace", text: getDraftText() });
    }

    function groundDiagnosticsNow() {
      vscode.postMessage({ command: "groundDiagnostics", text: getDraftText() });
    }

    function exportRules(targetFile) {
      const compiled = document.getElementById("output-box").value || "";
      vscode.postMessage({ command: "exportRulesFile", targetFile, text: getDraftText(), compiled });
    }

    function applyFix(fixSnippet) {
      vscode.postMessage({ command: "applyAmbiguityFix", fixSnippet, text: getDraftText() });
    }

    function scrubSecretsNow() {
      vscode.postMessage({ command: "scrubSecrets", text: getDraftText() });
    }

    function cleanVoiceNow() {
      vscode.postMessage({ command: "cleanVoiceStream", text: getDraftText() });
    }

    function toggleAutoHook(enabled) {
      vscode.postMessage({ command: "toggleAutoHook", enabled });
    }

    function loadHistoryItem(index) {
      vscode.postMessage({ command: "loadHistoryItem", index });
    }

    function clearHistoryVault() {
      vscode.postMessage({ command: "clearHistoryVault" });
    }

    // Dual-Pose Mascot Side-Profile Stroll + Front-Facing Forge & Hat-Tip Salute
    let isPatrolling = true;
    let isHoverPaused = false;
    let patrolX = 0;
    let patrolDir = 1;
    function stepMascotPatrol() {
      const stage = document.getElementById("mascot-drag-target");
      const facing = document.getElementById("mascot-facing");
      if (isPatrolling && !isHoverPaused && stage && !isDragging) {
        patrolX += patrolDir * 0.48;
        if (patrolX > 14) {
          patrolDir = -1;
          if (facing) facing.classList.add("flip-left");
        } else if (patrolX < -8) {
          patrolDir = 1;
          if (facing) facing.classList.remove("flip-left");
        }
        stage.style.transform = "translateX(" + patrolX.toFixed(1) + "px)";
      }
      requestAnimationFrame(stepMascotPatrol);
    }
    requestAnimationFrame(stepMascotPatrol);

    const hudHoverTarget = document.getElementById("mascot-drag-target");
    if (hudHoverTarget) {
      hudHoverTarget.addEventListener("mouseenter", function() {
        isHoverPaused = true;
        const rig = document.getElementById("mascot-svg-rig");
        const facing = document.getElementById("mascot-facing");
        if (facing) facing.classList.remove("flip-left");
        if (rig && isPatrolling) {
          rig.classList.remove("rig-state-walking", "rig-state-forging");
          rig.classList.add("rig-state-salute");
          setTimeout(function() {
            if (isHoverPaused && rig) {
              rig.classList.remove("rig-state-salute");
              rig.classList.add("rig-state-idle");
            }
          }, 800);
        }
      });
      hudHoverTarget.addEventListener("mouseleave", function() {
        isHoverPaused = false;
        const rig = document.getElementById("mascot-svg-rig");
        const facing = document.getElementById("mascot-facing");
        if (rig && isPatrolling) {
          if (facing) facing.classList.toggle("flip-left", patrolDir < 0);
          rig.classList.remove("rig-state-idle", "rig-state-salute");
          rig.classList.add("rig-state-walking");
        }
      });
    }

    function pulseMascotForge(ms) {
      const rig = document.getElementById("mascot-svg-rig");
      const facing = document.getElementById("mascot-facing");
      if (!rig) return;
      isHoverPaused = true;
      if (facing) facing.classList.remove("flip-left");
      rig.classList.remove("rig-state-idle", "rig-state-walking", "rig-state-salute");
      rig.classList.add("rig-state-forging");
      setTimeout(function() {
        isHoverPaused = false;
        rig.classList.remove("rig-state-forging");
        if (facing && isPatrolling) facing.classList.toggle("flip-left", patrolDir < 0);
        rig.classList.add(isPatrolling ? "rig-state-walking" : "rig-state-idle");
      }, ms || 800);
    }

    function saluteMascot() {
      const rig = document.getElementById("mascot-svg-rig");
      const facing = document.getElementById("mascot-facing");
      if (!rig) return;
      isHoverPaused = true;
      if (facing) facing.classList.remove("flip-left");
      rig.classList.remove("rig-state-idle", "rig-state-walking", "rig-state-forging");
      rig.classList.add("rig-state-salute");
      setTimeout(function() {
        isHoverPaused = false;
        rig.classList.remove("rig-state-salute");
        if (facing && isPatrolling) facing.classList.toggle("flip-left", patrolDir < 0);
        rig.classList.add(isPatrolling ? "rig-state-walking" : "rig-state-idle");
      }, 900);
    }

    function toggleMascotStride() {
      isPatrolling = !isPatrolling;
      isHoverPaused = false;
      const rig = document.getElementById("mascot-svg-rig");
      const facing = document.getElementById("mascot-facing");
      const btn = document.getElementById("btn-stride-toggle");
      if (rig) {
        rig.classList.remove("rig-state-salute", "rig-state-forging");
        rig.classList.toggle("rig-state-walking", isPatrolling);
        rig.classList.toggle("rig-state-idle", !isPatrolling);
      }
      if (facing) {
        facing.classList.toggle("flip-left", isPatrolling && patrolDir < 0);
      }
      if (btn) {
        btn.textContent = isPatrolling ? "Stroll: ON" : "Stroll: IDLE";
      }
    }

    // Voice Dictation (Web Speech API + OS Voice Typing Fallback)
    let wvSpeechRec = null;
    let wvListening = false;
    function startVoiceDictation() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const inp = document.getElementById("input-box");
      const btn = document.getElementById("btn-voice-mic");
      if (!SpeechRecognition) {
        if (inp) {
          inp.focus();
          inp.placeholder = "Voice Mode Active: Speak using OS Dictation (Win+H or Fn+Fn), then click Clean Voice...";
        }
        vscode.postMessage({ command: "cleanVoiceStream", text: getDraftText() });
        return;
      }
      if (wvListening && wvSpeechRec) {
        wvSpeechRec.stop();
        return;
      }
      wvSpeechRec = new SpeechRecognition();
      wvSpeechRec.continuous = true;
      wvSpeechRec.interimResults = true;
      wvSpeechRec.lang = "en-US";
      const startDraft = inp && inp.value ? inp.value.trim() + " " : "";
      wvSpeechRec.onstart = function() {
        wvListening = true;
        if (btn) btn.textContent = "Listening...";
      };
      wvSpeechRec.onresult = function(ev) {
        let t = "";
        for (let i = 0; i < ev.results.length; i++) {
          t += ev.results[i][0].transcript;
        }
        if (inp) inp.value = startDraft + t;
      };
      wvSpeechRec.onend = function() {
        wvListening = false;
        if (btn) btn.textContent = "Voice Input";
        vscode.postMessage({ command: "cleanVoiceStream", text: getDraftText() });
      };
      wvSpeechRec.start();
    }

    function scrubSecretsNow() {
      vscode.postMessage({ command: "scrubSecrets", text: getDraftText() });
    }

    function loadHistoryItem(index) {
      vscode.postMessage({ command: "loadHistoryItem", index });
    }

    function clearHistoryVault() {
      vscode.postMessage({ command: "clearHistoryVault", text: getDraftText() });
    }

    function switchCategory(cat) {
      document.querySelectorAll('.cat-tab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('grid-models').style.display = 'none';
      document.getElementById('grid-bots').style.display = 'none';
      document.getElementById('grid-future').style.display = 'none';

      if (cat === 'models') {
        document.getElementById('tab-models').classList.add('active');
        document.getElementById('grid-models').style.display = 'grid';
      } else if (cat === 'bots') {
        document.getElementById('tab-bots').classList.add('active');
        document.getElementById('grid-bots').style.display = 'grid';
      } else {
        document.getElementById('tab-future').classList.add('active');
        document.getElementById('grid-future').style.display = 'grid';
      }
    }

    function switchViewMode(mode) {
      const editor = document.getElementById('output-box');
      const diffBox = document.getElementById('diff-box');
      const btnCompiled = document.getElementById('btn-mode-compiled');
      const btnDiff = document.getElementById('btn-mode-diff');

      if (mode === 'diff') {
        btnDiff.classList.add('active');
        btnCompiled.classList.remove('active');
        editor.style.display = 'none';
        diffBox.style.display = 'block';
        renderInteractiveDiff();
      } else {
        btnCompiled.classList.add('active');
        btnDiff.classList.remove('active');
        editor.style.display = 'block';
        diffBox.style.display = 'none';
      }
    }

    function renderInteractiveDiff() {
      const diffBox = document.getElementById('diff-box');
      const orig = getDraftText() || originalText || "";
      const enh = document.getElementById('output-box').value || "";

      let html = '<div style="margin-bottom:8px; font-weight:700; color:#38bdf8;">[INTERACTIVE RECONSTRUCTION LOG]</div>';
      html += '<div style="margin-bottom:6px;"><span class="diff-del">Original (' + orig.length + ' chars)</span> &rarr; <span class="diff-add">PromptSmith Enhanced (' + enh.length + ' chars)</span></div>';
      html += '<div style="padding:6px; background:rgba(255,255,255,0.02); border-radius:4px; border:1px solid rgba(255,255,255,0.06); white-space:pre-wrap;">' + enh.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div>';
      diffBox.innerHTML = html;
    }

    function applyQuickPrompt(type) {
      let t = "";
      if (type === 'sys-design') t = "Design a high-throughput, horizontally partitioned event stream processing system handling 100k msg/sec with sub-millisecond p99 latency.";
      else if (type === 'algo-proof') t = "Formally prove the correctness and O(1) memory invariant of this distributed raft consensus state machine.";
      else if (type === 'ui-tokens') t = "Create a 2027 design system tokens schema supporting high-contrast accessibility (WCAG AAA), spring physics, and fluid typography.";
      else if (type === 'root-cause') t = "Perform root cause analysis on an intermittent deadlock occurring during simultaneous SQLite WAL checkpointing and IPC reads.";
      else if (type === 'age-10') t = "Explain quantum entanglement using an intuitive analogy with paired magical walkie-talkies that anyone can understand.";

      document.getElementById('input-box').value = t;
      vscode.postMessage({ command: "optimizeInput", text: t });
    }

    function triggerBrainstorm() {
      vscode.postMessage({ command: "triggerBrainstorm", text: getDraftText() });
    }

    function selectVector(vectorId) {
      vscode.postMessage({ command: "selectVector", vectorId, text: getDraftText() });
    }

    function setDiscipline(discipline) {
      vscode.postMessage({ command: "changeDiscipline", discipline, text: getDraftText() });
    }

    function setAudience(audience) {
      vscode.postMessage({ command: "changeAudience", audience, text: getDraftText() });
    }

    function updateLiveCounters() {
      const text = document.getElementById("output-box").value || getDraftText() || "";
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const tokens = Math.ceil(words * 1.33);
      document.getElementById("cnt-tokens").textContent = tokens;
    }

    function selectTarget(profile) {
      vscode.postMessage({ command: "changeProfile", profile, text: getDraftText() });
    }

    function applyToEditor() {
      const text = document.getElementById("output-box").value || getDraftText();
      vscode.postMessage({ command: "insert", text });
    }

    function copyToClipboard() {
      const text = document.getElementById("output-box").value || getDraftText();
      vscode.postMessage({ command: "copy", text });
      const btn = document.getElementById("btn-copy");
      if (btn) {
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = "Copy"; }, 1600);
      }
    }

    function openCheckout() {
      vscode.postMessage({ command: "openCheckout" });
    }

    function enterPasskey() {
      vscode.postMessage({ command: "enterPasskey" });
    }

    // Draggable Mascot Handler
    const mascotTarget = document.getElementById("mascot-drag-target");
    const hudContainer = document.getElementById("draggable-hud");
    let isDragging = false, startX = 0, startY = 0, initialX = 0, initialY = 0;

    const savedState = vscode.getState();
    if (savedState && savedState.posX !== undefined) {
      initialX = savedState.posX;
      initialY = savedState.posY;
      hudContainer.style.transform = "translate(" + initialX + "px, " + initialY + "px)";
    }

    mascotTarget.addEventListener("mousedown", dragStart);
    mascotTarget.addEventListener("touchstart", dragStart, { passive: false });

    function dragStart(e) {
      isDragging = true;
      const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
      startX = clientX - initialX;
      startY = clientY - initialY;
      document.addEventListener("mousemove", dragMove);
      document.addEventListener("mouseup", dragEnd);
      document.addEventListener("touchmove", dragMove, { passive: false });
      document.addEventListener("touchend", dragEnd);
    }

    function dragMove(e) {
      if (!isDragging) return;
      if (e.type === "touchmove") e.preventDefault();
      const currentX = (e.type === "touchmove") ? e.touches[0].clientX : e.clientX;
      const currentY = (e.type === "touchmove") ? e.touches[0].clientY : e.clientY;
      initialX = currentX - startX;
      initialY = currentY - startY;
      hudContainer.style.transform = "translate(" + initialX + "px, " + initialY + "px)";
    }

    function dragEnd() {
      isDragging = false;
      document.removeEventListener("mousemove", dragMove);
      document.removeEventListener("mouseup", dragEnd);
      document.removeEventListener("touchmove", dragMove);
      document.removeEventListener("touchend", dragEnd);
      vscode.setState({ posX: initialX, posY: initialY });
    }

    updateLiveCounters();
  </script>
</body>
</html>`;
  }
}
