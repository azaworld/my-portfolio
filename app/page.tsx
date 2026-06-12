import Reveal from "./components/Reveal";
import Typewriter from "./components/Typewriter";

// ---------------------------------------------------------------------------
// Edit everything in this block — it's all the content on the site.
// ---------------------------------------------------------------------------

const profile = {
  name: "Arifuzzaman Antor",
  roles: [
    "Sr. Software QA Automation Engineer",
    "SDET | Tech Instructor",
    "Playwright + TypeScript Specialist",
    "AI-Powered Testing Practitioner",
  ],
  tagline:
    "Result-driven Senior Software QA Automation Engineer with 5+ years of experience in end-to-end testing across web, mobile, and API platforms. Empowering software quality with automation, AI & precision.",
  email: "arifuzantor@gmail.com",
  location: "Dhaka, Bangladesh",
  education: "ShahJalal University of Science & Technology",
  github: "https://github.com/azaworld",
  linkedin: "https://linkedin.com/in/azantor",
  twitter: "https://x.com/azantor1",
  resumeUrl: "/resume.pdf",
};

const heroStats = [
  { value: "5+", label: "Years of experience" },
  { value: "4", label: "Companies served" },
  { value: "3", label: "Platforms — web, mobile, API" },
];

const about = [
  `I'm Arifuzzaman Antor, a result-driven Senior Software QA Automation Engineer with over
   5 years of professional experience in end-to-end testing across web, mobile, and API
   platforms. I specialize in building robust automation frameworks using modern technologies
   like TypeScript + Playwright, Docker, and CI/CD integrations, along with hands-on
   experience in AI-based testing tools.`,
  `I currently lead QA efforts for cross-platform mobile applications and mission-critical
   backend systems, ensuring seamless performance, security, and usability.`,
];

const skillGroups = [
  {
    icon: "🔧",
    title: "Automation & Frameworks",
    skills: [
      "Scalable automation suites with Playwright (TypeScript), Selenium, Appium, and Cypress",
      "Automation architecture for web, API, and mobile — including hybrid frameworks",
      "Containerized test execution with Docker; cloud pipelines on Bitbucket Pipelines, GitHub Actions, and Jenkins",
    ],
  },
  {
    icon: "💻",
    title: "Scripting & Development",
    skills: [
      "Advanced coding in TypeScript, JavaScript, Python, and Java",
      "BDD with Cucumber + Gherkin syntax",
      "Custom testing utilities and test runners for faster debugging and maintenance",
    ],
  },
  {
    icon: "🌐",
    title: "API, Performance & Security",
    skills: [
      "RESTful API testing with Postman, REST Assured, Swagger, and Newman",
      "Performance testing with k6 and JMeter, integrated into CI/CD",
      "OWASP ZAP, Burp Suite, and static code scans for security assessments",
    ],
  },
  {
    icon: "🔄",
    title: "CI/CD & DevOps",
    skills: [
      "CI-integrated automation pipelines on AWS EC2, Bitbucket, and Dockerized test infrastructure",
      "Automated alerts and reports to Microsoft Teams, Slack, and JIRA",
    ],
  },
  {
    icon: "🧠",
    title: "AI in QA",
    skills: [
      "AI-powered tools: Testim.io, Mabl, and Applitools",
      "AI for visual regression, self-healing scripts, and test case generation",
    ],
  },
];

const toolCategories = [
  { category: "Languages", tools: "TypeScript, JavaScript, Python, Java" },
  { category: "Automation", tools: "Playwright, Selenium, Cypress, Appium" },
  { category: "Mobile", tools: "iOS & Android (real devices + emulators)" },
  { category: "API Testing", tools: "Postman, Swagger, REST Assured, Newman" },
  { category: "CI/CD & Infra", tools: "Jenkins, Bitbucket Pipelines, Docker, AWS EC2" },
  { category: "Performance", tools: "JMeter, k6, Gatling" },
  { category: "Security", tools: "OWASP ZAP, Burp Suite, SonarQube" },
  { category: "Reporting", tools: "Allure, ExtentReports, Custom Dashboards" },
  { category: "Agile Tools", tools: "JIRA, Trello, Confluence, QASE" },
  { category: "Collab & Alerts", tools: "Slack, MS Teams, GitHub, Bitbucket" },
];

const testingTypes = [
  "Functional / Regression / Smoke / Sanity / UAT",
  "Load / Performance / Stress Testing",
  "REST API & GraphQL Testing",
  "Mobile App Testing (Android + iOS)",
  "Accessibility & Visual Testing",
  "Usability / Exploratory / Data Validation",
  "Security & Compliance Testing",
  "Cross-browser & Responsive Testing",
];

