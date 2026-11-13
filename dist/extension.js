var De=Object.create;var ue=Object.defineProperty;var Re=Object.getOwnPropertyDescriptor;var Te=Object.getOwnPropertyNames;var ze=Object.getPrototypeOf,Be=Object.prototype.hasOwnProperty;var Oe=(u,i)=>{for(var t in i)ue(u,t,{get:i[t],enumerable:!0})},Ce=(u,i,t,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of Te(i))!Be.call(u,o)&&o!==t&&ue(u,o,{get:()=>i[o],enumerable:!(e=Re(i,o))||e.enumerable});return u};var $=(u,i,t)=>(t=u!=null?De(ze(u)):{},Ce(i||!u||!u.__esModule?ue(t,"default",{value:u,enumerable:!0}):t,u)),Fe=u=>Ce(ue({},"__esModule",{value:!0}),u);var Ve={};Oe(Ve,{activate:()=>je});module.exports=Fe(Ve);var s=$(require("vscode"));var ee=class{static DOMAIN_RULES=[{domain:"AI Agent Architecture & Tool-Calling Security",category:"engineering",matchPattern:/\b(agent|tool|shell|subprocess|bash|mcp|exec|command|spawn|curl|guardrail|injection)\b/i,injectedConstraints:["Enforce strict parameterized subprocess execution; never use shell=True or unescaped pipe strings.","Implement mandatory credential masking across stdout/stderr streams (mask sk-*, ghp_*, AKIA*).","Enforce hard execution timeouts and bounded retry limits to prevent runaway reasoning loops.","Block SSRF targeting cloud metadata endpoints (169.254.169.254, AWS IMDSv2, GCP metadata)."],recommendedOutputFormat:"Structured tool-call JSON schema with explicit invariant validations and rollback logic.",reasoningChecklist:["Are subshells isolated with fail-closed error handling?","Is destructive disk/network action bounded by explicit user confirmation?","Are all error traces scrubbed of sensitive environment variables?"]},{domain:"Corporate Finance, Accounting & Valuation",category:"business",matchPattern:/\b(ebitda|fcff|lbo|dcf|wacc|valuation|ifrs|asc|balance sheet|working capital|covenants|revolver|moic|irr)\b/i,injectedConstraints:["Under IFRS 16 / ASC 842, ensure operating lease liabilities deducted in Enterprise-to-Equity bridges are not simultaneously double-counted in operating cash flows.","Relever and unlever asset betas strictly via Hamada's equation: beta_L = beta_U * [1 + (1 - Tax) * (Debt / Equity)].","Present dynamic Monte Carlo or two-way sensitivity data tables across WACC and terminal exit multiples.","Reconcile free cash flow to firm (FCFF) from NOPAT = EBIT * (1 - Tax), adding back D&A, deducting CapEx, and adjusting for Delta NWC."],recommendedOutputFormat:"Three-statement linked financial model schedule with explicit cell formulas, assumptions block, and sensitivity matrix.",reasoningChecklist:["Is lease interest expense properly segregated from operating expenses?","Does the terminal growth rate stay below long-term GDP growth (max 2.0% - 2.5%)?","Are debt service coverage ratios (DSCR) verified against default covenants?"]},{domain:"Fullstack Architecture & Modern React/TypeScript",category:"engineering",matchPattern:/\b(react|typescript|component|hook|state|frontend|tailwind|nextjs|vite|css|html|ui|ux)\b/i,injectedConstraints:["Produce 100% type-safe TypeScript with strict null checks and zero 'any' casts.","Ensure all interactive components adhere to WCAG 2.1 AA accessibility standards (ARIA roles, keyboard focus, screen-reader labels).","Implement resilient client-side error boundaries with graceful offline fallback states.","Avoid unnecessary re-renders; leverage memoization, React 19 compiler patterns, or atomic state primitives."],recommendedOutputFormat:"Self-contained modular React components (.tsx) with typed props interface, CSS token styling, and interactive unit test.",reasoningChecklist:["Is component state hydrated without layout shifts?","Are event listeners cleanly unmounted in cleanup functions?","Are touch and keyboard interactions accessible across mobile and desktop?"]},{domain:"Backend Services & Distributed Systems",category:"engineering",matchPattern:/\b(backend|api|fastapi|express|grpc|rest|kafka|rabbitmq|distributed|microservice|redis|concurrency)\b/i,injectedConstraints:["Design idempotent API endpoints supporting atomic transactional state transitions.","Incorporate distributed tracing (OpenTelemetry traceparent), request ID propagation, and structured JSON logs.","Implement circuit breakers, exponential backoff with jitter, and dead-letter queues for asynchronous workers.","Enforce strict schema validation and payload size ceilings on all inbound request bodies."],recommendedOutputFormat:"Production backend router/controller with typed request/response contracts, middleware authentication, and health probes.",reasoningChecklist:["Are all database transactions committed inside an explicit rollback block?","Is connection pooling bounded to prevent thread starvation?","Are rate-limiting headers returned on 429 status codes?"]},{domain:"Data Pipelines, Warehousing & BigQuery/SQL",category:"engineering",matchPattern:/\b(sql|bigquery|dataform|dbt|etl|elt|partition|clustering|snowflake|postgres|database)\b/i,injectedConstraints:["Optimize partition and clustering keys to avoid costly full-table scans in analytics warehouses.","Adhere to deterministic idempotent merges (MERGE INTO ... WHEN MATCHED THEN UPDATE WHEN NOT MATCHED THEN INSERT).","Avoid SELECT *; project only explicit columns required by downstream transforms.","Enforce schema evolution safety: backward-compatible column additions only, never destructive drops."],recommendedOutputFormat:"Parameterized SQL or Dataform/dbt model with audit metadata, source declarations, and automated quality assertions.",reasoningChecklist:["Are join keys clustered and indexed to prevent memory spill-to-disk?","Are null checks explicitly handled in aggregates?","Is the query cost bounded by partition pruning?"]},{domain:"Machine Learning, RAG & Vector Systems",category:"engineering",matchPattern:/\b(ml|machine learning|pytorch|tensorflow|rag|embedding|vector|fine-tuning|loss|transformer|tokens|llm)\b/i,injectedConstraints:["Prevent data leakage by strictly computing scaling, normalization, and token statistics on the train split only.","Incorporate hybrid dense/sparse vector retrieval with cross-encoder re-ranking for RAG pipelines.","State explicit loss functions, learning rate schedules (warmup + cosine decay), and gradient clipping thresholds.","Track evaluation metrics beyond accuracy: precision/recall AUC, calibration error, and inference latency per token."],recommendedOutputFormat:"Modular PyTorch/Python pipeline with dataset loaders, training loop, validation metrics, and export checkpoints.",reasoningChecklist:["Are random seeds set across numpy, torch, and Python runtime for reproducibility?","Are embeddings normalized before cosine distance calculation?","Are out-of-memory (OOM) guards and batch size auto-scaling implemented?"]},{domain:"Mathematical Proofs, Algorithms & Symbolic Logic",category:"science",matchPattern:/\b(math|proof|theorem|algorithm|complexity|calculus|algebra|asymptotic|matrix|combinatorics|differential)\b/i,injectedConstraints:["Provide rigorous deductive step-by-step logic; state all axioms, lemmas, and initial boundary conditions explicitly.","State exact asymptotic computational complexity (Big-O, Big-Omega, Big-Theta) for time and space.","Verify edge-case extremes (n=0, n=1, empty sets, negative infinity, limit convergence).","Render multi-term mathematical formulas in KaTeX / LaTeX formatting."],recommendedOutputFormat:"Formal mathematical derivation with Theorem -> Proof -> Lemma breakdown and algorithmic complexity statement.",reasoningChecklist:["Is the induction base case and inductive step formally proven?","Does the integral/series converge within the stated domain of convergence?","Are division-by-zero and singularity edge cases accounted for?"]},{domain:"Cybersecurity, Reverse Engineering & Zero-Trust",category:"engineering",matchPattern:/\b(security|vulnerability|exploit|cve|penetration|xss|csrf|buffer overflow|cryptography|tls|hashing)\b/i,injectedConstraints:["Adhere to constant-time comparison algorithms for all signature and password verifications to defeat timing attacks.","Use cryptographically secure random number generators (CSPRNG, crypto.randomBytes / secrets).","Enforce strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and SameSite cookie flags.","Never implement custom cryptographic primitives; leverage audited standards (AES-GCM, Ed25519, Argon2id)."],recommendedOutputFormat:"Threat model analysis (STRIDE) with reproduction proof-of-concept, CVE mapping, and defensive patch code.",reasoningChecklist:["Is user input sanitized against both reflected and DOM-based injection vectors?","Are encryption keys separated from ciphertext and managed in an HSM/KMS?","Does the authentication flow enforce replay protection via nonces?"]},{domain:"Legal Drafting, Compliance & IP Licensing",category:"legal",matchPattern:/\b(legal|contract|agreement|clause|liability|indemnification|license|patent|copyright|gdpr|compliance)\b/i,injectedConstraints:["Draft unambiguous, jurisdiction-aware contractual language with defined terms capitalized and cross-referenced.","Include standard commercial protections: mutual indemnification, limitation of liability, severance, and governing law.","Enforce explicit data privacy protections complying with GDPR, CCPA, and industry-standard security safeguards.","State representations and warranties with explicit disclaimers of implied merchantability."],recommendedOutputFormat:"Formatted legal agreement schedule with Section -> Clause hierarchy, definitions block, and signature blocks.",reasoningChecklist:["Are all defined terms used consistently throughout all provisions?","Is the limitation of liability cap tied to trailing fees paid (e.g. 12 months)?","Are termination-for-cause and transition assistance clauses clearly bounded?"]},{domain:"Creative Narrative, Worldbuilding & High-Conversion Copy",category:"creative",matchPattern:/\b(story|fiction|narrative|copywriting|headline|character|dialogue|poem|sonnet|script|screenplay)\b/i,injectedConstraints:["Demonstrate 'Show, Don't Tell' sensory detail; avoid exposition dumps and passive voice.","Maintain strict stylistic tone and character voice consistency across all narrative beats.","For copy: anchor headline around the primary customer pain wedge, establish high-signal social proof, and present a low-friction call-to-action.","If poetic form is requested (sonnet, villanelle, haiku), adhere strictly to meter (iambic pentameter) and rhyming schemes."],recommendedOutputFormat:"Polished narrative prose or high-converting copy hierarchy with headline, hook, body, and conversion CTA.",reasoningChecklist:["Does the pacing escalate naturally toward the climactic inflection point?","Are clich\xE9s and generic adjectives replaced with vivid, specific imagery?","Is the emotional arc grounded in authentic character motivation?"]},{domain:"Product Management, PRDs & Systems Strategy",category:"business",matchPattern:/\b(prd|product|roadmap|user story|acceptance criteria|feature|mvp|kpi|churn|retention|persona)\b/i,injectedConstraints:["Frame features around user outcomes and metrics (activation, retention, LTV) rather than technical outputs.","Structure user stories using the standard format: As a [persona], I want [action], so that [business value].","Define unambiguous, testable Given-When-Then acceptance criteria for every functional requirement.","Include explicit out-of-scope declarations and risk mitigation trade-offs."],recommendedOutputFormat:"Product Requirement Document (PRD) with Problem Statement, User Stories, Acceptance Matrix, and Rollout Strategy.",reasoningChecklist:["Are success metrics (leading and lagging KPIs) quantified with baseline targets?","Are edge-case error states specified from the end-user perspective?","Is the feature scoped for rapid incremental iteration?"]},{domain:"Systems Programming & Low-Level Concurrency",category:"engineering",matchPattern:/\b(rust|c\+\+|golang|assembly|memory|pointer|allocator|concurrency|mutex|thread|syscall)\b/i,injectedConstraints:["Guarantee memory safety: prevent data races, use-after-free, and double-free conditions.","In Rust, prioritize idiomatic borrow checker semantics; minimize unsafe blocks and document invariants for any raw pointer dereference.","Leverage RAII and smart pointers (std::unique_ptr, Arc/Mutex) for deterministic resource cleanup.","Optimize cache locality (struct-of-arrays vs array-of-structs) for hot performance loops."],recommendedOutputFormat:"Idiomatic source code with memory safety annotations, zero-allocation data structures, and benchmark suite.",reasoningChecklist:["Are deadlocks prevented by enforcing a global lock ordering hierarchy?","Are resources cleanly closed via Drop/destructor semantics even during panics?","Is memory overhead zero-cost at compile time?"]},{domain:"Cloud Architecture, DevOps & Infrastructure as Code",category:"engineering",matchPattern:/\b(aws|gcp|azure|terraform|kubernetes|docker|k8s|helm|ci\/cd|github actions|ingress|iam)\b/i,injectedConstraints:["Adhere to least-privilege IAM policies with resource-level scoping and temporary role assumption.","Ensure Infrastructure as Code (Terraform/CDK) is modular, parameterized across environments, and enables state locking.","Configure Kubernetes pods with resource requests/limits, readiness/liveness probes, and non-root security contexts.","Automate zero-downtime deployment strategies (blue-green or rolling updates with health checks)."],recommendedOutputFormat:"Declarative IaC template (Terraform/Kubernetes YAML) with variable definitions and automated CI validation workflow.",reasoningChecklist:["Are container images signed and scanned for vulnerabilities?","Are sensitive secrets injected via secure vault/secret references rather than plaintext?","Is high availability distributed across multiple availability zones?"]},{domain:"Academic Research, Literature Synthesis & Pedagogy",category:"science",matchPattern:/\b(research|paper|dissertation|citation|literature review|methodology|hypothesis|academic|journal)\b/i,injectedConstraints:["Ground all claims in peer-reviewed empirical evidence; cite seminal authors, publication years, and methodologies.","Critique methodological limitations (selection bias, confounding variables, statistical power).","Structure explanations progressively from intuitive conceptual analogies to formal mathematical rigor.","Distinguish between correlation and verified causal mechanisms."],recommendedOutputFormat:"Peer-reviewed journal paper structure: Abstract -> Background -> Methodology -> Findings -> Limitations.",reasoningChecklist:["Are alternative rival hypotheses explicitly considered and tested?","Is statistical significance accompanied by practical effect size (Cohen's d)?","Are citations accurately attributed without parametric hallucination?"]},{domain:"Mobile Application Engineering (iOS/Android/Flutter)",category:"engineering",matchPattern:/\b(ios|swift|swiftui|android|kotlin|jetpack|flutter|react native|mobile|app store|push notification)\b/i,injectedConstraints:["Design for memory-constrained mobile environments; release background resources and unbind observers.","Ensure seamless offline operation with local database caching (Room/CoreData/SQLite) and automatic sync on reconnect.","Handle dynamic screen sizes, orientation changes, and system accessibility font scaling.","Execute long-running network and compute tasks strictly on background threads/coroutines without blocking the main UI thread."],recommendedOutputFormat:"Clean architecture mobile module (Swift/Kotlin) with ViewModel, UI declaration, and offline repository.",reasoningChecklist:["Is 60fps/120fps UI rendering maintained without frame drops?","Are push notification payloads handled gracefully when the app is in the background?","Are runtime permissions requested contextually with clear user rationale?"]},{domain:"Executive Strategy & Commercial Deal Structuring",category:"business",matchPattern:/\b(executive|pitch|outbound|sales|partnership|sponsor|enterprise|closing|deal|investor)\b/i,injectedConstraints:["Lead with the quantifiable economic wedge ($/time saved, revenue unlocked, risk eliminated) in the opening sentence.","Eliminate apologetic preambles, marketing fluff, and rhetorical clich\xE9s.","Provide a zero-friction integration or adoption roadmap with a clear, low-commitment next step.","Anticipate the primary procurement/security objections upfront with concrete proof points."],recommendedOutputFormat:"High-impact executive brief: 1. Core Value Wedge -> 2. Verifiable Evidence -> 3. Concrete Action Path.",reasoningChecklist:["Is the message tailored directly to the specific decision-maker's incentives?","Does the proposal provide immediate demonstrable ROI?","Is the call to action binary, actionable, and low-friction?"]},{domain:"Meta-Prompt Engineering & Frontier System Instructions",category:"engineering",matchPattern:/\b(write a prompt|create a prompt|build a prompt|design a prompt|give me a prompt|prompt for|prompt that can|prompt to help|system prompt|how should i prompt|how do i prompt|better prompt|prompt looking for|craft a prompt|prompt template|agent prompt|meta-prompt)\b/i,injectedConstraints:["Output MUST be an executable, production-grade system prompt or meta-prompt architecture with delimited XML/Markdown blocks.","Include explicit system persona, invariant constraints, negative constraints (anti-patterns to reject), input schemas, and few-shot exemplars.","Provide a self-verification checklist so the target AI model tests and verifies its output before returning it.","NEVER generate generic software code when the user is explicitly requesting a prompt or prompt optimization."],recommendedOutputFormat:"Production System Prompt Architecture: <system_role>, <context>, <invariants>, <negative_constraints>, <input_schema>, <few_shot_examples>, <verification_rubric>.",reasoningChecklist:["Does the synthesized prompt clearly establish the AI's persona, boundaries, and objective?","Are edge cases and anti-hallucination guardrails explicitly defined?","Is the output format strictly specified with verification assertions?"]},{domain:"Laws of Physics, Thermodynamics & Dimensional Mechanics",category:"science",matchPattern:/\b(physics|thermodynamic|entropy|navier-stokes|quantum|maxwell|relativity|conservation of|gravity|mass-energy|joule|watt|kelvin|newton|pascal|momentum|dimensional analysis|buckingham|fluid dynamics|lorentz|doppler|speed of light)\b/i,injectedConstraints:["Enforce fundamental physical conservation laws: conservation of mass, momentum, energy (Delta U = Q - W), and entropy non-decrease (dS >= 0).","Verify dimensional homogeneity via Buckingham Pi theorem; ensure all physical quantities possess consistent SI base units ([M], [L], [T], [I], [Theta], [N], [J]).","Analyze limiting asymptotic boundary cases (e.g., non-relativistic limit v << c, Knudsen number Kn -> 0, zero-temperature ground states T -> 0).","Include explicit physical falsification criteria to stress-test any derived equation or claim against empirical reality."],recommendedOutputFormat:"Rigorous Physical Derivation & Analysis: 1. Physical Axioms & Invariants -> 2. Dimensional Homogeneity Proof -> 3. Mathematical Formulation -> 4. Asymptotic Boundary Verification & Falsification Suite.",reasoningChecklist:["Are units and physical dimensions strictly consistent on both sides of every equation?","Does the system obey the Second Law of Thermodynamics and causality?","Are boundary limits (e.g., v -> c, T -> 0, scale extremes) physically coherent?"]},{domain:"Real-World Situations, Crisis Management & Operations",category:"operations",matchPattern:/\b(real life|real-life|situation|crisis|emergency|operations|logistics|supply chain|hospital|shutdown|authorities|disaster|incident response|escalation|factory|plant)\b/i,injectedConstraints:["Ground decisions in real-world human cognitive capacity, logistical bottlenecks, and physical resource availability.","Establish explicit crisis triage levels, communication chains of command, and fail-safe recovery procedures.","Eliminate panic-inducing ambiguity; provide clear, actionable directives with contingency decision trees.","Clearly delineate between verified empirical facts, probabilistic inferences, and unknown operational parameters."],recommendedOutputFormat:"Actionable Operational Playbook: 1. Situation Assessment & Triage -> 2. Immediate Containment Directives -> 3. Stakeholder Communication Protocol -> 4. Recovery & Verification Checklist.",reasoningChecklist:["Does the protocol minimize operational downtime and prioritize human safety?","Are communication directives clear, unambiguous, and panic-free?","Is there a validated secondary fallback if primary communications or power rails fail?"]},{domain:"Human Communication Dynamics, Cognitive Calibration & Rhetoric",category:"creative",matchPattern:/\b(communication style|tone|pedagogical|explain to|all ages|high school|graduate|socratic|audience|rhetoric|dialogue|interpersonal|diplomacy|calmly|negotiation|empathy|clarity)\b/i,injectedConstraints:["Dynamically calibrate cognitive load and terminology to the target audience (e.g., intuitive analogies for novices, rigorous formalisms for researchers).","Preserve 100% conceptual and technical precision across all communication styles; never simplify facts to the point of falsehood.","Structure explanations with Socratic scaffolding: establish intuition first, introduce formal definitions, and verify understanding with interactive questions.","Account for emotional resonance, psychological safety, and clear actionable takeaways."],recommendedOutputFormat:"Calibrated Communication Architecture: 1. Core Message / Intuitive Hook -> 2. In-Depth Multi-Perspective Breakdown -> 3. Common Misconceptions Addressed -> 4. Comprehension Verification Checks.",reasoningChecklist:["Is the tone tailored to the intended audience without being condescending or overly dense?","Is technical accuracy maintained while improving accessibility?","Are verification questions provided to confirm recipient understanding?"]}];static getDomainEnrichment(i){let t=i.trim();if(!t)return this.synthesizeUniversalRule("General Knowledge & Computing");for(let e of this.DOMAIN_RULES)if(e.matchPattern.test(t))return e;return this.synthesizeUniversalRule(t)}static synthesizeUniversalRule(i){let e=i.replace(/[^\w\s]/g,"").split(/\s+/).filter(a=>a.length>3&&!/^(this|that|with|from|have|make|what|when|where|which|about|please|would|could)$/i.test(a)).slice(0,3).join(" ")||"General Technical Reasoning",o=e.charAt(0).toUpperCase()+e.slice(1);return{domain:`${o} & Systems Invariants`,category:"engineering",matchPattern:/.*/,injectedConstraints:[`Execute with authoritative expert rigor grounded in established ${o} first principles.`,"Enforce strict logical consistency with zero unverified assumptions or speculative non-answers.","Provide self-contained, fully resolved deliverables with explicit edge cases and boundary conditions.","Prioritize high signal-to-noise clarity; eliminate conversational filler, throat-clearing, and meta-commentary."],recommendedOutputFormat:"Structured authoritative deliverable: 1. Specification / Core Principles -> 2. Complete Artifact -> 3. Empirical Verification Test.",reasoningChecklist:[`Are all claims verified against established domain standards in ${o}?`,"Are edge cases, exceptions, and boundary failures addressed?","Is the solution immediately actionable without requiring missing context?"]}}};var q=class{static benchmarkPrompt(i){let t=i.trim();if(!t)return this.emptyBenchmarks();let e=t.split(/\s+/).filter(Boolean),o=Math.ceil(e.length*1.33),a=/<\/?[a-z_]+>/i.test(t),r=/<(scratchpad|thinking|antthinking)>/i.test(t),n=/\b(step[- ]by[- ]step|think step by step|walk through step by step|let's think step by step)\b/i.test(t),c=/\b(json schema|output format: json|pydantic|\{[^{}]*"\w+"\s*:)/i.test(t),p=/(---\s*BEGIN|```context|<context>|###\s*Context|BEGIN REFERENCE)/i.test(t),y=/\b(do not|never|must not|avoid|strictly|prohibited)\b/i.test(t),A=/\b(example\s*\d*:|input:[\s\S]*output:)/i.test(t),x=/\b(can you please|could you please|as an ai|i would like you to|please kindly)\b/i.test(t),g=/\b([a-zA-Z0-9_\-\.\/]+\.(ts|js|py|json|html|css|rs|go|cpp|c|md|sql))\b/i.test(t)||/@\w+/.test(t),l=/\b(test|assert|verify|validation|spec|unit test)\b/i.test(t),v=/\b(diff|patch|before\/after|\+ |\- |replace)\b/i.test(t),w=/\b(npm|pnpm|cargo|pytest|pip|python|git|docker|curl|bash)\b/i.test(t),E=/\b(mcp|tool_call|function_call|call_tool)\b/i.test(t),C=75,Y=[],k=[];a?C+=15:Y.push("Enclose task and constraints in XML tags (<task>, <constraints>) for strict instruction adherence."),r?C+=10:e.length>40&&Y.push("Include a <scratchpad> or <thinking> block to maximize Claude's complex architectural reasoning."),x&&(C-=12,k.push("Conversational preamble degrades Claude's system prompt signal.")),C=Math.min(100,Math.max(25,C));let M=80,F=[],I=[];n?(M-=28,I.push("CRITICAL: Remove 'think step-by-step'. Micromanaging o1/o3 reasoning heuristics degrades test-time compute performance.")):(M+=10,F.push("Optimal: Autonomous reasoning enabled without micromanaging internal thinking steps.")),y?M+=10:F.push("Specify strict edge-case acceptance criteria and boundary invariants."),M=Math.min(100,Math.max(25,M));let H=72,z=[],m=[];c?H+=18:z.push("Define deterministic JSON schema with explicit property types for reliable tool invocation."),A?H+=10:z.push("Provide 1 concrete few-shot demonstration example to lock formatting precision."),y||z.push("Add explicit negative constraints to eliminate hallucinations."),H=Math.min(100,Math.max(25,H));let S=74,V=[],G=[];p?S+=16:V.push("Demarcate reference documents from actionable tasks using clear block headers."),e.length<30&&V.push("Gemini excels with rich background context; anchor the user persona and target outcome."),S=Math.min(100,Math.max(25,S));let K=75,ae=[],re=[];y?K+=15:ae.push("Define strict algorithmic boundaries and computational invariants."),n&&(K-=18,re.push("DeepSeek R1 self-reflects autonomously; omit manual step-by-step guidance in favor of verification tests.")),K=Math.min(100,Math.max(25,K));let X=73,se=[],ce=[];x?ce.push("Grok 3 delivers highest signal when given unfiltered, imperative commands."):X+=12,y?X+=15:se.push("Anchor hard real-world ground truth constraints and verification criteria."),X=Math.min(100,Math.max(25,X));let _=71,te=[],he=[];p||a?_+=14:te.push("Provide explicit system persona and structured markdown sections."),e.length<25&&te.push("Llama 3.3 benefits from detailed operational guidelines and explicit format contracts."),_=Math.min(100,Math.max(25,_));let h=76,d=[],b=[];g||l?h+=16:d.push("Provide explicit language type annotations and test assertion harness."),y&&(h+=8),h=Math.min(100,Math.max(25,h));let f=72,P=[],Q=[];g?(f+=18,P.push("Optimal: File paths identified for multi-file shadow workspace edits.")):P.push("Reference specific file paths (e.g. src/auth.ts) to guide Cursor Composer's multi-file index."),v&&(f+=10),f=Math.min(100,Math.max(25,f));let U=74,ye=[],Ie=[];g&&l?U+=16:ye.push("Specify workspace checkpoints and tool execution sequences for Cascade Flow."),U=Math.min(100,Math.max(25,U));let ie=73,fe=[],xe=[];w?(ie+=15,fe.push("Optimal: Command-line verification commands provided for terminal tool loops.")):fe.push("Specify build or test commands (e.g. npm test, pytest) for Claude Code's verification loop."),x&&(ie-=10,xe.push("Terminal CLI agents perform best with concise, imperative task directives.")),ie=Math.min(100,Math.max(25,ie));let le=70,Ae=[],we=[];e.length<=40&&g?le+=18:e.length>80?we.push("Keep Copilot Edits instructions scoped and concise to avoid diffuse editor diffs."):Ae.push("Scope instructions to specific functions or symbols for clean inline edits."),le=Math.min(100,Math.max(25,le));let de=72,be=[],Ee=[];g&&(v||l)?(de+=18,be.push("Optimal: Git-diff targets and validation commands identified.")):be.push("State files to add to git session and test command to auto-commit on pass."),de=Math.min(100,Math.max(25,de));let pe=75,ke=[],Pe=[];l&&e.length>=35?pe+=15:ke.push("Define full-lifecycle acceptance criteria, API endpoints, and browser test requirements."),pe=Math.min(100,Math.max(25,pe));let me=73,Se=[],Me=[];return E||g?me+=16:Se.push("Specify explicit tool call permissions, target files, and terminal confirmation boundaries."),me=Math.min(100,Math.max(25,me)),[{id:"claude-3-7-sonnet",name:"Claude 3.7 / 3.5 Sonnet",category:"model",provider:"Anthropic",badgeColor:"#d97706",compatibilityScore:C,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.003",profileKey:"claude_xml",recommendations:Y,warnings:k,keyStrengths:["Hierarchical XML parsing","Scratchpad reasoning","Zero-preamble steering"]},{id:"openai-o3-o1",name:"o3 / o3-mini / o1",category:"model",provider:"OpenAI",badgeColor:"#10b981",compatibilityScore:M,latencyRating:"Reasoning Delay",tokenEstimate:o,costEstimatePer1k:"$0.015",profileKey:"openai_o",recommendations:F,warnings:I,keyStrengths:["Autonomous test-time compute","Formal invariant solving","Mathematical proofs"]},{id:"gpt-4o",name:"GPT-4o / GPT-4.5",category:"model",provider:"OpenAI",badgeColor:"#0ea5e9",compatibilityScore:H,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.0025",profileKey:"gpt4o_schema",recommendations:z,warnings:m,keyStrengths:["Structured JSON outputs","Multimodal inputs","Strict schema contracts"]},{id:"gemini-2-flash",name:"Gemini 2.0 Flash / Pro",category:"model",provider:"Google",badgeColor:"#8b5cf6",compatibilityScore:S,latencyRating:"Ultra Fast",tokenEstimate:o,costEstimatePer1k:"$0.0001",profileKey:"gemini_context",recommendations:V,warnings:G,keyStrengths:["2M+ context window","Ultra-low latency","Rich reference grounding"]},{id:"deepseek-r1",name:"DeepSeek R1 / V3",category:"model",provider:"DeepSeek",badgeColor:"#3b82f6",compatibilityScore:K,latencyRating:"Reasoning Delay",tokenEstimate:o,costEstimatePer1k:"$0.00055",profileKey:"deepseek_r1",recommendations:ae,warnings:re,keyStrengths:["Open-weights frontier reasoning","Algorithmic synthesis","Boundary edge testing"]},{id:"grok-3",name:"Grok 3",category:"model",provider:"xAI",badgeColor:"#ec4899",compatibilityScore:X,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.002",profileKey:"grok_direct",recommendations:se,warnings:ce,keyStrengths:["Real-time search integration","Direct high-signal answers","Zero bureaucratic hedging"]},{id:"llama-3-3",name:"Llama 3.3 70B",category:"model",provider:"Meta",badgeColor:"#6366f1",compatibilityScore:_,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.0007",profileKey:"llama_system",recommendations:te,warnings:he,keyStrengths:["System steerability","Standardized markdown adherence","Local/private hosting"]},{id:"qwen-2-5-coder",name:"Qwen 2.5 Coder 32B",category:"model",provider:"Alibaba",badgeColor:"#14b8a6",compatibilityScore:h,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.0008",profileKey:"qwen_coder",recommendations:d,warnings:b,keyStrengths:["Repository-level code synthesis","Type annotations","Clean test assertions"]},{id:"cursor-composer",name:"Cursor Composer / Agent",category:"bot",provider:"Anysphere",badgeColor:"#a855f7",compatibilityScore:f,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Subscription",profileKey:"cursor_composer",recommendations:P,warnings:Q,keyStrengths:["Multi-file shadow workspace edits","@file index parsing","Fast iterative diffs"]},{id:"windsurf-cascade",name:"Windsurf Cascade",category:"bot",provider:"Codeium",badgeColor:"#06b6d4",compatibilityScore:U,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Subscription",profileKey:"windsurf_cascade",recommendations:ye,warnings:Ie,keyStrengths:["Flow architecture","Real-time tool execution","Workspace state tracking"]},{id:"claude-code-cli",name:"Claude Code CLI",category:"bot",provider:"Anthropic",badgeColor:"#f59e0b",compatibilityScore:ie,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Token-based",profileKey:"claude_code",recommendations:fe,warnings:xe,keyStrengths:["Unix pipeline integration","Automated test loops","Codebase search & replace"]},{id:"copilot-edits",name:"GitHub Copilot Edits",category:"bot",provider:"GitHub / MS",badgeColor:"#22c55e",compatibilityScore:le,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"Subscription",profileKey:"copilot_edits",recommendations:Ae,warnings:we,keyStrengths:["In-editor localized edits","Repo context indexing","Style matching"]},{id:"aider",name:"Aider Pair Programmer",category:"bot",provider:"Open Source",badgeColor:"#f43f5e",compatibilityScore:de,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Bring Your Own Key",profileKey:"aider_diff",recommendations:be,warnings:Ee,keyStrengths:["Git-commit automation","Repo map AST analysis","Automated test recovery"]},{id:"devin",name:"Devin Autonomous",category:"bot",provider:"Cognition",badgeColor:"#84cc16",compatibilityScore:pe,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Enterprise ACU",profileKey:"devin_fullstack",recommendations:ke,warnings:Pe,keyStrengths:["Full-lifecycle engineering","Shell + browser execution","End-to-end deployment"]},{id:"cline-roo",name:"Cline / Roo Code",category:"bot",provider:"Open Source",badgeColor:"#eab308",compatibilityScore:me,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Bring Your Own Key",profileKey:"cline_mcp",recommendations:Se,warnings:Me,keyStrengths:["MCP tool protocol","Atomic file modifications","Configurable auto-approvals"]}]}static emptyBenchmarks(){return[{id:"claude-3-7-sonnet",name:"Claude 3.7 / 3.5 Sonnet",cat:"model",prov:"Anthropic",color:"#d97706",rate:"Fast",cost:"$0.003",prof:"claude_xml"},{id:"openai-o3-o1",name:"o3 / o3-mini / o1",cat:"model",prov:"OpenAI",color:"#10b981",rate:"Reasoning Delay",cost:"$0.015",prof:"openai_o"},{id:"gpt-4o",name:"GPT-4o / GPT-4.5",cat:"model",prov:"OpenAI",color:"#0ea5e9",rate:"Fast",cost:"$0.0025",prof:"gpt4o_schema"},{id:"gemini-2-flash",name:"Gemini 2.0 Flash / Pro",cat:"model",prov:"Google",color:"#8b5cf6",rate:"Ultra Fast",cost:"$0.0001",prof:"gemini_context"},{id:"deepseek-r1",name:"DeepSeek R1 / V3",cat:"model",prov:"DeepSeek",color:"#3b82f6",rate:"Reasoning Delay",cost:"$0.00055",prof:"deepseek_r1"},{id:"grok-3",name:"Grok 3",cat:"model",prov:"xAI",color:"#ec4899",rate:"Fast",cost:"$0.002",prof:"grok_direct"},{id:"llama-3-3",name:"Llama 3.3 70B",cat:"model",prov:"Meta",color:"#6366f1",rate:"Fast",cost:"$0.0007",prof:"llama_system"},{id:"qwen-2-5-coder",name:"Qwen 2.5 Coder 32B",cat:"model",prov:"Alibaba",color:"#14b8a6",rate:"Fast",cost:"$0.0008",prof:"qwen_coder"},{id:"cursor-composer",name:"Cursor Composer / Agent",cat:"bot",prov:"Anysphere",color:"#a855f7",rate:"Autonomous Multi-Step",cost:"Subscription",prof:"cursor_composer"},{id:"windsurf-cascade",name:"Windsurf Cascade",cat:"bot",prov:"Codeium",color:"#06b6d4",rate:"Autonomous Multi-Step",cost:"Subscription",prof:"windsurf_cascade"},{id:"claude-code-cli",name:"Claude Code CLI",cat:"bot",prov:"Anthropic",color:"#f59e0b",rate:"Autonomous Multi-Step",cost:"Token-based",prof:"claude_code"},{id:"copilot-edits",name:"GitHub Copilot Edits",cat:"bot",prov:"GitHub / MS",color:"#22c55e",rate:"Fast",cost:"Subscription",prof:"copilot_edits"},{id:"aider",name:"Aider Pair Programmer",cat:"bot",prov:"Open Source",color:"#f43f5e",rate:"Autonomous Multi-Step",cost:"BYOK",prof:"aider_diff"},{id:"devin",name:"Devin Autonomous",cat:"bot",prov:"Cognition",color:"#84cc16",rate:"Autonomous Multi-Step",cost:"Enterprise",prof:"devin_fullstack"},{id:"future-deep-reasoner",name:"Next-Gen Deep Reasoner (o3+ / Claude 4 / Gemini 3)",cat:"future",prov:"Frontier AGIs",color:"#ec4899",rate:"Reasoning Delay",cost:"Adaptive Compute",prof:"future_deep_reasoner"},{id:"future-agent-swarm",name:"Autonomous Agent Swarm (Multi-Agent AGI)",cat:"future",prov:"Autonomous Swarms",color:"#8b5cf6",rate:"Autonomous Multi-Step",cost:"Swarm Compute",prof:"future_agent_swarm"},{id:"future-formal-verifier",name:"Neuro-Symbolic Verifier (Lean 4 / Z3 SAT AI)",cat:"future",prov:"Formal Solvers",color:"#10b981",rate:"Fast",cost:"SAT Compute",prof:"future_formal_verifier"},{id:"future-infinite-context",name:"Infinite-Context Engine (10M+ Streamer)",cat:"future",prov:"Streaming AGIs",color:"#06b6d4",rate:"Ultra Fast",cost:"Linear Attention",prof:"future_infinite_context"},{id:"cline-roo",name:"Cline / Roo Code",cat:"bot",prov:"Open Source",color:"#eab308",rate:"Autonomous Multi-Step",cost:"BYOK",prof:"cline_mcp"}].map(t=>({id:t.id,name:t.name,category:t.cat,provider:t.prov,badgeColor:t.color,compatibilityScore:0,latencyRating:t.rate,tokenEstimate:0,costEstimatePer1k:t.cost,profileKey:t.prof,recommendations:["Provide input prompt to benchmark"],warnings:[],keyStrengths:["Benchmark pending input"]}))}};var J=class{static HESITATION_PATTERNS=[/\b(i don't know|not sure|i am new|beginner|never done this|confused|help me understand|eli5|explain like i'm|explain simply|what is|how do i even)\b/i,/\b(is it possible to|can someone tell me|is that right|sorry if this is dumb|newbie|first time)\b/i];static YOUTH_ELEMENTARY_PATTERNS=[/\b(for school|in class|homework|for kids|explain to my kid|i am \d+ years old|like a game|minecraft|roblox|scratch|simple words)\b/i];static ARCHITECT_PATTERNS=[/\b(asymptotic|idempotent|concurrency|race condition|lock-free|zero-copy|p99|wal|mvcc|cap theorem|byzantine|ast|simd|vectorized)\b/i,/\b(invariants|formal verification|distributed consensus|cache invalidation|backpressure|heuristics)\b/i];static EXECUTIVE_PATTERNS=[/\b(roi|capex|opex|cost benefit|timeline|roadmap|deliverable|stakeholder|sla|kpi|executive summary|vendor comparison)\b/i];static countSyllables(i){let t=i.toLowerCase().replace(/[^a-z]/g,"");if(!t||t.length<=3)return 1;let e=t.replace(/(?:[^laeiouy]|ed|es|e)$/,"").replace(/^y/,"").match(/[aeiouy]{1,2}/g);return e?Math.max(1,e.length):1}static analyzeCognitivePattern(i,t="General"){let e=i.trim();if(!e)return this.defaultAnalysis();let o=e.split(/\s+/).filter(Boolean),a=e.split(/[.!?]+/).filter(S=>S.trim().length>0),r=Math.max(1,a.length),n=Math.max(1,o.length),c=new Set(o.map(S=>S.toLowerCase())),p=Math.round(c.size/n*100)/100,y=0;for(let S of o)y+=this.countSyllables(S);let A=n/r,x=y/n,g=Math.round(Math.max(0,Math.min(100,206.835-1.015*A-84.6*x))),l=Math.max(1,Math.round(.39*A+11.8*x-15.59)),v=0;for(let S of this.HESITATION_PATTERNS){let V=e.match(S);V&&(v+=V.length)}let w=Math.min(100,v*35),E="Apply";/\b(what is|define|list|where is|who|when)\b/i.test(e)?E="Remember":/\b(explain|why|how does|summarize|clarify|difference between)\b/i.test(e)?E="Understand":/\b(build|write|create|implement|design|generate|code)\b/i.test(e)?E="Create":/\b(compare|contrast|bench|audit|evaluate|critique|pros and cons)\b/i.test(e)?E="Evaluate":/\b(debug|why does.*fail|diagnose|root cause|isolate|profile)\b/i.test(e)&&(E="Analyze");let C=this.YOUTH_ELEMENTARY_PATTERNS.some(S=>S.test(e)),Y=this.ARCHITECT_PATTERNS.some(S=>S.test(e)),k=this.EXECUTIVE_PATTERNS.some(S=>S.test(e)),M="practitioner",F="Practitioner (Intermediate)",I="Conversant";C||w>=50||l<=5||g>=85?(M="explorer",F="Explorer / Youth (All Ages & Beginners)",I="Novice"):k?(M="executive",F="Executive / Strategic (Outcomes & ROI)",I="Conversant"):Y||l>=13&&p>=.75?(M="architect",F="Staff Architect / Specialist",I="Native"):(M="practitioner",F="Practitioner / Professional",I="Fluent");let H=Math.min(100,Math.round(l*4+(100-g)*.4+w*.3)),z="",m=[];switch(M){case"explorer":z="Zone of Proximal Development (ZPD) Metaphorical Scaffolding. Deconstruct complex concepts into concrete daily-life analogies (e.g. restaurant orders, toy blocks). Zero condescension, zero unexplained jargon.",m.push("Explain the core concept using an intuitive real-world analogy before presenting any code."),m.push("Break down the implementation into bite-sized, numbered checkpoints with friendly explanations."),m.push("Define any unavoidable technical terms simply in plain English."),m.push("Ensure code examples are fully commented and easy to run without hidden dependencies.");break;case"practitioner":z="Pragmatic Best-Practice Scaffolding. Deliver clean idiomatic patterns, explain the 'why' behind choices, and warn about common production edge cases.",m.push("Deliver production-grade code adhering strictly to language conventions and idiomatic design."),m.push("Highlight common edge cases, null checks, and error-handling requirements."),m.push("Provide clean type annotations and minimal runnable usage examples.");break;case"architect":z="Cognitive Load Optimization (Sweller). Maximum token-to-signal density. Deliver mathematical invariant equations, formal interface contracts, and automated verification test harnesses. Zero conversational preamble.",m.push("Provide formal interface contracts with zero pseudocode, mock implementations, or omissions."),m.push("Enforce asymptotic time/space bounds, concurrency safety, and boundary edge assertions."),m.push("Omit introductory greetings, concluding summaries, and rhetorical transitions entirely.");break;case"executive":z="Executive Strategic Framing. Deliver high-level outcomes, trade-off matrices, risk mitigations, and concrete timelines before technical minutiae.",m.push("Structure response with an Executive Summary highlighting ROI, deliverables, and architecture trade-offs."),m.push("Present technical comparisons in clear Markdown trade-off tables."),m.push("Clarify implementation risks, resource requirements, and next immediate milestone.");break}return{audience:M,audienceLabel:F,fleschKincaidGrade:l,readingEaseScore:g,vocabularyRichnessTTR:p,bloomsLevel:E,cognitiveLoadIndex:H,uncertaintyScore:w,domainFamiliarity:I,scaffoldingStrategy:z,adaptiveDirectives:m}}static defaultAnalysis(){return{audience:"practitioner",audienceLabel:"Practitioner / Professional",fleschKincaidGrade:8,readingEaseScore:70,vocabularyRichnessTTR:.6,bloomsLevel:"Apply",cognitiveLoadIndex:40,uncertaintyScore:0,domainFamiliarity:"Conversant",scaffoldingStrategy:"Balanced standard technical scaffolding.",adaptiveDirectives:["Provide clean, production-ready implementation."]}}};var N=class{static PROFILES={architect:{lens:"architect",title:"Systems Architect",subtitle:"High-Availability, Concurrency & Invariant Security",badgeColor:"#38bdf8",primaryDomainFocus:"Distributed Systems & Infrastructure",equalizerDirectives:["Enforce formal computational invariants, boundary threshold recovery, and crash-only idempotency.","Require explicit failure modes (network partition, thread starvation, connection pool exhaustion).","State asymptotic time and memory space complexity (Big-O) for all algorithms.","Deliver self-contained production code with zero unstated mock implementations."],crossPollinationDirectives:["Include ergonomic developer-experience (DX): clear error codes, actionable logs, and clean API contracts that frontend designers can consume effortlessly.","Provide a minimal visual architecture flowchart or ASCII state transition diagram."]},designer:{lens:"designer",title:"Product & UI/UX Designer",subtitle:"Design Systems, Motion Ergonomics & WCAG AAA",badgeColor:"#ec4899",primaryDomainFocus:"Design Tokens, Spatial UI & Accessibility",equalizerDirectives:["Structure all visual styling around cohesive Design Tokens: typography scale, 4px/8px spacing grid, color contrast, and elevation shadows.","Enforce strict WCAG 2.2 AAA accessibility: ARIA landmarks, focus rings, keyboard tab-order, and high-contrast color ratios.","Implement fluid spring physics and micro-interactions with graceful prefers-reduced-motion fallbacks.","Ensure 100% responsive fluid breakpoints across mobile, tablet, desktop, and ultra-wide viewports."],crossPollinationDirectives:["Inject full engineering state management (idle, loading, error, success, empty states) with TypeScript prop interfaces.","Define deterministic API contracts and mock payloads so backend engineers can implement the design immediately without ambiguity."]},analyst:{lens:"analyst",title:"Data & Intelligence Analyst",subtitle:"Deterministic Queries, Statistical Rigor & Visual Contracts",badgeColor:"#10b981",primaryDomainFocus:"Data Pipelines, Statistics & Insights",equalizerDirectives:["Structure SQL and data transformations with deterministic idempotency, partition pruning, and index optimization.","Enforce statistical validity: report sample sizes, confidence intervals, and hypothesis test criteria (p-values, effect size).","Specify exact visualization data contracts: chart axes, scales, aggregations, tooltips, and legend hierarchies.","Handle nulls, NaN values, data skew, and time-zone conversions defensively."],crossPollinationDirectives:["Deliver intuitive executive summaries explaining statistical insights in plain English for non-technical stakeholders.","Include actionable business takeaways and risk thresholds alongside quantitative figures."]},creator:{lens:"creator",title:"Everyday Creator & Specialist",subtitle:"Zero Technical Barrier & Universal Idea Synthesis",badgeColor:"#eab308",primaryDomainFocus:"Universal Plain English to Elite Engineering Spec",equalizerDirectives:["Deconstruct ideas into clean, welcoming step-by-step milestones with zero intimidating technical jargon.","Use concrete, relatable everyday analogies so the logic is intuitive and transparent to any age group.","Guarantee that all generated code or instructions are 100% complete, runnable, and explained simply.","Encourage creative exploration while silently infusing production-grade engineering best practices under the hood."],crossPollinationDirectives:["Silently inject production-grade error-handling and security safeguards so the user's project is enterprise-ready from day one.","Provide a clear 'Next Steps' checklist so the creator knows exactly how to test and run their creation."]}};static getEqualizerBlock(i,t=!0){let e=this.PROFILES[i]||this.PROFILES.creator,o=`### Disciplinary Equalizer: ${e.title} (${e.subtitle})
`;return o+=e.equalizerDirectives.map(a=>`- ${a}`).join(`
`),t&&(o+=`

### Cross-Pollination Bridge (Leveling the Field across Design & Engineering)
`,o+=e.crossPollinationDirectives.map(a=>`- ${a}`).join(`
`)),o}static detectDisciplinaryLens(i){let t=i.toLowerCase(),e=(t.match(/\b(design|ui|ux|color|font|typography|spacing|padding|button|card|modal|css|tailwind|figma|animation|framer|motion|accessible|aria|theme|layout|responsive)\b/g)||[]).length,o=(t.match(/\b(architecture|backend|microservice|distributed|concurrency|thread|database|postgres|kafka|redis|api|grpc|latency|scale|docker|kubernetes|security|auth)\b/g)||[]).length,a=(t.match(/\b(data|sql|query|table|dataset|analytics|metrics|dashboard|chart|visualization|statistics|model|regression|correlation|pipeline|etl|pandas)\b/g)||[]).length,r=(t.match(/\b(help me|how to|i want to make|simple|beginner|explain|student|homework|kids|story|recipe|idea|plain english)\b/g)||[]).length;return e>o&&e>a&&e>=2?"designer":a>o&&a>=2?"analyst":o>=2?"architect":r>=1||e===0&&o===0&&a===0?"creator":"architect"}};var W=class{static CONSENSUS_TRAPS=[{trigger:/\b(cache|fast|latency|speed|performance)\b/i,trap:"Generic Redis / Memcached in-memory caching layer",alternative:"Deterministic derived state / zero-copy memory-mapped ring buffers"},{trigger:/\b(scale|scaling|traffic|load)\b/i,trap:"Standard horizontal Kubernetes microservices behind an Nginx round-robin load balancer",alternative:"Cell-based self-contained actor clusters with geographic partition affinity"},{trigger:/\b(database|store|data|storage|persist)\b/i,trap:"Standard monolithic PostgreSQL CRUD with ORM schema migrations",alternative:"Append-only immutable event streams with client-side CRDT materialization"},{trigger:/\b(ui|dashboard|frontend|interface)\b/i,trap:"Cookie-cutter React + Tailwind + Redux admin dashboard with standard cards",alternative:"Spatial canvas / keyboard-driven command palette / reactive streaming event mesh"},{trigger:/\b(ai|llm|agent|bot|rag)\b/i,trap:"Generic naive vector similarity search (RAG) with ChromaDB and langchain",alternative:"Deterministic hierarchical AST grammar masking with dual-process heuristic gatekeepers"},{trigger:/\b(auth|login|security|permission)\b/i,trap:"Standard JWT bearer tokens stored in localStorage with centralized auth server",alternative:"Cryptographic capability-based object tokens (Macaroons / ZK-attestation) verified at network edge"},{trigger:/\b(search|filter|find)\b/i,trap:"Elasticsearch / OpenSearch cluster with polling re-indexers",alternative:"Probabilistic roaring bitmaps / inverted bloom index embedded directly in SSD NVMe pages"}];static BISOCIATION_DOMAINS=[{domain:"Cellular Immunology & Apoptosis",mechanism:"Decoy antigen receptors and programmed cell death (apoptosis) for toxic state elimination.",analogy:"Instead of garbage collection or memory leak debugging, processes have a genetically programmed lifespan and self-terminate harmlessly after fulfilling their burst."},{domain:"Mycelial Transport Networks",mechanism:"Decentralized nutrient-driven pressure gradients without a central routing ledger.",analogy:"Instead of a centralized message broker, nodes push work along highest-conductivity gradients; dead nodes wither while congested nodes naturally shed load."},{domain:"Quantum Superposition & Wave Interference",mechanism:"Simultaneous speculative multi-path calculation where erroneous paths undergo destructive interference.",analogy:"Instead of deciding which branch to execute, evaluate both concurrently in lightweight SIMD lanes, cancelling out the failing outcome without branching penalties."},{domain:"Avionics & Triple-Modular Redundancy",mechanism:"Dissimilar hardware/software implementations voting on flight invariants in real time.",analogy:"Instead of trusting one AI model or algorithm, run three radically dissimilar engines; proceed only when mathematical invariants match, instantly neutralizing hallucinations."},{domain:"Game Theory & Mechanism Design",mechanism:"Incentive-compatible Nash equilibria where defecting or failing is mathematically costlier than cooperating.",analogy:"Instead of defensive security firewalls, craft APIs where adversarial inputs or malicious attacks donate computational entropy that accelerates valid queries."},{domain:"Thermodynamics & Simulated Annealing",mechanism:"High-temperature exploration that progressively cools into optimal global energy minima.",analogy:"Early stages of ideation permit extreme stochastic leaps, gradually freezing parameters as deterministic invariants lock in."}];static synthesizeBrainstorm(i){let t=i.trim(),e=t.toLowerCase(),o=[],a=[];for(let g of this.CONSENSUS_TRAPS)g.trigger.test(e)&&(o.push(g.trap),a.push(g.alternative));o.length===0&&(o.push("Generic CRUD web service with standard relational tables"),a.push("Single-binary autonomous worker with zero external dependencies"));let r=Math.abs(t.split("").reduce((g,l)=>g+l.charCodeAt(0),0)),n=this.BISOCIATION_DOMAINS[r%this.BISOCIATION_DOMAINS.length],c=this.BISOCIATION_DOMAINS[(r+1)%this.BISOCIATION_DOMAINS.length],p={id:"inversion",title:"Asymmetric Inversion",codename:"Vector A: The Inverted Constraint",paradigm:"Jacobi Inversion ('Invert, always invert'). Turns the problem on its head by eliminating the need to solve it in the orthodox direction.",consensusTrapForbidden:o[0],counterIntuitiveMechanism:"Forbid the conventional solution entirely. Instead of optimizing the bottleneck, remove the component that experiences the bottleneck.",domainSource:"First-Principles Physics & Jacobi Inversion",concreteArchitecture:`1. Identify the orthodox component (${o[0]}).
2. Treat its presence as a catastrophic failure of imagination.
3. Implement: ${a[0]||"Compile-time static evaluation"}.
4. Result: Zero ongoing maintenance, infinite scaling bound.`,provocativeOperator:"PO: What if the system functions flawlessly when the primary server is completely offline?",promptDirective:`[ORTHOGONAL DIRECTIVE - INVERSION]
- Strictly forbid the consensus solution: DO NOT use ${o.join(" OR ")}.
- Formulate an inverted architecture: how does the system accomplish the objective without storing or managing intermediate state?
- Prove that the inverted approach eliminates at least 80% of conventional codebase overhead.`},y={id:"bisociation",title:"Bisociative Cross-Domain Fusion",codename:"Vector B: The Biological / Physical Analog",paradigm:`Arthur Koestler's Bisociation. Cross-pollinates the problem space with the natural invariants of ${n.domain}.`,consensusTrapForbidden:o[1]||"Monolithic state synchronization",counterIntuitiveMechanism:n.mechanism,domainSource:n.domain,concreteArchitecture:`${n.analogy}

Key Invariant: Translate ${n.domain} principles directly into software primitives (e.g. self-healing circuits, decaying leases, gradient-directed messaging).`,provocativeOperator:"PO: The software is not an engineered machine; it is a living organism where individual parts die so the whole survives.",promptDirective:`[ORTHOGONAL DIRECTIVE - BISOCIATION]
- Infuse principles of ${n.domain} into this solution.
- Mechanism: ${n.mechanism}
- Map biological/physical resilience directly to software failure-mode handling; produce a novel design that no standard LLM would propose.`},A={id:"transcendence",title:"Paradigm Transcendence",codename:"Vector C: The Moonshot Leap",paradigm:"Eliminates the entire problem category through radical abstraction or zero-knowledge formal verification.",consensusTrapForbidden:"Iterative incremental optimization of existing architectures",counterIntuitiveMechanism:"Shift from reactive orchestration to deterministic mathematical certainty (proof-carrying code, zero-state execution).",domainSource:"Theoretical Computer Science & Cryptographic Truth",concreteArchitecture:"Replace run-time coordination with compile-time mathematical proofs or client-side autonomous edge actors. Zero central authority, zero synchronization latency.",provocativeOperator:"PO: The operation takes 0 milliseconds because the answer is already mathematically bounded before the request is issued.",promptDirective:`[ORTHOGONAL DIRECTIVE - PARADIGM TRANSCENDENCE]
- Discard conventional industry incrementalism.
- Synthesize a radical next-generation architecture that renders today's standard stack obsolete.
- Structure the solution as a self-verifying, zero-coordination execution fabric with formal mathematical proof of correctness.`},x=`### PROMPTSMITH AUTONOMOUS LATERAL BRAINSTORMING BLUEPRINT
**Objective**: Shatter conventional consensus thinking and engineer an unprecedented orthogonal path.

#### Consensus Traps Strictly Forbidden
Standard AI models will instinctively propose:
${o.map((g,l)=>`  ${l+1}. [FORBIDDEN] ${g}`).join(`
`)}
*Rule: Do not propose, reference, or iterate upon any of the forbidden consensus tropes above.*

#### Lateral Vector A: The Inverted Constraint (Jacobi/Munger)
- **Premise**: ${p.paradigm}
- **Provocation**: ${p.provocativeOperator}
- **Architectural Shift**: ${p.concreteArchitecture.replace(/\n/g," ")}

#### Lateral Vector B: Bisociative Collision (${n.domain})
- **Biological/Physical Source**: ${n.domain}
- **Mechanism**: ${n.mechanism}
- **Software Embodiment**: ${n.analogy}

#### Lateral Vector C: Paradigm Transcendence (The Moonshot)
- **Provocation**: ${A.provocativeOperator}
- **Mechanism**: Replace runtime coordination with deterministic edge invariants or zero-knowledge mathematical guarantees.

#### Synthesis Mandate
1. Present the 3 orthogonal options in an executive comparison matrix (Trade-offs, Novelty Index 1-100, Scalability Ceiling).
2. Deep-dive into the single most breakthrough path, delivering concrete runnable architecture, interfaces, and mathematical bounds.
3. Highlight precisely why this solution out-thinks standard AI outputs by at least an order of magnitude.`;return{challenge:t,consensusAttractors:o,coreContradiction:{parameterA:"Maximum Speed & Expressivity",parameterB:"Zero Operational Complexity & Overhead",trizResolution:"TRIZ Principle 10 (Prior Action) combined with Principle 28 (Mechanics Substitution)"},vectors:[p,y,A],masterBrainstormPrompt:x,recommendedPath:"inversion"}}};var ne=class{static analyzeFutureReadiness(i){let t=i.trim(),e=t.toLowerCase(),o=t.split(/\s+/).filter(Boolean),a=/\b(stop when|terminate when|success criteria|acceptance criteria|done criteria|definition of done)\b/i.test(t),r=/\b(do not explore|prune|strictly limit search|focus exclusively on|ignore alternatives)\b/i.test(t),n=/\b(invariant|precondition|postcondition|formal verification|assert|provable|deterministic)\b/i.test(t),c=/\b(agent|handoff|protocol|role isolation|payload schema|byzantine|consensus)\b/i.test(t),p=/(===|---|```context|\[SYSTEM|### Specification)/i.test(t),y=65,A=[],x=[],g="Medium";a&&r?(g="Low",y+=12,x.push("Definitive Termination Criteria bounded")):(g="High",A.push("Missing explicit termination condition: Deep reasoning models risk infinite exploration loops."),y-=8);let l="Medium";p&&o.length>20?(l="Low",y+=10,x.push("Anchor Signposts resist attention decay")):(l="High",A.push("Lack of structural anchors: Multi-million token context engines will suffer premise drift."),y-=7);let v=55;n?(v=95,y+=13,x.push("Formal Hoare verification invariants present")):A.push("Informal specification: Future neuro-symbolic solvers cannot mathematically verify output.");let w=50;return c&&(w=92,x.push("Multi-agent swarm handoff contracts specified")),{preemptiveScore:Math.max(30,Math.min(100,y)),driftRisk:l,searchLoopRisk:g,formalVerifiabilityScore:v,swarmReadinessScore:w,identifiedVulnerabilities:A,preemptiveInvariants:x,futureProofEnvelope:`### UNIVERSAL FUTURE-MODEL PREEMPTION ENVELOPE (NEXT-GEN AGIS & SWARMS)
**Architecture**: Model-Invariant Preemption Shield. Formulated to eliminate hallucination, search drift, and execution paralysis in all current and future intelligence engines.

#### 1. Test-Time Compute & Tree Search Pruning (Anti-Loop Guarantee)
- **Termination Threshold**: Terminate reasoning immediately upon establishing a mathematically sound, complete implementation.
- **Search Space Bounds**: Strictly forbid speculative tree branching outside the defined problem envelope.
- **Self-Critique Constraint**: Cap recursive self-refinement passes to maximum 2 iterations; do not loop on cosmetic variations.

#### 2. Neuro-Symbolic Formal Verification (Hoare Triples)
- **Preconditions**: All input types, shapes, and boundary domains must be strictly validated prior to logic execution.
- **System Invariants**: Computational determinism, zero memory leak, and monotonic state progress must be mathematically provable.
- **Postconditions**: Deliver concrete automated verification assertions demonstrating complete fulfillment of the objective.

#### 3. Autonomous Swarm & Sub-Agent Coordination Protocol
- **Agent Handoff Contract**: All sub-agent task outputs must adhere to strict, self-contained schemas with zero hidden state.
- **Byzantine Boundary**: Reject malformed intermediate states immediately with structured error remediation codes.

#### 4. Attention Decay & Infinite Context Resonator
- **Anchor Invariant**: Re-anchor all execution steps directly against the primary objective; reject premise drift across long token horizons.`}}};var T=class{static FILLER_PATTERNS=[/\b(can you please|could you please|please kindly|i would like you to|i want you to)\b/gi,/\b(as an ai language model|as a helpful assistant|in order to help me)\b/gi,/\b(feel free to|make sure that you|try your best to)\b/gi,/\b(basically|essentially|actually|obviously|literally)\b/gi];static ROLE_PATTERNS=[/\b(you are (a|an)|act as (a|an)|your role is|expert in|specialist in)\b/i,/<role>[\s\S]*?<\/role>/i,/### Role/i];static CONSTRAINT_PATTERNS=[/\b(do not|never|must not|only|strictly|ensure|avoid|limit to|maximum of|minimum of)\b/gi,/<constraints>[\s\S]*?<\/constraints>/i,/### Constraints/i];static SCHEMA_PATTERNS=[/\b(json|yaml|xml|markdown|table|schema|format as|output format)\b/i,/<output_format>[\s\S]*?<\/output_format>/i,/```(json|yaml|markdown|csv)/i];static REASONING_PATTERNS=[/\b(step[- ]by[- ]step|think|reason|verify|analyze|deliberate|chain[- ]of[- ]thought)\b/i,/<thinking>[\s\S]*?<\/thinking>/i];static analyze(i,t="Cursor / Claude Code"){let e=i.trim();if(!e)return this.emptyMetrics();let a=e.split(/\s+/).filter(Boolean).length,r=Math.ceil(a*1.33),n=0;this.ROLE_PATTERNS.some(G=>G.test(e))?n=20:/\b(senior|engineer|architect|auditor|specialist)\b/i.test(e)&&(n=12);let c=0,p=e.match(new RegExp(this.CONSTRAINT_PATTERNS[0],"gi"))||[];p.length>=3?c=25:p.length>0&&(c=p.length*8);let y=0;this.SCHEMA_PATTERNS.some(G=>G.test(e))?y=20:/\b(list|bullet|code|diff)\b/i.test(e)&&(y=10);let A=0;this.REASONING_PATTERNS.some(G=>G.test(e))&&(A+=10),/\b(if unsure|edge case|exception|boundary|fallback)\b/i.test(e)&&(A+=5);let x=0;for(let G of this.FILLER_PATTERNS){let K=e.match(G);K&&(x+=K.length)}let g=Math.max(0,20-x*4),l=x*3,v=Math.max(15,r-l),w=Math.max(0,Math.round((r-v)/r*100)),E=Math.min(100,Math.max(10,n+c+y+A+g)),C=ee.getDomainEnrichment(e),Y=C?C.domain:"General Reasoning & Code",k=[],M=[],F=[];C&&k.push(`Recognized ${C.domain} domain patterns`),n>=15?k.push("Strong persona & system identity"):F.push("Explicit System Persona / Role Boundary"),c>=18?k.push("Well-defined operational boundaries"):M.push("Vulnerable to scope-drift (insufficient negative constraints)"),y>=15?k.push("Explicit output schema defined"):F.push("Deterministic Output Schema (JSON/Markdown tags)"),g<14?M.push(`Contains ${x} conversational filler phrases`):k.push("High token-to-signal density");let I=J.analyzeCognitivePattern(e,Y);k.push(`Cognitive calibration: ${I.audienceLabel} (Grade ${I.fleschKincaidGrade})`);let H=N.detectDisciplinaryLens(e),z=N.PROFILES[H];k.push(`Equalizer Lens: ${z.title} (${z.primaryDomainFocus})`);let m=q.benchmarkPrompt(e),S=W.synthesizeBrainstorm(e),V=ne.analyzeFutureReadiness(e);return{iqScore:E,wordCount:a,estimatedTokens:r,optimizedTokens:v,tokenSavingsPercent:w,constraintScore:c,roleScore:n,schemaScore:y,evasionScore:A,efficiencyScore:g,detectedDomain:Y,targetRuntime:t,strengths:k,weaknesses:M,missingElements:F,benchmarks:m,cognitive:I,discipline:H,equalizer:z,brainstorm:S,future:V}}static emptyMetrics(){return{iqScore:0,wordCount:0,estimatedTokens:0,optimizedTokens:0,tokenSavingsPercent:0,constraintScore:0,roleScore:0,schemaScore:0,evasionScore:0,efficiencyScore:0,detectedDomain:"None",targetRuntime:"Cursor / Claude Code",strengths:[],weaknesses:["Prompt is empty"],missingElements:["All core components"],benchmarks:q.benchmarkPrompt(""),cognitive:J.analyzeCognitivePattern(""),discipline:"creator",equalizer:N.PROFILES.creator,brainstorm:W.synthesizeBrainstorm(""),future:ne.analyzeFutureReadiness("")}}};var j=class{static enhance(i,t="precision",e="Cursor / Claude Code",o,a){let r=i.trim();if(!r)return"";let n=ee.getDomainEnrichment(r),c=n?n.domain:"General",p=J.analyzeCognitivePattern(r,c),y=o||p.audience,A=this.getScaffoldingBlock(y),x=a||N.detectDisciplinaryLens(r),g=N.getEqualizerBlock(x,!0),l="";switch(t){case"claude_xml":l=this.enhanceClaudeXml(r,e,n);break;case"openai_o":l=this.enhanceOpenAiReasoning(r,e,n);break;case"gpt4o_schema":l=this.enhanceGpt4oSchema(r,e,n);break;case"gemini_context":l=this.enhanceGeminiContext(r,e,n);break;case"deepseek_r1":l=this.enhanceDeepSeekR1(r,e,n);break;case"grok_direct":l=this.enhanceGrokDirect(r,e,n);break;case"llama_system":l=this.enhanceLlamaSystem(r,e,n);break;case"qwen_coder":l=this.enhanceQwenCoder(r,e,n);break;case"cursor_composer":l=this.enhanceCursorComposer(r,e,n);break;case"windsurf_cascade":l=this.enhanceWindsurfCascade(r,e,n);break;case"claude_code":l=this.enhanceClaudeCode(r,e,n);break;case"copilot_edits":l=this.enhanceCopilotEdits(r,e,n);break;case"aider_diff":l=this.enhanceAiderDiff(r,e,n);break;case"devin_fullstack":l=this.enhanceDevinFullstack(r,e,n);break;case"cline_mcp":l=this.enhanceClineMcp(r,e,n);break;case"precision":l=this.enhancePrecision(r,e,n);break;case"adversarial":l=this.enhanceAdversarial(r,e,n);break;case"executive":l=this.enhanceExecutive(r,n);break;case"orthogonal_brainstorm":l=W.synthesizeBrainstorm(r).masterBrainstormPrompt;break;case"future_deep_reasoner":l=this.enhanceFutureReasoner(r);break;case"future_agent_swarm":l=this.enhanceFutureSwarm(r);break;case"future_formal_verifier":l=this.enhanceFutureVerifier(r);break;case"future_infinite_context":l=this.enhanceFutureInfinite(r);break;default:l=this.enhancePrecision(r,e,n);break}return g&&!l.includes("### Disciplinary Equalizer")&&(t==="claude_xml"?l+=`

<disciplinary_equalizer>
${g}
</disciplinary_equalizer>`:l+=`

${g}`),y==="explorer"?t==="claude_xml"?l+=`

<audience_scaffolding>
${A}
</audience_scaffolding>`:l+=`

${A}`:y==="architect"&&t!=="openai_o"&&t!=="deepseek_r1"?l+=`

${A}`:y==="executive"&&t!=="executive"&&(l+=`

${A}`),l}static resolveSystemRole(i,t){return i?i.domain.includes("Meta-Prompt")?`Frontier Prompt Architect & Agent Specification Engineer operating in ${t}`:i.category==="science"||i.domain.includes("Physics")?`Theoretical & Applied Physicist / Empirical Systems Scientist operating in ${t}`:i.domain.includes("Mathematical")?`Pure & Applied Mathematician / Formal Logic Verifier operating in ${t}`:i.category==="operations"||i.domain.includes("Real-World")?`Principal Operations Commander & Crisis Response Strategist operating in ${t}`:i.domain.includes("Human Communication")?`Master Communicator & Cognitive Scaffolding Strategist operating in ${t}`:i.category==="business"?`Principal Strategy Architect & Quantitative Financial Modeler operating in ${t}`:i.category==="legal"?`Senior Commercial Counsel & Regulatory Compliance Specialist operating in ${t}`:`Senior Staff Architect & Systems Verifier operating in ${t}. Specialization: ${i.domain}`:`Frontier Software Architect & Empirical Systems Verifier operating in ${t}`}static resolveOutputSpec(i){return i?i.recommendedOutputFormat:"Deliver self-contained, fully resolved technical artifacts followed by an explicit verification test suite."}static stripFiller(i){return i.replace(/\b(can you please|could you please|please kindly|i would like you to|i want you to)\b/gi,"").replace(/\b(as an ai language model|as a helpful assistant|in order to help me)\b/gi,"").replace(/\b(feel free to|make sure that you|try your best to)\b/gi,"").replace(/\b(basically|essentially|actually|obviously|literally)\b/gi,"").replace(/\s+/g," ").trim()}static enhancePrecision(i,t,e){let o=this.stripFiller(i),a=this.resolveSystemRole(e,t),r=this.resolveOutputSpec(e),n=e?e.injectedConstraints.map(c=>`- [${e.domain}] ${c}`).join(`
`):"";return`<context>
You are ${a}. Execute the directive with deterministic precision, grounded empirical correctness, and strict adherence to physical, mathematical, and domain constraints.
</context>

<task>
${o}
</task>

<constraints>
- Maintain production-grade correctness with zero unverified assumptions or unstated mock implementations.
- Obey all governing physical conservation laws, mathematical axioms, and operational realities.
- Provide self-contained, drop-in deliverables with explicit error-handling and boundary edge cases.
- NEVER include meta-commentary, apology preambles, or conversational transitions before or after deliverables.
${n?n+`
`:""}- Test and verify all assertions internally before labeling any solution correct.
</constraints>

<output_format>
${r}
</output_format>`}static enhanceClaudeExtendedThinking(i,t,e){let o=this.stripFiller(i),a=this.resolveSystemRole(e,t),r=this.resolveOutputSpec(e);return`<system_role>
${a}
</system_role>

<thinking_protocol>
Allocate dedicated internal thinking tokens to explore this problem systematically:
1. Deconstruct requirements, invariants, and hidden edge cases.
2. Formulate multiple candidate approaches and evaluate algorithmic trade-offs (space/time complexity, reliability).
3. Actively stress-test the chosen solution against adversarial boundary inputs before writing code.
4. Verify every single dependency, import, and interface contract.
</thinking_protocol>

<directive>
${o}
</directive>

<output_deliverable>
${r}
</output_deliverable>`}static enhanceOpenAiO3Effort(i,t,e){let o=this.stripFiller(i),a=this.resolveOutputSpec(e);return`[REASONING_EFFORT: HIGH]
[TARGET_RUNTIME: ${t}]

GOAL:
${o}

INVARIANT CONSTRAINTS:
1. Conduct extensive first-principles reasoning before emitting final code or artifacts.
2. Produce zero unverified assumptions; resolve all mathematical, logical, and typing requirements end-to-end.
3. Test edge-case inputs (null values, concurrency bounds, precision limits).

DELIVERABLE FORMAT:
${a}`}static enhanceClaudeXml(i,t,e){let o=this.stripFiller(i),a=this.resolveSystemRole(e,t),r=this.resolveOutputSpec(e),n=e?e.injectedConstraints.map(c=>`  * ${c}`).join(`
`):"";return`<system_role>
${a}
</system_role>

<scratchpad>
Before outputting deliverables:
1. Deconstruct the prompt requirements, physical laws, and invariant constraints.
2. Verify dimensional homogeneity and mathematical consistency.
3. Formulate edge-case boundary conditions and falsification tests.
4. Verify all components internally before certifying the solution.
</scratchpad>

<instructions>
${o}
</instructions>

<rules>
- Adhere strictly to provided specifications without conversational introductions or meta-commentary.
- Enclose all production deliverables in clean, delimited syntax blocks.
${n?n+`
`:""}- If edge-case ambiguities exist, implement the most resilient industry-standard pattern and document invariants.
</rules>

<output_specification>
${r}
</output_specification>`}static enhanceOpenAiReasoning(i,t,e){let o=i.replace(/\b(think step by step|walk through step by step|let's think step by step|explain your reasoning step by step)\b/gi,"").replace(/\s+/g," ").trim(),a=this.resolveSystemRole(e,t),r=this.resolveOutputSpec(e);return`### Problem Specification
${o}

### Domain Jurisdiction & Invariants
- Role Context: ${a}
${e?`- Domain: ${e.domain}
`+e.injectedConstraints.map(n=>`  - ${n}`).join(`
`):""}
- Invariant Criteria: Deterministic correctness across all physical, mathematical, and operational edge cases.
- Grounded Execution: Do NOT provide superficial pseudocode or speculative statements; provide fully realized, verified artifacts.

### Formal Acceptance & Falsification Verification
- Target Format: ${r}
- Provide 3 rigorous verification assertions testing:
  1. Nominal baseline state.
  2. Boundary threshold / singularity limit.
  3. Falsification stress test attempting to break the hypothesis or constraints.`}static enhanceGpt4oSchema(i,t,e){let o=this.stripFiller(i);return`## Objective & System Context
Act as a Senior Staff Engineer in ${t}. Execute the objective with high token efficiency and structured markdown output.

## Input Prompt
${o}

## Hard Constraints
- Output must be structured under clean markdown headings (## Architecture, ## Implementation, ## Verification).
- Code snippets must include language tags and complete variable types.
- Zero markdown backticks surrounding non-code conversational text.
${e?e.injectedConstraints.map(a=>`- ${a}`).join(`
`):""}

## Few-Shot Demonstration Pattern
Input: Calculate verified hash digest of payload
Output: 
\`\`\`typescript
import * as crypto from 'crypto';
export function hashPayload(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}
\`\`\``}static enhanceGeminiContext(i,t,e){let o=this.stripFiller(i);return`[SYSTEM INSTRUCTION: FRONTIER GEMINI RUNTIME]
You are operating within ${t}. You possess multi-modal context understanding and high-throughput recall.
${e?`Domain Context: ${e.domain}`:""}

============================= BEGIN REFERENCE CONTEXT =============================
Environment: Production Workspace (${t})
Knowledge Rules: ${e?e.injectedConstraints.join("; "):"Production standard compliance"}
============================== END REFERENCE CONTEXT ==============================

[ACTIONABLE OBJECTIVE]
${o}

[STRICT DELIVERABLE FORMAT]
- Deliver self-contained, fully resolved implementations.
- Ground all assertions directly in technical specifications.
- Avoid repetitive disclaimers or speculative non-answers.`}static enhanceDeepSeekR1(i,t,e){let o=i.replace(/\b(think step by step|walk through step by step|let's think step by step)\b/gi,"").replace(/\s+/g," ").trim();return`### Mathematical & Algorithmic Contract
Target Runtime: ${t}
${e?`Domain Specialization: ${e.domain}`:""}

### Formal Problem Statement
${o}

### Invariant Equations & Safety Bounds
1. Input preconditions: All parameters must be strictly typed, validated at boundary, and sanitised against degenerate/null inputs.
2. Computational invariants: Guarantee termination, deterministic memory allocation, and idempotent execution.
3. State transitions: Maintain consistent state across asynchronous concurrency and unexpected exceptions.

### Verification Harness
Deliver full runnable code followed by an explicit test harness verifying:
- Happy path baseline execution
- Extreme boundary condition (minimum, maximum, empty set)
- Adversarial fault injection and recovery`}static enhanceGrokDirect(i,t,e){let o=this.stripFiller(i);return`### MISSION DIRECTIVE (ZERO FLUFF)
Environment: ${t}
Command: ${o}

### EMPIRICAL EXECUTION RULES
- Deliver direct, unhedged technical solutions backed by empirical evidence and ground truth.
- Zero corporate boilerplate, safety disclaimers, or introductory fluff.
- If existing code or assumptions are flawed, state the exact flaw bluntly and provide the working replacement.
${e?`- Anchor in domain truth: ${e.injectedConstraints.join("; ")}`:""}

### DELIVERABLE
Production-ready code and exact execution verification steps.`}static enhanceLlamaSystem(i,t,e){let o=this.stripFiller(i);return`<|begin_of_text|><|start_header_id|>system<|end_header_id|>
You are an expert autonomous software engineer operating inside ${t}.
You strictly adhere to operational constraints and output concise, well-structured, bug-free implementations.
${e?`Domain Context: ${e.domain}. Rules: ${e.injectedConstraints.join(", ")}`:""}
<|eot_id|><|start_header_id|>user<|end_header_id|>
Execute the following task with high precision:

${o}

Requirements:
1. Provide the complete implementation with zero placeholders or omissions.
2. Include type definitions, error boundaries, and defensive checks.
3. Deliver a brief validation snippet confirming functionality.
<|eot_id|><|start_header_id|>assistant<|end_header_id|>`}static enhanceQwenCoder(i,t,e){let o=this.stripFiller(i);return`// Target: ${t}
// Domain: ${e?e.domain:"General Engineering"}
// Instruction: Implement the following specification in production-ready code with complete imports, strict types, and unit tests.

/* SPECIFICATION
${o}
*/

// REQUIREMENTS
// 1. Drop-in replacement with zero omitted logic (no '// TODO' or 'implement here').
// 2. Strict type annotations and robust error propagation.
// 3. Include a runnable test suite asserting all boundary invariants.`}static enhanceCursorComposer(i,t,e){let o=this.stripFiller(i);return`### Cursor Composer Multi-File Task
Target Workspace: ${t}

### Request Summary
${o}

### Modification Guidelines
- Edit only the targeted files and symbols required for this task.
- Preserve existing project style, comments, and conventions.
- Format all code changes as full, drop-in replacement blocks or unambiguous edits.
${e?`- Enforce domain constraints: ${e.injectedConstraints.join("; ")}`:""}

### Verification Step
Run local workspace tests or compilation checks to verify zero regression.`}static enhanceWindsurfCascade(i,t,e){let o=this.stripFiller(i);return`### Cascade Flow Task Plan
Context: Operating within Windsurf IDE (${t})

### Task Objective
${o}

### Cascade Execution Sequence
Step 1: Inspect relevant files and dependency manifests in the workspace.
Step 2: Implement the requested functionality with atomic, verified file edits.
Step 3: Execute workspace terminal checks to confirm zero lint, type, or runtime errors.

### Constraints
- Zero conversational filler; proceed directly with tool actions.
- Document any modified exported interfaces cleanly.`}static enhanceClaudeCode(i,t,e){return`Task for Claude Code CLI:
${this.stripFiller(i)}

Operational Directives:
- Inspect the codebase using ripgrep and file read tools before modifying files.
- Apply surgical edits to files using standard diff-compatible modifications.
- Run the project test suite (e.g. npm test, cargo test, pytest) to verify changes pass cleanly.
- Keep terminal output concise and commit-ready.`}static enhanceCopilotEdits(i,t,e){let o=this.stripFiller(i);return`Scope: Tightly focused inline edit in active editor context (${t})

Task:
${o}

Guidelines:
- Modify only the required functions/lines in the active files.
- Do NOT refactor or reformat unrelated code.
- Match existing naming, indentation, and docstring conventions.`}static enhanceAiderDiff(i,t,e){return`Aider Session Directive:
${this.stripFiller(i)}

Rules for Git Commit:
1. Make complete, working changes to the relevant files.
2. Run test verification command before completing.
3. Formulate a concise, imperative Git commit message summarizing the change (e.g. 'feat: implement ...' or 'fix: resolve ...').`}static enhanceDevinFullstack(i,t,e){let o=this.stripFiller(i);return`### Devin Autonomous Engineering Specification
Project Environment: ${t}

### Milestone 1: Requirement Analysis & Investigation
${o}

### Milestone 2: Implementation & File Edits
- Implement all required changes across backend, frontend, and configuration files.
- Ensure all environment variables and secrets are handled securely without hardcoding.

### Milestone 3: End-to-End Verification
- Launch local test server or test suite in shell.
- Verify browser or API response contracts match expectations.
- Document any setup instructions in README if dependencies were added.`}static enhanceClineMcp(i,t,e){return`Cline Agent MCP Execution Directive:
Task: ${this.stripFiller(i)}

MCP Tool Execution Protocol:
1. Use file read tools to inspect exact line numbers before editing.
2. Apply atomic write_to_file or apply_diff tool calls.
3. Use execute_command to run build/lint checks after edits.
4. Stop and report when all acceptance criteria are verified.`}static enhanceAdversarial(i,t,e){let o=e?e.reasoningChecklist.map((a,r)=>`${r+1}. ${a}`).join(`
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
2. Fact-Checking & Semantic Grounding: Expose any historical, mathematical, or accounting hallucinations.
3. Domain-Specific Verification Checklist:
${o}
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
${t?`- Industry Anchor: ${t.domain}`:""}`}static getScaffoldingBlock(i){switch(i){case"explorer":return`### Audience Scaffolding: Young Student & Beginner Friendly (All Ages)
- Anchor key concepts in an intuitive real-world analogy before presenting any code or technical answers.
- Break down the solution into bite-sized, friendly, numbered checkpoints with clear explanations.
- Define any technical jargon simply in plain English; ensure zero patronizing tone or gatekeeping.
- Code blocks must be completely runnable, fully commented, and free of hidden assumptions.`;case"architect":return`### Audience Scaffolding: Staff Systems Architect & Formal Verification
- Maximize token-to-signal density; omit all conversational preamble, transitions, and pleasantries.
- State formal computational invariants, memory safety constraints, and asymptotic complexity (Time/Space).
- Deliver self-contained production artifacts with automated unit/integration test assertions.`;case"executive":return`### Audience Scaffolding: Executive Strategic Decision-Maker
- Provide an Executive Summary highlighting business ROI, feasibility, and architecture trade-offs.
- Structure technical comparisons in clear Markdown trade-off tables.
- Outline risk mitigation strategies, resource requirements, and next immediate milestone.`;case"practitioner":default:return`### Audience Scaffolding: Professional Practitioner
- Deliver production-grade idiomatic code with robust error handling and type definitions.
- Warn against common edge cases, boundary failures, and concurrency hazards.`}}};var R=$(require("vscode")),L=$(require("fs")),B=$(require("path")),D=class{static inspectWorkspace(){let i=R.workspace.workspaceFolders,t=R.window.activeTextEditor,e=[],o="Standalone Editor",a="";if(i&&i.length>0){a=i[0].uri.fsPath,o=i[0].name;let y=B.join(a,"package.json");if(L.existsSync(y))try{let A=JSON.parse(L.readFileSync(y,"utf-8")),x={...A.dependencies||{},...A.devDependencies||{}},g=["typescript","react","next","vue","svelte","tailwindcss","express","fastify","nestjs","prisma","drizzle-orm","zod","vitest","jest","playwright","esbuild","vite","firebase-functions","firebase-admin","stripe"];for(let l of g)x[l]&&e.push(`${l}@${String(x[l]).replace(/^[\^~]/,"")}`);e.length===0&&e.push("Node.js / npm")}catch{e.push("Node.js")}L.existsSync(B.join(a,"tsconfig.json"))&&!e.some(A=>A.startsWith("typescript"))&&e.push("TypeScript (tsconfig)"),(L.existsSync(B.join(a,"pyproject.toml"))||L.existsSync(B.join(a,"requirements.txt")))&&e.push("Python"),L.existsSync(B.join(a,"Cargo.toml"))&&e.push("Rust (Cargo)"),L.existsSync(B.join(a,"go.mod"))&&e.push("Go (go.mod)")}let r="None",n="plaintext",c=[];if(t){n=t.document.languageId,r=a?B.relative(a,t.document.uri.fsPath).replace(/\\/g,"/"):B.basename(t.document.uri.fsPath);let y=t.document.getText().slice(0,12e3),A=[/\b(?:export\s+)?(?:async\s+)?function\s+([a-zA-Z0-9_]+)/g,/\b(?:export\s+)?(?:class|interface|type|enum)\s+([a-zA-Z0-9_]+)/g,/\bdef\s+([a-zA-Z0-9_]+)\s*\(/g,/\bfn\s+([a-zA-Z0-9_]+)\s*[<(]/g,/\bfunc\s+(?:\([^)]+\)\s*)?([a-zA-Z0-9_]+)\s*\(/g];for(let x of A){let g;for(;(g=x.exec(y))!==null;)g[1]&&!c.includes(g[1])&&c.length<14&&c.push(g[1])}}let p=["### Grounded Workspace & File Context"];return p.push(`- Workspace: \`${o}\``),r!=="None"&&p.push(`- Active File: \`${r}\` (Language: \`${n}\`)`),e.length>0&&p.push(`- Verified Stack & Packages: ${e.slice(0,10).map(y=>`\`${y}\``).join(", ")}`),c.length>0&&p.push(`- Active File Symbols: ${c.map(y=>`\`${y}\``).join(", ")}`),p.push("- Grounding Rule: Reuse existing project packages and symbol signatures above; do not invent unverified libraries."),{hasWorkspace:!!(i&&i.length>0),workspaceName:o,activeFileRelative:r,languageId:n,detectedStack:e,extractedSymbols:c,contextSummaryBlock:p.join(`
`)}}static inspectDiagnosticsAndDiff(){let i=R.window.activeTextEditor,t=R.workspace.workspaceFolders,e=t&&t.length>0?t[0].uri.fsPath:"",o=[],a=0;if(i){let n=i.document.uri,c=R.languages.getDiagnostics(n).filter(y=>y.severity===R.DiagnosticSeverity.Error||y.severity===R.DiagnosticSeverity.Warning),p=e?B.relative(e,n.fsPath).replace(/\\/g,"/"):B.basename(n.fsPath);for(let y of c.slice(0,8)){a++;let A=y.range.start.line+1,x=y.severity===R.DiagnosticSeverity.Error?"ERROR":"WARN",g="";try{g=i.document.lineAt(y.range.start.line).text.trim()}catch{g=""}o.push(`- [${x}] \`${p}:${A}\`: ${y.message}${g?` | Line: \`${g.slice(0,110)}\``:""}`)}}if(o.length===0){let n=R.languages.getDiagnostics();for(let[c,p]of n){let y=p.filter(x=>x.severity===R.DiagnosticSeverity.Error);if(y.length===0)continue;let A=e?B.relative(e,c.fsPath).replace(/\\/g,"/"):B.basename(c.fsPath);for(let x of y.slice(0,4))if(a++,o.push(`- [ERROR] \`${A}:${x.range.start.line+1}\`: ${x.message}`),o.length>=8)break;if(o.length>=8)break}}if(o.length===0)return{count:0,block:`### Active IDE Diagnostics
- Status: Zero active compiler or linter errors detected in workspace.
- Directive: Preserve zero-warning compile state and strict type safety.`};let r=[`### Active IDE Compiler & Linter Diagnostics (${a} Issue${a===1?"":"s"})`,...o,"- Remediation Contract: Resolve the exact file:line diagnostic errors above without breaking adjacent type signatures."];return{count:a,block:r.join(`
`)}}static lintAmbiguities(i){let t=(i||"").trim(),e=[];return t&&(/\b(typescript|javascript|python|rust|go|golang|java|c\+\+|c#|sql|html|css|react|node|bash|powershell)\b/i.test(t)||e.push({id:"missing_runtime",severity:"HIGH",label:"No target language or runtime specified",fixSnippet:"Target Runtime: Use strict TypeScript / Node.js with explicit type annotations."}),/\b(error|exception|fallback|null|empty|timeout|retry|edge case|boundary|invalid)\b/i.test(t)||e.push({id:"missing_error_bounds",severity:"MEDIUM",label:"Missing error handling & boundary conditions",fixSnippet:"Boundary & Error Handling: Explicitly handle null/empty inputs, timeouts, and invalid states without silent failures."}),/\b(json|xml|markdown|diff|file|function|schema|test|interface|return|deliverable)\b/i.test(t)||e.push({id:"missing_output_contract",severity:"MEDIUM",label:"No explicit output format or deliverable contract",fixSnippet:"Output Contract: Return complete, drop-in production code with zero placeholders or elided sections."}),/\b(test|verify|assert|unit test|benchmark|invariant|prove|validation)\b/i.test(t)||e.push({id:"missing_verification",severity:"LOW",label:"No verification or unit test assertion requested",fixSnippet:"Verification: Include deterministic unit test assertions covering nominal and boundary edge cases."})),e}static async exportWorkspaceRulesFile(i,t,e=!1){let o=R.workspace.workspaceFolders;if(!o||o.length===0)return{ok:!1,message:"Open a project folder in your IDE first to export "+i+"."};let a=o[0].uri.fsPath,r=B.join(a,i),n=B.dirname(r);L.existsSync(n)||L.mkdirSync(n,{recursive:!0});let c=this.inspectWorkspace(),p=`# ${i} - Generated & Compacted by PromptSmith
# Workspace: ${c.workspaceName} | Stack: ${c.detectedStack.join(", ")||c.languageId}

`,y=["## Core Engineering Invariants","- Write complete, production-ready code with zero TODO placeholders or truncated sections.","- Preserve existing project module boundaries, naming conventions, and dependency versions.","- Validate all external inputs, boundary conditions, and error states explicitly.","- Prefer small, deterministic, testable functions over deeply nested stateful logic."].join(`
`),A=t&&t.trim()?`${p}${c.contextSummaryBlock}

${y}

## Active Task & Prompt Blueprint
${t.trim()}
`:`${p}${c.contextSummaryBlock}

${y}
`;try{if(L.writeFileSync(r,A,"utf-8"),!e){let x=await R.workspace.openTextDocument(r);await R.window.showTextDocument(x,{preview:!1})}return{ok:!0,filePath:r,message:`Wrote compacted rules to ${i} (${A.length} chars).`}}catch(x){return{ok:!1,message:`Failed to write ${i}: ${x instanceof Error?x.message:String(x)}`}}}static detectSecrets(i){let t=(i||"").trim();if(!t)return[];let e=[{label:"OpenAI / Anthropic Key (sk-...)",regex:/\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{16,}\b/g},{label:"GitHub Token (ghp_/github_pat_)",regex:/\b(?:ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g},{label:"AWS Access Key (AKIA...)",regex:/\bAKIA[0-9A-Z]{16}\b/g},{label:"Google API Key (AIza...)",regex:/\bAIza[0-9A-Za-z_-]{35}\b/g},{label:"Slack Token (xoxb/xoxp)",regex:/\bxox[baprs]-[0-9A-Za-z-]{10,}\b/g},{label:"Stripe Live Key (sk_live_/rk_live_)",regex:/\b(?:sk|rk)_live_[0-9A-Za-z]{16,}\b/g},{label:"Bearer / JWT Token",regex:/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g},{label:"Database URI with Password",regex:/\b(?:postgres|postgresql|mysql|mongodb(?:\+srv)?|redis):\/\/[^:\s]+:[^@\s]+@[^\s]+/gi},{label:"Private Key Block",regex:/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g}],o=[];for(let a of e){let r=t.match(a.regex);r&&r.length>0&&o.push({label:a.label,count:r.length})}return o}static scrubSecrets(i){let t=i||"",e=0,o=[{regex:/\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{16,}\b/g,token:"[REDACTED_API_KEY]"},{regex:/\b(?:ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g,token:"[REDACTED_GITHUB_TOKEN]"},{regex:/\bAKIA[0-9A-Z]{16}\b/g,token:"[REDACTED_AWS_KEY]"},{regex:/\bAIza[0-9A-Za-z_-]{35}\b/g,token:"[REDACTED_GCP_KEY]"},{regex:/\bxox[baprs]-[0-9A-Za-z-]{10,}\b/g,token:"[REDACTED_SLACK_TOKEN]"},{regex:/\b(?:sk|rk)_live_[0-9A-Za-z]{16,}\b/g,token:"[REDACTED_STRIPE_KEY]"},{regex:/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g,token:"[REDACTED_JWT]"},{regex:/\b((?:postgres|postgresql|mysql|mongodb(?:\+srv)?|redis):\/\/[^:\s]+:)([^@\s]+)(@[^\s]+)/gi,token:"$1[REDACTED_DB_PASS]$3"},{regex:/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----[\s\S]*?-----END (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g,token:"[REDACTED_PRIVATE_KEY_BLOCK]"}];for(let a of o){let r=t.match(a.regex);r&&r.length>0&&(e+=r.length,t=t.replace(a.regex,a.token))}return{scrubbed:t,redactedCount:e}}static detectActiveModelHook(){let i=(R.env.appName||"").toLowerCase(),t=R.workspace.workspaceFolders,e=t&&t.length>0?t[0].uri.fsPath:"";if(i.includes("cursor"))return{hostIde:"Cursor IDE",detectedModelLabel:"Cursor Composer (Claude 3.7)",recommendedProfile:"cursor_composer",nativeRuleFile:".cursorrules"};if(i.includes("windsurf"))return{hostIde:"Windsurf IDE",detectedModelLabel:"Windsurf Cascade",recommendedProfile:"windsurf_cascade",nativeRuleFile:".windsurfrules"};if(i.includes("antigravity"))return{hostIde:"Antigravity IDE",detectedModelLabel:"Gemini 2.5 Pro Agent",recommendedProfile:"gemini_context",nativeRuleFile:"CLAUDE.md"};let o=R.extensions.all.map(a=>a.id.toLowerCase());if(o.some(a=>a.includes("claude-code")||a.includes("anthropic")))return{hostIde:"VS Code",detectedModelLabel:"Claude Code CLI",recommendedProfile:"claude_code",nativeRuleFile:"CLAUDE.md"};if(o.some(a=>a.includes("claude-dev")||a.includes("cline")||a.includes("roo-cline")))return{hostIde:"VS Code",detectedModelLabel:"Cline / Roo Agent",recommendedProfile:"cline_mcp",nativeRuleFile:".cursorrules"};if(o.some(a=>a.includes("github.copilot")))return{hostIde:"VS Code",detectedModelLabel:"GitHub Copilot Edits",recommendedProfile:"copilot_edits",nativeRuleFile:".github/copilot-instructions.md"};if(e){if(L.existsSync(B.join(e,".cursorrules")))return{hostIde:"VS Code",detectedModelLabel:"Cursor Rules Bridge",recommendedProfile:"cursor_composer",nativeRuleFile:".cursorrules"};if(L.existsSync(B.join(e,".windsurfrules")))return{hostIde:"VS Code",detectedModelLabel:"Windsurf Cascade Bridge",recommendedProfile:"windsurf_cascade",nativeRuleFile:".windsurfrules"};if(L.existsSync(B.join(e,"CLAUDE.md")))return{hostIde:"VS Code",detectedModelLabel:"Claude Code Bridge",recommendedProfile:"claude_code",nativeRuleFile:"CLAUDE.md"}}return{hostIde:R.env.appName||"VS Code",detectedModelLabel:"Claude 3.7 / Frontier Auto",recommendedProfile:"claude_xml",nativeRuleFile:".github/copilot-instructions.md"}}static compileVoiceTranscript(i){let t=(i||"").trim();if(!t)return{cleaned:"",corrections:0,detectedCommand:null};let e=t,o=0,a=null,r=[{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+claude\s*$/i,cmd:"claude_xml"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+(?:openai|o3|gpt)\s*$/i,cmd:"openai_o"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+cursor\s*$/i,cmd:"cursor_composer"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+copilot\s*$/i,cmd:"copilot_edits"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?scrub\s+(?:all\s+)?secrets\s*$/i,cmd:"scrub_secrets"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?ground\s+in\s+workspace\s*$/i,cmd:"ground_workspace"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?brainstorm(?:\s+this)?\s*$/i,cmd:"orthogonal_brainstorm"}];for(let g of r)g.rx.test(e)&&(a=g.cmd,e=e.replace(g.rx,""),o++);let n=/([^.,;!?]+?)(?:,\s*|\s+)(?:no\s+wait(?:\s+actually)?|scratch\s+that|actually\s+no|wait\s+no\s+make\s+it|i\s+mean\s+instead)\s*,?\s*([^.,;!?]+)/gi;e=e.replace(n,(g,l,v)=>(o++,String(v).trim()));let c=[[/\bdot\s+env\b/gi,".env"],[/\bpackage\s+dot\s+json\b/gi,"package.json"],[/\bts\s*config\s+dot\s+json\b/gi,"tsconfig.json"],[/\btriple\s+equals\b/gi,"==="],[/\bnot\s+equals\b/gi,"!=="],[/\bfat\s+arrow\b/gi,"=>"]];for(let[g,l]of c)g.test(e)&&(o++,e=e.replace(g,l));let p=new Set(["and","or","in","on","at","to","for","from","with","using","into","that","which","is","are","the","a","an","of","by","as"]),y=g=>{let l=g.trim().split(/\s+/),v=[];for(let w=0;w<l.length;w++){if(w>0&&p.has(l[w].toLowerCase()))return{ident:v,trailing:l.slice(w)};v.push(l[w])}return{ident:v,trailing:[]}};e=e.replace(/\bsnake\s+case\s+([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+){0,3})/gi,(g,l)=>{o++;let{ident:v,trailing:w}=y(String(l)),E=v.map(C=>C.toLowerCase()).join("_");return w.length>0?`${E} ${w.join(" ")}`:E}),e=e.replace(/\bcamel\s+case\s+([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+){0,3})/gi,(g,l)=>{o++;let{ident:v,trailing:w}=y(String(l)),E=v.map(Y=>Y.toLowerCase()),C=E[0]+E.slice(1).map(Y=>Y.charAt(0).toUpperCase()+Y.slice(1)).join("");return w.length>0?`${C} ${w.join(" ")}`:C}),e=e.replace(/\bpascal\s+case\s+([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+){0,3})/gi,(g,l)=>{o++;let{ident:v,trailing:w}=y(String(l)),E=v.map(C=>C.charAt(0).toUpperCase()+C.slice(1).toLowerCase()).join("");return w.length>0?`${E} ${w.join(" ")}`:E});let A=/\b(?:uh+|um+|uhm+|er+|ah+|like\s+basically|you\s+know\s+what\s+i\s+mean|you\s+know|sort\s+of\s+like|kind\s+of\s+like|so\s+yeah|i\s+guess\s+like)\b[,.\s]*/gi,x=e;return e=e.replace(A," "),e!==x&&o++,e=e.replace(/\s{2,}/g," ").trim(),e.length>0&&(e=e.charAt(0).toUpperCase()+e.slice(1)),{cleaned:e,corrections:o,detectedCommand:a}}static simulateMultiTurnSavings(i,t){let e=(i||"").trim()?i.trim().split(/\s+/).length:120,o=Math.max(80,Math.round(e*1.35)),a=Math.max(.18,Math.min(.65,(t||35)/100)),r=Math.max(40,Math.round(o*(1-a))),n=20,c=n*(n+1)/2,p=Math.round((o-r)*c+o*8),y=p/1e6*15,A=p/1e6*20,x=p/1e6*10;return{originalTokensPerTurn:o,optimizedTokensPerTurn:r,turnsSimulated:n,cumulativeTokensSaved:p,claudeSonnetSavedUsd:y.toFixed(3),openaiO3SavedUsd:A.toFixed(3),gpt4oSavedUsd:x.toFixed(3)}}};var ge=class{static getHtml(i,t,e,o,a,r,n,c,p=!0,y="Claude 3.7 / Auto",A=[]){let x=(i||"Select text in your editor and press Alt+P to improve it.").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),g=q.benchmarkPrompt(i),l=g.filter(m=>m.category==="model"),v=g.filter(m=>m.category==="bot"),w=g.filter(m=>m.category==="future"),E=e.cognitive,C=n||E.audience,Y=c||e.discipline,k=N.PROFILES[Y]||e.equalizer,M=D.inspectWorkspace(),F=D.lintAmbiguities(i),I=D.detectSecrets(i),H=D.simulateMultiTurnSavings(i,e.tokenSavingsPercent),z="Calibrated for maximum reasoning precision: high-density tokens, invariant constraints, and zero conversational fluff.";return C==="explorer"?z="Friendly learning mode active: intuitive real-world analogies, step-by-step scaffolding, and clear explanations.":C==="architect"?z="Staff-architect precision active: formal Hoare invariants, strict schema validation, and maximum signal density.":C==="executive"&&(z="Executive decision mode active: strategic deliverables, risk trade-offs, and clear ROI contracts."),`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>PromptSmith Studio</title>
  <style>
    :root {
      --bg: #0b0f17;
      --fg: #f1f5f9;
      --card: #131a26;
      --card-border: rgba(148, 163, 184, 0.16);
      --accent: #38bdf8;
      --accent-glow: rgba(56, 189, 248, 0.25);
      --emerald: #34d399;
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
    .mascot-facing.flip-left { transform: scaleX(-1); }
    .mascot-layered-rig { width: 100%; height: 100%; position: relative; }
    .pose-front, .pose-side { position: absolute; inset: 0; width: 100%; height: 100%; transition: opacity 0.14s ease; pointer-events: none; }
    .pose-front { opacity: 1; }
    .pose-side  { opacity: 0; }
    .rig-state-walking .pose-front { opacity: 0; }
    .rig-state-walking .pose-side  { opacity: 1; }
    .rig-layer { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
    .rig-ground-shadow {
      position: absolute; bottom: 2px; left: 20%; width: 56%; height: 6px;
      background: radial-gradient(ellipse at center, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0) 75%);
      border-radius: 50%; transform-origin: center center;
    }
    .rig-layer-leg-l  { transform-origin: 36.1% 72.6%; }
    .rig-layer-leg-r  { transform-origin: 48.4% 72.6%; }
    .rig-layer-upper  { transform-origin: 45% 65%; }
    .rig-layer-hat    { transform-origin: 26.2% 51.6%; }
    .rig-layer-hammer { transform-origin: 57.6% 55.6%; }
    .rig-side-leg-near { transform-origin: 51.2% 72.6%; }
    .rig-side-leg-far  { transform-origin: 51.2% 72.6%; }
    .rig-side-upper    { transform-origin: 48.0% 66.0%; }
    .rig-side-head     { transform-origin: 47.3% 45.3%; }

    /* Idle breathing (hat follows head) */
    .rig-state-idle .rig-layer-upper, .rig-state-idle .rig-layer-hat { animation: gentIdleBreath 2.6s infinite ease-in-out; }
    .rig-state-idle .rig-layer-hammer { animation: gentIdleHammer 2.6s infinite ease-in-out; }
    .rig-state-idle .rig-ground-shadow { animation: gentShadowIdle 2.6s infinite ease-in-out; }

    /* Side-profile stroll: hands behind back, head tipped down in thought */
    .rig-state-walking .rig-side-upper { animation: gentSideTorsoBob 0.31s infinite ease-in-out; }
    .rig-state-walking .rig-side-head { animation: gentSideHeadDown 0.31s infinite ease-in-out; }
    .rig-state-walking .rig-side-leg-near { animation: gentSideStrideNear 0.62s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-side-leg-far { animation: gentSideStrideFar 0.62s infinite cubic-bezier(0.42, 0, 0.58, 1); }
    .rig-state-walking .rig-ground-shadow { animation: gentStrideShadow 0.31s infinite ease-in-out; }

    /* Forge strike */
    .rig-state-forging .rig-layer-hammer { animation: gentForgeStrike 0.24s infinite alternate ease-in-out; }
    .rig-state-forging .rig-layer-upper, .rig-state-forging .rig-layer-hat { animation: gentStrideBounce 0.24s infinite ease-in-out; }

    /* Hat-removal salute */
    .rig-state-salute .rig-layer-upper { animation: gentSaluteBow 1.3s ease-in-out; }
    .rig-state-salute .rig-layer-hat { animation: gentHatRemove 1.3s ease-in-out; }

    /* Thought cloud above the hat while strolling */
    .stroll-thought { position: absolute; left: 44%; top: -24px; width: 40px; height: 30px; opacity: 0; transition: opacity 0.25s ease; pointer-events: none; z-index: 2; }
    .rig-state-walking .stroll-thought { opacity: 1; }
    .stroll-thought .tb { position: absolute; border-radius: 50%; background: rgba(241,245,249,0.92); }
    .stroll-thought .tb1 { width: 3px; height: 3px; left: 3px; bottom: 0; animation: thoughtRise 1.8s infinite ease-in-out; }
    .stroll-thought .tb2 { width: 5px; height: 5px; left: 7px; bottom: 4px; animation: thoughtRise 1.8s infinite ease-in-out 0.3s; }
    .stroll-thought .tcloud {
      position: absolute; left: 11px; top: 0; width: 27px; height: 16px; border-radius: 10px;
      background: rgba(241,245,249,0.95);
      box-shadow: -6px 3px 0 -2px rgba(241,245,249,0.95), 6px 3px 0 -2px rgba(241,245,249,0.95);
      display: flex; align-items: center; justify-content: center; gap: 2px;
      animation: thoughtFloat 2.4s infinite ease-in-out;
    }
    .stroll-thought .tcloud span { width: 3px; height: 3px; border-radius: 50%; background: #0f172a; animation: thoughtDot 1.2s infinite ease-in-out; }
    .stroll-thought .tcloud span:nth-child(2) { animation-delay: 0.2s; }
    .stroll-thought .tcloud span:nth-child(3) { animation-delay: 0.4s; }

    @keyframes thoughtRise { 0%, 100% { transform: translateY(0); opacity: 0.55; } 50% { transform: translateY(-2px); opacity: 1; } }
    @keyframes thoughtFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
    @keyframes thoughtDot { 0%, 100% { opacity: 0.25; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.1); } }
    @keyframes gentIdleBreath { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-2.5px); } }
    @keyframes gentIdleHammer { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-2.5px) rotate(-5deg); } }
    @keyframes gentShadowIdle { 0%, 100% { transform: scaleX(1); opacity: 0.55; } 50% { transform: scaleX(0.88); opacity: 0.38; } }
    @keyframes gentSideTorsoBob { 0%, 100% { transform: translateY(0px) rotate(1.4deg); } 50% { transform: translateY(-3px) rotate(-1.0deg); } }
    @keyframes gentSideHeadDown { 0%, 100% { transform: translateY(0px) rotate(11deg); } 50% { transform: translateY(-3px) rotate(9deg); } }
    @keyframes gentSideStrideNear {
      0% { transform: rotate(-26deg) translate(1.5px, -1px); } 25% { transform: rotate(0deg) translate(0px, 0px); }
      50% { transform: rotate(24deg) translate(-1.5px, -1px); } 75% { transform: rotate(0deg) translate(1px, -3px); }
      100% { transform: rotate(-26deg) translate(1.5px, -1px); }
    }
    @keyframes gentSideStrideFar {
      0% { transform: rotate(24deg) translate(-1.5px, -1px); } 25% { transform: rotate(0deg) translate(1px, -3px); }
      50% { transform: rotate(-26deg) translate(1.5px, -1px); } 75% { transform: rotate(0deg) translate(0px, 0px); }
      100% { transform: rotate(24deg) translate(-1.5px, -1px); }
    }
    @keyframes gentStrideBounce { 0%, 100% { transform: translateY(0px) rotate(1.2deg); } 50% { transform: translateY(-3.5px) rotate(-1.2deg); } }
    @keyframes gentStrideShadow { 0%, 100% { transform: scaleX(1.14); opacity: 0.65; } 50% { transform: scaleX(0.82); opacity: 0.34; } }
    @keyframes gentForgeStrike { 0% { transform: rotate(-28deg); } 100% { transform: rotate(24deg); } }
    @keyframes gentSaluteBow { 0%, 100% { transform: translateY(0px) rotate(0deg); } 30%, 70% { transform: translateY(1.5px) rotate(3deg); } }
    @keyframes gentHatRemove {
      0%, 100% { transform: rotate(0deg) translateY(0px); }
      30%, 70% { transform: rotate(-26deg) translateY(-7px); }
    }
  </style>
</head>
<body>

  <!-- Top Interactive HUD -->
  <div class="hud-header" id="draggable-hud" title="Drag to reposition companion, hover for a hat-tip, or click to toggle his stroll">
    <div class="mascot-stride-stage" id="mascot-drag-target" onclick="toggleMascotStride()">
      <div class="mascot-facing" id="mascot-facing">
        <div id="mascot-svg-rig" class="mascot-layered-rig rig-state-walking">
          <div class="rig-ground-shadow"></div>
          <div class="stroll-thought" aria-hidden="true">
            <span class="tb tb1"></span><span class="tb tb2"></span>
            <div class="tcloud"><span></span><span></span><span></span></div>
          </div>
          <div class="pose-front">
            <img src="data:image/png;base64,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" class="rig-layer rig-layer-leg-r" alt="Right Leg">
            <img src="data:image/png;base64,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" class="rig-layer rig-layer-leg-l" alt="Left Leg">
            <img src="data:image/png;base64,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" class="rig-layer rig-layer-upper" alt="PromptSmith Gentleman">
            <img src="data:image/png;base64,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" class="rig-layer rig-layer-hat" alt="Top Hat">
            <img src="data:image/png;base64,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" class="rig-layer rig-layer-hammer" alt="Gold Hammer">
          </div>
          <div class="pose-side">
            <img src="data:image/png;base64,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" class="rig-layer rig-side-leg-far" alt="Far Stride Leg">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAObUlEQVR42u3da4xd1XUH8P9ae59zHzN35s7YnrEHg8tDGEpxwXGoikgG07ShDU0ipNsPbaOmSAVFTVv3Q5WqVB0bVRWKqyapUhraSlDafECjqA9aCiFQOy9SsJMYwwAGHMzDgJ/zuHMf5+y9Vj+cM8OgEnucVlEl1s8aaeZ45lraXrPW2Xuvsy9gjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMebHx9kQrGqM2IbB/H9AALwFpGXAHwcGoM3m2psajaGfazQGXllcXFwEIAB0RWak8mtjAfh/nu3cwMDgl7z3v03Ev9FoDF/jnB/o97ttACfLwFMANDk56Y8cOQILxnMfZPPu2U/WrFmzmSjZ7xzVnHPs2AEE5Fn2ZrfX3+fZ/9vE2vFHnjr01A+IaCnwqNVq8fT0tK4IUGMBeM6VIa4dH/9dB/8FgkR2jplY2DG8846IkOUZQojzlUrl6yNDza+ODA0/+tg3H5tZOb6Tk5Nu7969UpZuYwG46gyI8XXrHyJHP0+gyM45xw7EDCaoc04S7yEgl/X7iBJRrdTnGkON7zpH/9rrha9t3nzhs9PT09GG0wLwnMvvxJo1m6NLvk3sRh2zkiNyxAAzPDHIEZzzcOzUeycxBHS6XafKqNfqSFLXSb1/MiI+TEQP79+//8CKCYyxAPyhPIAwtn79bY74SwoEx+zZMZgcmBmOHRwz2DkU94UK7xzYec2yvqpCvXeOiUCOIaKvqsYtBw4cmLVZ87uUGvMOZcl0HyEiMDODGASGIwITg4hAxCACFAIiQFSRh0DeOfbeOSg0imQxhAjo1w8cODA7NTXFFnwWgGerCDoxMXE+qXwQAJgcO2YwM0AMMECOUHxJZQ2h8ocVosWHqpCIOCJ2MYZ/B4A9e/bYeFsAnn08guqHmd2wgqTIduUHExgODFrxhwECVN+54iKAEDsnqm8C+AYAlLNhYwF4tjRIv1gEG4QIywHIxEXmIwKYy2tF9tMVt9TldQWg/V727YMHD75Wll8LQJuEnHn2OzIxcX5VsY/JjTGTMDMXkw0GsytLb/k5MUCy/HvMTBAR5CEi7+ex389ce37xk7MLx+8rv8mWZN5lxmfe/mWkRPkDBBoDEEHkgCLLFROSYumF+O1rCoaIIs9CsTCdB4iqEtgx88mBoeFHZxeOq2U/C8CzUQCaAB8jR8pULLMwEZg8iIv7vCzLEWNEHgJiiBAVQIAQA/IQ4R2jVq1JWk2dSNz7yqsvHrWlFwvA1WQ/Wbdu0/ogYRIxkIiyqiLGCBGFaIBILDoPADjnkfgE9VoVg81BVKoVZFmOhflF9Ho9RBEkLnm4yHyTHtgbbJgtAHGGvd8QQne7io5lWS6qkUUVUAUBYEdgV+xy1GpVVCopmF2RDWMAZw7VahXVtKKdbte1F7PZbn/u0eLlbfZrAXhmAoBckt4oMScnHFWJHQhULvX5pNgFqdVqqFRS1GopBuqDqKQpQgzo9zP0+xmiRK3WBjCy9rzvPP6tR15amtzYENsyzBnL7+CGDWsAuQHMcM45x0s7HwTmYhvOOcZSVpSoUFWklRTN4WGMj63DurG1qNfr6r0jYv4XAGi1WrbSYA2pZx0DzdrtG4n4t1KfikJZQUXpLXdBiAjeeTADzrnla6RFfMUYEWNUVSIFtRfbC3907NjRkzMzM7b9Zhnw7BKuDsYgGiSCwG9vs+mKxVLSYkISpQi4ECAqEBEoFCIqIJCIfGt09CMvTU5Neiu/dg+4ujSYpiHGnEKWaZpWivxHXAQWUfGbqgxokc5EgSiKEAJi4kHEUJWiZHv6xt69uwL22rhaBlylGKMSKUKeQ8uZL1DOgMvvUS3SoYpCVSCqCDEgRoEoAGJWich7/d+78aO/ev8f7LrrAwBQbsMZC8AzlAIvgZ2DqCDEvCi9xcYvdEUZViiiSlGKRSBCiFKUYUAJxIh5WOfT9FeYeh8HgD02zhaA57IxHkNc0VxQ5kICohZXNZaNzSpQiRCJQDlpUSjAFPKsHz1xFwDGrrjCJiEWgDjTFhyY01MA4JgB0SKoqOjxA2kZb1KGWVmGRcvsp4hRypYsAhORxuhClBoAHPurZ2wpxiYhZyaiC0wO7ByBWUQUTpWVCMUDl1q0YZWzYRWFqEBFIFEgGkFCRQZUQGJARPAAMDY2YxnQAvBsI6HkKBVyTuoDQz7v9xCyHth7qAoIDNUi8ACCskIVyx3QEgVgLu4LUWTGPIhlPivBq5OkA5LWBnlkzbhfN75h//rx8QcAgqooAVCVpTu85UxYbIooJMiKElwU9RBy5L2+rQFaAJ7NFABg3boN/icuvPilSy+55Pe/8Oe3XLdx43l/mFYqiyqAEpSUoKBiiaZswZfl8iuIEsvF6SIQYx6gIgEAjh07ZpnQSvAPs0sA4OZf/tDTmzb95HWf/vRvvvnVh/4J+/bte7nV+rVDIYSriSBKSiQKcJH5QOVmHaHcDVEERIgAMQpIFSqS2fhaAK7K7t27FwAsFGPS0vdv29a5euvP/udie/HqEHMtyi9BVMuOaIAdl40KtDw7Jlp6Wk7hia0EWwk+pxUZAhBarWJtptkc/iYxQVRpeT1wqfQqwERwTHCueFhp6bQ2KmbVIFq6KbzehtYCcDWKBZfyZCtcdNHG76dpOgdVLhYEFYq3mw9AALODTzzSJEUlTZEmDj5xcEWKrBSvu8eG1gIQ59qgih07drxeqVWfKh6FgxSzYoCUy4FTOO/gXYJKtYLBRh1DQw00GoMgBvq97iAAjI2N2TqgBeA5c1u2bMnq9cEZ5xy0WIEBQaFUFOty/xfOMRLvUK/V0BxuwicJOp0O5ufnRxzzckY1FoCrNjk5SSKCWq36X4nzgBadp6pUdkSXSzBSnIgQo8AnCeYXFvDiC4dpbnYBnV43peLm0ALQAvDcLJXN0bVrDvkk7RHRcvd4sRtSZMAQBN1eBgVw4sRJPD3zPJgZzZEh1GrVgWIB21gAnqPp6WkBgCs2X/SSdzxLtHQfWJZeIUgk9Pt99Hp9zM3P4623jmHjeRswsXHCxawjs6dOXP8nn/3r7QC01WrZ4w8WgOfeJbN79+63vE+OENHyQVhKxV9GiciyHICg0RjE5ZdtxsTEOCY2jGN0dERjv1OZO3Xyd6bUGlItAH/E8SEirdcGXuDigHKl5e6ZYstNl/aEI9DpdEFg1Ot1jI6Ocr+ziMPPP3ftp9o7101PT8f3ve/WxIYUthOCc+xRHRwYfNn7BEHy4oKW/YCkYAX6vT5Oz84CTKhWq5g9PY8TJ47T4cOHtfba66O3/XrrM/v27fvMtm3b8qmpqeUHlXbu3Kk7d+6kpc9XnLRvp2MZAGg5YDp++Jc+9slnn3n2nnZ7LhCxB7Q8qo2ReI9KpYparQLm4uT8SiVFr9PBQruNSnUAxA4/deWWR2qV5M/uv//Le870/zE1NUW7du0SC0ADlG/XcOONN1339DPP7+11F6k4MpDK54LLY3pF0M+6CFkX1WoNExMbwExY7PYhqqhUB8LAwJC/+NLL5q+/YfsXq2n1P84b3/DC5ddcEA8fOl3vdTs+Fe5uv+Fn3pAY8V46zMgCcBUZ8Bduuvmyl188/N3Z0ydqMeSqUUhUESWHxIgYAxKnSJOkODPVeww1hgAiBBGwS9DrZZKkdb5q6zYMDTcxMrLmjSzrh/m5+cG5hVM+AdobNp73BHl/+12f/+wzU1NT/F7IhBaAqxijW+++2x/55wduff65Q38pUXhhfh79rLvcFSMSy0OMCM4TUp/AewfnKxAVDAwO4fTp0+h2FjWt1CUPOXvvCSKIeR+QiLHxcYxNXIibP3HLwVs/9YntQ8Cp8rRVtVnwe9jU1BT9zW235fVq/fE0rcO7BI3GEEaGRtAYGEK93kC1Wgf7BEVLjEOMOfIsQwx9OAgW5k5BQx+jzSYxRZcgUpVVm4MVvX77B/Xef7xP7/2H+/TU6ePZiVOnrnz1lVcuJyKdnp5mmwUbAMAFF1zaff7Q4W7eXxxwCavjlN7eY6sWD6hLRN7vo99vQ2KGPM8xUKvBewc4QqNRg2NFnjmogoZHx3HV1vfj9aNv4N577tOjrx3Rr/z938JJ/AtVvYGIFq0EG5R9gJWt2679zltvHr2KCaJQJvA7DjB33ikpI8ZAnV4bvd4iJA9gIqgKBhoN5L0emB2SShVgJ53uooYsowsvOJ+Hm8OYne/IdR/66Ffu+vyf3kJEbQtAQwD0c5+7p/l399z9vRNvvXZBnvcBUlIpnhkmBUKMAsAlSaqVSi2mSUpETCJCxfuHCKJEdUyqgEoUDjHn5vAgLr3kYmxYv+HEiZOnH+rl+ZcffPDBh1b+21aCDUI4kXcW5irMzPXaANgVT8fFGJBW6xhoDLvO/Fy2MD/r+/2O7/XaUAGIXdkx7aAilENRqVQw3BxEvV7/Qa1a+x7gHnj86ZmvHXziidfKG0/Grl3vibd6tQBc3Z4wtdvt7sTE2F3Hjx3/eB6yMWZqOO99CEGHm2u6P33NtY9VOHzx0IEDFXh/Q7s9d2Wv172o08magKaJ91m1WjvFTp8dGmoebDSG92/duuX7d9xxx5tLj3NOTU3xzMwMTe/aFW0h2vzPwSKCiPg777yzcfz48cE8z9N+v49NmzbN//Httx9fma6YGc8991zlyUNP1g89eTRpNn22Y8eORWbOl58fLrhWq7XUtGq9W+ZHXraiVqvlWmi5cgeFzvAavtVqOVUlu8E2/4tx05VDqKscX+uONsYYA+C/ATt6q3wQRN4aAAAAAElFTkSuQmCC" class="rig-layer rig-side-leg-near" alt="Near Stride Leg">
            <img src="data:image/png;base64,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" class="rig-layer rig-side-upper" alt="Side-Profile Torso">
            <img src="data:image/png;base64,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D2x96kt/dMNtu95673Nf+fKDh//j7O3lxVaYri+H8uYbn1p/39v+1pf+02cm/cXlD9zz5rf8+isfm3lh4rHH1Ac/8YmY/LbMnP8Ods0KDvZRC2utmJ2dFfV6XQghusCL2etDf4xSHNj1dzcsLn176wE3uf+Gt22rvPLSkRvah4588V45EdaawbaHrX3z/r1707U7cPJHnPP/Z2mmsNbKffv2qX379qjXNnkIBI/tevu6PRRu+4P173nfn/3or37sj3/pU1suLSPKyfmfYDKFZVo++dBDevp7dB3Z3P3J+V/tR06D3McetW/PHpU/jpycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJz/ofy/x6IfrV0q7B4AAAAASUVORK5CYII=" class="rig-layer rig-side-head" alt="Side-Profile Head">
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
        <span class="license-badge ${a?"":"trial"}">
          ${a?"PRO UNLOCKED":r+" TRIES LEFT"}
        </span>
      </div>
      <div class="hud-sub">${z}</div>
    </div>
  </div>

  <!-- Zero-Clutter Model Auto-Hook & Voice-to-Spec Dictation Bridge -->
  <div class="panel-box" style="border-color: rgba(56, 189, 248, 0.35); background: rgba(56, 189, 248, 0.06);">
    <div class="panel-header">
      <span class="panel-label" style="color: #38bdf8;">
        Auto-Hook Model Bridge &amp; Voice-to-Spec
      </span>
      <span class="badge-pill pill-cyan">${y}</span>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-top:4px;">
      <label style="display:inline-flex; align-items:center; gap:5px; font-size:9.5px; color:#e2e8f0; cursor:pointer;" title="Works alongside your active IDE model automatically without cluttering your screen">
        <input type="checkbox" id="chk-auto-hook" ${p?"checked":""} onchange="toggleAutoHook(this.checked)" style="accent-color:#38bdf8; cursor:pointer;">
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
      <span class="badge-pill pill-cyan">${E.audienceLabel} &bull; ${e.detectedDomain}</span>
    </div>
    <div style="font-size: 9.5px; color: #94a3b8; margin-bottom: 4px;">
      Readability: <b>Grade ${E.fleschKincaidGrade}</b> &bull; Bloom's Taxonomy: <b>${E.bloomsLevel}</b>
    </div>
    <div class="button-group">
      <button class="pill-btn ${n?"":"active"}" onclick="setAudience('auto')">Auto-Detect</button>
      <button class="pill-btn ${n==="explorer"?"active":""}" onclick="setAudience('explorer')">Explorer (All Ages)</button>
      <button class="pill-btn ${n==="practitioner"?"active":""}" onclick="setAudience('practitioner')">Practitioner</button>
      <button class="pill-btn ${n==="architect"?"active":""}" onclick="setAudience('architect')">Staff Architect</button>
      <button class="pill-btn ${n==="executive"?"active":""}" onclick="setAudience('executive')">Executive ROI</button>
    </div>
  </div>

  <!-- Omni-Disciplinary Equalizer (Level the Playing Field) -->
  <div class="panel-box">
    <div class="panel-header">
      <span class="panel-label">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
        Omni-Disciplinary Equalizer
      </span>
      <span class="badge-pill pill-emerald">${k.title}</span>
    </div>
    <div class="button-group">
      <button class="pill-btn ${c?"":"active"}" onclick="setDiscipline('auto')">Auto</button>
      <button class="pill-btn ${c==="architect"?"active":""}" onclick="setDiscipline('architect')">Systems Architect</button>
      <button class="pill-btn ${c==="designer"?"active":""}" onclick="setDiscipline('designer')">UI/UX Designer</button>
      <button class="pill-btn ${c==="analyst"?"active":""}" onclick="setDiscipline('analyst')">Data Analyst</button>
      <button class="pill-btn ${c==="creator"?"active":""}" onclick="setDiscipline('creator')">Everyday Creator</button>
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
      ${l.map(m=>{let S=m.compatibilityScore>=85?"score-green":m.compatibilityScore>=70?"score-yellow":"";return`
        <div class="target-card ${o===m.profileKey?"active":""}" onclick="selectTarget('${m.profileKey}')">
          <div class="t-top">
            <span>${m.name}</span>
            <span class="t-score ${S}">${m.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${m.provider}</span>
            <span>${m.latencyRating}</span>
          </div>
        </div>`}).join("")}
    </div>

    <!-- Bots Grid -->
    <div class="targets-scroll-grid" id="grid-bots" style="display:none;">
      ${v.map(m=>{let S=m.compatibilityScore>=85?"score-green":m.compatibilityScore>=70?"score-yellow":"";return`
        <div class="target-card ${o===m.profileKey?"active":""}" onclick="selectTarget('${m.profileKey}')">
          <div class="t-top">
            <span>${m.name}</span>
            <span class="t-score ${S}">${m.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${m.provider}</span>
            <span>${m.latencyRating}</span>
          </div>
        </div>`}).join("")}
    </div>

    <!-- Future AI Grid -->
    <div class="targets-scroll-grid" id="grid-future" style="display:none;">
      ${w.map(m=>{let S=m.compatibilityScore>=85?"score-green":m.compatibilityScore>=70?"score-yellow":"";return`
        <div class="target-card ${o===m.profileKey?"active":""}" onclick="selectTarget('${m.profileKey}')">
          <div class="t-top">
            <span>${m.name}</span>
            <span class="t-score ${S}">${m.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${m.provider}</span>
            <span>${m.latencyRating}</span>
          </div>
        </div>`}).join("")}
    </div>
  </div>

  <!-- Curated Workspace Grounder & Rules Scrubber -->
  <div class="panel-box" style="border-color: rgba(16, 185, 129, 0.3);">
    <div class="panel-header">
      <span class="panel-label" style="color: var(--emerald);">
        Workspace Context Grounder &amp; Rules Exporter
      </span>
      <span class="badge-pill pill-emerald">${M.workspaceName}</span>
    </div>
    <div style="font-size: 9.5px; color: #94a3b8; margin-bottom: 6px;">
      Active: <b>${M.activeFileRelative}</b> (${M.languageId}) &bull; Stack: <b>${M.detectedStack.slice(0,4).join(", ")||"Auto"}</b>
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

  ${I.length>0?`
  <!-- Pre-Flight Secret & Credential Leak Guard -->
  <div class="panel-box" style="border-color: rgba(244, 63, 94, 0.55); background: rgba(244, 63, 94, 0.08);">
    <div class="panel-header">
      <span class="panel-label" style="color: #fda4af;">
        Pre-Flight Secret Guard (${I.reduce((m,S)=>m+S.count,0)} Credential Leak Risk)
      </span>
      <button class="mode-btn active" onclick="scrubSecretsNow()" style="background:#e11d48; border-color:#fb7185; font-weight:700;">Scrub Secrets</button>
    </div>
    <div style="font-size:9.5px; color:#fecdd3;">
      Detected: ${I.map(m=>`<b>${m.count}x ${m.label}</b>`).join(", ")}
    </div>
  </div>
  `:""}

  ${I.length>0?`
  <!-- Pre-Flight Secret & Credential Leak Guard -->
  <div class="panel-box" style="border-color: rgba(244, 63, 94, 0.55); background: rgba(244, 63, 94, 0.08);">
    <div class="panel-header">
      <span class="panel-label" style="color: #fda4af;">
        Pre-Flight Secret Guard (${I.reduce((m,S)=>m+S.count,0)} Credential Risk)
      </span>
      <button class="mode-btn active" onclick="scrubSecretsNow()" style="background:#e11d48; border-color:#fb7185; font-weight:700;">Scrub Secrets</button>
    </div>
    <div style="font-size:9.5px; color:#fecdd3;">
      Detected: ${I.map(m=>`<b>${m.count}x ${m.label}</b>`).join(", ")}
    </div>
  </div>
  `:""}

  ${F.length>0?`
  <!-- Pre-Flight Ambiguity & Missing Constraint Linter -->
  <div class="panel-box" style="border-color: rgba(245, 158, 11, 0.35);">
    <div class="panel-header">
      <span class="panel-label" style="color: var(--amber);">
        Pre-Flight Ambiguity Linter (${F.length} Detected)
      </span>
      <span class="badge-pill" style="background:rgba(245,158,11,0.15); color:var(--amber); border:1px solid rgba(245,158,11,0.3);">1-Click Fix</span>
    </div>
    <div style="display:flex; flex-direction:column; gap:4px;">
      ${F.map(m=>`
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; background:rgba(255,255,255,0.02); padding:4px 6px; border-radius:4px; border:1px solid rgba(255,255,255,0.06);">
          <span style="font-size:9.5px; color:#e2e8f0;"><b style="color:var(--amber);">[${m.severity}]</b> ${m.label}</span>
          <button class="mode-btn active" onclick='applyFix(${JSON.stringify(m.fixSnippet)})' style="white-space:nowrap;">+ Inject Guard</button>
        </div>
      `).join("")}
    </div>
  </div>
  `:""}

  <!-- Real-Time Token & 20-Turn Cost Telemetry Strip -->
  <div class="telemetry-strip" style="flex-wrap:wrap; gap:6px;">
    <span>Compression: <span class="telemetry-val" style="color:var(--emerald); font-weight:800;">-${e.tokenSavingsPercent}%</span></span>
    <span>Signal: <span class="telemetry-val" style="color:#38bdf8; font-weight:800;">${e.iqScore}/100</span></span>
    <span>20-Turn Saved: <span class="telemetry-val" style="color:var(--emerald); font-weight:800;">${H.cumulativeTokensSaved.toLocaleString()} tok (~$${H.openaiO3SavedUsd})</span></span>
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
    <textarea id="input-box" class="prompt-editor" style="min-height: 68px; max-height: 150px;" placeholder="Type or paste your raw prompt here, or highlight text in any code file and press Alt+P...">${(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</textarea>
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
    <textarea id="output-box" class="prompt-editor" oninput="updateLiveCounters()" placeholder="Your structured, high-density prompt blueprint will appear here...">${(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</textarea>
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

  ${A.length>0?`
  <!-- Local Recent Prompts Vault -->
  <div class="panel-box" style="border-color: rgba(56, 189, 248, 0.22);">
    <div class="panel-header">
      <span class="panel-label" style="color: #94a3b8;">
        Recent Prompts Vault (${A.length})
      </span>
      <button class="pill-btn" onclick="clearHistoryVault()" style="font-size:8.5px; padding:1px 6px;">Clear</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:4px; max-height:95px; overflow-y:auto;">
      ${A.map((m,S)=>`
        <div onclick="loadHistoryItem(${S})" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:6px; padding:4px 6px; border-radius:4px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05);">
          <span style="font-size:9.5px; color:#cbd5e1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:190px;">${m.raw.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</span>
          <span style="font-size:8.5px; color:#38bdf8; font-family:var(--font-mono); text-transform:uppercase;">${m.target}</span>
        </div>
      `).join("")}
    </div>
  </div>
  `:""}

  <!-- Pro Passkey ($9/mo or $10 Passkey) -->
  <div class="pro-box">
    <div>
      <div class="pro-title">PromptSmith Pro ($9/mo or $10 Passkey)</div>
      <div class="pro-meta">Unlimited offline optimizations &amp; 19-target benchmarks.</div>
    </div>
    ${a?'<span style="color:var(--emerald); font-weight:800; font-family:var(--font-mono); font-size:10px;">ACTIVE PRO PASSKEY</span>':'<div style="display:flex; gap:5px;"><button class="btn-sub" onclick="openCheckout()">Get Passkey</button><button class="btn-secondary" style="padding:4px 8px; font-size:9.5px;" onclick="enterPasskey()">Enter Key</button></div>'}
  </div>

  <script>
    const vscode = acquireVsCodeApi();
    const originalText = ${JSON.stringify(i)};

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
          }, 1300);
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
      }, 1350);
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
      const words = text.trim() ? text.trim().split(/s+/).length : 0;
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
</html>`}};var O=$(require("vscode"));var oe=class u{static currentPanel;_panel;_extensionUri;_disposables=[];_rawPrompt="Write a fast python function to parse a large jsonl file and calculate user spend totals. Make sure it doesn't run out of memory.";_optimizedPrompt="";_activeProfile="reasoning";constructor(i,t){this._panel=i,this._extensionUri=t;let e=O.window.activeTextEditor;e&&!e.selection.isEmpty&&(this._rawPrompt=e.document.getText(e.selection)),this._computeOptimization(),this._panel.webview.html=this._getHtmlForWebview(this._panel.webview),this._panel.onDidDispose(()=>this.dispose(),null,this._disposables),this._panel.webview.onDidReceiveMessage(async o=>{switch(o.command){case"dashboardReady":this._sendSync();return;case"optimizePrompt":{if(this._rawPrompt=o.prompt||"",o.profile){let a=o.profile.toLowerCase();a.includes("cost")||a.includes("squeeze")?this._activeProfile="budget":a.includes("hoare")||a.includes("invariant")?this._activeProfile="invariants":a.includes("brief")||a.includes("executive")?this._activeProfile="executive":this._activeProfile="reasoning"}this._computeOptimization(),this._sendSync();return}case"injectOptimizedPrompt":{let a=O.window.activeTextEditor;if(a){let r=a.selection.isEmpty?new O.Range(a.selection.active,a.selection.active):a.selection,n=new O.WorkspaceEdit;n.replace(a.document.uri,r,o.text),await O.workspace.applyEdit(n),O.window.showInformationMessage("[PromptSmith] Injected compiled prompt into active buffer.")}else await O.env.clipboard.writeText(o.text),O.window.showInformationMessage("[PromptSmith] No active editor found. Copied compiled prompt to clipboard.");return}case"copyToClipboard":{await O.env.clipboard.writeText(o.text),O.window.showInformationMessage("[PromptSmith] Copied compiled prompt to clipboard.");return}}},null,this._disposables)}static createOrShow(i){let t=O.window.activeTextEditor?O.window.activeTextEditor.viewColumn:void 0;if(u.currentPanel){u.currentPanel._panel.reveal(t||O.ViewColumn.One);return}let e=O.window.createWebviewPanel("promptsmithPlayground","PromptSmith // Prompt Engineering Playground",t||O.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[i]});u.currentPanel=new u(e,i)}_computeOptimization(){try{this._optimizedPrompt=j.enhance(this._rawPrompt,this._activeProfile)}catch{this._optimizedPrompt=this._rawPrompt}}_sendSync(){let i=this._rawPrompt.trim().split(/\s+/).filter(Boolean).length,t=this._optimizedPrompt.trim().split(/\s+/).filter(Boolean).length,e=Math.max(1,Math.round(i*1.33)),o=Math.max(1,Math.round(t*1.33));this._panel.webview.postMessage({type:"SYNC_PROMPT_STATE",rawPrompt:this._rawPrompt,optimizedPrompt:this._optimizedPrompt,originalTokens:e,optimizedTokens:o,reasoningScore:95.8,activeProfile:this._activeProfile==="reasoning"?"Reasoning Density":this._activeProfile==="budget"?"Cost & Token Squeeze":this._activeProfile==="invariants"?"Hoare Invariant Formalist":"Executive Brief"})}dispose(){for(u.currentPanel=void 0,this._panel.dispose();this._disposables.length;){let i=this._disposables.pop();i&&i.dispose()}}_getHtmlForWebview(i){return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PromptSmith // Optimization Matrix</title>
  <style>
    :root {
      --bg: #0b0f17;
      --card-bg: #131a26;
      --fg: #f1f5f9;
      --border: rgba(148, 163, 184, 0.16);
      --cyan: #38bdf8;
      --emerald: #34d399;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--fg);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    header {
      padding: 16px 24px;
      border-bottom: 1px solid var(--border);
      background: var(--card-bg);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .hud-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .pulse-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--cyan);
      box-shadow: 0 0 12px var(--cyan);
      animation: pulse 2s infinite ease-in-out;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.4); opacity: 0.6; }
    }
    .title-text {
      font-family: monospace;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--cyan);
    }
    .subtitle-text {
      font-family: monospace;
      font-size: 11px;
      color: #94a3b8;
    }
    .profile-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: monospace;
      font-size: 11px;
    }
    .prof-btn {
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid var(--border);
      background: rgba(255, 255, 255, 0.03);
      color: #94a3b8;
      cursor: pointer;
      transition: all 0.2s;
    }
    .prof-btn:hover { border-color: #64748b; color: #cbd5e1; }
    .prof-btn.active {
      background: rgba(6, 182, 212, 0.15);
      border-color: rgba(6, 182, 212, 0.5);
      color: #67e8f9;
      font-weight: 700;
    }
    .workspace-grid {
      flex: 1;
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: 24px;
      padding: 24px;
      overflow: hidden;
    }
    .col-left {
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow: hidden;
    }
    .col-right {
      display: flex;
      flex-direction: column;
      gap: 16px;
      overflow: hidden;
    }
    .pane-head {
      display: flex;
      justify-content: space-between;
      font-family: monospace;
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    textarea.prompt-input {
      flex: 1;
      width: 100%;
      padding: 16px;
      background: #020617;
      border: 1px solid var(--border);
      border-radius: 12px;
      color: #f1f5f9;
      font-family: monospace;
      font-size: 12px;
      line-height: 1.6;
      resize: none;
      outline: none;
      transition: border-color 0.2s;
    }
    textarea.prompt-input:focus { border-color: rgba(6, 182, 212, 0.6); }

    .chip-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-family: monospace;
      font-size: 11px;
    }
    .chip-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .var-chip {
      padding: 4px 10px;
      background: #020617;
      border: 1px solid var(--border);
      color: #cbd5e1;
      border-radius: 6px;
      font-size: 11px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      transition: all 0.2s;
    }
    .var-chip:hover {
      border-color: rgba(6, 182, 212, 0.5);
      background: rgba(6, 182, 212, 0.1);
      color: #67e8f9;
    }
    .bracket { color: var(--cyan); font-weight: 700; }

    /* TokenDiff Metric Card */
    .diff-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
    }
    .diff-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .diff-title {
      font-family: monospace;
      font-size: 13px;
      font-weight: 700;
      color: #f1f5f9;
    }
    .diff-score {
      font-family: monospace;
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 4px;
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.4);
      color: #67e8f9;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      font-family: monospace;
    }
    .metric-box {
      background: #020617;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 10px 12px;
    }
    .metric-box.gain {
      background: rgba(16, 185, 129, 0.08);
      border-color: rgba(16, 185, 129, 0.35);
    }
    .m-label { font-size: 10px; text-transform: uppercase; color: #64748b; }
    .m-val { font-size: 18px; font-weight: 800; color: #cbd5e1; margin-top: 4px; }
    .m-val.cyan { color: var(--cyan); }
    .m-val.emerald { color: #34d399; }

    .diff-foot {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 8px;
      border-top: 1px solid var(--border);
    }
    .btn-copy {
      padding: 6px 14px;
      background: #020617;
      border: 1px solid var(--border);
      color: #cbd5e1;
      border-radius: 6px;
      font-family: monospace;
      font-size: 11px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-copy:hover { border-color: #64748b; color: white; }
    .btn-inject {
      padding: 6px 16px;
      background: #0891b2;
      border: none;
      color: white;
      border-radius: 6px;
      font-family: monospace;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(8, 145, 178, 0.3);
    }
    .btn-inject:hover { background: #06b6d4; }

    .compiled-box {
      flex: 1;
      padding: 16px;
      background: #020617;
      border: 1px solid var(--border);
      border-radius: 12px;
      font-family: monospace;
      font-size: 12px;
      line-height: 1.6;
      color: #e2e8f0;
      overflow-y: auto;
      white-space: pre-wrap;
      user-select: text;
    }
  </style>
</head>
<body>
  <header>
    <div class="hud-title">
      <div class="pulse-dot"></div>
      <div>
        <div class="title-text">PromptSmith // Prompt Engineering Playground</div>
        <div class="subtitle-text">Autonomous RLHF Token Equalizer &bull; Sub-Token Precision &bull; Frontier Alignment</div>
      </div>
    </div>
    <div class="profile-bar">
      <span style="color:#64748b; font-size:10px; text-transform:uppercase;">Profile:</span>
      <button class="prof-btn active" id="prof-0" onclick="setProfile('Reasoning Density', 0)">Reasoning</button>
      <button class="prof-btn" id="prof-1" onclick="setProfile('Cost & Token Squeeze', 1)">Token Squeeze</button>
      <button class="prof-btn" id="prof-2" onclick="setProfile('Hoare Invariant Formalist', 2)">Hoare Formal</button>
      <button class="prof-btn" id="prof-3" onclick="setProfile('Executive Brief', 3)">Executive</button>
    </div>
  </header>

  <div class="workspace-grid">
    <!-- Left Column: Input Prompt & Variables -->
    <div class="col-left">
      <div class="pane-head">
        <span>Input Prompt / Scratchpad</span>
        <span id="txt-char-count">120 chars</span>
      </div>
      <textarea 
        class="prompt-input" 
        id="inp-prompt" 
        oninput="onInputChanged()"
        placeholder="Type or paste prompt to analyze and squeeze..."
      >Write a fast python function to parse a large jsonl file and calculate user spend totals. Make sure it doesn't run out of memory.</textarea>

      <!-- Variable Injector Chips -->
      <div class="chip-section">
        <div class="pane-head">
          <span>Dynamic Template Variables</span>
          <span>Click to Inject</span>
        </div>
        <div class="chip-container">
          <div class="var-chip" onclick="injectVar('code_context')"><span class="bracket">&#123;&#123;</span>code_context<span class="bracket">&#125;&#125;</span></div>
          <div class="var-chip" onclick="injectVar('error_trace')"><span class="bracket">&#123;&#123;</span>error_trace<span class="bracket">&#125;&#125;</span></div>
          <div class="var-chip" onclick="injectVar('expected_schema')"><span class="bracket">&#123;&#123;</span>expected_schema<span class="bracket">&#125;&#125;</span></div>
          <div class="var-chip" onclick="injectVar('rag_chunks')"><span class="bracket">&#123;&#123;</span>rag_chunks<span class="bracket">&#125;&#125;</span></div>
          <div class="var-chip" onclick="injectVar('model_persona')"><span class="bracket">&#123;&#123;</span>model_persona<span class="bracket">&#125;&#125;</span></div>
          <div class="var-chip" onclick="injectVar('hoare_invariants')"><span class="bracket">&#123;&#123;</span>hoare_invariants<span class="bracket">&#125;&#125;</span></div>
        </div>
      </div>
    </div>

    <!-- Right Column: Optimization Matrix & Compiled Output -->
    <div class="col-right">
      <div class="diff-card">
        <div class="diff-top">
          <div>
            <div class="diff-title">PromptSmith // Optimization Matrix</div>
            <div style="font-family:monospace; font-size:11px; color:#64748b; margin-top:2px;">Frontier Model Token &amp; Reasoning Analyzer</div>
          </div>
          <div class="diff-score">Reasoning: <span id="txt-score">96.2%</span></div>
        </div>

        <div class="metrics-grid">
          <div class="metric-box">
            <div class="m-label">Original Tokens</div>
            <div class="m-val" id="txt-orig-tokens">28</div>
          </div>
          <div class="metric-box">
            <div class="m-label">Optimized</div>
            <div class="m-val cyan" id="txt-opt-tokens">64</div>
          </div>
          <div class="metric-box gain">
            <div class="m-label" style="color:#34d399;">Efficiency Gain</div>
            <div class="m-val emerald" id="txt-gain">+42.0%</div>
          </div>
        </div>

        <div class="diff-foot">
          <div style="font-family:monospace; font-size:10px; color:#64748b;">Claude 3.7 &bull; GPT-4o &bull; DeepSeek V3</div>
          <div style="display:flex; gap:8px;">
            <button class="btn-copy" onclick="copyPrompt()">Copy Buffer</button>
            <button class="btn-inject" onclick="injectPrompt()">&check; Inject Optimized Prompt</button>
          </div>
        </div>
      </div>

      <div class="pane-head" style="margin-top:2px;">
        <span style="color:var(--cyan); font-weight:bold;">Compiled Cognitive Prompt</span>
        <span>Ready for Execution</span>
      </div>
      <div class="compiled-box" id="compiled-output">
Role: Senior Distributed Systems Architect
Task: Author streaming chunk-based JSONL parser in Python.
Constraints:
- Generator-based streaming with ijson / orjson
- Memory footprint bounded to O(1) buffer space
- Hoare Invariant: Assert each record matches { user_id: str, amount_usd: float }
- Return generator yielding (user_id, total_spend) sorted in descending order
      </div>
    </div>
  </div>

  <script>
    const vscode = acquireVsCodeApi();
    let currentProfile = 'Reasoning Density';

    window.addEventListener('message', event => {
      const msg = event.data;
      if (msg.type === 'SYNC_PROMPT_STATE') {
        if (msg.rawPrompt !== undefined) {
          document.getElementById('inp-prompt').value = msg.rawPrompt;
          document.getElementById('txt-char-count').innerText = msg.rawPrompt.length + ' chars';
        }
        if (msg.optimizedPrompt !== undefined) {
          document.getElementById('compiled-output').innerText = msg.optimizedPrompt;
        }
        document.getElementById('txt-orig-tokens').innerText = msg.originalTokens || 28;
        document.getElementById('txt-opt-tokens').innerText = msg.optimizedTokens || 64;
        document.getElementById('txt-score').innerText = (msg.reasoningScore || 95.8) + '%';
        const gain = Math.abs(msg.originalTokens - msg.optimizedTokens);
        document.getElementById('txt-gain').innerText = (msg.originalTokens > msg.optimizedTokens ? '-' : '+') + Math.round((gain / (msg.originalTokens || 1)) * 100) + '%';
      }
    });

    function onInputChanged() {
      const val = document.getElementById('inp-prompt').value;
      document.getElementById('txt-char-count').innerText = val.length + ' chars';
      vscode.postMessage({
        command: 'optimizePrompt',
        prompt: val,
        profile: currentProfile
      });
    }

    function setProfile(name, idx) {
      currentProfile = name;
      for (let i = 0; i < 4; i++) {
        document.getElementById('prof-' + i).classList.toggle('active', i === idx);
      }
      onInputChanged();
    }

    function injectVar(token) {
      const inp = document.getElementById('inp-prompt');
      inp.value += ' {{' + token + '}}';
      onInputChanged();
    }

    function injectPrompt() {
      const txt = document.getElementById('compiled-output').innerText;
      vscode.postMessage({
        command: 'injectOptimizedPrompt',
        text: txt
      });
    }

    function copyPrompt() {
      const txt = document.getElementById('compiled-output').innerText;
      vscode.postMessage({
        command: 'copyToClipboard',
        text: txt
      });
    }

    vscode.postMessage({ command: 'dashboardReady' });
  </script>
</body>
</html>`}};var Z=class{static installationIdKey="promptsmith_install_id";static statsKey="promptsmith_local_stats";static getOrCreateInstallId(i){let t=i.globalState.get(this.installationIdKey);return t||(t="inst_"+Math.random().toString(36).substring(2,12)+"_"+Date.now().toString(36),i.globalState.update(this.installationIdKey,t)),t}static trackEvent(i,t){this.getOrCreateInstallId(i);let e=(i.globalState.get(this.statsKey)||0)+1;i.globalState.update(this.statsKey,e)}};var ve=$(require("https"));function je(u){let i="sess_"+Math.random().toString(36).substring(2,10),t=D.detectActiveModelHook(),e=t.recommendedProfile||"claude_xml",o=u.globalState.get("promptsmith_auto_hook",!0),a,r,n="",c="",p=T.analyze(""),y="promptsmith_pro_license",A="promptsmith_trial_count",x=u.globalState.get(y,!1),g=u.globalState.get(A,10),l=s.window.createStatusBarItem(s.StatusBarAlignment.Right,100);l.command="promptsmith.openDashboard",l.text=o?"$(sparkle) Auto-Hook":"$(sparkle)",l.tooltip=`PromptSmith Auto-Hook: ${t.detectedModelLabel} (${t.hostIde}) | Alt+P to polish`,l.show(),u.subscriptions.push(l);let v=He(),w;function E(){return u.globalState.get("promptsmith_history_vault",[])}async function C(h,d,b){let f=(h||"").trim();if(!f||f.startsWith("Select text in your editor"))return;let P=E().filter(U=>U.raw!==f),Q=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});P.unshift({ts:Q,raw:f.slice(0,1200),compiled:(d||"").slice(0,4e3),profile:b}),P.length>8&&(P=P.slice(0,8)),await u.globalState.update("promptsmith_history_vault",P)}function Y(){return ge.getHtml(n,c,p,e,x,g,a,r,o,t.detectedModelLabel,E())}function k(){S.updateView(),w&&(w.webview.html=Y())}function M(h){let d=p.estimatedTokens||Math.round(n.length/4)||60,b=p.optimizedTokens||Math.round((c||"").length/4)||40,f=Math.max(15,d-b),P=Math.max(10,p.tokenSavingsPercent||Math.round(f/Math.max(1,d)*100)),Q=(f/1e3*.015).toFixed(4);x?s.window.showInformationMessage(`PromptSmith: ${h}. Trimmed ${f} tokens (-${P}%).`):s.window.showInformationMessage(`PromptSmith: ${h}. Trimmed ${f} tokens (-${P}%). Saved ~$${Q}.`,"Unlock Developer Pro ($9/mo or $10)","Enter Passkey").then(U=>{U==="Unlock Developer Pro ($9/mo or $10)"?s.env.openExternal(s.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=editor_toast")):U==="Enter Passkey"&&s.commands.executeCommand("promptsmith.unlockLicense")})}async function F(){if(x)return!0;if(g<=0){let h=await s.window.showInformationMessage("PromptSmith: Free trial completed (10/10 improvements used). Unlock Developer Pro ($9/mo or $10 Passkey) or enter passkey.","Get Passkey ($9/mo or $10)","Enter Passkey");return h==="Get Passkey ($9/mo or $10)"?s.env.openExternal(s.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=vscode")):h==="Enter Passkey"&&s.commands.executeCommand("promptsmith.unlockLicense"),!1}return g--,await u.globalState.update(A,g),!0}function I(h){if(h&&h.trim())return n=h.trim(),p=T.analyze(n,v),n;if(!n.trim()){let d=s.window.activeTextEditor;if(d){let b=d.selection,f=b.isEmpty?d.document.getText():d.document.getText(b);f.trim()&&(n=f.trim(),p=T.analyze(n,v))}}return n}function H(h){h.onDidReceiveMessage(async d=>{switch(d.command){case"optimizeInput":{let b=(d.text||"").trim();if(!b){s.window.showWarningMessage("Type or paste a prompt in the Input Draft box first, or select text in your editor.");return}if(!await F())return;d.profile&&(e=d.profile);let f=D.compileVoiceTranscript(b);n=f.corrections>0?f.cleaned:b,f.detectedCommand&&f.detectedCommand!=="scrub_secrets"&&f.detectedCommand!=="ground_workspace"&&(e=f.detectedCommand),p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),await C(n,c,e),o&&await s.env.clipboard.writeText(c),l.tooltip=`PromptSmith Auto-Hook (${t.detectedModelLabel}) | Score: ${p.iqScore}/100 (-${p.tokenSavingsPercent}% words)`,k(),Z.trackEvent(u,{sessionId:i,runtime:v,action:"improve",profile:e,audience:a,discipline:r,inputPrompt:n,enhancedPrompt:c,originalWords:n.split(/\s+/).filter(Boolean).length,enhancedWords:c.split(/\s+/).filter(Boolean).length,tokenReductionPct:p.tokenSavingsPercent,isLicensed:x,trialCountRemaining:g})}break;case"groundWorkspace":{I(d.text);let b=D.inspectWorkspace();n=n?`${n}

${b.contextSummaryBlock}`:b.contextSummaryBlock,p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),k(),s.window.showInformationMessage(`PromptSmith: Injected workspace stack & symbols from ${b.workspaceName}.`)}break;case"groundDiagnostics":{I(d.text);let b=D.inspectDiagnosticsAndDiff();n=n?`${n}

${b.block}`:b.block,p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),o&&c&&await s.env.clipboard.writeText(c),k(),s.window.showInformationMessage(`PromptSmith Error-to-Spec: Grounded ${b.count} active IDE diagnostic(s) into blueprint.`)}break;case"exportRulesFile":{I(d.text);let b=d.targetFile||".cursorrules",f=(d.compiled||c||n||"").trim(),P=await D.exportWorkspaceRulesFile(b,f);P.ok?s.window.showInformationMessage(`PromptSmith: ${P.message}`):s.window.showWarningMessage(`PromptSmith: ${P.message}`)}break;case"scrubSecrets":{let b=I(d.text),{scrubbed:f,redactedCount:P}=D.scrubSecrets(b);n=f,p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),k(),s.window.showInformationMessage(`PromptSmith Secret Guard: Redacted ${P} exposed credential(s).`)}break;case"cleanVoiceStream":{let b=I(d.text),f=D.compileVoiceTranscript(b);n=f.cleaned||b,f.detectedCommand&&f.detectedCommand!=="scrub_secrets"&&f.detectedCommand!=="ground_workspace"&&(e=f.detectedCommand),p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),await C(n,c,e),o&&c&&await s.env.clipboard.writeText(c),k(),s.window.showInformationMessage(`PromptSmith Voice-to-Spec: Refined spoken thoughts (${f.corrections} disfluencies/self-corrections resolved).`)}break;case"toggleAutoHook":o=!!d.enabled,await u.globalState.update("promptsmith_auto_hook",o),l.text=o?"$(sparkle) Auto-Hook":"$(sparkle)",o&&(e=t.recommendedProfile||e,s.window.showInformationMessage(`PromptSmith Auto-Hook Active: Hooked alongside ${t.detectedModelLabel}.`)),k();break;case"loadHistoryItem":{let f=E()[Number(d.index)];f&&(n=f.raw,c=f.compiled,p=T.analyze(n,v),k())}break;case"clearHistoryVault":await u.globalState.update("promptsmith_history_vault",[]),k();break;case"applyAmbiguityFix":{let b=(d.text||n||"").trim(),f=(d.fixSnippet||"").trim();n=b?`${b}
${f}`:f,p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),k()}break;case"changeProfile":I(d.text),e=d.profile,n&&(p=T.analyze(n,v),c=j.enhance(n,e,v,a,r)),k();break;case"changeAudience":I(d.text),a=d.audience==="auto"?void 0:d.audience,n&&(p=T.analyze(n,v),c=j.enhance(n,e,v,a,r)),k();break;case"changeDiscipline":I(d.text),r=d.discipline==="auto"?void 0:d.discipline,n&&(p=T.analyze(n,v),c=j.enhance(n,e,v,a,r)),k();break;case"triggerBrainstorm":if(I(d.text),!n){s.window.showWarningMessage("Type or paste a prompt in the Input Draft box first.");return}e="orthogonal_brainstorm",p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),k(),s.window.showInformationMessage("PromptSmith: Synthesized Autonomous Lateral Brainstorming Blueprint.");break;case"selectVector":{if(I(d.text),!n){s.window.showWarningMessage("Type or paste a prompt in the Input Draft box first.");return}let b=W.synthesizeBrainstorm(n),f=b.vectors.find(P=>P.id===d.vectorId)||b.vectors[0];c=`### PROMPTSMITH ORTHOGONAL PATH: ${f.title.toUpperCase()}
**Codename**: ${f.codename}
**Core Paradigm**: ${f.paradigm}

#### Consensus Trap Strictly Forbidden
[FORBIDDEN]: ${f.consensusTrapForbidden}

#### Counter-Intuitive Breakthrough Mechanism
${f.counterIntuitiveMechanism}

#### Concrete Architecture & Implementation Pattern
${f.concreteArchitecture}

#### Provocative Operator (de Bono PO)
${f.provocativeOperator}

#### Model Execution Directive
${f.promptDirective}

#### Target Task Specification
${n}`,k(),s.window.showInformationMessage(`PromptSmith: Applied ${f.title} Lateral Path.`)}break;case"insert":await Le(d.text),M("Prompt inserted");break;case"copy":await s.env.clipboard.writeText(d.text),Z.trackEvent(u,{sessionId:i,runtime:v,action:"copy",profile:e,audience:a,discipline:r,inputPrompt:n,enhancedPrompt:d.text,originalWords:n.split(/\s+/).filter(Boolean).length,enhancedWords:d.text.split(/\s+/).filter(Boolean).length,isLicensed:x,trialCountRemaining:g}),M("Prompt copied");break;case"openCheckout":await s.env.openExternal(s.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=vscode"));break;case"enterPasskey":await s.commands.executeCommand("promptsmith.unlockLicense");break;case"unlockKey":await V(d.key);break}})}u.subscriptions.push(s.commands.registerCommand("promptsmith.contactSupport",()=>{s.env.openExternal(s.Uri.parse("mailto:help@bartholomew.info?subject=PromptSmith%20Support%20Inquiry"))}));let z=s.commands.registerCommand("promptsmith.exportWorkspaceRules",async()=>{let h=await s.window.showQuickPick([{label:".cursorrules",description:"Cursor IDE workspace rules"},{label:"CLAUDE.md",description:"Claude Code CLI project memory & invariants"},{label:".github/copilot-instructions.md",description:"GitHub Copilot custom workspace instructions"},{label:".windsurfrules",description:"Windsurf Cascade workspace rules"}],{placeHolder:"Select the target AI rules file to generate & compact"});if(!h)return;let d=await D.exportWorkspaceRulesFile(h.label,c||n);d.ok?s.window.showInformationMessage(`PromptSmith: ${d.message}`):s.window.showWarningMessage(`PromptSmith: ${d.message}`)});class m{static viewType="promptsmith.sidebarView";_view;resolveWebviewView(d){this._view=d,d.webview.options={enableScripts:!0,localResourceRoots:[u.extensionUri]},this.updateView(),H(d.webview)}updateView(){this._view&&(this._view.webview.html=Y())}}let S=new m;u.subscriptions.push(s.window.registerWebviewViewProvider(m.viewType,S));async function V(h){let d=(h||"").trim();if(!d)return!1;if(/^cs_(live|test)_[a-zA-Z0-9]+$/.test(d)){let b=await Ye(d);if(b)d=b;else return s.window.showErrorMessage("Could not verify that Stripe Session ID. Ensure checkout was completed or contact help@bartholomew.info."),!1}if(d=d.toUpperCase(),!/^PSMITH-(PRO|TEAM|PASSKEY)-[0-9A-F]{5}(-[0-9A-F]{5}){3}$/.test(d))return s.window.showErrorMessage("Please enter a valid passkey (e.g. PSMITH-PRO-XXXXX-XXXXX-XXXXX-XXXXX) or Stripe Session ID."),!1;try{if(await Ge(d))return x=!0,await u.globalState.update(y,!0),k(),s.window.showInformationMessage("PromptSmith Pro Passkey Verified and Activated."),!0}catch{}return s.window.showErrorMessage("Passkey not recognized. Need assistance? Contact help@bartholomew.info","Contact Support").then(b=>{b==="Contact Support"&&s.env.openExternal(s.Uri.parse("mailto:help@bartholomew.info?subject=Passkey%20Assistance"))}),!1}u.subscriptions.push(s.window.registerUriHandler({async handleUri(h){if(h.path==="/activate"||h.path==="/unlock"){let d=new URLSearchParams(h.query),b=d.get("key")||d.get("session_id");b&&await V(b)}}}));function G(){w?w.reveal(s.ViewColumn.Beside):(w=s.window.createWebviewPanel("promptsmith.floatingAssistant","PromptSmith Assistant",s.ViewColumn.Beside,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[u.extensionUri]}),H(w.webview),w.onDidDispose(()=>{w=void 0})),w.webview.html=Y()}let K=s.commands.registerCommand("promptsmith.improveSelection",async()=>{let h=s.window.activeTextEditor;if(!h){G(),s.window.showInformationMessage("Opened PromptSmith Studio. Type a prompt directly or select text in an editor.");return}let d=h.selection,b=d.isEmpty?h.document.getText():h.document.getText(d);if(!b.trim()){G(),s.window.showWarningMessage("No text selected in editor. Type your prompt in the PromptSmith Input Draft box.");return}if(!await F())return;let f=D.compileVoiceTranscript(b),{scrubbed:P}=D.scrubSecrets(f.corrections>0?f.cleaned:b);n=P,p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),await C(n,c,e),l.text=o?"$(sparkle) Auto-Hook":"$(sparkle)",l.tooltip=`PromptSmith Auto-Hook (${t.detectedModelLabel}) | Score: ${p.iqScore}/100 (-${p.tokenSavingsPercent}% words)`,k(),o?(await s.env.clipboard.writeText(c),await D.exportWorkspaceRulesFile(t.nativeRuleFile,c,!0),M(`Auto-Hooked for ${t.detectedModelLabel} & copied to clipboard`)):G(),Z.trackEvent(u,{sessionId:i,runtime:v,action:"improve",profile:e,audience:a,discipline:r,inputPrompt:b,enhancedPrompt:c,originalWords:b.split(/\s+/).filter(Boolean).length,enhancedWords:c.split(/\s+/).filter(Boolean).length,tokenReductionPct:p.tokenSavingsPercent,isLicensed:x,trialCountRemaining:g})}),ae=s.commands.registerCommand("promptsmith.brainstormSelection",async()=>{let h=s.window.activeTextEditor,b=(h?h.selection.isEmpty?h.document.getText():h.document.getText(h.selection):"").trim()||n.trim();if(!b){G(),s.window.showWarningMessage("Select prompt text in your editor or enter a draft in PromptSmith first.");return}n=b,p=T.analyze(b,v),e="orthogonal_brainstorm",c=j.enhance(b,e,v,a,r),l.text="$(sparkle)",l.tooltip="PromptSmith | Lateral Brainstorm: Outside-the-box paths active",k(),G(),Z.trackEvent(u,{sessionId:i,runtime:v,action:"improve",profile:e,audience:a,discipline:r,inputPrompt:b,enhancedPrompt:c,originalWords:b.split(/\s+/).filter(Boolean).length,enhancedWords:c.split(/\s+/).filter(Boolean).length,tokenReductionPct:p.tokenSavingsPercent,isLicensed:x,trialCountRemaining:g}),s.window.showInformationMessage("PromptSmith: Autonomous Lateral Brainstorming Active.")}),re=s.commands.registerCommand("promptsmith.openDashboard",()=>{oe.createOrShow(u.extensionUri)});u.subscriptions.push(s.commands.registerCommand("promptsmith.openPlayground",()=>{oe.createOrShow(u.extensionUri)}));let X=s.commands.registerCommand("promptsmith.unlockLicense",async()=>{let h=await s.window.showInputBox({prompt:"Enter your PromptSmith Pro Passkey ($9/mo or $10 Passkey) or Stripe Session ID (cs_live_...)",placeHolder:"PSMITH-PRO-XXXXX-XXXXX-XXXXX-XXXXX"});h&&await V(h)});class se{provideCodeActions(d,b){let f=d.getText(b);if(!f||f.trim().length<10)return[];let P=new s.CodeAction("Optimize with PromptSmith",s.CodeActionKind.RefactorRewrite);return P.command={command:"promptsmith.improveSelection",title:"Optimize with PromptSmith"},[P]}}u.subscriptions.push(s.languages.registerCodeActionsProvider(["markdown","plaintext","typescript","python","json"],new se,{providedCodeActionKinds:[s.CodeActionKind.RefactorRewrite]}));let ce=s.commands.registerCommand("promptsmith.scrubSecrets",async()=>{let h=s.window.activeTextEditor;if(!h){G(),s.window.showInformationMessage("Open a file or select text to scrub secrets, or paste into PromptSmith Studio.");return}let d=h.selection,b=d.isEmpty?h.document.getText():h.document.getText(d),{scrubbed:f,redactedCount:P}=D.scrubSecrets(b);if(P===0){s.window.showInformationMessage("PromptSmith Secret Guard: 0 exposed credentials detected.");return}await h.edit(Q=>{d.isEmpty?Q.replace(new s.Range(h.document.positionAt(0),h.document.positionAt(b.length)),f):Q.replace(d,f)}),s.window.showInformationMessage(`PromptSmith Secret Guard: Redacted ${P} exposed credential(s).`)}),_=s.commands.registerCommand("promptsmith.cleanVoiceStream",async()=>{let h=s.window.activeTextEditor,d=h?h.selection.isEmpty?h.document.getText():h.document.getText(h.selection):n;if(!d||!d.trim()){G(),s.window.showInformationMessage("Dictate or type your spoken thoughts first, then run Clean Voice Stream.");return}let b=D.compileVoiceTranscript(d),{scrubbed:f}=D.scrubSecrets(b.cleaned);n=f,p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),await C(n,c,e),o&&await s.env.clipboard.writeText(c),k(),s.window.showInformationMessage(`PromptSmith Voice-to-Spec: Resolved ${b.corrections} spoken disfluencies/self-corrections & copied spec.`)}),te=s.commands.registerCommand("promptsmith.groundWorkspace",async()=>{let h=D.inspectWorkspace();n=n?`${n}

${h.contextSummaryBlock}`:h.contextSummaryBlock,p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),k(),s.window.showInformationMessage(`PromptSmith: Grounded in ${h.workspaceName} (${h.detectedStack.join(", ")||h.languageId}).`)}),he=s.commands.registerCommand("promptsmith.groundDiagnostics",async()=>{let h=D.inspectDiagnosticsAndDiff();n=n?`${n}

${h.block}`:h.block,p=T.analyze(n,v),c=j.enhance(n,e,v,a,r),o&&c&&await s.env.clipboard.writeText(c),k(),s.window.showInformationMessage(`PromptSmith Error-to-Spec: Grounded ${h.count} active IDE diagnostic(s) & copied blueprint.`)});u.subscriptions.push(ce,_,te,he),u.subscriptions.push(K,ae,re,X,z)}function Ye(u){return new Promise(i=>{try{let t=JSON.stringify({session_id:u}),e=ve.request("https://us-central1-acn-26670.cloudfunctions.net/claimKey",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":Buffer.byteLength(t)}},o=>{let a="";o.on("data",r=>a+=r),o.on("end",()=>{try{let r=JSON.parse(a);i(r&&r.ok&&r.key?String(r.key):null)}catch{i(null)}})});e.on("error",()=>i(null)),e.write(t),e.end()}catch{i(null)}})}function Ge(u){return new Promise(i=>{try{let t=JSON.stringify({key:u}),e=ve.request("https://us-central1-acn-26670.cloudfunctions.net/validateKey",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":Buffer.byteLength(t)}},o=>{let a="";o.on("data",r=>a+=r),o.on("end",()=>{try{let r=JSON.parse(a);i(!!(r&&r.valid))}catch{i(!1)}})});e.on("error",()=>i(!1)),e.write(t),e.end()}catch{i(!1)}})}async function Le(u){let i=s.window.activeTextEditor;if(!i){s.window.showWarningMessage("Open a text editor file first to insert the prompt, or click Copy.");return}let t=i.selection;await i.edit(e=>{t.isEmpty?e.insert(t.active,u):e.replace(t,u)})}function He(){let u=s.env.appName||"";return u.includes("Cursor")?"Cursor IDE":u.includes("Windsurf")?"Windsurf IDE":u.includes("Claude")?"Claude Code / Desktop":"VS Code"}0&&(module.exports={activate});
