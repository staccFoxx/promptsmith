var De=Object.create;var pe=Object.defineProperty;var Me=Object.getOwnPropertyDescriptor;var Pe=Object.getOwnPropertyNames;var Re=Object.getPrototypeOf,Be=Object.prototype.hasOwnProperty;var Te=(v,n)=>{for(var t in n)pe(v,t,{get:n[t],enumerable:!0})},ke=(v,n,t,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of Pe(n))!Be.call(v,o)&&o!==t&&pe(v,o,{get:()=>n[o],enumerable:!(e=Me(n,o))||e.enumerable});return v};var te=(v,n,t)=>(t=v!=null?De(Re(v)):{},ke(n||!v||!v.__esModule?pe(t,"default",{value:v,enumerable:!0}):t,v)),Ge=v=>ke(pe({},"__esModule",{value:!0}),v);var He={};Te(He,{activate:()=>Oe});module.exports=Ge(He);var s=te(require("vscode"));var $=class{static DOMAIN_RULES=[{domain:"AI Agent Architecture & Tool-Calling Security",category:"engineering",matchPattern:/\b(agent|tool|shell|subprocess|bash|mcp|exec|command|spawn|curl|guardrail|injection)\b/i,injectedConstraints:["Enforce strict parameterized subprocess execution; never use shell=True or unescaped pipe strings.","Implement mandatory credential masking across stdout/stderr streams (mask sk-*, ghp_*, AKIA*).","Enforce hard execution timeouts and bounded retry limits to prevent runaway reasoning loops.","Block SSRF targeting cloud metadata endpoints (169.254.169.254, AWS IMDSv2, GCP metadata)."],recommendedOutputFormat:"Structured tool-call JSON schema with explicit invariant validations and rollback logic.",reasoningChecklist:["Are subshells isolated with fail-closed error handling?","Is destructive disk/network action bounded by explicit user confirmation?","Are all error traces scrubbed of sensitive environment variables?"]},{domain:"Corporate Finance, Accounting & Valuation",category:"business",matchPattern:/\b(ebitda|fcff|lbo|dcf|wacc|valuation|ifrs|asc|balance sheet|working capital|covenants|revolver|moic|irr)\b/i,injectedConstraints:["Under IFRS 16 / ASC 842, ensure operating lease liabilities deducted in Enterprise-to-Equity bridges are not simultaneously double-counted in operating cash flows.","Relever and unlever asset betas strictly via Hamada's equation: beta_L = beta_U * [1 + (1 - Tax) * (Debt / Equity)].","Present dynamic Monte Carlo or two-way sensitivity data tables across WACC and terminal exit multiples.","Reconcile free cash flow to firm (FCFF) from NOPAT = EBIT * (1 - Tax), adding back D&A, deducting CapEx, and adjusting for Delta NWC."],recommendedOutputFormat:"Three-statement linked financial model schedule with explicit cell formulas, assumptions block, and sensitivity matrix.",reasoningChecklist:["Is lease interest expense properly segregated from operating expenses?","Does the terminal growth rate stay below long-term GDP growth (max 2.0% - 2.5%)?","Are debt service coverage ratios (DSCR) verified against default covenants?"]},{domain:"Fullstack Architecture & Modern React/TypeScript",category:"engineering",matchPattern:/\b(react|typescript|component|hook|state|frontend|tailwind|nextjs|vite|css|html|ui|ux)\b/i,injectedConstraints:["Produce 100% type-safe TypeScript with strict null checks and zero 'any' casts.","Ensure all interactive components adhere to WCAG 2.1 AA accessibility standards (ARIA roles, keyboard focus, screen-reader labels).","Implement resilient client-side error boundaries with graceful offline fallback states.","Avoid unnecessary re-renders; leverage memoization, React 19 compiler patterns, or atomic state primitives."],recommendedOutputFormat:"Self-contained modular React components (.tsx) with typed props interface, CSS token styling, and interactive unit test.",reasoningChecklist:["Is component state hydrated without layout shifts?","Are event listeners cleanly unmounted in cleanup functions?","Are touch and keyboard interactions accessible across mobile and desktop?"]},{domain:"Backend Services & Distributed Systems",category:"engineering",matchPattern:/\b(backend|api|fastapi|express|grpc|rest|kafka|rabbitmq|distributed|microservice|redis|concurrency)\b/i,injectedConstraints:["Design idempotent API endpoints supporting atomic transactional state transitions.","Incorporate distributed tracing (OpenTelemetry traceparent), request ID propagation, and structured JSON logs.","Implement circuit breakers, exponential backoff with jitter, and dead-letter queues for asynchronous workers.","Enforce strict schema validation and payload size ceilings on all inbound request bodies."],recommendedOutputFormat:"Production backend router/controller with typed request/response contracts, middleware authentication, and health probes.",reasoningChecklist:["Are all database transactions committed inside an explicit rollback block?","Is connection pooling bounded to prevent thread starvation?","Are rate-limiting headers returned on 429 status codes?"]},{domain:"Data Pipelines, Warehousing & BigQuery/SQL",category:"engineering",matchPattern:/\b(sql|bigquery|dataform|dbt|etl|elt|partition|clustering|snowflake|postgres|database)\b/i,injectedConstraints:["Optimize partition and clustering keys to avoid costly full-table scans in analytics warehouses.","Adhere to deterministic idempotent merges (MERGE INTO ... WHEN MATCHED THEN UPDATE WHEN NOT MATCHED THEN INSERT).","Avoid SELECT *; project only explicit columns required by downstream transforms.","Enforce schema evolution safety: backward-compatible column additions only, never destructive drops."],recommendedOutputFormat:"Parameterized SQL or Dataform/dbt model with audit metadata, source declarations, and automated quality assertions.",reasoningChecklist:["Are join keys clustered and indexed to prevent memory spill-to-disk?","Are null checks explicitly handled in aggregates?","Is the query cost bounded by partition pruning?"]},{domain:"Machine Learning, RAG & Vector Systems",category:"engineering",matchPattern:/\b(ml|machine learning|pytorch|tensorflow|rag|embedding|vector|fine-tuning|loss|transformer|tokens|llm)\b/i,injectedConstraints:["Prevent data leakage by strictly computing scaling, normalization, and token statistics on the train split only.","Incorporate hybrid dense/sparse vector retrieval with cross-encoder re-ranking for RAG pipelines.","State explicit loss functions, learning rate schedules (warmup + cosine decay), and gradient clipping thresholds.","Track evaluation metrics beyond accuracy: precision/recall AUC, calibration error, and inference latency per token."],recommendedOutputFormat:"Modular PyTorch/Python pipeline with dataset loaders, training loop, validation metrics, and export checkpoints.",reasoningChecklist:["Are random seeds set across numpy, torch, and Python runtime for reproducibility?","Are embeddings normalized before cosine distance calculation?","Are out-of-memory (OOM) guards and batch size auto-scaling implemented?"]},{domain:"Mathematical Proofs, Algorithms & Symbolic Logic",category:"science",matchPattern:/\b(math|proof|theorem|algorithm|complexity|calculus|algebra|asymptotic|matrix|combinatorics|differential)\b/i,injectedConstraints:["Provide rigorous deductive step-by-step logic; state all axioms, lemmas, and initial boundary conditions explicitly.","State exact asymptotic computational complexity (Big-O, Big-Omega, Big-Theta) for time and space.","Verify edge-case extremes (n=0, n=1, empty sets, negative infinity, limit convergence).","Render multi-term mathematical formulas in KaTeX / LaTeX formatting."],recommendedOutputFormat:"Formal mathematical derivation with Theorem -> Proof -> Lemma breakdown and algorithmic complexity statement.",reasoningChecklist:["Is the induction base case and inductive step formally proven?","Does the integral/series converge within the stated domain of convergence?","Are division-by-zero and singularity edge cases accounted for?"]},{domain:"Cybersecurity, Reverse Engineering & Zero-Trust",category:"engineering",matchPattern:/\b(security|vulnerability|exploit|cve|penetration|xss|csrf|buffer overflow|cryptography|tls|hashing)\b/i,injectedConstraints:["Adhere to constant-time comparison algorithms for all signature and password verifications to defeat timing attacks.","Use cryptographically secure random number generators (CSPRNG, crypto.randomBytes / secrets).","Enforce strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and SameSite cookie flags.","Never implement custom cryptographic primitives; leverage audited standards (AES-GCM, Ed25519, Argon2id)."],recommendedOutputFormat:"Threat model analysis (STRIDE) with reproduction proof-of-concept, CVE mapping, and defensive patch code.",reasoningChecklist:["Is user input sanitized against both reflected and DOM-based injection vectors?","Are encryption keys separated from ciphertext and managed in an HSM/KMS?","Does the authentication flow enforce replay protection via nonces?"]},{domain:"Legal Drafting, Compliance & IP Licensing",category:"legal",matchPattern:/\b(legal|contract|agreement|clause|liability|indemnification|license|patent|copyright|gdpr|compliance)\b/i,injectedConstraints:["Draft unambiguous, jurisdiction-aware contractual language with defined terms capitalized and cross-referenced.","Include standard commercial protections: mutual indemnification, limitation of liability, severance, and governing law.","Enforce explicit data privacy protections complying with GDPR, CCPA, and industry-standard security safeguards.","State representations and warranties with explicit disclaimers of implied merchantability."],recommendedOutputFormat:"Formatted legal agreement schedule with Section -> Clause hierarchy, definitions block, and signature blocks.",reasoningChecklist:["Are all defined terms used consistently throughout all provisions?","Is the limitation of liability cap tied to trailing fees paid (e.g. 12 months)?","Are termination-for-cause and transition assistance clauses clearly bounded?"]},{domain:"Creative Narrative, Worldbuilding & High-Conversion Copy",category:"creative",matchPattern:/\b(story|fiction|narrative|copywriting|headline|character|dialogue|poem|sonnet|script|screenplay)\b/i,injectedConstraints:["Demonstrate 'Show, Don't Tell' sensory detail; avoid exposition dumps and passive voice.","Maintain strict stylistic tone and character voice consistency across all narrative beats.","For copy: anchor headline around the primary customer pain wedge, establish high-signal social proof, and present a low-friction call-to-action.","If poetic form is requested (sonnet, villanelle, haiku), adhere strictly to meter (iambic pentameter) and rhyming schemes."],recommendedOutputFormat:"Polished narrative prose or high-converting copy hierarchy with headline, hook, body, and conversion CTA.",reasoningChecklist:["Does the pacing escalate naturally toward the climactic inflection point?","Are clich\xE9s and generic adjectives replaced with vivid, specific imagery?","Is the emotional arc grounded in authentic character motivation?"]},{domain:"Product Management, PRDs & Systems Strategy",category:"business",matchPattern:/\b(prd|product|roadmap|user story|acceptance criteria|feature|mvp|kpi|churn|retention|persona)\b/i,injectedConstraints:["Frame features around user outcomes and metrics (activation, retention, LTV) rather than technical outputs.","Structure user stories using the standard format: As a [persona], I want [action], so that [business value].","Define unambiguous, testable Given-When-Then acceptance criteria for every functional requirement.","Include explicit out-of-scope declarations and risk mitigation trade-offs."],recommendedOutputFormat:"Product Requirement Document (PRD) with Problem Statement, User Stories, Acceptance Matrix, and Rollout Strategy.",reasoningChecklist:["Are success metrics (leading and lagging KPIs) quantified with baseline targets?","Are edge-case error states specified from the end-user perspective?","Is the feature scoped for rapid incremental iteration?"]},{domain:"Systems Programming & Low-Level Concurrency",category:"engineering",matchPattern:/\b(rust|c\+\+|golang|assembly|memory|pointer|allocator|concurrency|mutex|thread|syscall)\b/i,injectedConstraints:["Guarantee memory safety: prevent data races, use-after-free, and double-free conditions.","In Rust, prioritize idiomatic borrow checker semantics; minimize unsafe blocks and document invariants for any raw pointer dereference.","Leverage RAII and smart pointers (std::unique_ptr, Arc/Mutex) for deterministic resource cleanup.","Optimize cache locality (struct-of-arrays vs array-of-structs) for hot performance loops."],recommendedOutputFormat:"Idiomatic source code with memory safety annotations, zero-allocation data structures, and benchmark suite.",reasoningChecklist:["Are deadlocks prevented by enforcing a global lock ordering hierarchy?","Are resources cleanly closed via Drop/destructor semantics even during panics?","Is memory overhead zero-cost at compile time?"]},{domain:"Cloud Architecture, DevOps & Infrastructure as Code",category:"engineering",matchPattern:/\b(aws|gcp|azure|terraform|kubernetes|docker|k8s|helm|ci\/cd|github actions|ingress|iam)\b/i,injectedConstraints:["Adhere to least-privilege IAM policies with resource-level scoping and temporary role assumption.","Ensure Infrastructure as Code (Terraform/CDK) is modular, parameterized across environments, and enables state locking.","Configure Kubernetes pods with resource requests/limits, readiness/liveness probes, and non-root security contexts.","Automate zero-downtime deployment strategies (blue-green or rolling updates with health checks)."],recommendedOutputFormat:"Declarative IaC template (Terraform/Kubernetes YAML) with variable definitions and automated CI validation workflow.",reasoningChecklist:["Are container images signed and scanned for vulnerabilities?","Are sensitive secrets injected via secure vault/secret references rather than plaintext?","Is high availability distributed across multiple availability zones?"]},{domain:"Academic Research, Literature Synthesis & Pedagogy",category:"science",matchPattern:/\b(research|paper|dissertation|citation|literature review|methodology|hypothesis|academic|journal)\b/i,injectedConstraints:["Ground all claims in peer-reviewed empirical evidence; cite seminal authors, publication years, and methodologies.","Critique methodological limitations (selection bias, confounding variables, statistical power).","Structure explanations progressively from intuitive conceptual analogies to formal mathematical rigor.","Distinguish between correlation and verified causal mechanisms."],recommendedOutputFormat:"Peer-reviewed journal paper structure: Abstract -> Background -> Methodology -> Findings -> Limitations.",reasoningChecklist:["Are alternative rival hypotheses explicitly considered and tested?","Is statistical significance accompanied by practical effect size (Cohen's d)?","Are citations accurately attributed without parametric hallucination?"]},{domain:"Mobile Application Engineering (iOS/Android/Flutter)",category:"engineering",matchPattern:/\b(ios|swift|swiftui|android|kotlin|jetpack|flutter|react native|mobile|app store|push notification)\b/i,injectedConstraints:["Design for memory-constrained mobile environments; release background resources and unbind observers.","Ensure seamless offline operation with local database caching (Room/CoreData/SQLite) and automatic sync on reconnect.","Handle dynamic screen sizes, orientation changes, and system accessibility font scaling.","Execute long-running network and compute tasks strictly on background threads/coroutines without blocking the main UI thread."],recommendedOutputFormat:"Clean architecture mobile module (Swift/Kotlin) with ViewModel, UI declaration, and offline repository.",reasoningChecklist:["Is 60fps/120fps UI rendering maintained without frame drops?","Are push notification payloads handled gracefully when the app is in the background?","Are runtime permissions requested contextually with clear user rationale?"]},{domain:"Executive Strategy & Commercial Deal Structuring",category:"business",matchPattern:/\b(executive|pitch|outbound|sales|partnership|sponsor|enterprise|closing|deal|investor)\b/i,injectedConstraints:["Lead with the quantifiable economic wedge ($/time saved, revenue unlocked, risk eliminated) in the opening sentence.","Eliminate apologetic preambles, marketing fluff, and rhetorical clich\xE9s.","Provide a zero-friction integration or adoption roadmap with a clear, low-commitment next step.","Anticipate the primary procurement/security objections upfront with concrete proof points."],recommendedOutputFormat:"High-impact executive brief: 1. Core Value Wedge -> 2. Verifiable Evidence -> 3. Concrete Action Path.",reasoningChecklist:["Is the message tailored directly to the specific decision-maker's incentives?","Does the proposal provide immediate demonstrable ROI?","Is the call to action binary, actionable, and low-friction?"]},{domain:"Meta-Prompt Engineering & Frontier System Instructions",category:"engineering",matchPattern:/\b(write a prompt|create a prompt|build a prompt|design a prompt|give me a prompt|prompt for|prompt that can|prompt to help|system prompt|how should i prompt|how do i prompt|better prompt|prompt looking for|craft a prompt|prompt template|agent prompt|meta-prompt)\b/i,injectedConstraints:["Output MUST be an executable, production-grade system prompt or meta-prompt architecture with delimited XML/Markdown blocks.","Include explicit system persona, invariant constraints, negative constraints (anti-patterns to reject), input schemas, and few-shot exemplars.","Provide a self-verification checklist so the target AI model tests and verifies its output before returning it.","NEVER generate generic software code when the user is explicitly requesting a prompt or prompt optimization."],recommendedOutputFormat:"Production System Prompt Architecture: <system_role>, <context>, <invariants>, <negative_constraints>, <input_schema>, <few_shot_examples>, <verification_rubric>.",reasoningChecklist:["Does the synthesized prompt clearly establish the AI's persona, boundaries, and objective?","Are edge cases and anti-hallucination guardrails explicitly defined?","Is the output format strictly specified with verification assertions?"]},{domain:"Laws of Physics, Thermodynamics & Dimensional Mechanics",category:"science",matchPattern:/\b(physics|thermodynamic|entropy|navier-stokes|quantum|maxwell|relativity|conservation of|gravity|mass-energy|joule|watt|kelvin|newton|pascal|momentum|dimensional analysis|buckingham|fluid dynamics|lorentz|doppler|speed of light)\b/i,injectedConstraints:["Enforce fundamental physical conservation laws: conservation of mass, momentum, energy (Delta U = Q - W), and entropy non-decrease (dS >= 0).","Verify dimensional homogeneity via Buckingham Pi theorem; ensure all physical quantities possess consistent SI base units ([M], [L], [T], [I], [Theta], [N], [J]).","Analyze limiting asymptotic boundary cases (e.g., non-relativistic limit v << c, Knudsen number Kn -> 0, zero-temperature ground states T -> 0).","Include explicit physical falsification criteria to stress-test any derived equation or claim against empirical reality."],recommendedOutputFormat:"Rigorous Physical Derivation & Analysis: 1. Physical Axioms & Invariants -> 2. Dimensional Homogeneity Proof -> 3. Mathematical Formulation -> 4. Asymptotic Boundary Verification & Falsification Suite.",reasoningChecklist:["Are units and physical dimensions strictly consistent on both sides of every equation?","Does the system obey the Second Law of Thermodynamics and causality?","Are boundary limits (e.g., v -> c, T -> 0, scale extremes) physically coherent?"]},{domain:"Real-World Situations, Crisis Management & Operations",category:"operations",matchPattern:/\b(real life|real-life|situation|crisis|emergency|operations|logistics|supply chain|hospital|shutdown|authorities|disaster|incident response|escalation|factory|plant)\b/i,injectedConstraints:["Ground decisions in real-world human cognitive capacity, logistical bottlenecks, and physical resource availability.","Establish explicit crisis triage levels, communication chains of command, and fail-safe recovery procedures.","Eliminate panic-inducing ambiguity; provide clear, actionable directives with contingency decision trees.","Clearly delineate between verified empirical facts, probabilistic inferences, and unknown operational parameters."],recommendedOutputFormat:"Actionable Operational Playbook: 1. Situation Assessment & Triage -> 2. Immediate Containment Directives -> 3. Stakeholder Communication Protocol -> 4. Recovery & Verification Checklist.",reasoningChecklist:["Does the protocol minimize operational downtime and prioritize human safety?","Are communication directives clear, unambiguous, and panic-free?","Is there a validated secondary fallback if primary communications or power rails fail?"]},{domain:"Human Communication Dynamics, Cognitive Calibration & Rhetoric",category:"creative",matchPattern:/\b(communication style|tone|pedagogical|explain to|all ages|high school|graduate|socratic|audience|rhetoric|dialogue|interpersonal|diplomacy|calmly|negotiation|empathy|clarity)\b/i,injectedConstraints:["Dynamically calibrate cognitive load and terminology to the target audience (e.g., intuitive analogies for novices, rigorous formalisms for researchers).","Preserve 100% conceptual and technical precision across all communication styles; never simplify facts to the point of falsehood.","Structure explanations with Socratic scaffolding: establish intuition first, introduce formal definitions, and verify understanding with interactive questions.","Account for emotional resonance, psychological safety, and clear actionable takeaways."],recommendedOutputFormat:"Calibrated Communication Architecture: 1. Core Message / Intuitive Hook -> 2. In-Depth Multi-Perspective Breakdown -> 3. Common Misconceptions Addressed -> 4. Comprehension Verification Checks.",reasoningChecklist:["Is the tone tailored to the intended audience without being condescending or overly dense?","Is technical accuracy maintained while improving accessibility?","Are verification questions provided to confirm recipient understanding?"]}];static getDomainEnrichment(n){let t=n.trim();if(!t)return this.synthesizeUniversalRule("General Knowledge & Computing");for(let e of this.DOMAIN_RULES)if(e.matchPattern.test(t))return e;return this.synthesizeUniversalRule(t)}static synthesizeUniversalRule(n){let e=n.replace(/[^\w\s]/g,"").split(/\s+/).filter(r=>r.length>3&&!/^(this|that|with|from|have|make|what|when|where|which|about|please|would|could)$/i.test(r)).slice(0,3).join(" ")||"General Technical Reasoning",o=e.charAt(0).toUpperCase()+e.slice(1);return{domain:`${o} & Systems Invariants`,category:"engineering",matchPattern:/.*/,injectedConstraints:[`Execute with authoritative expert rigor grounded in established ${o} first principles.`,"Enforce strict logical consistency with zero unverified assumptions or speculative non-answers.","Provide self-contained, fully resolved deliverables with explicit edge cases and boundary conditions.","Prioritize high signal-to-noise clarity; eliminate conversational filler, throat-clearing, and meta-commentary."],recommendedOutputFormat:"Structured authoritative deliverable: 1. Specification / Core Principles -> 2. Complete Artifact -> 3. Empirical Verification Test.",reasoningChecklist:[`Are all claims verified against established domain standards in ${o}?`,"Are edge cases, exceptions, and boundary failures addressed?","Is the solution immediately actionable without requiring missing context?"]}}};var Z=class{static benchmarkPrompt(n){let t=n.trim();if(!t)return this.emptyBenchmarks();let e=t.split(/\s+/).filter(Boolean),o=Math.ceil(e.length*1.33),r=/<\/?[a-z_]+>/i.test(t),a=/<(scratchpad|thinking|antthinking)>/i.test(t),i=/\b(step[- ]by[- ]step|think step by step|walk through step by step|let's think step by step)\b/i.test(t),c=/\b(json schema|output format: json|pydantic|\{[^{}]*"\w+"\s*:)/i.test(t),p=/(---\s*BEGIN|```context|<context>|###\s*Context|BEGIN REFERENCE)/i.test(t),y=/\b(do not|never|must not|avoid|strictly|prohibited)\b/i.test(t),w=/\b(example\s*\d*:|input:[\s\S]*output:)/i.test(t),b=/\b(can you please|could you please|as an ai|i would like you to|please kindly)\b/i.test(t),h=/\b([a-zA-Z0-9_\-\.\/]+\.(ts|js|py|json|html|css|rs|go|cpp|c|md|sql))\b/i.test(t)||/@\w+/.test(t),d=/\b(test|assert|verify|validation|spec|unit test)\b/i.test(t),x=/\b(diff|patch|before\/after|\+ |\- |replace)\b/i.test(t),P=/\b(npm|pnpm|cargo|pytest|pip|python|git|docker|curl|bash)\b/i.test(t),G=/\b(mcp|tool_call|function_call|call_tool)\b/i.test(t),D=75,N=[],A=[];r?D+=15:N.push("Enclose task and constraints in XML tags (<task>, <constraints>) for strict instruction adherence."),a?D+=10:e.length>40&&N.push("Include a <scratchpad> or <thinking> block to maximize Claude's complex architectural reasoning."),b&&(D-=12,A.push("Conversational preamble degrades Claude's system prompt signal.")),D=Math.min(100,Math.max(25,D));let S=80,O=[],C=[];i?(S-=28,C.push("CRITICAL: Remove 'think step-by-step'. Micromanaging o1/o3 reasoning heuristics degrades test-time compute performance.")):(S+=10,O.push("Optimal: Autonomous reasoning enabled without micromanaging internal thinking steps.")),y?S+=10:O.push("Specify strict edge-case acceptance criteria and boundary invariants."),S=Math.min(100,Math.max(25,S));let j=72,B=[],m=[];c?j+=18:B.push("Define deterministic JSON schema with explicit property types for reliable tool invocation."),w?j+=10:B.push("Provide 1 concrete few-shot demonstration example to lock formatting precision."),y||B.push("Add explicit negative constraints to eliminate hallucinations."),j=Math.min(100,Math.max(25,j));let k=74,H=[],F=[];p?k+=16:H.push("Demarcate reference documents from actionable tasks using clear block headers."),e.length<30&&H.push("Gemini excels with rich background context; anchor the user persona and target outcome."),k=Math.min(100,Math.max(25,k));let U=75,ne=[],oe=[];y?U+=15:ne.push("Define strict algorithmic boundaries and computational invariants."),i&&(U-=18,oe.push("DeepSeek R1 self-reflects autonomously; omit manual step-by-step guidance in favor of verification tests.")),U=Math.min(100,Math.max(25,U));let q=73,ae=[],re=[];b?re.push("Grok 3 delivers highest signal when given unfiltered, imperative commands."):q+=12,y?q+=15:ae.push("Anchor hard real-world ground truth constraints and verification criteria."),q=Math.min(100,Math.max(25,q));let J=71,_=[],ue=[];p||r?J+=14:_.push("Provide explicit system persona and structured markdown sections."),e.length<25&&_.push("Llama 3.3 benefits from detailed operational guidelines and explicit format contracts."),J=Math.min(100,Math.max(25,J));let u=76,l=[],f=[];h||d?u+=16:l.push("Provide explicit language type annotations and test assertion harness."),y&&(u+=8),u=Math.min(100,Math.max(25,u));let g=72,I=[],V=[];h?(g+=18,I.push("Optimal: File paths identified for multi-file shadow workspace edits.")):I.push("Reference specific file paths (e.g. src/auth.ts) to guide Cursor Composer's multi-file index."),x&&(g+=10),g=Math.min(100,Math.max(25,g));let Q=74,be=[],Ce=[];h&&d?Q+=16:be.push("Specify workspace checkpoints and tool execution sequences for Cascade Flow."),Q=Math.min(100,Math.max(25,Q));let ee=73,ge=[],ve=[];P?(ee+=15,ge.push("Optimal: Command-line verification commands provided for terminal tool loops.")):ge.push("Specify build or test commands (e.g. npm test, pytest) for Claude Code's verification loop."),b&&(ee-=10,ve.push("Terminal CLI agents perform best with concise, imperative task directives.")),ee=Math.min(100,Math.max(25,ee));let se=70,ye=[],we=[];e.length<=40&&h?se+=18:e.length>80?we.push("Keep Copilot Edits instructions scoped and concise to avoid diffuse editor diffs."):ye.push("Scope instructions to specific functions or symbols for clean inline edits."),se=Math.min(100,Math.max(25,se));let ce=72,he=[],Ie=[];h&&(x||d)?(ce+=18,he.push("Optimal: Git-diff targets and validation commands identified.")):he.push("State files to add to git session and test command to auto-commit on pass."),ce=Math.min(100,Math.max(25,ce));let le=75,xe=[],Se=[];d&&e.length>=35?le+=15:xe.push("Define full-lifecycle acceptance criteria, API endpoints, and browser test requirements."),le=Math.min(100,Math.max(25,le));let de=73,Ae=[],Ee=[];return G||h?de+=16:Ae.push("Specify explicit tool call permissions, target files, and terminal confirmation boundaries."),de=Math.min(100,Math.max(25,de)),[{id:"claude-3-7-sonnet",name:"Claude 3.7 / 3.5 Sonnet",category:"model",provider:"Anthropic",badgeColor:"#d97706",compatibilityScore:D,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.003",profileKey:"claude_xml",recommendations:N,warnings:A,keyStrengths:["Hierarchical XML parsing","Scratchpad reasoning","Zero-preamble steering"]},{id:"openai-o3-o1",name:"o3 / o3-mini / o1",category:"model",provider:"OpenAI",badgeColor:"#10b981",compatibilityScore:S,latencyRating:"Reasoning Delay",tokenEstimate:o,costEstimatePer1k:"$0.015",profileKey:"openai_o",recommendations:O,warnings:C,keyStrengths:["Autonomous test-time compute","Formal invariant solving","Mathematical proofs"]},{id:"gpt-4o",name:"GPT-4o / GPT-4.5",category:"model",provider:"OpenAI",badgeColor:"#0ea5e9",compatibilityScore:j,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.0025",profileKey:"gpt4o_schema",recommendations:B,warnings:m,keyStrengths:["Structured JSON outputs","Multimodal inputs","Strict schema contracts"]},{id:"gemini-2-flash",name:"Gemini 2.0 Flash / Pro",category:"model",provider:"Google",badgeColor:"#8b5cf6",compatibilityScore:k,latencyRating:"Ultra Fast",tokenEstimate:o,costEstimatePer1k:"$0.0001",profileKey:"gemini_context",recommendations:H,warnings:F,keyStrengths:["2M+ context window","Ultra-low latency","Rich reference grounding"]},{id:"deepseek-r1",name:"DeepSeek R1 / V3",category:"model",provider:"DeepSeek",badgeColor:"#3b82f6",compatibilityScore:U,latencyRating:"Reasoning Delay",tokenEstimate:o,costEstimatePer1k:"$0.00055",profileKey:"deepseek_r1",recommendations:ne,warnings:oe,keyStrengths:["Open-weights frontier reasoning","Algorithmic synthesis","Boundary edge testing"]},{id:"grok-3",name:"Grok 3",category:"model",provider:"xAI",badgeColor:"#ec4899",compatibilityScore:q,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.002",profileKey:"grok_direct",recommendations:ae,warnings:re,keyStrengths:["Real-time search integration","Direct high-signal answers","Zero bureaucratic hedging"]},{id:"llama-3-3",name:"Llama 3.3 70B",category:"model",provider:"Meta",badgeColor:"#6366f1",compatibilityScore:J,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.0007",profileKey:"llama_system",recommendations:_,warnings:ue,keyStrengths:["System steerability","Standardized markdown adherence","Local/private hosting"]},{id:"qwen-2-5-coder",name:"Qwen 2.5 Coder 32B",category:"model",provider:"Alibaba",badgeColor:"#14b8a6",compatibilityScore:u,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.0008",profileKey:"qwen_coder",recommendations:l,warnings:f,keyStrengths:["Repository-level code synthesis","Type annotations","Clean test assertions"]},{id:"cursor-composer",name:"Cursor Composer / Agent",category:"bot",provider:"Anysphere",badgeColor:"#a855f7",compatibilityScore:g,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Subscription",profileKey:"cursor_composer",recommendations:I,warnings:V,keyStrengths:["Multi-file shadow workspace edits","@file index parsing","Fast iterative diffs"]},{id:"windsurf-cascade",name:"Windsurf Cascade",category:"bot",provider:"Codeium",badgeColor:"#06b6d4",compatibilityScore:Q,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Subscription",profileKey:"windsurf_cascade",recommendations:be,warnings:Ce,keyStrengths:["Flow architecture","Real-time tool execution","Workspace state tracking"]},{id:"claude-code-cli",name:"Claude Code CLI",category:"bot",provider:"Anthropic",badgeColor:"#f59e0b",compatibilityScore:ee,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Token-based",profileKey:"claude_code",recommendations:ge,warnings:ve,keyStrengths:["Unix pipeline integration","Automated test loops","Codebase search & replace"]},{id:"copilot-edits",name:"GitHub Copilot Edits",category:"bot",provider:"GitHub / MS",badgeColor:"#22c55e",compatibilityScore:se,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"Subscription",profileKey:"copilot_edits",recommendations:ye,warnings:we,keyStrengths:["In-editor localized edits","Repo context indexing","Style matching"]},{id:"aider",name:"Aider Pair Programmer",category:"bot",provider:"Open Source",badgeColor:"#f43f5e",compatibilityScore:ce,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Bring Your Own Key",profileKey:"aider_diff",recommendations:he,warnings:Ie,keyStrengths:["Git-commit automation","Repo map AST analysis","Automated test recovery"]},{id:"devin",name:"Devin Autonomous",category:"bot",provider:"Cognition",badgeColor:"#84cc16",compatibilityScore:le,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Enterprise ACU",profileKey:"devin_fullstack",recommendations:xe,warnings:Se,keyStrengths:["Full-lifecycle engineering","Shell + browser execution","End-to-end deployment"]},{id:"cline-roo",name:"Cline / Roo Code",category:"bot",provider:"Open Source",badgeColor:"#eab308",compatibilityScore:de,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Bring Your Own Key",profileKey:"cline_mcp",recommendations:Ae,warnings:Ee,keyStrengths:["MCP tool protocol","Atomic file modifications","Configurable auto-approvals"]}]}static emptyBenchmarks(){return[{id:"claude-3-7-sonnet",name:"Claude 3.7 / 3.5 Sonnet",cat:"model",prov:"Anthropic",color:"#d97706",rate:"Fast",cost:"$0.003",prof:"claude_xml"},{id:"openai-o3-o1",name:"o3 / o3-mini / o1",cat:"model",prov:"OpenAI",color:"#10b981",rate:"Reasoning Delay",cost:"$0.015",prof:"openai_o"},{id:"gpt-4o",name:"GPT-4o / GPT-4.5",cat:"model",prov:"OpenAI",color:"#0ea5e9",rate:"Fast",cost:"$0.0025",prof:"gpt4o_schema"},{id:"gemini-2-flash",name:"Gemini 2.0 Flash / Pro",cat:"model",prov:"Google",color:"#8b5cf6",rate:"Ultra Fast",cost:"$0.0001",prof:"gemini_context"},{id:"deepseek-r1",name:"DeepSeek R1 / V3",cat:"model",prov:"DeepSeek",color:"#3b82f6",rate:"Reasoning Delay",cost:"$0.00055",prof:"deepseek_r1"},{id:"grok-3",name:"Grok 3",cat:"model",prov:"xAI",color:"#ec4899",rate:"Fast",cost:"$0.002",prof:"grok_direct"},{id:"llama-3-3",name:"Llama 3.3 70B",cat:"model",prov:"Meta",color:"#6366f1",rate:"Fast",cost:"$0.0007",prof:"llama_system"},{id:"qwen-2-5-coder",name:"Qwen 2.5 Coder 32B",cat:"model",prov:"Alibaba",color:"#14b8a6",rate:"Fast",cost:"$0.0008",prof:"qwen_coder"},{id:"cursor-composer",name:"Cursor Composer / Agent",cat:"bot",prov:"Anysphere",color:"#a855f7",rate:"Autonomous Multi-Step",cost:"Subscription",prof:"cursor_composer"},{id:"windsurf-cascade",name:"Windsurf Cascade",cat:"bot",prov:"Codeium",color:"#06b6d4",rate:"Autonomous Multi-Step",cost:"Subscription",prof:"windsurf_cascade"},{id:"claude-code-cli",name:"Claude Code CLI",cat:"bot",prov:"Anthropic",color:"#f59e0b",rate:"Autonomous Multi-Step",cost:"Token-based",prof:"claude_code"},{id:"copilot-edits",name:"GitHub Copilot Edits",cat:"bot",prov:"GitHub / MS",color:"#22c55e",rate:"Fast",cost:"Subscription",prof:"copilot_edits"},{id:"aider",name:"Aider Pair Programmer",cat:"bot",prov:"Open Source",color:"#f43f5e",rate:"Autonomous Multi-Step",cost:"BYOK",prof:"aider_diff"},{id:"devin",name:"Devin Autonomous",cat:"bot",prov:"Cognition",color:"#84cc16",rate:"Autonomous Multi-Step",cost:"Enterprise",prof:"devin_fullstack"},{id:"future-deep-reasoner",name:"Next-Gen Deep Reasoner (o3+ / Claude 4 / Gemini 3)",cat:"future",prov:"Frontier AGIs",color:"#ec4899",rate:"Reasoning Delay",cost:"Adaptive Compute",prof:"future_deep_reasoner"},{id:"future-agent-swarm",name:"Autonomous Agent Swarm (Multi-Agent AGI)",cat:"future",prov:"Autonomous Swarms",color:"#8b5cf6",rate:"Autonomous Multi-Step",cost:"Swarm Compute",prof:"future_agent_swarm"},{id:"future-formal-verifier",name:"Neuro-Symbolic Verifier (Lean 4 / Z3 SAT AI)",cat:"future",prov:"Formal Solvers",color:"#10b981",rate:"Fast",cost:"SAT Compute",prof:"future_formal_verifier"},{id:"future-infinite-context",name:"Infinite-Context Engine (10M+ Streamer)",cat:"future",prov:"Streaming AGIs",color:"#06b6d4",rate:"Ultra Fast",cost:"Linear Attention",prof:"future_infinite_context"},{id:"cline-roo",name:"Cline / Roo Code",cat:"bot",prov:"Open Source",color:"#eab308",rate:"Autonomous Multi-Step",cost:"BYOK",prof:"cline_mcp"}].map(t=>({id:t.id,name:t.name,category:t.cat,provider:t.prov,badgeColor:t.color,compatibilityScore:0,latencyRating:t.rate,tokenEstimate:0,costEstimatePer1k:t.cost,profileKey:t.prof,recommendations:["Provide input prompt to benchmark"],warnings:[],keyStrengths:["Benchmark pending input"]}))}};var X=class{static HESITATION_PATTERNS=[/\b(i don't know|not sure|i am new|beginner|never done this|confused|help me understand|eli5|explain like i'm|explain simply|what is|how do i even)\b/i,/\b(is it possible to|can someone tell me|is that right|sorry if this is dumb|newbie|first time)\b/i];static YOUTH_ELEMENTARY_PATTERNS=[/\b(for school|in class|homework|for kids|explain to my kid|i am \d+ years old|like a game|minecraft|roblox|scratch|simple words)\b/i];static ARCHITECT_PATTERNS=[/\b(asymptotic|idempotent|concurrency|race condition|lock-free|zero-copy|p99|wal|mvcc|cap theorem|byzantine|ast|simd|vectorized)\b/i,/\b(invariants|formal verification|distributed consensus|cache invalidation|backpressure|heuristics)\b/i];static EXECUTIVE_PATTERNS=[/\b(roi|capex|opex|cost benefit|timeline|roadmap|deliverable|stakeholder|sla|kpi|executive summary|vendor comparison)\b/i];static countSyllables(n){let t=n.toLowerCase().replace(/[^a-z]/g,"");if(!t||t.length<=3)return 1;let e=t.replace(/(?:[^laeiouy]|ed|es|e)$/,"").replace(/^y/,"").match(/[aeiouy]{1,2}/g);return e?Math.max(1,e.length):1}static analyzeCognitivePattern(n,t="General"){let e=n.trim();if(!e)return this.defaultAnalysis();let o=e.split(/\s+/).filter(Boolean),r=e.split(/[.!?]+/).filter(k=>k.trim().length>0),a=Math.max(1,r.length),i=Math.max(1,o.length),c=new Set(o.map(k=>k.toLowerCase())),p=Math.round(c.size/i*100)/100,y=0;for(let k of o)y+=this.countSyllables(k);let w=i/a,b=y/i,h=Math.round(Math.max(0,Math.min(100,206.835-1.015*w-84.6*b))),d=Math.max(1,Math.round(.39*w+11.8*b-15.59)),x=0;for(let k of this.HESITATION_PATTERNS){let H=e.match(k);H&&(x+=H.length)}let P=Math.min(100,x*35),G="Apply";/\b(what is|define|list|where is|who|when)\b/i.test(e)?G="Remember":/\b(explain|why|how does|summarize|clarify|difference between)\b/i.test(e)?G="Understand":/\b(build|write|create|implement|design|generate|code)\b/i.test(e)?G="Create":/\b(compare|contrast|bench|audit|evaluate|critique|pros and cons)\b/i.test(e)?G="Evaluate":/\b(debug|why does.*fail|diagnose|root cause|isolate|profile)\b/i.test(e)&&(G="Analyze");let D=this.YOUTH_ELEMENTARY_PATTERNS.some(k=>k.test(e)),N=this.ARCHITECT_PATTERNS.some(k=>k.test(e)),A=this.EXECUTIVE_PATTERNS.some(k=>k.test(e)),S="practitioner",O="Practitioner (Intermediate)",C="Conversant";D||P>=50||d<=5||h>=85?(S="explorer",O="Explorer / Youth (All Ages & Beginners)",C="Novice"):A?(S="executive",O="Executive / Strategic (Outcomes & ROI)",C="Conversant"):N||d>=13&&p>=.75?(S="architect",O="Staff Architect / Specialist",C="Native"):(S="practitioner",O="Practitioner / Professional",C="Fluent");let j=Math.min(100,Math.round(d*4+(100-h)*.4+P*.3)),B="",m=[];switch(S){case"explorer":B="Zone of Proximal Development (ZPD) Metaphorical Scaffolding. Deconstruct complex concepts into concrete daily-life analogies (e.g. restaurant orders, toy blocks). Zero condescension, zero unexplained jargon.",m.push("Explain the core concept using an intuitive real-world analogy before presenting any code."),m.push("Break down the implementation into bite-sized, numbered checkpoints with friendly explanations."),m.push("Define any unavoidable technical terms simply in plain English."),m.push("Ensure code examples are fully commented and easy to run without hidden dependencies.");break;case"practitioner":B="Pragmatic Best-Practice Scaffolding. Deliver clean idiomatic patterns, explain the 'why' behind choices, and warn about common production edge cases.",m.push("Deliver production-grade code adhering strictly to language conventions and idiomatic design."),m.push("Highlight common edge cases, null checks, and error-handling requirements."),m.push("Provide clean type annotations and minimal runnable usage examples.");break;case"architect":B="Cognitive Load Optimization (Sweller). Maximum token-to-signal density. Deliver mathematical invariant equations, formal interface contracts, and automated verification test harnesses. Zero conversational preamble.",m.push("Provide formal interface contracts with zero pseudocode, mock implementations, or omissions."),m.push("Enforce asymptotic time/space bounds, concurrency safety, and boundary edge assertions."),m.push("Omit introductory greetings, concluding summaries, and rhetorical transitions entirely.");break;case"executive":B="Executive Strategic Framing. Deliver high-level outcomes, trade-off matrices, risk mitigations, and concrete timelines before technical minutiae.",m.push("Structure response with an Executive Summary highlighting ROI, deliverables, and architecture trade-offs."),m.push("Present technical comparisons in clear Markdown trade-off tables."),m.push("Clarify implementation risks, resource requirements, and next immediate milestone.");break}return{audience:S,audienceLabel:O,fleschKincaidGrade:d,readingEaseScore:h,vocabularyRichnessTTR:p,bloomsLevel:G,cognitiveLoadIndex:j,uncertaintyScore:P,domainFamiliarity:C,scaffoldingStrategy:B,adaptiveDirectives:m}}static defaultAnalysis(){return{audience:"practitioner",audienceLabel:"Practitioner / Professional",fleschKincaidGrade:8,readingEaseScore:70,vocabularyRichnessTTR:.6,bloomsLevel:"Apply",cognitiveLoadIndex:40,uncertaintyScore:0,domainFamiliarity:"Conversant",scaffoldingStrategy:"Balanced standard technical scaffolding.",adaptiveDirectives:["Provide clean, production-ready implementation."]}}};var Y=class{static PROFILES={architect:{lens:"architect",title:"Systems Architect",subtitle:"High-Availability, Concurrency & Invariant Security",badgeColor:"#38bdf8",primaryDomainFocus:"Distributed Systems & Infrastructure",equalizerDirectives:["Enforce formal computational invariants, boundary threshold recovery, and crash-only idempotency.","Require explicit failure modes (network partition, thread starvation, connection pool exhaustion).","State asymptotic time and memory space complexity (Big-O) for all algorithms.","Deliver self-contained production code with zero unstated mock implementations."],crossPollinationDirectives:["Include ergonomic developer-experience (DX): clear error codes, actionable logs, and clean API contracts that frontend designers can consume effortlessly.","Provide a minimal visual architecture flowchart or ASCII state transition diagram."]},designer:{lens:"designer",title:"Product & UI/UX Designer",subtitle:"Design Systems, Motion Ergonomics & WCAG AAA",badgeColor:"#ec4899",primaryDomainFocus:"Design Tokens, Spatial UI & Accessibility",equalizerDirectives:["Structure all visual styling around cohesive Design Tokens: typography scale, 4px/8px spacing grid, color contrast, and elevation shadows.","Enforce strict WCAG 2.2 AAA accessibility: ARIA landmarks, focus rings, keyboard tab-order, and high-contrast color ratios.","Implement fluid spring physics and micro-interactions with graceful prefers-reduced-motion fallbacks.","Ensure 100% responsive fluid breakpoints across mobile, tablet, desktop, and ultra-wide viewports."],crossPollinationDirectives:["Inject full engineering state management (idle, loading, error, success, empty states) with TypeScript prop interfaces.","Define deterministic API contracts and mock payloads so backend engineers can implement the design immediately without ambiguity."]},analyst:{lens:"analyst",title:"Data & Intelligence Analyst",subtitle:"Deterministic Queries, Statistical Rigor & Visual Contracts",badgeColor:"#10b981",primaryDomainFocus:"Data Pipelines, Statistics & Insights",equalizerDirectives:["Structure SQL and data transformations with deterministic idempotency, partition pruning, and index optimization.","Enforce statistical validity: report sample sizes, confidence intervals, and hypothesis test criteria (p-values, effect size).","Specify exact visualization data contracts: chart axes, scales, aggregations, tooltips, and legend hierarchies.","Handle nulls, NaN values, data skew, and time-zone conversions defensively."],crossPollinationDirectives:["Deliver intuitive executive summaries explaining statistical insights in plain English for non-technical stakeholders.","Include actionable business takeaways and risk thresholds alongside quantitative figures."]},creator:{lens:"creator",title:"Everyday Creator & Specialist",subtitle:"Zero Technical Barrier & Universal Idea Synthesis",badgeColor:"#eab308",primaryDomainFocus:"Universal Plain English to Elite Engineering Spec",equalizerDirectives:["Deconstruct ideas into clean, welcoming step-by-step milestones with zero intimidating technical jargon.","Use concrete, relatable everyday analogies so the logic is intuitive and transparent to any age group.","Guarantee that all generated code or instructions are 100% complete, runnable, and explained simply.","Encourage creative exploration while silently infusing production-grade engineering best practices under the hood."],crossPollinationDirectives:["Silently inject production-grade error-handling and security safeguards so the user's project is enterprise-ready from day one.","Provide a clear 'Next Steps' checklist so the creator knows exactly how to test and run their creation."]}};static getEqualizerBlock(n,t=!0){let e=this.PROFILES[n]||this.PROFILES.creator,o=`### Disciplinary Equalizer: ${e.title} (${e.subtitle})
`;return o+=e.equalizerDirectives.map(r=>`- ${r}`).join(`
`),t&&(o+=`

### Cross-Pollination Bridge (Leveling the Field across Design & Engineering)
`,o+=e.crossPollinationDirectives.map(r=>`- ${r}`).join(`
`)),o}static detectDisciplinaryLens(n){let t=n.toLowerCase(),e=(t.match(/\b(design|ui|ux|color|font|typography|spacing|padding|button|card|modal|css|tailwind|figma|animation|framer|motion|accessible|aria|theme|layout|responsive)\b/g)||[]).length,o=(t.match(/\b(architecture|backend|microservice|distributed|concurrency|thread|database|postgres|kafka|redis|api|grpc|latency|scale|docker|kubernetes|security|auth)\b/g)||[]).length,r=(t.match(/\b(data|sql|query|table|dataset|analytics|metrics|dashboard|chart|visualization|statistics|model|regression|correlation|pipeline|etl|pandas)\b/g)||[]).length,a=(t.match(/\b(help me|how to|i want to make|simple|beginner|explain|student|homework|kids|story|recipe|idea|plain english)\b/g)||[]).length;return e>o&&e>r&&e>=2?"designer":r>o&&r>=2?"analyst":o>=2?"architect":a>=1||e===0&&o===0&&r===0?"creator":"architect"}};var W=class{static CONSENSUS_TRAPS=[{trigger:/\b(cache|fast|latency|speed|performance)\b/i,trap:"Generic Redis / Memcached in-memory caching layer",alternative:"Deterministic derived state / zero-copy memory-mapped ring buffers"},{trigger:/\b(scale|scaling|traffic|load)\b/i,trap:"Standard horizontal Kubernetes microservices behind an Nginx round-robin load balancer",alternative:"Cell-based self-contained actor clusters with geographic partition affinity"},{trigger:/\b(database|store|data|storage|persist)\b/i,trap:"Standard monolithic PostgreSQL CRUD with ORM schema migrations",alternative:"Append-only immutable event streams with client-side CRDT materialization"},{trigger:/\b(ui|dashboard|frontend|interface)\b/i,trap:"Cookie-cutter React + Tailwind + Redux admin dashboard with standard cards",alternative:"Spatial canvas / keyboard-driven command palette / reactive streaming event mesh"},{trigger:/\b(ai|llm|agent|bot|rag)\b/i,trap:"Generic naive vector similarity search (RAG) with ChromaDB and langchain",alternative:"Deterministic hierarchical AST grammar masking with dual-process heuristic gatekeepers"},{trigger:/\b(auth|login|security|permission)\b/i,trap:"Standard JWT bearer tokens stored in localStorage with centralized auth server",alternative:"Cryptographic capability-based object tokens (Macaroons / ZK-attestation) verified at network edge"},{trigger:/\b(search|filter|find)\b/i,trap:"Elasticsearch / OpenSearch cluster with polling re-indexers",alternative:"Probabilistic roaring bitmaps / inverted bloom index embedded directly in SSD NVMe pages"}];static BISOCIATION_DOMAINS=[{domain:"Cellular Immunology & Apoptosis",mechanism:"Decoy antigen receptors and programmed cell death (apoptosis) for toxic state elimination.",analogy:"Instead of garbage collection or memory leak debugging, processes have a genetically programmed lifespan and self-terminate harmlessly after fulfilling their burst."},{domain:"Mycelial Transport Networks",mechanism:"Decentralized nutrient-driven pressure gradients without a central routing ledger.",analogy:"Instead of a centralized message broker, nodes push work along highest-conductivity gradients; dead nodes wither while congested nodes naturally shed load."},{domain:"Quantum Superposition & Wave Interference",mechanism:"Simultaneous speculative multi-path calculation where erroneous paths undergo destructive interference.",analogy:"Instead of deciding which branch to execute, evaluate both concurrently in lightweight SIMD lanes, cancelling out the failing outcome without branching penalties."},{domain:"Avionics & Triple-Modular Redundancy",mechanism:"Dissimilar hardware/software implementations voting on flight invariants in real time.",analogy:"Instead of trusting one AI model or algorithm, run three radically dissimilar engines; proceed only when mathematical invariants match, instantly neutralizing hallucinations."},{domain:"Game Theory & Mechanism Design",mechanism:"Incentive-compatible Nash equilibria where defecting or failing is mathematically costlier than cooperating.",analogy:"Instead of defensive security firewalls, craft APIs where adversarial inputs or malicious attacks donate computational entropy that accelerates valid queries."},{domain:"Thermodynamics & Simulated Annealing",mechanism:"High-temperature exploration that progressively cools into optimal global energy minima.",analogy:"Early stages of ideation permit extreme stochastic leaps, gradually freezing parameters as deterministic invariants lock in."}];static synthesizeBrainstorm(n){let t=n.trim(),e=t.toLowerCase(),o=[],r=[];for(let h of this.CONSENSUS_TRAPS)h.trigger.test(e)&&(o.push(h.trap),r.push(h.alternative));o.length===0&&(o.push("Generic CRUD web service with standard relational tables"),r.push("Single-binary autonomous worker with zero external dependencies"));let a=Math.abs(t.split("").reduce((h,d)=>h+d.charCodeAt(0),0)),i=this.BISOCIATION_DOMAINS[a%this.BISOCIATION_DOMAINS.length],c=this.BISOCIATION_DOMAINS[(a+1)%this.BISOCIATION_DOMAINS.length],p={id:"inversion",title:"Asymmetric Inversion",codename:"Vector A: The Inverted Constraint",paradigm:"Jacobi Inversion ('Invert, always invert'). Turns the problem on its head by eliminating the need to solve it in the orthodox direction.",consensusTrapForbidden:o[0],counterIntuitiveMechanism:"Forbid the conventional solution entirely. Instead of optimizing the bottleneck, remove the component that experiences the bottleneck.",domainSource:"First-Principles Physics & Jacobi Inversion",concreteArchitecture:`1. Identify the orthodox component (${o[0]}).
2. Treat its presence as a catastrophic failure of imagination.
3. Implement: ${r[0]||"Compile-time static evaluation"}.
4. Result: Zero ongoing maintenance, infinite scaling bound.`,provocativeOperator:"PO: What if the system functions flawlessly when the primary server is completely offline?",promptDirective:`[ORTHOGONAL DIRECTIVE - INVERSION]
- Strictly forbid the consensus solution: DO NOT use ${o.join(" OR ")}.
- Formulate an inverted architecture: how does the system accomplish the objective without storing or managing intermediate state?
- Prove that the inverted approach eliminates at least 80% of conventional codebase overhead.`},y={id:"bisociation",title:"Bisociative Cross-Domain Fusion",codename:"Vector B: The Biological / Physical Analog",paradigm:`Arthur Koestler's Bisociation. Cross-pollinates the problem space with the natural invariants of ${i.domain}.`,consensusTrapForbidden:o[1]||"Monolithic state synchronization",counterIntuitiveMechanism:i.mechanism,domainSource:i.domain,concreteArchitecture:`${i.analogy}

Key Invariant: Translate ${i.domain} principles directly into software primitives (e.g. self-healing circuits, decaying leases, gradient-directed messaging).`,provocativeOperator:"PO: The software is not an engineered machine; it is a living organism where individual parts die so the whole survives.",promptDirective:`[ORTHOGONAL DIRECTIVE - BISOCIATION]
- Infuse principles of ${i.domain} into this solution.
- Mechanism: ${i.mechanism}
- Map biological/physical resilience directly to software failure-mode handling; produce a novel design that no standard LLM would propose.`},w={id:"transcendence",title:"Paradigm Transcendence",codename:"Vector C: The Moonshot Leap",paradigm:"Eliminates the entire problem category through radical abstraction or zero-knowledge formal verification.",consensusTrapForbidden:"Iterative incremental optimization of existing architectures",counterIntuitiveMechanism:"Shift from reactive orchestration to deterministic mathematical certainty (proof-carrying code, zero-state execution).",domainSource:"Theoretical Computer Science & Cryptographic Truth",concreteArchitecture:"Replace run-time coordination with compile-time mathematical proofs or client-side autonomous edge actors. Zero central authority, zero synchronization latency.",provocativeOperator:"PO: The operation takes 0 milliseconds because the answer is already mathematically bounded before the request is issued.",promptDirective:`[ORTHOGONAL DIRECTIVE - PARADIGM TRANSCENDENCE]
- Discard conventional industry incrementalism.
- Synthesize a radical next-generation architecture that renders today's standard stack obsolete.
- Structure the solution as a self-verifying, zero-coordination execution fabric with formal mathematical proof of correctness.`},b=`### PROMPTSMITH AUTONOMOUS LATERAL BRAINSTORMING BLUEPRINT
**Objective**: Shatter conventional consensus thinking and engineer an unprecedented orthogonal path.

#### Consensus Traps Strictly Forbidden
Standard AI models will instinctively propose:
${o.map((h,d)=>`  ${d+1}. [FORBIDDEN] ${h}`).join(`
`)}
*Rule: Do not propose, reference, or iterate upon any of the forbidden consensus tropes above.*

#### Lateral Vector A: The Inverted Constraint (Jacobi/Munger)
- **Premise**: ${p.paradigm}
- **Provocation**: ${p.provocativeOperator}
- **Architectural Shift**: ${p.concreteArchitecture.replace(/\n/g," ")}

#### Lateral Vector B: Bisociative Collision (${i.domain})
- **Biological/Physical Source**: ${i.domain}
- **Mechanism**: ${i.mechanism}
- **Software Embodiment**: ${i.analogy}

#### Lateral Vector C: Paradigm Transcendence (The Moonshot)
- **Provocation**: ${w.provocativeOperator}
- **Mechanism**: Replace runtime coordination with deterministic edge invariants or zero-knowledge mathematical guarantees.

#### Synthesis Mandate
1. Present the 3 orthogonal options in an executive comparison matrix (Trade-offs, Novelty Index 1-100, Scalability Ceiling).
2. Deep-dive into the single most breakthrough path, delivering concrete runnable architecture, interfaces, and mathematical bounds.
3. Highlight precisely why this solution out-thinks standard AI outputs by at least an order of magnitude.`;return{challenge:t,consensusAttractors:o,coreContradiction:{parameterA:"Maximum Speed & Expressivity",parameterB:"Zero Operational Complexity & Overhead",trizResolution:"TRIZ Principle 10 (Prior Action) combined with Principle 28 (Mechanics Substitution)"},vectors:[p,y,w],masterBrainstormPrompt:b,recommendedPath:"inversion"}}};var ie=class{static analyzeFutureReadiness(n){let t=n.trim(),e=t.toLowerCase(),o=t.split(/\s+/).filter(Boolean),r=/\b(stop when|terminate when|success criteria|acceptance criteria|done criteria|definition of done)\b/i.test(t),a=/\b(do not explore|prune|strictly limit search|focus exclusively on|ignore alternatives)\b/i.test(t),i=/\b(invariant|precondition|postcondition|formal verification|assert|provable|deterministic)\b/i.test(t),c=/\b(agent|handoff|protocol|role isolation|payload schema|byzantine|consensus)\b/i.test(t),p=/(===|---|```context|\[SYSTEM|### Specification)/i.test(t),y=65,w=[],b=[],h="Medium";r&&a?(h="Low",y+=12,b.push("Definitive Termination Criteria bounded")):(h="High",w.push("Missing explicit termination condition: Deep reasoning models risk infinite exploration loops."),y-=8);let d="Medium";p&&o.length>20?(d="Low",y+=10,b.push("Anchor Signposts resist attention decay")):(d="High",w.push("Lack of structural anchors: Multi-million token context engines will suffer premise drift."),y-=7);let x=55;i?(x=95,y+=13,b.push("Formal Hoare verification invariants present")):w.push("Informal specification: Future neuro-symbolic solvers cannot mathematically verify output.");let P=50;return c&&(P=92,b.push("Multi-agent swarm handoff contracts specified")),{preemptiveScore:Math.max(30,Math.min(100,y)),driftRisk:d,searchLoopRisk:h,formalVerifiabilityScore:x,swarmReadinessScore:P,identifiedVulnerabilities:w,preemptiveInvariants:b,futureProofEnvelope:`### UNIVERSAL FUTURE-MODEL PREEMPTION ENVELOPE (NEXT-GEN AGIS & SWARMS)
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
- **Anchor Invariant**: Re-anchor all execution steps directly against the primary objective; reject premise drift across long token horizons.`}}};var R=class{static FILLER_PATTERNS=[/\b(can you please|could you please|please kindly|i would like you to|i want you to)\b/gi,/\b(as an ai language model|as a helpful assistant|in order to help me)\b/gi,/\b(feel free to|make sure that you|try your best to)\b/gi,/\b(basically|essentially|actually|obviously|literally)\b/gi];static ROLE_PATTERNS=[/\b(you are (a|an)|act as (a|an)|your role is|expert in|specialist in)\b/i,/<role>[\s\S]*?<\/role>/i,/### Role/i];static CONSTRAINT_PATTERNS=[/\b(do not|never|must not|only|strictly|ensure|avoid|limit to|maximum of|minimum of)\b/gi,/<constraints>[\s\S]*?<\/constraints>/i,/### Constraints/i];static SCHEMA_PATTERNS=[/\b(json|yaml|xml|markdown|table|schema|format as|output format)\b/i,/<output_format>[\s\S]*?<\/output_format>/i,/```(json|yaml|markdown|csv)/i];static REASONING_PATTERNS=[/\b(step[- ]by[- ]step|think|reason|verify|analyze|deliberate|chain[- ]of[- ]thought)\b/i,/<thinking>[\s\S]*?<\/thinking>/i];static analyze(n,t="Cursor / Claude Code"){let e=n.trim();if(!e)return this.emptyMetrics();let r=e.split(/\s+/).filter(Boolean).length,a=Math.ceil(r*1.33),i=0;this.ROLE_PATTERNS.some(F=>F.test(e))?i=20:/\b(senior|engineer|architect|auditor|specialist)\b/i.test(e)&&(i=12);let c=0,p=e.match(new RegExp(this.CONSTRAINT_PATTERNS[0],"gi"))||[];p.length>=3?c=25:p.length>0&&(c=p.length*8);let y=0;this.SCHEMA_PATTERNS.some(F=>F.test(e))?y=20:/\b(list|bullet|code|diff)\b/i.test(e)&&(y=10);let w=0;this.REASONING_PATTERNS.some(F=>F.test(e))&&(w+=10),/\b(if unsure|edge case|exception|boundary|fallback)\b/i.test(e)&&(w+=5);let b=0;for(let F of this.FILLER_PATTERNS){let U=e.match(F);U&&(b+=U.length)}let h=Math.max(0,20-b*4),d=b*3,x=Math.max(15,a-d),P=Math.max(0,Math.round((a-x)/a*100)),G=Math.min(100,Math.max(10,i+c+y+w+h)),D=$.getDomainEnrichment(e),N=D?D.domain:"General Reasoning & Code",A=[],S=[],O=[];D&&A.push(`Recognized ${D.domain} domain patterns`),i>=15?A.push("Strong persona & system identity"):O.push("Explicit System Persona / Role Boundary"),c>=18?A.push("Well-defined operational boundaries"):S.push("Vulnerable to scope-drift (insufficient negative constraints)"),y>=15?A.push("Explicit output schema defined"):O.push("Deterministic Output Schema (JSON/Markdown tags)"),h<14?S.push(`Contains ${b} conversational filler phrases`):A.push("High token-to-signal density");let C=X.analyzeCognitivePattern(e,N);A.push(`Cognitive calibration: ${C.audienceLabel} (Grade ${C.fleschKincaidGrade})`);let j=Y.detectDisciplinaryLens(e),B=Y.PROFILES[j];A.push(`Equalizer Lens: ${B.title} (${B.primaryDomainFocus})`);let m=Z.benchmarkPrompt(e),k=W.synthesizeBrainstorm(e),H=ie.analyzeFutureReadiness(e);return{iqScore:G,wordCount:r,estimatedTokens:a,optimizedTokens:x,tokenSavingsPercent:P,constraintScore:c,roleScore:i,schemaScore:y,evasionScore:w,efficiencyScore:h,detectedDomain:N,targetRuntime:t,strengths:A,weaknesses:S,missingElements:O,benchmarks:m,cognitive:C,discipline:j,equalizer:B,brainstorm:k,future:H}}static emptyMetrics(){return{iqScore:0,wordCount:0,estimatedTokens:0,optimizedTokens:0,tokenSavingsPercent:0,constraintScore:0,roleScore:0,schemaScore:0,evasionScore:0,efficiencyScore:0,detectedDomain:"None",targetRuntime:"Cursor / Claude Code",strengths:[],weaknesses:["Prompt is empty"],missingElements:["All core components"],benchmarks:Z.benchmarkPrompt(""),cognitive:X.analyzeCognitivePattern(""),discipline:"creator",equalizer:Y.PROFILES.creator,brainstorm:W.synthesizeBrainstorm(""),future:ie.analyzeFutureReadiness("")}}};var z=class{static enhance(n,t="precision",e="Cursor / Claude Code",o,r){let a=n.trim();if(!a)return"";let i=$.getDomainEnrichment(a),c=i?i.domain:"General",p=X.analyzeCognitivePattern(a,c),y=o||p.audience,w=this.getScaffoldingBlock(y),b=r||Y.detectDisciplinaryLens(a),h=Y.getEqualizerBlock(b,!0),d="";switch(t){case"claude_xml":d=this.enhanceClaudeXml(a,e,i);break;case"openai_o":d=this.enhanceOpenAiReasoning(a,e,i);break;case"gpt4o_schema":d=this.enhanceGpt4oSchema(a,e,i);break;case"gemini_context":d=this.enhanceGeminiContext(a,e,i);break;case"deepseek_r1":d=this.enhanceDeepSeekR1(a,e,i);break;case"grok_direct":d=this.enhanceGrokDirect(a,e,i);break;case"llama_system":d=this.enhanceLlamaSystem(a,e,i);break;case"qwen_coder":d=this.enhanceQwenCoder(a,e,i);break;case"cursor_composer":d=this.enhanceCursorComposer(a,e,i);break;case"windsurf_cascade":d=this.enhanceWindsurfCascade(a,e,i);break;case"claude_code":d=this.enhanceClaudeCode(a,e,i);break;case"copilot_edits":d=this.enhanceCopilotEdits(a,e,i);break;case"aider_diff":d=this.enhanceAiderDiff(a,e,i);break;case"devin_fullstack":d=this.enhanceDevinFullstack(a,e,i);break;case"cline_mcp":d=this.enhanceClineMcp(a,e,i);break;case"precision":d=this.enhancePrecision(a,e,i);break;case"adversarial":d=this.enhanceAdversarial(a,e,i);break;case"executive":d=this.enhanceExecutive(a,i);break;case"orthogonal_brainstorm":d=W.synthesizeBrainstorm(a).masterBrainstormPrompt;break;case"future_deep_reasoner":d=this.enhanceFutureReasoner(a);break;case"future_agent_swarm":d=this.enhanceFutureSwarm(a);break;case"future_formal_verifier":d=this.enhanceFutureVerifier(a);break;case"future_infinite_context":d=this.enhanceFutureInfinite(a);break;default:d=this.enhancePrecision(a,e,i);break}return h&&!d.includes("### Disciplinary Equalizer")&&(t==="claude_xml"?d+=`

<disciplinary_equalizer>
${h}
</disciplinary_equalizer>`:d+=`

${h}`),y==="explorer"?t==="claude_xml"?d+=`

<audience_scaffolding>
${w}
</audience_scaffolding>`:d+=`

${w}`:y==="architect"&&t!=="openai_o"&&t!=="deepseek_r1"?d+=`

${w}`:y==="executive"&&t!=="executive"&&(d+=`

${w}`),d}static resolveSystemRole(n,t){return n?n.domain.includes("Meta-Prompt")?`Frontier Prompt Architect & Agent Specification Engineer operating in ${t}`:n.category==="science"||n.domain.includes("Physics")?`Theoretical & Applied Physicist / Empirical Systems Scientist operating in ${t}`:n.domain.includes("Mathematical")?`Pure & Applied Mathematician / Formal Logic Verifier operating in ${t}`:n.category==="operations"||n.domain.includes("Real-World")?`Principal Operations Commander & Crisis Response Strategist operating in ${t}`:n.domain.includes("Human Communication")?`Master Communicator & Cognitive Scaffolding Strategist operating in ${t}`:n.category==="business"?`Principal Strategy Architect & Quantitative Financial Modeler operating in ${t}`:n.category==="legal"?`Senior Commercial Counsel & Regulatory Compliance Specialist operating in ${t}`:`Senior Staff Architect & Systems Verifier operating in ${t}. Specialization: ${n.domain}`:`Frontier Software Architect & Empirical Systems Verifier operating in ${t}`}static resolveOutputSpec(n){return n?n.recommendedOutputFormat:"Deliver self-contained, fully resolved technical artifacts followed by an explicit verification test suite."}static stripFiller(n){return n.replace(/\b(can you please|could you please|please kindly|i would like you to|i want you to)\b/gi,"").replace(/\b(as an ai language model|as a helpful assistant|in order to help me)\b/gi,"").replace(/\b(feel free to|make sure that you|try your best to)\b/gi,"").replace(/\b(basically|essentially|actually|obviously|literally)\b/gi,"").replace(/\s+/g," ").trim()}static enhancePrecision(n,t,e){let o=this.stripFiller(n),r=this.resolveSystemRole(e,t),a=this.resolveOutputSpec(e),i=e?e.injectedConstraints.map(c=>`- [${e.domain}] ${c}`).join(`
`):"";return`<context>
You are ${r}. Execute the directive with deterministic precision, grounded empirical correctness, and strict adherence to physical, mathematical, and domain constraints.
</context>

<task>
${o}
</task>

<constraints>
- Maintain production-grade correctness with zero unverified assumptions or unstated mock implementations.
- Obey all governing physical conservation laws, mathematical axioms, and operational realities.
- Provide self-contained, drop-in deliverables with explicit error-handling and boundary edge cases.
- NEVER include meta-commentary, apology preambles, or conversational transitions before or after deliverables.
${i?i+`
`:""}- Test and verify all assertions internally before labeling any solution correct.
</constraints>

<output_format>
${a}
</output_format>`}static enhanceClaudeXml(n,t,e){let o=this.stripFiller(n),r=this.resolveSystemRole(e,t),a=this.resolveOutputSpec(e),i=e?e.injectedConstraints.map(c=>`  * ${c}`).join(`
`):"";return`<system_role>
${r}
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
${i?i+`
`:""}- If edge-case ambiguities exist, implement the most resilient industry-standard pattern and document invariants.
</rules>

<output_specification>
${a}
</output_specification>`}static enhanceOpenAiReasoning(n,t,e){let o=n.replace(/\b(think step by step|walk through step by step|let's think step by step|explain your reasoning step by step)\b/gi,"").replace(/\s+/g," ").trim(),r=this.resolveSystemRole(e,t),a=this.resolveOutputSpec(e);return`### Problem Specification
${o}

### Domain Jurisdiction & Invariants
- Role Context: ${r}
${e?`- Domain: ${e.domain}
`+e.injectedConstraints.map(i=>`  - ${i}`).join(`
`):""}
- Invariant Criteria: Deterministic correctness across all physical, mathematical, and operational edge cases.
- Grounded Execution: Do NOT provide superficial pseudocode or speculative statements; provide fully realized, verified artifacts.

### Formal Acceptance & Falsification Verification
- Target Format: ${a}
- Provide 3 rigorous verification assertions testing:
  1. Nominal baseline state.
  2. Boundary threshold / singularity limit.
  3. Falsification stress test attempting to break the hypothesis or constraints.`}static enhanceGpt4oSchema(n,t,e){let o=this.stripFiller(n);return`## Objective & System Context
Act as a Senior Staff Engineer in ${t}. Execute the objective with high token efficiency and structured markdown output.

## Input Prompt
${o}

## Hard Constraints
- Output must be structured under clean markdown headings (## Architecture, ## Implementation, ## Verification).
- Code snippets must include language tags and complete variable types.
- Zero markdown backticks surrounding non-code conversational text.
${e?e.injectedConstraints.map(r=>`- ${r}`).join(`
`):""}

## Few-Shot Demonstration Pattern
Input: Calculate verified hash digest of payload
Output: 
\`\`\`typescript
import * as crypto from 'crypto';
export function hashPayload(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}
\`\`\``}static enhanceGeminiContext(n,t,e){let o=this.stripFiller(n);return`[SYSTEM INSTRUCTION: FRONTIER GEMINI RUNTIME]
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
- Avoid repetitive disclaimers or speculative non-answers.`}static enhanceDeepSeekR1(n,t,e){let o=n.replace(/\b(think step by step|walk through step by step|let's think step by step)\b/gi,"").replace(/\s+/g," ").trim();return`### Mathematical & Algorithmic Contract
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
- Adversarial fault injection and recovery`}static enhanceGrokDirect(n,t,e){let o=this.stripFiller(n);return`### MISSION DIRECTIVE (ZERO FLUFF)
Environment: ${t}
Command: ${o}

### EMPIRICAL EXECUTION RULES
- Deliver direct, unhedged technical solutions backed by empirical evidence and ground truth.
- Zero corporate boilerplate, safety disclaimers, or introductory fluff.
- If existing code or assumptions are flawed, state the exact flaw bluntly and provide the working replacement.
${e?`- Anchor in domain truth: ${e.injectedConstraints.join("; ")}`:""}

### DELIVERABLE
Production-ready code and exact execution verification steps.`}static enhanceLlamaSystem(n,t,e){let o=this.stripFiller(n);return`<|begin_of_text|><|start_header_id|>system<|end_header_id|>
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
<|eot_id|><|start_header_id|>assistant<|end_header_id|>`}static enhanceQwenCoder(n,t,e){let o=this.stripFiller(n);return`// Target: ${t}
// Domain: ${e?e.domain:"General Engineering"}
// Instruction: Implement the following specification in production-ready code with complete imports, strict types, and unit tests.

/* SPECIFICATION
${o}
*/

// REQUIREMENTS
// 1. Drop-in replacement with zero omitted logic (no '// TODO' or 'implement here').
// 2. Strict type annotations and robust error propagation.
// 3. Include a runnable test suite asserting all boundary invariants.`}static enhanceCursorComposer(n,t,e){let o=this.stripFiller(n);return`### Cursor Composer Multi-File Task
Target Workspace: ${t}

### Request Summary
${o}

### Modification Guidelines
- Edit only the targeted files and symbols required for this task.
- Preserve existing project style, comments, and conventions.
- Format all code changes as full, drop-in replacement blocks or unambiguous edits.
${e?`- Enforce domain constraints: ${e.injectedConstraints.join("; ")}`:""}

### Verification Step
Run local workspace tests or compilation checks to verify zero regression.`}static enhanceWindsurfCascade(n,t,e){let o=this.stripFiller(n);return`### Cascade Flow Task Plan
Context: Operating within Windsurf IDE (${t})

### Task Objective
${o}

### Cascade Execution Sequence
Step 1: Inspect relevant files and dependency manifests in the workspace.
Step 2: Implement the requested functionality with atomic, verified file edits.
Step 3: Execute workspace terminal checks to confirm zero lint, type, or runtime errors.

### Constraints
- Zero conversational filler; proceed directly with tool actions.
- Document any modified exported interfaces cleanly.`}static enhanceClaudeCode(n,t,e){return`Task for Claude Code CLI:
${this.stripFiller(n)}

Operational Directives:
- Inspect the codebase using ripgrep and file read tools before modifying files.
- Apply surgical edits to files using standard diff-compatible modifications.
- Run the project test suite (e.g. npm test, cargo test, pytest) to verify changes pass cleanly.
- Keep terminal output concise and commit-ready.`}static enhanceCopilotEdits(n,t,e){let o=this.stripFiller(n);return`Scope: Tightly focused inline edit in active editor context (${t})

Task:
${o}

Guidelines:
- Modify only the required functions/lines in the active files.
- Do NOT refactor or reformat unrelated code.
- Match existing naming, indentation, and docstring conventions.`}static enhanceAiderDiff(n,t,e){return`Aider Session Directive:
${this.stripFiller(n)}

Rules for Git Commit:
1. Make complete, working changes to the relevant files.
2. Run test verification command before completing.
3. Formulate a concise, imperative Git commit message summarizing the change (e.g. 'feat: implement ...' or 'fix: resolve ...').`}static enhanceDevinFullstack(n,t,e){let o=this.stripFiller(n);return`### Devin Autonomous Engineering Specification
Project Environment: ${t}

### Milestone 1: Requirement Analysis & Investigation
${o}

### Milestone 2: Implementation & File Edits
- Implement all required changes across backend, frontend, and configuration files.
- Ensure all environment variables and secrets are handled securely without hardcoding.

### Milestone 3: End-to-End Verification
- Launch local test server or test suite in shell.
- Verify browser or API response contracts match expectations.
- Document any setup instructions in README if dependencies were added.`}static enhanceClineMcp(n,t,e){return`Cline Agent MCP Execution Directive:
Task: ${this.stripFiller(n)}

MCP Tool Execution Protocol:
1. Use file read tools to inspect exact line numbers before editing.
2. Apply atomic write_to_file or apply_diff tool calls.
3. Use execute_command to run build/lint checks after edits.
4. Stop and report when all acceptance criteria are verified.`}static enhanceAdversarial(n,t,e){let o=e?e.reasoningChecklist.map((r,a)=>`${a+1}. ${r}`).join(`
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
${n}
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
</required_output>`}static enhanceExecutive(n,t){return`### Context & Strategic Objective
${n}

### Constraints & Commercial Parameters
- Audience: Enterprise Technical Decision-Maker / Principal Architect / Managing Director.
- Format: Strict 3-sentence high-signal conversion framework:
  1. Proven Technical Capability & Value Wedge (backed by verifiable benchmark data).
  2. Frictionless Integration Path (zero migration overhead, drop-in SDK/MCP).
  3. Low-Commitment Concrete Call-to-Action (pilot activation link or 15-minute verification sandbox).
- Tone: Crisp, commanding, professional, zero marketing hyperbole.
${t?`- Industry Anchor: ${t.domain}`:""}`}static getScaffoldingBlock(n){switch(n){case"explorer":return`### Audience Scaffolding: Young Student & Beginner Friendly (All Ages)
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
- Warn against common edge cases, boundary failures, and concurrency hazards.`}}};var M=te(require("vscode")),L=te(require("fs")),T=te(require("path")),E=class{static inspectWorkspace(){let n=M.workspace.workspaceFolders,t=M.window.activeTextEditor,e=[],o="Standalone Editor",r="";if(n&&n.length>0){r=n[0].uri.fsPath,o=n[0].name;let y=T.join(r,"package.json");if(L.existsSync(y))try{let w=JSON.parse(L.readFileSync(y,"utf-8")),b={...w.dependencies||{},...w.devDependencies||{}},h=["typescript","react","next","vue","svelte","tailwindcss","express","fastify","nestjs","prisma","drizzle-orm","zod","vitest","jest","playwright","esbuild","vite","firebase-functions","firebase-admin","stripe"];for(let d of h)b[d]&&e.push(`${d}@${String(b[d]).replace(/^[\^~]/,"")}`);e.length===0&&e.push("Node.js / npm")}catch{e.push("Node.js")}L.existsSync(T.join(r,"tsconfig.json"))&&!e.some(w=>w.startsWith("typescript"))&&e.push("TypeScript (tsconfig)"),(L.existsSync(T.join(r,"pyproject.toml"))||L.existsSync(T.join(r,"requirements.txt")))&&e.push("Python"),L.existsSync(T.join(r,"Cargo.toml"))&&e.push("Rust (Cargo)"),L.existsSync(T.join(r,"go.mod"))&&e.push("Go (go.mod)")}let a="None",i="plaintext",c=[];if(t){i=t.document.languageId,a=r?T.relative(r,t.document.uri.fsPath).replace(/\\/g,"/"):T.basename(t.document.uri.fsPath);let y=t.document.getText().slice(0,12e3),w=[/\b(?:export\s+)?(?:async\s+)?function\s+([a-zA-Z0-9_]+)/g,/\b(?:export\s+)?(?:class|interface|type|enum)\s+([a-zA-Z0-9_]+)/g,/\bdef\s+([a-zA-Z0-9_]+)\s*\(/g,/\bfn\s+([a-zA-Z0-9_]+)\s*[<(]/g,/\bfunc\s+(?:\([^)]+\)\s*)?([a-zA-Z0-9_]+)\s*\(/g];for(let b of w){let h;for(;(h=b.exec(y))!==null;)h[1]&&!c.includes(h[1])&&c.length<14&&c.push(h[1])}}let p=["### Grounded Workspace & File Context"];return p.push(`- Workspace: \`${o}\``),a!=="None"&&p.push(`- Active File: \`${a}\` (Language: \`${i}\`)`),e.length>0&&p.push(`- Verified Stack & Packages: ${e.slice(0,10).map(y=>`\`${y}\``).join(", ")}`),c.length>0&&p.push(`- Active File Symbols: ${c.map(y=>`\`${y}\``).join(", ")}`),p.push("- Grounding Rule: Reuse existing project packages and symbol signatures above; do not invent unverified libraries."),{hasWorkspace:!!(n&&n.length>0),workspaceName:o,activeFileRelative:a,languageId:i,detectedStack:e,extractedSymbols:c,contextSummaryBlock:p.join(`
`)}}static inspectDiagnosticsAndDiff(){let n=M.window.activeTextEditor,t=M.workspace.workspaceFolders,e=t&&t.length>0?t[0].uri.fsPath:"",o=[],r=0;if(n){let i=n.document.uri,c=M.languages.getDiagnostics(i).filter(y=>y.severity===M.DiagnosticSeverity.Error||y.severity===M.DiagnosticSeverity.Warning),p=e?T.relative(e,i.fsPath).replace(/\\/g,"/"):T.basename(i.fsPath);for(let y of c.slice(0,8)){r++;let w=y.range.start.line+1,b=y.severity===M.DiagnosticSeverity.Error?"ERROR":"WARN",h="";try{h=n.document.lineAt(y.range.start.line).text.trim()}catch{h=""}o.push(`- [${b}] \`${p}:${w}\`: ${y.message}${h?` | Line: \`${h.slice(0,110)}\``:""}`)}}if(o.length===0){let i=M.languages.getDiagnostics();for(let[c,p]of i){let y=p.filter(b=>b.severity===M.DiagnosticSeverity.Error);if(y.length===0)continue;let w=e?T.relative(e,c.fsPath).replace(/\\/g,"/"):T.basename(c.fsPath);for(let b of y.slice(0,4))if(r++,o.push(`- [ERROR] \`${w}:${b.range.start.line+1}\`: ${b.message}`),o.length>=8)break;if(o.length>=8)break}}if(o.length===0)return{count:0,block:`### Active IDE Diagnostics
- Status: Zero active compiler or linter errors detected in workspace.
- Directive: Preserve zero-warning compile state and strict type safety.`};let a=[`### Active IDE Compiler & Linter Diagnostics (${r} Issue${r===1?"":"s"})`,...o,"- Remediation Contract: Resolve the exact file:line diagnostic errors above without breaking adjacent type signatures."];return{count:r,block:a.join(`
`)}}static lintAmbiguities(n){let t=(n||"").trim(),e=[];return t&&(/\b(typescript|javascript|python|rust|go|golang|java|c\+\+|c#|sql|html|css|react|node|bash|powershell)\b/i.test(t)||e.push({id:"missing_runtime",severity:"HIGH",label:"No target language or runtime specified",fixSnippet:"Target Runtime: Use strict TypeScript / Node.js with explicit type annotations."}),/\b(error|exception|fallback|null|empty|timeout|retry|edge case|boundary|invalid)\b/i.test(t)||e.push({id:"missing_error_bounds",severity:"MEDIUM",label:"Missing error handling & boundary conditions",fixSnippet:"Boundary & Error Handling: Explicitly handle null/empty inputs, timeouts, and invalid states without silent failures."}),/\b(json|xml|markdown|diff|file|function|schema|test|interface|return|deliverable)\b/i.test(t)||e.push({id:"missing_output_contract",severity:"MEDIUM",label:"No explicit output format or deliverable contract",fixSnippet:"Output Contract: Return complete, drop-in production code with zero placeholders or elided sections."}),/\b(test|verify|assert|unit test|benchmark|invariant|prove|validation)\b/i.test(t)||e.push({id:"missing_verification",severity:"LOW",label:"No verification or unit test assertion requested",fixSnippet:"Verification: Include deterministic unit test assertions covering nominal and boundary edge cases."})),e}static async exportWorkspaceRulesFile(n,t,e=!1){let o=M.workspace.workspaceFolders;if(!o||o.length===0)return{ok:!1,message:"Open a project folder in your IDE first to export "+n+"."};let r=o[0].uri.fsPath,a=T.join(r,n),i=T.dirname(a);L.existsSync(i)||L.mkdirSync(i,{recursive:!0});let c=this.inspectWorkspace(),p=`# ${n} - Generated & Compacted by PromptSmith
# Workspace: ${c.workspaceName} | Stack: ${c.detectedStack.join(", ")||c.languageId}

`,y=["## Core Engineering Invariants","- Write complete, production-ready code with zero TODO placeholders or truncated sections.","- Preserve existing project module boundaries, naming conventions, and dependency versions.","- Validate all external inputs, boundary conditions, and error states explicitly.","- Prefer small, deterministic, testable functions over deeply nested stateful logic."].join(`
`),w=t&&t.trim()?`${p}${c.contextSummaryBlock}

${y}

## Active Task & Prompt Blueprint
${t.trim()}
`:`${p}${c.contextSummaryBlock}

${y}
`;try{if(L.writeFileSync(a,w,"utf-8"),!e){let b=await M.workspace.openTextDocument(a);await M.window.showTextDocument(b,{preview:!1})}return{ok:!0,filePath:a,message:`Wrote compacted rules to ${n} (${w.length} chars).`}}catch(b){return{ok:!1,message:`Failed to write ${n}: ${b instanceof Error?b.message:String(b)}`}}}static detectSecrets(n){let t=(n||"").trim();if(!t)return[];let e=[{label:"OpenAI / Anthropic Key (sk-...)",regex:/\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{16,}\b/g},{label:"GitHub Token (ghp_/github_pat_)",regex:/\b(?:ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g},{label:"AWS Access Key (AKIA...)",regex:/\bAKIA[0-9A-Z]{16}\b/g},{label:"Google API Key (AIza...)",regex:/\bAIza[0-9A-Za-z_-]{35}\b/g},{label:"Slack Token (xoxb/xoxp)",regex:/\bxox[baprs]-[0-9A-Za-z-]{10,}\b/g},{label:"Stripe Live Key (sk_live_/rk_live_)",regex:/\b(?:sk|rk)_live_[0-9A-Za-z]{16,}\b/g},{label:"Bearer / JWT Token",regex:/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g},{label:"Database URI with Password",regex:/\b(?:postgres|postgresql|mysql|mongodb(?:\+srv)?|redis):\/\/[^:\s]+:[^@\s]+@[^\s]+/gi},{label:"Private Key Block",regex:/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g}],o=[];for(let r of e){let a=t.match(r.regex);a&&a.length>0&&o.push({label:r.label,count:a.length})}return o}static scrubSecrets(n){let t=n||"",e=0,o=[{regex:/\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{16,}\b/g,token:"[REDACTED_API_KEY]"},{regex:/\b(?:ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g,token:"[REDACTED_GITHUB_TOKEN]"},{regex:/\bAKIA[0-9A-Z]{16}\b/g,token:"[REDACTED_AWS_KEY]"},{regex:/\bAIza[0-9A-Za-z_-]{35}\b/g,token:"[REDACTED_GCP_KEY]"},{regex:/\bxox[baprs]-[0-9A-Za-z-]{10,}\b/g,token:"[REDACTED_SLACK_TOKEN]"},{regex:/\b(?:sk|rk)_live_[0-9A-Za-z]{16,}\b/g,token:"[REDACTED_STRIPE_KEY]"},{regex:/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g,token:"[REDACTED_JWT]"},{regex:/\b((?:postgres|postgresql|mysql|mongodb(?:\+srv)?|redis):\/\/[^:\s]+:)([^@\s]+)(@[^\s]+)/gi,token:"$1[REDACTED_DB_PASS]$3"},{regex:/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----[\s\S]*?-----END (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g,token:"[REDACTED_PRIVATE_KEY_BLOCK]"}];for(let r of o){let a=t.match(r.regex);a&&a.length>0&&(e+=a.length,t=t.replace(r.regex,r.token))}return{scrubbed:t,redactedCount:e}}static detectActiveModelHook(){let n=(M.env.appName||"").toLowerCase(),t=M.workspace.workspaceFolders,e=t&&t.length>0?t[0].uri.fsPath:"";if(n.includes("cursor"))return{hostIde:"Cursor IDE",detectedModelLabel:"Cursor Composer (Claude 3.7)",recommendedProfile:"cursor_composer",nativeRuleFile:".cursorrules"};if(n.includes("windsurf"))return{hostIde:"Windsurf IDE",detectedModelLabel:"Windsurf Cascade",recommendedProfile:"windsurf_cascade",nativeRuleFile:".windsurfrules"};if(n.includes("antigravity"))return{hostIde:"Antigravity IDE",detectedModelLabel:"Gemini 2.5 Pro Agent",recommendedProfile:"gemini_context",nativeRuleFile:"CLAUDE.md"};let o=M.extensions.all.map(r=>r.id.toLowerCase());if(o.some(r=>r.includes("claude-code")||r.includes("anthropic")))return{hostIde:"VS Code",detectedModelLabel:"Claude Code CLI",recommendedProfile:"claude_code",nativeRuleFile:"CLAUDE.md"};if(o.some(r=>r.includes("claude-dev")||r.includes("cline")||r.includes("roo-cline")))return{hostIde:"VS Code",detectedModelLabel:"Cline / Roo Agent",recommendedProfile:"cline_mcp",nativeRuleFile:".cursorrules"};if(o.some(r=>r.includes("github.copilot")))return{hostIde:"VS Code",detectedModelLabel:"GitHub Copilot Edits",recommendedProfile:"copilot_edits",nativeRuleFile:".github/copilot-instructions.md"};if(e){if(L.existsSync(T.join(e,".cursorrules")))return{hostIde:"VS Code",detectedModelLabel:"Cursor Rules Bridge",recommendedProfile:"cursor_composer",nativeRuleFile:".cursorrules"};if(L.existsSync(T.join(e,".windsurfrules")))return{hostIde:"VS Code",detectedModelLabel:"Windsurf Cascade Bridge",recommendedProfile:"windsurf_cascade",nativeRuleFile:".windsurfrules"};if(L.existsSync(T.join(e,"CLAUDE.md")))return{hostIde:"VS Code",detectedModelLabel:"Claude Code Bridge",recommendedProfile:"claude_code",nativeRuleFile:"CLAUDE.md"}}return{hostIde:M.env.appName||"VS Code",detectedModelLabel:"Claude 3.7 / Frontier Auto",recommendedProfile:"claude_xml",nativeRuleFile:".github/copilot-instructions.md"}}static compileVoiceTranscript(n){let t=(n||"").trim();if(!t)return{cleaned:"",corrections:0,detectedCommand:null};let e=t,o=0,r=null,a=[{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+claude\s*$/i,cmd:"claude_xml"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+(?:openai|o3|gpt)\s*$/i,cmd:"openai_o"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+cursor\s*$/i,cmd:"cursor_composer"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+copilot\s*$/i,cmd:"copilot_edits"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?scrub\s+(?:all\s+)?secrets\s*$/i,cmd:"scrub_secrets"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?ground\s+in\s+workspace\s*$/i,cmd:"ground_workspace"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?brainstorm(?:\s+this)?\s*$/i,cmd:"orthogonal_brainstorm"}];for(let w of a)w.rx.test(e)&&(r=w.cmd,e=e.replace(w.rx,""),o++);let i=/([^.,;!?]+?)(?:,\s*|\s+)(?:no\s+wait(?:\s+actually)?|scratch\s+that|actually\s+no|wait\s+no\s+make\s+it|i\s+mean\s+instead)\s*,?\s*([^.,;!?]+)/gi;e=e.replace(i,(w,b,h)=>(o++,String(h).trim())),e=e.replace(/\bsnake\s+case\s+([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+){0,3})/gi,(w,b)=>(o++,String(b).trim().toLowerCase().replace(/\s+/g,"_"))),e=e.replace(/\bcamel\s+case\s+([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+){0,3})/gi,(w,b)=>{o++;let h=String(b).trim().toLowerCase().split(/\s+/);return h[0]+h.slice(1).map(d=>d.charAt(0).toUpperCase()+d.slice(1)).join("")}),e=e.replace(/\bpascal\s+case\s+([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+){0,3})/gi,(w,b)=>(o++,String(b).trim().toLowerCase().split(/\s+/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join("")));let c=[[/\bdot\s+env\b/gi,".env"],[/\bpackage\s+dot\s+json\b/gi,"package.json"],[/\bts\s*config\s+dot\s+json\b/gi,"tsconfig.json"],[/\btriple\s+equals\b/gi,"==="],[/\bnot\s+equals\b/gi,"!=="],[/\bfat\s+arrow\b/gi,"=>"]];for(let[w,b]of c)w.test(e)&&(o++,e=e.replace(w,b));let p=/\b(?:uh+|um+|uhm+|er+|ah+|like\s+basically|you\s+know\s+what\s+i\s+mean|you\s+know|sort\s+of\s+like|kind\s+of\s+like|so\s+yeah|i\s+guess\s+like)\b[,.\s]*/gi,y=e;return e=e.replace(p," "),e!==y&&o++,e=e.replace(/\s{2,}/g," ").trim(),e.length>0&&(e=e.charAt(0).toUpperCase()+e.slice(1)),{cleaned:e,corrections:o,detectedCommand:r}}static simulateMultiTurnSavings(n,t){let e=(n||"").trim()?n.trim().split(/\s+/).length:120,o=Math.max(80,Math.round(e*1.35)),r=Math.max(.18,Math.min(.65,(t||35)/100)),a=Math.max(40,Math.round(o*(1-r))),i=20,c=i*(i+1)/2,p=Math.round((o-a)*c+o*8),y=p/1e6*15,w=p/1e6*20,b=p/1e6*10;return{originalTokensPerTurn:o,optimizedTokensPerTurn:a,turnsSimulated:i,cumulativeTokensSaved:p,claudeSonnetSavedUsd:y.toFixed(3),openaiO3SavedUsd:w.toFixed(3),gpt4oSavedUsd:b.toFixed(3)}}};var me=class{static getHtml(n,t,e,o,r,a,i,c,p=!0,y="Claude 3.7 / Auto",w=[]){let b=(n||"Select text in your editor and press Alt+P to improve it.").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),h=Z.benchmarkPrompt(n),d=h.filter(m=>m.category==="model"),x=h.filter(m=>m.category==="bot"),P=h.filter(m=>m.category==="future"),G=e.cognitive,D=i||G.audience,N=c||e.discipline,A=Y.PROFILES[N]||e.equalizer,S=E.inspectWorkspace(),O=E.lintAmbiguities(n),C=E.detectSecrets(n),j=E.simulateMultiTurnSavings(n,e.tokenSavingsPercent),B="Calibrated for maximum reasoning precision: high-density tokens, invariant constraints, and zero conversational fluff.";return D==="explorer"?B="Friendly learning mode active: intuitive real-world analogies, step-by-step scaffolding, and clear explanations.":D==="architect"?B="Staff-architect precision active: formal Hoare invariants, strict schema validation, and maximum signal density.":D==="executive"&&(B="Executive decision mode active: strategic deliverables, risk trade-offs, and clear ROI contracts."),`<!DOCTYPE html>
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
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAMHElEQVR42u3dW4hd13kH8P/3rbX25ZwZae6yXauya2E3kjF2CyH0NgT7oQ+hlMKYUAgmbV+CSaFPaeiD0EPpQx9MW/KYYtq+1AMlLW5pTXCtGLfFRDgxltQqkq3rkTSa0YzmzLnsvdelD/vMxMZxPHJJqNv/Dw4HZl72Gf7nW7dv7wGIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOhH0Xt9nTjxY38v/JMS/T/xqf62P/jgg+Xc3P2H19dvS693CfPzD2B6ehp5DgAZsgwAcgAV8jxHb72P6ekMv/zEw3jjjbeRTS8AdYUaAKo+RjEa712/17t4ldH46bCf4mE3Hjw4/wvOyN+ORn0HAM4BYgJiUKjxCF6h2gAC9PtDLHYFo1Efg36FxcUZXLu9idw5hBgRoBEQl1L1bwB+A4ABEBgRBvAjZZma8bhaHOz0M1UDowbRBzQIkNBmRwTwEZgrgT/87cfw3dPn8crZC/i5I4dx4cothJAhpYgYUwIgIYRpxuKnW0k+vfMHcWl7+26omzq5LE9qNKWElFJKIYTkfUje+1RVdcpMSOMbF9Nn7rNpuLOVNraH6fjRw2kwGqWYkNSYoKoxCaseA7hP/c0+Nrc2BIDkeS6qKiIQUSNGVaxRMcZKWWSyNjDyj2eSfOutShqdlkvXboo1Vn7tF4/JzHRHUoyiavTQwgxXwRyC9+fqjauo6wFEFLkroKqTyigwooAKIAKBoG4avHlJkMShLA1CiDjz7lU8euQBfO6pz8DHiLLoAEh458w5rKysYHV1lQnhKvijFyEAfhWir5RFt5ifm4fLDVQUbRmUvUA65zAYDLG1tYmlhQUYaxFCQAIwGIyA5DHVKUIIwaxvbL26tb31NBchHIL3Vb9VDGKIqKoxkASquy+FQGCtxXA4wvrtdYzHNe7c2cJ4XEONBVJCp1MgK0rsjD1GTcLUgYNMBYfgffKAKIAkqKsG/bSDsixRdDIIEkQVd+9uY2NjE85YHJjuwmUOg/4AVV2h2+kgpQQBkDkLVYGvE1PBAO7/8lUMnLPodDtwzqGqa/i+R54XGA77GOwMkGcZsiyDqkKhKMsSw/EQW9U2Ot0S1lnEEBFDRN3UTAUDuN+Lt1BjYJ2DtQbOOWRZhrquMRzsoK49yqKAMQbWWgiAlCKSGOR5Ae89BoMhrLWIMaKuGvjQMBUM4P6v3lqDLMtg1GCyCQhrLYqihDUBMbbriDZ4ghQTTBtFqFHkJkNV1Wi8h6rCimUqGMB9TgH9GJ2y0wbQWogIQgzwjUeMCaqClAQxJYQQAQFiBGATIEAKbQidc3sBjikyFQzgPewjqSDL2/mdiMAYBRIwHI7gmwYi0oYtJiS0C4wYBcZMKiYSBIKINrDCjRcG8J6kiCzPkEIEkGCsQWEURhWD4RCj0QghRIgkxN2Nz5SgamCMwgeBTIIMNYiRq2AGcN976Ak+BmRZAV/XCDEAqQ2QdRZT0124zGIwHKKuasQQkNqeA0iIiNHAGAtRbYOXPCIYQAZwf6UPANA0FYxz7dBajXbz174nQI1BkRdAElTjEXzwiGgXI03TwFiBNRbWOoi1HIIZwHu4eFvANx6iBnlhUddjxBShIoCk3SIJADBGYIxFiBEp1PDBAymiCQlI7flxUZRwNmcqwKO4fSmKMqUkoaprZJ0OrBrI5Hhb9o65E0TaExNVmfy8fRdRiBiIKFJKGI2GGI52mAoGcH9NFN3uAdspO92d7e1Qlt1kXAYR2Rt+2+rXdsQgyV6njEzeIQoR/UAXjfcNJ4EM4MeKAOT48UfOLS4s/B1iMFmWSV502lKXgARpt1jaXRiITMKYAIXih7UQUDXYa59WZSoYwP2tQF599dVb712+sNKdKn4fwE5ZdpKqpHZvb3egTZPXpBiqIE0KYtuyZSbVUCCwEPAkhAHcfwhF5Fk5+87bfzFzcObP87IrqjYgpcknm8RvErC2PzXtVT9AoGqBSeuWqoG1GVPBAO4/hMvLawJAnS1eN84Fl2W6t/qdzAHbBbHs3Xe+27AqSFDVdi9QDKx1yMuCc0AGcP9ee+21ACDOH+yccZm5WZRdFWhMKQGSIOmHfd9788DdSaEo1BiomGjUBnU2Wmd4GMwA3sudcZJw4oS+8MIfXzVqzhdld3ecnUz0JpvSe3M+2U0iAMBai6wsNC+KzIhRZ1wpwvuSGMB7sHL2rKQEGGtP52Wn3VaJkwo42ZBOu1swu/O9dvsl2azA/OLSt+fmZv5saqr7H0sLS+cYC/Ak5JMoyu4Zm3VgrJPQNG2DQWpnf7vdMCqAUUGMCkmIedk13QML/3Th7PdfMMZg7daVyXkxb0hiBdx/DQQAPHbseGOdwXg0QkSctGhNTkcEu8GCyOQhWKpwroCzWQlAn3zySRdC5PjLCniv2vt3x4MdvHP6Tdy80YNRi85Uie5UCecy1L5BSrvNMgKRBBWTjMuwdN+hhwDE06enFGA7DCvgJ/T2996y1mV46OFHML84i6qqsL62gaqqkGcOOjmmExEoTHsUZwx8QgEAWGYgWAE/yQDcPsVAPvtLv3Jku7+D899/MwkabG5t4u7mXWxvD+B9DWctfBMmIQRkcgQ3Go6ciCAtLbH6MYD37hvfOCMAsHaz9+R7PziP8fYWFpcWEQ9ESGq7Xra3t+Gb9sajED2SAGpUAMCoHooxiohEfKCJixjAjyenTp30ooK3/v31wxcunIdziuu965ianoIkYDgYoKlrxNi27asAca8bRqDGli+++GIOYMxH9DKAHxu4lZUVXVtbk1OnTqXl5WW59u7aY48+fvRr09PTT9y8/h5SjGY07KPXu7x3xGacbc+AJ3uEIoCKSowJLisXr29uzgK4MdkxZDIYwI++EWR1dXVvj+6ll16b+spXv/Tzly9f3b5w8RJETep2Sty6cVOMCAajERrfh4jAOgdnMziXIbMOYg2ir3B3/db4vTPd6v/AU4sZwJ90+F566V+nXnnjtd+6df3KXBgPHv3y737xic27m2s3e1ce276zkSmQfvbIYRFVDLZHiKJQUYQQUMcKKSZ47wEojBmnBx58CEvzM//wzW++cIfzPwbwx4bvuxcvHvyjP/j6n/Q3Nr6yffcO1m/fwmg4QkwBPjRQCGrv5fLVa1hcWMDG1jYEgiZ45HmJxYUldKamEGJAVdWo6xohBKg1twDgmWdWDhTFqHn55ZeHjAYD+AFf/urXF3/v2S/9JeqdLxSZ+VrTrP/NfYcWX+/1rh/xjY8KY0IIaqygqoa4vXEbNrMYjSrMzszh/gcOQ1TgfQMB4KwBktOYfFM19eUTJ05ka2traq3lERwD+D7LyxanTvlbFy+trN+88QWnPs088sjDD87M/eZ77767ONjpqyAZtIsKWDFIxmA0GsK4Eg8/dBSzC3PYWF/H3c07yYeQBO3tmsY4XxyIJkX8+smTJ78FwKNt9ycGsLVyail99k//qvsv3/77Z2bn51I9HoRe78bvqGpW1Q2mD85MWu0NzGTF65xLUIUam1Qk9no91FVlRERiDNLtTCPLCtjMZipAVY0sABw7dsyePXu24TyQAdyb+61iNSytHTs42Nk82lRDTHWnfBXql53az4UQ7x8MBwjeI/kk0KQ+1qh9IwpBSCJQ0TzPURZF6O9s3zLRb3W7BdTYa1NT01dg8MbO+uifl5eX7dLSUnb8+PHw/lU28RnRAgDPPffcobW1jb/u9XrPDHd2Ypbl6oOH9zVCiEgpoakbiBGoseOizG+UeXktiV6y1pyfPTh9+qmnnvrPp59+unfu3LlulmXy+c8f6j/++LP1+/5PXJoMwayADOCHV8HPP//8/Nra2qOXLl1Ct9t9oBmPF8ZN47OsNHknr65dvvxfs7OzfnZ2dqtzqLO5eWVz8J3vnBqn9CM/swAwR48e1QsXfiYApzy3Yegn8WUxAOzKyopJKXGXmRXwf3a9J06ckJMnT2JlZeVD1766upo+9PQiVjQiIiIiov9V/hv4s/M98OeMsgAAAABJRU5ErkJggg==" class="rig-layer rig-layer-leg-l" alt="Left Leg">
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
        <span class="license-badge ${r?"":"trial"}">
          ${r?"PRO UNLOCKED":a+" TRIES LEFT"}
        </span>
      </div>
      <div class="hud-sub">${B}</div>
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
      <span class="badge-pill pill-cyan">${G.audienceLabel} &bull; ${e.detectedDomain}</span>
    </div>
    <div style="font-size: 9.5px; color: #94a3b8; margin-bottom: 4px;">
      Readability: <b>Grade ${G.fleschKincaidGrade}</b> &bull; Bloom's Taxonomy: <b>${G.bloomsLevel}</b>
    </div>
    <div class="button-group">
      <button class="pill-btn ${i?"":"active"}" onclick="setAudience('auto')">Auto-Detect</button>
      <button class="pill-btn ${i==="explorer"?"active":""}" onclick="setAudience('explorer')">Explorer (All Ages)</button>
      <button class="pill-btn ${i==="practitioner"?"active":""}" onclick="setAudience('practitioner')">Practitioner</button>
      <button class="pill-btn ${i==="architect"?"active":""}" onclick="setAudience('architect')">Staff Architect</button>
      <button class="pill-btn ${i==="executive"?"active":""}" onclick="setAudience('executive')">Executive ROI</button>
    </div>
  </div>

  <!-- Omni-Disciplinary Equalizer (Level the Playing Field) -->
  <div class="panel-box">
    <div class="panel-header">
      <span class="panel-label">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
        Omni-Disciplinary Equalizer
      </span>
      <span class="badge-pill pill-emerald">${A.title}</span>
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
      ${d.map(m=>{let k=m.compatibilityScore>=85?"score-green":m.compatibilityScore>=70?"score-yellow":"";return`
        <div class="target-card ${o===m.profileKey?"active":""}" onclick="selectTarget('${m.profileKey}')">
          <div class="t-top">
            <span>${m.name}</span>
            <span class="t-score ${k}">${m.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${m.provider}</span>
            <span>${m.latencyRating}</span>
          </div>
        </div>`}).join("")}
    </div>

    <!-- Bots Grid -->
    <div class="targets-scroll-grid" id="grid-bots" style="display:none;">
      ${x.map(m=>{let k=m.compatibilityScore>=85?"score-green":m.compatibilityScore>=70?"score-yellow":"";return`
        <div class="target-card ${o===m.profileKey?"active":""}" onclick="selectTarget('${m.profileKey}')">
          <div class="t-top">
            <span>${m.name}</span>
            <span class="t-score ${k}">${m.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${m.provider}</span>
            <span>${m.latencyRating}</span>
          </div>
        </div>`}).join("")}
    </div>

    <!-- Future AI Grid -->
    <div class="targets-scroll-grid" id="grid-future" style="display:none;">
      ${P.map(m=>{let k=m.compatibilityScore>=85?"score-green":m.compatibilityScore>=70?"score-yellow":"";return`
        <div class="target-card ${o===m.profileKey?"active":""}" onclick="selectTarget('${m.profileKey}')">
          <div class="t-top">
            <span>${m.name}</span>
            <span class="t-score ${k}">${m.compatibilityScore}%</span>
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
      <span class="badge-pill pill-emerald">${S.workspaceName}</span>
    </div>
    <div style="font-size: 9.5px; color: #94a3b8; margin-bottom: 6px;">
      Active: <b>${S.activeFileRelative}</b> (${S.languageId}) &bull; Stack: <b>${S.detectedStack.slice(0,4).join(", ")||"Auto"}</b>
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

  ${C.length>0?`
  <!-- Pre-Flight Secret & Credential Leak Guard -->
  <div class="panel-box" style="border-color: rgba(244, 63, 94, 0.55); background: rgba(244, 63, 94, 0.08);">
    <div class="panel-header">
      <span class="panel-label" style="color: #fda4af;">
        Pre-Flight Secret Guard (${C.reduce((m,k)=>m+k.count,0)} Credential Leak Risk)
      </span>
      <button class="mode-btn active" onclick="scrubSecretsNow()" style="background:#e11d48; border-color:#fb7185; font-weight:700;">Scrub Secrets</button>
    </div>
    <div style="font-size:9.5px; color:#fecdd3;">
      Detected: ${C.map(m=>`<b>${m.count}x ${m.label}</b>`).join(", ")}
    </div>
  </div>
  `:""}

  ${C.length>0?`
  <!-- Pre-Flight Secret & Credential Leak Guard -->
  <div class="panel-box" style="border-color: rgba(244, 63, 94, 0.55); background: rgba(244, 63, 94, 0.08);">
    <div class="panel-header">
      <span class="panel-label" style="color: #fda4af;">
        Pre-Flight Secret Guard (${C.reduce((m,k)=>m+k.count,0)} Credential Risk)
      </span>
      <button class="mode-btn active" onclick="scrubSecretsNow()" style="background:#e11d48; border-color:#fb7185; font-weight:700;">Scrub Secrets</button>
    </div>
    <div style="font-size:9.5px; color:#fecdd3;">
      Detected: ${C.map(m=>`<b>${m.count}x ${m.label}</b>`).join(", ")}
    </div>
  </div>
  `:""}

  ${O.length>0?`
  <!-- Pre-Flight Ambiguity & Missing Constraint Linter -->
  <div class="panel-box" style="border-color: rgba(245, 158, 11, 0.35);">
    <div class="panel-header">
      <span class="panel-label" style="color: var(--amber);">
        Pre-Flight Ambiguity Linter (${O.length} Detected)
      </span>
      <span class="badge-pill" style="background:rgba(245,158,11,0.15); color:var(--amber); border:1px solid rgba(245,158,11,0.3);">1-Click Fix</span>
    </div>
    <div style="display:flex; flex-direction:column; gap:4px;">
      ${O.map(m=>`
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
    <span>20-Turn Saved: <span class="telemetry-val" style="color:var(--emerald); font-weight:800;">${j.cumulativeTokensSaved.toLocaleString()} tok (~$${j.openaiO3SavedUsd})</span></span>
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
    <textarea id="input-box" class="prompt-editor" style="min-height: 68px; max-height: 150px;" placeholder="Type or paste your raw prompt here, or highlight text in any code file and press Alt+P...">${(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</textarea>
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

  ${w.length>0?`
  <!-- Local Recent Prompts Vault -->
  <div class="panel-box" style="border-color: rgba(56, 189, 248, 0.22);">
    <div class="panel-header">
      <span class="panel-label" style="color: #94a3b8;">
        Recent Prompts Vault (${w.length})
      </span>
      <button class="pill-btn" onclick="clearHistoryVault()" style="font-size:8.5px; padding:1px 6px;">Clear</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:4px; max-height:95px; overflow-y:auto;">
      ${w.map((m,k)=>`
        <div onclick="loadHistoryItem(${k})" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:6px; padding:4px 6px; border-radius:4px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05);">
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
    ${r?'<span style="color:var(--emerald); font-weight:800; font-family:var(--font-mono); font-size:10px;">ACTIVE PRO PASSKEY</span>':'<div style="display:flex; gap:5px;"><button class="btn-sub" onclick="openCheckout()">Get Passkey</button><button class="btn-secondary" style="padding:4px 8px; font-size:9.5px;" onclick="enterPasskey()">Enter Key</button></div>'}
  </div>

  <script>
    const vscode = acquireVsCodeApi();
    const originalText = ${JSON.stringify(n)};

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
</html>`}};var K=class{static installationIdKey="promptsmith_install_id";static statsKey="promptsmith_local_stats";static getOrCreateInstallId(n){let t=n.globalState.get(this.installationIdKey);return t||(t="inst_"+Math.random().toString(36).substring(2,12)+"_"+Date.now().toString(36),n.globalState.update(this.installationIdKey,t)),t}static trackEvent(n,t){this.getOrCreateInstallId(n);let e=(n.globalState.get(this.statsKey)||0)+1;n.globalState.update(this.statsKey,e)}};var fe=te(require("https"));function Oe(v){let n="sess_"+Math.random().toString(36).substring(2,10),t=E.detectActiveModelHook(),e=t.recommendedProfile||"claude_xml",o=v.globalState.get("promptsmith_auto_hook",!0),r,a,i="",c="",p=R.analyze(""),y="promptsmith_pro_license",w="promptsmith_trial_count",b=v.globalState.get(y,!1),h=v.globalState.get(w,10),d=s.window.createStatusBarItem(s.StatusBarAlignment.Right,100);d.command="promptsmith.openDashboard",d.text=o?"$(sparkle) Auto-Hook":"$(sparkle)",d.tooltip=`PromptSmith Auto-Hook: ${t.detectedModelLabel} (${t.hostIde}) | Alt+P to polish`,d.show(),v.subscriptions.push(d);let x=je(),P;function G(){return v.globalState.get("promptsmith_history_vault",[])}async function D(u,l,f){let g=(u||"").trim();if(!g||g.startsWith("Select text in your editor"))return;let I=G().filter(Q=>Q.raw!==g),V=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});I.unshift({ts:V,raw:g.slice(0,1200),compiled:(l||"").slice(0,4e3),profile:f}),I.length>8&&(I=I.slice(0,8)),await v.globalState.update("promptsmith_history_vault",I)}function N(){return me.getHtml(i,c,p,e,b,h,r,a,o,t.detectedModelLabel,G())}function A(){k.updateView(),P&&(P.webview.html=N())}function S(u){let l=p.estimatedTokens||Math.round(i.length/4)||60,f=p.optimizedTokens||Math.round((c||"").length/4)||40,g=Math.max(15,l-f),I=Math.max(10,p.tokenSavingsPercent||Math.round(g/Math.max(1,l)*100)),V=(g/1e3*.015).toFixed(4);b?s.window.showInformationMessage(`PromptSmith: ${u}. Trimmed ${g} tokens (-${I}%).`):s.window.showInformationMessage(`PromptSmith: ${u}. Trimmed ${g} tokens (-${I}%). Saved ~$${V}.`,"Unlock Developer Pro ($9/mo or $10)","Enter Passkey").then(Q=>{Q==="Unlock Developer Pro ($9/mo or $10)"?s.env.openExternal(s.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=editor_toast")):Q==="Enter Passkey"&&s.commands.executeCommand("promptsmith.unlockLicense")})}async function O(){if(b)return!0;if(h<=0){let u=await s.window.showInformationMessage("PromptSmith: Free trial completed (10/10 improvements used). Unlock Developer Pro ($9/mo or $10 Passkey) or enter passkey.","Get Passkey ($9/mo or $10)","Enter Passkey");return u==="Get Passkey ($9/mo or $10)"?s.env.openExternal(s.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=vscode")):u==="Enter Passkey"&&s.commands.executeCommand("promptsmith.unlockLicense"),!1}return h--,await v.globalState.update(w,h),!0}function C(u){if(u&&u.trim())return i=u.trim(),p=R.analyze(i,x),i;if(!i.trim()){let l=s.window.activeTextEditor;if(l){let f=l.selection,g=f.isEmpty?l.document.getText():l.document.getText(f);g.trim()&&(i=g.trim(),p=R.analyze(i,x))}}return i}function j(u){u.onDidReceiveMessage(async l=>{switch(l.command){case"optimizeInput":{let f=(l.text||"").trim();if(!f){s.window.showWarningMessage("Type or paste a prompt in the Input Draft box first, or select text in your editor.");return}if(!await O())return;l.profile&&(e=l.profile);let g=E.compileVoiceTranscript(f);i=g.corrections>0?g.cleaned:f,g.detectedCommand&&g.detectedCommand!=="scrub_secrets"&&g.detectedCommand!=="ground_workspace"&&(e=g.detectedCommand),p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),await D(i,c,e),o&&await s.env.clipboard.writeText(c),d.tooltip=`PromptSmith Auto-Hook (${t.detectedModelLabel}) | Score: ${p.iqScore}/100 (-${p.tokenSavingsPercent}% words)`,A(),K.trackEvent(v,{sessionId:n,runtime:x,action:"improve",profile:e,audience:r,discipline:a,inputPrompt:i,enhancedPrompt:c,originalWords:i.split(/\s+/).filter(Boolean).length,enhancedWords:c.split(/\s+/).filter(Boolean).length,tokenReductionPct:p.tokenSavingsPercent,isLicensed:b,trialCountRemaining:h})}break;case"groundWorkspace":{C(l.text);let f=E.inspectWorkspace();i=i?`${i}

${f.contextSummaryBlock}`:f.contextSummaryBlock,p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),A(),s.window.showInformationMessage(`PromptSmith: Injected workspace stack & symbols from ${f.workspaceName}.`)}break;case"groundDiagnostics":{C(l.text);let f=E.inspectDiagnosticsAndDiff();i=i?`${i}

${f.block}`:f.block,p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),o&&c&&await s.env.clipboard.writeText(c),A(),s.window.showInformationMessage(`PromptSmith Error-to-Spec: Grounded ${f.count} active IDE diagnostic(s) into blueprint.`)}break;case"exportRulesFile":{C(l.text);let f=l.targetFile||".cursorrules",g=(l.compiled||c||i||"").trim(),I=await E.exportWorkspaceRulesFile(f,g);I.ok?s.window.showInformationMessage(`PromptSmith: ${I.message}`):s.window.showWarningMessage(`PromptSmith: ${I.message}`)}break;case"scrubSecrets":{let f=C(l.text),{scrubbed:g,redactedCount:I}=E.scrubSecrets(f);i=g,p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),A(),s.window.showInformationMessage(`PromptSmith Secret Guard: Redacted ${I} exposed credential(s).`)}break;case"cleanVoiceStream":{let f=C(l.text),g=E.compileVoiceTranscript(f);i=g.cleaned||f,g.detectedCommand&&g.detectedCommand!=="scrub_secrets"&&g.detectedCommand!=="ground_workspace"&&(e=g.detectedCommand),p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),await D(i,c,e),o&&c&&await s.env.clipboard.writeText(c),A(),s.window.showInformationMessage(`PromptSmith Voice-to-Spec: Refined spoken thoughts (${g.corrections} disfluencies/self-corrections resolved).`)}break;case"toggleAutoHook":o=!!l.enabled,await v.globalState.update("promptsmith_auto_hook",o),d.text=o?"$(sparkle) Auto-Hook":"$(sparkle)",o&&(e=t.recommendedProfile||e,s.window.showInformationMessage(`PromptSmith Auto-Hook Active: Hooked alongside ${t.detectedModelLabel}.`)),A();break;case"loadHistoryItem":{let g=G()[Number(l.index)];g&&(i=g.raw,c=g.compiled,p=R.analyze(i,x),A())}break;case"clearHistoryVault":await v.globalState.update("promptsmith_history_vault",[]),A();break;case"applyAmbiguityFix":{let f=(l.text||i||"").trim(),g=(l.fixSnippet||"").trim();i=f?`${f}
${g}`:g,p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),A()}break;case"changeProfile":C(l.text),e=l.profile,i&&(p=R.analyze(i,x),c=z.enhance(i,e,x,r,a)),A();break;case"changeAudience":C(l.text),r=l.audience==="auto"?void 0:l.audience,i&&(p=R.analyze(i,x),c=z.enhance(i,e,x,r,a)),A();break;case"changeDiscipline":C(l.text),a=l.discipline==="auto"?void 0:l.discipline,i&&(p=R.analyze(i,x),c=z.enhance(i,e,x,r,a)),A();break;case"triggerBrainstorm":if(C(l.text),!i){s.window.showWarningMessage("Type or paste a prompt in the Input Draft box first.");return}e="orthogonal_brainstorm",p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),A(),s.window.showInformationMessage("PromptSmith: Synthesized Autonomous Lateral Brainstorming Blueprint.");break;case"selectVector":{if(C(l.text),!i){s.window.showWarningMessage("Type or paste a prompt in the Input Draft box first.");return}let f=W.synthesizeBrainstorm(i),g=f.vectors.find(I=>I.id===l.vectorId)||f.vectors[0];c=`### PROMPTSMITH ORTHOGONAL PATH: ${g.title.toUpperCase()}
**Codename**: ${g.codename}
**Core Paradigm**: ${g.paradigm}

#### Consensus Trap Strictly Forbidden
[FORBIDDEN]: ${g.consensusTrapForbidden}

#### Counter-Intuitive Breakthrough Mechanism
${g.counterIntuitiveMechanism}

#### Concrete Architecture & Implementation Pattern
${g.concreteArchitecture}

#### Provocative Operator (de Bono PO)
${g.provocativeOperator}

#### Model Execution Directive
${g.promptDirective}

#### Target Task Specification
${i}`,A(),s.window.showInformationMessage(`PromptSmith: Applied ${g.title} Lateral Path.`)}break;case"insert":await Le(l.text),S("Prompt inserted");break;case"copy":await s.env.clipboard.writeText(l.text),K.trackEvent(v,{sessionId:n,runtime:x,action:"copy",profile:e,audience:r,discipline:a,inputPrompt:i,enhancedPrompt:l.text,originalWords:i.split(/\s+/).filter(Boolean).length,enhancedWords:l.text.split(/\s+/).filter(Boolean).length,isLicensed:b,trialCountRemaining:h}),S("Prompt copied");break;case"openCheckout":await s.env.openExternal(s.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=vscode"));break;case"enterPasskey":await s.commands.executeCommand("promptsmith.unlockLicense");break;case"unlockKey":await H(l.key);break}})}v.subscriptions.push(s.commands.registerCommand("promptsmith.contactSupport",()=>{s.env.openExternal(s.Uri.parse("mailto:help@bartholomew.info?subject=PromptSmith%20Support%20Inquiry"))}));let B=s.commands.registerCommand("promptsmith.exportWorkspaceRules",async()=>{let u=await s.window.showQuickPick([{label:".cursorrules",description:"Cursor IDE workspace rules"},{label:"CLAUDE.md",description:"Claude Code CLI project memory & invariants"},{label:".github/copilot-instructions.md",description:"GitHub Copilot custom workspace instructions"},{label:".windsurfrules",description:"Windsurf Cascade workspace rules"}],{placeHolder:"Select the target AI rules file to generate & compact"});if(!u)return;let l=await E.exportWorkspaceRulesFile(u.label,c||i);l.ok?s.window.showInformationMessage(`PromptSmith: ${l.message}`):s.window.showWarningMessage(`PromptSmith: ${l.message}`)});class m{static viewType="promptsmith.sidebarView";_view;resolveWebviewView(l){this._view=l,l.webview.options={enableScripts:!0,localResourceRoots:[v.extensionUri]},this.updateView(),j(l.webview)}updateView(){this._view&&(this._view.webview.html=N())}}let k=new m;v.subscriptions.push(s.window.registerWebviewViewProvider(m.viewType,k));async function H(u){let l=(u||"").trim();if(!l)return!1;if(/^cs_(live|test)_[a-zA-Z0-9]+$/.test(l)){let f=await Fe(l);if(f)l=f;else return s.window.showErrorMessage("Could not verify that Stripe Session ID. Ensure checkout was completed or contact help@bartholomew.info."),!1}if(l=l.toUpperCase(),!/^PSMITH-(PRO|TEAM|PASSKEY)-[0-9A-F]{5}(-[0-9A-F]{5}){3}$/.test(l))return s.window.showErrorMessage("Please enter a valid passkey (e.g. PSMITH-PRO-XXXXX-XXXXX-XXXXX-XXXXX) or Stripe Session ID."),!1;try{if(await ze(l))return b=!0,await v.globalState.update(y,!0),A(),s.window.showInformationMessage("PromptSmith Pro Passkey Verified and Activated."),!0}catch{}return s.window.showErrorMessage("Passkey not recognized. Need assistance? Contact help@bartholomew.info","Contact Support").then(f=>{f==="Contact Support"&&s.env.openExternal(s.Uri.parse("mailto:help@bartholomew.info?subject=Passkey%20Assistance"))}),!1}v.subscriptions.push(s.window.registerUriHandler({async handleUri(u){if(u.path==="/activate"||u.path==="/unlock"){let l=new URLSearchParams(u.query),f=l.get("key")||l.get("session_id");f&&await H(f)}}}));function F(){P?P.reveal(s.ViewColumn.Beside):(P=s.window.createWebviewPanel("promptsmith.floatingAssistant","PromptSmith Assistant",s.ViewColumn.Beside,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[v.extensionUri]}),j(P.webview),P.onDidDispose(()=>{P=void 0})),P.webview.html=N()}let U=s.commands.registerCommand("promptsmith.improveSelection",async()=>{let u=s.window.activeTextEditor;if(!u){F(),s.window.showInformationMessage("Opened PromptSmith Studio. Type a prompt directly or select text in an editor.");return}let l=u.selection,f=l.isEmpty?u.document.getText():u.document.getText(l);if(!f.trim()){F(),s.window.showWarningMessage("No text selected in editor. Type your prompt in the PromptSmith Input Draft box.");return}if(!await O())return;let g=E.compileVoiceTranscript(f),{scrubbed:I}=E.scrubSecrets(g.corrections>0?g.cleaned:f);i=I,p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),await D(i,c,e),d.text=o?"$(sparkle) Auto-Hook":"$(sparkle)",d.tooltip=`PromptSmith Auto-Hook (${t.detectedModelLabel}) | Score: ${p.iqScore}/100 (-${p.tokenSavingsPercent}% words)`,A(),o?(await s.env.clipboard.writeText(c),await E.exportWorkspaceRulesFile(t.nativeRuleFile,c,!0),S(`Auto-Hooked for ${t.detectedModelLabel} & copied to clipboard`)):F(),K.trackEvent(v,{sessionId:n,runtime:x,action:"improve",profile:e,audience:r,discipline:a,inputPrompt:f,enhancedPrompt:c,originalWords:f.split(/\s+/).filter(Boolean).length,enhancedWords:c.split(/\s+/).filter(Boolean).length,tokenReductionPct:p.tokenSavingsPercent,isLicensed:b,trialCountRemaining:h})}),ne=s.commands.registerCommand("promptsmith.brainstormSelection",async()=>{let u=s.window.activeTextEditor,f=(u?u.selection.isEmpty?u.document.getText():u.document.getText(u.selection):"").trim()||i.trim();if(!f){F(),s.window.showWarningMessage("Select prompt text in your editor or enter a draft in PromptSmith first.");return}i=f,p=R.analyze(f,x),e="orthogonal_brainstorm",c=z.enhance(f,e,x,r,a),d.text="$(sparkle)",d.tooltip="PromptSmith | Lateral Brainstorm: Outside-the-box paths active",A(),F(),K.trackEvent(v,{sessionId:n,runtime:x,action:"improve",profile:e,audience:r,discipline:a,inputPrompt:f,enhancedPrompt:c,originalWords:f.split(/\s+/).filter(Boolean).length,enhancedWords:c.split(/\s+/).filter(Boolean).length,tokenReductionPct:p.tokenSavingsPercent,isLicensed:b,trialCountRemaining:h}),s.window.showInformationMessage("PromptSmith: Autonomous Lateral Brainstorming Active.")}),oe=s.commands.registerCommand("promptsmith.openDashboard",()=>{F(),K.trackEvent(v,{sessionId:n,runtime:x,action:"improve",profile:e,audience:r,discipline:a,inputPrompt:i,enhancedPrompt:c,originalWords:i?i.split(/\s+/).filter(Boolean).length:0,enhancedWords:c?c.split(/\s+/).filter(Boolean).length:0,tokenReductionPct:p.tokenSavingsPercent,isLicensed:b,trialCountRemaining:h})}),q=s.commands.registerCommand("promptsmith.unlockLicense",async()=>{let u=await s.window.showInputBox({prompt:"Enter your PromptSmith Pro Passkey ($9/mo or $10 Passkey) or Stripe Session ID (cs_live_...)",placeHolder:"PSMITH-PRO-XXXXX-XXXXX-XXXXX-XXXXX"});u&&await H(u)});class ae{provideCodeActions(l,f){let g=l.getText(f);if(!g||g.trim().length<10)return[];let I=new s.CodeAction("Optimize with PromptSmith",s.CodeActionKind.RefactorRewrite);return I.command={command:"promptsmith.improveSelection",title:"Optimize with PromptSmith"},[I]}}v.subscriptions.push(s.languages.registerCodeActionsProvider(["markdown","plaintext","typescript","python","json"],new ae,{providedCodeActionKinds:[s.CodeActionKind.RefactorRewrite]}));let re=s.commands.registerCommand("promptsmith.scrubSecrets",async()=>{let u=s.window.activeTextEditor;if(!u){F();return}let l=u.selection,f=l.isEmpty?u.document.getText():u.document.getText(l),{scrubbed:g,redactedCount:I}=E.scrubSecrets(f);if(I===0){s.window.showInformationMessage("PromptSmith Secret Guard: 0 exposed credentials detected.");return}await u.edit(V=>{l.isEmpty?V.replace(new s.Range(u.document.positionAt(0),u.document.positionAt(f.length)),g):V.replace(l,g)}),s.window.showInformationMessage(`PromptSmith Secret Guard: Redacted ${I} exposed credential(s).`)}),J=s.commands.registerCommand("promptsmith.cleanVoiceStream",async()=>{let u=s.window.activeTextEditor,l=u?u.selection.isEmpty?u.document.getText():u.document.getText(u.selection):i;if(!l||!l.trim()){F(),s.window.showInformationMessage("Dictate or type your spoken thoughts first, then run Clean Voice Stream.");return}let f=E.compileVoiceTranscript(l),{scrubbed:g}=E.scrubSecrets(f.cleaned);i=g,p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),await D(i,c,e),o&&await s.env.clipboard.writeText(c),A(),s.window.showInformationMessage(`PromptSmith Voice-to-Spec: Resolved ${f.corrections} spoken disfluencies/self-corrections & copied spec.`)}),_=s.commands.registerCommand("promptsmith.groundWorkspace",async()=>{let u=E.inspectWorkspace();i=i?`${i}

${u.contextSummaryBlock}`:u.contextSummaryBlock,p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),A(),s.window.showInformationMessage(`PromptSmith: Grounded in ${u.workspaceName} (${u.detectedStack.join(", ")||u.languageId}).`)}),ue=s.commands.registerCommand("promptsmith.groundDiagnostics",async()=>{let u=E.inspectDiagnosticsAndDiff();i=i?`${i}

${u.block}`:u.block,p=R.analyze(i,x),c=z.enhance(i,e,x,r,a),o&&c&&await s.env.clipboard.writeText(c),A(),s.window.showInformationMessage(`PromptSmith Error-to-Spec: Grounded ${u.count} active IDE diagnostic(s) & copied blueprint.`)});v.subscriptions.push(re,J,_,ue),v.subscriptions.push(U,ne,oe,q,B)}function Fe(v){return new Promise(n=>{try{let t=JSON.stringify({session_id:v}),e=fe.request("https://us-central1-acn-26670.cloudfunctions.net/claimKey",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":Buffer.byteLength(t)}},o=>{let r="";o.on("data",a=>r+=a),o.on("end",()=>{try{let a=JSON.parse(r);n(a&&a.ok&&a.key?String(a.key):null)}catch{n(null)}})});e.on("error",()=>n(null)),e.write(t),e.end()}catch{n(null)}})}function ze(v){return new Promise(n=>{try{let t=JSON.stringify({key:v}),e=fe.request("https://us-central1-acn-26670.cloudfunctions.net/validateKey",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":Buffer.byteLength(t)}},o=>{let r="";o.on("data",a=>r+=a),o.on("end",()=>{try{let a=JSON.parse(r);n(!!(a&&a.valid))}catch{n(!1)}})});e.on("error",()=>n(!1)),e.write(t),e.end()}catch{n(!1)}})}async function Le(v){let n=s.window.activeTextEditor;if(!n){s.window.showWarningMessage("Open a text editor file first to insert the prompt, or click Copy.");return}let t=n.selection;await n.edit(e=>{t.isEmpty?e.insert(t.active,v):e.replace(t,v)})}function je(){let v=s.env.appName||"";return v.includes("Cursor")?"Cursor IDE":v.includes("Windsurf")?"Windsurf IDE":v.includes("Claude")?"Claude Code / Desktop":"VS Code"}0&&(module.exports={activate});
