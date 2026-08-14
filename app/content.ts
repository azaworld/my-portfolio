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
    "Founder & CEO @ AZAI Labs · Co-Founder & CTO @ Upward · Technical Project Manager @ Platformz · QA & Delivery Leader · Podcaster",
  pitch:
    "The person who turns chaos into shipped products. I'm the TPM at Platformz running three client platforms, and I build companies — AZAI Labs ships AI products and augmented AI talent, Upward (upwardbd.com) is the AI-powered growth partner I co-founded as CTO, and AZADEMY teaches engineers to land remote jobs and ace interviews.",
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
  { value: 6, suffix: "+", label: "Actual years in tech — since 2020" },
  { value: 16, suffix: "+", label: "Combined years — 12 parallel roles, durations added up" },
  { value: 30, suffix: "+", label: "People led — eng, DevOps, design, marketing" },
  { value: 50, suffix: "+", label: "Projects & products shipped" },
];

// Full cumulative tally — rendered as the stat grid in Career Analytics.
export const careerTotals = [
  { value: 6, suffix: "+", label: "Actual calendar years — 2020 to today" },
  { value: 16, suffix: "+", label: "Combined years — every role's duration added up" },
  { value: 12, suffix: "", label: "Companies & roles" },
  { value: 5, suffix: "", label: "Most roles held at once (2024–25)" },
  { value: 30, suffix: "+", label: "People led across teams" },
  { value: 50, suffix: "+", label: "Projects & products shipped" },
  { value: 23, suffix: "", label: "Freelance jobs · all ★5.0" },
  { value: 5, suffix: "", label: "Ventures founded" },
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
   AZADEMY and Listen2AZA, TPM at Platformz — and I run the
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
    note: "OpenCRVS (Cypress automation), IPEMIS (manual QA), Movandi 5G, Altech.",
    details: [
      "Cypress automation QA for OpenCRVS — UN-backed open-source civil registration system used by governments worldwide",
      "Manual QA Engineer for IPEMIS (login.ipemis.dpe.gov.bd) — Bangladesh government's Integrated Primary Education Management Information System (Dept. of Primary Education)",
      "QA across Movandi (5G mmWave technology) and Altech (clean energy, DR Congo)",
      "TestRail test management, CI/CD integration, cross-browser and regression discipline",
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
    title: "Software QA Engineer & Lead",
    where: "REVE Systems",
    note: "Sothik (spell.bangla.gov.bd) · CBMS (cbc.gov.bd) · +60% perf · defects −30%.",
    details: [
      "QA Lead for Sothik (spell.bangla.gov.bd) — Bangladesh government's official AI-powered Bangla spell & grammar checker (Bangla Academy)",
      "QA Engineer for CBMS (cbc.gov.bd) — Bangladesh government's Customs Bond Commissionerate Management System for customs-duty bond transactions",
      "Full QA lifecycle: functional, regression, API, security (OWASP ZAP, Burp Suite, Kali Linux), performance (JMeter, LoadRunner), and mobile (Xamarin Test Cloud, AWS Device Farm)",
      "Results: Sothik performance up 60%, critical defects down 30% via regression strategy",
    ],
  },
  {
    lv: 6,
    year: "Sept 2023 — Sept 2025",
    icon: "🚑",
    title: "QA Engineer I",
    where: "Kinetik — Long Island City, New York (Remote)",
    note: "NEMT healthcare platform · iOS & Android app · manual → Appium → load.",
    details: [
      "QA lead for the Kinetik Health App (iOS & Android) — NEMT member app for requesting, managing & tracking medical transport rides with real-time driver location; 26,840+ completed rides in pilot",
      "Full QA lifecycle: manual testing, Playwright + TypeScript API automation (AWS Lambda, SQS, S3), Appium mobile automation (iOS & Android), and load testing",
      "Led QA from manual through automation to production app store publish on Google Play and Apple App Store",
      "Release gates for critical NEMT healthcare flows — trip scheduler, trip assistant, RCM, and member app",
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
    year: "Sept 2024 — Present",
    icon: "🎯",
    title: "Technical Project Manager",
    where: "Platformz",
    note: "3 client platforms · 30+ person team · CEO/CTO/CFO/CMO & board reporting.",
    details: [
      "FUR4 (fur4.com) — DTC storefront, dealer portal, referral portal, GOD ops dashboard, AI ops tower; 60-day 3P EDI program across Amazon, Walmart, Target, Chewy, eBay, Macy's",
      "Rockerz (rockerz.com) — 4-zone interactive product configurator, DTC, dealer portal, dealer-locator, referral portal on Magento + React + AWS",
      "DMV Raw Feeders (dmvrawfeeders.com) — zone-based delivery routing, subscription management, referral portal",
      "Full QA ownership: automation (Playwright/TS), manual, security (OWASP ZAP), load & performance (JMeter/k6) across all portals",
      "Led 30+ person cross-functional team: engineering, DevOps, FE, BE, design, marketing, HubSpot",
      "CEO, CTO, CFO, CMO & board of directors reporting — roadmap, risk register, delivery status, and P&L alignment",
    ],
  },
  {
    lv: 10,
    year: "Sept 2025 — Aug 2026",
    icon: "🧠",
    title: "Sr. Software QA Engineer · SDET",
    where: "Kintsugi — San Francisco",
    note: "Quality engineering & SDET for AI-powered tax compliance.",
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
  {
    lv: 12,
    year: "2026 — Present",
    icon: "🚀",
    title: "Co-Founder & CTO",
    where: "Upward — upwardbd.com",
    note: "AI-powered business-growth partner · 4 divisions · 8 AI services.",
    details: [
      "Co-founded Upward — one integrated growth partner replacing ten scattered vendors",
      "Own the technology: platform, AI services, and engineering across all divisions",
      "4 divisions, 8 AI-powered services — media, marketing, technology & healthcare",
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
  // ─────────────────────────── LEADERSHIP (12) ───────────────────────────
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
    name: "Agile · Scrum · Kanban",
    branch: "Leadership",
    level: 5,
    example:
      "Flow-based delivery: WIP limits, cycle-time tracking, and blocker triage that kept releases predictable without sprint theater — one daily cadence across 30+ people.",
  },
  {
    id: "cross-team",
    name: "Cross-team Coordination",
    branch: "Leadership",
    level: 5,
    example:
      "Led 30+ person team across FE, BE, DevOps, design, QA, marketing & HubSpot at Platformz — retail, EDI, integration, fulfillment, and engineering on one delivery cadence.",
  },
  {
    id: "stakeholder",
    name: "C-Suite & Board Reporting",
    branch: "Leadership",
    level: 5,
    example:
      "CEO, CTO, CFO, CMO & Board of Directors reporting at Platformz — roadmap, risk register, delivery status, and P&L alignment. Direct delivery partnership with the CEO.",
  },
  {
    id: "qa-team-leadership",
    name: "QA Team Leadership",
    branch: "Leadership",
    level: 5,
    example:
      "QA lead at Kinetik (Health App to both app stores), QA Lead for Sothik at REVE, and QA ownership across all Platformz portals — built the discipline, led the people, owned the quality bar.",
  },
  {
    id: "client-vendor",
    name: "Client & Vendor Management",
    branch: "Leadership",
    level: 5,
    example:
      "Managed EDI vendors and retailer requirements across Amazon, Walmart, Target & Chewy; client-facing delivery for FUR4, Rockerz & DMV; 40+ clients served across roles and freelance.",
  },
  {
    id: "remote-teams",
    name: "Remote & Distributed Teams",
    branch: "Leadership",
    level: 5,
    example:
      "6 years leading and delivering across timezones — Dhaka ↔ New York ↔ San Francisco ↔ London. Remote-first at Kinetik, Mastercard, Kintsugi, Platformz, and my own companies.",
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
    example:
      "Mentored juniors at Mastercard; built and grew teams up to the 30+ person org at Platformz; run technical screens and live interviews for client roles.",
  },
  {
    id: "roadmapping",
    name: "Roadmapping & Prioritization",
    branch: "Leadership",
    level: 4,
    example: "Turn customer signal and constraints into a sequenced roadmap — what to build, kill, and ship next.",
  },
  {
    id: "incident-mgmt",
    name: "Incident & Crisis Management",
    branch: "Leadership",
    level: 4,
    example:
      "Authored incident-response & disaster-recovery playbooks at Mastercard; on-call for critical payment systems; production-health ownership (GOD portal) at Platformz.",
  },
  {
    id: "process-docs",
    name: "Process & Documentation",
    branch: "Leadership",
    level: 4,
    example:
      "Detailed test plans (DSI), full process documentation for government systems (CBMS), delivery runbooks and QA architecture docs adopted org-wide at Kinetik.",
  },

  // ─────────────────────────── DELIVERY (12) ───────────────────────────
  {
    id: "qa-release",
    name: "QA & Release Management",
    branch: "Delivery",
    level: 5,
    example:
      "Built QA disciplines from scratch across Kinetik, MyGP, and Platformz — automation frameworks, release gates, and zero-surprise launch days including the Kinetik Health App to App Store & Google Play.",
  },
  {
    id: "test-strategy",
    name: "Test Strategy & Planning",
    branch: "Delivery",
    level: 5,
    example:
      "Risk-based test plans, coverage strategy, release gates — manual, smoke, regression, UAT. Delivered test strategies for 2 Bangladesh government systems (Sothik, CBMS), UN-backed OpenCRVS, and enterprise platforms.",
  },
  {
    id: "playwright",
    name: "Playwright Automation",
    branch: "Delivery",
    level: 5,
    example:
      "Playwright + TypeScript across 5+ production projects — EcomTestPilot (Docker + AWS, every 15 min), FirstTrip (full POM framework), FUR4 API suite, Kinetik healthcare flows, Adobe Project Neo, and Kintsugi AI tax platform. github.com/azaworld.",
  },
  {
    id: "cypress",
    name: "Cypress Automation",
    branch: "Delivery",
    level: 5,
    example:
      "Cypress across 7+ repos — OpenCRVS civil registration (UN-backed), Target app, Cypress Cloud parallel runs, CI/CD recording. github.com/azaworld/CypressCloudProject, azaworld/OpenCRVS-Cypress, azaworld/Target_App_Cypress.",
  },
  {
    id: "mobile-qa",
    name: "Mobile QA & Appium",
    branch: "Delivery",
    level: 5,
    example:
      "Appium iOS & Android automation at Kinetik — led QA from manual through Appium automation to production App Store & Google Play publish (Kinetik Health App). Also Xamarin Test Cloud and AWS Device Farm.",
  },
  {
    id: "api-testing",
    name: "API & Integration Testing",
    branch: "Delivery",
    level: 5,
    example:
      "Postman, REST Assured, GraphQL load testing (k6-graphql-loadtesting repo) — plus Magento ↔ QuickBooks/ShipBob/Mailchimp data-sync and AWS Lambda/SQS/S3 API validation at Kinetik.",
  },
  {
    id: "performance",
    name: "Performance & Load Testing",
    branch: "Delivery",
    level: 5,
    example:
      "k6 (Fur4-Load-Testing-K6 + k6-graphql-loadtesting repos on GitHub), JMeter, LoadRunner, Locust — smoke, load, stress, spike & soak profiles with InfluxDB + Grafana dashboards and HTML stakeholder reports.",
  },
  {
    id: "containers",
    name: "Docker · GitHub Actions · CI/CD",
    branch: "Delivery",
    level: 5,
    example:
      "Docker + docker-compose for containerized Playwright test execution (playwright-e2e-docker-aws repo); GitHub Actions CI/CD across 10+ repos; Jenkins, GitLab CI, Bitbucket, AWS CodePipeline. PM2 for scheduled AWS runs.",
  },
  {
    id: "languages",
    name: "TypeScript · JS · Python · Java · C++",
    branch: "Delivery",
    level: 5,
    example:
      "TypeScript daily (Playwright, Next.js); JavaScript (k6, Cypress, Node/Express); Python (ML, automation, scripting); Java (automation); C++ (competitive programming — Codeforces, LeetCode repos). PHP (SUST Attendance System).",
  },
  {
    id: "security-testing",
    name: "Security Testing",
    branch: "Delivery",
    level: 4,
    example:
      "OWASP ZAP, Burp Suite, and Kali Linux — baked into release gates at Platformz (all portals), REVE Systems (Sothik govt. spell checker, CBMS), and Kinetik healthcare platform.",
  },
  {
    id: "reliability",
    name: "Reliability & Chaos Engineering",
    branch: "Delivery",
    level: 4,
    example:
      "SRE at Mastercard — chaos engineering, Prometheus + Grafana observability, Terraform AWS, incident-response playbooks. Also InfluxDB + Grafana real-time dashboards for k6 load tests at Platformz.",
  },
  {
    id: "bdd-accessibility",
    name: "BDD · Accessibility · Visual QA",
    branch: "Delivery",
    level: 4,
    example:
      "Cucumber/Gherkin behavior-driven specs that product, QA, and engineering all read the same way; WCAG-aligned accessibility checks; visual-regression testing with Applitools.",
  },

  // ─────────────────────── ENTREPRENEURSHIP (12) ───────────────────────
  {
    id: "entrepreneurship",
    name: "Company Building",
    branch: "Entrepreneurship",
    level: 5,
    example:
      "Founder & CEO of AZAI Labs — an AI agents lab shipping practical automation for quality, operations, and decision-making (build with agents, not headcount) — and founder of AZADEMY, Listen2AZA, and the SSAS Foundation.",
  },
  {
    id: "ai-agents",
    name: "AI Agents & Automation",
    branch: "Entrepreneurship",
    level: 5,
    example:
      "AZAI Labs ships AI agents doing real client work — agentic workflows wired into existing stacks, from proof-of-concept to production with monitoring. Build with agents, not headcount.",
  },
  {
    id: "ml-ai",
    name: "Machine Learning & AI Dev",
    branch: "Entrepreneurship",
    level: 4,
    example:
      "Cancer Prediction System using ML (Python/Jupyter — Breast Cancer attribute analysis & prediction); GenAI API experiments (LLM endpoints, Node + React); DailyPlanAI (AI-powered daily planner). Coursera ML Specialization.",
  },
  {
    id: "web-dev",
    name: "Next.js · React · Three.js",
    branch: "Entrepreneurship",
    level: 4,
    example:
      "Built azantor.xyz (Next.js 16, Three.js, GSAP, Tailwind CSS v4 — this very site), timothymunroroberts.com, sharif-abid.xyz, and builtbeforecloud — full-stack TypeScript apps deployed on GitHub Pages & Vercel.",
  },
  {
    id: "brand-studio",
    name: "Personal Brand Studio",
    branch: "Entrepreneurship",
    level: 5,
    example:
      "Founded Personal Brand Studio — bespoke, animated personal-brand websites for doctors, founders, and executives. Three live client sites shipped: azantor.xyz, sharif-abid.xyz, timothymunroroberts.com.",
  },
  {
    id: "freelancing",
    name: "Freelancing & Client Success",
    branch: "Entrepreneurship",
    level: 5,
    example:
      "Upwork Top Rated — 23 completed jobs, every single one rated ★5.0. Endorsed for reliability, professionalism, and accountability. QA consulting, automation assessments, and testing for clients worldwide.",
  },
  {
    id: "speaking",
    name: "Speaking & Teaching",
    branch: "Entrepreneurship",
    level: 5,
    example: "Courses, workshops, technical talks, podcast hosting, and event MC — making complex things land.",
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
    id: "podcasting",
    name: "Podcasting & Media",
    branch: "Entrepreneurship",
    level: 4,
    example:
      "Host & founder of the AZA Execution Podcast (azapodcast.com) — long-form conversations on how world-class work gets done. Plus two YouTube channels: AZADEMY (interviews) and Listen2AZA (audiobooks).",
  },
  {
    id: "product",
    name: "Product Strategy",
    branch: "Entrepreneurship",
    level: 4,
    example:
      "Shaped roadmaps from customer signal: what to build, what to kill, and what to ship next quarter — across AZAI Labs products and client platforms.",
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
    example:
      "Run the SSAS Foundation — scholarships, mentorship, and 60+ Quran students in year one. Founder of Telescope Team, empowering rural communities through education since 2017.",
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
    id: "upward",
    codename: "Operation Upward",
    role: "Co-Founder & CTO",
    org: "Upward — upwardbd.com · Dhaka, Bangladesh",
    short: "Upward",
    period: "2026 — Present",
    start: 2026.0,
    end: null,
    status: "ACTIVE",
    brief:
      "Co-founded Upward — an AI-powered business-growth partner: four divisions and eight AI-powered services (media, marketing, technology, healthcare) under one roof. As CTO, I own the technology end to end.",
    objectives: [
      "Own the technology: platform architecture, AI services, and engineering across all four divisions",
      "Build and ship the 8 AI-powered services — media, marketing, technology & healthcare",
      "Position Upward as one integrated growth partner replacing ten scattered vendors",
      "Co-lead the company with Co-CEO Sharif Md. Abid",
    ],
    bossFight:
      "Building a multi-division services company and its technology platform at the same time — while running delivery for three other client platforms. Ruthless prioritization, daily cadence, agents doing the heavy lifting.",
    loot: [
      "Upward live at upwardbd.com — 4 divisions, 8 AI services",
      "One integrated growth partner replacing ten vendors",
      "Technology org designed to build with agents, not headcount",
    ],
    tech: ["AI Agents", "Next.js", "TypeScript", "LLMs", "AWS", "HubSpot"],
  },
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
      "Running delivery for three enterprise client platforms alongside the CEO — leading a 30+ person cross-functional team and owning full QA, engineering process, and C-suite reporting.",
    objectives: [
      "FUR4 (fur4.com) — 5-portal enterprise omnichannel ecosystem: DTC storefront, B2B dealer portal (dealer.fur4.com), influencer referral portal (refer.fur4.com), GOD ops-health dashboard, AI operations control tower — on a Magento + React + GraphQL core",
      "FUR4 3P hybrid EDI program across Amazon, Walmart, Target, Chewy, eBay & Macy's — full EDI lifecycle compliance, end-to-end automation, inventory rules & SLA management",
      "Rockerz (rockerz.com) — 4-zone interactive product color configurator, DTC, dealer portal, dealer-locator, and referral portals on Magento + React + AWS",
      "DMV Raw Feeders (dmvrawfeeders.com) — zone-based delivery routing, subscription management, referral portal",
      "Full QA ownership across all portals: automation (Playwright + TypeScript), manual testing, security (OWASP ZAP, Burp Suite), load & performance testing (JMeter, k6)",
      "Led 30+ person cross-functional team: FE engineers, BE engineers, DevOps, design, QA, marketing, and HubSpot",
      "CEO, CTO, CFO, CMO & Board of Directors reporting — roadmap, risk register, delivery status, compliance, and P&L alignment",
      "Daily delivery cadence across retail, EDI, integration, fulfillment, and engineering — single point of accountability",
    ],
    bossFight:
      "A 3P hybrid EDI rollout — retailer requirements, EDI document lifecycles, inventory rules, SLAs, and siloed vendors across Amazon, Walmart, Target, and Chewy. The kind of program that typically takes 12+ months. We shipped it in ~60 days.",
    loot: [
      "12+ month EDI program delivered in ~60 days",
      "FUR4 live on Chewy, Amazon, Walmart, eBay, Macy's & more",
      "3 enterprise client platforms in stable, monitored production",
      "Full QA coverage: automation + manual + security + load/performance across all portals",
      "30+ person cross-functional team on one delivery cadence",
      "C-suite & board reporting trusted by CEO, CTO, CFO, CMO",
    ],
    tech: ["Magento", "React", "GraphQL", "AWS", "EDI", "Docker", "Playwright", "JMeter", "k6", "OWASP ZAP", "HubSpot", "Jira", "CI/CD"],
  },
  {
    id: "kintsugi",
    codename: "Operation Precision",
    role: "Sr. Software QA Engineer · SDET",
    org: "Kintsugi — San Francisco, USA (remote)",
    short: "Kintsugi",
    period: "Sept 2025 — Aug 2026",
    start: 2025.7,
    end: 2026.6,
    status: "COMPLETE",
    brief:
      "Sr. Software QA Engineer & SDET on an AI-powered sales-tax platform — owning quality engineering where a wrong number isn't a bug, it's a compliance problem.",
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
    role: "QA Engineer I",
    org: "Kinetik — Long Island City, New York, USA (remote)",
    short: "Kinetik",
    period: "Sept 2023 — Sept 2025",
    start: 2023.7,
    end: 2025.7,
    status: "COMPLETE",
    brief:
      "QA Engineer leading quality for a healthcare NEMT platform — including the Kinetik Health App (iOS & Android) that lets members request, manage & track medical transport rides. Platform has processed 13M+ trips, $1.1B+ in NEMT claims, 1.5M+ members across 44 states.",
    objectives: [
      "QA lead for the Kinetik Health App (kinetik.care) — NEMT member app on iOS (App Store) & Android (Google Play); piloted with 5,000+ members, 26,840+ completed rides",
      "Full manual QA across Trip Scheduler, Trip Assistant, RCM, and the member app — functional, regression, usability, and UAT",
      "Playwright + TypeScript API automation — AWS APIs (Lambda, SQS, S3), Magento ↔ QuickBooks/ShipBob/Mailchimp data-sync validation",
      "Appium mobile automation for iOS & Android — led QA through to production app store publish",
      "Load & performance testing for high-traffic healthcare flows",
      "Security testing, 2FA with Twilio, Selenium browser suites; QASE and Jira test management",
    ],
    bossFight:
      "Shipping weekly into a healthcare environment where a regression isn't a bug — it's a missed patient trip. Built release gates that caught issues without slowing the team down, from manual all the way to mobile automation and production app store launch.",
    loot: [
      "Kinetik Health App published to Apple App Store & Google Play",
      "26,840+ rides completed through the app in pilot phase",
      "Zero-surprise launch cadence across 3 product lines",
      "QA architecture — manual → Playwright API → Appium mobile → load — adopted org-wide",
    ],
    tech: ["Playwright", "TypeScript", "Appium", "Postman", "Selenium", "AWS", "QASE", "Jira", "JMeter", "Magento"],
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
    role: "Software QA Engineer & Lead",
    org: "REVE Systems — Dhaka, Bangladesh (onsite)",
    short: "REVE Systems",
    period: "Dec 2022 — Aug 2023",
    start: 2022.9,
    end: 2023.6,
    status: "COMPLETE",
    brief:
      "QA Engineer & Lead for two Bangladesh government platforms — Sothik (spell.bangla.gov.bd), the official AI-powered Bangla spell & grammar checker (Bangla Academy), and CBMS (cbc.gov.bd), the Customs Bond Commissionerate Management System.",
    objectives: [
      "QA Lead for Sothik (spell.bangla.gov.bd) — Bangladesh government's official Bangla spell & grammar checker; NLP/AI accuracy evaluation, functional, regression, performance & security testing",
      "QA Engineer for CBMS (cbc.gov.bd) — Customs Bond Commissionerate system for processing & monitoring customs-duty bond transactions; full end-to-end QA with detailed documentation",
      "Mobile testing across Android, iOS, Xamarin Test Cloud, and AWS Device Farm",
      "Performance testing with JMeter and LoadRunner",
      "Security testing with OWASP ZAP, Burp Suite, and Kali Linux",
      "Stakeholder engagement, team mentoring, and risk-based testing strategy",
    ],
    bossFight:
      "Testing a government-deployed AI grammar engine where every false positive erodes public trust — built linguistic accuracy evaluation suites, not just uptime checks.",
    loot: [
      "Mobile app testing speed up 40%",
      "Sothik (govt. Bangla spell checker) performance up 60%",
      "Critical defects down 30% via regression strategy",
      "QA delivered for two live Bangladesh government systems",
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
      "QA across four platforms: OpenCRVS (UN-backed civil registration), IPEMIS (Bangladesh government primary education MIS), Movandi (5G mmWave), and Altech (clean energy, DR Congo).",
    objectives: [
      "Cypress automation QA Engineer for OpenCRVS (opencrvs.org) — open-source civil registration so every person on the planet is recognised from birth; CI/CD integration, cross-browser suites",
      "Manual QA Engineer for IPEMIS (login.ipemis.dpe.gov.bd) — Bangladesh government's Integrated Primary Education Management Information System (Dept. of Primary Education)",
      "QA across Movandi (5G mmWave technology, former Broadcom pioneers) — test planning and coverage",
      "QA across Altech — clean, affordable energy platform for DR Congo",
      "TestRail test management, detailed test plans, risk-based testing, and regression discipline",
    ],
    bossFight: "Earning trust as the junior who finds the bugs that matter — on software that registers births, deaths, and the education records of millions of children.",
    loot: [
      "OpenCRVS shipped with confidence — CI-integrated Cypress suite",
      "IPEMIS government QA delivered with full test documentation",
      "Detailed test-plan discipline that became the team standard",
    ],
    tech: ["Cypress", "TestRail", "Jira", "Notion", "Manual QA", "CI/CD"],
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
    { year: "2020", level: 1, label: "QA (part-time)", icon: "🎮", color: "bg-blue-400" },
    { year: "2021", level: 3, label: "Sr. SQA · Jr. QA", icon: "🌍", color: "bg-cyan-400" },
    { year: "2022", level: 5, label: "Reliability · QA", icon: "💳", color: "bg-violet-400" },
    { year: "2023", level: 6, label: "QA Lead", icon: "🚑", color: "bg-magenta-400" },
    { year: "2024", level: 9, label: "Automation Eng II · TPM", icon: "🎯", color: "bg-amber-400" },
    { year: "2025", level: 11, label: "Founder & CEO", icon: "👑", color: "bg-emerald-400" },
    { year: "2026", level: 12, label: "Co-Founder & CTO, Upward", icon: "🚀", color: "bg-sky-400" },
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
      forWho: "Students & young professionals",
      usd: "From $199",
      bdt: "From ৳24,278",
      turnaround: "3–4 days",
      points: [
        "Complete personal website, beautifully animated",
        "Your own domain, set up for you",
        "Perfect on mobile",
        "1 revision round",
      ],
      outcome: "A site that finally does you justice.",
      highlight: false,
    },
    {
      name: "Signature",
      forWho: "Consultants, seniors & founders",
      usd: "From $499",
      bdt: "From ৳60,878",
      turnaround: "~1 week",
      points: [
        "Everything in Spark",
        "We write your words (copywriting + SEO)",
        "Interactive & 3D touches people share",
        "Contact form + 2 revision rounds",
      ],
      outcome: "The site that gets you the callback.",
      highlight: true,
    },
    {
      name: "Executive",
      forWho: "Doctors, CEOs & C-suite",
      usd: "From $1,000",
      bdt: "From ৳1,22,000",
      turnaround: "~2 weeks",
      points: [
        "Everything in Signature",
        "Fully bespoke design + strategy call",
        "Press, media & ventures sections",
        "30-day priority support",
      ],
      outcome: "A personal brand that opens doors at the top.",
      highlight: false,
    },
  ],
  carePlan: {
    name: "Care Plan",
    usd: "From $40/mo",
    bdt: "From ৳3,000/mo",
    note: "Optional add-on — hosting, updates & tweaks whenever you need them.",
  },
  custom: {
    name: "Custom / Tailored",
    note: "Need something beyond these packages? Tell us your exact requirements — special sections, niche features, integrations, or a unique design direction — and we'll scope and build it to fit. You get a custom quote, then the same done-for-you experience.",
    cta: "Get a custom quote",
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
      { feature: "Starting price", template: "$0–20 + hours", agency: "$3k–10k+", shipfolio: "From $199 / ৳24k" },
    ],
  },
  faq: [
    { q: "Is this legit — and is it really mine?", a: "100% yours, forever. The demos above are live proof. You get your own site on your own domain — keep it, edit it, no lock-in." },
    { q: "There are tons of website makers — why you?", a: "Most sell flat templates that look like everyone else. We design a one-of-a-kind site around your story and write the words that sell you — all done for you." },
    { q: "What do you need from me?", a: "Your story, a few links, and a photo. We handle everything else — including your domain if you don't have one." },
    { q: "How long does it take?", a: "3–4 days (Spark) to about two weeks (Executive). You're in the loop the whole way." },
    { q: "How does payment work?", a: "Flexible — bKash or bank locally; Wise, Stripe, or Upwork internationally. We sort it on the first chat." },
  ],
  // Trust band — answers "is this authentic?" with things they can verify.
  trust: [
    { icon: "👁️", title: "See it, don't take our word", text: "This very site is the live demo. Click around — that's exactly the quality you get." },
    { icon: "🔑", title: "100% yours, forever", text: "Your own code, your own domain, hosted on your account. No lock-in, no monthly trap." },
    { icon: "🤝", title: "Real people behind it", text: "Built by a senior software engineer and a sales leader — so it works and it converts." },
  ],
  // Real, clickable proof — live sites we've built. Add new clients here.
  showcase: [
    {
      name: "Arifuzzaman Antor",
      role: "Founder · Technical Project Manager · Engineer",
      url: "https://azantor.xyz",
      blurb: "The flagship demo — 3D living résumé, gamified sections, fully interactive.",
    },
    {
      name: "Sharif Md. Abid",
      role: "HealthTech Sales & BD Expert · CEO, Life Plus BD",
      url: "https://sharif-abid.xyz",
      blurb: "A premium personal brand for a 21-year sales & HealthTech leader — interactive, gamified, fully responsive.",
    },
    {
      name: "Timothy Munro Roberts",
      role: "Technology Founder · Enterprise Architect · CEO, Platformz",
      url: "https://timothymunroroberts.com",
      blurb: "A bold, gamified personal brand for a 25-year tech founder & enterprise architect — fully interactive.",
    },
  ],
  // Real client words only — leave empty until you have genuine quotes + permission.
  clientQuotes: [] as { quote: string; author: string; role: string }[],
  // Who it's for — helps a visitor self-identify ("this is for me").
  forWhom: [
    { icon: "🩺", label: "Doctors & specialists" },
    { icon: "💼", label: "Consultants & advisors" },
    { icon: "🚀", label: "Founders & entrepreneurs" },
    { icon: "👔", label: "C-suite & executives" },
    { icon: "🎤", label: "Coaches & speakers" },
    { icon: "📈", label: "Sales & business leaders" },
  ],
  // Risk reversal — lowers the fear of ordering.
  guarantee:
    "We revise until you're proud to share it. You own the site, the code, and the domain — forever. No lock-in, no monthly trap.",
  // Honest positioning of value + scarcity (true for a small, senior team).
  valueNote:
    "One new client, callback, or deal usually wins back the cost many times over. We take a limited number of builds each month to keep every site premium.",
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
  { label: "Skills", href: "#skills", teaser: "36-node skill tree · 12 per branch" },
  { label: "Experience", href: "#missions", teaser: "12 roles — Mastercard, Kintsugi, Platformz, Upward…" },
  { label: "Projects", href: "#projects", teaser: "FUR4 E2E on AWS, k6 load tests, FirstTrip, Adobe Neo, MyGP & more" },
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
    name: "Upward",
    preview: "/ventures/upward.jpg",
    tagline: "One growth partner. Not ten vendors.",
    description:
      "AI-powered business-growth partner — four divisions and eight AI-powered services across media, marketing, technology, and healthcare. Co-Founder & CTO, with Co-CEO Sharif Md. Abid. Founded 2026 · Dhaka.",
    theme: "cyan" as const,
    link: "https://www.upwardbd.com",
    icon: "🚀",
    stat: "4 divisions · 8 AI services",
  },
  {
    name: "AZAI Labs",
    preview: "/ventures/azailabs.jpg",
    tagline: "Build with agents, not headcount.",
    description:
      "An AI lab that ships real work — building AI products, delivering AI services, and placing augmented AI talent so teams move faster. Founded 2025 · San Francisco HQ, remote-first from Dhaka. Founder & CEO.",
    theme: "violet" as const,
    link: "https://azailabs.dev",
    icon: "🤖",
    stat: "AI agents in production",
  },
  {
    name: "AZADEMY",
    preview: "/ventures/azademy.jpg",
    tagline: "Learning meets earning.",
    description:
      "An academy that teaches CS, AI & technology, freelancing, and how to land remote jobs — plus real interviews with experts on how to give and take technical interviews. Founder.",
    theme: "amber" as const,
    link: "https://azademy.org",
    icon: "🎓",
    stat: "Real interview sessions",
  },
  {
    name: "AZA Execution Podcast",
    preview: "/ventures/azapodcast.jpg",
    tagline: "Ideas are cheap. Execution is everything.",
    description:
      "My podcast — long-form conversations with operators, founders, builders, scientists, and artists on how world-class work actually gets done. Weekly, video & audio, Bangla & English. Now streaming. Host & founder.",
    theme: "cyan" as const,
    link: "https://azapodcast.com",
    icon: "🎙️",
    stat: "Long-form builder stories",
  },
  {
    name: "Listen2AZA",
    preview: "/ventures/listen2aza.jpg",
    tagline: "Stories you can press play on.",
    description:
      "An audiobook channel on YouTube — narrated books and stories for people who'd rather listen than scroll. Founder.",
    theme: "magenta" as const,
    link: "https://www.youtube.com/@Listen2AZA",
    icon: "📚",
    stat: "Audiobooks in Bangla & English",
  },
  {
    name: "Silent Sacrifice Abdus Sattar Foundation",
    preview: "/ventures/ssasf.jpg",
    tagline: "Every father's silent sacrifice. Every child's potential.",
    description:
      "A foundation honoring my father, Sheikh Abdus Sattar — scholarships, free mentorship and internships, Quran education, support for struggling families and cancer patients, feeding the hungry, and tree plantation. 60+ Quran students in Ramadan 2025, 60 students mentored in year one.",
    theme: "emerald" as const,
    link: "https://ssasf.vercel.app",
    icon: "❤️",
    stat: "60+ Quran students, year 1",
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
    name: "EcomTestPilot — FUR4 Playwright E2E on AWS",
    preview: "https://opengraph.githubassets.com/1/azaworld/playwright-e2e-docker-aws",
    org: "Platformz / Personal",
    period: "2024 — Present",
    blurb: "Production-grade Playwright E2E test suite for fur4.com and refer.fur4.com — Dockerized, deployed on AWS EC2, scheduled every 15 min via PM2. Covers homepage integrity, referral & dealer CTAs, registration forms, social login (Google, Facebook, LinkedIn), product rendering, cart & guest checkout. Microsoft Teams webhook notifications on failure.",
    tags: ["Playwright", "TypeScript", "Docker", "AWS EC2", "CI/CD", "E2E Testing"],
    link: "https://github.com/azaworld/playwright-e2e-docker-aws",
    icon: "🎬",
  },
  {
    name: "FUR4 k6 Load Testing Suite",
    preview: "https://opengraph.githubassets.com/1/azaworld/Fur4-Load-Testing-K6",
    org: "Platformz / Personal",
    period: "2024 — Present",
    blurb: "k6 load-testing framework for FUR4's GraphQL API — smoke, load, stress, spike & soak profiles. InfluxDB + Grafana real-time dashboards, HTML stakeholder reports, AWS EC2 deployment, GitHub Actions CI/CD, and Microsoft Teams notifications.",
    tags: ["k6", "GraphQL", "Load Testing", "InfluxDB", "Grafana", "AWS", "CI/CD"],
    link: "https://github.com/azaworld/Fur4-Load-Testing-K6",
    icon: "📊",
  },
  {
    name: "k6 GraphQL Load Testing Framework",
    preview: "https://opengraph.githubassets.com/1/azaworld/k6-graphql-loadtesting",
    org: "Personal",
    period: "2024",
    blurb: "Reusable, production-grade GraphQL load testing framework with Docker, AWS EC2 deployment, GitHub Actions CI/CD, HTML pie-chart reports, and Microsoft Teams webhook alerts. Covers mutations and queries with flexible load profiles.",
    tags: ["k6", "GraphQL", "Docker", "AWS", "GitHub Actions", "Performance Testing"],
    link: "https://github.com/azaworld/k6-graphql-loadtesting",
    icon: "⚡",
  },
  {
    name: "FirstTrip Playwright QA Framework",
    preview: "https://opengraph.githubassets.com/1/azaworld/firsttrip-playwright-qa-automation",
    org: "Personal",
    period: "2024",
    blurb: "Full Page Object Model automation framework in Playwright + TypeScript for FirstTrip's flight search platform. Covers flight search, airline filtering, price comparison, sign-in modal verification, and screenshot reporting — wired into GitHub Actions CI.",
    tags: ["Playwright", "TypeScript", "POM", "GitHub Actions", "QA Framework"],
    link: "https://github.com/azaworld/firsttrip-playwright-qa-automation",
    icon: "✈️",
  },
  {
    name: "Adobe Project Neo — Playwright E2E",
    preview: "https://opengraph.githubassets.com/1/azaworld/Adobe-Project-Neo-Playwright",
    org: "Personal",
    period: "2024",
    blurb: "Playwright + TypeScript E2E automation suite for Adobe Project Neo — Adobe's AI-powered 3D design tool. Covers core user flows with GitHub Actions CI/CD integration.",
    tags: ["Playwright", "TypeScript", "GitHub Actions", "Adobe", "3D Design"],
    link: "https://github.com/azaworld/Adobe-Project-Neo-Playwright",
    icon: "🎨",
  },
  {
    name: "Cypress Cloud — Parallel CI Project",
    preview: "https://opengraph.githubassets.com/1/azaworld/CypressCloudProject",
    org: "Personal",
    period: "2023",
    blurb: "Cypress Cloud project demonstrating parallel test execution, Cypress Cloud recording & run analytics, and full GitHub Actions CI integration — a reference implementation for teams scaling their test suite.",
    tags: ["Cypress", "Cypress Cloud", "GitHub Actions", "Parallel Testing", "CI/CD"],
    link: "https://github.com/azaworld/CypressCloudProject",
    icon: "🌳",
  },
  {
    name: "FUR4 Omnichannel Platform",
    preview: "/projects/fur4.jpg",
    org: "Platformz",
    period: "2024 — Present",
    blurb: "Enterprise pet-brand ecosystem — DTC (fur4.com), dealer portal (dealer.fur4.com), referral portal (refer.fur4.com), GOD ops dashboard & AI ops tower on Magento + React + GraphQL. Full QA: Playwright automation, manual, security (OWASP ZAP), load & performance (JMeter/k6). 60-day 3P EDI program across Amazon, Walmart, Target, Chewy, eBay & Macy's.",
    tags: ["TPM", "QA Automation", "Security Testing", "Load Testing", "Magento", "EDI", "React"],
    link: "https://platformz.us/projects/fur4",
    icon: "🐾",
  },
  {
    name: "Rockerz Skate Platform",
    preview: "/projects/rockerz.jpg",
    org: "Platformz",
    period: "2024 — Present",
    blurb: "Precision skate-guard platform — 4-zone live product color configurator, DTC, dealer portal, dealer-locator & referral portals on Magento + React + AWS. Full QA: automation, manual, security, load & performance across all portals.",
    tags: ["TPM", "QA Automation", "Manual QA", "Performance Testing", "Magento", "React"],
    link: "https://rockerz.com",
    icon: "🛼",
  },
  {
    name: "DMV Raw Feeders Platform",
    preview: "/projects/dmv.jpg",
    org: "Platformz",
    period: "2024 — Present",
    blurb: "Raw pet food delivery platform — zone-based delivery routing, subscription management & referral portal. Full QA: automation, manual, security & performance testing end to end.",
    tags: ["TPM", "QA Automation", "Manual QA", "Performance Testing", "Delivery Routing"],
    link: "https://dmvrawfeeders.com",
  },
  {
    name: "MyGP — Backend Automation Framework",
    preview: "/projects/mygp.jpg",
    org: "Grameenphone (via Miaki)",
    period: "2024 — 2025",
    blurb: "Built the complete backend test automation framework from zero for MyGP — the app of Bangladesh's largest mobile operator (millions of users). End-to-end backend API automation with Playwright, covering the full backend surface for reliable, repeatable regression.",
    tags: ["Playwright", "TypeScript", "API Testing", "Backend Automation", "Framework Build"],
    link: "https://play.google.com/store/apps/details?id=com.portonics.mygp",
  },
  {
    name: "Kinetik Health App — iOS & Android",
    preview: "/projects/kinetik.jpg",
    org: "Kinetik",
    period: "2023 — 2025",
    blurb: "QA lead for the Kinetik Health App — NEMT member app (iOS + Android) for requesting, managing & tracking medical transport rides with real-time driver location. Full QA lifecycle: manual, Playwright/TypeScript API automation (AWS Lambda, SQS, S3), Appium mobile automation, and load testing — from first test case through production App Store & Google Play publish. Platform: 13M+ trips, $1.1B+ claims, 1.5M+ members across 44 states.",
    tags: ["Appium", "Playwright", "TypeScript", "Load Testing", "Manual QA", "iOS", "Android", "AWS"],
    link: "https://kinetik.care",
  },
  {
    name: "OpenCRVS — Civil Registration QA",
    preview: "/projects/opencrvs.jpg",
    org: "Dynamic Solution Innovators",
    period: "2021 — 2022",
    blurb: "Cypress automation QA for OpenCRVS — UN-backed open-source civil registration so every person on the planet is recognised from birth. CI/CD integration, cross-browser suites, TestRail test management.",
    tags: ["Cypress", "TestRail", "CI/CD", "Civic Tech", "Automation"],
    link: "https://www.opencrvs.org",
  },
  {
    name: "IPEMIS — Bangladesh Govt. Education MIS",
    preview: "/projects/ipemis.jpg",
    org: "Dynamic Solution Innovators",
    period: "2021 — 2022",
    blurb: "Manual QA Engineer for IPEMIS (Integrated Primary Education Management Information System) — Bangladesh government's Department of Primary Education platform managing education records for millions of children nationwide.",
    tags: ["Manual QA", "Government", "Education Platform", "Test Planning"],
    link: "https://login.ipemis.dpe.gov.bd/login",
  },
  {
    name: "Sothik — Bangladesh Govt. Bangla Spell Checker",
    preview: "/projects/sothik.jpg",
    org: "REVE Systems",
    period: "2022 — 2023",
    blurb: "QA Lead for Sothik (spell.bangla.gov.bd) — Bangladesh government's official AI-powered Bangla spell & grammar checker (Bangla Academy). NLP accuracy evaluation, functional, regression, security (OWASP ZAP/Burp Suite), performance (JMeter/LoadRunner). Results: performance up 60%, critical defects down 30%.",
    tags: ["QA Lead", "Security Testing", "Performance Testing", "AI/NLP", "Government", "JMeter"],
    link: "https://spell.bangla.gov.bd",
  },
  {
    name: "CBMS — Customs Bond Commissionerate",
    preview: "/projects/cbms.jpg",
    org: "REVE Systems",
    period: "2022 — 2023",
    blurb: "QA Engineer for CBMS (cbc.gov.bd) — Bangladesh government's Customs Bond Commissionerate Management System for processing and monitoring customs-duty bond transactions. End-to-end QA with detailed documentation.",
    tags: ["Manual QA", "Government", "Enterprise System", "Test Documentation"],
    link: "https://cbc.gov.bd",
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
  comingSoon: false,
  status: "Live — now streaming",
  site: "https://azapodcast.com",
  channel: "https://www.youtube.com/@azapod",
  facebook: "https://www.facebook.com/azapod",
  episodes: [
    {
      id: "2UdL9zfAXUk",
      title: "AZA Execution Podcast Is Here — Official Launch",
      description: "Ideas are cheap. Execution is everything. The official launch — what the show is and why it exists.",
    },
    {
      id: "v2OqdZCJuWY",
      title: "How to Build a Career in Software QA — Automation, AI & Networking",
      description: "With Hiro Mia (BRAC IT) — the software QA career playbook: automation, AI, and networking.",
    },
    {
      id: "lxa1UglTbIw",
      title: "The B2B Career Playbook — 22 Years of Execution & Enterprise Sales",
      description: "With Sharif Md. Abid — leadership, enterprise sales, and lessons from 22 years of execution.",
    },
  ],
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
