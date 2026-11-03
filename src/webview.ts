/**
 * PromptSmith - Universal Screen Companion & Adaptive Cognitive Learning Studio
 * Draggable isolated mascot companion with zero background.
 * Benchmarks prompts across 8 Frontier Models & 7 Autonomous Coding Bots.
 * Adapts cognitive scaffolding dynamically to ANY user age and knowledge level:
 * - Explorer (Youth / Students Ages 8-15 / Absolute Beginners) -> Intuitive metaphors, ZPD scaffolding
 * - Practitioner (Intermediate Developers / Professionals) -> Idiomatic patterns, production safety
 * - Staff Architect (Senior Engineers / Specialists) -> Maximum token density, invariant equations
 * - Executive (Founders / Product Leaders) -> High-level ROI, trade-offs, strategic outcomes
 */

import { PromptMetrics } from "./analyzer";
import { EnhancementProfile } from "./enhancer";
import { ModelBenchmarkEngine, BenchmarkTarget } from "./benchmarks";
import { CognitiveAudience } from "./learner";
import { DisciplinaryLens, OmniEqualizerEngine } from "./equalizer";

export class PromptWebviewProvider {
  public static getHtml(
    originalPrompt: string,
    enhancedPrompt: string,
    metrics: PromptMetrics,
    activeProfile: EnhancementProfile,
    isLicensed: boolean,
    remainingTrial: number,
    activeAudience?: CognitiveAudience,
    activeDiscipline?: DisciplinaryLens
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

    // Friendly mascot greeting tailored to detected cognitive level
    let mascotMessage = "I polished your prompt to get direct, accurate answers from your active AI model.";
    if (currentAudience === "explorer") {
      mascotMessage = "I'm here to help you learn! I've added friendly real-world analogies and simple explanations.";
    } else if (currentAudience === "architect") {
      mascotMessage = "Calibrated for staff-level precision: maximum token signal density, invariants, and zero fluff.";
    } else if (currentAudience === "executive") {
      mascotMessage = "Structured for executive decision clarity: clear deliverables, trade-offs, and ROI.";
    }

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>PromptSmith Assistant</title>
  <style>
    :root {
      --bg: var(--vscode-editor-background, #0d1117);
      --fg: var(--vscode-editor-foreground, #c9d1d9);
      --card: var(--vscode-sideBar-background, #161b22);
      --border: var(--vscode-widget-border, #30363d);
      --accent: #38bdf8;
      --accent-hover: #0ea5e9;
      --success: #10b981;
      --warning: #f59e0b;
      --danger: #ef4444;
      --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    * {
      box-sizing: border-box;
    }
    body {
      background-color: var(--bg);
      color: var(--fg);
      font-family: var(--font);
      margin: 0;
      padding: 10px;
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }

    /* Isolated Mascot (Zero Background) */
    .mascot-container {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 12px;
      cursor: grab;
      user-select: none;
      -webkit-user-drag: none;
    }
    .mascot-container:active {
      cursor: grabbing;
    }
    .mascot-avatar {
      width: 58px;
      height: 58px;
      object-fit: contain;
      filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.45));
      flex-shrink: 0;
      transition: transform 0.15s ease;
      background: transparent;
      border: none;
    }
    .mascot-avatar:hover {
      transform: scale(1.08) translateY(-2px);
    }

    /* Speech Bubble */
    .speech-bubble {
      position: relative;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 10px 12px;
      flex: 1;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    }
    .speech-bubble::before {
      content: "";
      position: absolute;
      top: 18px;
      left: -8px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 8px solid var(--border);
    }
    .speech-bubble::after {
      content: "";
      position: absolute;
      top: 18px;
      left: -6px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 7px solid var(--card);
    }
    .bubble-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .bubble-title {
      font-size: 13px;
      font-weight: 700;
      color: var(--accent);
    }
    .bubble-tag {
      font-size: 9.5px;
      padding: 1px 6px;
      border-radius: 4px;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      color: var(--accent);
      font-weight: 600;
    }
    .bubble-tag-pro {
      background: rgba(16, 185, 129, 0.15);
      border-color: rgba(16, 185, 129, 0.35);
      color: var(--success);
    }
    .bubble-sub {
      font-size: 11px;
      color: var(--fg);
      opacity: 0.85;
      margin-bottom: 8px;
      line-height: 1.35;
    }

    /* Cognitive Level & Analytics Pill */
    .cognitive-box {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 6px 8px;
      margin-bottom: 8px;
      font-size: 10px;
    }
    .cognitive-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .cognitive-badge {
      font-weight: 700;
      color: var(--accent);
      background: rgba(56, 189, 248, 0.12);
      padding: 1px 5px;
      border-radius: 3px;
    }
    .cognitive-metrics {
      display: flex;
      gap: 8px;
      opacity: 0.75;
      font-size: 9.5px;
    }

    
    
    /* Autonomous Lateral Brainstormer */
    .brainstorm-box {
      border: 1px solid rgba(168, 85, 247, 0.4);
      background: rgba(168, 85, 247, 0.05);
      border-radius: 6px;
      padding: 8px 10px;
      margin-bottom: 8px;
    }
    .brainstorm-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
      font-size: 11px;
      font-weight: 600;
    }
    .brainstorm-badge {
      color: #c084fc;
      background: rgba(168, 85, 247, 0.15);
      padding: 1px 6px;
      border-radius: 3px;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .vector-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 6px;
      margin-top: 6px;
    }
    .vector-card {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.02);
      border-radius: 4px;
      padding: 6px 8px;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .vector-card:hover {
      border-color: #c084fc;
      background: rgba(168, 85, 247, 0.12);
      transform: translateY(-1px);
    }
    .vector-card-title {
      font-size: 10px;
      font-weight: 700;
      color: #e9d5ff;
    }
    .vector-card-desc {
      font-size: 8.5px;
      opacity: 0.8;
      line-height: 1.3;
    }
    .brainstorm-cta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px solid rgba(168, 85, 247, 0.2);
    }
    .brainstorm-btn {
      background: linear-gradient(135deg, #9333ea, #6366f1);
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 4px 10px;
      font-size: 10px;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: opacity 0.15s ease;
    }
    .brainstorm-btn:hover {
      opacity: 0.9;
    }

    /* Omni-Disciplinary Equalizer */
    .equalizer-box {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 6px 8px;
      margin-bottom: 8px;
      font-size: 10px;
    }
    .equalizer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3px;
    }
    .equalizer-badge {
      font-weight: 700;
      background: rgba(255, 255, 255, 0.08);
      padding: 1px 5px;
      border-radius: 3px;
    }
    .discipline-pills {
      display: flex;
      gap: 3px;
      margin-top: 4px;
      overflow-x: auto;
      padding-bottom: 2px;
    }
    .discipline-btn {
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--border);
      color: var(--fg);
      font-size: 9px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s ease;
    }
    .discipline-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: var(--accent);
    }
    .discipline-btn.active {
      background: rgba(234, 179, 8, 0.18);
      border-color: #eab308;
      color: #fbbf24;
      font-weight: 700;
    }

