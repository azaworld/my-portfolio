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
    "I solve blockers before breakfast",
  ],
  identity:
    "TPM @ Platformz · Senior QA Engineer @ Kintsugi · Entrepreneur · Podcaster · AI Instructor",
  pitch:
    "The person who turns chaos into shipped products. At Platformz I run delivery for three client platforms alongside the CEO — leading a 30+ person team of engineers, DevOps, designers, leads, and marketing.",
  email: "arifuzantor@gmail.com",
  linkedin: "https://linkedin.com/in/azantor",
  github: "https://github.com/azaworld",
  twitter: "https://x.com/azantor1",
  calendar: "{{CALENDAR_BOOKING_LINK}}", // e.g. https://cal.com/yourname
  location: "Dhaka, Bangladesh",
};

export const heroStats = [
  { value: 7, suffix: "+", label: "Years in quality & delivery" },
  { value: 30, suffix: "+", label: "People led — eng, DevOps, design, marketing" },
  { value: 3, suffix: "", label: "Client platforms running" },
  { value: 10, suffix: "+", label: "Portals shipped to production" },
];

// RPG character stats for the About section (0–100)
export const characterStats = [
  { name: "Leadership", value: 92, color: "var(--violet)" },
  { name: "Delivery", value: 95, color: "var(--cyan)" },
  { name: "Communication", value: 90, color: "var(--magenta)" },
  { name: "Vision", value: 88, color: "var(--amber)" },
];

export const originStory = [
  `Every team has that person who sees the whole board — who knows which piece is
   blocked, which dependency is about to bite, and which conversation will unblock
   three engineers at once. That's the role I was built for.`,
  `I started in the trenches of quality engineering — from freelance e-commerce QA to
   reliability engineering at Mastercard, to leading QA for mission-critical healthcare
   platforms — and grew into running the whole delivery machine. Today
   I split my time between two active missions: Technical Project Manager at
   Platformz, running three client platforms (FUR4, Rockerz, DMV Raw Feeders)
   side-by-side with the CEO and leading a 30+ person team — and Senior QA Engineer
   at Kintsugi in San Francisco, owning quality for an AI-powered tax platform.
   Along the way I founded ventures, taught AI to working professionals, and
   started a podcast about building things.`,
  `{{ADD_A_PERSONAL_PARAGRAPH — what drives you, what you're building next}}`,
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
      "{{VENTURE_EXAMPLE — what you founded, what it does, traction numbers}}",
  },
  {
    id: "ai-instruction",
    name: "AI Instruction",
    branch: "Entrepreneurship",
    level: 4,
    example:
      "Teaching working professionals to use AI tools practically — curriculum design and live instruction.",
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
  period: string;
  status: "ACTIVE" | "COMPLETE";
  brief: string;
  objectives: string[];
  bossFight: string; // the biggest challenge
  loot: string[]; // outcomes / metrics
  tech?: string[]; // "loadout" — technologies used, shown in the debrief
};

