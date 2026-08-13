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
const TITLE = "Arifuzzaman “Antor” — Founder & CEO, Technical Project Manager & QA Leader";
const DESCRIPTION =
  "Arifuzzaman Antor (Arifuz Zaman Antor / Azantor / azaworld) — Founder & CEO of AZAI Labs, Technical Project Manager at Platformz, QA & Delivery Leader, SDET, podcaster and AI tech instructor from Dhaka, Bangladesh. Explore the interactive portfolio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Arifuzzaman Antor",
  authors: [{ name: "Arifuzzaman Antor", url: SITE }],
  creator: "Arifuzzaman Antor",
  keywords: [
    "Arifuzzaman Antor", "Antor", "Azantor", "Arifuz Antor", "Arifuz Zaman Antor",
    "Arifuzzaman", "Arifuz", "AZA", "azaworld", "AZAI Labs", "AZADEMY", "azantor",
    "AZA Execution Podcast", "Personal Brand Studio", "Listen2AZA",
    "Technical Project Manager", "TPM", "Sr. Software Engineer", "SDET",
    "QA Engineer", "QA Lead", "Software QA", "Test Automation", "Playwright",
    "Cypress", "Appium", "k6 load testing", "AI agents", "Founder", "CEO",
    "Dhaka Bangladesh", "Bangladesh QA engineer", "remote QA engineer", "portfolio",
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
  alternateName: [
    "Antor", "Azantor", "Arifuz Antor", "Arifuz Zaman Antor",
    "Arifuzzaman", "AZA", "azaworld",
  ],
  url: SITE,
  image: `${SITE}/og.png`,
  jobTitle: "Founder & CEO · Technical Project Manager · QA & Delivery Leader",
  description: DESCRIPTION,
  worksFor: [
    { "@type": "Organization", name: "AZAI Labs", url: "https://azailabs.dev" },
    { "@type": "Organization", name: "Platformz", url: "https://platformz.us" },
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Shahjalal University of Science and Technology" },
    { "@type": "Organization", name: "Kintsugi" },
    { "@type": "Organization", name: "Mastercard" },
    { "@type": "Organization", name: "Kinetik" },
    { "@type": "Organization", name: "Grameenphone" },
  ],
  knowsAbout: [
    "Software QA", "Test Automation", "Playwright", "Cypress", "Appium",
    "Performance Testing", "k6", "Security Testing", "Technical Project Management",
    "AI Agents", "Machine Learning", "EDI", "Magento", "Next.js",
  ],
  homeLocation: { "@type": "Place", name: "Dhaka, Bangladesh" },
  email: `mailto:${profile.email}`,
  sameAs: [
    profile.linkedin, profile.github, profile.twitter, profile.facebook,
    profile.youtube, profile.podcast, profile.azailabs, profile.azademy,
    profile.upwork, profile.listen2aza,
  ].filter(Boolean),
};

// ProfilePage schema — tells search engines this site IS the person's profile.
const profilePageLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: { "@id": `${SITE}/#person` },
  about: { "@type": "Person", name: "Arifuzzaman Antor", url: SITE },
  url: SITE,
  name: TITLE,
  description: DESCRIPTION,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd) }}
        />
        <div className="aurora-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