    /* Audience Switcher Pills */
    .audience-pills {
      display: flex;
      gap: 3px;
      margin-top: 5px;
      overflow-x: auto;
      padding-bottom: 2px;
    }
    .audience-btn {
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--border);
      color: var(--fg);
      font-size: 9px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s ease;
    }
    .audience-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: var(--accent);
    }
    .audience-btn.active {
      background: rgba(56, 189, 248, 0.18);
      border-color: var(--accent);
      color: var(--accent);
      font-weight: 700;
    }

    /* Category Switcher */
    .target-tabs {
      display: flex;
      gap: 4px;
      margin-bottom: 6px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 4px;
    }
    .target-tab {
      background: transparent;
      border: none;
      color: var(--fg);
      opacity: 0.65;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 3px 6px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.15s ease;
    }
    .target-tab.active {
      opacity: 1;
      background: rgba(56, 189, 248, 0.15);
      color: var(--accent);
    }

    /* Benchmarks Grid */
    .targets-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px;
      margin-bottom: 10px;
      max-height: 180px;
      overflow-y: auto;
      padding-right: 2px;
    }
    .target-btn {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border);
      border-radius: 5px;
      padding: 5px 7px;
      font-size: 10.5px;
      color: var(--fg);
      cursor: pointer;
      text-align: left;
      transition: all 0.15s ease;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .target-btn:hover {
      background: rgba(255, 255, 255, 0.07);
      border-color: var(--accent);
    }
    .target-btn.active {
      background: rgba(56, 189, 248, 0.14);
      border-color: var(--accent);
    }
    .target-btn-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
    }
    .target-score {
      font-size: 9.5px;
      font-weight: 700;
      padding: 1px 4px;
      border-radius: 3px;
    }
    .score-green { background: rgba(16, 185, 129, 0.2); color: #10b981; }
    .score-yellow { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
    .score-red { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
    .target-sub {
      font-size: 9px;
      opacity: 0.65;
      display: flex;
      justify-content: space-between;
    }

    /* Stats Quick Bar */
    .stats-bar {
      display: flex;
      gap: 8px;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--border);
      border-radius: 5px;
      padding: 5px 8px;
      margin-bottom: 8px;
      font-size: 10.5px;
      justify-content: space-between;
    }
    .stat-item b {
      color: var(--success);
    }

    /* Live Telemetry */
    .telemetry-row {
      display: flex;
      justify-content: space-between;
      font-size: 9.5px;
      opacity: 0.75;
      margin-bottom: 6px;
      padding: 0 2px;
    }

    /* Editor Box */
    .editor-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 700;
      opacity: 0.75;
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
    }
    textarea.prompt-text {
      width: 100%;
      height: 110px;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--fg);
      font-family: monospace;
      font-size: 11px;
      padding: 8px;
      line-height: 1.35;
      resize: vertical;
      margin-bottom: 8px;
    }

    /* Buttons */
    .btn-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 6px;
      margin-bottom: 10px;
    }
    .btn {
      background: var(--accent);
      color: #070b14;
      border: none;
      padding: 6px 10px;
      border-radius: 5px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      text-align: center;
      transition: background 0.15s ease;
      white-space: nowrap;
    }
    .btn:hover {
      background: var(--accent-hover);
    }
    .btn-secondary {
      background: rgba(255, 255, 255, 0.08);
      color: var(--fg);
      border: 1px solid var(--border);
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.14);
    }

    /* Subscription Box ($0.99 / week) */
    .passkey-box {
      background: rgba(255, 255, 255, 0.03);
      border: 1px dashed var(--border);
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 10.5px;
    }
    .passkey-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .passkey-title {
      font-weight: 700;
      color: var(--accent);
    }
    .btn-buy {
      background: var(--success);
      color: #042f1a;
      border: none;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      cursor: pointer;
    }
    .passkey-form {
      display: flex;
      gap: 5px;
      margin-top: 5px;
    }
    .passkey-input {
      flex: 1;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--fg);
      font-size: 10px;
      padding: 3px 6px;
      font-family: monospace;
    }
    .btn-apply-key {
      background: rgba(255, 255, 255, 0.1);
      color: var(--fg);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 3px 8px;
      font-size: 10px;
      font-weight: 600;
      cursor: pointer;
    }
    .btn-apply-key:hover {
      background: var(--accent);
      color: #000;
    }

    .floating-handle {
      font-size: 9.5px;
      opacity: 0.5;
      text-align: center;
      margin-top: 5px;
      user-select: none;
    }
  </style>
