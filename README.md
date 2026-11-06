<p align="center">
  <img src="https://bartholomew.info/assets/promptsmith_mascot.png" width="140" height="140" alt="PromptSmith Mascot" />
</p>

<h1 align="center">PromptSmith</h1>

<p align="center">
  <strong>Maximizes performance, reasoning accuracy, and token efficiency for frontier AI models across VS Code, Cursor, Windsurf, and Claude Code.</strong>
</p>

<p align="center">
  <a href="https://open-vsx.org/extension/bartholomew/promptsmith-ai"><img src="https://img.shields.io/badge/Open--VSX-v2.3.2-blue.svg?style=flat-square" alt="Open-VSX" /></a>
  <a href="https://bartholomew.info/promptsmith"><img src="https://img.shields.io/badge/Web_Studio-Live-gold.svg?style=flat-square" alt="Web Studio" /></a>
  <a href="https://bartholomew.info/checkout/promptsmith"><img src="https://img.shields.io/badge/Passkey-$9/mo_or_$10-success.svg?style=flat-square" alt="Stripe Passkey" /></a>
  <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License" /></a>
</p>

---

## Overview

PromptSmith is an intelligent prompt structuring engine and in-editor companion designed to maximize the performance, reasoning accuracy, and token efficiency of frontier AI models.

When developers write raw prompts in natural conversational English, models spend high-priority self-attention capacity deciphering conversational filler rather than focusing on core algorithmic logic. PromptSmith decomposes everyday instructions into mathematically rigorous, high-density prompts tailored to the specific attention architecture of **Anthropic Claude 3.7 / 3.5 Sonnet**, **OpenAI o3 / o1**, **ChatGPT-4o**, **Google Gemini 2.0**, **DeepSeek R1**, and autonomous coding agents (**Cursor Composer**, **Windsurf Cascade**, **Claude Code**, **Aider**, **Cline**).

---

## Visual Demonstration & How It Works

PromptSmith operates directly inside your editor sidebar or floating panel. Either type/paste a draft into the **Input Draft** box and click **Optimize Prompt**, or highlight any draft text in a code editor and press `Alt+P` (or `Cmd+Alt+P` on macOS).

<p align="center">
  <img src="https://bartholomew.info/assets/promptsmith_screenshot.png" width="100%" alt="PromptSmith Before and After Optimization and Model Benchmark Matrix" />
</p>

### The Draggable Mascot Companion

PromptSmith includes a non-intrusive, floating screen companion cut out with zero background framing. You can drag the mascot header inside the studio or click the status bar sparkle icon to open the companion beside your active code editor.

<p align="center">
  <img src="https://bartholomew.info/assets/promptsmith_companion_screen.png" width="100%" alt="PromptSmith Draggable Screen Mascot in VS Code" />
</p>

---

## How Users Benefit

1. **Instant First-Pass Accuracy**
   - Eliminates the frustrating cycle of re-prompting models 3 to 5 times. By injecting explicit boundary conditions, typing constraints, and expected outputs, models return production-ready code on the first completion.

2. **25% to 45% Token Cost Reduction**
   - Conversational filler words like "could you please", "basically", and "write me a function that" are stripped out. In multi-turn agentic workflows, trimming these tokens saves significant API costs.

3. **Direct Sidebar Input or Editor Selection**
   - Type or paste any prompt directly in the PromptSmith sidebar and click **Optimize Prompt**, or highlight text in an active file and press `Alt+P`.

4. **Universal Domain Intelligence (16 Core Disciplines)**
   - Automatically adapts prompts across Systems Programming, Frontend Development, Machine Learning, Database Architecture, DevOps, Security Auditing, Quantitative Finance, Legal Compliance, Healthcare, and Technical Writing.

5. **Frontier Model & Bot Benchmark Matrix (19 Targets)**
   - Real-time scoring showing how well your prompt aligns with the architectural requirements of 8 Frontier Models, 7 Coding Bots, and 4 Next-Gen AI targets before you submit your request.

---

## Quick Start

1. Install the extension from the Open VSX Registry or `.vsix` package.
2. Open the **PromptSmith** sidebar from the Activity Bar, or press `Alt+Shift+P` (`Cmd+Shift+P` on macOS) to open the Mascot Assistant panel.
3. Type a raw prompt into the **Input Draft** box and click **Optimize Prompt**, or highlight text in any file and press `Alt+P`.
4. Select any target model or coding bot card to re-compile your prompt for that model's exact formatting schema.
5. Click **Copy** or **Insert** to use your structured prompt.

---

## License & Passkey Unlock

PromptSmith includes 10 free prompt optimizations out of the box. Unlimited offline optimizations and multi-model benchmarking can be unlocked with a **Developer Pro** subscription (**$9 / month**) or a **$10 One-Time Passkey** via Stripe at [bartholomew.info/checkout/promptsmith](https://bartholomew.info/checkout/promptsmith).

After checkout, click **Activate in VS Code / Cursor** on the confirmation page, or click **Enter Key** directly inside the PromptSmith sidebar and paste your `PSMITH-PRO-...` passkey or Stripe Session ID.

Licensed under the MIT License. Maintained by [Bartholomew](https://bartholomew.info).
