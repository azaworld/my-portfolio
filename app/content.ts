// ============================================================================
// CONTENT — everything editable on the site lives in this file.
// Anything wrapped in {{DOUBLE_BRACES}} is a placeholder: replace with your
// real copy, links, and numbers. Nothing else needs to change.
// ============================================================================

export const profile = {
  name: "Arifuzzaman “Antor”",
  shortName: "Antor",
  roles: [
    "I lead engineering teams",
    "I ship products",
    "I build companies",
    "I teach AI & tech",
    "I solve blockers before breakfast",
  ],
  identity:
    "Founder & CEO @ AZAI Labs · Technical Project Manager @ Platformz · Sr. Software Engineer @ Kintsugi · QA Consultant · Podcaster · AI Tech Instructor",
  pitch:
    "The person who turns chaos into shipped products. I'm the TPM at Platformz running three client platforms, a Sr. Software Engineer & feature lead at Kintsugi, and I build companies — AZAI Labs ships AI products and augmented AI talent, while AZADEMY teaches engineers to land remote jobs and ace interviews.",
  email: "arifuzantor@gmail.com",
  linkedin: "https://linkedin.com/in/azantor",
  github: "https://github.com/azaworld",
  twitter: "https://x.com/azantor1",
  facebook: "https://www.facebook.com/arifuzantor/",
  youtube: "https://www.youtube.com/@azademy",
  podcast: "https://azapodcast.com",
  azailabs: "https://azailabs.dev",
  azademy: "https://azademy.org",
  upwork: "https://www.upwork.com/freelancers/~01b1ba72ba57683f43",
  listen2aza: "https://www.youtube.com/@Listen2AZA",
  foundation: "https://ssasf.vercel.app",
  foundationFacebook: "https://www.facebook.com/asattarfoundation/",
  calendar: "", // add a booking link (e.g. https://cal.com/yourname) to show a "Book a call" channel
  location: "Dhaka, Bangladesh",
};

export const heroStats = [
  { value: 6, suffix: "+", label: "Years in tech & delivery" },
  { value: 30, suffix: "+", label: "People led — eng, DevOps, design, marketing" },
  { value: 40, suffix: "+", label: "Clients & companies served" },
  { value: 50, suffix: "+", label: "Projects & products shipped" },
];

// Full cumulative tally — rendered as the stat grid in Career Analytics.
export const careerTotals = [
  { value: 6, suffix: "+", label: "Years in tech & delivery" },
  { value: 11, suffix: "", label: "Companies & roles" },
  { value: 40, suffix: "+", label: "Clients & companies served" },
  { value: 30, suffix: "+", label: "People led across teams" },
  { value: 50, suffix: "+", label: "Projects & products shipped" },
  { value: 23, suffix: "", label: "Freelance jobs · all ★5.0" },
  { value: 7, suffix: "", label: "Industries shipped into" },
  { value: 4, suffix: "", label: "Ventures founded" },
];

// RPG character stats for the About section (0–100)
export const characterStats = [
  { name: "Leadership", value: 96, color: "var(--violet)" },
  { name: "Delivery", value: 98, color: "var(--cyan)" },
  { name: "Communication", value: 95, color: "var(--magenta)" },
  { name: "Vision", value: 97, color: "var(--amber)" },
];

export const originStory = [
  `Every team has that person who sees the whole board — who knows which piece is
   blocked, which dependency is about to bite, and which conversation will unblock
   three engineers at once. That's the role I was built for.`,
  `Today I build companies and run delivery: founder & CEO of AZAI Labs, founder of
   AZADEMY and Listen2AZA, TPM at Platformz, Sr. Software Engineer at Kintsugi — and I run the
   Silent Sacrifice Abdus Sattar Foundation in honor of my father. The mission
   everywhere is the same: turn chaos into shipped products. Here's how the
   character leveled up:`,
];

// ----------------------------------------------------------------------------
// THE JOURNEY — origin story as a level-up map (rendered as a flow in About).
// Click a card to expand its details. `parallel: true` on two consecutive
// entries renders them side by side as simultaneous missions.
// ----------------------------------------------------------------------------
export type JourneyStep = {
  lv: number;
  year: string;
  icon: string;
  title: string;
  where: string;
  note: string;
  details: string[];
  parallel?: boolean;
};

export const journey: JourneyStep[] = [
  {
    lv: 1,
    year: "2020 — 2021",
    icon: "🎮",
    title: "Software QA Engineer (part-time)",
    where: "CarryBags Ltd — London, UK",
    note: "First bugs busted, remote from Dhaka.",
    details: [
      "Led QA for key projects — testing workflows and team coordination",
      "Manual mobile QA on Android & iOS, cross-device compatibility",
      "Test cases from specs & user stories; regression discipline",
    ],
  },
  {
    lv: 2,
    year: "2021 — 2022",
    icon: "🌍",
    title: "Augmented Sr. SQA",
    where: "Intellex via TCS — US client",
    note: "Global Magento commerce across 4 regions.",
    details: [
      "2FA and verification flows with Twilio + SendGrid",
      "Multi-currency & multi-language validation — USA, UK, Canada, Europe",
      "Magento API integrations: QuickBooks, ShipBob, Mailchimp",
    ],
  },
  {
    lv: 3,
    year: "2021 — 2022",
    icon: "🐣",
    title: "Jr. Software QA Engineer",
    where: "Dynamic Solution Innovators",
    note: "OpenCRVS, Movandi (5G), Altech — Cypress + CI/CD.",
    details: [
      "Manual testing with TestRail, automation with Cypress.io + CI/CD",
      "QA across OpenCRVS, Movandi (5G mmWave), and Altech",
      "Cross-browser coverage and continuous-integration practices",
    ],
  },
  {
    lv: 4,
    year: "2022 — 2023",
    icon: "💳",
    title: "Sr. Automation & Reliability Engineer",
    where: "Mastercard",
    note: "Chaos engineering at global payments scale.",
    details: [
      "CI/CD pipelines — Jenkins, GitLab CI, AWS CodePipeline",
      "Chaos engineering sessions + Prometheus/Grafana observability",
      "AWS + Terraform infrastructure automation; mentored junior engineers",
    ],
  },
  {
    lv: 5,
    year: "2022 — 2023",
    icon: "🛡️",
    title: "Software QA Engineer",
    where: "REVE Systems",
    note: "Sothik +60% performance · critical defects −30%.",
    details: [
      "QA Lead for Sothik (Bangla grammar & spell checker), QA contributor on CBMS",
      "Security testing with OWASP ZAP, Burp Suite, and Kali Linux",
      "Performance testing with JMeter and LoadRunner",
    ],
  },
  {
    lv: 6,
    year: "2023 — 2025",
    icon: "🚑",
    title: "QA Engineer I → QA Lead",
    where: "Kinetik — New York",
    note: "Healthcare platform moving real patients.",
    details: [
      "Playwright + Postman API automation, scripted in TypeScript",
      "AWS APIs (Lambda, SQS, S3) and Magento ↔ QuickBooks/ShipBob/Mailchimp sync",
      "Release gates for critical healthcare user flows",
    ],
  },
  {
    lv: 7,
    year: "2024 — 2025",
    icon: "📱",
    title: "Software QA Engineer",
    where: "Grameenphone (via Miaki)",
    note: "MyGP app — built the full backend automation framework.",
    details: [
      "Designed and built the complete backend test framework for the MyGP app",
      "End-to-end backend API automation with Playwright",
      "Covered the full backend surface — reliable, repeatable regression runs",
    ],
  },
  {
    lv: 8,
    year: "2024 — 2026",
    icon: "🛟",
    title: "Software Automation Engineer II",
    where: "All Generation Tech — New York",
    note: "Automation for global insurance clients — CFC, Tokio Marine Kiln, ANICO.",
    details: [
      "Test automation across insurance platforms for CFC, Tokio Marine Kiln, and American National (ANICO)",
      "Built and maintained automation frameworks and CI integration",
      "Quality engineering for regulated, high-stakes insurance workflows",
    ],
  },
  {
    lv: 9,
    year: "2024 — Present",
    icon: "🎯",
    title: "Technical Project Manager",
    where: "Platformz",
    note: "3 client platforms · 30+ person team · with the CEO.",
    details: [
      "FUR4 — 5 portals plus a 12-month EDI program shipped in ~60 days",
      "Rockerz and DMV Raw Feeders delivery end to end",
      "Daily cadence across retail, EDI, integration, fulfillment, and engineering",
    ],
  },
  {
    lv: 10,
    year: "2025 — Present",
    icon: "🧠",
    title: "Sr. Software Engineer",
    where: "Kintsugi — San Francisco",
    note: "Engineering quality into AI-powered tax compliance.",
    details: [
      "Playwright + TypeScript automation wired into CI",
      "Quality gates for AI-driven features where correctness is the product",
    ],
  },
  {
    lv: 11,
    year: "2025 — Present",
    icon: "👑",
    title: "Founder & CEO — New Game+",
    where: "AZAI Labs · AZADEMY · Listen2AZA · SSAS Foundation",
    note: "Build with agents. Teach engineers. Tell stories. Honor my father.",
    details: [
      "AZAI Labs — AI agents that do real client work",
      "AZADEMY — learning meets earning for CS careers",
      "Listen2AZA — audiobooks people press play on",
      "Silent Sacrifice Abdus Sattar Foundation — scholarships, mentorship, Quran education",
    ],
  },
];

