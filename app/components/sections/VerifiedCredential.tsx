import Link from "next/link";
import CredentialCard from "../credential/CredentialCard";
import Reveal from "../fx/Reveal";

export default function VerifiedCredential() {
  return (
    <section id="verified" className="scroll-mt-28 py-14 sm:py-20">
      <Reveal>
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-cyan">Credential</p>
        <h2 className="font-display mt-3 text-center text-2xl font-bold sm:text-3xl">
          <span className="text-aurora">Government-Registered</span> Freelancer
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-muted">
          Issued by the Department of ICT (ICT Division, Bangladesh) via freelancers.gov.bd. Scan the QR
          code or open the{" "}
          <Link href="/verified" className="text-cyan hover:underline">
            full verification page
          </Link>
          .
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto mt-8 max-w-3xl">
          <CredentialCard />
        </div>
      </Reveal>
    </section>
  );
}
