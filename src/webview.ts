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
      width: 56px;
      height: 58px;
      position: relative;
      flex-shrink: 0;
      cursor: grab;
    }
    .mascot-facing {
      width: 56px;
      height: 58px;
      transition: transform 0.16s ease;
      transform-origin: center center;
    }
    .mascot-facing.flip-left {
      transform: scaleX(-1);
    }
    .mascot-rig-svg {
      width: 100%;
      height: 100%;
      overflow: visible;
      filter: drop-shadow(0 5px 12px rgba(0, 0, 0, 0.6));
    }
    .rig-leg-back, .rig-leg-front { transform-origin: 48px 60px; }
    .rig-knee-back, .rig-knee-front { transform-origin: 48px 74px; }
    .rig-arm-back, .rig-arm-front { transform-origin: 48px 40px; }
    .rig-body-group { transform-origin: 48px 50px; }
    .rig-shadow { transform-origin: 48px 92px; }

    .rig-state-idle .rig-body-group { animation: rigIdleBreath 2.6s infinite ease-in-out; }
    .rig-state-walking .rig-body-group { animation: rigStrideBounce 0.3s infinite ease-in-out; }
    .rig-state-walking .rig-leg-front { animation: rigStrideLegFront 0.6s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-knee-front { animation: rigStrideKneeFront 0.6s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-leg-back { animation: rigStrideLegBack 0.6s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-knee-back { animation: rigStrideKneeBack 0.6s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-arm-front { animation: rigStrideArmFront 0.6s infinite ease-in-out; }
    .rig-state-walking .rig-arm-back { animation: rigStrideArmBack 0.6s infinite ease-in-out; }
    .rig-state-walking .rig-shadow { animation: rigStrideShadow 0.3s infinite ease-in-out; }

    @keyframes rigIdleBreath { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-3px); } }
    @keyframes rigStrideBounce { 0%, 100% { transform: translateY(0px) rotate(1.5deg); } 50% { transform: translateY(-4.5px) rotate(-1deg); } }
    @keyframes rigStrideLegFront {
      0% { transform: rotate(-30deg) translateY(-2px); }
      25% { transform: rotate(0deg) translateY(0px); }
      50% { transform: rotate(28deg) translateY(-1px); }
      75% { transform: rotate(4deg) translateY(-5px); }
      100% { transform: rotate(-30deg) translateY(-2px); }
    }
    @keyframes rigStrideKneeFront {
      0% { transform: rotate(6deg); } 25% { transform: rotate(0deg); }
      50% { transform: rotate(18deg); } 75% { transform: rotate(34deg); } 100% { transform: rotate(6deg); }
    }
    @keyframes rigStrideLegBack {
      0% { transform: rotate(28deg) translateY(-1px); }
      25% { transform: rotate(4deg) translateY(-5px); }
      50% { transform: rotate(-30deg) translateY(-2px); }
      75% { transform: rotate(0deg) translateY(0px); }
      100% { transform: rotate(28deg) translateY(-1px); }
    }
    @keyframes rigStrideKneeBack {
      0% { transform: rotate(18deg); } 25% { transform: rotate(34deg); }
      50% { transform: rotate(6deg); } 75% { transform: rotate(0deg); } 100% { transform: rotate(18deg); }
    }
    @keyframes rigStrideArmFront { 0% { transform: rotate(26deg); } 50% { transform: rotate(-28deg); } 100% { transform: rotate(26deg); } }
    @keyframes rigStrideArmBack { 0% { transform: rotate(-26deg); } 50% { transform: rotate(26deg); } 100% { transform: rotate(-26deg); } }
    @keyframes rigStrideShadow { 0%, 100% { transform: scaleX(1.08); opacity: 0.55; } 50% { transform: scaleX(0.82); opacity: 0.3; } }
  </style>
</head>
<body>

  <!-- Top Interactive HUD -->
  <div class="hud-header" id="draggable-hud" title="Drag to reposition companion, or click Walk to patrol">
    <div class="mascot-stride-stage" id="mascot-drag-target" onclick="toggleMascotStride()">
      <div class="mascot-facing" id="mascot-facing">
        <svg id="mascot-svg-rig" class="mascot-rig-svg rig-state-walking" viewBox="0 0 96 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse class="rig-shadow" cx="48" cy="92" rx="22" ry="4.5" fill="rgba(0,0,0,0.55)" />
          <g class="rig-arm-back">
            <rect x="33" y="38" width="8" height="19" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
            <circle cx="37" cy="57" r="4" fill="#0ea5e9"/>
            <path d="M26 48 L36 45 L36 58 L31 63 L26 58 Z" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="1.3"/>
          </g>
          <g class="rig-leg-back">
            <rect x="42" y="57" width="9" height="16" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
            <g class="rig-knee-back">
              <circle cx="46.5" cy="73" r="3.2" fill="#38bdf8"/>
              <rect x="42" y="73" width="8.5" height="13" rx="3.5" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
              <path d="M40 84 H54 C56 84 57 86 57 88.5 H40 Z" fill="#eab308" stroke="#fef08a" stroke-width="1"/>
            </g>
          </g>
          <g class="rig-body-group">
            <path d="M36 42 L26 68 L39 64 Z" fill="#0f172a" stroke="#eab308" stroke-width="1"/>
            <rect x="35" y="35" width="26" height="25" rx="7" fill="#0f172a" stroke="#eab308" stroke-width="1.6"/>
            <polygon points="48,40 54,47 48,54 42,47" fill="#38bdf8" stroke="#bae6fd" stroke-width="1"/>
            <rect x="33" y="12" width="30" height="22" rx="8" fill="#0f172a" stroke="#eab308" stroke-width="1.8"/>
            <path d="M48 5 L52 12 H44 Z" fill="#eab308"/>
            <rect x="37" y="17" width="22" height="10" rx="4" fill="#020617" stroke="#38bdf8" stroke-width="1.2"/>
            <rect x="40" y="20" width="5" height="4" rx="1.5" fill="#38bdf8"/>
            <rect x="51" y="20" width="5" height="4" rx="1.5" fill="#38bdf8"/>
          </g>
          <g class="rig-leg-front">
            <rect x="45" y="57" width="9.5" height="16" rx="4" fill="#0f172a" stroke="#eab308" stroke-width="1.4"/>
            <g class="rig-knee-front">
              <circle cx="49.5" cy="73" r="3.4" fill="#eab308"/>
              <rect x="45" y="73" width="9" height="13.5" rx="3.5" fill="#1e293b" stroke="#eab308" stroke-width="1.4"/>
              <path d="M43 84.5 H58 C60.5 84.5 61.5 87 61.5 89.5 H43 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="1.4"/>
              <line x1="44" y1="89.5" x2="60" y2="89.5" stroke="#38bdf8" stroke-width="2"/>
            </g>
          </g>
          <g class="rig-arm-front">
            <rect x="52" y="38" width="8.5" height="19" rx="4" fill="#0f172a" stroke="#eab308" stroke-width="1.4"/>
            <circle cx="56.5" cy="57" r="4" fill="#eab308"/>
            <line x1="56.5" y1="57" x2="68" y2="45" stroke="#94a3b8" stroke-width="2.6" stroke-linecap="round"/>
            <rect x="63" y="38" width="12" height="7" rx="2" transform="rotate(-45 69 41.5)" fill="#eab308" stroke="#fef08a" stroke-width="1.2"/>
          </g>
        </svg>
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
      <button class="pill-btn active" onclick="groundWorkspaceNow()" title="Inject verified project stack &amp; active file symbols">+ Ground in Project Stack</button>
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