</head>
<body>

  <!-- Draggable Mascot & Speech Bubble Assistant -->
  <div class="mascot-container" id="draggable-mascot" title="Drag me anywhere in your view">
    <img src="data:image/png;base64,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" class="mascot-avatar" alt="PromptSmith" />
    <div class="speech-bubble">
      <div class="bubble-header">
        <span class="bubble-title">PromptSmith</span>
        <span class="bubble-tag ${isLicensed ? 'bubble-tag-pro' : ''}">
          ${isLicensed ? 'PRO UNLOCKED' : remainingTrial + ' TRIES LEFT'}
        </span>
      </div>
      <div class="bubble-sub">
        ${mascotMessage}
      </div>

      <!-- Cognitive Pattern & Scaffolding Gauge -->
      <div class="cognitive-box">
        <div class="cognitive-top">
          <span>Learned Audience: <b class="cognitive-badge">${cognitive.audienceLabel}</b></span>
          <span style="opacity:0.65;">Domain: <b>${metrics.detectedDomain}</b></span>
        </div>
        <div class="cognitive-metrics">
          <span>Readability: <b>Grade ${cognitive.fleschKincaidGrade}</b></span>
          <span>Ease: <b>${cognitive.readingEaseScore}%</b></span>
          <span>Intent: <b>${cognitive.bloomsLevel}</b></span>
          <span>TTR: <b>${Math.round(cognitive.vocabularyRichnessTTR * 100)}%</b></span>
        </div>
        <div style="opacity:0.75; font-size:9px; margin-top:4px; font-style:italic;">
          ${cognitive.scaffoldingStrategy}
        </div>
        <div class="audience-pills">
          <button class="audience-btn ${!activeAudience ? 'active' : ''}" onclick="setAudience('auto')" title="Auto-adapt to prompt patterns">Auto</button>
          <button class="audience-btn ${activeAudience === 'explorer' ? 'active' : ''}" onclick="setAudience('explorer')" title="Youth & beginners (All ages) - ELI5, intuitive metaphors">Explorer (All Ages)</button>
          <button class="audience-btn ${activeAudience === 'practitioner' ? 'active' : ''}" onclick="setAudience('practitioner')" title="Intermediate developer - Idiomatic production patterns">Practitioner</button>
          <button class="audience-btn ${activeAudience === 'architect' ? 'active' : ''}" onclick="setAudience('architect')" title="Staff Architect - Invariant equations, maximum signal">Staff Architect</button>
          <button class="audience-btn ${activeAudience === 'executive' ? 'active' : ''}" onclick="setAudience('executive')" title="Executive - Deliverables, ROI & strategy">Executive</button>
        </div>
      </div>

      
      <!-- Omni-Disciplinary Equalizer (Level the Playing Field) -->
      <div class="equalizer-box">
        <div class="equalizer-top">
          <span>Equalizer Lens: <b class="equalizer-badge" style="color:${equalizerProf.badgeColor};">${equalizerProf.title}</b></span>
          <span style="opacity:0.75; font-size:9px; color:var(--success);">Cross-Pollination Active</span>
        </div>
        <div style="opacity:0.75; font-size:9px; margin-bottom:4px;">
          ${equalizerProf.subtitle}
        </div>
        <div class="discipline-pills">
          <button class="discipline-btn ${!activeDiscipline ? 'active' : ''}" onclick="setDiscipline('auto')" title="Auto-detect disciplinary focus">Auto</button>
          <button class="discipline-btn ${activeDiscipline === 'architect' ? 'active' : ''}" onclick="setDiscipline('architect')" title="Systems & Cloud Architects - Concurrency, Invariants & High Availability">Systems Architect</button>
          <button class="discipline-btn ${activeDiscipline === 'designer' ? 'active' : ''}" onclick="setDiscipline('designer')" title="UI/UX & Product Designers - Design Tokens, Spring Motion & WCAG AAA">Product & UI/UX Designer</button>
          <button class="discipline-btn ${activeDiscipline === 'analyst' ? 'active' : ''}" onclick="setDiscipline('analyst')" title="Data & Intelligence Analysts - Queries, Statistics & Visual Contracts">Data & Intelligence</button>
          <button class="discipline-btn ${activeDiscipline === 'creator' ? 'active' : ''}" onclick="setDiscipline('creator')" title="Everyday Creators, Students & Domain Specialists - Zero Technical Barrier">Everyday Creator (All Ages)</button>
        </div>
      </div>

      
      <!-- Autonomous Lateral Brainstormer & Orthogonal Ideation -->
      <div class="brainstorm-box">
        <div class="brainstorm-top">
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="color:#e9d5ff;">Autonomous Lateral Brainstormer</span>
            <span class="brainstorm-badge">Outside-the-Box Engine</span>
          </div>
          <span style="opacity:0.75; font-size:9px; color:#c084fc;">Transcend Consensus AI</span>
        </div>
        <div style="opacity:0.75; font-size:9px; margin-bottom:4px;">
          Automatically detects &amp; forbids orthodox AI consensus traps; engineers 3 divergent orthogonal paths.
        </div>
        <div class="vector-grid">
          <div class="vector-card" onclick="selectVector('inversion')" title="Click to apply Asymmetric Inversion (Jacobi/Munger)">
            <div class="vector-card-title">Vector A: Inversion</div>
            <div class="vector-card-desc">Forbids conventional caching/CRUD; inverts the constraint entirely.</div>
          </div>
          <div class="vector-card" onclick="selectVector('bisociation')" title="Click to apply Cross-Domain Bisociation (Koestler)">
            <div class="vector-card-title">Vector B: Bisociation</div>
            <div class="vector-card-desc">Cross-pollinates with Cellular Immunology, Mycelium, or Quantum optics.</div>
          </div>
          <div class="vector-card" onclick="selectVector('transcendence')" title="Click to apply Paradigm Transcendence (Moonshot)">
            <div class="vector-card-title">Vector C: Transcendence</div>
            <div class="vector-card-desc">Zero-state edge execution, mathematical determinism, zero coordination.</div>
          </div>
        </div>
        <div class="brainstorm-cta-row">
          <span style="font-size:8.5px; opacity:0.8; color:#cbd5e1;">Consensus Traps: <b style="color:#f87171;">Blocked</b></span>
          <button class="brainstorm-btn" onclick="triggerBrainstorm()" title="Synthesize master outside-the-box blueprint that forces models out of standard tropes">
            Synthesize Orthogonal Blueprint
          </button>
        </div>
      </div>

      <!-- Category Switcher -->
      <div class="target-tabs">
        <button class="target-tab active" id="tab-models" onclick="switchCategory('models')">Frontier Models (8)</button>
        <button class="target-tab" id="tab-bots" onclick="switchCategory('bots')">Coding Bots (7)</button>
        <button class="target-tab" id="tab-future" onclick="switchCategory('future')">Next-Gen &amp; Future AI (4)</button>
      </div>

      <!-- Models Grid -->
      <div class="targets-grid" id="grid-models">
        ${modelTargets.map(t => {
          const scoreClass = t.compatibilityScore >= 85 ? "score-green" : t.compatibilityScore >= 70 ? "score-yellow" : "score-red";
          const isActive = activeProfile === t.profileKey;
          return `
          <div class="target-btn ${isActive ? 'active' : ''}" onclick="selectTarget('${t.profileKey}')" title="${t.keyStrengths.join(', ')}">
            <div class="target-btn-top">
              <span>${t.name}</span>
              <span class="target-score ${scoreClass}">${t.compatibilityScore}%</span>
            </div>
            <div class="target-sub">
              <span>${t.provider}</span>
              <span>${t.latencyRating}</span>
            </div>
          </div>`;
        }).join('')}
      </div>

      <!-- Bots Grid -->
      <div class="targets-grid" id="grid-bots" style="display:none;">
        ${botTargets.map(t => {
          const scoreClass = t.compatibilityScore >= 85 ? "score-green" : t.compatibilityScore >= 70 ? "score-yellow" : "score-red";
          const isActive = activeProfile === t.profileKey;
          return `
          <div class="target-btn ${isActive ? 'active' : ''}" onclick="selectTarget('${t.profileKey}')" title="${t.keyStrengths.join(', ')}">
            <div class="target-btn-top">
              <span>${t.name}</span>
              <span class="target-score ${scoreClass}">${t.compatibilityScore}%</span>
            </div>
            <div class="target-sub">
              <span>${t.provider}</span>
              <span>${t.latencyRating}</span>
            </div>
          </div>`;
        }).join('')}
      </div>

      
      <!-- Next-Gen & Future AI Grid -->
      <div class="targets-grid" id="grid-future" style="display:none;">
        ${futureTargets.map(t => {
          const scoreClass = t.compatibilityScore >= 85 ? "score-green" : t.compatibilityScore >= 70 ? "score-yellow" : "score-red";
          const isActive = activeProfile === t.profileKey;
          return `
          <div class="target-btn ${isActive ? 'active' : ''}" onclick="selectTarget('${t.profileKey}')" title="${t.keyStrengths.join(', ')}">
            <div class="target-btn-top">
              <span>${t.name}</span>
              <span class="target-score ${scoreClass}">${t.compatibilityScore}%</span>
            </div>
            <div class="target-sub">
              <span>${t.provider}</span>
              <span>${t.latencyRating}</span>
            </div>
          </div>`;
        }).join('')}
      </div>

      <!-- Quick Metrics Bar -->
      <div class="stats-bar">
        <span class="stat-item">Compression: <b>-${metrics.tokenSavingsPercent}%</b></span>
        <span class="stat-item">Signal Score: <b>${metrics.iqScore}/100</b></span>
      </div>

      <!-- Live Telemetry -->
      <div class="telemetry-row">
        <span>Words: <b id="cnt-words">0</b></span>
        <span>Est. Tokens: <b id="cnt-tokens">0</b></span>
        <span>Characters: <b id="cnt-chars">0</b></span>
      </div>

      <!-- Polished Output -->
      <div class="editor-label">
        <span>Compiled Prompt</span>
        <span style="font-size:9.5px; opacity:0.6; cursor:pointer;" onclick="revertToOriginal()">Undo / Original</span>
      </div>
      <textarea id="output-box" class="prompt-text" oninput="updateLiveCounters()">${enhancedPrompt}</textarea>

      <!-- Action Buttons -->
      <div class="btn-row">
        <button class="btn" onclick="applyToEditor()">Apply (Alt+P)</button>
        <button class="btn btn-secondary" id="btn-copy" onclick="copyToClipboard()">Copy</button>
        <button class="btn btn-secondary" onclick="revertToOriginal()">Revert</button>
      </div>

      <!-- $0.99 / week Pro Access -->
      <div class="passkey-box">
        <div class="passkey-top">
          <span class="passkey-title">Pro Access ($0.99 / week)</span>
          ${!isLicensed ? `<button class="btn-buy" onclick="openCheckout()">Subscribe ($0.99)</button>` : '<span style="color:var(--success); font-weight:700;">ACTIVE</span>'}
        </div>
        <div style="opacity:0.8; font-size:9.5px;">
          Unlimited offline prompt improvements and benchmarks across all models and bots.
        </div>
        ${!isLicensed ? `
        <div class="passkey-form">
          <input type="text" id="passkey-input" class="passkey-input" placeholder="PSMITH-PRO-XXXX" />
          <button class="btn-apply-key" onclick="unlockKey()">Unlock</button>
        </div>` : ''}
      </div>

      <div class="floating-handle">Press Alt+P anytime on selected code or text</div>
    </div>
  </div>

  <script>
    const vscode = acquireVsCodeApi();
    const originalText = ${JSON.stringify(originalPrompt)};

    function switchCategory(cat) {
      const tabModels = document.getElementById("tab-models");
      const tabBots = document.getElementById("tab-bots");
      const tabFuture = document.getElementById("tab-future");
      const gridModels = document.getElementById("grid-models");
      const gridBots = document.getElementById("grid-bots");
      const gridFuture = document.getElementById("grid-future");

      if (cat === "models") {
        tabModels.classList.add("active");
        tabBots.classList.remove("active");
        if (tabFuture) tabFuture.classList.remove("active");
        gridModels.style.display = "grid";
        gridBots.style.display = "none";
        if (gridFuture) gridFuture.style.display = "none";
      } else if (cat === "bots") {
        tabBots.classList.add("active");
        tabModels.classList.remove("active");
        if (tabFuture) tabFuture.classList.remove("active");
        gridBots.style.display = "grid";
        gridModels.style.display = "none";
        if (gridFuture) gridFuture.style.display = "none";
      } else {
        if (tabFuture) tabFuture.classList.add("active");
        tabModels.classList.remove("active");
        tabBots.classList.remove("active");
        if (gridFuture) gridFuture.style.display = "grid";
        gridModels.style.display = "none";
        gridBots.style.display = "none";
      }
    }

    
    function triggerBrainstorm() {
      vscode.postMessage({ command: "triggerBrainstorm" });
    }

    function selectVector(vectorId) {
      vscode.postMessage({ command: "selectVector", vectorId });
    }

    function setDiscipline(discipline) {
      vscode.postMessage({ command: "changeDiscipline", discipline });
    }

    function setAudience(audience) {
      vscode.postMessage({ command: "changeAudience", audience });
    }

    function updateLiveCounters() {
      const text = document.getElementById("output-box").value || "";
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const tokens = Math.ceil(words * 1.33);
      document.getElementById("cnt-words").textContent = words;
      document.getElementById("cnt-tokens").textContent = tokens;
      document.getElementById("cnt-chars").textContent = text.length;
    }

    function revertToOriginal() {
      if (originalText) {
        document.getElementById("output-box").value = originalText;
        updateLiveCounters();
      }
    }

    function selectTarget(profile) {
      vscode.postMessage({ command: "changeProfile", profile });
    }

    function applyToEditor() {
      const text = document.getElementById("output-box").value;
      vscode.postMessage({ command: "insert", text });
    }

    function copyToClipboard() {
      const text = document.getElementById("output-box").value;
      vscode.postMessage({ command: "copy", text });
      const btn = document.getElementById("btn-copy");
      if (btn) {
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = "Copy"; }, 1800);
      }
    }

    function openCheckout() {
      vscode.postMessage({ command: "openCheckout" });
    }

    function unlockKey() {
      const key = document.getElementById("passkey-input").value.trim();
      if (key) {
        vscode.postMessage({ command: "unlockKey", key });
      }
    }

    // Draggable Mascot Handler
    const mascotBox = document.getElementById("draggable-mascot");
    let isDragging = false;
    let startX = 0, startY = 0, initialX = 0, initialY = 0;

    const savedState = vscode.getState();
    if (savedState && savedState.posX !== undefined) {
      initialX = savedState.posX;
      initialY = savedState.posY;
      mascotBox.style.transform = "translate(" + initialX + "px, " + initialY + "px)";
    }

    const avatar = document.querySelector(".mascot-avatar");
    avatar.addEventListener("mousedown", dragStart);
    avatar.addEventListener("touchstart", dragStart, { passive: false });

    function dragStart(e) {
      isDragging = true;
      if (e.type === "touchstart") {
        startX = e.touches[0].clientX - initialX;
        startY = e.touches[0].clientY - initialY;
      } else {
        startX = e.clientX - initialX;
        startY = e.clientY - initialY;
      }
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
      mascotBox.style.transform = "translate(" + initialX + "px, " + initialY + "px)";
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
