"use client";

import Link from "next/link";
import CredentialCard from "../components/credential/CredentialCard";
import { profile } from "../content";

export default function VerifiedClient() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-14 sm:py-20">
      <header className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Credential</p>
        <h1 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
          <span className="text-aurora">Government-Registered</span> Freelancer
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          Issued by the Department of ICT (ICT Division, Government of Bangladesh) through{" "}
          <a href="https://www.freelancers.gov.bd" target="_blank" rel="noreferrer" className="text-cyan hover:underline">
            freelancers.gov.bd
          </a>
          . Scan the QR code below or use the verify link to confirm this credential independently.
        </p>
      </header>

      <div className="mt-10">
        <CredentialCard />
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/#contact"
          className="inline-block rounded-xl bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:bg-right hover:shadow-violet/50"
        >
          Hire Me
        </Link>
        <a
          href={profile.upwork}
          target="_blank"
          rel="noreferrer"
          className="glass glow-border inline-block rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors hover:text-cyan"
        >
          See my Upwork profile
        </a>
      </div>

      <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-muted">
        This page mirrors the details on the official Freelancer ID card. Date of birth is intentionally
        omitted here for privacy — the full card is verifiable via the QR code above.
      </p>
    </main>
  );
}
