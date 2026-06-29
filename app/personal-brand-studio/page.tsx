import type { Metadata } from "next";
import AzaFolioLanding from "../components/azafolio/AzaFolioLanding";

export const metadata: Metadata = {
  title: "Personal Brand Studio — Premium personal-brand websites, built for you",
  description:
    "Personal Brand Studio builds bespoke, animated, premium personal-brand websites for doctors, consultants, founders, and executives. Custom domain, professional copywriting, and a standout interactive experience — shipped fast. Order yours.",
};

export default function PersonalBrandStudioPage() {
  return <AzaFolioLanding />;
}