const experience = [
  {
    role: "Software QA Engineer I",
    company: "Kinetik Care",
    location: "New York, USA",
    period: "Sept 2023 — Present",
    points: [
      "QA Lead for the Kinetik Health App (iOS + Android) — leading testing across all mobile platforms.",
      "Managing test strategies for manual, API, security, load, regression, smoke, exploratory, and UAT testing.",
      "Designing and executing test cases for critical healthcare user flows.",
      "Built and maintained TypeScript + Playwright automation for web and mobile test suites.",
      "Automated API test flows with Postman collections and CI integration.",
      "Provided test architecture and documentation across Trip Scheduler (TS), Trip Assistant (TA), and RCM (Revenue Cycle Management).",
      "Led peer reviews, test planning, and cross-team testing initiatives for release readiness.",
      "Delivered end-to-end QA coverage with data validation, edge-case scenario testing, and risk-based prioritization.",
    ],
  },
  {
    role: "Software QA Engineer",
    company: "REVE Systems",
    location: "Dhaka, Bangladesh",
    period: "Dec 2022 — Sept 2023",
    points: [
      "Designed automated test suites using Selenium + Python.",
      "Led performance and security testing using JMeter and OWASP ZAP.",
      "Collaborated with distributed teams to reduce release cycle times and improve test traceability.",
    ],
  },
  {
    role: "Jr. Software QA Engineer",
    company: "Dynamic Solution Innovators",
    location: "Dhaka, Bangladesh",
    period: "Sept 2021 — Nov 2022",
    points: [
      "Developed and executed functional, API, and regression test cases.",
      "Automated test suites integrated with Jenkins CI pipelines.",
      "Improved overall test coverage through reusable component design.",
    ],
  },
  {
    role: "QA Engineer",
    company: "We Carry Bags",
    location: "UK (remote)",
    period: "June 2020 — Aug 2021",
    points: [
      "Developed test automation scripts for e-commerce platforms.",
      "Integrated Jenkins with Selenium for nightly build testing.",
      "Documented defects and collaborated on quick-turnaround QA sprints.",
    ],
  },
];

const projects = [
  {
    name: "EcomTestPilot — Playwright E2E on Docker + AWS",
    description:
      "Automated QA & monitoring for e-commerce: a modular, Dockerized automation suite built with TypeScript + Playwright, integrated with Bitbucket Pipelines and MS Teams alerts.",
    tags: ["Playwright", "TypeScript", "Docker", "AWS"],
    link: "https://github.com/azaworld/playwright-e2e-docker-aws",
  },
  {
    name: "Kinetik Health App — Mobile QA Lead",
    description:
      "Led full-cycle mobile QA strategy (manual + automation) across Android and iOS for a healthcare app, significantly reducing release bugs in mission-critical user flows.",
    tags: ["Mobile QA", "iOS", "Android", "Healthcare"],
    link: "",
  },
  {
    name: "API & GraphQL Test Automation",
    description:
      "Automated backend services and GraphQL endpoints using Postman collections wired into CI/CD pipelines for continuous API verification.",
    tags: ["Postman", "GraphQL", "CI/CD"],
    link: "",
  },
  {
    name: "k6 GraphQL Load Testing",
    description:
      "Performance pipelines built with k6 load-test scripts against GraphQL services, triggered via Jenkins nightly jobs to catch regressions before release.",
    tags: ["k6", "Performance", "Jenkins"],
    link: "https://github.com/azaworld/k6-graphql-loadtesting",
  },
  {
    name: "Visual & Accessibility Testing",
    description:
      "Leveraged Applitools and WCAG guidelines for pixel-perfect, inclusive design testing — AI-driven visual regression baked into the release process.",
    tags: ["Applitools", "WCAG", "Visual Testing"],
    link: "",
  },
  {
    name: "DailyPlanAI",
    description:
      "AI-assisted daily planning side project — exploring practical applications of AI tooling beyond test automation.",
    tags: ["JavaScript", "AI"],
    link: "https://github.com/azaworld/DailyPlanAI",
  },
];

const certifications = [
  { icon: "🏅", text: "Certified Scrum Master (CSM)" },
  { icon: "🧪", text: "ISTQB Advanced Level Test Automation Engineer" },
  { icon: "☁️", text: "AWS Certified Cloud Practitioner" },
  { icon: "🎯", text: "Actively learning AI-driven testing & ML-based anomaly detection" },
  { icon: "📝", text: "Contributor to QA communities and open source initiatives" },
];

