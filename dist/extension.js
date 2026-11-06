var Ie=Object.create;var me=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var De=Object.getOwnPropertyNames;var Me=Object.getPrototypeOf,Re=Object.prototype.hasOwnProperty;var $e=(h,i)=>{for(var t in i)me(h,t,{get:i[t],enumerable:!0})},Se=(h,i,t,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of De(i))!Re.call(h,o)&&o!==t&&me(h,o,{get:()=>i[o],enumerable:!(e=Te(i,o))||e.enumerable});return h};var te=(h,i,t)=>(t=h!=null?Ie(Me(h)):{},Se(i||!h||!h.__esModule?me(t,"default",{value:h,enumerable:!0}):t,h)),_e=h=>Se(me({},"__esModule",{value:!0}),h);var Ne={};$e(Ne,{activate:()=>ze});module.exports=_e(Ne);var s=te(require("vscode"));var Q=class{static DOMAIN_RULES=[{domain:"AI Agent Architecture & Tool-Calling Security",category:"engineering",matchPattern:/\b(agent|tool|shell|subprocess|bash|mcp|exec|command|spawn|curl|guardrail|injection)\b/i,injectedConstraints:["Enforce strict parameterized subprocess execution; never use shell=True or unescaped pipe strings.","Implement mandatory credential masking across stdout/stderr streams (mask sk-*, ghp_*, AKIA*).","Enforce hard execution timeouts and bounded retry limits to prevent runaway reasoning loops.","Block SSRF targeting cloud metadata endpoints (169.254.169.254, AWS IMDSv2, GCP metadata)."],recommendedOutputFormat:"Structured tool-call JSON schema with explicit invariant validations and rollback logic.",reasoningChecklist:["Are subshells isolated with fail-closed error handling?","Is destructive disk/network action bounded by explicit user confirmation?","Are all error traces scrubbed of sensitive environment variables?"]},{domain:"Corporate Finance, Accounting & Valuation",category:"business",matchPattern:/\b(ebitda|fcff|lbo|dcf|wacc|valuation|ifrs|asc|balance sheet|working capital|covenants|revolver|moic|irr)\b/i,injectedConstraints:["Under IFRS 16 / ASC 842, ensure operating lease liabilities deducted in Enterprise-to-Equity bridges are not simultaneously double-counted in operating cash flows.","Relever and unlever asset betas strictly via Hamada's equation: beta_L = beta_U * [1 + (1 - Tax) * (Debt / Equity)].","Present dynamic Monte Carlo or two-way sensitivity data tables across WACC and terminal exit multiples.","Reconcile free cash flow to firm (FCFF) from NOPAT = EBIT * (1 - Tax), adding back D&A, deducting CapEx, and adjusting for Delta NWC."],recommendedOutputFormat:"Three-statement linked financial model schedule with explicit cell formulas, assumptions block, and sensitivity matrix.",reasoningChecklist:["Is lease interest expense properly segregated from operating expenses?","Does the terminal growth rate stay below long-term GDP growth (max 2.0% - 2.5%)?","Are debt service coverage ratios (DSCR) verified against default covenants?"]},{domain:"Fullstack Architecture & Modern React/TypeScript",category:"engineering",matchPattern:/\b(react|typescript|component|hook|state|frontend|tailwind|nextjs|vite|css|html|ui|ux)\b/i,injectedConstraints:["Produce 100% type-safe TypeScript with strict null checks and zero 'any' casts.","Ensure all interactive components adhere to WCAG 2.1 AA accessibility standards (ARIA roles, keyboard focus, screen-reader labels).","Implement resilient client-side error boundaries with graceful offline fallback states.","Avoid unnecessary re-renders; leverage memoization, React 19 compiler patterns, or atomic state primitives."],recommendedOutputFormat:"Self-contained modular React components (.tsx) with typed props interface, CSS token styling, and interactive unit test.",reasoningChecklist:["Is component state hydrated without layout shifts?","Are event listeners cleanly unmounted in cleanup functions?","Are touch and keyboard interactions accessible across mobile and desktop?"]},{domain:"Backend Services & Distributed Systems",category:"engineering",matchPattern:/\b(backend|api|fastapi|express|grpc|rest|kafka|rabbitmq|distributed|microservice|redis|concurrency)\b/i,injectedConstraints:["Design idempotent API endpoints supporting atomic transactional state transitions.","Incorporate distributed tracing (OpenTelemetry traceparent), request ID propagation, and structured JSON logs.","Implement circuit breakers, exponential backoff with jitter, and dead-letter queues for asynchronous workers.","Enforce strict schema validation and payload size ceilings on all inbound request bodies."],recommendedOutputFormat:"Production backend router/controller with typed request/response contracts, middleware authentication, and health probes.",reasoningChecklist:["Are all database transactions committed inside an explicit rollback block?","Is connection pooling bounded to prevent thread starvation?","Are rate-limiting headers returned on 429 status codes?"]},{domain:"Data Pipelines, Warehousing & BigQuery/SQL",category:"engineering",matchPattern:/\b(sql|bigquery|dataform|dbt|etl|elt|partition|clustering|snowflake|postgres|database)\b/i,injectedConstraints:["Optimize partition and clustering keys to avoid costly full-table scans in analytics warehouses.","Adhere to deterministic idempotent merges (MERGE INTO ... WHEN MATCHED THEN UPDATE WHEN NOT MATCHED THEN INSERT).","Avoid SELECT *; project only explicit columns required by downstream transforms.","Enforce schema evolution safety: backward-compatible column additions only, never destructive drops."],recommendedOutputFormat:"Parameterized SQL or Dataform/dbt model with audit metadata, source declarations, and automated quality assertions.",reasoningChecklist:["Are join keys clustered and indexed to prevent memory spill-to-disk?","Are null checks explicitly handled in aggregates?","Is the query cost bounded by partition pruning?"]},{domain:"Machine Learning, RAG & Vector Systems",category:"engineering",matchPattern:/\b(ml|machine learning|pytorch|tensorflow|rag|embedding|vector|fine-tuning|loss|transformer|tokens|llm)\b/i,injectedConstraints:["Prevent data leakage by strictly computing scaling, normalization, and token statistics on the train split only.","Incorporate hybrid dense/sparse vector retrieval with cross-encoder re-ranking for RAG pipelines.","State explicit loss functions, learning rate schedules (warmup + cosine decay), and gradient clipping thresholds.","Track evaluation metrics beyond accuracy: precision/recall AUC, calibration error, and inference latency per token."],recommendedOutputFormat:"Modular PyTorch/Python pipeline with dataset loaders, training loop, validation metrics, and export checkpoints.",reasoningChecklist:["Are random seeds set across numpy, torch, and Python runtime for reproducibility?","Are embeddings normalized before cosine distance calculation?","Are out-of-memory (OOM) guards and batch size auto-scaling implemented?"]},{domain:"Mathematical Proofs, Algorithms & Symbolic Logic",category:"science",matchPattern:/\b(math|proof|theorem|algorithm|complexity|calculus|algebra|asymptotic|matrix|combinatorics|differential)\b/i,injectedConstraints:["Provide rigorous deductive step-by-step logic; state all axioms, lemmas, and initial boundary conditions explicitly.","State exact asymptotic computational complexity (Big-O, Big-Omega, Big-Theta) for time and space.","Verify edge-case extremes (n=0, n=1, empty sets, negative infinity, limit convergence).","Render multi-term mathematical formulas in KaTeX / LaTeX formatting."],recommendedOutputFormat:"Formal mathematical derivation with Theorem -> Proof -> Lemma breakdown and algorithmic complexity statement.",reasoningChecklist:["Is the induction base case and inductive step formally proven?","Does the integral/series converge within the stated domain of convergence?","Are division-by-zero and singularity edge cases accounted for?"]},{domain:"Cybersecurity, Reverse Engineering & Zero-Trust",category:"engineering",matchPattern:/\b(security|vulnerability|exploit|cve|penetration|xss|csrf|buffer overflow|cryptography|tls|hashing)\b/i,injectedConstraints:["Adhere to constant-time comparison algorithms for all signature and password verifications to defeat timing attacks.","Use cryptographically secure random number generators (CSPRNG, crypto.randomBytes / secrets).","Enforce strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and SameSite cookie flags.","Never implement custom cryptographic primitives; leverage audited standards (AES-GCM, Ed25519, Argon2id)."],recommendedOutputFormat:"Threat model analysis (STRIDE) with reproduction proof-of-concept, CVE mapping, and defensive patch code.",reasoningChecklist:["Is user input sanitized against both reflected and DOM-based injection vectors?","Are encryption keys separated from ciphertext and managed in an HSM/KMS?","Does the authentication flow enforce replay protection via nonces?"]},{domain:"Legal Drafting, Compliance & IP Licensing",category:"legal",matchPattern:/\b(legal|contract|agreement|clause|liability|indemnification|license|patent|copyright|gdpr|compliance)\b/i,injectedConstraints:["Draft unambiguous, jurisdiction-aware contractual language with defined terms capitalized and cross-referenced.","Include standard commercial protections: mutual indemnification, limitation of liability, severance, and governing law.","Enforce explicit data privacy protections complying with GDPR, CCPA, and industry-standard security safeguards.","State representations and warranties with explicit disclaimers of implied merchantability."],recommendedOutputFormat:"Formatted legal agreement schedule with Section -> Clause hierarchy, definitions block, and signature blocks.",reasoningChecklist:["Are all defined terms used consistently throughout all provisions?","Is the limitation of liability cap tied to trailing fees paid (e.g. 12 months)?","Are termination-for-cause and transition assistance clauses clearly bounded?"]},{domain:"Creative Narrative, Worldbuilding & High-Conversion Copy",category:"creative",matchPattern:/\b(story|fiction|narrative|copywriting|headline|character|dialogue|poem|sonnet|script|screenplay)\b/i,injectedConstraints:["Demonstrate 'Show, Don't Tell' sensory detail; avoid exposition dumps and passive voice.","Maintain strict stylistic tone and character voice consistency across all narrative beats.","For copy: anchor headline around the primary customer pain wedge, establish high-signal social proof, and present a low-friction call-to-action.","If poetic form is requested (sonnet, villanelle, haiku), adhere strictly to meter (iambic pentameter) and rhyming schemes."],recommendedOutputFormat:"Polished narrative prose or high-converting copy hierarchy with headline, hook, body, and conversion CTA.",reasoningChecklist:["Does the pacing escalate naturally toward the climactic inflection point?","Are clich\xE9s and generic adjectives replaced with vivid, specific imagery?","Is the emotional arc grounded in authentic character motivation?"]},{domain:"Product Management, PRDs & Systems Strategy",category:"business",matchPattern:/\b(prd|product|roadmap|user story|acceptance criteria|feature|mvp|kpi|churn|retention|persona)\b/i,injectedConstraints:["Frame features around user outcomes and metrics (activation, retention, LTV) rather than technical outputs.","Structure user stories using the standard format: As a [persona], I want [action], so that [business value].","Define unambiguous, testable Given-When-Then acceptance criteria for every functional requirement.","Include explicit out-of-scope declarations and risk mitigation trade-offs."],recommendedOutputFormat:"Product Requirement Document (PRD) with Problem Statement, User Stories, Acceptance Matrix, and Rollout Strategy.",reasoningChecklist:["Are success metrics (leading and lagging KPIs) quantified with baseline targets?","Are edge-case error states specified from the end-user perspective?","Is the feature scoped for rapid incremental iteration?"]},{domain:"Systems Programming & Low-Level Concurrency",category:"engineering",matchPattern:/\b(rust|c\+\+|golang|assembly|memory|pointer|allocator|concurrency|mutex|thread|syscall)\b/i,injectedConstraints:["Guarantee memory safety: prevent data races, use-after-free, and double-free conditions.","In Rust, prioritize idiomatic borrow checker semantics; minimize unsafe blocks and document invariants for any raw pointer dereference.","Leverage RAII and smart pointers (std::unique_ptr, Arc/Mutex) for deterministic resource cleanup.","Optimize cache locality (struct-of-arrays vs array-of-structs) for hot performance loops."],recommendedOutputFormat:"Idiomatic source code with memory safety annotations, zero-allocation data structures, and benchmark suite.",reasoningChecklist:["Are deadlocks prevented by enforcing a global lock ordering hierarchy?","Are resources cleanly closed via Drop/destructor semantics even during panics?","Is memory overhead zero-cost at compile time?"]},{domain:"Cloud Architecture, DevOps & Infrastructure as Code",category:"engineering",matchPattern:/\b(aws|gcp|azure|terraform|kubernetes|docker|k8s|helm|ci\/cd|github actions|ingress|iam)\b/i,injectedConstraints:["Adhere to least-privilege IAM policies with resource-level scoping and temporary role assumption.","Ensure Infrastructure as Code (Terraform/CDK) is modular, parameterized across environments, and enables state locking.","Configure Kubernetes pods with resource requests/limits, readiness/liveness probes, and non-root security contexts.","Automate zero-downtime deployment strategies (blue-green or rolling updates with health checks)."],recommendedOutputFormat:"Declarative IaC template (Terraform/Kubernetes YAML) with variable definitions and automated CI validation workflow.",reasoningChecklist:["Are container images signed and scanned for vulnerabilities?","Are sensitive secrets injected via secure vault/secret references rather than plaintext?","Is high availability distributed across multiple availability zones?"]},{domain:"Academic Research, Literature Synthesis & Pedagogy",category:"science",matchPattern:/\b(research|paper|dissertation|citation|literature review|methodology|hypothesis|academic|journal)\b/i,injectedConstraints:["Ground all claims in peer-reviewed empirical evidence; cite seminal authors, publication years, and methodologies.","Critique methodological limitations (selection bias, confounding variables, statistical power).","Structure explanations progressively from intuitive conceptual analogies to formal mathematical rigor.","Distinguish between correlation and verified causal mechanisms."],recommendedOutputFormat:"Peer-reviewed journal paper structure: Abstract -> Background -> Methodology -> Findings -> Limitations.",reasoningChecklist:["Are alternative rival hypotheses explicitly considered and tested?","Is statistical significance accompanied by practical effect size (Cohen's d)?","Are citations accurately attributed without parametric hallucination?"]},{domain:"Mobile Application Engineering (iOS/Android/Flutter)",category:"engineering",matchPattern:/\b(ios|swift|swiftui|android|kotlin|jetpack|flutter|react native|mobile|app store|push notification)\b/i,injectedConstraints:["Design for memory-constrained mobile environments; release background resources and unbind observers.","Ensure seamless offline operation with local database caching (Room/CoreData/SQLite) and automatic sync on reconnect.","Handle dynamic screen sizes, orientation changes, and system accessibility font scaling.","Execute long-running network and compute tasks strictly on background threads/coroutines without blocking the main UI thread."],recommendedOutputFormat:"Clean architecture mobile module (Swift/Kotlin) with ViewModel, UI declaration, and offline repository.",reasoningChecklist:["Is 60fps/120fps UI rendering maintained without frame drops?","Are push notification payloads handled gracefully when the app is in the background?","Are runtime permissions requested contextually with clear user rationale?"]},{domain:"Executive Strategy & Commercial Deal Structuring",category:"business",matchPattern:/\b(executive|pitch|outbound|sales|partnership|sponsor|enterprise|closing|deal|investor)\b/i,injectedConstraints:["Lead with the quantifiable economic wedge ($/time saved, revenue unlocked, risk eliminated) in the opening sentence.","Eliminate apologetic preambles, marketing fluff, and rhetorical clich\xE9s.","Provide a zero-friction integration or adoption roadmap with a clear, low-commitment next step.","Anticipate the primary procurement/security objections upfront with concrete proof points."],recommendedOutputFormat:"High-impact executive brief: 1. Core Value Wedge -> 2. Verifiable Evidence -> 3. Concrete Action Path.",reasoningChecklist:["Is the message tailored directly to the specific decision-maker's incentives?","Does the proposal provide immediate demonstrable ROI?","Is the call to action binary, actionable, and low-friction?"]},{domain:"Meta-Prompt Engineering & Frontier System Instructions",category:"engineering",matchPattern:/\b(write a prompt|create a prompt|build a prompt|design a prompt|give me a prompt|prompt for|prompt that can|prompt to help|system prompt|how should i prompt|how do i prompt|better prompt|prompt looking for|craft a prompt|prompt template|agent prompt|meta-prompt)\b/i,injectedConstraints:["Output MUST be an executable, production-grade system prompt or meta-prompt architecture with delimited XML/Markdown blocks.","Include explicit system persona, invariant constraints, negative constraints (anti-patterns to reject), input schemas, and few-shot exemplars.","Provide a self-verification checklist so the target AI model tests and verifies its output before returning it.","NEVER generate generic software code when the user is explicitly requesting a prompt or prompt optimization."],recommendedOutputFormat:"Production System Prompt Architecture: <system_role>, <context>, <invariants>, <negative_constraints>, <input_schema>, <few_shot_examples>, <verification_rubric>.",reasoningChecklist:["Does the synthesized prompt clearly establish the AI's persona, boundaries, and objective?","Are edge cases and anti-hallucination guardrails explicitly defined?","Is the output format strictly specified with verification assertions?"]},{domain:"Laws of Physics, Thermodynamics & Dimensional Mechanics",category:"science",matchPattern:/\b(physics|thermodynamic|entropy|navier-stokes|quantum|maxwell|relativity|conservation of|gravity|mass-energy|joule|watt|kelvin|newton|pascal|momentum|dimensional analysis|buckingham|fluid dynamics|lorentz|doppler|speed of light)\b/i,injectedConstraints:["Enforce fundamental physical conservation laws: conservation of mass, momentum, energy (Delta U = Q - W), and entropy non-decrease (dS >= 0).","Verify dimensional homogeneity via Buckingham Pi theorem; ensure all physical quantities possess consistent SI base units ([M], [L], [T], [I], [Theta], [N], [J]).","Analyze limiting asymptotic boundary cases (e.g., non-relativistic limit v << c, Knudsen number Kn -> 0, zero-temperature ground states T -> 0).","Include explicit physical falsification criteria to stress-test any derived equation or claim against empirical reality."],recommendedOutputFormat:"Rigorous Physical Derivation & Analysis: 1. Physical Axioms & Invariants -> 2. Dimensional Homogeneity Proof -> 3. Mathematical Formulation -> 4. Asymptotic Boundary Verification & Falsification Suite.",reasoningChecklist:["Are units and physical dimensions strictly consistent on both sides of every equation?","Does the system obey the Second Law of Thermodynamics and causality?","Are boundary limits (e.g., v -> c, T -> 0, scale extremes) physically coherent?"]},{domain:"Real-World Situations, Crisis Management & Operations",category:"operations",matchPattern:/\b(real life|real-life|situation|crisis|emergency|operations|logistics|supply chain|hospital|shutdown|authorities|disaster|incident response|escalation|factory|plant)\b/i,injectedConstraints:["Ground decisions in real-world human cognitive capacity, logistical bottlenecks, and physical resource availability.","Establish explicit crisis triage levels, communication chains of command, and fail-safe recovery procedures.","Eliminate panic-inducing ambiguity; provide clear, actionable directives with contingency decision trees.","Clearly delineate between verified empirical facts, probabilistic inferences, and unknown operational parameters."],recommendedOutputFormat:"Actionable Operational Playbook: 1. Situation Assessment & Triage -> 2. Immediate Containment Directives -> 3. Stakeholder Communication Protocol -> 4. Recovery & Verification Checklist.",reasoningChecklist:["Does the protocol minimize operational downtime and prioritize human safety?","Are communication directives clear, unambiguous, and panic-free?","Is there a validated secondary fallback if primary communications or power rails fail?"]},{domain:"Human Communication Dynamics, Cognitive Calibration & Rhetoric",category:"creative",matchPattern:/\b(communication style|tone|pedagogical|explain to|all ages|high school|graduate|socratic|audience|rhetoric|dialogue|interpersonal|diplomacy|calmly|negotiation|empathy|clarity)\b/i,injectedConstraints:["Dynamically calibrate cognitive load and terminology to the target audience (e.g., intuitive analogies for novices, rigorous formalisms for researchers).","Preserve 100% conceptual and technical precision across all communication styles; never simplify facts to the point of falsehood.","Structure explanations with Socratic scaffolding: establish intuition first, introduce formal definitions, and verify understanding with interactive questions.","Account for emotional resonance, psychological safety, and clear actionable takeaways."],recommendedOutputFormat:"Calibrated Communication Architecture: 1. Core Message / Intuitive Hook -> 2. In-Depth Multi-Perspective Breakdown -> 3. Common Misconceptions Addressed -> 4. Comprehension Verification Checks.",reasoningChecklist:["Is the tone tailored to the intended audience without being condescending or overly dense?","Is technical accuracy maintained while improving accessibility?","Are verification questions provided to confirm recipient understanding?"]}];static getDomainEnrichment(i){let t=i.trim();if(!t)return this.synthesizeUniversalRule("General Knowledge & Computing");for(let e of this.DOMAIN_RULES)if(e.matchPattern.test(t))return e;return this.synthesizeUniversalRule(t)}static synthesizeUniversalRule(i){let e=i.replace(/[^\w\s]/g,"").split(/\s+/).filter(a=>a.length>3&&!/^(this|that|with|from|have|make|what|when|where|which|about|please|would|could)$/i.test(a)).slice(0,3).join(" ")||"General Technical Reasoning",o=e.charAt(0).toUpperCase()+e.slice(1);return{domain:`${o} & Systems Invariants`,category:"engineering",matchPattern:/.*/,injectedConstraints:[`Execute with authoritative expert rigor grounded in established ${o} first principles.`,"Enforce strict logical consistency with zero unverified assumptions or speculative non-answers.","Provide self-contained, fully resolved deliverables with explicit edge cases and boundary conditions.","Prioritize high signal-to-noise clarity; eliminate conversational filler, throat-clearing, and meta-commentary."],recommendedOutputFormat:"Structured authoritative deliverable: 1. Specification / Core Principles -> 2. Complete Artifact -> 3. Empirical Verification Test.",reasoningChecklist:[`Are all claims verified against established domain standards in ${o}?`,"Are edge cases, exceptions, and boundary failures addressed?","Is the solution immediately actionable without requiring missing context?"]}}};var K=class{static benchmarkPrompt(i){let t=i.trim();if(!t)return this.emptyBenchmarks();let e=t.split(/\s+/).filter(Boolean),o=Math.ceil(e.length*1.33),a=/<\/?[a-z_]+>/i.test(t),r=/<(scratchpad|thinking|antthinking)>/i.test(t),n=/\b(step[- ]by[- ]step|think step by step|walk through step by step|let's think step by step)\b/i.test(t),c=/\b(json schema|output format: json|pydantic|\{[^{}]*"\w+"\s*:)/i.test(t),m=/(---\s*BEGIN|```context|<context>|###\s*Context|BEGIN REFERENCE)/i.test(t),x=/\b(do not|never|must not|avoid|strictly|prohibited)\b/i.test(t),y=/\b(example\s*\d*:|input:[\s\S]*output:)/i.test(t),v=/\b(can you please|could you please|as an ai|i would like you to|please kindly)\b/i.test(t),b=/\b([a-zA-Z0-9_\-\.\/]+\.(ts|js|py|json|html|css|rs|go|cpp|c|md|sql))\b/i.test(t)||/@\w+/.test(t),d=/\b(test|assert|verify|validation|spec|unit test)\b/i.test(t),k=/\b(diff|patch|before\/after|\+ |\- |replace)\b/i.test(t),I=/\b(npm|pnpm|cargo|pytest|pip|python|git|docker|curl|bash)\b/i.test(t),M=/\b(mcp|tool_call|function_call|call_tool)\b/i.test(t),P=75,N=[],S=[];a?P+=15:N.push("Enclose task and constraints in XML tags (<task>, <constraints>) for strict instruction adherence."),r?P+=10:e.length>40&&N.push("Include a <scratchpad> or <thinking> block to maximize Claude's complex architectural reasoning."),v&&(P-=12,S.push("Conversational preamble degrades Claude's system prompt signal.")),P=Math.min(100,Math.max(25,P));let E=80,R=[],A=[];n?(E-=28,A.push("CRITICAL: Remove 'think step-by-step'. Micromanaging o1/o3 reasoning heuristics degrades test-time compute performance.")):(E+=10,R.push("Optimal: Autonomous reasoning enabled without micromanaging internal thinking steps.")),x?E+=10:R.push("Specify strict edge-case acceptance criteria and boundary invariants."),E=Math.min(100,Math.max(25,E));let F=72,D=[],p=[];c?F+=18:D.push("Define deterministic JSON schema with explicit property types for reliable tool invocation."),y?F+=10:D.push("Provide 1 concrete few-shot demonstration example to lock formatting precision."),x||D.push("Add explicit negative constraints to eliminate hallucinations."),F=Math.min(100,Math.max(25,F));let w=74,B=[],_=[];m?w+=16:B.push("Demarcate reference documents from actionable tasks using clear block headers."),e.length<30&&B.push("Gemini excels with rich background context; anchor the user persona and target outcome."),w=Math.min(100,Math.max(25,w));let H=75,ne=[],oe=[];x?H+=15:ne.push("Define strict algorithmic boundaries and computational invariants."),n&&(H-=18,oe.push("DeepSeek R1 self-reflects autonomously; omit manual step-by-step guidance in favor of verification tests.")),H=Math.min(100,Math.max(25,H));let U=73,re=[],ae=[];v?ae.push("Grok 3 delivers highest signal when given unfiltered, imperative commands."):U+=12,x?U+=15:re.push("Anchor hard real-world ground truth constraints and verification criteria."),U=Math.min(100,Math.max(25,U));let Y=71,J=[],f=[];m||a?Y+=14:J.push("Provide explicit system persona and structured markdown sections."),e.length<25&&J.push("Llama 3.3 benefits from detailed operational guidelines and explicit format contracts."),Y=Math.min(100,Math.max(25,Y));let l=76,u=[],g=[];b||d?l+=16:u.push("Provide explicit language type annotations and test assertion harness."),x&&(l+=8),l=Math.min(100,Math.max(25,l));let C=72,W=[],Z=[];b?(C+=18,W.push("Optimal: File paths identified for multi-file shadow workspace edits.")):W.push("Reference specific file paths (e.g. src/auth.ts) to guide Cursor Composer's multi-file index."),k&&(C+=10),C=Math.min(100,Math.max(25,C));let se=74,be=[],Ce=[];b&&d?se+=16:be.push("Specify workspace checkpoints and tool execution sequences for Cascade Flow."),se=Math.min(100,Math.max(25,se));let ee=73,ge=[],ve=[];I?(ee+=15,ge.push("Optimal: Command-line verification commands provided for terminal tool loops.")):ge.push("Specify build or test commands (e.g. npm test, pytest) for Claude Code's verification loop."),v&&(ee-=10,ve.push("Terminal CLI agents perform best with concise, imperative task directives.")),ee=Math.min(100,Math.max(25,ee));let ce=70,ye=[],xe=[];e.length<=40&&b?ce+=18:e.length>80?xe.push("Keep Copilot Edits instructions scoped and concise to avoid diffuse editor diffs."):ye.push("Scope instructions to specific functions or symbols for clean inline edits."),ce=Math.min(100,Math.max(25,ce));let le=72,he=[],Ae=[];b&&(k||d)?(le+=18,he.push("Optimal: Git-diff targets and validation commands identified.")):he.push("State files to add to git session and test command to auto-commit on pass."),le=Math.min(100,Math.max(25,le));let de=75,ke=[],Ee=[];d&&e.length>=35?de+=15:ke.push("Define full-lifecycle acceptance criteria, API endpoints, and browser test requirements."),de=Math.min(100,Math.max(25,de));let pe=73,we=[],Pe=[];return M||b?pe+=16:we.push("Specify explicit tool call permissions, target files, and terminal confirmation boundaries."),pe=Math.min(100,Math.max(25,pe)),[{id:"claude-3-7-sonnet",name:"Claude 3.7 / 3.5 Sonnet",category:"model",provider:"Anthropic",badgeColor:"#d97706",compatibilityScore:P,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.003",profileKey:"claude_xml",recommendations:N,warnings:S,keyStrengths:["Hierarchical XML parsing","Scratchpad reasoning","Zero-preamble steering"]},{id:"openai-o3-o1",name:"o3 / o3-mini / o1",category:"model",provider:"OpenAI",badgeColor:"#10b981",compatibilityScore:E,latencyRating:"Reasoning Delay",tokenEstimate:o,costEstimatePer1k:"$0.015",profileKey:"openai_o",recommendations:R,warnings:A,keyStrengths:["Autonomous test-time compute","Formal invariant solving","Mathematical proofs"]},{id:"gpt-4o",name:"GPT-4o / GPT-4.5",category:"model",provider:"OpenAI",badgeColor:"#0ea5e9",compatibilityScore:F,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.0025",profileKey:"gpt4o_schema",recommendations:D,warnings:p,keyStrengths:["Structured JSON outputs","Multimodal inputs","Strict schema contracts"]},{id:"gemini-2-flash",name:"Gemini 2.0 Flash / Pro",category:"model",provider:"Google",badgeColor:"#8b5cf6",compatibilityScore:w,latencyRating:"Ultra Fast",tokenEstimate:o,costEstimatePer1k:"$0.0001",profileKey:"gemini_context",recommendations:B,warnings:_,keyStrengths:["2M+ context window","Ultra-low latency","Rich reference grounding"]},{id:"deepseek-r1",name:"DeepSeek R1 / V3",category:"model",provider:"DeepSeek",badgeColor:"#3b82f6",compatibilityScore:H,latencyRating:"Reasoning Delay",tokenEstimate:o,costEstimatePer1k:"$0.00055",profileKey:"deepseek_r1",recommendations:ne,warnings:oe,keyStrengths:["Open-weights frontier reasoning","Algorithmic synthesis","Boundary edge testing"]},{id:"grok-3",name:"Grok 3",category:"model",provider:"xAI",badgeColor:"#ec4899",compatibilityScore:U,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.002",profileKey:"grok_direct",recommendations:re,warnings:ae,keyStrengths:["Real-time search integration","Direct high-signal answers","Zero bureaucratic hedging"]},{id:"llama-3-3",name:"Llama 3.3 70B",category:"model",provider:"Meta",badgeColor:"#6366f1",compatibilityScore:Y,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.0007",profileKey:"llama_system",recommendations:J,warnings:f,keyStrengths:["System steerability","Standardized markdown adherence","Local/private hosting"]},{id:"qwen-2-5-coder",name:"Qwen 2.5 Coder 32B",category:"model",provider:"Alibaba",badgeColor:"#14b8a6",compatibilityScore:l,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"$0.0008",profileKey:"qwen_coder",recommendations:u,warnings:g,keyStrengths:["Repository-level code synthesis","Type annotations","Clean test assertions"]},{id:"cursor-composer",name:"Cursor Composer / Agent",category:"bot",provider:"Anysphere",badgeColor:"#a855f7",compatibilityScore:C,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Subscription",profileKey:"cursor_composer",recommendations:W,warnings:Z,keyStrengths:["Multi-file shadow workspace edits","@file index parsing","Fast iterative diffs"]},{id:"windsurf-cascade",name:"Windsurf Cascade",category:"bot",provider:"Codeium",badgeColor:"#06b6d4",compatibilityScore:se,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Subscription",profileKey:"windsurf_cascade",recommendations:be,warnings:Ce,keyStrengths:["Flow architecture","Real-time tool execution","Workspace state tracking"]},{id:"claude-code-cli",name:"Claude Code CLI",category:"bot",provider:"Anthropic",badgeColor:"#f59e0b",compatibilityScore:ee,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Token-based",profileKey:"claude_code",recommendations:ge,warnings:ve,keyStrengths:["Unix pipeline integration","Automated test loops","Codebase search & replace"]},{id:"copilot-edits",name:"GitHub Copilot Edits",category:"bot",provider:"GitHub / MS",badgeColor:"#22c55e",compatibilityScore:ce,latencyRating:"Fast",tokenEstimate:o,costEstimatePer1k:"Subscription",profileKey:"copilot_edits",recommendations:ye,warnings:xe,keyStrengths:["In-editor localized edits","Repo context indexing","Style matching"]},{id:"aider",name:"Aider Pair Programmer",category:"bot",provider:"Open Source",badgeColor:"#f43f5e",compatibilityScore:le,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Bring Your Own Key",profileKey:"aider_diff",recommendations:he,warnings:Ae,keyStrengths:["Git-commit automation","Repo map AST analysis","Automated test recovery"]},{id:"devin",name:"Devin Autonomous",category:"bot",provider:"Cognition",badgeColor:"#84cc16",compatibilityScore:de,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Enterprise ACU",profileKey:"devin_fullstack",recommendations:ke,warnings:Ee,keyStrengths:["Full-lifecycle engineering","Shell + browser execution","End-to-end deployment"]},{id:"cline-roo",name:"Cline / Roo Code",category:"bot",provider:"Open Source",badgeColor:"#eab308",compatibilityScore:pe,latencyRating:"Autonomous Multi-Step",tokenEstimate:o,costEstimatePer1k:"Bring Your Own Key",profileKey:"cline_mcp",recommendations:we,warnings:Pe,keyStrengths:["MCP tool protocol","Atomic file modifications","Configurable auto-approvals"]}]}static emptyBenchmarks(){return[{id:"claude-3-7-sonnet",name:"Claude 3.7 / 3.5 Sonnet",cat:"model",prov:"Anthropic",color:"#d97706",rate:"Fast",cost:"$0.003",prof:"claude_xml"},{id:"openai-o3-o1",name:"o3 / o3-mini / o1",cat:"model",prov:"OpenAI",color:"#10b981",rate:"Reasoning Delay",cost:"$0.015",prof:"openai_o"},{id:"gpt-4o",name:"GPT-4o / GPT-4.5",cat:"model",prov:"OpenAI",color:"#0ea5e9",rate:"Fast",cost:"$0.0025",prof:"gpt4o_schema"},{id:"gemini-2-flash",name:"Gemini 2.0 Flash / Pro",cat:"model",prov:"Google",color:"#8b5cf6",rate:"Ultra Fast",cost:"$0.0001",prof:"gemini_context"},{id:"deepseek-r1",name:"DeepSeek R1 / V3",cat:"model",prov:"DeepSeek",color:"#3b82f6",rate:"Reasoning Delay",cost:"$0.00055",prof:"deepseek_r1"},{id:"grok-3",name:"Grok 3",cat:"model",prov:"xAI",color:"#ec4899",rate:"Fast",cost:"$0.002",prof:"grok_direct"},{id:"llama-3-3",name:"Llama 3.3 70B",cat:"model",prov:"Meta",color:"#6366f1",rate:"Fast",cost:"$0.0007",prof:"llama_system"},{id:"qwen-2-5-coder",name:"Qwen 2.5 Coder 32B",cat:"model",prov:"Alibaba",color:"#14b8a6",rate:"Fast",cost:"$0.0008",prof:"qwen_coder"},{id:"cursor-composer",name:"Cursor Composer / Agent",cat:"bot",prov:"Anysphere",color:"#a855f7",rate:"Autonomous Multi-Step",cost:"Subscription",prof:"cursor_composer"},{id:"windsurf-cascade",name:"Windsurf Cascade",cat:"bot",prov:"Codeium",color:"#06b6d4",rate:"Autonomous Multi-Step",cost:"Subscription",prof:"windsurf_cascade"},{id:"claude-code-cli",name:"Claude Code CLI",cat:"bot",prov:"Anthropic",color:"#f59e0b",rate:"Autonomous Multi-Step",cost:"Token-based",prof:"claude_code"},{id:"copilot-edits",name:"GitHub Copilot Edits",cat:"bot",prov:"GitHub / MS",color:"#22c55e",rate:"Fast",cost:"Subscription",prof:"copilot_edits"},{id:"aider",name:"Aider Pair Programmer",cat:"bot",prov:"Open Source",color:"#f43f5e",rate:"Autonomous Multi-Step",cost:"BYOK",prof:"aider_diff"},{id:"devin",name:"Devin Autonomous",cat:"bot",prov:"Cognition",color:"#84cc16",rate:"Autonomous Multi-Step",cost:"Enterprise",prof:"devin_fullstack"},{id:"future-deep-reasoner",name:"Next-Gen Deep Reasoner (o3+ / Claude 4 / Gemini 3)",cat:"future",prov:"Frontier AGIs",color:"#ec4899",rate:"Reasoning Delay",cost:"Adaptive Compute",prof:"future_deep_reasoner"},{id:"future-agent-swarm",name:"Autonomous Agent Swarm (Multi-Agent AGI)",cat:"future",prov:"Autonomous Swarms",color:"#8b5cf6",rate:"Autonomous Multi-Step",cost:"Swarm Compute",prof:"future_agent_swarm"},{id:"future-formal-verifier",name:"Neuro-Symbolic Verifier (Lean 4 / Z3 SAT AI)",cat:"future",prov:"Formal Solvers",color:"#10b981",rate:"Fast",cost:"SAT Compute",prof:"future_formal_verifier"},{id:"future-infinite-context",name:"Infinite-Context Engine (10M+ Streamer)",cat:"future",prov:"Streaming AGIs",color:"#06b6d4",rate:"Ultra Fast",cost:"Linear Attention",prof:"future_infinite_context"},{id:"cline-roo",name:"Cline / Roo Code",cat:"bot",prov:"Open Source",color:"#eab308",rate:"Autonomous Multi-Step",cost:"BYOK",prof:"cline_mcp"}].map(t=>({id:t.id,name:t.name,category:t.cat,provider:t.prov,badgeColor:t.color,compatibilityScore:0,latencyRating:t.rate,tokenEstimate:0,costEstimatePer1k:t.cost,profileKey:t.prof,recommendations:["Provide input prompt to benchmark"],warnings:[],keyStrengths:["Benchmark pending input"]}))}};var X=class{static HESITATION_PATTERNS=[/\b(i don't know|not sure|i am new|beginner|never done this|confused|help me understand|eli5|explain like i'm|explain simply|what is|how do i even)\b/i,/\b(is it possible to|can someone tell me|is that right|sorry if this is dumb|newbie|first time)\b/i];static YOUTH_ELEMENTARY_PATTERNS=[/\b(for school|in class|homework|for kids|explain to my kid|i am \d+ years old|like a game|minecraft|roblox|scratch|simple words)\b/i];static ARCHITECT_PATTERNS=[/\b(asymptotic|idempotent|concurrency|race condition|lock-free|zero-copy|p99|wal|mvcc|cap theorem|byzantine|ast|simd|vectorized)\b/i,/\b(invariants|formal verification|distributed consensus|cache invalidation|backpressure|heuristics)\b/i];static EXECUTIVE_PATTERNS=[/\b(roi|capex|opex|cost benefit|timeline|roadmap|deliverable|stakeholder|sla|kpi|executive summary|vendor comparison)\b/i];static countSyllables(i){let t=i.toLowerCase().replace(/[^a-z]/g,"");if(!t||t.length<=3)return 1;let e=t.replace(/(?:[^laeiouy]|ed|es|e)$/,"").replace(/^y/,"").match(/[aeiouy]{1,2}/g);return e?Math.max(1,e.length):1}static analyzeCognitivePattern(i,t="General"){let e=i.trim();if(!e)return this.defaultAnalysis();let o=e.split(/\s+/).filter(Boolean),a=e.split(/[.!?]+/).filter(w=>w.trim().length>0),r=Math.max(1,a.length),n=Math.max(1,o.length),c=new Set(o.map(w=>w.toLowerCase())),m=Math.round(c.size/n*100)/100,x=0;for(let w of o)x+=this.countSyllables(w);let y=n/r,v=x/n,b=Math.round(Math.max(0,Math.min(100,206.835-1.015*y-84.6*v))),d=Math.max(1,Math.round(.39*y+11.8*v-15.59)),k=0;for(let w of this.HESITATION_PATTERNS){let B=e.match(w);B&&(k+=B.length)}let I=Math.min(100,k*35),M="Apply";/\b(what is|define|list|where is|who|when)\b/i.test(e)?M="Remember":/\b(explain|why|how does|summarize|clarify|difference between)\b/i.test(e)?M="Understand":/\b(build|write|create|implement|design|generate|code)\b/i.test(e)?M="Create":/\b(compare|contrast|bench|audit|evaluate|critique|pros and cons)\b/i.test(e)?M="Evaluate":/\b(debug|why does.*fail|diagnose|root cause|isolate|profile)\b/i.test(e)&&(M="Analyze");let P=this.YOUTH_ELEMENTARY_PATTERNS.some(w=>w.test(e)),N=this.ARCHITECT_PATTERNS.some(w=>w.test(e)),S=this.EXECUTIVE_PATTERNS.some(w=>w.test(e)),E="practitioner",R="Practitioner (Intermediate)",A="Conversant";P||I>=50||d<=5||b>=85?(E="explorer",R="Explorer / Youth (All Ages & Beginners)",A="Novice"):S?(E="executive",R="Executive / Strategic (Outcomes & ROI)",A="Conversant"):N||d>=13&&m>=.75?(E="architect",R="Staff Architect / Specialist",A="Native"):(E="practitioner",R="Practitioner / Professional",A="Fluent");let F=Math.min(100,Math.round(d*4+(100-b)*.4+I*.3)),D="",p=[];switch(E){case"explorer":D="Zone of Proximal Development (ZPD) Metaphorical Scaffolding. Deconstruct complex concepts into concrete daily-life analogies (e.g. restaurant orders, toy blocks). Zero condescension, zero unexplained jargon.",p.push("Explain the core concept using an intuitive real-world analogy before presenting any code."),p.push("Break down the implementation into bite-sized, numbered checkpoints with friendly explanations."),p.push("Define any unavoidable technical terms simply in plain English."),p.push("Ensure code examples are fully commented and easy to run without hidden dependencies.");break;case"practitioner":D="Pragmatic Best-Practice Scaffolding. Deliver clean idiomatic patterns, explain the 'why' behind choices, and warn about common production edge cases.",p.push("Deliver production-grade code adhering strictly to language conventions and idiomatic design."),p.push("Highlight common edge cases, null checks, and error-handling requirements."),p.push("Provide clean type annotations and minimal runnable usage examples.");break;case"architect":D="Cognitive Load Optimization (Sweller). Maximum token-to-signal density. Deliver mathematical invariant equations, formal interface contracts, and automated verification test harnesses. Zero conversational preamble.",p.push("Provide formal interface contracts with zero pseudocode, mock implementations, or omissions."),p.push("Enforce asymptotic time/space bounds, concurrency safety, and boundary edge assertions."),p.push("Omit introductory greetings, concluding summaries, and rhetorical transitions entirely.");break;case"executive":D="Executive Strategic Framing. Deliver high-level outcomes, trade-off matrices, risk mitigations, and concrete timelines before technical minutiae.",p.push("Structure response with an Executive Summary highlighting ROI, deliverables, and architecture trade-offs."),p.push("Present technical comparisons in clear Markdown trade-off tables."),p.push("Clarify implementation risks, resource requirements, and next immediate milestone.");break}return{audience:E,audienceLabel:R,fleschKincaidGrade:d,readingEaseScore:b,vocabularyRichnessTTR:m,bloomsLevel:M,cognitiveLoadIndex:F,uncertaintyScore:I,domainFamiliarity:A,scaffoldingStrategy:D,adaptiveDirectives:p}}static defaultAnalysis(){return{audience:"practitioner",audienceLabel:"Practitioner / Professional",fleschKincaidGrade:8,readingEaseScore:70,vocabularyRichnessTTR:.6,bloomsLevel:"Apply",cognitiveLoadIndex:40,uncertaintyScore:0,domainFamiliarity:"Conversant",scaffoldingStrategy:"Balanced standard technical scaffolding.",adaptiveDirectives:["Provide clean, production-ready implementation."]}}};var V=class{static PROFILES={architect:{lens:"architect",title:"Systems Architect",subtitle:"High-Availability, Concurrency & Invariant Security",badgeColor:"#38bdf8",primaryDomainFocus:"Distributed Systems & Infrastructure",equalizerDirectives:["Enforce formal computational invariants, boundary threshold recovery, and crash-only idempotency.","Require explicit failure modes (network partition, thread starvation, connection pool exhaustion).","State asymptotic time and memory space complexity (Big-O) for all algorithms.","Deliver self-contained production code with zero unstated mock implementations."],crossPollinationDirectives:["Include ergonomic developer-experience (DX): clear error codes, actionable logs, and clean API contracts that frontend designers can consume effortlessly.","Provide a minimal visual architecture flowchart or ASCII state transition diagram."]},designer:{lens:"designer",title:"Product & UI/UX Designer",subtitle:"Design Systems, Motion Ergonomics & WCAG AAA",badgeColor:"#ec4899",primaryDomainFocus:"Design Tokens, Spatial UI & Accessibility",equalizerDirectives:["Structure all visual styling around cohesive Design Tokens: typography scale, 4px/8px spacing grid, color contrast, and elevation shadows.","Enforce strict WCAG 2.2 AAA accessibility: ARIA landmarks, focus rings, keyboard tab-order, and high-contrast color ratios.","Implement fluid spring physics and micro-interactions with graceful prefers-reduced-motion fallbacks.","Ensure 100% responsive fluid breakpoints across mobile, tablet, desktop, and ultra-wide viewports."],crossPollinationDirectives:["Inject full engineering state management (idle, loading, error, success, empty states) with TypeScript prop interfaces.","Define deterministic API contracts and mock payloads so backend engineers can implement the design immediately without ambiguity."]},analyst:{lens:"analyst",title:"Data & Intelligence Analyst",subtitle:"Deterministic Queries, Statistical Rigor & Visual Contracts",badgeColor:"#10b981",primaryDomainFocus:"Data Pipelines, Statistics & Insights",equalizerDirectives:["Structure SQL and data transformations with deterministic idempotency, partition pruning, and index optimization.","Enforce statistical validity: report sample sizes, confidence intervals, and hypothesis test criteria (p-values, effect size).","Specify exact visualization data contracts: chart axes, scales, aggregations, tooltips, and legend hierarchies.","Handle nulls, NaN values, data skew, and time-zone conversions defensively."],crossPollinationDirectives:["Deliver intuitive executive summaries explaining statistical insights in plain English for non-technical stakeholders.","Include actionable business takeaways and risk thresholds alongside quantitative figures."]},creator:{lens:"creator",title:"Everyday Creator & Specialist",subtitle:"Zero Technical Barrier & Universal Idea Synthesis",badgeColor:"#eab308",primaryDomainFocus:"Universal Plain English to Elite Engineering Spec",equalizerDirectives:["Deconstruct ideas into clean, welcoming step-by-step milestones with zero intimidating technical jargon.","Use concrete, relatable everyday analogies so the logic is intuitive and transparent to any age group.","Guarantee that all generated code or instructions are 100% complete, runnable, and explained simply.","Encourage creative exploration while silently infusing production-grade engineering best practices under the hood."],crossPollinationDirectives:["Silently inject production-grade error-handling and security safeguards so the user's project is enterprise-ready from day one.","Provide a clear 'Next Steps' checklist so the creator knows exactly how to test and run their creation."]}};static getEqualizerBlock(i,t=!0){let e=this.PROFILES[i]||this.PROFILES.creator,o=`### Disciplinary Equalizer: ${e.title} (${e.subtitle})
`;return o+=e.equalizerDirectives.map(a=>`- ${a}`).join(`
`),t&&(o+=`

### Cross-Pollination Bridge (Leveling the Field across Design & Engineering)
`,o+=e.crossPollinationDirectives.map(a=>`- ${a}`).join(`
`)),o}static detectDisciplinaryLens(i){let t=i.toLowerCase(),e=(t.match(/\b(design|ui|ux|color|font|typography|spacing|padding|button|card|modal|css|tailwind|figma|animation|framer|motion|accessible|aria|theme|layout|responsive)\b/g)||[]).length,o=(t.match(/\b(architecture|backend|microservice|distributed|concurrency|thread|database|postgres|kafka|redis|api|grpc|latency|scale|docker|kubernetes|security|auth)\b/g)||[]).length,a=(t.match(/\b(data|sql|query|table|dataset|analytics|metrics|dashboard|chart|visualization|statistics|model|regression|correlation|pipeline|etl|pandas)\b/g)||[]).length,r=(t.match(/\b(help me|how to|i want to make|simple|beginner|explain|student|homework|kids|story|recipe|idea|plain english)\b/g)||[]).length;return e>o&&e>a&&e>=2?"designer":a>o&&a>=2?"analyst":o>=2?"architect":r>=1||e===0&&o===0&&a===0?"creator":"architect"}};var G=class{static CONSENSUS_TRAPS=[{trigger:/\b(cache|fast|latency|speed|performance)\b/i,trap:"Generic Redis / Memcached in-memory caching layer",alternative:"Deterministic derived state / zero-copy memory-mapped ring buffers"},{trigger:/\b(scale|scaling|traffic|load)\b/i,trap:"Standard horizontal Kubernetes microservices behind an Nginx round-robin load balancer",alternative:"Cell-based self-contained actor clusters with geographic partition affinity"},{trigger:/\b(database|store|data|storage|persist)\b/i,trap:"Standard monolithic PostgreSQL CRUD with ORM schema migrations",alternative:"Append-only immutable event streams with client-side CRDT materialization"},{trigger:/\b(ui|dashboard|frontend|interface)\b/i,trap:"Cookie-cutter React + Tailwind + Redux admin dashboard with standard cards",alternative:"Spatial canvas / keyboard-driven command palette / reactive streaming event mesh"},{trigger:/\b(ai|llm|agent|bot|rag)\b/i,trap:"Generic naive vector similarity search (RAG) with ChromaDB and langchain",alternative:"Deterministic hierarchical AST grammar masking with dual-process heuristic gatekeepers"},{trigger:/\b(auth|login|security|permission)\b/i,trap:"Standard JWT bearer tokens stored in localStorage with centralized auth server",alternative:"Cryptographic capability-based object tokens (Macaroons / ZK-attestation) verified at network edge"},{trigger:/\b(search|filter|find)\b/i,trap:"Elasticsearch / OpenSearch cluster with polling re-indexers",alternative:"Probabilistic roaring bitmaps / inverted bloom index embedded directly in SSD NVMe pages"}];static BISOCIATION_DOMAINS=[{domain:"Cellular Immunology & Apoptosis",mechanism:"Decoy antigen receptors and programmed cell death (apoptosis) for toxic state elimination.",analogy:"Instead of garbage collection or memory leak debugging, processes have a genetically programmed lifespan and self-terminate harmlessly after fulfilling their burst."},{domain:"Mycelial Transport Networks",mechanism:"Decentralized nutrient-driven pressure gradients without a central routing ledger.",analogy:"Instead of a centralized message broker, nodes push work along highest-conductivity gradients; dead nodes wither while congested nodes naturally shed load."},{domain:"Quantum Superposition & Wave Interference",mechanism:"Simultaneous speculative multi-path calculation where erroneous paths undergo destructive interference.",analogy:"Instead of deciding which branch to execute, evaluate both concurrently in lightweight SIMD lanes, cancelling out the failing outcome without branching penalties."},{domain:"Avionics & Triple-Modular Redundancy",mechanism:"Dissimilar hardware/software implementations voting on flight invariants in real time.",analogy:"Instead of trusting one AI model or algorithm, run three radically dissimilar engines; proceed only when mathematical invariants match, instantly neutralizing hallucinations."},{domain:"Game Theory & Mechanism Design",mechanism:"Incentive-compatible Nash equilibria where defecting or failing is mathematically costlier than cooperating.",analogy:"Instead of defensive security firewalls, craft APIs where adversarial inputs or malicious attacks donate computational entropy that accelerates valid queries."},{domain:"Thermodynamics & Simulated Annealing",mechanism:"High-temperature exploration that progressively cools into optimal global energy minima.",analogy:"Early stages of ideation permit extreme stochastic leaps, gradually freezing parameters as deterministic invariants lock in."}];static synthesizeBrainstorm(i){let t=i.trim(),e=t.toLowerCase(),o=[],a=[];for(let b of this.CONSENSUS_TRAPS)b.trigger.test(e)&&(o.push(b.trap),a.push(b.alternative));o.length===0&&(o.push("Generic CRUD web service with standard relational tables"),a.push("Single-binary autonomous worker with zero external dependencies"));let r=Math.abs(t.split("").reduce((b,d)=>b+d.charCodeAt(0),0)),n=this.BISOCIATION_DOMAINS[r%this.BISOCIATION_DOMAINS.length],c=this.BISOCIATION_DOMAINS[(r+1)%this.BISOCIATION_DOMAINS.length],m={id:"inversion",title:"Asymmetric Inversion",codename:"Vector A: The Inverted Constraint",paradigm:"Jacobi Inversion ('Invert, always invert'). Turns the problem on its head by eliminating the need to solve it in the orthodox direction.",consensusTrapForbidden:o[0],counterIntuitiveMechanism:"Forbid the conventional solution entirely. Instead of optimizing the bottleneck, remove the component that experiences the bottleneck.",domainSource:"First-Principles Physics & Jacobi Inversion",concreteArchitecture:`1. Identify the orthodox component (${o[0]}).
2. Treat its presence as a catastrophic failure of imagination.
3. Implement: ${a[0]||"Compile-time static evaluation"}.
4. Result: Zero ongoing maintenance, infinite scaling bound.`,provocativeOperator:"PO: What if the system functions flawlessly when the primary server is completely offline?",promptDirective:`[ORTHOGONAL DIRECTIVE - INVERSION]
- Strictly forbid the consensus solution: DO NOT use ${o.join(" OR ")}.
- Formulate an inverted architecture: how does the system accomplish the objective without storing or managing intermediate state?
- Prove that the inverted approach eliminates at least 80% of conventional codebase overhead.`},x={id:"bisociation",title:"Bisociative Cross-Domain Fusion",codename:"Vector B: The Biological / Physical Analog",paradigm:`Arthur Koestler's Bisociation. Cross-pollinates the problem space with the natural invariants of ${n.domain}.`,consensusTrapForbidden:o[1]||"Monolithic state synchronization",counterIntuitiveMechanism:n.mechanism,domainSource:n.domain,concreteArchitecture:`${n.analogy}

Key Invariant: Translate ${n.domain} principles directly into software primitives (e.g. self-healing circuits, decaying leases, gradient-directed messaging).`,provocativeOperator:"PO: The software is not an engineered machine; it is a living organism where individual parts die so the whole survives.",promptDirective:`[ORTHOGONAL DIRECTIVE - BISOCIATION]
- Infuse principles of ${n.domain} into this solution.
- Mechanism: ${n.mechanism}
- Map biological/physical resilience directly to software failure-mode handling; produce a novel design that no standard LLM would propose.`},y={id:"transcendence",title:"Paradigm Transcendence",codename:"Vector C: The Moonshot Leap",paradigm:"Eliminates the entire problem category through radical abstraction or zero-knowledge formal verification.",consensusTrapForbidden:"Iterative incremental optimization of existing architectures",counterIntuitiveMechanism:"Shift from reactive orchestration to deterministic mathematical certainty (proof-carrying code, zero-state execution).",domainSource:"Theoretical Computer Science & Cryptographic Truth",concreteArchitecture:"Replace run-time coordination with compile-time mathematical proofs or client-side autonomous edge actors. Zero central authority, zero synchronization latency.",provocativeOperator:"PO: The operation takes 0 milliseconds because the answer is already mathematically bounded before the request is issued.",promptDirective:`[ORTHOGONAL DIRECTIVE - PARADIGM TRANSCENDENCE]
- Discard conventional industry incrementalism.
- Synthesize a radical next-generation architecture that renders today's standard stack obsolete.
- Structure the solution as a self-verifying, zero-coordination execution fabric with formal mathematical proof of correctness.`},v=`### PROMPTSMITH AUTONOMOUS LATERAL BRAINSTORMING BLUEPRINT
**Objective**: Shatter conventional consensus thinking and engineer an unprecedented orthogonal path.

#### Consensus Traps Strictly Forbidden
Standard AI models will instinctively propose:
${o.map((b,d)=>`  ${d+1}. [FORBIDDEN] ${b}`).join(`
`)}
*Rule: Do not propose, reference, or iterate upon any of the forbidden consensus tropes above.*

#### Lateral Vector A: The Inverted Constraint (Jacobi/Munger)
- **Premise**: ${m.paradigm}
- **Provocation**: ${m.provocativeOperator}
- **Architectural Shift**: ${m.concreteArchitecture.replace(/\n/g," ")}

#### Lateral Vector B: Bisociative Collision (${n.domain})
- **Biological/Physical Source**: ${n.domain}
- **Mechanism**: ${n.mechanism}
- **Software Embodiment**: ${n.analogy}

#### Lateral Vector C: Paradigm Transcendence (The Moonshot)
- **Provocation**: ${y.provocativeOperator}
- **Mechanism**: Replace runtime coordination with deterministic edge invariants or zero-knowledge mathematical guarantees.

#### Synthesis Mandate
1. Present the 3 orthogonal options in an executive comparison matrix (Trade-offs, Novelty Index 1-100, Scalability Ceiling).
2. Deep-dive into the single most breakthrough path, delivering concrete runnable architecture, interfaces, and mathematical bounds.
3. Highlight precisely why this solution out-thinks standard AI outputs by at least an order of magnitude.`;return{challenge:t,consensusAttractors:o,coreContradiction:{parameterA:"Maximum Speed & Expressivity",parameterB:"Zero Operational Complexity & Overhead",trizResolution:"TRIZ Principle 10 (Prior Action) combined with Principle 28 (Mechanics Substitution)"},vectors:[m,x,y],masterBrainstormPrompt:v,recommendedPath:"inversion"}}};var ie=class{static analyzeFutureReadiness(i){let t=i.trim(),e=t.toLowerCase(),o=t.split(/\s+/).filter(Boolean),a=/\b(stop when|terminate when|success criteria|acceptance criteria|done criteria|definition of done)\b/i.test(t),r=/\b(do not explore|prune|strictly limit search|focus exclusively on|ignore alternatives)\b/i.test(t),n=/\b(invariant|precondition|postcondition|formal verification|assert|provable|deterministic)\b/i.test(t),c=/\b(agent|handoff|protocol|role isolation|payload schema|byzantine|consensus)\b/i.test(t),m=/(===|---|```context|\[SYSTEM|### Specification)/i.test(t),x=65,y=[],v=[],b="Medium";a&&r?(b="Low",x+=12,v.push("Definitive Termination Criteria bounded")):(b="High",y.push("Missing explicit termination condition: Deep reasoning models risk infinite exploration loops."),x-=8);let d="Medium";m&&o.length>20?(d="Low",x+=10,v.push("Anchor Signposts resist attention decay")):(d="High",y.push("Lack of structural anchors: Multi-million token context engines will suffer premise drift."),x-=7);let k=55;n?(k=95,x+=13,v.push("Formal Hoare verification invariants present")):y.push("Informal specification: Future neuro-symbolic solvers cannot mathematically verify output.");let I=50;return c&&(I=92,v.push("Multi-agent swarm handoff contracts specified")),{preemptiveScore:Math.max(30,Math.min(100,x)),driftRisk:d,searchLoopRisk:b,formalVerifiabilityScore:k,swarmReadinessScore:I,identifiedVulnerabilities:y,preemptiveInvariants:v,futureProofEnvelope:`### UNIVERSAL FUTURE-MODEL PREEMPTION ENVELOPE (NEXT-GEN AGIS & SWARMS)
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
- **Anchor Invariant**: Re-anchor all execution steps directly against the primary objective; reject premise drift across long token horizons.`}}};var $=class{static FILLER_PATTERNS=[/\b(can you please|could you please|please kindly|i would like you to|i want you to)\b/gi,/\b(as an ai language model|as a helpful assistant|in order to help me)\b/gi,/\b(feel free to|make sure that you|try your best to)\b/gi,/\b(basically|essentially|actually|obviously|literally)\b/gi];static ROLE_PATTERNS=[/\b(you are (a|an)|act as (a|an)|your role is|expert in|specialist in)\b/i,/<role>[\s\S]*?<\/role>/i,/### Role/i];static CONSTRAINT_PATTERNS=[/\b(do not|never|must not|only|strictly|ensure|avoid|limit to|maximum of|minimum of)\b/gi,/<constraints>[\s\S]*?<\/constraints>/i,/### Constraints/i];static SCHEMA_PATTERNS=[/\b(json|yaml|xml|markdown|table|schema|format as|output format)\b/i,/<output_format>[\s\S]*?<\/output_format>/i,/```(json|yaml|markdown|csv)/i];static REASONING_PATTERNS=[/\b(step[- ]by[- ]step|think|reason|verify|analyze|deliberate|chain[- ]of[- ]thought)\b/i,/<thinking>[\s\S]*?<\/thinking>/i];static analyze(i,t="Cursor / Claude Code"){let e=i.trim();if(!e)return this.emptyMetrics();let a=e.split(/\s+/).filter(Boolean).length,r=Math.ceil(a*1.33),n=0;this.ROLE_PATTERNS.some(_=>_.test(e))?n=20:/\b(senior|engineer|architect|auditor|specialist)\b/i.test(e)&&(n=12);let c=0,m=e.match(new RegExp(this.CONSTRAINT_PATTERNS[0],"gi"))||[];m.length>=3?c=25:m.length>0&&(c=m.length*8);let x=0;this.SCHEMA_PATTERNS.some(_=>_.test(e))?x=20:/\b(list|bullet|code|diff)\b/i.test(e)&&(x=10);let y=0;this.REASONING_PATTERNS.some(_=>_.test(e))&&(y+=10),/\b(if unsure|edge case|exception|boundary|fallback)\b/i.test(e)&&(y+=5);let v=0;for(let _ of this.FILLER_PATTERNS){let H=e.match(_);H&&(v+=H.length)}let b=Math.max(0,20-v*4),d=v*3,k=Math.max(15,r-d),I=Math.max(0,Math.round((r-k)/r*100)),M=Math.min(100,Math.max(10,n+c+x+y+b)),P=Q.getDomainEnrichment(e),N=P?P.domain:"General Reasoning & Code",S=[],E=[],R=[];P&&S.push(`Recognized ${P.domain} domain patterns`),n>=15?S.push("Strong persona & system identity"):R.push("Explicit System Persona / Role Boundary"),c>=18?S.push("Well-defined operational boundaries"):E.push("Vulnerable to scope-drift (insufficient negative constraints)"),x>=15?S.push("Explicit output schema defined"):R.push("Deterministic Output Schema (JSON/Markdown tags)"),b<14?E.push(`Contains ${v} conversational filler phrases`):S.push("High token-to-signal density");let A=X.analyzeCognitivePattern(e,N);S.push(`Cognitive calibration: ${A.audienceLabel} (Grade ${A.fleschKincaidGrade})`);let F=V.detectDisciplinaryLens(e),D=V.PROFILES[F];S.push(`Equalizer Lens: ${D.title} (${D.primaryDomainFocus})`);let p=K.benchmarkPrompt(e),w=G.synthesizeBrainstorm(e),B=ie.analyzeFutureReadiness(e);return{iqScore:M,wordCount:a,estimatedTokens:r,optimizedTokens:k,tokenSavingsPercent:I,constraintScore:c,roleScore:n,schemaScore:x,evasionScore:y,efficiencyScore:b,detectedDomain:N,targetRuntime:t,strengths:S,weaknesses:E,missingElements:R,benchmarks:p,cognitive:A,discipline:F,equalizer:D,brainstorm:w,future:B}}static emptyMetrics(){return{iqScore:0,wordCount:0,estimatedTokens:0,optimizedTokens:0,tokenSavingsPercent:0,constraintScore:0,roleScore:0,schemaScore:0,evasionScore:0,efficiencyScore:0,detectedDomain:"None",targetRuntime:"Cursor / Claude Code",strengths:[],weaknesses:["Prompt is empty"],missingElements:["All core components"],benchmarks:K.benchmarkPrompt(""),cognitive:X.analyzeCognitivePattern(""),discipline:"creator",equalizer:V.PROFILES.creator,brainstorm:G.synthesizeBrainstorm(""),future:ie.analyzeFutureReadiness("")}}};var O=class{static enhance(i,t="precision",e="Cursor / Claude Code",o,a){let r=i.trim();if(!r)return"";let n=Q.getDomainEnrichment(r),c=n?n.domain:"General",m=X.analyzeCognitivePattern(r,c),x=o||m.audience,y=this.getScaffoldingBlock(x),v=a||V.detectDisciplinaryLens(r),b=V.getEqualizerBlock(v,!0),d="";switch(t){case"claude_xml":d=this.enhanceClaudeXml(r,e,n);break;case"openai_o":d=this.enhanceOpenAiReasoning(r,e,n);break;case"gpt4o_schema":d=this.enhanceGpt4oSchema(r,e,n);break;case"gemini_context":d=this.enhanceGeminiContext(r,e,n);break;case"deepseek_r1":d=this.enhanceDeepSeekR1(r,e,n);break;case"grok_direct":d=this.enhanceGrokDirect(r,e,n);break;case"llama_system":d=this.enhanceLlamaSystem(r,e,n);break;case"qwen_coder":d=this.enhanceQwenCoder(r,e,n);break;case"cursor_composer":d=this.enhanceCursorComposer(r,e,n);break;case"windsurf_cascade":d=this.enhanceWindsurfCascade(r,e,n);break;case"claude_code":d=this.enhanceClaudeCode(r,e,n);break;case"copilot_edits":d=this.enhanceCopilotEdits(r,e,n);break;case"aider_diff":d=this.enhanceAiderDiff(r,e,n);break;case"devin_fullstack":d=this.enhanceDevinFullstack(r,e,n);break;case"cline_mcp":d=this.enhanceClineMcp(r,e,n);break;case"precision":d=this.enhancePrecision(r,e,n);break;case"adversarial":d=this.enhanceAdversarial(r,e,n);break;case"executive":d=this.enhanceExecutive(r,n);break;case"orthogonal_brainstorm":d=G.synthesizeBrainstorm(r).masterBrainstormPrompt;break;case"future_deep_reasoner":d=this.enhanceFutureReasoner(r);break;case"future_agent_swarm":d=this.enhanceFutureSwarm(r);break;case"future_formal_verifier":d=this.enhanceFutureVerifier(r);break;case"future_infinite_context":d=this.enhanceFutureInfinite(r);break;default:d=this.enhancePrecision(r,e,n);break}return b&&!d.includes("### Disciplinary Equalizer")&&(t==="claude_xml"?d+=`

<disciplinary_equalizer>
${b}
</disciplinary_equalizer>`:d+=`

${b}`),x==="explorer"?t==="claude_xml"?d+=`

<audience_scaffolding>
${y}
</audience_scaffolding>`:d+=`

${y}`:x==="architect"&&t!=="openai_o"&&t!=="deepseek_r1"?d+=`

${y}`:x==="executive"&&t!=="executive"&&(d+=`

${y}`),d}static resolveSystemRole(i,t){return i?i.domain.includes("Meta-Prompt")?`Frontier Prompt Architect & Agent Specification Engineer operating in ${t}`:i.category==="science"||i.domain.includes("Physics")?`Theoretical & Applied Physicist / Empirical Systems Scientist operating in ${t}`:i.domain.includes("Mathematical")?`Pure & Applied Mathematician / Formal Logic Verifier operating in ${t}`:i.category==="operations"||i.domain.includes("Real-World")?`Principal Operations Commander & Crisis Response Strategist operating in ${t}`:i.domain.includes("Human Communication")?`Master Communicator & Cognitive Scaffolding Strategist operating in ${t}`:i.category==="business"?`Principal Strategy Architect & Quantitative Financial Modeler operating in ${t}`:i.category==="legal"?`Senior Commercial Counsel & Regulatory Compliance Specialist operating in ${t}`:`Senior Staff Architect & Systems Verifier operating in ${t}. Specialization: ${i.domain}`:`Frontier Software Architect & Empirical Systems Verifier operating in ${t}`}static resolveOutputSpec(i){return i?i.recommendedOutputFormat:"Deliver self-contained, fully resolved technical artifacts followed by an explicit verification test suite."}static stripFiller(i){return i.replace(/\b(can you please|could you please|please kindly|i would like you to|i want you to)\b/gi,"").replace(/\b(as an ai language model|as a helpful assistant|in order to help me)\b/gi,"").replace(/\b(feel free to|make sure that you|try your best to)\b/gi,"").replace(/\b(basically|essentially|actually|obviously|literally)\b/gi,"").replace(/\s+/g," ").trim()}static enhancePrecision(i,t,e){let o=this.stripFiller(i),a=this.resolveSystemRole(e,t),r=this.resolveOutputSpec(e),n=e?e.injectedConstraints.map(c=>`- [${e.domain}] ${c}`).join(`
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
</output_format>`}static enhanceClaudeXml(i,t,e){let o=this.stripFiller(i),a=this.resolveSystemRole(e,t),r=this.resolveOutputSpec(e),n=e?e.injectedConstraints.map(c=>`  * ${c}`).join(`
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
- Warn against common edge cases, boundary failures, and concurrency hazards.`}}};var j=te(require("vscode")),z=te(require("fs")),L=te(require("path")),T=class{static inspectWorkspace(){let i=j.workspace.workspaceFolders,t=j.window.activeTextEditor,e=[],o="Standalone Editor",a="";if(i&&i.length>0){a=i[0].uri.fsPath,o=i[0].name;let x=L.join(a,"package.json");if(z.existsSync(x))try{let y=JSON.parse(z.readFileSync(x,"utf-8")),v={...y.dependencies||{},...y.devDependencies||{}},b=["typescript","react","next","vue","svelte","tailwindcss","express","fastify","nestjs","prisma","drizzle-orm","zod","vitest","jest","playwright","esbuild","vite","firebase-functions","firebase-admin","stripe"];for(let d of b)v[d]&&e.push(`${d}@${String(v[d]).replace(/^[\^~]/,"")}`);e.length===0&&e.push("Node.js / npm")}catch{e.push("Node.js")}z.existsSync(L.join(a,"tsconfig.json"))&&!e.some(y=>y.startsWith("typescript"))&&e.push("TypeScript (tsconfig)"),(z.existsSync(L.join(a,"pyproject.toml"))||z.existsSync(L.join(a,"requirements.txt")))&&e.push("Python"),z.existsSync(L.join(a,"Cargo.toml"))&&e.push("Rust (Cargo)"),z.existsSync(L.join(a,"go.mod"))&&e.push("Go (go.mod)")}let r="None",n="plaintext",c=[];if(t){n=t.document.languageId,r=a?L.relative(a,t.document.uri.fsPath).replace(/\\/g,"/"):L.basename(t.document.uri.fsPath);let x=t.document.getText().slice(0,12e3),y=[/\b(?:export\s+)?(?:async\s+)?function\s+([a-zA-Z0-9_]+)/g,/\b(?:export\s+)?(?:class|interface|type|enum)\s+([a-zA-Z0-9_]+)/g,/\bdef\s+([a-zA-Z0-9_]+)\s*\(/g,/\bfn\s+([a-zA-Z0-9_]+)\s*[<(]/g,/\bfunc\s+(?:\([^)]+\)\s*)?([a-zA-Z0-9_]+)\s*\(/g];for(let v of y){let b;for(;(b=v.exec(x))!==null;)b[1]&&!c.includes(b[1])&&c.length<14&&c.push(b[1])}}let m=["### Grounded Workspace & File Context"];return m.push(`- Workspace: \`${o}\``),r!=="None"&&m.push(`- Active File: \`${r}\` (Language: \`${n}\`)`),e.length>0&&m.push(`- Verified Stack & Packages: ${e.slice(0,10).map(x=>`\`${x}\``).join(", ")}`),c.length>0&&m.push(`- Active File Symbols: ${c.map(x=>`\`${x}\``).join(", ")}`),m.push("- Grounding Rule: Reuse existing project packages and symbol signatures above; do not invent unverified libraries."),{hasWorkspace:!!(i&&i.length>0),workspaceName:o,activeFileRelative:r,languageId:n,detectedStack:e,extractedSymbols:c,contextSummaryBlock:m.join(`
`)}}static lintAmbiguities(i){let t=(i||"").trim(),e=[];return t&&(/\b(typescript|javascript|python|rust|go|golang|java|c\+\+|c#|sql|html|css|react|node|bash|powershell)\b/i.test(t)||e.push({id:"missing_runtime",severity:"HIGH",label:"No target language or runtime specified",fixSnippet:"Target Runtime: Use strict TypeScript / Node.js with explicit type annotations."}),/\b(error|exception|fallback|null|empty|timeout|retry|edge case|boundary|invalid)\b/i.test(t)||e.push({id:"missing_error_bounds",severity:"MEDIUM",label:"Missing error handling & boundary conditions",fixSnippet:"Boundary & Error Handling: Explicitly handle null/empty inputs, timeouts, and invalid states without silent failures."}),/\b(json|xml|markdown|diff|file|function|schema|test|interface|return|deliverable)\b/i.test(t)||e.push({id:"missing_output_contract",severity:"MEDIUM",label:"No explicit output format or deliverable contract",fixSnippet:"Output Contract: Return complete, drop-in production code with zero placeholders or elided sections."}),/\b(test|verify|assert|unit test|benchmark|invariant|prove|validation)\b/i.test(t)||e.push({id:"missing_verification",severity:"LOW",label:"No verification or unit test assertion requested",fixSnippet:"Verification: Include deterministic unit test assertions covering nominal and boundary edge cases."})),e}static async exportWorkspaceRulesFile(i,t,e=!1){let o=j.workspace.workspaceFolders;if(!o||o.length===0)return{ok:!1,message:"Open a project folder in your IDE first to export "+i+"."};let a=o[0].uri.fsPath,r=L.join(a,i),n=L.dirname(r);z.existsSync(n)||z.mkdirSync(n,{recursive:!0});let c=this.inspectWorkspace(),m=`# ${i} - Generated & Compacted by PromptSmith
# Workspace: ${c.workspaceName} | Stack: ${c.detectedStack.join(", ")||c.languageId}

`,x=["## Core Engineering Invariants","- Write complete, production-ready code with zero TODO placeholders or truncated sections.","- Preserve existing project module boundaries, naming conventions, and dependency versions.","- Validate all external inputs, boundary conditions, and error states explicitly.","- Prefer small, deterministic, testable functions over deeply nested stateful logic."].join(`
`),y=t&&t.trim()?`${m}${c.contextSummaryBlock}

${x}

## Active Task & Prompt Blueprint
${t.trim()}
`:`${m}${c.contextSummaryBlock}

${x}
`;try{if(z.writeFileSync(r,y,"utf-8"),!e){let v=await j.workspace.openTextDocument(r);await j.window.showTextDocument(v,{preview:!1})}return{ok:!0,filePath:r,message:`Wrote compacted rules to ${i} (${y.length} chars).`}}catch(v){return{ok:!1,message:`Failed to write ${i}: ${v instanceof Error?v.message:String(v)}`}}}static detectSecrets(i){let t=(i||"").trim();if(!t)return[];let e=[{label:"OpenAI / Anthropic Key (sk-...)",regex:/\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{16,}\b/g},{label:"GitHub Token (ghp_/github_pat_)",regex:/\b(?:ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g},{label:"AWS Access Key (AKIA...)",regex:/\bAKIA[0-9A-Z]{16}\b/g},{label:"Google API Key (AIza...)",regex:/\bAIza[0-9A-Za-z_-]{35}\b/g},{label:"Slack Token (xoxb/xoxp)",regex:/\bxox[baprs]-[0-9A-Za-z-]{10,}\b/g},{label:"Stripe Live Key (sk_live_/rk_live_)",regex:/\b(?:sk|rk)_live_[0-9A-Za-z]{16,}\b/g},{label:"Bearer / JWT Token",regex:/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g},{label:"Database URI with Password",regex:/\b(?:postgres|postgresql|mysql|mongodb(?:\+srv)?|redis):\/\/[^:\s]+:[^@\s]+@[^\s]+/gi},{label:"Private Key Block",regex:/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g}],o=[];for(let a of e){let r=t.match(a.regex);r&&r.length>0&&o.push({label:a.label,count:r.length})}return o}static scrubSecrets(i){let t=i||"",e=0,o=[{regex:/\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{16,}\b/g,token:"[REDACTED_API_KEY]"},{regex:/\b(?:ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g,token:"[REDACTED_GITHUB_TOKEN]"},{regex:/\bAKIA[0-9A-Z]{16}\b/g,token:"[REDACTED_AWS_KEY]"},{regex:/\bAIza[0-9A-Za-z_-]{35}\b/g,token:"[REDACTED_GCP_KEY]"},{regex:/\bxox[baprs]-[0-9A-Za-z-]{10,}\b/g,token:"[REDACTED_SLACK_TOKEN]"},{regex:/\b(?:sk|rk)_live_[0-9A-Za-z]{16,}\b/g,token:"[REDACTED_STRIPE_KEY]"},{regex:/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g,token:"[REDACTED_JWT]"},{regex:/\b((?:postgres|postgresql|mysql|mongodb(?:\+srv)?|redis):\/\/[^:\s]+:)([^@\s]+)(@[^\s]+)/gi,token:"$1[REDACTED_DB_PASS]$3"},{regex:/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----[\s\S]*?-----END (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g,token:"[REDACTED_PRIVATE_KEY_BLOCK]"}];for(let a of o){let r=t.match(a.regex);r&&r.length>0&&(e+=r.length,t=t.replace(a.regex,a.token))}return{scrubbed:t,redactedCount:e}}static detectActiveModelHook(){let i=(j.env.appName||"").toLowerCase(),t=j.workspace.workspaceFolders,e=t&&t.length>0?t[0].uri.fsPath:"";if(i.includes("cursor"))return{hostIde:"Cursor IDE",detectedModelLabel:"Cursor Composer (Claude 3.7)",recommendedProfile:"cursor_composer",nativeRuleFile:".cursorrules"};if(i.includes("windsurf"))return{hostIde:"Windsurf IDE",detectedModelLabel:"Windsurf Cascade",recommendedProfile:"windsurf_cascade",nativeRuleFile:".windsurfrules"};if(i.includes("antigravity"))return{hostIde:"Antigravity IDE",detectedModelLabel:"Gemini 2.5 Pro Agent",recommendedProfile:"gemini_context",nativeRuleFile:"CLAUDE.md"};let o=j.extensions.all.map(a=>a.id.toLowerCase());if(o.some(a=>a.includes("claude-code")||a.includes("anthropic")))return{hostIde:"VS Code",detectedModelLabel:"Claude Code CLI",recommendedProfile:"claude_code",nativeRuleFile:"CLAUDE.md"};if(o.some(a=>a.includes("claude-dev")||a.includes("cline")||a.includes("roo-cline")))return{hostIde:"VS Code",detectedModelLabel:"Cline / Roo Agent",recommendedProfile:"cline_mcp",nativeRuleFile:".cursorrules"};if(o.some(a=>a.includes("github.copilot")))return{hostIde:"VS Code",detectedModelLabel:"GitHub Copilot Edits",recommendedProfile:"copilot_edits",nativeRuleFile:".github/copilot-instructions.md"};if(e){if(z.existsSync(L.join(e,".cursorrules")))return{hostIde:"VS Code",detectedModelLabel:"Cursor Rules Bridge",recommendedProfile:"cursor_composer",nativeRuleFile:".cursorrules"};if(z.existsSync(L.join(e,".windsurfrules")))return{hostIde:"VS Code",detectedModelLabel:"Windsurf Cascade Bridge",recommendedProfile:"windsurf_cascade",nativeRuleFile:".windsurfrules"};if(z.existsSync(L.join(e,"CLAUDE.md")))return{hostIde:"VS Code",detectedModelLabel:"Claude Code Bridge",recommendedProfile:"claude_code",nativeRuleFile:"CLAUDE.md"}}return{hostIde:j.env.appName||"VS Code",detectedModelLabel:"Claude 3.7 / Frontier Auto",recommendedProfile:"claude_xml",nativeRuleFile:".github/copilot-instructions.md"}}static compileVoiceTranscript(i){let t=(i||"").trim();if(!t)return{cleaned:"",corrections:0,detectedCommand:null};let e=t,o=0,a=null,r=[{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+claude\s*$/i,cmd:"claude_xml"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+(?:openai|o3|gpt)\s*$/i,cmd:"openai_o"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+cursor\s*$/i,cmd:"cursor_composer"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?optimize\s+(?:this\s+)?for\s+copilot\s*$/i,cmd:"copilot_edits"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?scrub\s+(?:all\s+)?secrets\s*$/i,cmd:"scrub_secrets"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?ground\s+in\s+workspace\s*$/i,cmd:"ground_workspace"},{rx:/[,.\s]*(?:promptsmith\s+)?(?:please\s+)?brainstorm(?:\s+this)?\s*$/i,cmd:"orthogonal_brainstorm"}];for(let y of r)y.rx.test(e)&&(a=y.cmd,e=e.replace(y.rx,""),o++);let n=/([^.,;!?]+?)(?:,\s*|\s+)(?:no\s+wait(?:\s+actually)?|scratch\s+that|actually\s+no|wait\s+no\s+make\s+it|i\s+mean\s+instead)\s*,?\s*([^.,;!?]+)/gi;e=e.replace(n,(y,v,b)=>(o++,String(b).trim())),e=e.replace(/\bsnake\s+case\s+([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+){0,3})/gi,(y,v)=>(o++,String(v).trim().toLowerCase().replace(/\s+/g,"_"))),e=e.replace(/\bcamel\s+case\s+([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+){0,3})/gi,(y,v)=>{o++;let b=String(v).trim().toLowerCase().split(/\s+/);return b[0]+b.slice(1).map(d=>d.charAt(0).toUpperCase()+d.slice(1)).join("")}),e=e.replace(/\bpascal\s+case\s+([a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+){0,3})/gi,(y,v)=>(o++,String(v).trim().toLowerCase().split(/\s+/).map(b=>b.charAt(0).toUpperCase()+b.slice(1)).join("")));let c=[[/\bdot\s+env\b/gi,".env"],[/\bpackage\s+dot\s+json\b/gi,"package.json"],[/\bts\s*config\s+dot\s+json\b/gi,"tsconfig.json"],[/\btriple\s+equals\b/gi,"==="],[/\bnot\s+equals\b/gi,"!=="],[/\bfat\s+arrow\b/gi,"=>"]];for(let[y,v]of c)y.test(e)&&(o++,e=e.replace(y,v));let m=/\b(?:uh+|um+|uhm+|er+|ah+|like\s+basically|you\s+know\s+what\s+i\s+mean|you\s+know|sort\s+of\s+like|kind\s+of\s+like|so\s+yeah|i\s+guess\s+like)\b[,.\s]*/gi,x=e;return e=e.replace(m," "),e!==x&&o++,e=e.replace(/\s{2,}/g," ").trim(),e.length>0&&(e=e.charAt(0).toUpperCase()+e.slice(1)),{cleaned:e,corrections:o,detectedCommand:a}}static simulateMultiTurnSavings(i,t){let e=(i||"").trim()?i.trim().split(/\s+/).length:120,o=Math.max(80,Math.round(e*1.35)),a=Math.max(.18,Math.min(.65,(t||35)/100)),r=Math.max(40,Math.round(o*(1-a))),n=20,c=n*(n+1)/2,m=Math.round((o-r)*c+o*8),x=m/1e6*15,y=m/1e6*20,v=m/1e6*10;return{originalTokensPerTurn:o,optimizedTokensPerTurn:r,turnsSimulated:n,cumulativeTokensSaved:m,claudeSonnetSavedUsd:x.toFixed(3),openaiO3SavedUsd:y.toFixed(3),gpt4oSavedUsd:v.toFixed(3)}}};var ue=class{static getHtml(i,t,e,o,a,r,n,c,m=!0,x="Claude 3.7 / Auto",y=[]){let v=(i||"Select text in your editor and press Alt+P to improve it.").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),b=K.benchmarkPrompt(i),d=b.filter(p=>p.category==="model"),k=b.filter(p=>p.category==="bot"),I=b.filter(p=>p.category==="future"),M=e.cognitive,P=n||M.audience,N=c||e.discipline,S=V.PROFILES[N]||e.equalizer,E=T.inspectWorkspace(),R=T.lintAmbiguities(i),A=T.detectSecrets(i),F=T.simulateMultiTurnSavings(i,e.tokenSavingsPercent),D="Calibrated for maximum reasoning precision: high-density tokens, invariant constraints, and zero conversational fluff.";return P==="explorer"?D="Friendly learning mode active: intuitive real-world analogies, step-by-step scaffolding, and clear explanations.":P==="architect"?D="Staff-architect precision active: formal Hoare invariants, strict schema validation, and maximum signal density.":P==="executive"&&(D="Executive decision mode active: strategic deliverables, risk trade-offs, and clear ROI contracts."),`<!DOCTYPE html>
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
        <span class="license-badge ${a?"":"trial"}">
          ${a?"PRO UNLOCKED":r+" TRIES LEFT"}
        </span>
      </div>
      <div class="hud-sub">${D}</div>
    </div>
  </div>

  <!-- Zero-Clutter Model Auto-Hook & Voice-to-Spec Dictation Bridge -->
  <div class="panel-box" style="border-color: rgba(56, 189, 248, 0.35); background: rgba(56, 189, 248, 0.06);">
    <div class="panel-header">
      <span class="panel-label" style="color: #38bdf8;">
        Auto-Hook Model Bridge &amp; Voice-to-Spec
      </span>
      <span class="badge-pill pill-cyan">${x}</span>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-top:4px;">
      <label style="display:inline-flex; align-items:center; gap:5px; font-size:9.5px; color:#e2e8f0; cursor:pointer;" title="Works alongside your active IDE model automatically without cluttering your screen">
        <input type="checkbox" id="chk-auto-hook" ${m?"checked":""} onchange="toggleAutoHook(this.checked)" style="accent-color:#38bdf8; cursor:pointer;">
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
      <span class="badge-pill pill-cyan">${M.audienceLabel} &bull; ${e.detectedDomain}</span>
    </div>
    <div style="font-size: 9.5px; color: #94a3b8; margin-bottom: 4px;">
      Readability: <b>Grade ${M.fleschKincaidGrade}</b> &bull; Bloom's Taxonomy: <b>${M.bloomsLevel}</b>
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
      <span class="badge-pill pill-emerald">${S.title}</span>
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
      ${d.map(p=>{let w=p.compatibilityScore>=85?"score-green":p.compatibilityScore>=70?"score-yellow":"";return`
        <div class="target-card ${o===p.profileKey?"active":""}" onclick="selectTarget('${p.profileKey}')">
          <div class="t-top">
            <span>${p.name}</span>
            <span class="t-score ${w}">${p.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${p.provider}</span>
            <span>${p.latencyRating}</span>
          </div>
        </div>`}).join("")}
    </div>

    <!-- Bots Grid -->
    <div class="targets-scroll-grid" id="grid-bots" style="display:none;">
      ${k.map(p=>{let w=p.compatibilityScore>=85?"score-green":p.compatibilityScore>=70?"score-yellow":"";return`
        <div class="target-card ${o===p.profileKey?"active":""}" onclick="selectTarget('${p.profileKey}')">
          <div class="t-top">
            <span>${p.name}</span>
            <span class="t-score ${w}">${p.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${p.provider}</span>
            <span>${p.latencyRating}</span>
          </div>
        </div>`}).join("")}
    </div>

    <!-- Future AI Grid -->
    <div class="targets-scroll-grid" id="grid-future" style="display:none;">
      ${I.map(p=>{let w=p.compatibilityScore>=85?"score-green":p.compatibilityScore>=70?"score-yellow":"";return`
        <div class="target-card ${o===p.profileKey?"active":""}" onclick="selectTarget('${p.profileKey}')">
          <div class="t-top">
            <span>${p.name}</span>
            <span class="t-score ${w}">${p.compatibilityScore}%</span>
          </div>
          <div class="t-bottom">
            <span>${p.provider}</span>
            <span>${p.latencyRating}</span>
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
      <span class="badge-pill pill-emerald">${E.workspaceName}</span>
    </div>
    <div style="font-size: 9.5px; color: #94a3b8; margin-bottom: 6px;">
      Active: <b>${E.activeFileRelative}</b> (${E.languageId}) &bull; Stack: <b>${E.detectedStack.slice(0,4).join(", ")||"Auto"}</b>
    </div>
    <div class="button-group">
      <button class="pill-btn active" onclick="groundWorkspaceNow()" title="Inject verified project stack &amp; active file symbols">+ Ground in Project Stack</button>
      <button class="pill-btn" onclick="exportRules('.cursorrules')" title="Write compacted .cursorrules to workspace root">Export .cursorrules</button>
      <button class="pill-btn" onclick="exportRules('CLAUDE.md')" title="Write compacted CLAUDE.md to workspace root">Export CLAUDE.md</button>
      <button class="pill-btn" onclick="exportRules('.github/copilot-instructions.md')" title="Write compacted .github/copilot-instructions.md">Export Copilot Rules</button>
      <button class="pill-btn" onclick="exportRules('.windsurfrules')" title="Write compacted .windsurfrules to workspace root">Export .windsurfrules</button>
    </div>
  </div>

  ${A.length>0?`
  <!-- Pre-Flight Secret & Credential Leak Guard -->
  <div class="panel-box" style="border-color: rgba(244, 63, 94, 0.55); background: rgba(244, 63, 94, 0.08);">
    <div class="panel-header">
      <span class="panel-label" style="color: #fda4af;">
        Pre-Flight Secret Guard (${A.reduce((p,w)=>p+w.count,0)} Credential Leak Risk)
      </span>
      <button class="mode-btn active" onclick="scrubSecretsNow()" style="background:#e11d48; border-color:#fb7185; font-weight:700;">Scrub Secrets</button>
    </div>
    <div style="font-size:9.5px; color:#fecdd3;">
      Detected: ${A.map(p=>`<b>${p.count}x ${p.label}</b>`).join(", ")}
    </div>
  </div>
  `:""}

  ${A.length>0?`
  <!-- Pre-Flight Secret & Credential Leak Guard -->
  <div class="panel-box" style="border-color: rgba(244, 63, 94, 0.55); background: rgba(244, 63, 94, 0.08);">
    <div class="panel-header">
      <span class="panel-label" style="color: #fda4af;">
        Pre-Flight Secret Guard (${A.reduce((p,w)=>p+w.count,0)} Credential Risk)
      </span>
      <button class="mode-btn active" onclick="scrubSecretsNow()" style="background:#e11d48; border-color:#fb7185; font-weight:700;">Scrub Secrets</button>
    </div>
    <div style="font-size:9.5px; color:#fecdd3;">
      Detected: ${A.map(p=>`<b>${p.count}x ${p.label}</b>`).join(", ")}
    </div>
  </div>
  `:""}

  ${R.length>0?`
  <!-- Pre-Flight Ambiguity & Missing Constraint Linter -->
  <div class="panel-box" style="border-color: rgba(245, 158, 11, 0.35);">
    <div class="panel-header">
      <span class="panel-label" style="color: var(--amber);">
        Pre-Flight Ambiguity Linter (${R.length} Detected)
      </span>
      <span class="badge-pill" style="background:rgba(245,158,11,0.15); color:var(--amber); border:1px solid rgba(245,158,11,0.3);">1-Click Fix</span>
    </div>
    <div style="display:flex; flex-direction:column; gap:4px;">
      ${R.map(p=>`
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; background:rgba(255,255,255,0.02); padding:4px 6px; border-radius:4px; border:1px solid rgba(255,255,255,0.06);">
          <span style="font-size:9.5px; color:#e2e8f0;"><b style="color:var(--amber);">[${p.severity}]</b> ${p.label}</span>
          <button class="mode-btn active" onclick='applyFix(${JSON.stringify(p.fixSnippet)})' style="white-space:nowrap;">+ Inject Guard</button>
        </div>
      `).join("")}
    </div>
  </div>
  `:""}

  <!-- Real-Time Token & 20-Turn Cost Telemetry Strip -->
  <div class="telemetry-strip" style="flex-wrap:wrap; gap:6px;">
    <span>Compression: <span class="telemetry-val" style="color:var(--emerald); font-weight:800;">-${e.tokenSavingsPercent}%</span></span>
    <span>Signal: <span class="telemetry-val" style="color:#38bdf8; font-weight:800;">${e.iqScore}/100</span></span>
    <span>20-Turn Saved: <span class="telemetry-val" style="color:var(--emerald); font-weight:800;">${F.cumulativeTokensSaved.toLocaleString()} tok (~$${F.openaiO3SavedUsd})</span></span>
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

  ${y.length>0?`
  <!-- Local Recent Prompts Vault -->
  <div class="panel-box" style="border-color: rgba(56, 189, 248, 0.22);">
    <div class="panel-header">
      <span class="panel-label" style="color: #94a3b8;">
        Recent Prompts Vault (${y.length})
      </span>
      <button class="pill-btn" onclick="clearHistoryVault()" style="font-size:8.5px; padding:1px 6px;">Clear</button>
    </div>
    <div style="display:flex; flex-direction:column; gap:4px; max-height:95px; overflow-y:auto;">
      ${y.map((p,w)=>`
        <div onclick="loadHistoryItem(${w})" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:6px; padding:4px 6px; border-radius:4px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05);">
          <span style="font-size:9.5px; color:#cbd5e1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:190px;">${p.raw.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</span>
          <span style="font-size:8.5px; color:#38bdf8; font-family:var(--font-mono); text-transform:uppercase;">${p.target}</span>
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
</html>`}};var q=class{static installationIdKey="promptsmith_install_id";static statsKey="promptsmith_local_stats";static getOrCreateInstallId(i){let t=i.globalState.get(this.installationIdKey);return t||(t="inst_"+Math.random().toString(36).substring(2,12)+"_"+Date.now().toString(36),i.globalState.update(this.installationIdKey,t)),t}static trackEvent(i,t){this.getOrCreateInstallId(i);let e=(i.globalState.get(this.statsKey)||0)+1;i.globalState.update(this.statsKey,e)}};var fe=te(require("https"));function ze(h){let i="sess_"+Math.random().toString(36).substring(2,10),t=T.detectActiveModelHook(),e=t.recommendedProfile||"claude_xml",o=h.globalState.get("promptsmith_auto_hook",!0),a,r,n="",c="",m=$.analyze(""),x="promptsmith_pro_license",y="promptsmith_trial_count",v=h.globalState.get(x,!1),b=h.globalState.get(y,10),d=s.window.createStatusBarItem(s.StatusBarAlignment.Right,100);d.command="promptsmith.openDashboard",d.text=o?"$(sparkle) Auto-Hook":"$(sparkle)",d.tooltip=`PromptSmith Auto-Hook: ${t.detectedModelLabel} (${t.hostIde}) | Alt+P to polish`,d.show(),h.subscriptions.push(d);let k=Be(),I;function M(){return h.globalState.get("promptsmith_history_vault",[])}async function P(f,l,u){let g=(f||"").trim();if(!g||g.startsWith("Select text in your editor"))return;let C=M().filter(Z=>Z.raw!==g),W=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});C.unshift({ts:W,raw:g.slice(0,1200),compiled:(l||"").slice(0,4e3),profile:u}),C.length>8&&(C=C.slice(0,8)),await h.globalState.update("promptsmith_history_vault",C)}function N(){return ue.getHtml(n,c,m,e,v,b,a,r,o,t.detectedModelLabel,M())}function S(){w.updateView(),I&&(I.webview.html=N())}function E(f){let l=m.estimatedTokens||Math.round(n.length/4)||60,u=m.optimizedTokens||Math.round((c||"").length/4)||40,g=Math.max(15,l-u),C=Math.max(10,m.tokenSavingsPercent||Math.round(g/Math.max(1,l)*100)),W=(g/1e3*.015).toFixed(4);v?s.window.showInformationMessage(`PromptSmith: ${f}. Trimmed ${g} tokens (-${C}%).`):s.window.showInformationMessage(`PromptSmith: ${f}. Trimmed ${g} tokens (-${C}%). Saved ~$${W}.`,"Unlock Developer Pro ($9/mo or $10)","Enter Passkey").then(Z=>{Z==="Unlock Developer Pro ($9/mo or $10)"?s.env.openExternal(s.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=editor_toast")):Z==="Enter Passkey"&&s.commands.executeCommand("promptsmith.unlockLicense")})}async function R(){if(v)return!0;if(b<=0){let f=await s.window.showInformationMessage("PromptSmith: Free trial completed (10/10 improvements used). Unlock Developer Pro ($9/mo or $10 Passkey) or enter passkey.","Get Passkey ($9/mo or $10)","Enter Passkey");return f==="Get Passkey ($9/mo or $10)"?s.env.openExternal(s.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=vscode")):f==="Enter Passkey"&&s.commands.executeCommand("promptsmith.unlockLicense"),!1}return b--,await h.globalState.update(y,b),!0}function A(f){if(f&&f.trim())return n=f.trim(),m=$.analyze(n,k),n;if(!n.trim()){let l=s.window.activeTextEditor;if(l){let u=l.selection,g=u.isEmpty?l.document.getText():l.document.getText(u);g.trim()&&(n=g.trim(),m=$.analyze(n,k))}}return n}function F(f){f.onDidReceiveMessage(async l=>{switch(l.command){case"optimizeInput":{let u=(l.text||"").trim();if(!u){s.window.showWarningMessage("Type or paste a prompt in the Input Draft box first, or select text in your editor.");return}if(!await R())return;l.profile&&(e=l.profile);let g=T.compileVoiceTranscript(u);n=g.corrections>0?g.cleaned:u,g.detectedCommand&&g.detectedCommand!=="scrub_secrets"&&g.detectedCommand!=="ground_workspace"&&(e=g.detectedCommand),m=$.analyze(n,k),c=O.enhance(n,e,k,a,r),await P(n,c,e),o&&await s.env.clipboard.writeText(c),d.tooltip=`PromptSmith Auto-Hook (${t.detectedModelLabel}) | Score: ${m.iqScore}/100 (-${m.tokenSavingsPercent}% words)`,S(),q.trackEvent(h,{sessionId:i,runtime:k,action:"improve",profile:e,audience:a,discipline:r,inputPrompt:n,enhancedPrompt:c,originalWords:n.split(/\s+/).filter(Boolean).length,enhancedWords:c.split(/\s+/).filter(Boolean).length,tokenReductionPct:m.tokenSavingsPercent,isLicensed:v,trialCountRemaining:b})}break;case"groundWorkspace":{A(l.text);let u=T.inspectWorkspace();n=n?`${n}

${u.contextSummaryBlock}`:u.contextSummaryBlock,m=$.analyze(n,k),c=O.enhance(n,e,k,a,r),S(),s.window.showInformationMessage(`PromptSmith: Injected workspace stack & symbols from ${u.workspaceName}.`)}break;case"exportRulesFile":{A(l.text);let u=l.targetFile||".cursorrules",g=(l.compiled||c||n||"").trim(),C=await T.exportWorkspaceRulesFile(u,g);C.ok?s.window.showInformationMessage(`PromptSmith: ${C.message}`):s.window.showWarningMessage(`PromptSmith: ${C.message}`)}break;case"scrubSecrets":{let u=A(l.text),{scrubbed:g,redactedCount:C}=T.scrubSecrets(u);n=g,m=$.analyze(n,k),c=O.enhance(n,e,k,a,r),S(),s.window.showInformationMessage(`PromptSmith Secret Guard: Redacted ${C} exposed credential(s).`)}break;case"cleanVoiceStream":{let u=A(l.text),g=T.compileVoiceTranscript(u);n=g.cleaned||u,g.detectedCommand&&g.detectedCommand!=="scrub_secrets"&&g.detectedCommand!=="ground_workspace"&&(e=g.detectedCommand),m=$.analyze(n,k),c=O.enhance(n,e,k,a,r),await P(n,c,e),o&&c&&await s.env.clipboard.writeText(c),S(),s.window.showInformationMessage(`PromptSmith Voice-to-Spec: Refined spoken thoughts (${g.corrections} disfluencies/self-corrections resolved).`)}break;case"toggleAutoHook":o=!!l.enabled,await h.globalState.update("promptsmith_auto_hook",o),d.text=o?"$(sparkle) Auto-Hook":"$(sparkle)",o&&(e=t.recommendedProfile||e,s.window.showInformationMessage(`PromptSmith Auto-Hook Active: Hooked alongside ${t.detectedModelLabel}.`)),S();break;case"loadHistoryItem":{let g=M()[Number(l.index)];g&&(n=g.raw,c=g.compiled,m=$.analyze(n,k),S())}break;case"clearHistoryVault":await h.globalState.update("promptsmith_history_vault",[]),S();break;case"applyAmbiguityFix":{let u=(l.text||n||"").trim(),g=(l.fixSnippet||"").trim();n=u?`${u}
${g}`:g,m=$.analyze(n,k),c=O.enhance(n,e,k,a,r),S()}break;case"changeProfile":A(l.text),e=l.profile,n&&(m=$.analyze(n,k),c=O.enhance(n,e,k,a,r)),S();break;case"changeAudience":A(l.text),a=l.audience==="auto"?void 0:l.audience,n&&(m=$.analyze(n,k),c=O.enhance(n,e,k,a,r)),S();break;case"changeDiscipline":A(l.text),r=l.discipline==="auto"?void 0:l.discipline,n&&(m=$.analyze(n,k),c=O.enhance(n,e,k,a,r)),S();break;case"triggerBrainstorm":if(A(l.text),!n){s.window.showWarningMessage("Type or paste a prompt in the Input Draft box first.");return}e="orthogonal_brainstorm",m=$.analyze(n,k),c=O.enhance(n,e,k,a,r),S(),s.window.showInformationMessage("PromptSmith: Synthesized Autonomous Lateral Brainstorming Blueprint.");break;case"selectVector":{if(A(l.text),!n){s.window.showWarningMessage("Type or paste a prompt in the Input Draft box first.");return}let u=G.synthesizeBrainstorm(n),g=u.vectors.find(C=>C.id===l.vectorId)||u.vectors[0];c=`### PROMPTSMITH ORTHOGONAL PATH: ${g.title.toUpperCase()}
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
${n}`,S(),s.window.showInformationMessage(`PromptSmith: Applied ${g.title} Lateral Path.`)}break;case"insert":await Oe(l.text),E("Prompt inserted");break;case"copy":await s.env.clipboard.writeText(l.text),q.trackEvent(h,{sessionId:i,runtime:k,action:"copy",profile:e,audience:a,discipline:r,inputPrompt:n,enhancedPrompt:l.text,originalWords:n.split(/\s+/).filter(Boolean).length,enhancedWords:l.text.split(/\s+/).filter(Boolean).length,isLicensed:v,trialCountRemaining:b}),E("Prompt copied");break;case"openCheckout":await s.env.openExternal(s.Uri.parse("https://bartholomew.info/checkout/promptsmith?ref=vscode"));break;case"enterPasskey":await s.commands.executeCommand("promptsmith.unlockLicense");break;case"unlockKey":await B(l.key);break}})}h.subscriptions.push(s.commands.registerCommand("promptsmith.contactSupport",()=>{s.env.openExternal(s.Uri.parse("mailto:help@bartholomew.info?subject=PromptSmith%20Support%20Inquiry"))}));let D=s.commands.registerCommand("promptsmith.exportWorkspaceRules",async()=>{let f=await s.window.showQuickPick([{label:".cursorrules",description:"Cursor IDE workspace rules"},{label:"CLAUDE.md",description:"Claude Code CLI project memory & invariants"},{label:".github/copilot-instructions.md",description:"GitHub Copilot custom workspace instructions"},{label:".windsurfrules",description:"Windsurf Cascade workspace rules"}],{placeHolder:"Select the target AI rules file to generate & compact"});if(!f)return;let l=await T.exportWorkspaceRulesFile(f.label,c||n);l.ok?s.window.showInformationMessage(`PromptSmith: ${l.message}`):s.window.showWarningMessage(`PromptSmith: ${l.message}`)});class p{static viewType="promptsmith.sidebarView";_view;resolveWebviewView(l){this._view=l,l.webview.options={enableScripts:!0,localResourceRoots:[h.extensionUri]},this.updateView(),F(l.webview)}updateView(){this._view&&(this._view.webview.html=N())}}let w=new p;h.subscriptions.push(s.window.registerWebviewViewProvider(p.viewType,w));async function B(f){let l=(f||"").trim();if(!l)return!1;if(/^cs_(live|test)_[a-zA-Z0-9]+$/.test(l)){let u=await Le(l);if(u)l=u;else return s.window.showErrorMessage("Could not verify that Stripe Session ID. Ensure checkout was completed or contact help@bartholomew.info."),!1}if(l=l.toUpperCase(),!/^PSMITH-(PRO|TEAM|PASSKEY)-[0-9A-F]{5}(-[0-9A-F]{5}){3}$/.test(l))return s.window.showErrorMessage("Please enter a valid passkey (e.g. PSMITH-PRO-XXXXX-XXXXX-XXXXX-XXXXX) or Stripe Session ID."),!1;try{if(await Fe(l))return v=!0,await h.globalState.update(x,!0),S(),s.window.showInformationMessage("PromptSmith Pro Passkey Verified and Activated."),!0}catch{}return s.window.showErrorMessage("Passkey not recognized. Need assistance? Contact help@bartholomew.info","Contact Support").then(u=>{u==="Contact Support"&&s.env.openExternal(s.Uri.parse("mailto:help@bartholomew.info?subject=Passkey%20Assistance"))}),!1}h.subscriptions.push(s.window.registerUriHandler({async handleUri(f){if(f.path==="/activate"||f.path==="/unlock"){let l=new URLSearchParams(f.query),u=l.get("key")||l.get("session_id");u&&await B(u)}}}));function _(){I?I.reveal(s.ViewColumn.Beside):(I=s.window.createWebviewPanel("promptsmith.floatingAssistant","PromptSmith Assistant",s.ViewColumn.Beside,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[h.extensionUri]}),F(I.webview),I.onDidDispose(()=>{I=void 0})),I.webview.html=N()}let H=s.commands.registerCommand("promptsmith.improveSelection",async()=>{let f=s.window.activeTextEditor;if(!f){_(),s.window.showInformationMessage("Opened PromptSmith Studio. Type a prompt directly or select text in an editor.");return}let l=f.selection,u=l.isEmpty?f.document.getText():f.document.getText(l);if(!u.trim()){_(),s.window.showWarningMessage("No text selected in editor. Type your prompt in the PromptSmith Input Draft box.");return}if(!await R())return;let g=T.compileVoiceTranscript(u),{scrubbed:C}=T.scrubSecrets(g.corrections>0?g.cleaned:u);n=C,m=$.analyze(n,k),c=O.enhance(n,e,k,a,r),await P(n,c,e),d.text=o?"$(sparkle) Auto-Hook":"$(sparkle)",d.tooltip=`PromptSmith Auto-Hook (${t.detectedModelLabel}) | Score: ${m.iqScore}/100 (-${m.tokenSavingsPercent}% words)`,S(),o?(await s.env.clipboard.writeText(c),await T.exportWorkspaceRulesFile(t.nativeRuleFile,c,!0),E(`Auto-Hooked for ${t.detectedModelLabel} & copied to clipboard`)):_(),q.trackEvent(h,{sessionId:i,runtime:k,action:"improve",profile:e,audience:a,discipline:r,inputPrompt:u,enhancedPrompt:c,originalWords:u.split(/\s+/).filter(Boolean).length,enhancedWords:c.split(/\s+/).filter(Boolean).length,tokenReductionPct:m.tokenSavingsPercent,isLicensed:v,trialCountRemaining:b})}),ne=s.commands.registerCommand("promptsmith.brainstormSelection",async()=>{let f=s.window.activeTextEditor,u=(f?f.selection.isEmpty?f.document.getText():f.document.getText(f.selection):"").trim()||n.trim();if(!u){_(),s.window.showWarningMessage("Select prompt text in your editor or enter a draft in PromptSmith first.");return}n=u,m=$.analyze(u,k),e="orthogonal_brainstorm",c=O.enhance(u,e,k,a,r),d.text="$(sparkle)",d.tooltip="PromptSmith | Lateral Brainstorm: Outside-the-box paths active",S(),_(),q.trackEvent(h,{sessionId:i,runtime:k,action:"improve",profile:e,audience:a,discipline:r,inputPrompt:u,enhancedPrompt:c,originalWords:u.split(/\s+/).filter(Boolean).length,enhancedWords:c.split(/\s+/).filter(Boolean).length,tokenReductionPct:m.tokenSavingsPercent,isLicensed:v,trialCountRemaining:b}),s.window.showInformationMessage("PromptSmith: Autonomous Lateral Brainstorming Active.")}),oe=s.commands.registerCommand("promptsmith.openDashboard",()=>{_(),q.trackEvent(h,{sessionId:i,runtime:k,action:"improve",profile:e,audience:a,discipline:r,inputPrompt:n,enhancedPrompt:c,originalWords:n?n.split(/\s+/).filter(Boolean).length:0,enhancedWords:c?c.split(/\s+/).filter(Boolean).length:0,tokenReductionPct:m.tokenSavingsPercent,isLicensed:v,trialCountRemaining:b})}),U=s.commands.registerCommand("promptsmith.unlockLicense",async()=>{let f=await s.window.showInputBox({prompt:"Enter your PromptSmith Pro Passkey ($9/mo or $10 Passkey) or Stripe Session ID (cs_live_...)",placeHolder:"PSMITH-PRO-XXXXX-XXXXX-XXXXX-XXXXX"});f&&await B(f)});class re{provideCodeActions(l,u){let g=l.getText(u);if(!g||g.trim().length<10)return[];let C=new s.CodeAction("Optimize with PromptSmith",s.CodeActionKind.RefactorRewrite);return C.command={command:"promptsmith.improveSelection",title:"Optimize with PromptSmith"},[C]}}h.subscriptions.push(s.languages.registerCodeActionsProvider(["markdown","plaintext","typescript","python","json"],new re,{providedCodeActionKinds:[s.CodeActionKind.RefactorRewrite]}));let ae=s.commands.registerCommand("promptsmith.scrubSecrets",async()=>{let f=s.window.activeTextEditor;if(!f){_();return}let l=f.selection,u=l.isEmpty?f.document.getText():f.document.getText(l),{scrubbed:g,redactedCount:C}=T.scrubSecrets(u);if(C===0){s.window.showInformationMessage("PromptSmith Secret Guard: 0 exposed credentials detected.");return}await f.edit(W=>{l.isEmpty?W.replace(new s.Range(f.document.positionAt(0),f.document.positionAt(u.length)),g):W.replace(l,g)}),s.window.showInformationMessage(`PromptSmith Secret Guard: Redacted ${C} exposed credential(s).`)}),Y=s.commands.registerCommand("promptsmith.cleanVoiceStream",async()=>{let f=s.window.activeTextEditor,l=f?f.selection.isEmpty?f.document.getText():f.document.getText(f.selection):n;if(!l||!l.trim()){_(),s.window.showInformationMessage("Dictate or type your spoken thoughts first, then run Clean Voice Stream.");return}let u=T.compileVoiceTranscript(l),{scrubbed:g}=T.scrubSecrets(u.cleaned);n=g,m=$.analyze(n,k),c=O.enhance(n,e,k,a,r),await P(n,c,e),o&&await s.env.clipboard.writeText(c),S(),s.window.showInformationMessage(`PromptSmith Voice-to-Spec: Resolved ${u.corrections} spoken disfluencies/self-corrections & copied spec.`)}),J=s.commands.registerCommand("promptsmith.groundWorkspace",async()=>{let f=T.inspectWorkspace();n=n?`${n}

${f.contextSummaryBlock}`:f.contextSummaryBlock,m=$.analyze(n,k),c=O.enhance(n,e,k,a,r),S(),s.window.showInformationMessage(`PromptSmith: Grounded in ${f.workspaceName} (${f.detectedStack.join(", ")||f.languageId}).`)});h.subscriptions.push(ae,Y,J),h.subscriptions.push(H,ne,oe,U,D)}function Le(h){return new Promise(i=>{try{let t=JSON.stringify({session_id:h}),e=fe.request("https://us-central1-acn-26670.cloudfunctions.net/claimKey",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":Buffer.byteLength(t)}},o=>{let a="";o.on("data",r=>a+=r),o.on("end",()=>{try{let r=JSON.parse(a);i(r&&r.ok&&r.key?String(r.key):null)}catch{i(null)}})});e.on("error",()=>i(null)),e.write(t),e.end()}catch{i(null)}})}function Fe(h){return new Promise(i=>{try{let t=JSON.stringify({key:h}),e=fe.request("https://us-central1-acn-26670.cloudfunctions.net/validateKey",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":Buffer.byteLength(t)}},o=>{let a="";o.on("data",r=>a+=r),o.on("end",()=>{try{let r=JSON.parse(a);i(!!(r&&r.valid))}catch{i(!1)}})});e.on("error",()=>i(!1)),e.write(t),e.end()}catch{i(!1)}})}async function Oe(h){let i=s.window.activeTextEditor;if(!i){s.window.showWarningMessage("Open a text editor file first to insert the prompt, or click Copy.");return}let t=i.selection;await i.edit(e=>{t.isEmpty?e.insert(t.active,h):e.replace(t,h)})}function Be(){let h=s.env.appName||"";return h.includes("Cursor")?"Cursor IDE":h.includes("Windsurf")?"Windsurf IDE":h.includes("Claude")?"Claude Code / Desktop":"VS Code"}0&&(module.exports={activate});