// ----------------------------------------------------------------------------
// SKILL TREE — nodes light up & expand on click. Branches: lead / build / found
// ----------------------------------------------------------------------------
export type SkillNode = {
  id: string;
  name: string;
  branch: "Leadership" | "Delivery" | "Entrepreneurship";
  level: number; // 1–5 proficiency
  example: string; // real example shown when the node is opened
};

export const skillTree: SkillNode[] = [
  {
    id: "program-mgmt",
    name: "Program Management",
    branch: "Leadership",
    level: 5,
    example:
      "Run delivery for 3 client platforms at Platformz (FUR4, Rockerz, DMV Raw Feeders) — including a 3P hybrid EDI program across 5 enterprise partners that compressed a 12+ month timeline into ~60 days.",
  },
  {
    id: "agile",
    name: "Agile / Kanban",
    branch: "Delivery",
    level: 5,
    example:
      "Flow-based delivery: WIP limits, cycle-time tracking, and blocker triage that kept releases predictable without sprint theater.",
  },
  {
    id: "cross-team",
    name: "Cross-team Coordination",
    branch: "Leadership",
    level: 5,
    example:
      "Lead a 30+ person team across engineering, DevOps, design, leads, and marketing — one daily delivery cadence spanning retail, EDI, integration, fulfillment, and internal engineering.",
  },
  {
    id: "stakeholder",
    name: "Stakeholder & CTO Reporting",
    branch: "Leadership",
    level: 4,
    example:
      "Run the delivery side of Platformz directly with the CEO — roadmap progress, risk register, client-facing status, and the honest version of 'are we on track?'",
  },
  {
    id: "risk-escalation",
    name: "Risk & Escalation",
    branch: "Leadership",
    level: 4,
    example: "Risk registers, early warnings, and making the escalation call nobody else wants to make.",
  },
  {
    id: "hiring-mentoring",
    name: "Hiring & Mentoring",
    branch: "Leadership",
    level: 4,
    example: "Mentored juniors at Mastercard; built and grew teams up to the 30+ person org at Platformz.",
  },
  {
    id: "qa-release",
    name: "QA & Release Management",
    branch: "Delivery",
    level: 5,
    example:
      "Built the QA discipline from scratch — automation frameworks, release gates, and zero-surprise launch days.",
  },
  {
    id: "reliability",
    name: "Reliability & Chaos Engineering",
    branch: "Delivery",
    level: 4,
    example:
      "SRE practice at Mastercard — chaos engineering sessions, Prometheus + Grafana observability, Terraform-provisioned AWS infrastructure, and incident-response playbooks for critical payment systems.",
  },
  {
    id: "api-testing",
    name: "API & Integration Testing",
    branch: "Delivery",
    level: 5,
    example: "Postman, REST Assured, GraphQL — plus Magento ↔ QuickBooks/ShipBob/Mailchimp data-sync validation.",
  },
  {
    id: "performance",
    name: "Performance & Load",
    branch: "Delivery",
    level: 5,
    example: "JMeter, k6, Locust, LoadRunner, Gatling — wired into nightly CI pipelines.",
  },
  {
    id: "security-testing",
    name: "Security Testing",
    branch: "Delivery",
    level: 4,
    example: "OWASP ZAP, Burp Suite, and Kali Linux scans baked into release gates.",
  },
  {
    id: "mobile-qa",
    name: "Mobile QA",
    branch: "Delivery",
    level: 5,
    example: "iOS & Android on real devices — Appium, Xamarin Test Cloud, AWS Device Farm.",
  },
  {
    id: "test-strategy",
    name: "Test Strategy & Planning",
    branch: "Delivery",
    level: 5,
    example: "Risk-based test plans, coverage strategy, and release gates — manual, smoke, regression, UAT.",
  },
  {
    id: "bdd",
    name: "BDD (Cucumber / Gherkin)",
    branch: "Delivery",
    level: 4,
    example: "Behavior-driven specs that product, QA, and engineering all read the same way.",
  },
  {
    id: "accessibility",
    name: "Accessibility & Visual",
    branch: "Delivery",
    level: 4,
    example: "WCAG-aligned accessibility checks and visual-regression testing (Applitools).",
  },
  {
    id: "containers",
    name: "Docker & CI/CD",
    branch: "Delivery",
    level: 4,
    example: "Containerized test execution and pipelines — Jenkins, GitLab CI, Bitbucket, GitHub Actions, AWS.",
  },
  {
    id: "languages",
    name: "TypeScript · Python · Java",
    branch: "Delivery",
    level: 5,
    example: "TypeScript and JavaScript daily; Python and Java for automation and tooling.",
  },
  {
    id: "roadmapping",
    name: "Roadmapping & Prioritization",
    branch: "Leadership",
    level: 4,
    example: "Turn customer signal and constraints into a sequenced roadmap — what to build, kill, and ship next.",
  },
  {
    id: "speaking",
    name: "Speaking & Teaching",
    branch: "Entrepreneurship",
    level: 5,
    example: "Courses, workshops, technical talks, podcast hosting, and event MC — making complex things land.",
  },
  {
    id: "product",
    name: "Product Strategy",
    branch: "Entrepreneurship",
    level: 4,
    example:
      "Shaped roadmaps from customer signal: what to build, what to kill, and what to ship next quarter.",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    branch: "Entrepreneurship",
    level: 4,
    example:
      "Founder & CEO of AZAI Labs — an AI agents lab shipping practical automation for quality, operations, and decision-making (build with agents, not headcount) — and founder of AZADEMY.",
  },
  {
    id: "ai-instruction",
    name: "AI Instruction",
    branch: "Entrepreneurship",
    level: 4,
    example:
      "Founder of AZADEMY — 'learning meets earning': practical AI & tech courses, build videos, and real interview sessions engineered to get CS people hired.",
  },
  {
    id: "content-storytelling",
    name: "Content & Storytelling",
    branch: "Entrepreneurship",
    level: 4,
    example: "Two YouTube channels (AZADEMY, Listen2AZA), podcasting, and developer-facing courses.",
  },
  {
    id: "community-impact",
    name: "Community & Impact",
    branch: "Entrepreneurship",
    level: 4,
    example: "Run the SSAS Foundation — scholarships, mentorship, and 60+ Quran students in year one.",
  },
];

