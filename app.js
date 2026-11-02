const projects = [
  {
    id: "dentai",
    index: "01 / FLAGSHIP",
    title: "DentAI",
    badge: "1ST PLACE",
    kicker: "An easier first step toward timely dental care.",
    status: "1st place · perfect score",
    summary: "A privacy-first, AI-assisted dental triage platform that turns guided smartphone scans into an explainable preliminary risk report and an actionable clinic referral.",
    proof: "Turkish-German University Hackathon 2026 · 1st place with a perfect jury score",
    role: "Product concept, AI pipeline, edge strategy, imaging workflow, interface and end-to-end prototype.",
    challenge: "Routine checks are delayed by fear, cost and time. Early white-spot lesions can become irreversible damage before the patient reaches a dentist.",
    system: "YOLO segmentation localizes suspicious areas; image enhancement exposes subtle contrast; a constrained multimodal layer translates model output into a readable preliminary report. Higher-risk cases enter a location- and specialty-aware referral flow.",
    boundary: "An AI-assisted screening and triage prototype—not a replacement for clinical diagnosis. The product vision combines on-device inference with selected cloud services, so privacy claims are stated per processing step.",
    business: "B2B2C product direction: a freemium screening experience for patients, qualified referrals and workflow relief for clinics, plus premium analyses, referral commissions and a clinic SaaS panel. The commercial path is a product vision, not a claim of current market deployment.",
    architecture: [
      "YOLOv8-Nano instance segmentation with pixel-level lesion masks instead of bounding boxes alone.",
      "Hard-negative mining for braces, tartar, plaque and saliva reflections; BCE-oriented mask optimization.",
      "PyTorch model conversion to quantized TFLite (FP16 / INT8) for mobile NPU/GPU inference.",
      "OpenCV + CLAHE + NumPy preprocessing; guided capture supported by a 3D macro-lens concept.",
      "Gemini 2.0 Flash VLM receives image context and YOLO coordinates through constrained medical prompts.",
      "Streamlit demo stack; Flutter, Firebase and Firestore define the production-mobile direction."
    ],
    tags: ["Python", "YOLOv8-Nano", "Ultralytics", "Instance Segmentation", "PyTorch", "TensorFlow Lite", "FP16", "INT8", "Edge AI", "Computer Vision", "OpenCV", "CLAHE", "NumPy", "Gemini 2.0 Flash", "VLM", "Prompt Engineering", "Flutter", "Dart", "Firebase", "Firestore", "Streamlit", "Localtunnel", "Health AI", "B2B2C"]
  },
  {
    id: "lumina",
    index: "02 / RESILIENCE",
    title: "Lumina V2X",
    kicker: "Keeping vehicles connected when the primary link is not enough.",
    status: "Functional prototype",
    summary: "A three-layer failover and decision-orchestration prototype for autonomous V2X communication: Li-Fi first, local perception second, out-of-band cloud command last.",
    proof: "Hardware-in-the-loop digital twin · asynchronous sensor arbitration · live decision dashboard",
    role: "System architecture, Simulink communication model, Python listener, fusion logic and dashboard integration.",
    challenge: "V2X safety cannot depend on one communication channel. Optical links are fast but vulnerable to occlusion and environmental conditions; losing the link cannot mean losing situational awareness.",
    system: "A fusion engine evaluates asynchronous channel health and selects the highest-priority available source: Li-Fi telemetry, local camera perception or Firebase emergency instruction.",
    boundary: "A resilient communication and orchestration prototype—not a complete autonomous-driving stack. It demonstrates failover behavior and low-latency coordination rather than absolute zero-latency guarantees.",
    business: "B2B deep-tech direction for automotive OEMs, autonomous fleet operators, smart-city infrastructure teams and Tier-1 suppliers. The value proposition is resilient orchestration across existing communication and perception layers.",
    architecture: [
      "MATLAB/Simulink Li-Fi digital twin emits 10 Hz state packets over TCP/IP as uint8.",
      "Threaded Python TCP listener accepts ASCII and raw-byte state representations.",
      "YOLOv8n + OpenCV provide a local edge-perception fallback when the primary link fails.",
      "Custom Fusion Engine / state machine arbitrates source priority and safe-mode behavior.",
      "Firebase Realtime Database supplies the final out-of-band emergency-control layer.",
      "Flask-SocketIO, Eventlet and WebSockets stream decisions to a live Vanilla JS dashboard."
    ],
    tags: ["Python", "MATLAB", "Simulink", "YOLOv8n", "OpenCV", "Flask", "Flask-SocketIO", "Eventlet", "WebSockets", "TCP/IP", "TCPListener", "Firebase", "Realtime Database", "JavaScript", "HTML", "CSS", "Sensor Fusion", "State Machines", "Edge AI", "Hardware-in-the-Loop", "V2X", "Li-Fi"]
  },
  {
    id: "ledgerly",
    index: "03 / PRODUCT ENGINEERING",
    title: "Ledgerly",
    kicker: "A private, local-first desktop workspace for personal finance.",
    status: "166 / 166 backend tests",
    summary: "A Windows-first accounting, inventory, finance and document platform with strict company isolation, double-entry foundations and an offline-capable desktop architecture.",
    proof: "Backend test suite passing · desktop lint/build/Tauri checks passing · controlled demo/pilot scope",
    role: "End-to-end product architecture and implementation across domain model, API, persistence and desktop delivery.",
    challenge: "Small businesses need more than isolated invoices or spreadsheets: finance, stock, purchasing, sales, documents and auditability must agree on the same business truth—even when connectivity is unreliable.",
    system: "A layered Domain / Infrastructure / API / Desktop design supports a local embedded Windows mode and a production Linux deployment path. Idempotency, audit trails and company-level isolation shape every module.",
    boundary: "A tested controlled demo/pilot. Production operation still depends on external integrations and approvals such as live GİB, payment/SMTP infrastructure and code signing.",
    business: "Windows-first business software for small companies, designed around a 30-day controlled trial and up to three companies per account. Billing, live e-document exchange, email delivery and signed production distribution remain external launch dependencies.",
    architecture: [
      "React 19 + TypeScript 6 + Vite 8 inside a Tauri 2 / Rust Windows shell using WebView2.",
      "ASP.NET Core / .NET 10 API, C# domain model, EF Core 10, SQLite local mode and PostgreSQL production target.",
      "Current accounts, inventory, multi-warehouse stock, weighted average, lot/serial and FEFO workflows.",
      "Sales, procurement, returns, partial payments, tax/withholding, multicurrency and double-entry ledger foundations.",
      "Document center with SHA-256, UBL/XML/PDF extraction, e-invoice sandbox, idempotency and reversal controls.",
      "AES-GCM offline drafts, conflict handling, MFA direction, xUnit verification, Docker Compose and Caddy HTTPS."
    ],
    tags: ["React 19", "TypeScript 6", "Vite 8", "Tauri 2", "Rust", "WebView2", "ASP.NET Core", ".NET 10", "C#", "EF Core 10", "SQLite", "PostgreSQL", "ASP.NET Identity", "xUnit", "Docker Compose", "Caddy", "AES-GCM", "SHA-256", "Domain-Driven Design", "Layered Architecture", "Offline-First", "Accounting", "Inventory", "UBL", "XML", "PDF", "NSIS", "MSI"]
  },
  {
    id: "council",
    index: "04 / AGENTIC LEARNING",
    title: "Council AI",
    kicker: "A learning assistant that reasons, checks and explains.",
    status: "End-to-end build",
    summary: "A multi-agent educational application that separates rigorous analysis, factual review and age-appropriate explanation into a sequential orchestration pipeline.",
    proof: "Socrates → Fact Checker → Quest Master · Flutter client + asynchronous FastAPI backend",
    role: "Multi-agent architecture, backend API, clean mobile architecture, state management and interface design.",
    challenge: "General-purpose language models can trade rigor for fluency. Educational software needs a visible process for analysis, verification and pedagogy without turning every response into a textbook.",
    system: "LangGraph coordinates three purpose-built agents: Socrates builds the academic answer, Fact Checker performs a model-based verification pass, and Quest Master rewrites the result into an engaging learner-level explanation.",
    boundary: "The verification agent reduces hallucination risk; it does not guarantee absolute factual accuracy. A production release would add source grounding, evaluation sets, observability and escalation rules.",
    business: "An educational product prototype centered on trust and age-appropriate explanation. Its current value is the orchestrated learning workflow; institutional deployment would require curriculum evaluation, source grounding and educator controls.",
    architecture: [
      "LangGraph sequential orchestration powered by Google Gemini 2.0 Flash.",
      "Python, LangChain Google GenAI and typed agent handoffs manage the reasoning pipeline.",
      "Asynchronous FastAPI + Uvicorn service exposes the /ask-council workflow.",
      "Flutter 3 client follows Clean Architecture across data, domain and presentation layers.",
      "Riverpod StateNotifier manages predictable application state and API lifecycle.",
      "Custom dark interface and flutter_animate create a responsive, gamified experience."
    ],
    tags: ["LangGraph", "Multi-Agent Systems", "Gemini 2.0 Flash", "LangChain", "Google GenAI", "Python", "FastAPI", "Uvicorn", "REST API", "Flutter 3", "Dart", "Clean Architecture", "Riverpod", "StateNotifier", "flutter_animate", "Agentic AI", "LLM", "NLP", "Prompt Engineering"]
  },
  {
    id: "health",
    index: "05 / FUNDED R&D",
    title: "Health Management System",
    badge: "TÜBİTAK FUNDED",
    kicker: "Clearer communication between care professionals and their patients.",
    status: "TÜBİTAK funded",
    summary: "A cross-platform clinical communication and treatment-management system with real-time messaging, exercise prescriptions, pain tracking and multi-clinic data separation.",
    proof: "Software Consultant & Lead Developer · architecture, technology selection, data model and implementation",
    role: "Software Consultant & Lead Developer on a funded R&D project; responsible for architecture and hands-on delivery.",
    challenge: "Generic messaging mixes clinical communication with personal chat, hides history and gives professionals no structured way to manage several patients, clinics and treatment plans.",
    system: "Flutter clients subscribe to event-driven Firebase data. A many-to-many JSON model links patients, clinicians and groups; media travels through Cloud Storage while the database keeps lightweight message metadata.",
    boundary: "A funded R&D implementation. Security is described at the architecture level; production healthcare deployment would require a formal identity provider, secure device storage, threat modeling and compliance validation.",
    business: "A TÜBİTAK-funded B2B2C R&D system for independent professionals and clinics serving patients through isolated digital care channels. The product combines professional communication, treatment tasks and progress signals rather than acting as generic chat.",
    architecture: [
      "Flutter / Dart with null safety, responsive Material widgets, FutureBuilder, StreamBuilder and lazy message rendering.",
      "Provider centralizes current user, selected clinician and unread-badge state.",
      "Firebase Realtime Database models many-to-many relationships with direct-path JSON references.",
      "onValue listeners deliver event-driven updates instead of repeated HTTP polling.",
      "Cloud Storage upload pipeline replaces Base64 payloads with lightweight download URLs.",
      "Backward-compatible background migration converts legacy single-clinician data without interrupting the user."
    ],
    tags: ["Flutter", "Dart", "Material Design", "Provider", "FutureBuilder", "StreamBuilder", "Firebase", "Realtime Database", "Cloud Storage", "WebSockets", "NoSQL", "Event-Driven Architecture", "Multi-Tenancy", "Many-to-Many", "State Management", "Lazy Loading", "Data Migration", "Security Rules", "HealthTech", "Cross-Platform"]
  },
  {
    id: "campus",
    index: "06 / LOCATION PRODUCT",
    title: "Kampüs Rehberi",
    kicker: "Helping people find places—and understand what is happening around them.",
    status: "Campus super-app foundation",
    summary: "A location-aware campus guide for Sivas Cumhuriyet University that joins micro-navigation with live venue information, services, ratings and community knowledge.",
    proof: "Custom map overlays · live Firestore data · category discovery · native navigation handoff",
    role: "Product design, mobile architecture, geospatial data model, state management and Firebase integration.",
    challenge: "Conventional maps locate buildings but rarely answer campus questions: where is the faculty entrance, which cafeteria is open, what is on the menu, and where can a student find Wi-Fi, an ATM or a power socket?",
    system: "Custom Google Maps layers turn campus points into browsable categories. Firestore keeps status, menus, pricing, amenities and community contributions current; geolocation supports precise discovery and native route handoff.",
    boundary: "The application enriches campus discovery and hands turn-by-turn routing to the device's native navigation provider. Future expansion targets events, clubs, alerts, second-hand books and multi-university support.",
    business: "A university-specific discovery layer for students, staff, visitors and prospective families, with a longer-term super-app direction spanning events, clubs, alerts and multi-campus packaging.",
    architecture: [
      "Flutter / Dart client with Material 3, responsive layouts and structured state management.",
      "Google Maps SDK custom overlays, campus-specific markers and category filters.",
      "Firebase / Firestore serverless backend synchronizes opening status, menus, ratings, comments and photos.",
      "Geolocation converts current position into relevant nearby facilities and accurate route origins.",
      "Deep links hand selected destinations to native external navigation.",
      "NoSQL domain model supports facilities, attributes, community content and future multi-campus tenancy."
    ],
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "Google Maps SDK", "Geolocation", "NoSQL", "Serverless", "Material 3", "State Management", "Custom Map Overlays", "Deep Linking", "Responsive UI", "Location Intelligence", "Community Data"]
  }
];

