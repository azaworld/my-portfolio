"use client";

import Image from "next/image";
import idCard from "../../assets/credential/id-card-full.webp";

// Exact reproduction of the official Freelancer ID card (freelancers.gov.bd).
// Date of birth is blanked out for privacy — everything else is unmodified.
export default function CredentialCard() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10">
      <Image src={idCard} alt="Arifuzzaman Antor's Freelancer ID card, issued by ICT Division, Bangladesh" className="h-auto w-full" priority />
    </div>
  );
}
