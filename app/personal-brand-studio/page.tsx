import type { Metadata } from "next";
import AzaFolioLanding from "../components/azafolio/AzaFolioLanding";

const TITLE = "Personal Brand Studio — Premium personal-brand websites, built for you";
const DESCRIPTION =
  "Want your own personal brand on a website that shows the whole you? We build bespoke, animated, premium personal websites for doctors, consultants, founders, and executives — design, copywriting, and your domain, done for you.";
const URL = "https://azantor.xyz/personal-brand-studio";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Personal Brand Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PersonalBrandStudioPage() {
  return <AzaFolioLanding />;
}
