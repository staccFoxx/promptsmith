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
    }
    .mascot-stride-stage {
      width: 60px;
      height: 62px;
      position: relative;
      flex-shrink: 0;
      cursor: grab;
    }
    .mascot-facing {
      width: 60px;
      height: 62px;
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
      left: 18%;
      width: 54%;
      height: 6px;
      background: radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 75%);
      border-radius: 50%;
      transform-origin: center center;
    }
    .rig-layer-leg-l { transform-origin: 36.1% 72.6%; }
    .rig-layer-leg-r { transform-origin: 48.4% 72.6%; }
    .rig-layer-upper { transform-origin: 45% 65%; }
    .rig-layer-hammer { transform-origin: 57.6% 55.6%; }

    .rig-state-idle .rig-layer-upper { animation: gentIdleBreath 2.6s infinite ease-in-out; }
    .rig-state-idle .rig-layer-hammer { animation: gentIdleHammer 2.6s infinite ease-in-out; }
    .rig-state-idle .rig-ground-shadow { animation: gentShadowIdle 2.6s infinite ease-in-out; }

    .rig-state-walking .rig-layer-upper { animation: gentStrideBounce 0.3s infinite ease-in-out; }
    .rig-state-walking .rig-layer-leg-l { animation: gentStrideLegL 0.6s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-layer-leg-r { animation: gentStrideLegR 0.6s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-layer-hammer { animation: gentStrideHammer 0.6s infinite ease-in-out; }
    .rig-state-walking .rig-ground-shadow { animation: gentStrideShadow 0.3s infinite ease-in-out; }

    @keyframes gentIdleBreath { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-2.5px); } }
    @keyframes gentIdleHammer { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-2.5px) rotate(-5deg); } }
    @keyframes gentShadowIdle { 0%, 100% { transform: scaleX(1); opacity: 0.55; } 50% { transform: scaleX(0.88); opacity: 0.38; } }
    @keyframes gentStrideBounce { 0%, 100% { transform: translateY(0px) rotate(1.2deg); } 50% { transform: translateY(-3.5px) rotate(-1.2deg); } }
    @keyframes gentStrideLegL {
      0%   { transform: rotate(-24deg) translate(-2px, -1px); }
      25%  { transform: rotate(0deg) translate(0px, 0px); }
      50%  { transform: rotate(22deg) translate(2px, -1px); }
      75%  { transform: rotate(0deg) translate(0px, -3px); }
      100% { transform: rotate(-24deg) translate(-2px, -1px); }
    }
    @keyframes gentStrideLegR {
      0%   { transform: rotate(22deg) translate(2px, -1px); }
      25%  { transform: rotate(0deg) translate(0px, -3px); }
      50%  { transform: rotate(-24deg) translate(-2px, -1px); }
      75%  { transform: rotate(0deg) translate(0px, 0px); }
      100% { transform: rotate(22deg) translate(2px, -1px); }
    }
    @keyframes gentStrideHammer {
      0%   { transform: translateY(0px) rotate(14deg); }
      50%  { transform: translateY(-2px) rotate(-16deg); }
      100% { transform: translateY(0px) rotate(14deg); }
    }
    @keyframes gentStrideShadow { 0%, 100% { transform: scaleX(1.1); opacity: 0.6; } 50% { transform: scaleX(0.82); opacity: 0.32; } }
  </style>
</head>
<body>

  <!-- Top Interactive HUD -->
  <div class="hud-header" id="draggable-hud" title="Drag to reposition companion, or click to toggle stride patrol">
    <div class="mascot-stride-stage" id="mascot-drag-target" onclick="toggleMascotStride()">
      <div class="mascot-facing" id="mascot-facing">
        <div id="mascot-svg-rig" class="mascot-layered-rig rig-state-walking">
          <div class="rig-ground-shadow"></div>
          <img src="data:image/png;base64,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" class="rig-layer rig-layer-leg-r" alt="Right Leg">
          <img src="data:image/png;base64,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" class="rig-layer rig-layer-leg-l" alt="Left Leg">
          <img src="data:image/png;base64,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" class="rig-layer rig-layer-upper" alt="PromptSmith Gentleman">
          <img src="data:image/png;base64,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" class="rig-layer rig-layer-hammer" alt="Gold Forge Hammer">
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
        <button class="pill-btn" id="btn-stride-toggle" onclick="toggleMascotStride()" title="Toggle articulated stride patrol">Patrol: ON</button>
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

    // Articulated Mascot Stride Patrol
    let isPatrolling = true;
    let patrolX = 0;
    let patrolDir = 1;
    function stepMascotPatrol() {
      const stage = document.getElementById("mascot-drag-target");
      const facing = document.getElementById("mascot-facing");
      if (isPatrolling && stage && !isDragging) {
        patrolX += patrolDir * 0.45;
        if (patrolX > 10) {
          patrolDir = -1;
          if (facing) facing.classList.add("flip-left");
        } else if (patrolX < -6) {
          patrolDir = 1;
          if (facing) facing.classList.remove("flip-left");
        }
        stage.style.transform = "translateX(" + patrolX.toFixed(1) + "px)";
      }
      requestAnimationFrame(stepMascotPatrol);
    }
    requestAnimationFrame(stepMascotPatrol);

    function toggleMascotStride() {
      isPatrolling = !isPatrolling;
      const rig = document.getElementById("mascot-svg-rig");
      const btn = document.getElementById("btn-stride-toggle");
      if (rig) {
        rig.classList.toggle("rig-state-walking", isPatrolling);
        rig.classList.toggle("rig-state-idle", !isPatrolling);
      }
      if (btn) {
        btn.textContent = isPatrolling ? "Patrol: ON" : "Patrol: IDLE";
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
