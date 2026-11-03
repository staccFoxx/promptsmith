/**
 * PromptSmith AI - Multi-Model Benchmark & Optimization Intelligence
 * Benchmarks prompts across Claude 3.5 Sonnet, OpenAI o1/o3-mini, GPT-4o, Gemini 2.0, and DeepSeek R1.
 */

export interface ModelBenchmarkResult {
  modelId: string;
  modelName: string;
  provider: string;
  badgeColor: string;
  compatibilityScore: number;
  latencyRating: "Ultra Fast" | "Fast" | "Reasoning Delay" | "Moderate";
  tokenEstimate: number;
  costEstimatePer1k: string;
  recommendations: string[];
  warnings: string[];
}

export class ModelBenchmarkEngine {
  public static benchmarkPrompt(prompt: string): ModelBenchmarkResult[] {
    const text = prompt.trim();
    if (!text) {
      return this.emptyBenchmarks();
    }

    const words = text.split(/\s+/).filter(Boolean);
    const estTokens = Math.ceil(words.length * 1.33);

    // Structural pattern detection
    const hasXmlTags = /<\/?[a-z_]+>/i.test(text);
    const hasScratchpad = /<(scratchpad|thinking|antthinking)>/i.test(text);
    const hasStepByStep = /\b(step[- ]by[- ]step|think step by step|walk through step by step)\b/i.test(text);
    const hasJsonSchema = /\b(json schema|output format: json|pydantic|\{[^{}]*"\w+"\s*:)/i.test(text);
    const hasDelimitedContext = /(---\s*BEGIN|```context|<context>|###\s*Context)/i.test(text);
    const hasNegativeConstraints = /\b(do not|never|must not|avoid|strictly)\b/i.test(text);
    const hasFewShot = /\b(example\s*\d*:|input:[\s\S]*output:)/i.test(text);
    const hasPoliteFiller = /\b(can you please|could you please|as an ai|i would like you to)\b/i.test(text);

    // 1. Anthropic Claude 3.5 Sonnet / Opus
    let claudeScore = 75;
    const claudeRecs: string[] = [];
    const claudeWarns: string[] = [];
    if (hasXmlTags) claudeScore += 15;
    else claudeRecs.push("Enclose task and constraints in XML tags (<task>, <constraints>) for strict instruction adherence.");
    if (hasScratchpad) claudeScore += 10;
    else if (words.length > 50) claudeRecs.push("Include a <scratchpad> or <thinking> block to maximize Claude's complex architectural reasoning.");
    if (hasPoliteFiller) {
      claudeScore -= 10;
      claudeWarns.push("Conversational preamble degrades Claude's system prompt signal.");
    }
    claudeScore = Math.min(100, Math.max(20, claudeScore));

    // 2. OpenAI o1 / o3-mini (Autonomous Reasoning)
    let openaiReasoningScore = 80;
    const o1Recs: string[] = [];
    const o1Warns: string[] = [];
    if (hasStepByStep) {
      openaiReasoningScore -= 25;
      o1Warns.push("CRITICAL: Remove 'think step-by-step'. Micromanaging o1/o3 reasoning heuristics degrades test-time compute performance.");
    } else {
      openaiReasoningScore += 10;
      o1Recs.push("Good: Autonomous reasoning enabled without micromanaging internal thinking steps.");
    }
    if (hasNegativeConstraints) openaiReasoningScore += 10;
    else o1Recs.push("Specify strict edge-case acceptance criteria and boundary invariants.");
    openaiReasoningScore = Math.min(100, Math.max(20, openaiReasoningScore));

    // 3. OpenAI GPT-4o / GPT-4.5 (Omni & Structured Output)
    let gpt4oScore = 70;
    const gptRecs: string[] = [];
    const gptWarns: string[] = [];
    if (hasJsonSchema) gpt4oScore += 20;
    else gptRecs.push("Define deterministic JSON schema with explicit property types for reliable tool invocation.");
    if (hasFewShot) gpt4oScore += 10;
    else gptRecs.push("Provide 1 concrete few-shot demonstration example to lock formatting precision.");
    if (!hasNegativeConstraints) gptRecs.push("Add explicit negative constraints to eliminate hallucinations.");
    gpt4oScore = Math.min(100, Math.max(20, gpt4oScore));

    // 4. Google Gemini 2.0 Flash / 1.5 Pro (High Context & Multimodal)
    let geminiScore = 75;
    const geminiRecs: string[] = [];
    const geminiWarns: string[] = [];
    if (hasDelimitedContext) geminiScore += 15;
    else geminiRecs.push("Demarcate reference documents from actionable tasks using clear block headers.");
    if (words.length < 30) geminiRecs.push("Gemini excels with rich background context; anchor the user persona and target outcome.");
    geminiScore = Math.min(100, Math.max(20, geminiScore));

    // 5. DeepSeek R1 / V3 (Frontier Reasoning & Code)
    let deepseekScore = 75;
    const dsRecs: string[] = [];
    const dsWarns: string[] = [];
    if (hasNegativeConstraints) deepseekScore += 15;
    else dsRecs.push("Define strict algorithmic boundaries and computational invariants.");
    if (hasStepByStep) {
      deepseekScore -= 15;
      dsWarns.push("DeepSeek R1 performs best when given the raw formal problem statement and verification tests.");
    }
    deepseekScore = Math.min(100, Math.max(20, deepseekScore));

    return [
      {
        modelId: "claude-3-5-sonnet",
        modelName: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        badgeColor: "#d97706",
        compatibilityScore: claudeScore,
        latencyRating: "Fast",
        tokenEstimate: estTokens,
        costEstimatePer1k: "$0.003",
        recommendations: claudeRecs,
        warnings: claudeWarns
      },
      {
        modelId: "openai-o1-o3",
        modelName: "o1 / o3-mini",
        provider: "OpenAI",
        badgeColor: "#10b981",
        compatibilityScore: openaiReasoningScore,
        latencyRating: "Reasoning Delay",
        tokenEstimate: estTokens,
        costEstimatePer1k: "$0.015",
        recommendations: o1Recs,
        warnings: o1Warns
      },
      {
        modelId: "gpt-4o",
        modelName: "GPT-4o",
        provider: "OpenAI",
        badgeColor: "#0ea5e9",
        compatibilityScore: gpt4oScore,
        latencyRating: "Fast",
        tokenEstimate: estTokens,
        costEstimatePer1k: "$0.0025",
        recommendations: gptRecs,
        warnings: gptWarns
      },
      {
        modelId: "gemini-2-flash",
        modelName: "Gemini 2.0 Flash",
        provider: "Google",
        badgeColor: "#8b5cf6",
        compatibilityScore: geminiScore,
        latencyRating: "Ultra Fast",
        tokenEstimate: estTokens,
        costEstimatePer1k: "$0.0001",
        recommendations: geminiRecs,
        warnings: geminiWarns
      },
      {
        modelId: "deepseek-r1",
        modelName: "DeepSeek R1",
        provider: "DeepSeek",
        badgeColor: "#3b82f6",
        compatibilityScore: deepseekScore,
        latencyRating: "Reasoning Delay",
        tokenEstimate: estTokens,
        costEstimatePer1k: "$0.00055",
        recommendations: dsRecs,
        warnings: dsWarns
      }
    ];
  }

  private static emptyBenchmarks(): ModelBenchmarkResult[] {
    return [
      {
        modelId: "claude-3-5-sonnet",
        modelName: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        badgeColor: "#d97706",
        compatibilityScore: 0,
        latencyRating: "Fast",
        tokenEstimate: 0,
        costEstimatePer1k: "$0.003",
        recommendations: ["Provide input prompt to benchmark"],
        warnings: []
      },
      {
        modelId: "openai-o1-o3",
        modelName: "o1 / o3-mini",
        provider: "OpenAI",
        badgeColor: "#10b981",
        compatibilityScore: 0,
        latencyRating: "Reasoning Delay",
        tokenEstimate: 0,
        costEstimatePer1k: "$0.015",
        recommendations: ["Provide input prompt to benchmark"],
        warnings: []
      },
      {
        modelId: "gpt-4o",
        modelName: "GPT-4o",
        provider: "OpenAI",
        badgeColor: "#0ea5e9",
        compatibilityScore: 0,
        latencyRating: "Fast",
        tokenEstimate: 0,
        costEstimatePer1k: "$0.0025",
        recommendations: ["Provide input prompt to benchmark"],
        warnings: []
      },
      {
        modelId: "gemini-2-flash",
        modelName: "Gemini 2.0 Flash",
        provider: "Google",
        badgeColor: "#8b5cf6",
        compatibilityScore: 0,
        latencyRating: "Ultra Fast",
        tokenEstimate: 0,
        costEstimatePer1k: "$0.0001",
        recommendations: ["Provide input prompt to benchmark"],
        warnings: []
      },
      {
        modelId: "deepseek-r1",
        modelName: "DeepSeek R1",
        provider: "DeepSeek",
        badgeColor: "#3b82f6",
        compatibilityScore: 0,
        latencyRating: "Reasoning Delay",
        tokenEstimate: 0,
        costEstimatePer1k: "$0.00055",
        recommendations: ["Provide input prompt to benchmark"],
        warnings: []
      }
    ];
  }
}