// ---------------------------------------------------------------------------

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
      <span className="h-px w-8 bg-accent" aria-hidden />
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      {/* Nav */}
      <header className="sticky top-0 z-10 -mx-6 border-b border-border bg-background/80 px-6 backdrop-blur">
        <nav className="flex items-center justify-between py-4">
          <a href="#" className="font-mono text-sm text-accent">
            {"<"}AA{" />"}
          </a>
          <div className="hidden gap-6 text-sm text-muted sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-glow relative flex min-h-[85vh] flex-col justify-center py-20">
        <p className="animate-fade-up font-mono text-sm text-accent">Hi, my name is</p>
        <h1
          className="animate-fade-up mt-3 text-4xl font-bold tracking-tight sm:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <p
          className="animate-fade-up mt-3 h-16 text-xl font-semibold text-muted sm:h-auto sm:text-3xl"
          style={{ animationDelay: "240ms" }}
        >
          <Typewriter phrases={profile.roles} />
        </p>
        <p
          className="animate-fade-up mt-6 max-w-2xl leading-relaxed text-muted"
          style={{ animationDelay: "360ms" }}
        >
          {profile.tagline}
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: "480ms" }}>
          <a
            href="#contact"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            View resume
          </a>
        </div>
        <div
          className="animate-fade-up mt-14 flex flex-wrap gap-8"
          style={{ animationDelay: "600ms" }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-16">
        <Reveal>
          <SectionHeading>👋 About me</SectionHeading>
        </Reveal>
        <div className="mt-6 space-y-4 leading-relaxed text-muted">
          {about.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 32)} delay={i * 120}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <p className="font-mono text-sm">
              🎓 {profile.education} · 📍 {profile.location}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 py-16">
        <Reveal>
          <SectionHeading>🚀 Core competencies & expertise</SectionHeading>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 120}>
              <div className="h-full rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)]">
                <h3 className="font-medium">
                  <span className="mr-2" aria-hidden>
                    {group.icon}
                  </span>
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="text-accent" aria-hidden>
                        ▸
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="scroll-mt-24 py-16">
        <Reveal>
          <SectionHeading>🛠️ Tools & technologies</SectionHeading>
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          {toolCategories.map((row, i) => (
            <Reveal key={row.category} delay={i * 50}>
              <div
                className={`grid gap-2 px-5 py-3.5 transition-colors hover:bg-accent-soft sm:grid-cols-[180px_1fr] ${
                  i % 2 === 0 ? "bg-surface" : "bg-background"
                }`}
              >
                <p className="font-mono text-sm text-accent">{row.category}</p>
                <p className="text-sm text-muted">{row.tools}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-12 font-medium">🧪 Testing types covered</h3>
        </Reveal>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {testingTypes.map((type, i) => (
            <Reveal key={type} delay={i * 60}>
              <li className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent">
                {type}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 py-16">
        <Reveal>
          <SectionHeading>🏢 Professional experience</SectionHeading>
        </Reveal>
        <div className="mt-8 space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 100}>
              <div className="relative border-l-2 border-border pl-6 transition-colors duration-300 hover:border-accent">
                <span
                  className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
                  aria-hidden
                />
                <h3 className="font-semibold">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {job.period} · {job.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="text-accent" aria-hidden>
                        ▸
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-16">
        <Reveal>
          <SectionHeading>🏆 Key projects & contributions</SectionHeading>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 120}>
              <article className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">{project.name}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      className="shrink-0 text-sm text-accent hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View ↗
                    </a>
                  )}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="scroll-mt-24 py-16">
        <Reveal>
          <SectionHeading>📚 Certifications & learning</SectionHeading>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.text} delay={i * 80}>
              <li className="flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 text-sm text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50">
                <span className="text-xl" aria-hidden>
                  {cert.icon}
                </span>
                {cert.text}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-20 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight">
            📬 Let&apos;s <span className="gradient-text">connect</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
            Whether you have a role in mind, a question about test automation, or just want to
            say hi — my inbox is open.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <a
            href={`mailto:${profile.email}`}
            className="animate-float mt-10 inline-block rounded-md border border-accent px-7 py-3.5 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
          >
            {profile.email}
          </a>
        </Reveal>
        <Reveal delay={360}>
          <p className="mt-10 font-mono text-xs text-muted">
            ⚡ Empowering Software Quality with Automation, AI &amp; Precision!
          </p>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        <div className="mb-3 flex justify-center gap-6">
          <a href={profile.github} className="transition-colors hover:text-accent" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} className="transition-colors hover:text-accent" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.twitter} className="transition-colors hover:text-accent" target="_blank" rel="noreferrer">
            X / Twitter
          </a>
        </div>
        <p>
          {profile.name} · {profile.location}
        </p>
      </footer>
    </div>
  );
}
