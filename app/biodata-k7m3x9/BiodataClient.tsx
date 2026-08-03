"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import portrait from "../assets/arifuz.jpg";

// Simple client-side passcode gate — appropriate for a privately shared link
// on a static host (share the passcode along with the URL).
const PASSCODE = "antor1997";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-white/[0.07] py-3 sm:grid-cols-[180px_1fr] sm:gap-4">
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
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  // Remember unlock for the session
  useEffect(() => {
    if (sessionStorage.getItem("biodata-unlocked") === "1") setUnlocked(true);
  }, []);

  const tryUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === PASSCODE) {
      sessionStorage.setItem("biodata-unlocked", "1");
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="glass w-full max-w-sm rounded-2xl p-8 text-center">
          <p className="text-3xl" aria-hidden>🔒</p>
          <h1 className="font-display mt-3 text-xl font-bold">Private page</h1>
          <p className="mt-2 text-sm text-muted">
            This page is shared privately. Enter the passcode you received with the link.
          </p>
          <form onSubmit={tryUnlock} className="mt-5 space-y-3">
            <input
              type="password"
              value={code}
              onChange={(e) => { setCode(e.target.value); setError(false); }}
              placeholder="Passcode"
              className="glass w-full rounded-xl px-4 py-3 text-center text-sm outline-none focus:border-cyan"
              autoFocus
            />
            <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-violet to-cyan px-4 py-3 text-sm font-semibold text-white">
              Unlock
            </button>
            {error && <p className="text-xs text-magenta">Incorrect passcode.</p>}
          </form>
        </div>
      </main>
    );
  }

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
      </header>

      <Section title="Personal Information">
        <Row label="Name">
          <a href="https://www.facebook.com/arifuzantor/" target="_blank" rel="noreferrer" className="text-cyan hover:underline">
            Arifuz Zaman Antor
          </a>
        </Row>
        <Row label="Date of Birth">June 20, 1997</Row>
        <Row label="Height">5 feet 8 inches</Row>
        <Row label="Nationality">Bangladeshi</Row>
        <Row label="Religion">Muslim</Row>
        <Row label="Profession">
          Founder &amp; CEO, AZAI Labs · Technical Project Manager, Platformz · Sr. Software Engineer, Kintsugi
        </Row>
        <Row label="Email">
          <a href="mailto:arifuzantor@gmail.com" className="text-cyan hover:underline">arifuzantor@gmail.com</a>
        </Row>
      </Section>

      <Section title="Family Information">
        <Row label="Father">
          Late Sheikh Abdus Sattar <span className="text-muted">(Business: Raw Agricultural Products)</span>
        </Row>
        <Row label="Mother">
          Sheikh Kohinoor Akter Talukdar <span className="text-muted">(Housewife)</span>
        </Row>
        <Row label="Family Background">Respectable and educated Muslim family</Row>
      </Section>

      <Section title="Siblings">
        <Row label="Brother">
          Sharifuz Zaman <span className="text-muted">(B.Sc. in CSE — 3rd Year, Sonargaon University)</span>
        </Row>
        <Row label="Sister">
          Suborna Asha <span className="text-muted">(B.Sc. in CSE — 2nd Year, Northern University Bangladesh)</span>
        </Row>
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
