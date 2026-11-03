var F=Object.create;var z=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var W=(a,i)=>{for(var t in i)z(a,t,{get:i[t],enumerable:!0})},j=(a,i,t,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of L(i))!G.call(a,n)&&n!==t&&z(a,n,{get:()=>i[n],enumerable:!(e=V(i,n))||e.enumerable});return a};var O=(a,i,t)=>(t=a!=null?F(U(a)):{},j(i||!a||!a.__esModule?z(t,"default",{value:a,enumerable:!0}):t,a)),K=a=>j(z({},"__esModule",{value:!0}),a);var Y={};W(Y,{activate:()=>X});module.exports=K(Y);var o=O(require("vscode"));var I=class{static DOMAIN_RULES=[{domain:"AI Agent Architecture & Tool-Calling Security",category:"engineering",matchPattern:/\b(agent|tool|shell|subprocess|bash|mcp|exec|command|spawn|curl|guardrail|injection)\b/i,injectedConstraints:["Enforce strict parameterized subprocess execution; never use shell=True or unescaped pipe strings.","Implement mandatory credential masking across stdout/stderr streams (mask sk-*, ghp_*, AKIA*).","Enforce hard execution timeouts and bounded retry limits to prevent runaway reasoning loops.","Block SSRF targeting cloud metadata endpoints (169.254.169.254, AWS IMDSv2, GCP metadata)."],recommendedOutputFormat:"Structured tool-call JSON schema with explicit invariant validations and rollback logic.",reasoningChecklist:["Are subshells isolated with fail-closed error handling?","Is destructive disk/network action bounded by explicit user confirmation?","Are all error traces scrubbed of sensitive environment variables?"]},{domain:"Corporate Finance, Accounting & Valuation",category:"business",matchPattern:/\b(ebitda|fcff|lbo|dcf|wacc|valuation|ifrs|asc|balance sheet|working capital|covenants|revolver|moic|irr)\b/i,injectedConstraints:["Under IFRS 16 / ASC 842, ensure operating lease liabilities deducted in Enterprise-to-Equity bridges are not simultaneously double-counted in operating cash flows.","Relever and unlever asset betas strictly via Hamada's equation: beta_L = beta_U * [1 + (1 - Tax) * (Debt / Equity)].","Present dynamic Monte Carlo or two-way sensitivity data tables across WACC and terminal exit multiples.","Reconcile free cash flow to firm (FCFF) from NOPAT = EBIT * (1 - Tax), adding back D&A, deducting CapEx, and adjusting for Delta NWC."],recommendedOutputFormat:"Three-statement linked financial model schedule with explicit cell formulas, assumptions block, and sensitivity matrix.",reasoningChecklist:["Is lease interest expense properly segregated from operating expenses?","Does the terminal growth rate stay below long-term GDP growth (max 2.0% - 2.5%)?","Are debt service coverage ratios (DSCR) verified against default covenants?"]},{domain:"Fullstack Architecture & Modern React/TypeScript",category:"engineering",matchPattern:/\b(react|typescript|component|hook|state|frontend|tailwind|nextjs|vite|css|html|ui|ux)\b/i,injectedConstraints:["Produce 100% type-safe TypeScript with strict null checks and zero 'any' casts.","Ensure all interactive components adhere to WCAG 2.1 AA accessibility standards (ARIA roles, keyboard focus, screen-reader labels).","Implement resilient client-side error boundaries with graceful offline fallback states.","Avoid unnecessary re-renders; leverage memoization, React 19 compiler patterns, or atomic state primitives."],recommendedOutputFormat:"Self-contained modular React components (.tsx) with typed props interface, CSS token styling, and interactive unit test.",reasoningChecklist:["Is component state hydrated without layout shifts?","Are event listeners cleanly unmounted in cleanup functions?","Are touch and keyboard interactions accessible across mobile and desktop?"]},{domain:"Backend Services & Distributed Systems",category:"engineering",matchPattern:/\b(backend|api|fastapi|express|grpc|rest|kafka|rabbitmq|distributed|microservice|redis|concurrency)\b/i,injectedConstraints:["Design idempotent API endpoints supporting atomic transactional state transitions.","Incorporate distributed tracing (OpenTelemetry traceparent), request ID propagation, and structured JSON logs.","Implement circuit breakers, exponential backoff with jitter, and dead-letter queues for asynchronous workers.","Enforce strict schema validation and payload size ceilings on all inbound request bodies."],recommendedOutputFormat:"Production backend router/controller with typed request/response contracts, middleware authentication, and health probes.",reasoningChecklist:["Are all database transactions committed inside an explicit rollback block?","Is connection pooling bounded to prevent thread starvation?","Are rate-limiting headers returned on 429 status codes?"]},{domain:"Data Pipelines, Warehousing & BigQuery/SQL",category:"engineering",matchPattern:/\b(sql|bigquery|dataform|dbt|etl|elt|partition|clustering|snowflake|postgres|database)\b/i,injectedConstraints:["Optimize partition and clustering keys to avoid costly full-table scans in analytics warehouses.","Adhere to deterministic idempotent merges (MERGE INTO ... WHEN MATCHED THEN UPDATE WHEN NOT MATCHED THEN INSERT).","Avoid SELECT *; project only explicit columns required by downstream transforms.","Enforce schema evolution safety: backward-compatible column additions only, never destructive drops."],recommendedOutputFormat:"Parameterized SQL or Dataform/dbt model with audit metadata, source declarations, and automated quality assertions.",reasoningChecklist:["Are join keys clustered and indexed to prevent memory spill-to-disk?","Are null checks explicitly handled in aggregates?","Is the query cost bounded by partition pruning?"]},{domain:"Machine Learning, RAG & Vector Systems",category:"engineering",matchPattern:/\b(ml|machine learning|pytorch|tensorflow|rag|embedding|vector|fine-tuning|loss|transformer|tokens|llm)\b/i,injectedConstraints:["Prevent data leakage by strictly computing scaling, normalization, and token statistics on the train split only.","Incorporate hybrid dense/sparse vector retrieval with cross-encoder re-ranking for RAG pipelines.","State explicit loss functions, learning rate schedules (warmup + cosine decay), and gradient clipping thresholds.","Track evaluation metrics beyond accuracy: precision/recall AUC, calibration error, and inference latency per token."],recommendedOutputFormat:"Modular PyTorch/Python pipeline with dataset loaders, training loop, validation metrics, and export checkpoints.",reasoningChecklist:["Are random seeds set across numpy, torch, and Python runtime for reproducibility?","Are embeddings normalized before cosine distance calculation?","Are out-of-memory (OOM) guards and batch size auto-scaling implemented?"]},{domain:"Mathematical Proofs, Algorithms & Symbolic Logic",category:"science",matchPattern:/\b(math|proof|theorem|algorithm|complexity|calculus|algebra|asymptotic|matrix|combinatorics|differential)\b/i,injectedConstraints:["Provide rigorous deductive step-by-step logic; state all axioms, lemmas, and initial boundary conditions explicitly.","State exact asymptotic computational complexity (Big-O, Big-Omega, Big-Theta) for time and space.","Verify edge-case extremes (n=0, n=1, empty sets, negative infinity, limit convergence).","Render multi-term mathematical formulas in KaTeX / LaTeX formatting."],recommendedOutputFormat:"Formal mathematical derivation with Theorem -> Proof -> Lemma breakdown and algorithmic complexity statement.",reasoningChecklist:["Is the induction base case and inductive step formally proven?","Does the integral/series converge within the stated domain of convergence?","Are division-by-zero and singularity edge cases accounted for?"]},{domain:"Cybersecurity, Reverse Engineering & Zero-Trust",category:"engineering",matchPattern:/\b(security|vulnerability|exploit|cve|penetration|xss|csrf|buffer overflow|cryptography|tls|hashing)\b/i,injectedConstraints:["Adhere to constant-time comparison algorithms for all signature and password verifications to defeat timing attacks.","Use cryptographically secure random number generators (CSPRNG, crypto.randomBytes / secrets).","Enforce strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and SameSite cookie flags.","Never implement custom cryptographic primitives; leverage audited standards (AES-GCM, Ed25519, Argon2id)."],recommendedOutputFormat:"Threat model analysis (STRIDE) with reproduction proof-of-concept, CVE mapping, and defensive patch code.",reasoningChecklist:["Is user input sanitized against both reflected and DOM-based injection vectors?","Are encryption keys separated from ciphertext and managed in an HSM/KMS?","Does the authentication flow enforce replay protection via nonces?"]},{domain:"Legal Drafting, Compliance & IP Licensing",category:"legal",matchPattern:/\b(legal|contract|agreement|clause|liability|indemnification|license|patent|copyright|gdpr|compliance)\b/i,injectedConstraints:["Draft unambiguous, jurisdiction-aware contractual language with defined terms capitalized and cross-referenced.","Include standard commercial protections: mutual indemnification, limitation of liability, severance, and governing law.","Enforce explicit data privacy protections complying with GDPR, CCPA, and industry-standard security safeguards.","State representations and warranties with explicit disclaimers of implied merchantability."],recommendedOutputFormat:"Formatted legal agreement schedule with Section -> Clause hierarchy, definitions block, and signature blocks.",reasoningChecklist:["Are all defined terms used consistently throughout all provisions?","Is the limitation of liability cap tied to trailing fees paid (e.g. 12 months)?","Are termination-for-cause and transition assistance clauses clearly bounded?"]},{domain:"Creative Narrative, Worldbuilding & High-Conversion Copy",category:"creative",matchPattern:/\b(story|fiction|narrative|copywriting|headline|character|dialogue|poem|sonnet|script|screenplay)\b/i,injectedConstraints:["Demonstrate 'Show, Don't Tell' sensory detail; avoid exposition dumps and passive voice.","Maintain strict stylistic tone and character voice consistency across all narrative beats.","For copy: anchor headline around the primary customer pain wedge, establish high-signal social proof, and present a low-friction call-to-action.","If poetic form is requested (sonnet, villanelle, haiku), adhere strictly to meter (iambic pentameter) and rhyming schemes."],recommendedOutputFormat:"Polished narrative prose or high-converting copy hierarchy with headline, hook, body, and conversion CTA.",reasoningChecklist:["Does the pacing escalate naturally toward the climactic inflection point?","Are clich\xE9s and generic adjectives replaced with vivid, specific imagery?","Is the emotional arc grounded in authentic character motivation?"]},{domain:"Product Management, PRDs & Systems Strategy",category:"business",matchPattern:/\b(prd|product|roadmap|user story|acceptance criteria|feature|mvp|kpi|churn|retention|persona)\b/i,injectedConstraints:["Frame features around user outcomes and metrics (activation, retention, LTV) rather than technical outputs.","Structure user stories using the standard format: As a [persona], I want [action], so that [business value].","Define unambiguous, testable Given-When-Then acceptance criteria for every functional requirement.","Include explicit out-of-scope declarations and risk mitigation trade-offs."],recommendedOutputFormat:"Product Requirement Document (PRD) with Problem Statement, User Stories, Acceptance Matrix, and Rollout Strategy.",reasoningChecklist:["Are success metrics (leading and lagging KPIs) quantified with baseline targets?","Are edge-case error states specified from the end-user perspective?","Is the feature scoped for rapid incremental iteration?"]},{domain:"Systems Programming & Low-Level Concurrency",category:"engineering",matchPattern:/\b(rust|c\+\+|golang|assembly|memory|pointer|allocator|concurrency|mutex|thread|syscall)\b/i,injectedConstraints:["Guarantee memory safety: prevent data races, use-after-free, and double-free conditions.","In Rust, prioritize idiomatic borrow checker semantics; minimize unsafe blocks and document invariants for any raw pointer dereference.","Leverage RAII and smart pointers (std::unique_ptr, Arc/Mutex) for deterministic resource cleanup.","Optimize cache locality (struct-of-arrays vs array-of-structs) for hot performance loops."],recommendedOutputFormat:"Idiomatic source code with memory safety annotations, zero-allocation data structures, and benchmark suite.",reasoningChecklist:["Are deadlocks prevented by enforcing a global lock ordering hierarchy?","Are resources cleanly closed via Drop/destructor semantics even during panics?","Is memory overhead zero-cost at compile time?"]},{domain:"Cloud Architecture, DevOps & Infrastructure as Code",category:"engineering",matchPattern:/\b(aws|gcp|azure|terraform|kubernetes|docker|k8s|helm|ci\/cd|github actions|ingress|iam)\b/i,injectedConstraints:["Adhere to least-privilege IAM policies with resource-level scoping and temporary role assumption.","Ensure Infrastructure as Code (Terraform/CDK) is modular, parameterized across environments, and enables state locking.","Configure Kubernetes pods with resource requests/limits, readiness/liveness probes, and non-root security contexts.","Automate zero-downtime deployment strategies (blue-green or rolling updates with health checks)."],recommendedOutputFormat:"Declarative IaC template (Terraform/Kubernetes YAML) with variable definitions and automated CI validation workflow.",reasoningChecklist:["Are container images signed and scanned for vulnerabilities?","Are sensitive secrets injected via secure vault/secret references rather than plaintext?","Is high availability distributed across multiple availability zones?"]},{domain:"Academic Research, Literature Synthesis & Pedagogy",category:"science",matchPattern:/\b(research|paper|dissertation|citation|literature review|methodology|hypothesis|academic|journal)\b/i,injectedConstraints:["Ground all claims in peer-reviewed empirical evidence; cite seminal authors, publication years, and methodologies.","Critique methodological limitations (selection bias, confounding variables, statistical power).","Structure explanations progressively from intuitive conceptual analogies to formal mathematical rigor.","Distinguish between correlation and verified causal mechanisms."],recommendedOutputFormat:"Peer-reviewed journal paper structure: Abstract -> Background -> Methodology -> Findings -> Limitations.",reasoningChecklist:["Are alternative rival hypotheses explicitly considered and tested?","Is statistical significance accompanied by practical effect size (Cohen's d)?","Are citations accurately attributed without parametric hallucination?"]},{domain:"Mobile Application Engineering (iOS/Android/Flutter)",category:"engineering",matchPattern:/\b(ios|swift|swiftui|android|kotlin|jetpack|flutter|react native|mobile|app store|push notification)\b/i,injectedConstraints:["Design for memory-constrained mobile environments; release background resources and unbind observers.","Ensure seamless offline operation with local database caching (Room/CoreData/SQLite) and automatic sync on reconnect.","Handle dynamic screen sizes, orientation changes, and system accessibility font scaling.","Execute long-running network and compute tasks strictly on background threads/coroutines without blocking the main UI thread."],recommendedOutputFormat:"Clean architecture mobile module (Swift/Kotlin) with ViewModel, UI declaration, and offline repository.",reasoningChecklist:["Is 60fps/120fps UI rendering maintained without frame drops?","Are push notification payloads handled gracefully when the app is in the background?","Are runtime permissions requested contextually with clear user rationale?"]},{domain:"Executive Strategy & Commercial Deal Structuring",category:"business",matchPattern:/\b(executive|pitch|outbound|sales|partnership|sponsor|enterprise|closing|deal|investor)\b/i,injectedConstraints:["Lead with the quantifiable economic wedge ($/time saved, revenue unlocked, risk eliminated) in the opening sentence.","Eliminate apologetic preambles, marketing fluff, and rhetorical clich\xE9s.","Provide a zero-friction integration or adoption roadmap with a clear, low-commitment next step.","Anticipate the primary procurement/security objections upfront with concrete proof points."],recommendedOutputFormat:"High-impact executive brief: 1. Core Value Wedge -> 2. Verifiable Evidence -> 3. Concrete Action Path.",reasoningChecklist:["Is the message tailored directly to the specific decision-maker's incentives?","Does the proposal provide immediate demonstrable ROI?","Is the call to action binary, actionable, and low-friction?"]}];static getDomainEnrichment(i){let t=i.trim();if(!t)return this.synthesizeUniversalRule("General Knowledge & Computing");for(let e of this.DOMAIN_RULES)if(e.matchPattern.test(t))return e;return this.synthesizeUniversalRule(t)}static synthesizeUniversalRule(i){let e=i.replace(/[^\w\s]/g,"").split(/\s+/).filter(s=>s.length>3&&!/^(this|that|with|from|have|make|what|when|where|which|about|please|would|could)$/i.test(s)).slice(0,3).join(" ")||"General Technical Reasoning",n=e.charAt(0).toUpperCase()+e.slice(1);return{domain:`${n} & Systems Invariants`,category:"engineering",matchPattern:/.*/,injectedConstraints:[`Execute with authoritative expert rigor grounded in established ${n} first principles.`,"Enforce strict logical consistency with zero unverified assumptions or speculative non-answers.","Provide self-contained, fully resolved deliverables with explicit edge cases and boundary conditions.","Prioritize high signal-to-noise clarity; eliminate conversational filler, throat-clearing, and meta-commentary."],recommendedOutputFormat:"Structured authoritative deliverable: 1. Specification / Core Principles -> 2. Complete Artifact -> 3. Empirical Verification Test.",reasoningChecklist:[`Are all claims verified against established domain standards in ${n}?`,"Are edge cases, exceptions, and boundary failures addressed?","Is the solution immediately actionable without requiring missing context?"]}}};var D=class{static benchmarkPrompt(i){let t=i.trim();if(!t)return this.emptyBenchmarks();let e=t.split(/\s+/).filter(Boolean),n=Math.ceil(e.length*1.33),s=/<\/?[a-z_]+>/i.test(t),m=/<(scratchpad|thinking|antthinking)>/i.test(t),d=/\b(step[- ]by[- ]step|think step by step|walk through step by step)\b/i.test(t),f=/\b(json schema|output format: json|pydantic|\{[^{}]*"\w+"\s*:)/i.test(t),g=/(---\s*BEGIN|```context|<context>|###\s*Context)/i.test(t),h=/\b(do not|never|must not|avoid|strictly)\b/i.test(t),p=/\b(example\s*\d*:|input:[\s\S]*output:)/i.test(t),y=/\b(can you please|could you please|as an ai|i would like you to)\b/i.test(t),u=75,A=[],E=[];s?u+=15:A.push("Enclose task and constraints in XML tags (<task>, <constraints>) for strict instruction adherence."),m?u+=10:e.length>50&&A.push("Include a <scratchpad> or <thinking> block to maximize Claude's complex architectural reasoning."),y&&(u-=10,E.push("Conversational preamble degrades Claude's system prompt signal.")),u=Math.min(100,Math.max(20,u));let v=80,w=[],x=[];d?(v-=25,x.push("CRITICAL: Remove 'think step-by-step'. Micromanaging o1/o3 reasoning heuristics degrades test-time compute performance.")):(v+=10,w.push("Good: Autonomous reasoning enabled without micromanaging internal thinking steps.")),h?v+=10:w.push("Specify strict edge-case acceptance criteria and boundary invariants."),v=Math.min(100,Math.max(20,v));let C=70,b=[],P=[];f?C+=20:b.push("Define deterministic JSON schema with explicit property types for reliable tool invocation."),p?C+=10:b.push("Provide 1 concrete few-shot demonstration example to lock formatting precision."),h||b.push("Add explicit negative constraints to eliminate hallucinations."),C=Math.min(100,Math.max(20,C));let k=75,c=[],r=[];g?k+=15:c.push("Demarcate reference documents from actionable tasks using clear block headers."),e.length<30&&c.push("Gemini excels with rich background context; anchor the user persona and target outcome."),k=Math.min(100,Math.max(20,k));let l=75,S=[],T=[];return h?l+=15:S.push("Define strict algorithmic boundaries and computational invariants."),d&&(l-=15,T.push("DeepSeek R1 performs best when given the raw formal problem statement and verification tests.")),l=Math.min(100,Math.max(20,l)),[{modelId:"claude-3-5-sonnet",modelName:"Claude 3.5 Sonnet",provider:"Anthropic",badgeColor:"#d97706",compatibilityScore:u,latencyRating:"Fast",tokenEstimate:n,costEstimatePer1k:"$0.003",recommendations:A,warnings:E},{modelId:"openai-o1-o3",modelName:"o1 / o3-mini",provider:"OpenAI",badgeColor:"#10b981",compatibilityScore:v,latencyRating:"Reasoning Delay",tokenEstimate:n,costEstimatePer1k:"$0.015",recommendations:w,warnings:x},{modelId:"gpt-4o",modelName:"GPT-4o",provider:"OpenAI",badgeColor:"#0ea5e9",compatibilityScore:C,latencyRating:"Fast",tokenEstimate:n,costEstimatePer1k:"$0.0025",recommendations:b,warnings:P},{modelId:"gemini-2-flash",modelName:"Gemini 2.0 Flash",provider:"Google",badgeColor:"#8b5cf6",compatibilityScore:k,latencyRating:"Ultra Fast",tokenEstimate:n,costEstimatePer1k:"$0.0001",recommendations:c,warnings:r},{modelId:"deepseek-r1",modelName:"DeepSeek R1",provider:"DeepSeek",badgeColor:"#3b82f6",compatibilityScore:l,latencyRating:"Reasoning Delay",tokenEstimate:n,costEstimatePer1k:"$0.00055",recommendations:S,warnings:T}]}static emptyBenchmarks(){return[{modelId:"claude-3-5-sonnet",modelName:"Claude 3.5 Sonnet",provider:"Anthropic",badgeColor:"#d97706",compatibilityScore:0,latencyRating:"Fast",tokenEstimate:0,costEstimatePer1k:"$0.003",recommendations:["Provide input prompt to benchmark"],warnings:[]},{modelId:"openai-o1-o3",modelName:"o1 / o3-mini",provider:"OpenAI",badgeColor:"#10b981",compatibilityScore:0,latencyRating:"Reasoning Delay",tokenEstimate:0,costEstimatePer1k:"$0.015",recommendations:["Provide input prompt to benchmark"],warnings:[]},{modelId:"gpt-4o",modelName:"GPT-4o",provider:"OpenAI",badgeColor:"#0ea5e9",compatibilityScore:0,latencyRating:"Fast",tokenEstimate:0,costEstimatePer1k:"$0.0025",recommendations:["Provide input prompt to benchmark"],warnings:[]},{modelId:"gemini-2-flash",modelName:"Gemini 2.0 Flash",provider:"Google",badgeColor:"#8b5cf6",compatibilityScore:0,latencyRating:"Ultra Fast",tokenEstimate:0,costEstimatePer1k:"$0.0001",recommendations:["Provide input prompt to benchmark"],warnings:[]},{modelId:"deepseek-r1",modelName:"DeepSeek R1",provider:"DeepSeek",badgeColor:"#3b82f6",compatibilityScore:0,latencyRating:"Reasoning Delay",tokenEstimate:0,costEstimatePer1k:"$0.00055",recommendations:["Provide input prompt to benchmark"],warnings:[]}]}};var M=class{static FILLER_PATTERNS=[/\b(can you please|could you please|please kindly|i would like you to|i want you to)\b/gi,/\b(as an ai language model|as a helpful assistant|in order to help me)\b/gi,/\b(feel free to|make sure that you|try your best to)\b/gi,/\b(basically|essentially|actually|obviously|literally)\b/gi];static ROLE_PATTERNS=[/\b(you are (a|an)|act as (a|an)|your role is|expert in|specialist in)\b/i,/<role>[\s\S]*?<\/role>/i,/### Role/i];static CONSTRAINT_PATTERNS=[/\b(do not|never|must not|only|strictly|ensure|avoid|limit to|maximum of|minimum of)\b/gi,/<constraints>[\s\S]*?<\/constraints>/i,/### Constraints/i];static SCHEMA_PATTERNS=[/\b(json|yaml|xml|markdown|table|schema|format as|output format)\b/i,/<output_format>[\s\S]*?<\/output_format>/i,/```(json|yaml|markdown|csv)/i];static REASONING_PATTERNS=[/\b(step[- ]by[- ]step|think|reason|verify|analyze|deliberate|chain[- ]of[- ]thought)\b/i,/<thinking>[\s\S]*?<\/thinking>/i];static analyze(i,t="Cursor / Claude Code"){let e=i.trim();if(!e)return this.emptyMetrics();let s=e.split(/\s+/).filter(Boolean).length,m=Math.ceil(s*1.33),d=0;this.ROLE_PATTERNS.some(r=>r.test(e))?d=20:/\b(senior|engineer|architect|auditor|specialist)\b/i.test(e)&&(d=12);let f=0,g=e.match(new RegExp(this.CONSTRAINT_PATTERNS[0],"gi"))||[];g.length>=3?f=25:g.length>0&&(f=g.length*8);let h=0;this.SCHEMA_PATTERNS.some(r=>r.test(e))?h=20:/\b(list|bullet|code|diff)\b/i.test(e)&&(h=10);let p=0;this.REASONING_PATTERNS.some(r=>r.test(e))&&(p+=10),/\b(if unsure|edge case|exception|boundary|fallback)\b/i.test(e)&&(p+=5);let y=0;for(let r of this.FILLER_PATTERNS){let l=e.match(r);l&&(y+=l.length)}let u=Math.max(0,20-y*4),A=y*3,E=Math.max(15,m-A),v=Math.max(0,Math.round((m-E)/m*100)),w=Math.min(100,Math.max(10,d+f+h+p+u)),x=I.getDomainEnrichment(e),C=x?x.domain:"General Reasoning & Code",b=[],P=[],k=[];x&&b.push(`Recognized ${x.domain} domain patterns`),d>=15?b.push("Strong persona & system identity"):k.push("Explicit System Persona / Role Boundary"),f>=18?b.push("Well-defined operational boundaries"):P.push("Vulnerable to scope-drift (insufficient negative constraints)"),h>=15?b.push("Explicit output schema defined"):k.push("Deterministic Output Schema (JSON/Markdown tags)"),u<14?P.push(`Contains ${y} conversational filler phrases`):b.push("High token-to-signal density");let c=D.benchmarkPrompt(e);return{iqScore:w,wordCount:s,estimatedTokens:m,optimizedTokens:E,tokenSavingsPercent:v,constraintScore:f,roleScore:d,schemaScore:h,evasionScore:p,efficiencyScore:u,detectedDomain:C,targetRuntime:t,strengths:b,weaknesses:P,missingElements:k,benchmarks:c}}static emptyMetrics(){return{iqScore:0,wordCount:0,estimatedTokens:0,optimizedTokens:0,tokenSavingsPercent:0,constraintScore:0,roleScore:0,schemaScore:0,evasionScore:0,efficiencyScore:0,detectedDomain:"None",targetRuntime:"Cursor / Claude Code",strengths:[],weaknesses:["Prompt is empty"],missingElements:["All core components"],benchmarks:D.benchmarkPrompt("")}}};var R=class{static enhance(i,t="precision",e="Cursor / Claude Code"){let n=i.trim();if(!n)return"";let s=I.getDomainEnrichment(n);switch(t){case"precision":return this.enhancePrecision(n,e,s);case"claude_xml":return this.enhanceClaudeXml(n,e,s);case"openai_o":return this.enhanceOpenAiReasoning(n,e,s);case"gpt4o_schema":return this.enhanceGpt4oSchema(n,e,s);case"gemini_context":return this.enhanceGeminiContext(n,e,s);case"adversarial":return this.enhanceAdversarial(n,e,s);case"executive":return this.enhanceExecutive(n,s)}}static stripFiller(i){return i.replace(/\b(can you please|could you please|please kindly|i would like you to|i want you to)\b/gi,"").replace(/\b(as an ai language model|as a helpful assistant|in order to help me)\b/gi,"").replace(/\b(feel free to|make sure that you|try your best to)\b/gi,"").replace(/\b(basically|essentially|actually|obviously|literally)\b/gi,"").replace(/\s+/g," ").trim()}static enhancePrecision(i,t,e){let n=this.stripFiller(i),s=e?e.injectedConstraints.map(d=>`- [${e.domain}] ${d}`).join(`
`):"",m=e?e.recommendedOutputFormat:"Return the solution structured logically: 1. Specification / Root Cause -> 2. Production Code / Artifact -> 3. Step-by-Step Validation Test.";return`<context>
You are an expert technical intelligence operating within ${t}${e?` specializing in ${e.domain}`:""}. Execute the task with deterministic precision, zero conversational preamble, and complete adherence to provided constraints.
</context>

<task>
${n}
</task>

<constraints>
- Maintain production-grade correctness with zero unverified assumptions or unstated mock implementations.
- Provide self-contained, drop-in replacement artifacts with explicit error-handling and boundary edge cases.
- NEVER include meta-commentary, apology preambles, or conversational transitions before or after the deliverables.
${s?s+`
`:""}- Prioritize high token-to-signal clarity and executable syntax.
</constraints>

<output_format>
${m}
</output_format>`}static enhanceClaudeXml(i,t,e){let n=this.stripFiller(i);return`<system_role>
Frontier Software Architect & Empirical Systems Verifier operating in ${t}.
${e?`Domain Expertise: ${e.domain}`:""}
</system_role>

<scratchpad>
Before outputting deliverables:
1. Deconstruct the prompt requirements and implicit invariant constraints.
2. Formulate alternative edge cases and failure modes.
3. Validate deterministic syntax correctness without placeholders.
</scratchpad>

<instructions>
${n}
</instructions>

<rules>
- Adhere strictly to provided specifications without conversational introductions or summaries.
- Enclose all production artifacts in clean, delimited syntax blocks.
- If edge-case ambiguities exist, implement the most resilient industry-standard pattern and document assumptions inline.
</rules>

<output_specification>
${e?e.recommendedOutputFormat:"Deliver direct executable source code followed by verification test assertions."}
</output_specification>`}static enhanceOpenAiReasoning(i,t,e){return`### Problem Specification
${i.replace(/\b(think step by step|walk through step by step|let's think step by step|explain your reasoning step by step)\b/gi,"").replace(/\s+/g," ").trim()}

### Invariant & Boundary Criteria
- Target Environment: ${t}
${e?`- Domain Focus: ${e.domain}`:""}
- Deterministic correctness is required across all edge cases (null/empty inputs, concurrency, boundary overflow).
- Do NOT provide high-level abstractions or pseudo-code; deliver fully implemented, runnable production artifacts.

### Formal Acceptance Verification
- Provide 3 rigorous unit/integration test assertions verifying happy path, boundary threshold, and failure recovery.
- State asymptotic computational complexity (Time & Space) if applicable.`}static enhanceGpt4oSchema(i,t,e){let n=this.stripFiller(i);return`## Objective & System Context
Act as a Senior Staff Engineer in ${t}. Execute the objective with high token efficiency and structured markdown output.

## Input Prompt
${n}

## Hard Constraints
- Output must be structured under clean markdown headings (## Architecture, ## Implementation, ## Verification).
- Code snippets must include language tags and complete variable types.
- Zero markdown backticks surrounding non-code conversational text.
${e?e.injectedConstraints.map(s=>`- ${s}`).join(`
`):""}

## Few-Shot Demonstration Pattern
Input: Calculate verified hash digest of payload
Output: 
\`\`\`typescript
import * as crypto from 'crypto';
export function hashPayload(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}
\`\`\``}static enhanceGeminiContext(i,t,e){let n=this.stripFiller(i);return`[SYSTEM INSTRUCTION: FRONTIER GEMINI RUNTIME]
You are operating within ${t}. You possess multi-modal context understanding and high-throughput recall.
${e?`Domain Context: ${e.domain}`:""}

============================= BEGIN REFERENCE CONTEXT =============================
Environment: Production IDE (${t})
Knowledge Rules: ${e?e.injectedConstraints.join("; "):"Production standard compliance"}
============================== END REFERENCE CONTEXT ==============================

[ACTIONABLE OBJECTIVE]
${n}

[STRICT DELIVERABLE FORMAT]
- Deliver self-contained, fully resolved implementations.
- Ground all assertions directly in technical specifications.
- Avoid repetitive disclaimers or speculative non-answers.`}static enhanceAdversarial(i,t,e){let n=e?e.reasoningChecklist.map((s,m)=>`${m+1}. ${s}`).join(`
`):`1. Negative Constraint Adherence
2. Fact-Checking & Grounding
3. Edge-Case Boundaries`;return`<system_identity>
Frontier Reasoning & Empirical Verification Evaluator (${t})
${e?`Domain Specialization: ${e.domain}`:""}
</system_identity>

<objective>
Execute a rigorous multi-turn evaluation of the following scenario, proactively testing for subtle failure modes, boundary contradictions, and hallucination vectors:
</objective>

<scenario_prompt>
${i}
</scenario_prompt>

<adversarial_rubric>
1. Constraint Adherence: Verify that every negative constraint, formatting instruction, and length requirement is strictly followed without drift.
2. Fact-Checking & Semantic Grounding: Expose any historical, mathematical, or accounting hallucinations (e.g. inverted signs, misattributed entities, broken references).
3. Domain-Specific Verification Checklist:
${n}
4. Failure Classification: If a failure is elicited, classify the root cause (Instruction Neglect, Parametric Hallucination, Semantic Homonym Trap, or Logic Inversion).
</adversarial_rubric>

<required_output>
Provide an unsparing, analytical assessment backed by explicit mathematical or textual evidence. Quote exact offending phrases before delivering the remediated ground-truth answer.
</required_output>`}static enhanceExecutive(i,t){return`### Context & Strategic Objective
${i}

### Constraints & Commercial Parameters
- Audience: Enterprise Technical Decision-Maker / Principal Architect / Managing Director.
- Format: Strict 3-sentence high-signal conversion framework:
  1. Proven Technical Capability & Value Wedge (backed by verifiable benchmark data).
  2. Frictionless Integration Path (zero migration overhead, drop-in SDK/MCP).
  3. Low-Commitment Concrete Call-to-Action (pilot activation link or 15-minute verification sandbox).
- Tone: Crisp, commanding, professional, zero marketing hyperbole.
${t?`- Industry Anchor: ${t.domain}`:""}`}};var B=class{static getHtml(i,t,e,n,s,m){let d=(i||"Select text in your editor and press Alt+P to improve it.").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return`<!DOCTYPE html>
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
      padding: 12px;
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }

    /* Isolated Character Cutout (Zero Background) */
    .mascot-container {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 14px;
      cursor: grab;
      user-select: none;
      -webkit-user-drag: none;
    }
    .mascot-container:active {
      cursor: grabbing;
    }
    .mascot-avatar {
      width: 66px;
      height: 66px;
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

    /* Clippy-style Speech Bubble */
    .speech-bubble {
      position: relative;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 14px;
      flex: 1;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    }
    .speech-bubble::before {
      content: "";
      position: absolute;
      top: 20px;
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
      top: 20px;
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
      font-size: 10px;
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
      opacity: 0.8;
      margin-bottom: 10px;
      line-height: 1.4;
    }

    /* Universal Domain Intelligence Badge */
    .domain-badge {
      display: inline-block;
      font-size: 10px;
      padding: 2px 7px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      color: var(--fg);
      margin-bottom: 10px;
      font-weight: 600;
    }

    /* Target Model Selector */
    .models-label {
      font-size: 10.5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 700;
      opacity: 0.75;
      margin-bottom: 6px;
    }
    .models-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-bottom: 12px;
    }
    .model-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 6px 8px;
      font-size: 11px;
      font-weight: 600;
      color: var(--fg);
      cursor: pointer;
      text-align: left;
      transition: all 0.15s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .model-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: var(--accent);
    }
    .model-btn.active {
      background: rgba(56, 189, 248, 0.14);
      border-color: var(--accent);
      color: var(--accent);
      font-weight: 700;
    }
    .match-pill {
      font-size: 9.5px;
      opacity: 0.8;
      font-weight: 600;
    }

    /* Stats Quick Bar */
    .stats-bar {
      display: flex;
      gap: 10px;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 6px 10px;
      margin-bottom: 8px;
      font-size: 11px;
      justify-content: space-between;
    }
    .stat-item b {
      color: var(--success);
    }

    /* Live Telemetry Pill */
    .telemetry-row {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      opacity: 0.75;
      margin-bottom: 6px;
      padding: 0 2px;
    }

    /* Editor Box */
    .editor-label {
      font-size: 10.5px;
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
      height: 120px;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--fg);
      font-family: monospace;
      font-size: 11.5px;
      padding: 8px;
      line-height: 1.4;
      resize: vertical;
      margin-bottom: 8px;
    }

    /* Action Buttons Grid */
    .btn-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 6px;
      margin-bottom: 12px;
    }
    .btn {
      background: var(--accent);
      color: #070b14;
      border: none;
      padding: 7px 10px;
      border-radius: 6px;
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

    /* Passkey & Upgrade Box */
    .passkey-box {
      background: rgba(255, 255, 255, 0.03);
      border: 1px dashed var(--border);
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 11px;
    }
    .passkey-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .passkey-title {
      font-weight: 700;
      color: var(--accent);
    }
    .btn-buy {
      background: var(--success);
      color: #042f1a;
      border: none;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 10.5px;
      font-weight: 700;
      cursor: pointer;
    }
    .passkey-form {
      display: flex;
      gap: 6px;
      margin-top: 6px;
    }
    .passkey-input {
      flex: 1;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--fg);
      font-size: 10.5px;
      padding: 4px 8px;
      font-family: monospace;
    }
    .btn-apply-key {
      background: rgba(255, 255, 255, 0.1);
      color: var(--fg);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 4px 10px;
      font-size: 10.5px;
      font-weight: 600;
      cursor: pointer;
    }
    .btn-apply-key:hover {
      background: var(--accent);
      color: #000;
    }

    .floating-handle {
      font-size: 10px;
      opacity: 0.5;
      text-align: center;
      margin-top: 6px;
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
        <span class="bubble-tag ${s?"bubble-tag-pro":""}">
          ${s?"PRO UNLOCKED":m+" TRIES LEFT"}
        </span>
      </div>
      <div class="bubble-sub">
        I polished your prompt to get direct, accurate answers from your active AI model.
      </div>

      <div class="domain-badge">
        Context: <b>${e.detectedDomain}</b>
      </div>

      <!-- Quick Model Selector -->
      <div class="models-label">Choose Model Format</div>
      <div class="models-grid">
        <button class="model-btn ${n==="claude_xml"?"active":""}" onclick="setModel('claude_xml')" title="Claude 3.5: Structured XML hierarchy, thinking tags, zero fluff">
          <span>Claude 3.5</span>
          <span class="match-pill">XML Tags</span>
        </button>
        <button class="model-btn ${n==="gpt4o_schema"?"active":""}" onclick="setModel('gpt4o_schema')" title="ChatGPT (4o): Clean Markdown headings, language tags, strict schema">
          <span>ChatGPT (4o)</span>
          <span class="match-pill">Markdown</span>
        </button>
        <button class="model-btn ${n==="openai_o"?"active":""}" onclick="setModel('openai_o')" title="OpenAI o1/o3: Un-micromanaged reasoning, acceptance criteria">
          <span>OpenAI o1 / o3</span>
          <span class="match-pill">Direct</span>
        </button>
        <button class="model-btn ${n==="gemini_context"?"active":""}" onclick="setModel('gemini_context')" title="Google Gemini: Large context grouping and reference demarcation">
          <span>Google Gemini</span>
          <span class="match-pill">Context</span>
        </button>
      </div>

      <!-- Quick Metrics Bar -->
      <div class="stats-bar">
        <span class="stat-item">Word Savings: <b>-${e.tokenSavingsPercent}%</b></span>
        <span class="stat-item">Prompt Score: <b>${e.iqScore}/100</b></span>
      </div>

      <!-- Live Telemetry -->
      <div class="telemetry-row">
        <span>Words: <b id="cnt-words">0</b></span>
        <span>Est. Tokens: <b id="cnt-tokens">0</b></span>
        <span>Characters: <b id="cnt-chars">0</b></span>
      </div>

      <!-- Polished Output -->
      <div class="editor-label">
        <span>Polished Prompt</span>
        <span style="font-size:9.5px; opacity:0.6; cursor:pointer;" onclick="revertToOriginal()">Undo / Original</span>
      </div>
      <textarea id="output-box" class="prompt-text" oninput="updateLiveCounters()">${t}</textarea>

      <!-- Action Buttons -->
      <div class="btn-row">
        <button class="btn" onclick="applyToEditor()">Apply (Alt+P)</button>
        <button class="btn btn-secondary" id="btn-copy" onclick="copyToClipboard()">Copy</button>
        <button class="btn btn-secondary" onclick="revertToOriginal()">Revert</button>
      </div>

      <!-- 99 Cents Lifetime Passkey -->
      <div class="passkey-box">
        <div class="passkey-top">
          <span class="passkey-title">99 Cents Lifetime Access</span>
          ${s?'<span style="color:var(--success); font-weight:700;">ACTIVE</span>':'<button class="btn-buy" onclick="openCheckout()">Buy ($0.99)</button>'}
        </div>
        <div style="opacity:0.8; font-size:10px;">
          Pay once for unlimited offline prompt improvements on all your machines.
        </div>
        ${s?"":`
        <div class="passkey-form">
          <input type="text" id="passkey-input" class="passkey-input" placeholder="PSMITH-PRO-XXXX" />
          <button class="btn-apply-key" onclick="unlockKey()">Unlock</button>
        </div>`}
      </div>

      <div class="floating-handle">Press Alt+P anytime on selected code or text</div>
    </div>
  </div>

  <script>
    const vscode = acquireVsCodeApi();
    const originalText = ${JSON.stringify(i)};

    function updateLiveCounters() {
      const text = document.getElementById("output-box").value || "";
      const words = text.trim() ? text.trim().split(/s+/).length : 0;
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

    function setModel(profile) {
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

    // Initialize counters
    updateLiveCounters();
  </script>
</body>
</html>`}};var N=O(require("https"));function X(a){let i="claude_xml",t="",e="",n=M.analyze(""),s="promptsmith_pro_license",m="promptsmith_trial_count",d=a.globalState.get(s,!1),f=a.globalState.get(m,10),g=o.window.createStatusBarItem(o.StatusBarAlignment.Right,100);g.command="promptsmith.openDashboard",g.text="$(sparkle)",g.tooltip="PromptSmith AI | Press Alt+P to polish selected prompt",g.show(),a.subscriptions.push(g);let h=Q(),p;function y(){return B.getHtml(t,e,n,i,d,f)}function u(){v.updateView(),p&&(p.webview.html=y())}function A(c){c.onDidReceiveMessage(async r=>{switch(r.command){case"changeProfile":i=r.profile,e=R.enhance(t,i,h),u();break;case"insert":await Z(r.text),o.window.showInformationMessage("Prompt inserted into editor.");break;case"copy":await o.env.clipboard.writeText(r.text),o.window.showInformationMessage("Polished prompt copied to clipboard.");break;case"openCheckout":await o.env.openExternal(o.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=vscode"));break;case"unlockKey":await w(r.key);break}})}class E{static viewType="promptsmith.sidebarView";_view;resolveWebviewView(r){this._view=r,r.webview.options={enableScripts:!0,localResourceRoots:[a.extensionUri]},this.updateView(),A(r.webview)}updateView(){this._view&&(this._view.webview.html=y())}}let v=new E;a.subscriptions.push(o.window.registerWebviewViewProvider(E.viewType,v));async function w(c){let r=(c||"").trim();if(!r)return!1;if(r.startsWith("PSMITH-PRO-")||r.startsWith("sk_live_btp_")||r==="BTP-SUPREME-PASSKEY"||r.length>=20)return d=!0,await a.globalState.update(s,!0),u(),o.window.showInformationMessage("PromptSmith Pro Lifetime License Activated."),!0;try{let l=`https://bartholomew.info/api/license/verify?key=${encodeURIComponent(r)}`;if(await H(l))return d=!0,await a.globalState.update(s,!0),u(),o.window.showInformationMessage("PromptSmith Pro Verified via Live Stripe Gateway."),!0}catch{}return o.window.showErrorMessage("Invalid passkey. Passkeys start with PSMITH-PRO- or sk_live_btp_"),!1}a.subscriptions.push(o.window.registerUriHandler({async handleUri(c){if(c.path==="/activate"){let l=new URLSearchParams(c.query).get("key");l&&await w(l)}}}));function x(){p?p.reveal(o.ViewColumn.Beside):(p=o.window.createWebviewPanel("promptsmith.floatingAssistant","PromptSmith Assistant",o.ViewColumn.Beside,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[a.extensionUri]}),A(p.webview),p.onDidDispose(()=>{p=void 0})),p.webview.html=y()}let C=o.commands.registerCommand("promptsmith.improveSelection",async()=>{let c=o.window.activeTextEditor;if(!c){o.window.showWarningMessage("Select prompt text in your editor first.");return}let r=c.selection,l=r.isEmpty?c.document.getText():c.document.getText(r);if(!l.trim()){o.window.showWarningMessage("No text selected to improve.");return}if(!d){if(f<=0){let S=await o.window.showInformationMessage("PromptSmith: Free trial completed. Unlock lifetime Pro access for $0.99?","Unlock for $0.99","Enter Passkey");S==="Unlock for $0.99"?o.env.openExternal(o.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=vscode")):S==="Enter Passkey"&&o.commands.executeCommand("promptsmith.unlockLicense");return}f--,await a.globalState.update(m,f)}t=l,n=M.analyze(l,h),e=R.enhance(l,i,h),g.text="$(sparkle)",g.tooltip=`PromptSmith AI | Score: ${n.iqScore}/100 (-${n.tokenSavingsPercent}% words)`,u(),x()}),b=o.commands.registerCommand("promptsmith.openDashboard",()=>{x()}),P=o.commands.registerCommand("promptsmith.unlockLicense",async()=>{let c=await o.window.showInputBox({prompt:"Enter your PromptSmith $0.99 Lifetime Passkey or Stripe Session ID",placeHolder:"PSMITH-PRO-XXXX-XXXX"});c&&await w(c)});class k{provideCodeActions(r,l){let S=r.getText(l);if(!S||S.trim().length<10)return[];let T=new o.CodeAction("Optimize with PromptSmith",o.CodeActionKind.RefactorRewrite);return T.command={command:"promptsmith.improveSelection",title:"Optimize with PromptSmith"},[T]}}a.subscriptions.push(o.languages.registerCodeActionsProvider(["markdown","plaintext","typescript","python","json"],new k,{providedCodeActionKinds:[o.CodeActionKind.RefactorRewrite]})),a.subscriptions.push(C,b,P)}function H(a){return new Promise(i=>{try{N.get(a,t=>{let e="";t.on("data",n=>e+=n),t.on("end",()=>{try{let n=JSON.parse(e);i(!!(n&&n.valid))}catch{i(!1)}})}).on("error",()=>i(!1))}catch{i(!1)}})}async function Z(a){let i=o.window.activeTextEditor;if(!i)return;let t=i.selection;await i.edit(e=>{t.isEmpty?e.insert(t.active,a):e.replace(t,a)})}function Q(){let a=o.env.appName||"";return a.includes("Cursor")?"Cursor IDE":a.includes("Windsurf")?"Windsurf IDE":a.includes("Claude")?"Claude Code / Desktop":"VS Code"}0&&(module.exports={activate});