const projectOrder = ["dentai", "health", "lumina", "ledgerly", "council", "campus"];
const projectIndexLabels = {
  dentai: "FLAGSHIP",
  health: "FUNDED R&D",
  lumina: "RESILIENCE",
  ledgerly: "PRODUCT ENGINEERING",
  council: "AGENTIC LEARNING",
  campus: "LOCATION PRODUCT"
};
projects.sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id));
projects.forEach((project, index) => {
  project.index = `${String(index + 1).padStart(2, "0")} / ${projectIndexLabels[project.id]}`;
});

const experiences = [
  {
    company: "Radia AI / Ratione Divide AI",
    role: "R&D Intern · Medical AI Product Team",
    period: "Sep 2026—Present",
    note: "12-month internship",
    detail: "Working inside the product-engineering process behind medical AI: explainable clinical decision support, medical-imaging workflows and the practical path from model behavior to a usable health product."
  },
  {
    company: "HT Bilişim",
    role: "Applied AI & ML Engineering Intern",
    period: "Aug—Sep 2026",
    note: "Retrieval and production AI",
    detail: "Enterprise RAG, semantic retrieval, vector databases, multi-agent workflows and Docker-based delivery."
  },
  {
    company: "Uçak Yazılım",
    role: "Software Engineering Intern",
    period: "Jul—Aug 2026",
    note: "Data and backend systems",
    detail: "Distributed OSINT ingestion, asynchronous Python workers, FastAPI services and normalized ETL pipelines."
  },
  {
    company: "Yandex",
    role: "SEO",
    period: "Feb—Mar 2025",
    note: "Search analytics",
    detail: "Search-behavior analysis, keyword research, performance tracking and technical SEO audits."
  }
];

