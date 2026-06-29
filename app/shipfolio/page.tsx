import type { Metadata } from "next";
import ShipFolioLanding from "../components/shipfolio/ShipFolioLanding";

export const metadata: Metadata = {
  title: "ShipFolio — Premium personal-brand sites, built for you",
  description:
    "ShipFolio builds bespoke, animated, premium personal-brand websites for engineers, founders, and executives. Custom domain, copywriting, and a standout interactive experience — shipped fast. Order yours.",
};

export default function ShipFolioPage() {
  return <ShipFolioLanding />;
}
