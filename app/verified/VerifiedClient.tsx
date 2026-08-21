"use client";

import Link from "next/link";
import CredentialShowcase from "../components/credential/CredentialShowcase";
import { profile } from "../content";

export default function VerifiedClient() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-14 text-center sm:py-20">
      <CredentialShowcase />

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/#contact"
          className="glass glow-border inline-block rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors hover:text-cyan"
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
    </main>
  );
}
