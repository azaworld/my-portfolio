// ---------------------------------------------------------------------------
// Edit everything in this block — it's all the content on the site.
// ---------------------------------------------------------------------------

const profile = {
  name: "Arifuz Antor",
  role: "QA Automation Engineer",
  tagline:
    "I build test automation frameworks that catch bugs before users do — fast, reliable, and wired into CI/CD.",
  email: "arifuz.antor@trykintsugi.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/azaworld",
  linkedin: "https://www.linkedin.com/in/your-username",
  resumeUrl: "/resume.pdf",
};

const about = [
  `I'm a QA Automation Engineer who treats test code like production code. I design
   end-to-end frameworks from scratch — page objects, fixtures, data layers, reporting —
   and plug them into pipelines so every commit gets verified automatically.`,
  `My day-to-day toolkit is Playwright with TypeScript, running cross-browser suites on
   BrowserStack, publishing Allure reports, and keeping Bitbucket Pipelines green. I also
   run performance and load tests so releases hold up under real traffic, not just happy paths.`,
];

const skillGroups = [
  {
    title: "Test Automation",
    skills: ["Playwright", "TypeScript", "Page Object Model", "API Testing", "Cross-browser Testing"],
  },
  {
    title: "Infrastructure & CI/CD",
    skills: ["Bitbucket Pipelines", "GitHub Actions", "BrowserStack", "Docker", "Git"],
  },
  {
    title: "Quality & Reporting",
    skills: ["Allure Reports", "Load / Performance Testing", "Test Strategy", "Bug Triage", "Regression Suites"],
  },
];

const projects = [
  {
    name: "FUR4 E2E Automation Framework",
    description:
      "Full Playwright + TypeScript test framework built from the ground up: page-object architecture, config-driven environments, data-driven test cases, and Allure reporting baked in.",
    tags: ["Playwright", "TypeScript", "Allure", "POM"],
    link: "",
  },
  {
    name: "Cross-browser CI Pipeline",
    description:
      "Wired the automation suite into Bitbucket Pipelines with BrowserStack integration, so every push runs the regression suite across real browsers and devices with zero manual steps.",
    tags: ["Bitbucket Pipelines", "BrowserStack", "CI/CD"],
    link: "",
  },
  {
    name: "Performance & Load Testing Suite",
    description:
      "Load-testing setup that simulates real traffic patterns against staging, with performance reports that flag regressions in response times before they ship.",
    tags: ["Load Testing", "Performance", "Reporting"],
    link: "",
  },
];

const experience = [
  {
    role: "QA Automation Engineer",
    company: "Kintsugi",
    period: "2024 — Present",
    points: [
      "Own end-to-end test automation: framework design, test development, and CI integration.",
      "Built cross-browser regression suites running on BrowserStack via Bitbucket Pipelines.",
      "Introduced Allure reporting so the whole team can see test health at a glance.",
    ],
  },
];

// ---------------------------------------------------------------------------

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
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
    <div className="mx-auto w-full max-w-4xl px-6">
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
      <section className="flex min-h-[70vh] flex-col justify-center py-20">
        <p className="font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-2 text-2xl font-semibold text-muted sm:text-4xl">{profile.role}</p>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            View resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-16">
        <SectionHeading>About me</SectionHeading>
        <div className="mt-6 space-y-4 leading-relaxed text-muted">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 py-16">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-muted">
                    <span className="text-accent" aria-hidden>
                      ▸
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-16">
        <SectionHeading>Projects</SectionHeading>
        <div className="mt-8 space-y-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    className="text-sm text-accent hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View ↗
                  </a>
                )}
              </div>
              <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
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
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 py-16">
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-8 space-y-8">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="border-l-2 border-border pl-6">
              <h3 className="font-semibold">
                {job.role} <span className="text-accent">@ {job.company}</span>
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{job.period}</p>
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
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
          Whether you have a role in mind, a question about test automation, or just want to say
          hi — my inbox is open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-md border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
        >
          {profile.email}
        </a>
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
        </div>
        <p>
          {profile.name} · {profile.location}
        </p>
      </footer>
    </div>
  );
}