const trajectory = [
  { state: "built", title: "Data Foundations", note: "Python · Pandas · NumPy · SQL · Git", detail: "Used in real ingestion, analysis and imaging pipelines." },
  { state: "current", title: "Classical ML, BI & Risk", note: "Scikit-learn · XGBoost · Power BI · IFRS 9", detail: "Actively deepening model evaluation, business intelligence and risk framing." },
  { state: "built", title: "Deep Learning, NLP & XAI", note: "PyTorch · YOLO · TFLite · NLP · XAI", detail: "DentAI vision work and medical-AI product exposure provide direct evidence." },
  { state: "next", title: "Big Data Analytics", note: "Apache Spark · Kafka · Databricks", detail: "Next scaling layer for larger event and model-data workloads." },
  { state: "built", title: "GenAI & RAG", note: "RAG · Pinecone · Milvus · Embeddings", detail: "Enterprise retrieval, semantic chunking and vector-search practice at HT Bilişim." },
  { state: "built", title: "Agentic AI", note: "LangGraph · LangChain · Multi-Agent", detail: "Council AI turns orchestration theory into a working three-agent system." },
  { state: "current", title: "MLOps & Production AI", note: "Docker · CI/CD · MLflow · Model Registry", detail: "Current focus: packaging, observability and repeatable model delivery." },
  { state: "next", title: "AI Governance & LLMOps", note: "AI Safety · Model Risk · Auditing · LLMOps", detail: "Explicit next step: control, audit and safety around deployed AI." }
];