export const missions: Mission[] = [
  {
    id: "platformz",
    codename: "Operation Command Center",
    role: "Technical Project Manager",
    org: "Platformz — platformz.us",
    period: "Sept 2024 — Present",
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
    role: "Senior QA Engineer",
    org: "Kintsugi — San Francisco, USA (remote)",
    period: "Sept 2025 — Present",
    status: "ACTIVE",
    brief:
      "Senior quality engineering for an AI-powered sales tax automation platform — where a wrong number isn't a bug, it's a compliance problem.",
    objectives: [
      "Own QA automation strategy across the platform — Playwright + TypeScript wired into CI",
      "Quality gates for AI-driven features where correctness is the product",
      "{{ADD_KINTSUGI_DETAIL — e.g. key systems you cover, releases shipped}}",
    ],
    bossFight:
      "Testing AI-powered tax logic: outputs vary, regulations shift, and 'looks right' isn't good enough. Built verification approaches that hold the line on accuracy.",
    loot: [
      "{{METRIC — e.g. escaped-defect rate, coverage}}",
      "QA leadership across a high-stakes fintech domain",
    ],
    tech: ["Playwright", "TypeScript", "Postman", "CI/CD"],
  },
  {
    id: "kinetik",
    codename: "Operation Lifeline",
    role: "Software QA Engineer I → QA Lead",
    org: "Kinetik — New York, USA (remote)",
    period: "Sept 2023 — Sept 2025",
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
    period: "Feb 2022 — Aug 2023",
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
    id: "reve",
    codename: "Operation Stronghold",
    role: "Software QA Engineer",
    org: "REVE Systems — Dhaka, Bangladesh (onsite)",
    period: "Dec 2020 — Aug 2023",
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
    id: "intellex",
    codename: "Operation Global Cart",
    role: "Augmented Sr. SQA — Intellex via TCS",
    org: "Tata Consultancy Services — Remote (US client)",
    period: "Jan 2021 — Jan 2022",
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
    id: "dsi",
    codename: "Operation Foundation",
    role: "Jr. Software QA Engineer",
    org: "Dynamic Solution Innovators Ltd. — Dhaka, Bangladesh (onsite)",
    period: "Sept 2019 — Nov 2020",
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
    org: "CarryBags Ltd — Coventry, UK (remote)",
    period: "July 2018 — Aug 2019",
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
// VENTURES — "founded worlds"
// ----------------------------------------------------------------------------
export const ventures = [
  {
    name: "{{VENTURE_1_NAME}}",
    tagline: "{{VENTURE_1_ONE_LINER}}",
    description:
      "{{VENTURE_1_DESCRIPTION — what it is, who it serves, traction}}",
    theme: "violet" as const,
    link: "{{VENTURE_1_URL}}",
  },
  {
    name: "{{PODCAST_NAME}}",
    tagline: "Conversations about building things that ship",
    description:
      "{{PODCAST_DESCRIPTION — topics, notable guests, where to listen}}",
    theme: "cyan" as const,
    link: "{{PODCAST_URL}}",
  },
  {
    name: "AI Instruction",
    tagline: "Teaching professionals to actually use AI",
    description:
      "{{COURSE_DESCRIPTION — what you teach, audience size, outcomes}}",
    theme: "amber" as const,
    link: "{{COURSE_URL}}",
  },
];

// ----------------------------------------------------------------------------
// CREDENTIALS — education & certifications, shown in the About card
// ----------------------------------------------------------------------------
export const credentials = [
  {
    icon: "🎓",
    text: "BE, Computer Science & Engineering — Shahjalal University of Science and Technology",
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
export const testimonials = [
  {
    quote:
      "{{TESTIMONIAL_1 — e.g. 'Antor is the reason we ship on time. Full stop.'}}",
    author: "{{NAME_1}}",
    title: "{{TITLE_1 — e.g. CTO, Kinetik}}",
  },
  {
    quote: "{{TESTIMONIAL_2}}",
    author: "{{NAME_2}}",
    title: "{{TITLE_2}}",
  },
  {
    quote: "{{TESTIMONIAL_3}}",
    author: "{{NAME_3}}",
    title: "{{TITLE_3}}",
  },
];

export const media = [
  {
    title: "{{VIDEO_1_TITLE — e.g. Podcast episode or interview}}",
    description: "{{VIDEO_1_DESCRIPTION}}",
    url: "{{YOUTUBE_URL_1}}",
    duration: "{{12:34}}",
  },
  {
    title: "{{VIDEO_2_TITLE}}",
    description: "{{VIDEO_2_DESCRIPTION}}",
    url: "{{YOUTUBE_URL_2}}",
    duration: "{{45:01}}",
  },
  {
    title: "{{VIDEO_3_TITLE}}",
    description: "{{VIDEO_3_DESCRIPTION}}",
    url: "{{YOUTUBE_URL_3}}",
    duration: "{{08:22}}",
  },
];
