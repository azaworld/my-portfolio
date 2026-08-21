import Link from "next/link";
import CredentialShowcase from "../credential/CredentialShowcase";
import Reveal from "../fx/Reveal";

export default function VerifiedCredential() {
  return (
    <section id="verified" className="scroll-mt-28 py-14 text-center sm:py-20">
      <Reveal>
        <CredentialShowcase />
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted">
          Open the{" "}
          <Link href="/verified" className="text-cyan hover:underline">
            full verification page
          </Link>{" "}
          for a shareable link.
        </p>
      </Reveal>
    </section>
  );
}