const staticCopy = {
  en: {
    skip: "Skip to content",
    boot: "Loading the portfolio…",
    navHome: "Home",
    navAbout: "About",
    navWork: "Work",
    navExperience: "Experience",
    navJourney: "Learning",
    navContact: "Contact",
    heroKicker: "Applied AI & software · Sivas, Türkiye",
    heroLine1: "I turn ideas",
    heroLine2: "into products",
    heroLine3: "people can use.",
    heroBuilt: "06 PROJECTS BUILT",
    heroNote: "From medical imaging to multi-agent tools, I enjoy turning ambitious ideas into software people can actually try, test and use.",
    enterWork: "See the projects",
    aboutKicker: "About me",
    aboutTitle: "I like building the whole product—not only the model.",
    aboutBody: "I’m a Computer Engineering student who enjoys the whole journey: understanding the problem, preparing the data, building the model, connecting the backend and shaping the experience around it. My work spans medical AI, computer vision, multi-agent systems and production software.",
    portraitCaption: "EMRE KÜÇÜKGÖÇER / APPLIED AI & SOFTWARE",
    basedLabel: "Based",
    basedValue: "Sivas, Türkiye",
    educationLabel: "Education",
    educationValue: "Sivas Cumhuriyet University · Main Campus · 2023—2027",
    currentLabel: "Current",
    currentValue: "Medical AI R&D and production engineering",
    proofHackathon: "Turkish-German University Hackathon · 1st place · perfect score",
    proofTubitak: "TÜBİTAK-funded R&D build",
    workKicker: "Selected work / six projects",
    workTitle: "A closer look<br />at my projects.",
    searchLabel: "Search projects by skill",
    searchPlaceholder: "YOLO, Flutter, LangGraph, .NET…",
    workInstruction: "Click a project to preview it. Then choose “View full project” for all the details.",
    experienceKicker: "Experience / learning by doing",
    experienceTitle: "Learning by<br />doing the work.",
    experienceIntro: "Internships and hands-on projects have shown me how AI and software decisions play out in real teams, real products and real deadlines.",
    universitySign: "Sivas Cumhuriyet University · Main Campus · Computer Engineering · 2023—2027",
    academicReference: "Academic reference",
    journeyKicker: "My learning path",
    journeyTitle: "What I know.<br />What I’m learning.<br />Where I’m heading.",
    journeyIntro: "This is an honest snapshot of the skills I have used in projects, the ones I am improving now and the areas I want to explore next.",
    legendBuilt: "Project experience",
    legendCurrent: "Learning now",
    legendNext: "Up next",
    contactKicker: "Let’s talk",
    contactTitle: "Have a project<br />in mind?<br />Let’s talk.",
    contactBody: "If you are working on medical AI, computer vision, agentic systems or a challenging software product, I would be glad to hear about it.",
    coverLetter: "Cover Letter",
    academicReferenceTitle: "Academic Reference",
    backHome: "Back to the top",
    close: "Close"
  },
  tr: {
    skip: "İçeriğe geç",
    boot: "Proje dünyası açılıyor…",
    navHome: "Ana sayfa",
    navAbout: "Hakkımda",
    navWork: "Projeler",
    navExperience: "Deneyim",
    navJourney: "Gelişim",
    navContact: "İletişim",
    heroKicker: "Uygulamalı yapay zekâ ve yazılım · Sivas, Türkiye",
    heroLine1: "Fikirleri",
    heroLine2: "çalışan ürünlere",
    heroLine3: "dönüştürüyorum.",
    heroBuilt: "06 TAMAMLANMIŞ SİSTEM",
    heroNote: "Medikal görüntülemeden çoklu ajan sistemlerine kadar, iddialı fikirleri insanların gerçekten deneyebileceği, test edebileceği ve kullanabileceği ürünlere dönüştürmeyi seviyorum.",
    enterWork: "Projeleri gör",
    aboutKicker: "Hakkımda",
    aboutTitle: "Sadece modeli değil, ürünün tamamını geliştirmeyi seviyorum.",
    aboutBody: "Bilgisayar Mühendisliği öğrencisiyim. Bir problemi anlamaktan veriyi hazırlamaya, modeli geliştirmekten backend ve kullanıcı deneyimini bir araya getirmeye kadar ürünün bütün yolculuğunda çalışmayı seviyorum. Medikal yapay zekâ, bilgisayarlı görü, çoklu ajan sistemleri ve üretim yazılımları geliştiriyorum.",
    portraitCaption: "EMRE KÜÇÜKGÖÇER / YAPAY ZEKÂ VE YAZILIM",
    basedLabel: "Konum",
    basedValue: "Sivas, Türkiye",
    educationLabel: "Eğitim",
    educationValue: "Sivas Cumhuriyet Üniversitesi · Merkez Kampüs · 2023—2027",
    currentLabel: "Güncel",
    currentValue: "Medikal yapay zekâ Ar-Ge ve üretim mühendisliği",
    proofHackathon: "Türk-Alman Üniversitesi Hackathon · 1.lik · tam puan",
    proofTubitak: "TÜBİTAK tarafından fonlanan Ar-Ge projesi",
    workKicker: "Seçili çalışmalar / altı proje",
    workTitle: "Projelerime<br />yakından bakın.",
    searchLabel: "Yetkinliğe göre proje ara",
    searchPlaceholder: "YOLO, Flutter, LangGraph, .NET…",
    workInstruction: "Ön izleme için bir projeye tıklayın. Tüm ayrıntılar için “Projeyi detaylı incele”yi seçin.",
    experienceKicker: "Deneyim / işin içinde öğrenmek",
    experienceTitle: "İşin içinde<br />öğrendiklerim.",
    experienceIntro: "Stajlarım ve geliştirdiğim projeler sayesinde yapay zekâ ve yazılım kararlarının gerçek ekiplerde, ürünlerde ve teslim tarihlerinde nasıl karşılık bulduğunu öğrendim.",
    universitySign: "Sivas Cumhuriyet Üniversitesi · Merkez Kampüs · Bilgisayar Mühendisliği · 2023—2027",
    academicReference: "Akademik referans",
    journeyKicker: "Öğrenme yolculuğum",
    journeyTitle: "Bildiklerim.<br />Öğrendiklerim.<br />Sıradakiler.",
    journeyIntro: "Bu yol haritası; projelerde gerçekten kullandığım, bugün geliştirdiğim ve sırada öğrenmek istediğim alanları açıkça gösteriyor.",
    legendBuilt: "Proje deneyimi",
    legendCurrent: "Şimdi öğreniyorum",
    legendNext: "Sırada",
    contactKicker: "İletişim / tanışalım",
    contactTitle: "Aklında bir<br />proje mi var?<br />Konuşalım.",
    contactBody: "Medikal yapay zekâ, bilgisayarlı görü, ajan tabanlı sistemler veya zor bir yazılım ürünü üzerinde çalışıyorsanız, fikrinizi dinlemekten memnuniyet duyarım.",
    coverLetter: "Niyet Mektubu",
    academicReferenceTitle: "Akademik Referans",
    backHome: "Başa dön",
    close: "Kapat"
  }
};

