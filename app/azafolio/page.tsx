import type { Metadata } from "next";
import AzaFolioLanding from "../components/azafolio/AzaFolioLanding";

export const metadata: Metadata = {
  title: "AZA Folio — Premium personal-brand sites, built for you",
  description:
    "AZA Folio builds bespoke, animated, premium personal-brand websites for engineers, founders, and executives. Custom domain, copywriting, and a standout interactive experience — shipped fast. Order yours.",
};

export default function AzaFolioPage() {
  return <AzaFolioLanding />;
}