// ----------------------------------------------------------------------------
// MISSION LOG — career as completed quests. Objectives, boss fight, loot.
// ----------------------------------------------------------------------------
export type Mission = {
  id: string;
  codename: string;
  role: string;
  org: string;
  short: string; // compact label for the career timeline chart
  period: string;
  start: number; // fractional year for the timeline chart, e.g. Sept 2024 → 2024.7
  end: number | null; // null = present
  status: "ACTIVE" | "COMPLETE";
  brief: string;
  objectives: string[];
  bossFight: string; // the biggest challenge
  loot: string[]; // outcomes / metrics
  tech?: string[]; // "loadout" — technologies used, shown in the debrief
};

export const missions: Mission[] = [
  {
    id: "azailabs",
    codename: "Operation Genesis",
    role: "Founder & CEO",
    org: "AZAI Labs — San Francisco, USA · remote-first from Dhaka",
    short: "AZAI Labs",
    period: "2025 — Present",
    start: 2025.0,
    end: null,
    status: "ACTIVE",
    brief:
      "Build with agents, not headcount — an AI agents lab shipping practical automation for quality, operations, and decision-making, plus agentic talent augmentation for teams worldwide.",
    objectives: [
      "Ship AI agents that automate real work — quality, operations, and decision-making",
      "Augment client teams with agentic talent so they move faster with confidence",
      "Build AI products end to end — agentic automation and computer vision",
      "Run the company: product, clients, hiring, and vision",
    ],
    bossFight:
      "Founding a company while running delivery for two others — the ultimate WIP-limit violation, managed the same way as everything else: ruthless prioritization and a daily cadence.",
    loot: [
      "AI agents in production doing real client work",
      "A team that ships — 2–10 people, zero bureaucracy",
      "AI products, services, and augmented talent under one roof",
    ],
    tech: ["AI Agents", "LLMs", "Computer Vision", "TypeScript", "Python", "AWS"],
  },
  {
    id: "platformz",
    codename: "Operation Command Center",
    role: "Technical Project Manager",
    org: "Platformz — platformz.us",
    short: "Platformz",
    period: "Sept 2024 — Present",
    start: 2024.7,
    end: null,
    status: "ACTIVE",
    brief:
      "Running delivery for three client platforms alongside the CEO — leading a 30+ person team of engineers, DevOps, designers, leads, and marketing.",
    objectives: [
      "FUR4 — enterprise omnichannel pet-brand platform: 5 portals (DTC storefront, B2B dealer portal, influencer referral portal, GOD ops-health portal, AI operations control tower) on a Magento commerce core",
      "FUR4 3P hybrid EDI program across 5 enterprise partners — full compliance with end-to-end automation",
      "Rockerz — immersive product customizer plus DTC, dealer, dealer-locator, and referral portals on AWS",
      "DMV Raw Feeders — zone-based delivery routing, subscription management, and referral portal",
      "Daily ops cadence across retail, EDI, integration, fulfillment, and engineering teams",
    ],
    bossFight:
      "A 3P hybrid EDI rollout — retailer requirements, EDI document lifecycles, inventory rules, SLAs, and siloed vendors across Amazon, Walmart, Target, and Chewy. The kind of program that typically takes 12+ months. We shipped it in ~60 days.",
    loot: [
      "12+ month EDI program delivered in ~60 days",
      "FUR4 live on Chewy, Amazon, Walmart, eBay, Macy's & more",
      "3 client platforms in stable, monitored production",
      "30+ person cross-functional team on one delivery cadence",
    ],
    tech: ["Magento", "AWS", "EDI", "Docker", "Jira", "CI/CD"],
  },
  {
    id: "kintsugi",
    codename: "Operation Precision",
    role: "Sr. Software Engineer",
    org: "Kintsugi — San Francisco, USA (remote)",
    short: "Kintsugi",
    period: "Sept 2025 — Present",
    start: 2025.7,
    end: null,
    status: "ACTIVE",
    brief:
      "Sr. Software Engineer & feature lead on an AI-powered sales-tax platform — owning the engineering process where a wrong number isn't a bug, it's a compliance problem.",
    objectives: [
      "Feature lead — drive features end to end and own the engineering process",
      "Playwright + TypeScript automation wired into CI",
      "Quality gates for AI-driven features where correctness is the product",
    ],
    bossFight:
      "Testing AI-powered tax logic: outputs vary, regulations shift, and 'looks right' isn't good enough. Built verification approaches that hold the line on accuracy.",
    loot: [
      "Features shipped with quality built into the engineering process",
      "Engineering leadership across a high-stakes fintech domain",
    ],
    tech: ["Playwright", "TypeScript", "Postman", "CI/CD"],
  },
  {
    id: "allgen",
    codename: "Operation Underwriter",
    role: "Software Automation Engineer II",
    org: "All Generation Tech — New York, NY, USA (remote)",
    short: "All Gen Tech",
    period: "Feb 2024 — May 2026",
    start: 2024.1,
    end: 2026.4,
    status: "COMPLETE",
    brief:
      "Test automation for global insurance platforms — serving CFC, Tokio Marine Kiln, and American National (ANICO), where a defect can mean a mis-paid claim.",
    objectives: [
      "Automation across insurance products for CFC, Tokio Marine Kiln, and American National (ANICO)",
      "Built and maintained automation frameworks with CI integration",
      "Quality engineering for regulated, high-stakes insurance workflows",
      "Regression and API automation suites maintained across multiple products",
    ],
    bossFight:
      "Insurance logic is unforgiving — premiums, claims, and compliance rules that have to be exactly right across three enterprise clients at once.",
    loot: [
      "Automation frameworks serving 3 enterprise insurance clients",
      "Reliable regression coverage across regulated workflows",
    ],
    tech: ["Test Automation", "CI/CD", "Insurance Domain", "API Testing"],
  },
  {
    id: "grameenphone",
    codename: "Operation Dialtone",
    role: "Software QA Engineer",
    org: "Grameenphone (via Miaki) — Dhaka, Bangladesh",
    short: "Grameenphone",
    period: "Feb 2024 — Mar 2025",
    start: 2024.1,
    end: 2025.2,
    status: "COMPLETE",
    brief:
      "Backend quality for MyGP — the app for Bangladesh's largest mobile operator, used by millions. Built the entire backend automation framework from scratch.",
    objectives: [
      "Designed and built the complete backend test automation framework for the MyGP app",
      "End-to-end backend API automation with Playwright",
      "Covered the full backend surface for reliable, repeatable regression",
    ],
    bossFight:
      "A telecom backend at national scale — millions of users, countless API flows — and no existing automation. Built the framework that tested all of it.",
    loot: [
      "Full backend automation framework for MyGP, built from zero",
      "Reliable regression across the entire backend surface",
    ],
    tech: ["Playwright", "TypeScript", "API Testing", "Backend Automation"],
  },
  {
    id: "kinetik",
    codename: "Operation Lifeline",
    role: "Software QA Engineer I → QA Lead",
    org: "Kinetik — New York, USA (remote)",
    short: "Kinetik",
    period: "Sept 2023 — Sept 2025",
    start: 2023.7,
    end: 2025.7,
    status: "COMPLETE",
    brief:
      "Own delivery quality for a healthcare platform moving real patients — iOS, Android, web, and mission-critical backend systems across Trip Scheduler, Trip Assistant, and RCM.",
    objectives: [
      "Led API automation with Playwright + Postman — automation scripts in TypeScript",
      "Worked with AWS APIs (Lambda, SQS, S3) and web security testing",
      "Validated Magento API integrations with QuickBooks, ShipBob, and Mailchimp — including data synchronization with external systems",
      "E-commerce flows, 2FA with Twilio, usability, and multi-language / multi-currency support",
      "UI, automated, and TDD strategies; Selenium browser suites; performance & stability testing",
      "Manual testing with QASE and Jira across all three product lines",
    ],
    bossFight:
      "Shipping weekly into a healthcare environment where a regression isn't a bug — it's a missed patient trip. Built release gates that caught issues without slowing the team down.",
    loot: [
      "Zero-surprise launch cadence across 3 product lines",
      "QA architecture adopted org-wide",
      "TypeScript API automation suite covering critical flows",
    ],
    tech: ["TypeScript", "Playwright", "Postman", "Selenium", "AWS", "QASE", "Jira", "Magento"],
  },
  {
    id: "mastercard",
    codename: "Operation Failsafe",
    role: "Senior Software Automation & Reliability Engineer",
    org: "Mastercard — Remote",
    short: "Mastercard",
    period: "Feb 2022 — Aug 2023",
    start: 2022.1,
    end: 2023.6,
    status: "COMPLETE",
    brief:
      "Test automation and site reliability at global payments scale — where 'five nines' isn't a slogan, it's the floor.",
    objectives: [
      "Built test automation frameworks for functional and performance testing across mobile and web",
      "CI/CD pipelines with Jenkins, GitLab CI, and AWS CodePipeline",
      "Performance & load testing for high-traffic conditions with JMeter and Locust",
      "Chaos engineering sessions to surface failure points before customers found them",
      "Observability with Prometheus + Grafana — monitoring, logging, and alerting end to end",
      "Infrastructure provisioning and scaling with AWS + Terraform alongside platform engineers",
      "Incident response & disaster recovery playbooks; on-call for critical production systems",
    ],
    bossFight:
      "Deliberately breaking payment-critical systems in controlled chaos sessions — and proving they heal. Resilience you can't fake on a slide deck.",
    loot: [
      "Incident response & DR playbooks adopted by the team",
      "Mentored junior engineers in automation & SRE practice",
      "High-traffic load profiles validated with JMeter + Locust",
    ],
    tech: ["AWS", "Terraform", "Jenkins", "GitLab CI", "JMeter", "Locust", "Prometheus", "Grafana"],
  },
  {
    id: "intellex",
    codename: "Operation Global Cart",
    role: "Augmented Sr. SQA — Intellex via TCS",
    org: "Tata Consultancy Services — Remote (US client)",
    short: "TCS / Intellex",
    period: "Jan 2021 — Jan 2022",
    start: 2021.0,
    end: 2022.0,
    status: "COMPLETE",
    brief:
      "Embedded senior QA for a US client's global Magento commerce platform — registration to checkout, across four regions.",
    objectives: [
      "Full e-commerce coverage: user registration, product catalog, and checkout workflows",
      "2FA testing with Twilio; verification flows with Twilio + SendGrid",
      "Multi-language and multi-currency validation across USA, UK, Canada, and Europe",
      "Selenium browser automation suites for cross-device compatibility",
      "Magento Commerce API integrations with QuickBooks, ShipBob, and Mailchimp",
    ],
    bossFight:
      "One storefront, four regions, every currency-rounding and translation edge case waiting to embarrass somebody at checkout. None shipped.",
    loot: [
      "Global multi-region launch validated end to end",
      "Automated usability & API suites for key commerce flows",
      "Daily reporting cadence trusted by the client",
    ],
    tech: ["Selenium", "Magento", "Twilio", "SendGrid", "ReactJS", "Next.js", ".NET Core", "Azure", "SQL"],
  },
  {
    id: "reve",
    codename: "Operation Stronghold",
    role: "Software QA Engineer",
    org: "REVE Systems — Dhaka, Bangladesh (onsite)",
    short: "REVE Systems",
    period: "Dec 2022 — Aug 2023",
    start: 2022.9,
    end: 2023.6,
    status: "COMPLETE",
    brief:
      "Comprehensive QA for CBMS and Sothik (Bangla grammar & spell checker) — mobile, performance, and security testing with measurable wins.",
    objectives: [
      "End-to-end testing for CBMS with detailed process documentation",
      "Mobile testing across Android, iOS, Xamarin Test Cloud, and AWS Device Farm",
      "Performance testing with JMeter and LoadRunner",
      "Security testing with OWASP ZAP, Burp Suite, and Kali Linux",
      "Stakeholder engagement, team mentoring, and risk-based testing",
    ],
    bossFight:
      "Testing a grammar engine where every false positive erodes user trust — built evaluation suites that measured linguistic accuracy, not just uptime.",
    loot: [
      "Mobile app testing speed up 40%",
      "Sothik performance up 60%",
      "Critical defects down 30% via regression strategy",
    ],
    tech: ["Selenium", "JMeter", "LoadRunner", "AWS Device Farm", "Xamarin Test Cloud", "OWASP ZAP", "Burp Suite", "Kali Linux"],
  },
  {
    id: "dsi",
    codename: "Operation Foundation",
    role: "Jr. Software QA Engineer",
    org: "Dynamic Solution Innovators Ltd. — Dhaka, Bangladesh (onsite)",
    short: "DSI",
    period: "Sept 2021 — Nov 2022",
    start: 2021.7,
    end: 2022.9,
    status: "COMPLETE",
    brief:
      "Quality for OPENCRVS — open-source civil registration infrastructure used for the world's most vital records — plus the Altech platform.",
    objectives: [
      "Manual testing with TestRail and automated testing with Cypress for OPENCRVS",
      "Partnered with the Altech team on bugs, test plans, and quality planning",
      "Cross-browser testing and continuous integration practices",
      "Performance and security testing for stability and vulnerability discovery",
    ],
    bossFight: "Earning trust as the junior who finds the bugs that matter — on software that registers births and deaths.",
    loot: ["OPENCRVS shipped with confidence", "CI-integrated Cypress suite", "Detailed test-plan discipline"],
    tech: ["Cypress", "TestRail", "Notion", "Jira"],
  },
  {
    id: "carrybags",
    codename: "Operation First Blood",
    role: "Jr. Software QA Engineer (freelance)",
    org: "CarryBags Ltd — London, UK (part-time, remote)",
    short: "CarryBags",
    period: "Jul 2020 — Aug 2021",
    start: 2020.5,
    end: 2021.6,
    status: "COMPLETE",
    brief: "The tutorial level — except the e-commerce revenue was real.",
    objectives: [
      "Functional, usability, compatibility, and performance testing across platforms",
      "Manual mobile testing on Android and iOS — push notifications, location services, device integrations",
      "Cross-device coverage and performance under varied network conditions",
      "Test cases from functional specs and user stories; regression discipline",
    ],
    bossFight: "Remote-first collaboration across timezones before remote was cool.",
    loot: ["Regression safety net", "First automation framework", "Stakeholder-ready bug reports"],
    tech: ["Jira", "Selenium", "Postman", "SQL"],
  },
];