const projectTranslations = {
  dentai: {
    index: "01 / AMİRAL PROJE",
    badge: "1.LİK",
    status: "1.lik · tam puan",
    kicker: "Diş bakımına zamanında ulaşmak için daha kolay bir ilk adım.",
    summary: "Yönlendirmeli akıllı telefon taramalarını açıklanabilir bir ön risk raporuna ve uygulanabilir klinik yönlendirmeye dönüştüren, gizlilik odaklı yapay zekâ destekli diş triyaj platformu.",
    proof: "Türk-Alman Üniversitesi Hackathon 2026 · jüri tam puanıyla 1.lik",
    role: "Ürün konsepti, yapay zekâ boru hattı, uçta işleme stratejisi, görüntüleme akışı, arayüz ve uçtan uca prototip.",
    challenge: "Korku, maliyet ve zaman nedeniyle rutin kontroller erteleniyor. Erken beyaz leke lezyonları hasta diş hekimine ulaşmadan geri döndürülemez hasara dönüşebiliyor.",
    system: "YOLO segmentasyonu şüpheli bölgeleri konumlandırıyor; görüntü iyileştirme ince kontrast farklarını görünür kılıyor; sınırlandırılmış çok modlu katman model çıktısını anlaşılır bir ön rapora çeviriyor. Yüksek riskli vakalar konum ve uzmanlık uyumlu yönlendirme akışına giriyor.",
    boundary: "Klinik tanının yerine geçmeyen, yapay zekâ destekli bir tarama ve triyaj prototipi. Ürün vizyonu cihaz içi çıkarımı seçili bulut hizmetleriyle birleştirdiği için gizlilik iddiaları her işleme adımı için ayrı tanımlanır.",
    business: "B2B2C ürün yönü: hastalar için freemium tarama, klinikler için nitelikli hasta yönlendirmesi ve iş yükü azaltma; ayrıca premium analiz, yönlendirme komisyonu ve klinik SaaS paneli. Bu ticari yol mevcut pazar kullanımı iddiası değil, ürün vizyonudur.",
    architecture: [
      "Yalnızca kutu tespiti yerine piksel düzeyinde lezyon maskeleri üreten YOLOv8-Nano instance segmentation.",
      "Diş teli, tartar, plak ve tükürük yansımaları için hard-negative mining; BCE odaklı maske optimizasyonu.",
      "PyTorch modelinin mobil NPU/GPU çıkarımı için FP16 / INT8 nicemlemeli TFLite biçimine dönüştürülmesi.",
      "OpenCV + CLAHE + NumPy ön işleme; 3B makro lens konseptiyle desteklenen yönlendirmeli çekim.",
      "Gemini 2.0 Flash VLM'nin görüntü bağlamını ve YOLO koordinatlarını sınırlandırılmış medikal istemlerle işlemesi.",
      "Streamlit demo yığını; Flutter, Firebase ve Firestore üretim mobil yönünü tanımlar."
    ]
  },
  health: {
    index: "02 / FONLU AR-GE",
    badge: "TÜBİTAK FONLU",
    status: "TÜBİTAK tarafından fonlandı",
    kicker: "Sağlık profesyonelleriyle hastalar arasında daha düzenli ve anlaşılır iletişim.",
    summary: "Gerçek zamanlı mesajlaşma, egzersiz reçeteleri, ağrı takibi ve klinikler arası veri ayrımı sunan, çok platformlu klinik iletişim ve tedavi yönetim sistemi.",
    proof: "Yazılım Danışmanı ve Lead Developer · mimari, teknoloji seçimi, veri modeli ve uygulama",
    role: "Fonlanan Ar-Ge projesinde Yazılım Danışmanı ve Lead Developer; mimari ve aktif geliştirme sorumluluğu.",
    challenge: "Genel mesajlaşma araçları klinik iletişimi kişisel sohbetle karıştırıyor, geçmişi görünmez kılıyor ve profesyonellere birden fazla hasta, klinik ve tedavi planını yapılandırılmış biçimde yönetme olanağı vermiyor.",
    system: "Flutter istemcileri olay güdümlü Firebase verisine abone olur. Çoktan çoğa JSON modeli hastaları, profesyonelleri ve grupları bağlar; medya Cloud Storage üzerinden taşınırken veritabanında hafif mesaj üst verileri tutulur.",
    boundary: "Fonlanmış bir Ar-Ge uygulaması. Güvenlik mimari düzeyde tanımlanmıştır; gerçek sağlık ortamında kullanım için kurumsal kimlik sağlayıcısı, güvenli cihaz depolaması, tehdit modellemesi ve mevzuat doğrulaması gerekir.",
    business: "Bağımsız sağlık profesyonelleri ve kliniklere yalıtılmış dijital bakım kanalları sunan TÜBİTAK fonlu B2B2C Ar-Ge sistemi. Genel sohbet yerine profesyonel iletişimi, tedavi görevlerini ve ilerleme sinyallerini bir araya getirir.",
    architecture: [
      "Null safety, responsive Material widget'ları, FutureBuilder, StreamBuilder ve lazy mesaj çizimiyle Flutter / Dart.",
      "Provider; aktif kullanıcı, seçili profesyonel ve okunmamış mesaj durumunu merkezileştirir.",
      "Firebase Realtime Database çoktan çoğa ilişkileri doğrudan JSON yol referanslarıyla modeller.",
      "onValue dinleyicileri tekrarlanan HTTP sorguları yerine olay güdümlü güncellemeler sağlar.",
      "Cloud Storage yükleme hattı Base64 yüklerini hafif indirme URL'leriyle değiştirir.",
      "Geriye uyumlu arka plan göçü eski tek-profesyonelli veriyi kullanıcıyı kesintiye uğratmadan dönüştürür."
    ]
  },
  lumina: {
    index: "03 / DAYANIKLILIK",
    status: "İşlevsel prototip",
    kicker: "Ana bağlantı yetmediğinde araçların iletişimde kalmasını sağlamak.",
    summary: "Otonom V2X iletişimi için üç katmanlı failover ve karar orkestrasyonu prototipi: önce Li-Fi, sonra yerel algı, en son bant dışı bulut komutu.",
    proof: "Hardware-in-the-loop dijital ikiz · asenkron sensör arbitrajı · canlı karar paneli",
    role: "Sistem mimarisi, Simulink iletişim modeli, Python dinleyici, füzyon mantığı ve panel entegrasyonu.",
    challenge: "V2X güvenliği tek bir iletişim kanalına bağlı olamaz. Optik bağlantılar hızlıdır fakat görüş engeli ve çevresel koşullara duyarlıdır; bağlantının kaybı durumsal farkındalığın kaybı anlamına gelmemelidir.",
    system: "Füzyon motoru asenkron kanal sağlığını değerlendirir ve mevcut en yüksek öncelikli kaynağı seçer: Li-Fi telemetrisi, yerel kamera algısı veya Firebase acil durum komutu.",
    boundary: "Tam bir otonom sürüş yığını değil; dayanıklı iletişim ve orkestrasyon prototipidir. Mutlak sıfır gecikme iddiası yerine failover davranışını ve düşük gecikmeli koordinasyonu gösterir.",
    business: "Otomotiv üreticileri, otonom filo operatörleri, akıllı şehir ekipleri ve Tier-1 tedarikçiler için B2B derin teknoloji yönü. Değer önerisi, mevcut iletişim ve algı katmanları arasında dayanıklı orkestrasyondur.",
    architecture: [
      "MATLAB/Simulink Li-Fi dijital ikizi TCP/IP üzerinden uint8 olarak 10 Hz durum paketleri üretir.",
      "Thread tabanlı Python TCP dinleyici ASCII ve ham bayt durum gösterimlerini kabul eder.",
      "Birincil bağlantı kesildiğinde YOLOv8n + OpenCV yerel edge algı yedeğini sağlar.",
      "Özel Fusion Engine / durum makinesi kaynak önceliğini ve güvenli mod davranışını yönetir.",
      "Firebase Realtime Database son bant dışı acil kontrol katmanını sağlar.",
      "Flask-SocketIO, Eventlet ve WebSockets kararları canlı Vanilla JS paneline aktarır."
    ]
  },
  ledgerly: {
    index: "04 / ÜRÜN MÜHENDİSLİĞİ",
    status: "166 / 166 backend testi",
    kicker: "Kişisel finans için gizliliği önceleyen, yerel çalışan masaüstü deneyimi.",
    summary: "Şirket izolasyonu, çift taraflı kayıt temeli ve çevrimdışı çalışabilen masaüstü mimarisiyle Windows öncelikli muhasebe, stok, finans ve belge platformu.",
    proof: "Backend test paketi başarılı · masaüstü lint/build/Tauri kontrolleri başarılı · kontrollü demo/pilot kapsamı",
    role: "Domain modeli, API, kalıcılık ve masaüstü dağıtımı boyunca uçtan uca ürün mimarisi ve geliştirme.",
    challenge: "Küçük işletmelerin ayrı fatura araçlarından veya tablolardan fazlasına ihtiyacı var: finans, stok, satın alma, satış, belgeler ve denetlenebilirlik bağlantı güvenilmez olsa bile aynı ticari gerçekte buluşmalı.",
    system: "Katmanlı Domain / Infrastructure / API / Desktop tasarımı yerel gömülü Windows modunu ve üretim Linux dağıtım yolunu destekler. Idempotency, denetim izleri ve şirket düzeyinde izolasyon her modülü şekillendirir.",
    boundary: "Test edilmiş kontrollü demo/pilot. Üretim kullanımı canlı GİB, ödeme/SMTP altyapısı ve kod imzalama gibi dış entegrasyon ve onaylara bağlıdır.",
    business: "Küçük şirketler için 30 günlük kontrollü deneme ve hesap başına üç şirkete kadar destek üzerine tasarlanmış Windows öncelikli iş yazılımı. Faturalama, canlı e-belge alışverişi, e-posta teslimi ve imzalı dağıtım dış lansman bağımlılıklarıdır.",
    architecture: [
      "WebView2 kullanan Tauri 2 / Rust Windows kabuğu içinde React 19 + TypeScript 6 + Vite 8.",
      "ASP.NET Core / .NET 10 API, C# domain modeli, EF Core 10, yerel SQLite modu ve üretim PostgreSQL hedefi.",
      "Cari hesaplar, stok, çoklu depo, ağırlıklı ortalama, lot/seri ve FEFO iş akışları.",
      "Satış, satın alma, iade, kısmi ödeme, vergi/tevkifat, çoklu para birimi ve çift taraflı muhasebe temelleri.",
      "SHA-256, UBL/XML/PDF çıkarımı, e-fatura sandbox, idempotency ve ters kayıt kontrolleriyle belge merkezi.",
      "AES-GCM çevrimdışı taslaklar, çakışma yönetimi, MFA yönü, xUnit doğrulaması, Docker Compose ve Caddy HTTPS."
    ]
  },
  council: {
    index: "05 / AJAN TABANLI ÖĞRENME",
    status: "Uçtan uca geliştirme",
    kicker: "Düşünen, doğrulayan ve anlaşılır biçimde anlatan bir öğrenme asistanı.",
    summary: "Titiz analiz, doğruluk denetimi ve yaşa uygun anlatımı sıralı bir orkestrasyon hattına ayıran çoklu ajan eğitim uygulaması.",
    proof: "Socrates → Fact Checker → Quest Master · Flutter istemci + asenkron FastAPI backend",
    role: "Çoklu ajan mimarisi, backend API, clean mobil mimari, durum yönetimi ve arayüz tasarımı.",
    challenge: "Genel amaçlı dil modelleri akıcılık uğruna titizlikten ödün verebilir. Eğitim yazılımı, her yanıtı ders kitabına çevirmeden analiz, doğrulama ve pedagojiyi görünür bir sürece dönüştürmelidir.",
    system: "LangGraph üç özel ajanı koordine eder: Socrates akademik yanıtı oluşturur, Fact Checker model tabanlı doğrulama yapar, Quest Master sonucu öğrenci düzeyinde ilgi çekici bir açıklamaya dönüştürür.",
    boundary: "Doğrulama ajanı halüsinasyon riskini azaltır; mutlak doğruluk garantisi vermez. Üretim sürümü kaynak temellendirme, değerlendirme setleri, gözlemlenebilirlik ve eskalasyon kuralları eklemelidir.",
    business: "Güven ve yaşa uygun anlatım merkezli eğitim ürünü prototipi. Mevcut değer, orkestre edilmiş öğrenme akışıdır; kurumsal kullanım müfredat değerlendirmesi, kaynak temellendirme ve eğitimci kontrolleri gerektirir.",
    architecture: [
      "Google Gemini 2.0 Flash destekli LangGraph sıralı orkestrasyon.",
      "Python, LangChain Google GenAI ve tipli ajan geçişleri akıl yürütme hattını yönetir.",
      "Asenkron FastAPI + Uvicorn servisi /ask-council iş akışını sunar.",
      "Flutter 3 istemcisi data, domain ve presentation katmanlarında Clean Architecture izler.",
      "Riverpod StateNotifier uygulama durumunu ve API yaşam döngüsünü öngörülebilir biçimde yönetir.",
      "Özel karanlık arayüz ve flutter_animate akıcı, oyunlaştırılmış deneyim üretir."
    ]
  },
  campus: {
    index: "06 / KONUM ÜRÜNÜ",
    status: "Kampüs süper uygulama temeli",
    kicker: "Kampüste yalnızca yolu değil, çevrede neler olduğunu da bulmayı kolaylaştırmak.",
    summary: "Sivas Cumhuriyet Üniversitesi için mikro navigasyonu canlı mekân bilgisi, hizmetler, puanlar ve topluluk bilgisiyle birleştiren konum farkındalıklı kampüs rehberi.",
    proof: "Özel harita katmanları · canlı Firestore verisi · kategori keşfi · yerel navigasyona geçiş",
    role: "Ürün tasarımı, mobil mimari, coğrafi veri modeli, durum yönetimi ve Firebase entegrasyonu.",
    challenge: "Geleneksel haritalar binaları bulur fakat kampüs sorularını nadiren yanıtlar: fakülte girişi nerede, hangi kafeterya açık, menüde ne var, Wi-Fi, ATM veya priz nerede bulunur?",
    system: "Özel Google Maps katmanları kampüs noktalarını gezilebilir kategorilere dönüştürür. Firestore durum, menü, fiyat, olanak ve topluluk katkılarını güncel tutar; konum bilgisi hassas keşif ve yerel rota aktarımını destekler.",
    boundary: "Uygulama kampüs keşfini zenginleştirir ve adım adım rotayı cihazın yerel navigasyon sağlayıcısına bırakır. Gelecek genişleme etkinlik, kulüp, duyuru, ikinci el kitap ve çoklu üniversite desteğini hedefler.",
    business: "Öğrenci, personel, ziyaretçi ve aday aileler için üniversiteye özel keşif katmanı; uzun vadede etkinlik, kulüp, uyarı ve çoklu kampüs paketlemesini kapsayan süper uygulama yönü.",
    architecture: [
      "Material 3, responsive yerleşim ve yapılandırılmış durum yönetimine sahip Flutter / Dart istemci.",
      "Google Maps SDK özel katmanları, kampüse özel işaretçiler ve kategori filtreleri.",
      "Firebase / Firestore serverless backend açılış durumu, menü, puan, yorum ve fotoğrafları senkronize eder.",
      "Konum bilgisi mevcut pozisyonu yakındaki olanaklara ve doğru rota başlangıçlarına dönüştürür.",
      "Deep link'ler seçili hedefleri yerel harici navigasyona aktarır.",
      "NoSQL domain modeli tesisleri, nitelikleri, topluluk içeriğini ve gelecekteki çoklu kampüs kiracılığını destekler."
    ]
  }
};

