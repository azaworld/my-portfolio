"use client";

import Image from "next/image";
import portrait from "../assets/arifuz.jpg";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-white/[0.07] py-3 sm:grid-cols-[190px_1fr] sm:gap-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="glass mt-6 rounded-2xl p-6 sm:p-8">
      <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

export default function BiodataClient() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-14">
      {/* Header */}
      <header className="text-center">
        <div className="portrait-duotone mx-auto h-36 w-36 !rounded-full ring-2 ring-violet/60">
          <Image src={portrait} alt="Arifuz Zaman Antor" priority className="h-full w-full object-cover" />
        </div>
        <h1 className="font-display mt-5 text-3xl font-bold">
          Arifuz Zaman <span className="text-aurora">Antor</span>
        </h1>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-muted">Biodata</p>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
          Founder, engineer, and delivery leader from a respectable Muslim family — building companies,
          teaching technology, and running a charitable foundation in honor of his father.
        </p>
      </header>

      <Section title="Personal Information">
        <Row label="Name">
          <a href="https://www.facebook.com/arifuzantor/" target="_blank" rel="noreferrer" className="text-cyan hover:underline">
            Arifuz Zaman Antor
          </a>
        </Row>
        <Row label="Date of Birth">June 20, 1997</Row>
        <Row label="Height">5 feet 8 inches</Row>
        <Row label="Marital Status">Single (never married)</Row>
        <Row label="Nationality">Bangladeshi</Row>
        <Row label="Religion">Islam</Row>
        <Row label="Home District">Netrokona</Row>
        <Row label="Present City">Dhaka, Bangladesh</Row>
      </Section>

      <Section title="Profession & Career">
        <Row label="Current Roles">
          Founder &amp; CEO — <a href="https://azailabs.dev" target="_blank" rel="noreferrer" className="text-cyan hover:underline">AZAI Labs</a> (AI products &amp; services) ·
          Technical Project Manager — <a href="https://platformz.us" target="_blank" rel="noreferrer" className="text-cyan hover:underline">Platformz</a> (US) ·
          Sr. Software Engineer — Kintsugi (San Francisco, remote)
        </Row>
        <Row label="Experience">
          6+ years across software engineering, QA &amp; delivery leadership — including Mastercard,
          Grameenphone (MyGP), Kinetik (New York), and global insurance clients. Leads a 30+ person
          cross-functional team at Platformz.
        </Row>
        <Row label="Freelance Record">
          Upwork <span className="text-amber">Top Rated</span> — 23 completed jobs, every one rated ★5.0
        </Row>
        <Row label="Ventures Founded">
          <a href="https://azailabs.dev" target="_blank" rel="noreferrer" className="text-cyan hover:underline">AZAI Labs</a> ·{" "}
          <a href="https://azademy.org" target="_blank" rel="noreferrer" className="text-cyan hover:underline">AZADEMY</a> (tech academy) ·{" "}
          <a href="https://azapodcast.com" target="_blank" rel="noreferrer" className="text-cyan hover:underline">AZA Execution Podcast</a> ·{" "}
          Listen2AZA (audiobooks)
        </Row>
        <Row label="Community & Faith">
          Founder &amp; runner of the{" "}
          <a href="https://ssasf.vercel.app" target="_blank" rel="noreferrer" className="text-cyan hover:underline">
            Silent Sacrifice Abdus Sattar Foundation
          </a>{" "}
          in honor of his father — scholarships, free mentorship, Quran education (60+ students in year one),
          support for struggling families &amp; cancer patients.
        </Row>
      </Section>

      <Section title="Family Information">
        <Row label="Father">
          Late Sheikh Abdus Sattar <span className="text-muted">(Business: Raw Agricultural Products)</span>
        </Row>
        <Row label="Mother">
          Sheikh Kohinoor Akter Talukdar <span className="text-muted">(Housewife)</span>
        </Row>
        <Row label="Brother">
          Sharifuz Zaman <span className="text-muted">(B.Sc. in CSE — 3rd Year, Sonargaon University)</span>
        </Row>
        <Row label="Sister">
          Suborna Asha <span className="text-muted">(B.Sc. in CSE — 2nd Year, Northern University Bangladesh)</span>
        </Row>
        <Row label="Family Background">Respectable and educated Muslim family</Row>
      </Section>

      <Section title="Educational Background">
        <Row label="B.Sc. Engg. (CSE)">
          <a href="https://www.sust.edu/" target="_blank" rel="noreferrer" className="text-cyan hover:underline">
            Shahjalal University of Science and Technology (SUST)
          </a>{" "}
          <span className="text-muted">· 2017 – 2020</span>
        </Row>
        <Row label="HSC">
          Shahid Syed Nazrul Islam College, Mymensingh <span className="text-muted">· 2016 · GPA 5.00 (Golden A+)</span>
        </Row>
        <Row label="SSC">
          B.M. High School, Netrokona <span className="text-muted">· 2014 · GPA 5.00 (Golden A+)</span>
        </Row>
        <Row label="JSC">
          B.M. High School, Netrokona <span className="text-muted">· 2012 · GPA 5.00 · Govt. Talent Pool Scholarship</span>
        </Row>
        <Row label="PSC">
          Kaitail Government Primary School, Netrokona <span className="text-muted">· 2009 · Govt. Talent Pool Scholarship</span>
        </Row>
        <Row label="Certifications">
          Machine Learning Specialization — Coursera (2020) · Programming for Everybody (Python) — Coursera (2020)
        </Row>
      </Section>

      <Section title="Contact & Links">
        <Row label="Email">
          <a href="mailto:arifuzantor@gmail.com" className="text-cyan hover:underline">arifuzantor@gmail.com</a>
        </Row>
        <Row label="WhatsApp">
          <a href="https://wa.me/8801580497264" target="_blank" rel="noreferrer" className="text-cyan hover:underline">+880 1580 497264</a>
        </Row>
        <Row label="Portfolio">
          <a href="https://azantor.xyz" className="text-cyan hover:underline">azantor.xyz</a>
        </Row>
        <Row label="LinkedIn">
          <a href="https://linkedin.com/in/azantor" target="_blank" rel="noreferrer" className="text-cyan hover:underline">linkedin.com/in/azantor</a>
        </Row>
        <Row label="Résumé">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-cyan hover:underline">azantor.xyz/resume.pdf</a>
        </Row>
      </Section>

      <footer className="mt-10 text-center text-xs text-muted">
        <p>Shared privately · please do not redistribute.</p>
        <p className="mt-1">
          <a href="https://azantor.xyz" className="text-cyan hover:underline">azantor.xyz</a>
        </p>
      </footer>
    </main>
  );
}
