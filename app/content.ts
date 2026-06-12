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
    "Technical Project Manager · Engineering Team Lead · Entrepreneur · Podcaster · AI Instructor",
  pitch:
    "The person who turns chaos into shipped products. I build cross-functional product teams, clear the path, and deliver — sprint after sprint.",
  email: "arifuzantor@gmail.com",
  linkedin: "https://linkedin.com/in/azantor",
  github: "https://github.com/azaworld",
  twitter: "https://x.com/azantor1",
  calendar: "{{CALENDAR_BOOKING_LINK}}", // e.g. https://cal.com/yourname
  location: "Dhaka, Bangladesh",
};

export const heroStats = [
  { value: 5, suffix: "+", label: "Years leading delivery" },
  { value: 40, suffix: "+", label: "Releases shipped" }, // {{ADJUST_NUMBER}}
  { value: 12, suffix: "+", label: "Engineers led" }, // {{ADJUST_NUMBER}}
  { value: 3, suffix: "", label: "Ventures founded" }, // {{ADJUST_NUMBER}}
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
  `I started in the trenches of quality engineering, leading QA for mission-critical
   healthcare platforms — then grew into running the whole delivery machine:
   standups, roadmaps, releases, stakeholder reporting, and the thousand invisible
   decisions that turn a plan into a product. Along the way I founded ventures,
   taught AI to working professionals, and started a podcast about building things.`,
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
      "Ran multi-team delivery for a healthcare platform across web, mobile, and backend — coordinated releases across Trip Scheduler, Trip Assistant, and RCM products.",
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
      "The connective tissue between product, engineering, design, and DevOps — ran release-readiness reviews across four teams.",
  },
  {
    id: "stakeholder",
    name: "Stakeholder & CTO Reporting",
    branch: "Leadership",
    level: 4,
    example:
      "Weekly exec-level reporting: roadmap progress, risk register, and the honest version of 'are we on track?'",
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
};

export const missions: Mission[] = [
  {
    id: "kinetik",
    codename: "Operation Lifeline",
    role: "QA Lead → Delivery Lead",
    org: "Kinetik Care — New York, USA",
    period: "Sept 2023 — Present",
    status: "ACTIVE",
    brief:
      "Own delivery quality for a healthcare platform moving real patients — iOS, Android, web, and mission-critical backend systems.",
    objectives: [
      "Lead QA and release strategy across Trip Scheduler, Trip Assistant, and RCM",
      "Coordinate product managers, engineering leads, CTO, and DevOps for every release",
      "Stand up TypeScript + Playwright automation across web and mobile",
      "Run risk-based test planning for critical healthcare user flows",
    ],
    bossFight:
      "Shipping weekly into a healthcare environment where a regression isn't a bug — it's a missed patient trip. Built release gates that caught issues without slowing the team down.",
    loot: [
      "{{METRIC — e.g. release bugs down X%}}",
      "Zero-surprise launch cadence across 3 product lines",
      "QA architecture adopted org-wide",
    ],
  },
  {
    id: "reve",
    codename: "Operation Stronghold",
    role: "Software QA Engineer",
    org: "REVE Systems",
    period: "Dec 2022 — Sept 2023",
    status: "COMPLETE",
    brief:
      "Performance and security hardening for telecom-scale systems with distributed teams.",
    objectives: [
      "Design automated suites with Selenium + Python",
      "Lead performance & security testing — JMeter, OWASP ZAP",
      "Improve traceability across distributed teams",
    ],
    bossFight:
      "Coordinating test cycles across timezones without blocking releases — solved with async handoffs and ruthless prioritization.",
    loot: ["Reduced release cycle times", "Security testing playbook"],
  },
  {
    id: "dsi",
    codename: "Operation Foundation",
    role: "Jr. Software QA Engineer",
    org: "Dynamic Solution Innovators",
    period: "Sept 2021 — Nov 2022",
    status: "COMPLETE",
    brief: "First boss arena: learning to ship with CI discipline.",
    objectives: [
      "Functional, API, and regression coverage",
      "Jenkins CI-integrated automation",
      "Reusable component design for test suites",
    ],
    bossFight: "Earning trust as the junior who finds the bugs that matter.",
    loot: ["Coverage up across the board", "CI pipeline ownership"],
  },
  {
    id: "wcb",
    codename: "Operation First Blood",
    role: "QA Engineer",
    org: "We Carry Bags — UK (remote)",
    period: "June 2020 — Aug 2021",
    status: "COMPLETE",
    brief: "The tutorial level — except the e-commerce revenue was real.",
    objectives: [
      "Test automation for e-commerce platforms",
      "Jenkins + Selenium nightly build testing",
      "Fast-turnaround QA sprints",
    ],
    bossFight: "Remote-first collaboration before remote was cool.",
    loot: ["Nightly regression safety net", "First automation framework"],
  },
];

// ----------------------------------------------------------------------------
// LEADERSHIP DASHBOARD — the "what I do daily" animated dashboard
// ----------------------------------------------------------------------------
export const dashboard = {
  counters: [
    { label: "Standups run", value: 900, suffix: "+" }, // {{ADJUST}}
    { label: "Blockers cleared", value: 480, suffix: "+" }, // {{ADJUST}}
    { label: "Releases shipped", value: 40, suffix: "+" }, // {{ADJUST}}
    { label: "Teams coordinated", value: 4, suffix: "" }, // {{ADJUST}}
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