const experienceTranslations = [
  {
    role: "Ar-Ge Stajyeri · Medikal Yapay Zekâ Ürün Ekibi",
    period: "Eyl 2026—Günümüz",
    note: "12 aylık staj",
    detail: "Medikal yapay zekânın ürün-mühendislik sürecinin içinde çalışıyorum: açıklanabilir klinik karar desteği, medikal görüntüleme iş akışları ve model davranışından kullanılabilir sağlık ürününe giden pratik yol."
  },
  {
    role: "Uygulamalı Yapay Zekâ ve ML Mühendisliği Stajyeri",
    period: "Ağu—Eyl 2026",
    note: "Bilgi erişimi ve üretim yapay zekâsı",
    detail: "Kurumsal RAG, anlamsal erişim, vektör veritabanları, çoklu ajan iş akışları ve Docker tabanlı dağıtım."
  },
  {
    role: "Yazılım Mühendisliği Stajyeri",
    period: "Tem—Ağu 2026",
    note: "Veri ve backend sistemleri",
    detail: "Dağıtık OSINT veri toplama, asenkron Python worker'ları, FastAPI servisleri ve normalize ETL hatları."
  },
  {
    role: "SEO",
    period: "Şub—Mar 2025",
    note: "Arama analitiği",
    detail: "Arama davranışı analizi, anahtar kelime araştırması, performans takibi ve teknik SEO denetimleri."
  }
];

