"use client";

import Image from "next/image";
import photo from "../../assets/credential/freelancer-photo.jpg";
import qr from "../../assets/credential/verify-qr.png";
import ictLogo from "../../assets/credential/ict-division-logo.png";
import doictLogo from "../../assets/credential/doict-logo.png";
import fbLogo from "../../assets/credential/freelancers-bd-logo.png";

export const CARD = {
  name: "Arifuzzaman Antor",
  title: "Technical Project Manager",
  freelancerId: "F126725657408",
  issueDate: "18 Aug, 2026",
  expireDate: "17 Aug, 2029",
  district: "Netrokona",
  issuedBy: "Department of ICT, ICT Division",
  verifyUrl: "https://www.freelancers.gov.bd/verify",
};

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/[0.07] py-2.5 text-sm sm:justify-start sm:gap-3">
      <span className="w-32 shrink-0 text-xs uppercase tracking-wider text-muted">{label}</span>
      <span className="font-medium text-text">{value}</span>
    </div>
  );
}

export default function CredentialCard() {
  return (
    <div className="glass glow-border relative overflow-hidden rounded-3xl p-6 sm:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" aria-hidden />

      <div className="relative grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
        <div className="mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-2xl ring-2 ring-violet/60 sm:mx-0">
          <Image src={photo} alt="Portrait of Arifuzzaman Antor" className="h-full w-full object-cover" />
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold">{CARD.name}</h2>
          <p className="mt-0.5 font-medium text-cyan">{CARD.title}</p>

          <div className="mt-5">
            <Field label="Freelancer ID" value={CARD.freelancerId} />
            <Field label="Issue Date" value={CARD.issueDate} />
            <Field label="Expire Date" value={CARD.expireDate} />
            <Field label="District" value={CARD.district} />
            <Field label="Issued By" value={CARD.issuedBy} />
          </div>
        </div>
      </div>

      {/* Footer: logos + QR */}
      <div className="relative mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] pt-6 sm:flex-row">
        <div className="flex flex-wrap items-end justify-center gap-4 sm:justify-start">
          <Image src={ictLogo} alt="ICT Division" className="h-8 w-auto rounded" />
          <Image src={doictLogo} alt="DoICT" className="h-16 w-auto rounded" />
          <Image src={fbLogo} alt="Freelancers Bangladesh" className="h-6 w-auto rounded" />
        </div>
        <div className="flex items-center gap-3">
          <Image src={qr} alt="Scan to verify this credential" className="h-20 w-20 rounded-lg bg-white p-1" />
          <div className="text-xs leading-relaxed text-muted">
            <p>Scan to verify, or visit</p>
            <a href={CARD.verifyUrl} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
              freelancers.gov.bd/verify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
