import CredentialCard from "./CredentialCard";

const VERIFY_URL = "https://www.freelancers.gov.bd/verify";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}

export default function CredentialShowcase() {
  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-xl shadow-lg shadow-violet/30" aria-hidden>
          🎖️
        </span>
        <div className="text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Verified Achievement</p>
          <h2 className="font-display text-xl font-bold sm:text-2xl">Government-issued Freelancer ID</h2>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        <CredentialCard />
      </div>

      <div className="glass mx-auto mt-4 flex max-w-3xl items-center gap-2.5 rounded-xl px-4 py-3 text-xs leading-relaxed text-muted">
        <ShieldIcon />
        This public preview masks the Freelancer ID number, date of birth, and QR code to protect personal information.
      </div>

      <div className="glass glow-border mx-auto mt-6 max-w-3xl rounded-2xl p-6 text-left sm:p-8">
        <h3 className="font-display text-lg font-bold">Credential details</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Issued By</p>
            <p className="mt-1 text-sm font-medium">Department of ICT, ICT Division, Bangladesh</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Professional Title</p>
            <p className="mt-1 text-sm font-medium">Technical Project Manager</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Validity</p>
            <p className="mt-1 text-sm font-medium">August 2026 – August 2029</p>
          </div>
        </div>
        <a
          href={VERIFY_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:bg-right hover:shadow-violet/50 sm:w-auto sm:justify-start"
        >
          Open official verification portal
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </div>
    </div>
  );
}