const trajectoryTranslations = [
  { title: "Veri Temelleri", detail: "Gerçek veri toplama, analiz ve görüntüleme hatlarında kullanıldı." },
  { title: "Klasik ML, BI ve Risk", detail: "Model değerlendirme, iş zekâsı ve risk çerçevelemesinde aktif olarak derinleşiyorum." },
  { title: "Derin Öğrenme, NLP ve XAI", detail: "DentAI bilgisayarlı görü çalışması ve medikal yapay zekâ ürün deneyimi doğrudan kanıt sağlar." },
  { title: "Büyük Veri Analitiği", detail: "Daha büyük olay ve model-veri iş yükleri için sıradaki ölçekleme katmanı." },
  { title: "Üretken Yapay Zekâ ve RAG", detail: "HT Bilişim'de kurumsal bilgi erişimi, anlamsal parçalama ve vektör arama pratiği." },
  { title: "Ajan Tabanlı Yapay Zekâ", detail: "Council AI, orkestrasyon teorisini çalışan üç ajanlı sisteme dönüştürüyor." },
  { title: "MLOps ve Üretim Yapay Zekâsı", detail: "Güncel odağım: paketleme, gözlemlenebilirlik ve tekrarlanabilir model dağıtımı." },
  { title: "Yapay Zekâ Yönetişimi ve LLMOps", detail: "Açık sıradaki adım: yayımlanan yapay zekâ çevresinde kontrol, denetim ve güvenlik." }
];

let currentLang = "en";
try {
  currentLang = window.localStorage.getItem("portfolio-language") === "tr" ? "tr" : "en";
} catch (_) {
  currentLang = "en";
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const projectOrbit = document.querySelector("#project-orbit");
const projectSpotlight = document.querySelector("#project-spotlight");
const searchInput = document.querySelector("#skill-search");
const searchStatus = document.querySelector("#search-status");
const experienceTabs = document.querySelector("#experience-tabs");
const experienceDetail = document.querySelector("#experience-detail");
const projectDialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const languageButtons = [...document.querySelectorAll("[data-language]")];
let activeProject = 0;
let activeExperience = 0;

function localizedProject(project) {
  return currentLang === "tr" ? { ...project, ...projectTranslations[project.id] } : project;
}

function localizedExperience(index) {
  return currentLang === "tr" ? { ...experiences[index], ...experienceTranslations[index] } : experiences[index];
}

function localizedTrajectory(index) {
  return currentLang === "tr" ? { ...trajectory[index], ...trajectoryTranslations[index] } : trajectory[index];
}

function applyStaticCopy() {
  const copy = staticCopy[currentLang];
  document.documentElement.lang = currentLang;
  document.title = currentLang === "tr" ? "Emre Küçükgöçer — Yapay Zekâ ve Yazılım Portfolyosu" : "Emre Küçükgöçer — Applied AI & Software Portfolio";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = copy[element.dataset.i18nPlaceholder];
    if (value) element.setAttribute("placeholder", value);
  });
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function fold(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("en");
}

function scoreProject(project, query) {
  if (!query.trim()) return 1;
  const q = fold(query.trim());
  let score = fold(project.title).includes(q) ? 24 : 0;
  project.tags.forEach((tag) => { if (fold(tag).includes(q)) score += 10; });
  [project.kicker, project.summary, project.proof, project.role, project.challenge, project.system, project.boundary, project.business, ...project.architecture]
    .forEach((item) => { if (fold(item).includes(q)) score += 2; });
  return score;
}

function renderSpotlight(index) {
  activeProject = index;
  const project = localizedProject(projects[index]);
  projectSpotlight.innerHTML = `
    <span class="spotlight-index">${project.index} · ${project.status}</span>
    <h3>${project.title}</h3>
    <p class="spotlight-kicker">${project.kicker}</p>
    <p class="spotlight-summary">${project.summary}</p>
    <p class="spotlight-proof">${project.proof}</p>
    <div class="spotlight-tags">${project.tags.slice(0, 7).map((tag) => `<span>${tag}</span>`).join("")}</div>
    <button class="open-project" type="button" data-open-project="${index}">${currentLang === "tr" ? "Projeyi detaylı incele" : "View full project"}</button>`;
  document.querySelectorAll(".project-tab").forEach((button) => button.classList.toggle("is-active", Number(button.dataset.project) === index));
}

