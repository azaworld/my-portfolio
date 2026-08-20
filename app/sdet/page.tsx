import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "../content";

const TITLE = "SDET & QA Automation CV — Arifuzzaman Antor";
const DESCRIPTION =
  "SDET and Senior QA Automation CV for Arifuzzaman Antor — Playwright, TypeScript, API, mobile, performance, security, CI/CD and reliability engineering.";
const URL = "https://azantor.xyz/sdet";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Arifuzzaman Antor",
    type: "profile",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

const capabilities = [
  ["Automation", "Playwright · TypeScript · Selenium · Cypress · Appium"],
  ["API & Integration", "Postman · REST Assured · GraphQL · AWS APIs"],
  ["Performance", "k6 · JMeter · Locust · LoadRunner · Grafana"],
  ["Security", "OWASP ZAP · Burp Suite · Kali Linux"],
  ["CI/CD & Cloud", "Docker · AWS · Terraform · Jenkins · GitHub Actions"],
  ["Quality Leadership", "Test strategy · Release gates · Risk-based QA · Mentoring"],
];

export default function SdetCvPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <nav className="flex flex-wrap items-center justify-between gap-3" aria-label="SDET CV navigation">
          <Link href="/" className="font-display text-sm font-bold">
            <span className="text-aurora">ANTOR</span><span className="text-muted">.os</span>
          </Link>
          <div className="flex flex-wrap gap-2">
            <a
              href="/resume.pdf"
              download="Arifuzzaman_Antor_SDET_QA_Automation_CV.pdf"
              className="rounded-lg border border-cyan/40 bg-cyan/10 px-4 py-2 text-xs font-bold text-cyan transition-colors hover:bg-cyan/20"
            >
              ↓ Download PDF
            </a>
            <Link
              href="/#contact"
              className="rounded-lg bg-gradient-to-r from-violet via-magenta to-amber px-4 py-2 text-xs font-bold text-white"
            >
              Hire Me
            </Link>
          </div>
        </nav>

        <header className="glass glow-border relative mt-8 overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" aria-hidden />
          <div className="relative max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">specialized cv · sdet / qa automation</p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              Arifuzzaman <span className="text-aurora">“Antor”</span>
            </h1>
            <p className="mt-3 text-lg font-semibold text-text sm:text-xl">
              Senior SDET · QA Automation & Reliability Engineer · QA Consultant
            </p>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">
              Quality engineer and delivery leader building production-grade automation across web, mobile, API,
              performance, and security. I turn testing into an engineering system: scalable frameworks, CI quality
              gates, actionable observability, and release confidence.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 text-xs">
              <a href={`mailto:${profile.email}`} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-muted hover:text-cyan">
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-muted hover:text-cyan">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-muted hover:text-cyan">
                GitHub
              </a>
              <a href={profile.upwork} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-muted hover:text-cyan">
                Upwork · Top Rated
              </a>
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="SDET capabilities">
          {capabilities.map(([name, tools]) => (
            <article key={name} className="glass rounded-2xl p-5">
              <h2 className="font-display font-bold text-cyan">{name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tools}</p>
            </article>
          ))}
        </section>

        <section className="glass mt-6 overflow-hidden rounded-3xl p-3 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-4">
            <div>
              <h2 className="font-display text-xl font-bold">SDET & QA Automation CV</h2>
              <p className="mt-1 text-xs text-muted">Preview below or download the PDF for sharing and applications.</p>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-sm font-semibold text-cyan hover:underline">
              Open PDF in a new tab ↗
            </a>
          </div>
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="hidden h-[900px] w-full rounded-2xl bg-white md:block"
            aria-label="Arifuzzaman Antor SDET and QA Automation CV PDF"
          >
            <p className="p-6 text-muted">Your browser cannot preview the PDF. Use the download button above.</p>
          </object>
          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6 text-center md:hidden">
            <p className="text-sm text-muted">For the best mobile experience, open or download the CV as a PDF.</p>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-xl bg-cyan px-5 py-3 text-sm font-bold text-bg">
              Open SDET CV
            </a>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-muted">
          <p>© {new Date().getFullYear()} Arifuzzaman Antor · SDET & QA Automation CV</p>
          <Link href="/" className="mt-2 inline-block text-cyan hover:underline">Explore the full portfolio →</Link>
        </footer>
      </div>
    </main>
  );
}