// ----------------------------------------------------------------------------
// LEADERSHIP DASHBOARD — the "what I do daily" animated dashboard
// ----------------------------------------------------------------------------
export const dashboard = {
  counters: [
    { label: "Standups run", value: 900, suffix: "+" }, // {{ADJUST}}
    { label: "Blockers cleared", value: 480, suffix: "+" }, // {{ADJUST}}
    { label: "Portals & releases shipped", value: 40, suffix: "+" }, // {{ADJUST}}
    { label: "People led across 3 clients", value: 30, suffix: "+" },
  ],
  radials: [
    { label: "On-time delivery", value: 94 }, // {{ADJUST}}
    { label: "Sprint goal hit rate", value: 91 }, // {{ADJUST}}
    { label: "Team retention", value: 100 }, // {{ADJUST}}
  ],
  weeklyFlow: [6, 9, 7, 11, 8, 12, 10, 14, 11, 13, 15, 12], // throughput sparkline {{ADJUST}}
  blockerBars: [
    { label: "Mon", value: 4 },
    { label: "Tue", value: 7 },
    { label: "Wed", value: 3 },
    { label: "Thu", value: 6 },
    { label: "Fri", value: 2 },
  ],
};

// ----------------------------------------------------------------------------
// CAREER ANALYTICS — graphs that make the journey legible at a glance.
// ----------------------------------------------------------------------------
export const careerAnalytics = {
  // Seniority climb — role level (1–11) by year, for the growth curve.
  growth: [
    { year: "2020", level: 1, label: "QA (part-time)" },
    { year: "2021", level: 3, label: "Sr. SQA · Jr. QA" },
    { year: "2022", level: 5, label: "Reliability · QA" },
    { year: "2023", level: 6, label: "QA Lead" },
    { year: "2024", level: 9, label: "Automation Eng II · TPM" },
    { year: "2025", level: 11, label: "Founder & CEO" },
  ],
  // Where the experience concentrates (relative weight, 0–100).
  domains: [
    { name: "QA & Test Automation", value: 100, color: "var(--cyan)" },
    { name: "Program & Delivery Mgmt", value: 80, color: "var(--violet)" },
    { name: "Performance & Reliability", value: 70, color: "var(--magenta)" },
    { name: "Software Engineering", value: 65, color: "var(--amber)" },
    { name: "Entrepreneurship & AI", value: 75, color: "#34d399" },
  ],
  // Industries shipped into — breadth of domain knowledge.
  industries: [
    { name: "Healthcare", icon: "🚑" },
    { name: "Payments / Fintech", icon: "💳" },
    { name: "Insurance", icon: "🛟" },
    { name: "Telecom", icon: "📱" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Civic / Gov", icon: "🏛️" },
    { name: "AI / SaaS", icon: "🤖" },
  ],
};

// ----------------------------------------------------------------------------
// SERVICES — productized engagements (the "sell" layer).
// ----------------------------------------------------------------------------
export const services = [
  {
    icon: "🎯",
    name: "TPM & Product Management",
    tagline: "I turn roadmaps into shipped product.",
    points: [
      "Fractional TPM / delivery lead — standups, cadence, blocker-clearing",
      "Product management — roadmap, prioritization, and customer-signal strategy",
      "Cross-team coordination + honest stakeholder & CTO reporting",
    ],
    ideal: "Startups scaling past 10 engineers who need execution, not more meetings.",
    accent: "var(--violet)",
  },
  {
    icon: "🧪",
    name: "Sr. QA — Testing & Management",
    tagline: "Quality engineering, end to end.",
    points: [
      "Manual + automation (Playwright/TS), API, security & performance testing",
      "QA consultancy — test strategy, process, and release-gate setup",
      "QA management — lead the team, own the quality bar, ship with confidence",
    ],
    ideal: "Products shipping without a safety net — or QA teams that need direction.",
    accent: "var(--cyan)",
  },
  {
    icon: "🤖",
    name: "AI Agents — via AZAI Labs",
    tagline: "Build with agents, not headcount.",
    points: [
      "Custom AI agents that automate quality, ops, and decisions",
      "Agentic workflows wired into your existing stack",
      "From proof-of-concept to production, with monitoring",
    ],
    ideal: "Teams that want to automate real work and move faster with confidence.",
    accent: "var(--magenta)",
  },
  {
    icon: "🎙️",
    name: "Instruction, Speaking & Hosting",
    tagline: "I teach it, host it, and tell the story.",
    points: [
      "AI & tech courses and live workshops (via AZADEMY)",
      "Podcast hosting & guesting — The AZA Execution Show",
      "Event hosting / MC, technical talks, and interview-prep coaching",
    ],
    ideal: "Teams, communities, and events that want an engaging technical voice.",
    accent: "var(--amber)",
  },
  {
    icon: "🔍",
    name: "Hiring & Technical Interviews",
    tagline: "I find the engineers who can actually do the work.",
    points: [
      "Run technical screens and live interviews for your roles",
      "Scorecards and hiring signal you can trust",
      "Interview-prep coaching for candidates (via AZADEMY)",
    ],
    ideal: "Founders and hiring managers who can't afford a bad senior hire.",
    accent: "#34d399",
  },
];

export const availability = {
  status: "Open to select engagements",
  note: "Fractional, advisory, or project-based — remote, worldwide.",
};

// Direct ways to hire — shown in the Hire hub.
export const hireChannels = [
  { icon: "⭐", label: "Hire on Upwork", sub: "Top Rated · see my gigs & reviews", href: "https://www.upwork.com/freelancers/~01b1ba72ba57683f43" },
  { icon: "📧", label: "Email me", sub: "arifuzantor@gmail.com", href: "mailto:arifuzantor@gmail.com?subject=Let%27s%20work%20together" },
  { icon: "💼", label: "LinkedIn", sub: "Connect & message", href: "https://linkedin.com/in/azantor" },
  { icon: "🤖", label: "AZAI Labs", sub: "Hire the agency", href: "https://azailabs.dev" },
];

// ----------------------------------------------------------------------------
// PREMIUM — high-touch, limited-slot offerings (the "VIP" tier).
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// SHIPFOLIO — productized "get a site like this" offering (azantor.xyz/shipfolio).
// ----------------------------------------------------------------------------
export const studio = {
  brand: "Personal Brand Studio",
  tagline: "Premium personal-brand websites, built for you.",
  intro:
    "Not a template — a bespoke, animated, premium website built to make you look like the leader you already are. Doctors, founders, consultants, and executives use it to win trust before the first conversation even starts. The site you're on right now is the demo.",
  whatsapp: "8801580497264",
  whatsappText: "Hi! I saw your work and I'd like to order a Personal Brand Studio website.",
  linkedin: "https://www.linkedin.com/in/azantor/",
  email: "arifuzantor@gmail.com",
  // Why ShipFolio — shown as feature bullets on the product page.
  why: [
    { icon: "🎨", title: "Bespoke, not a template", text: "Designed around your story, role, and brand — no two are alike." },
    { icon: "🕹️", title: "Interactive & gamified", text: "3D, animations, and playful touches that make people stop and screenshot." },
    { icon: "📱", title: "Flawless on every device", text: "Mobile-first, fast, and Lighthouse-friendly out of the box." },
    { icon: "🌐", title: "Your domain, fully set up", text: "Custom domain + HTTPS + contact form wired to your inbox. Done for you." },
    { icon: "✍️", title: "Words that sell you", text: "Professional copywriting that turns your experience into offers." },
    { icon: "⚡", title: "Shipped fast", text: "From a few days to two weeks — you stay in the loop the whole way." },
  ],
  // Founding team
  team: [
    {
      name: "Arifuzzaman Antor",
      role: "Product Builder",
      bio: "Building and evolving the platform through innovation, technology, and continuous improvement.",
      cred: "TPM · Sr. Software Engineer · Founder, AZAI Labs",
      img: "antor",
      linkedin: "https://www.linkedin.com/in/azantor/",
      whatsapp: "8801580497264",
    },
    {
      name: "Sharif Md. Abid",
      role: "Growth & Partnerships",
      bio: "Driving business growth through sales, strategic partnerships, client acquisition, and long-term relationships.",
      cred: "HealthTech Sales & BD Expert · 21+ years across emerging markets",
      img: "sharif",
      linkedin: "https://www.linkedin.com/in/sharifabid/",
      whatsapp: "8801771237891",
    },
  ],
  packages: [
    {
      name: "Spark",
      forWho: "Students & engineers",
      usd: "$149–249",
      bdt: "৳12,000–18,000",
      turnaround: "3–4 days",
      points: [
        "Clean, animated, fully responsive portfolio",
        "Your content, photo & brand colors",
        "Custom domain + HTTPS setup",
        "1 revision round",
      ],
      outcome: "A site that finally does you justice.",
      highlight: false,
    },
    {
      name: "Signature",
      forWho: "Seniors, leads & PMs",
      usd: "$399–699",
      bdt: "৳30,000–50,000",
      turnaround: "~1 week",
      points: [
        "Everything in Spark, leveled up",
        "Gamified sections + subtle 3D touches",
        "Professional copywriting & SEO",
        "Contact form to your inbox · 2 revisions",
        "Animated stats, timeline & project showcase",
      ],
      outcome: "The portfolio that gets you the callback.",
      highlight: true,
    },
    {
      name: "Executive",
      forWho: "Directors, CEOs, founders & C-suite",
      usd: "$1,200+",
      bdt: "৳1,00,000+",
      turnaround: "~2 weeks",
      points: [
        "Fully bespoke design + brand-strategy call",
        "Premium 3D interactive experience",
        "Pro copy, media embeds, the works",
        "Press / speaking / ventures sections",
        "30-day priority support after launch",
      ],
      outcome: "A personal brand that opens doors at the top.",
      highlight: false,
    },
  ],
  carePlan: {
    name: "Care Plan",
    usd: "$40–120/mo",
    bdt: "৳3,000–8,000/mo",
    note: "Optional add-on — hosting, updates & tweaks whenever you need them.",
  },
  steps: [
    "Pick a package & send your details",
    "Quick discovery — I gather your story",
    "I design & build your site",
    "Review rounds until it's perfect",
    "Deploy to your domain + handoff",
  ],
  // What it actually gets you — the "why buy" outcomes.
  outcomes: [
    { icon: "📈", title: "More callbacks", text: "Recruiters and clients judge you in seconds. Give them a reason to say yes." },
    { icon: "🤝", title: "Instant trust", text: "Show up looking like the obvious choice — before the first call even starts." },
    { icon: "💼", title: "Premium clients", text: "A premium presence attracts premium budgets. You stop competing on price." },
    { icon: "🧲", title: "You get remembered", text: "Not one of 20 open tabs — the one person they screenshot and share." },
    { icon: "⏱", title: "Zero hassle", text: "Design, copy, domain, hosting — all done for you. You just show up." },
    { icon: "🌍", title: "Open to the world", text: "One link that works for any recruiter, client, or investor, anywhere." },
  ],
  // The "credibility climb" — animated bar graph (value 0–100).
  ladder: [
    { label: "CV / LinkedIn only", value: 32, note: "Easy to forget" },
    { label: "DIY template site", value: 54, note: "Looks like everyone else" },
    { label: "Generic freelancer", value: 72, note: "Works — but forgettable" },
    { label: "Personal Brand Studio", value: 100, note: "Unforgettable. You get remembered.", highlight: true },
  ],
  // ShipFolio vs the alternatives.
  compare: {
    cols: ["DIY template", "Hire an agency", "Personal Brand Studio"],
    rows: [
      { feature: "Bespoke, one-of-a-kind design", template: "Generic", agency: "Yes ($$$$)", shipfolio: "Yes" },
      { feature: "Interactive / 3D experience", template: "—", agency: "Maybe", shipfolio: "Yes" },
      { feature: "Professional copywriting", template: "—", agency: "Add-on", shipfolio: "Included" },
      { feature: "Custom domain + HTTPS, done for you", template: "DIY", agency: "Yes", shipfolio: "Yes" },
      { feature: "Flawless on mobile", template: "Varies", agency: "Yes", shipfolio: "Yes" },
      { feature: "Turnaround", template: "Your time", agency: "1–2 months", shipfolio: "3–14 days" },
      { feature: "Starting price", template: "$0–20 + hours", agency: "$3k–10k+", shipfolio: "From $149 / ৳12k" },
    ],
  },
  faq: [
    { q: "Do I own the site?", a: "100%. It's deployed to your own domain and it's yours to keep — forever." },
    { q: "How long does it take?", a: "From 3–4 days (Spark) to about two weeks (Executive). You're in the loop the whole way." },
    { q: "What do you need from me?", a: "Your story, a few links, a photo, and your brand colors. We handle everything else." },
    { q: "Can I update it later?", a: "Yes — edit it yourself, or grab a Care Plan and we keep it fresh for you." },
    { q: "I don't have a domain yet.", a: "No problem — we'll help you get one and set it up. Domain + HTTPS is part of the service." },
    { q: "How does payment work?", a: "Flexible — we sort it on our first chat. bKash/bank locally; Wise, Stripe, or Upwork internationally." },
  ],
};

export const premium = {
  tagline: "For the few who want me in their corner.",
  intro:
    "A limited number of premium slots each quarter — high-touch, senior, and outcome-obsessed. When good isn't enough and you need it shipped right.",
  tiers: [
    {
      icon: "👑",
      name: "1:1 Executive Mentorship",
      price: "Private cohort",
      points: [
        "Weekly 1:1s on delivery, QA leadership, or breaking into remote/TPM roles",
        "Direct line — async access between sessions",
        "Personalized roadmap from where you are to where you want to be",
      ],
      highlight: true,
    },
    {
      icon: "🚀",
      name: "Fractional Delivery Partner",
      price: "Retainer",
      points: [
        "I embed with your team as TPM / delivery lead",
        "Own the cadence, clear the blockers, report to your board",
        "Senior judgment on hiring, architecture calls, and release strategy",
      ],
      highlight: false,
    },
    {
      icon: "🤖",
      name: "AI Build Sprint — AZAI Labs",
      price: "Project",
      points: [
        "From idea to a working AI agent / product in weeks, not quarters",
        "Built, tested, and shipped with monitoring in place",
        "Augmented AI talent on tap after launch",
      ],
      highlight: false,
    },
  ],
  perks: [
    "Priority response — within hours, not days",
    "Direct access to me, not a queue",
    "Senior-only — no handoffs to juniors",
    "Outcome-based, with clear milestones",
  ],
};

// ----------------------------------------------------------------------------
// TREE NAV — labels float on the interactive 3D tree; click scrolls to section.
// ----------------------------------------------------------------------------
export const treeNodes = [
  { label: "Who Am I", href: "#about", teaser: "The origin story + RPG character stats" },
  { label: "Skills", href: "#skills", teaser: "24-node skill tree across 3 branches" },
  { label: "Experience", href: "#missions", teaser: "11 roles — Mastercard, Kintsugi, Platformz…" },
  { label: "Projects", href: "#projects", teaser: "Sothik AI, OpenCRVS, 5G, MyGP & more" },
  { label: "Education", href: "#community", teaser: "SUST + the academic ladder & community" },
  { label: "Ventures", href: "#ventures", teaser: "AZAI Labs, AZADEMY, Listen2AZA, Foundation" },
  { label: "Premium", href: "#premium", teaser: "VIP 1:1 mentorship & fractional slots" },
  { label: "Follow Me", href: "#media", teaser: "AZADEMY interviews & audiobooks" },
  { label: "Contact", href: "#contact", teaser: "Start a quest — straight to my inbox" },
];

// ----------------------------------------------------------------------------
// VENTURES — "founded worlds"
// ----------------------------------------------------------------------------
export const ventures = [
  {
    name: "AZAI Labs",
    tagline: "Build with agents, not headcount.",
    description:
      "An AI lab that ships real work — building AI products, delivering AI services, and placing augmented AI talent so teams move faster. Founded 2025 · San Francisco HQ, remote-first from Dhaka. Founder & CEO.",
    theme: "violet" as const,
    link: "https://azailabs.dev",
  },
  {
    name: "AZADEMY",
    tagline: "Learning meets earning.",
    description:
      "An academy that teaches CS, AI & technology, freelancing, and how to land remote jobs — plus real interviews with experts on how to give and take technical interviews. Founder.",
    theme: "amber" as const,
    link: "https://azademy.org",
  },
  {
    name: "AZA Execution Podcast",
    tagline: "Ideas are cheap. Execution is everything.",
    description:
      "My podcast — long-form conversations with operators, founders, builders, scientists, and artists on how world-class work actually gets done. Weekly, video & audio, Bangla & English. Episodes coming soon. Host & founder.",
    theme: "cyan" as const,
    link: "https://azapodcast.com",
  },
  {
    name: "Listen2AZA",
    tagline: "Stories you can press play on.",
    description:
      "An audiobook channel on YouTube — narrated books and stories for people who'd rather listen than scroll. Founder.",
    theme: "magenta" as const,
    link: "https://www.youtube.com/@Listen2AZA",
  },
  {
    name: "Silent Sacrifice Abdus Sattar Foundation",
    tagline: "Every father's silent sacrifice. Every child's potential.",
    description:
      "A foundation honoring my father, Sheikh Abdus Sattar — scholarships, free mentorship and internships, Quran education, support for struggling families and cancer patients, feeding the hungry, and tree plantation. 60+ Quran students in Ramadan 2025, 60 students mentored in year one.",
    theme: "emerald" as const,
    link: "https://ssasf.vercel.app",
  },
];

// AZADEMY social presence — shown under the Content & Media section
export const azademySocials = [
  { label: "YouTube", url: "https://www.youtube.com/@azademy" },
  { label: "Facebook", url: "https://www.facebook.com/azademyofficial/" },
  { label: "LinkedIn", url: "https://linkedin.com/in/azademy" },
  { label: "Instagram", url: "https://instagram.com/azademy" },
  { label: "X", url: "https://twitter.com/azademy" },
  { label: "Medium", url: "https://medium.com/azademy" },
  { label: "TikTok", url: "https://tiktok.com/@azademy" },
  { label: "azademy.org", url: "https://azademy.org" },
];

// ----------------------------------------------------------------------------
// CREDENTIALS — education & certifications, shown in the About card
// ----------------------------------------------------------------------------
export const credentials = [
  {
    icon: "🎓",
    text: "B.Sc. Engineering, Computer Science & Engineering — Shahjalal University of Science and Technology",
    link: "",
  },
  {
    icon: "🤖",
    text: "Machine Learning Specialization — Coursera (2020)",
    link: "https://www.coursera.org/account/accomplishments/specialization/FTSXWBVBZDVQ",
  },
  {
    icon: "🐍",
    text: "Programming for Everybody (Python) — Coursera (2020)",
    link: "https://www.coursera.org/account/accomplishments/certificate/L83YBWRPB6GN",
  },
];

// ----------------------------------------------------------------------------
// EDUCATION & COMMUNITY — academic life and leadership beyond work.
// ----------------------------------------------------------------------------
export const education = [
  {
    icon: "🎓",
    school: "Shahjalal University of Science and Technology",
    detail: "B.Sc. Engineering — Computer Science & Engineering",
    period: "2017 — 2020",
  },
  {
    icon: "🏫",
    school: "Shahid Syed Nazrul Islam College, Mymensingh",
    detail: "Higher Secondary Certificate (HSC), Science · GPA 5.00",
    period: "2016",
  },
  {
    icon: "🏫",
    school: "B.M. High School, Netrokona",
    detail: "Secondary School Certificate (SSC) · GPA 5.00",
    period: "2014",
  },
  {
    icon: "🏅",
    school: "B.M. High School, Netrokona",
    detail: "Junior School Certificate (JSC) · GPA 5.00 · Govt. Talent Pool Scholarship",
    period: "2012",
  },
  {
    icon: "🏅",
    school: "Kaitail Government Primary School, Netrokona",
    detail: "Primary School Certificate (PSC) · Govt. Talent Pool Scholarship",
    period: "2009",
  },
];

export const volunteering = [
  {
    icon: "🔭",
    role: "Founder",
    org: "Telescope Team",
    period: "2017 — Present",
    note: "Empowering rural communities through education — teacher training, digital literacy, infrastructure, and scholarships at the grassroots level.",
  },
  {
    icon: "🎤",
    role: "Assistant IT Secretary",
    org: "Shahjalal University Speakers' Club (SUSC)",
    period: "University",
    note: "Helped run the university's flagship public-speaking and debate community.",
  },
  {
    icon: "🔬",
    role: "Academic Coordinator",
    org: "SUST Science Arena",
    period: "University",
    note: "Coordinated academic programs and science outreach on campus.",
  },
];

// ----------------------------------------------------------------------------
// PROJECTS — notable named builds across roles (from LinkedIn).
// ----------------------------------------------------------------------------
export const projects = [
  {
    name: "Sothik — Bangla Spell Checker",
    org: "REVE Systems",
    period: "2022 — Present",
    blurb: "AI-powered Bengali grammar & spell checker — detects non-word and real-word errors and auto-suggests corrections. QA Lead.",
    tags: ["AI/NLP", "Test Design", "QA Lead"],
    link: "",
  },
  {
    name: "Customs Bond Management System (CBMS)",
    org: "REVE Systems",
    period: "2022 — Present",
    blurb: "Enterprise system for processing and monitoring customs-duty bond transactions. QA contributor.",
    tags: ["Business Analysis", "QA Engineering"],
    link: "",
  },
  {
    name: "OpenCRVS",
    org: "Dynamic Solution Innovators",
    period: "2021 — 2022",
    blurb: "Open-source civil registration — so every person on the planet is recognised and protected from birth.",
    tags: ["Cypress", "Test Design", "Civic Tech"],
    link: "https://www.opencrvs.org",
  },
  {
    name: "Movandi",
    org: "Dynamic Solution Innovators",
    period: "2022",
    blurb: "A leader in 5G mmWave technology, founded by former Broadcom pioneers. QA & test planning.",
    tags: ["5G", "Test Planning"],
    link: "",
  },
  {
    name: "Altech",
    org: "Dynamic Solution Innovators",
    period: "2022",
    blurb: "Clean, affordable energy for DR Congo — quality and test design across the platform.",
    tags: ["Clean Energy", "Test Design"],
    link: "",
  },
  {
    name: "MyGP — Backend Automation",
    org: "Grameenphone (via Miaki)",
    period: "2024 — 2025",
    blurb: "Built the complete backend automation framework for MyGP, the app of Bangladesh's largest mobile operator.",
    tags: ["Playwright", "API Testing", "Framework Build"],
    link: "",
  },
  {
    name: "FUR4 Omnichannel Platform",
    org: "Platformz",
    period: "2024 — Present",
    blurb: "Enterprise omnichannel pet-brand platform — 5 portals on a Magento core, plus a 60-day 3P EDI program.",
    tags: ["TPM", "Magento", "EDI"],
    link: "https://platformz.us/case-studies",
  },
  {
    name: "SUST Attendance Management System",
    org: "Shahjalal University of Science & Technology",
    period: "2020",
    blurb: "Intuitive attendance tracking for the university — real-time insights for a productive learning environment.",
    tags: ["Web Dev", "QA Engineering"],
    link: "",
  },
];

// ----------------------------------------------------------------------------
// TESTIMONIALS — real client reviews from Upwork (all 5.0★)
// ----------------------------------------------------------------------------
export const testimonials = [
  {
    quote:
      "Arifuz is now our cooperant with whom we have been working for a long time. He is very reliable, proactive, helps us with his critical thinking and always delivers.",
    author: "GameFlix",
    title: "Long-term client · Upwork ★5.0",
  },
  {
    quote:
      "Our experience working with Arifuz is excellent. He is responsible and professional, gives clear feedback, and is always on time. We will continue our cooperation.",
    author: "Grameenphone project",
    title: "SIM testing client · Upwork ★5.0",
  },
  {
    quote:
      "Arifuz did a great job evaluating our TestComplete implementation and gave a very thorough and detailed summary. I hope to work with Arifuz again.",
    author: "QA tooling assessment",
    title: "Consulting client · Upwork ★5.0",
  },
  {
    quote:
      "Arifuz did a wonderful job. Everything went smoothly, communication was fluent, delivered on time and as expected. I highly recommend working with Arifuz.",
    author: "Website QA",
    title: "Testing client · Upwork ★5.0",
  },
  {
    quote: "Very professional and knowledgeable. He answered all my questions.",
    author: "QA consultation",
    title: "1:1 consulting client · Upwork ★5.0",
  },
];

// Freelance track record — shown as "Side Quests" in the Mission Log
export const freelance = {
  url: "https://www.upwork.com/freelancers/~01b1ba72ba57683f43",
  completedJobs: 23,
  inProgress: 2,
  rating: 5.0,
  badge: "Top Rated",
  endorsements: [
    "Reliable",
    "Professional",
    "Committed to Quality",
    "Detail Oriented",
    "Solution Oriented",
    "Clear Communicator",
    "Accountable for Outcomes",
  ],
};

// THE AZA EXECUTION PODCAST — my own show (azapodcast.com / @azapod).
export const podcast = {
  name: "AZA Execution Podcast",
  tagline: "Ideas are cheap. Execution is everything.",
  description:
    "Long-form conversations with operators, founders, builders, scientists, and artists on how world-class work actually gets done — across business, startups, tech, science, performance, and culture. Weekly, in video & audio, Bangla & English.",
  comingSoon: true,
  status: "Episodes coming soon — first conversations in production",
  site: "https://azapodcast.com",
  channel: "https://www.youtube.com/@azapod",
  facebook: "https://www.facebook.com/azapod",
};

// AZADEMY interview series (separate from the podcast).
export const mediaPlaylist = "https://www.youtube.com/watch?v=R3YDGEZrJoU&list=PLPKx9CSS1LOeUDRizH2Me0q01IkgKCwMR";

export const media = [
  {
    id: "R3YDGEZrJoU",
    title: "From Pakistan to USA — Cracking a Sr. Frontend Interview",
    description: "How she became Upwork Top Rated Plus and landed a senior frontend role — a real interview, start to finish.",
  },
  {
    id: "R25fcu7VUzA",
    title: "How to Crack a Developer Interview",
    description: "A real interview run with a company owner and lead engineer — exactly what gets a candidate hired.",
  },
  {
    id: "vhY6eyOzqdY",
    title: "The $300K Pitch — CBO Pitches Engineers to a TPM",
    description: "How senior engineers get pitched to a Technical Project Manager. The hiring conversation from my side of the table.",
  },
  {
    id: "LdV23LhHY7Q",
    title: "Interviewing a Senior React Developer (7+ Years)",
    description: "The questions most senior devs would fail — and what a strong answer actually sounds like.",
  },
  {
    id: "6BuRm6zIY1E",
    title: "A Top Rated Plus Freelancer Cracked My Interview",
    description: "$300K+ earnings, 100% job success — watch how a top freelancer handles a real technical interview.",
  },
  {
    id: "_WkcF2RXxSg",
    title: "Behind a $2M Upwork Agency Interview — TPM View",
    description: "What hiring looks like from the Technical PM seat at a multi-million-dollar agency.",
  },
];

// LISTEN2AZA — audiobook channel (Bengali narrations of books worth hearing).
export const audiobooks = {
  channel: "https://www.youtube.com/@Listen2AZA",
  videos: [
    {
      id: "OO3LgrHlCzE",
      title: "100 Great Marketing Ideas — Intro",
      description: "Jim Blythe's marketing classic, narrated in Bangla. The series opener.",
    },
    {
      id: "UF-vnkbHoQo",
      title: "100 Great Marketing Ideas — #01",
      description: "Idea 01: give the product away free — and why it works.",
    },
    {
      id: "YOweMuiiVIk",
      title: "100 Great Marketing Ideas — #02",
      description: "Idea 02: make marketing fun. A Bangla audiobook chapter.",
    },
    {
      id: "UJ_DkxCOqF4",
      title: "The Productive Muslim — Before Sleep",
      description: "Faris Mohammad's productivity book in Bangla — habits to remember before sleep.",
    },
    {
      id: "Vmlt-chYycE",
      title: "The Productive Muslim — Patience & Productivity",
      description: "Building productivity through patience — a chapter narration.",
    },
  ],
};
