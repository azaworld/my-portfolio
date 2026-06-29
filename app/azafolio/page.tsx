"use client";

import { useEffect } from "react";

// Old route — kept as a redirect so previously shared links don't break.
export default function AzaFolioRedirect() {
  useEffect(() => {
    window.location.replace("/personal-brand-studio");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center">
      <p className="text-sm text-muted">Redirecting to Personal Brand Studio…</p>
      <a href="/personal-brand-studio" className="text-cyan hover:underline">
        Continue to Personal Brand Studio →
      </a>
    </main>
  );
}