function renderProjects(query = "") {
  const clean = query.trim();
  const ranked = projects.map((baseProject, index) => {
    const project = localizedProject(baseProject);
    return { project, index, score: scoreProject(project, clean) };
  })
    .sort((a, b) => b.score - a.score || a.index - b.index);
  const matched = ranked.filter((item) => item.score > 0).length;
  if (clean && !ranked.some((item) => item.index === activeProject && item.score > 0)) {
    activeProject = ranked.find((item) => item.score > 0)?.index ?? 0;
  }
  projectOrbit.innerHTML = ranked.map(({ project, index, score }) => `
    <button class="project-tab${index === activeProject ? " is-active" : ""}${clean && score === 0 ? " is-muted" : ""}" type="button" data-project="${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${project.title}${project.badge ? `<em>${project.badge}</em>` : ""}</strong>
      <b>${clean && score > 0 ? `${score} ${currentLang === "tr" ? "puan" : "pts"}` : project.tags.length + (currentLang === "tr" ? " teknoloji" : " tech")}</b>
    </button>`).join("");
  searchStatus.textContent = clean
    ? currentLang === "tr"
      ? `${matched} eşleşen sistem · ilgisine göre sıralandı`
      : `${matched} matching system${matched === 1 ? "" : "s"} · ranked by relevance`
    : currentLang === "tr" ? "Altı proje · ön izleme için birine tıklayın" : "Six projects · click one to preview";
  renderSpotlight(activeProject);
}

function openProject(index) {
  const project = localizedProject(projects[index]);
  const labels = currentLang === "tr"
    ? ["Rolüm", "Problem", "Sistemin yanıtı", "Ürün ve iş modeli yönü", "İddia sınırı"]
    : ["My role", "The problem", "System response", "Product and business direction", "Claim boundary"];
  const sections = [project.role, project.challenge, project.system, project.business, project.boundary].map((value, sectionIndex) => [labels[sectionIndex], value]);
  dialogContent.innerHTML = `
    <header class="dossier-hero">
      <div class="dossier-globe" aria-hidden="true"></div>
      <span class="dossier-index">${project.index} · ${project.status}</span>
      <h2 id="dialog-title">${project.title}</h2>
      <p class="dossier-kicker">${project.kicker}</p>
      <p class="dossier-proof">${project.proof}</p>
      <p class="dossier-summary">${project.summary}</p>
    </header>
    <main class="dossier-body">
      <div class="dossier-sections">${sections.map((section, sectionIndex) => `
        <section class="dossier-section">
          <span>${String(sectionIndex + 1).padStart(2, "0")}</span>
          <div><h3>${section[0]}</h3><p>${section[1]}</p></div>
        </section>`).join("")}</div>
      <h3 class="architecture-heading">${currentLang === "tr" ? "Mühendislik<br />mimarisi" : "Engineering<br />architecture"}</h3>
      <ol class="architecture-list">${project.architecture.map((item, itemIndex) => `<li><span>${String(itemIndex + 1).padStart(2, "0")}</span><p>${item}</p></li>`).join("")}</ol>
      <div class="inventory"><span>${currentLang === "tr" ? "Eksiksiz teknoloji envanteri" : "Complete technology inventory"} · ${project.tags.length}</span><div>${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div></div>
    </main>`;
  projectDialog.showModal();
  projectDialog.scrollTop = 0;
  document.body.classList.add("dialog-open");
}

function renderExperience(index) {
  activeExperience = index;
  const item = localizedExperience(index);
  experienceTabs.innerHTML = experiences.map((_, itemIndex) => {
    const experience = localizedExperience(itemIndex);
    return `
    <button class="experience-tab${itemIndex === index ? " is-active" : ""}" type="button" role="tab" aria-selected="${itemIndex === index}" data-experience="${itemIndex}">
      <span>${String(itemIndex + 1).padStart(2, "0")} · ${experience.period}</span>
      <strong>${experience.company}</strong>
    </button>`;
  }).join("");
  const companyParts = item.company.split(" / ");
  experienceDetail.innerHTML = `
    <span>${item.period} · ${item.note}</span>
    <h3>${companyParts[0]}${companyParts[1] ? `<em>/ ${companyParts[1]}</em>` : ""}</h3>
    <p><b>${item.role}</b><br />${item.detail}</p>`;
}

const journeyPositions = [
  [18, 16], [61, 10], [27, 33], [78, 31], [20, 51], [68, 54], [35, 73], [84, 79]
];
function renderJourney() {
  document.querySelector("#journey-path").innerHTML = trajectory.map((_, index) => {
    const item = localizedTrajectory(index);
    return `
      <article class="journey-node" data-state="${item.state}" style="--x:${journeyPositions[index][0]}%;--y:${journeyPositions[index][1]}%;--mobile-y:${index * 12.1}%">
        <i></i><strong>${String(index + 1).padStart(2, "0")} · ${item.title}</strong><span>${item.note}</span><p>${item.detail}</p>
      </article>`;
  }).join("");
}

function setLanguage(language, persist = true) {
  const visibleSection = [...document.querySelectorAll(".scene[id]")]
    .find((section) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= 100 && bounds.bottom > 100;
    });
  const sectionOffset = visibleSection?.getBoundingClientRect().top;
  currentLang = language === "tr" ? "tr" : "en";
  if (persist) {
    try { window.localStorage.setItem("portfolio-language", currentLang); } catch (_) { /* device preference only */ }
  }
  const dialogWasOpen = projectDialog.open;
  if (dialogWasOpen) projectDialog.close();
  applyStaticCopy();
  renderProjects(searchInput.value);
  renderExperience(activeExperience);
  renderJourney();
  if (persist && visibleSection) {
    window.scrollBy({ top: visibleSection.getBoundingClientRect().top - sectionOffset, behavior: "instant" });
  }
  if (dialogWasOpen) openProject(activeProject);
}

projectOrbit.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (button) renderSpotlight(Number(button.dataset.project));
});
projectSpotlight.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-project]");
  if (button) openProject(Number(button.dataset.openProject));
});
searchInput.addEventListener("input", (event) => renderProjects(event.target.value));
languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
experienceTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-experience]");
  if (button) renderExperience(Number(button.dataset.experience));
});
document.querySelector("[data-close-dialog]").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

const sections = [...document.querySelectorAll(".scene[id]")];
const navLinks = [...document.querySelectorAll(".site-header nav a")];
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
}, { threshold: [.25, .5, .75] });
sections.forEach((section) => observer.observe(section));

if (!reduceMotion) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const heroProgress = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
      document.querySelector(".hero-world")?.style.setProperty("--world-y", `${heroProgress * 55}px`);
      const experience = document.querySelector(".experience-scene");
      const bounds = experience?.getBoundingClientRect();
      if (bounds) {
        const progress = Math.max(-1, Math.min(1, -bounds.top / window.innerHeight));
        document.querySelector(".journey-world")?.style.setProperty("--journey-y", `${progress * 28}px`);
      }
      ticking = false;
    });
  }, { passive: true });
}

setLanguage(currentLang, false);
window.setTimeout(() => document.querySelector(".boot")?.classList.add("is-gone"), 450);
