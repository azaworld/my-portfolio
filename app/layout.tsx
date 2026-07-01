import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { profile } from "./content";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE = "https://azantor.xyz";
const TITLE = "Arifuzzaman “Antor” — Founder, Technical Project Manager & Sr. Software Engineer";
const DESCRIPTION =
  "Arifuzzaman Antor (Antor / Azantor) — Founder & CEO of AZAI Labs, Technical Project Manager at Platformz, Sr. Software Engineer at Kintsugi, podcaster and AI tech instructor from Dhaka, Bangladesh. Explore the interactive portfolio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Arifuzzaman Antor",
  authors: [{ name: "Arifuzzaman Antor", url: SITE }],
  creator: "Arifuzzaman Antor",
  keywords: [
    "Arifuzzaman Antor", "Antor", "Azantor", "Arifuz Antor", "Arifuz Zaman Antor",
    "Arifuzzaman", "Arifuz", "AZA", "AZAI Labs", "AZADEMY", "azantor",
    "Technical Project Manager", "Sr. Software Engineer", "QA Engineer",
    "Founder", "Dhaka Bangladesh", "portfolio",
  ],
  alternates: { canonical: SITE },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Arifuzzaman Antor",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Arifuzzaman “Antor” — portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@azantor1",
    images: ["/og.png"],
  },
};

// Person structured data — the strongest signal for name searches (and can
// power a Google knowledge panel). Name variants live in `alternateName`.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arifuzzaman Antor",
  alternateName: ["Antor", "Azantor", "Arifuz Antor", "Arifuz Zaman Antor", "Arifuzzaman", "AZA"],
  url: SITE,
  image: `${SITE}/icon.svg`,
  jobTitle: "Founder & CEO · Technical Project Manager · Sr. Software Engineer",
  worksFor: [
    { "@type": "Organization", name: "AZAI Labs" },
    { "@type": "Organization", name: "Platformz" },
    { "@type": "Organization", name: "Kintsugi" },
  ],
  homeLocation: { "@type": "Place", name: "Dhaka, Bangladesh" },
  sameAs: [
    profile.linkedin, profile.github, profile.twitter, profile.facebook,
    profile.youtube, profile.podcast, profile.azailabs, profile.azademy,
    profile.upwork, profile.listen2aza,
  ].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <div className="aurora-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
