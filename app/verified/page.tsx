import type { Metadata } from "next";
import VerifiedClient from "./VerifiedClient";

const TITLE = "Verified Freelancer — Arifuzzaman Antor";
const DESCRIPTION =
  "Government-registered Freelancer ID, issued by the Department of ICT (ICT Division, Bangladesh) via freelancers.gov.bd — Arifuzzaman Antor, Technical Project Manager.";
const URL = "https://azantor.xyz/verified";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Antor.os",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function VerifiedPage() {
  return <VerifiedClient />;
}
