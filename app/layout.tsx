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
  "Arifuzzaman Antor (Arifuz Zaman Antor / Azantor / azaworld) — Founder & CEO of AZAI Labs, Co-Founder & CTO of Upward, Technical Project Manager at Platformz, QA & Delivery Leader, SDET, podcaster and AI tech instructor from Dhaka, Bangladesh. Explore the interactive portfolio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Arifuzzaman Antor",
  authors: [{ name: "Arifuzzaman Antor", url: SITE }],
  creator: "Arifuzzaman Antor",
  keywords: [
    "Arifuzzaman Antor", "Antor", "Azantor", "Arifuz Antor", "Arifuz Zaman Antor",
    "Arifuzzaman", "Arifuz", "AZA", "azaworld", "AZAI Labs", "AZADEMY", "azantor", "Upward", "upwardbd",
    "AZA Execution Podcast", "Personal Brand Studio", "Listen2AZA",
    "Technical Project Manager", "TPM", "Sr. Software Engineer", "SDET",
    "QA Engineer", "QA Lead", "Software QA", "Test Automation", "Playwright",
    "Cypress", "Appium", "k6 load testing", "AI agents", "Founder", "CEO",
    "Dhaka Bangladesh", "Bangladesh QA engineer", "remote QA engineer", "portfolio",
  ],
  alternates: { canonical: SITE },
  verification: { google: "4_QPKf66tjxOZWZ0jsCfwbT4nyJNhhI1iXMGUeYVHC0" },
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
  jobTitle: "Founder & CEO · Co-Founder & CTO · Technical Project Manager · QA & Delivery Leader",
  hasOccupation: [
    { "@type": "Occupation", name: "Co-Founder & CTO" },
    { "@type": "Occupation", name: "Technical Project Manager" },
    { "@type": "Occupation", name: "QA Lead / SDET" },
    { "@type": "Occupation", name: "Founder & CEO" },
    { "@type": "Occupation", name: "Podcast Host" },
    { "@type": "Occupation", name: "AI & Tech Instructor" },
  ],
  description: DESCRIPTION,
  worksFor: [
    { "@type": "Organization", name: "AZAI Labs", url: "https://azailabs.dev" },
    { "@type": "Organization", name: "Upward", url: "https://www.upwardbd.com" },
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

// WebSite schema — names the site itself for brand queries (azantor, antor.os).
const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arifuzzaman Antor — azantor.xyz",
  alternateName: ["azantor", "antor.os", "Antor portfolio"],
  url: SITE,
  author: { "@type": "Person", name: "Arifuzzaman Antor", url: SITE },
};

// Podcast schema — ties "AZA Execution Podcast" searches to him and this site.
const podcastLd = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "AZA Execution Podcast",
  alternateName: ["The AZA Execution Show", "AZA Podcast"],
  url: "https://azapodcast.com",
  description:
    "Ideas are cheap. Execution is everything. Long-form conversations with operators, founders, builders, scientists, and artists on how world-class work actually gets done — hosted by Arifuzzaman Antor. Weekly, video & audio, Bangla & English.",
  inLanguage: ["en", "bn"],
  author: { "@type": "Person", name: "Arifuzzaman Antor", url: SITE },
  actor: { "@type": "Person", name: "Arifuzzaman Antor", url: SITE },
  sameAs: ["https://www.youtube.com/@azapod", "https://www.facebook.com/azapod"],
};

// Organizations he founded — connects "AZAI Labs founder", "AZADEMY founder",
// and "Personal Brand Studio" searches back to him.
const orgsLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Upward",
    url: "https://www.upwardbd.com",
    slogan: "One growth partner. Not ten vendors.",
    description: "AI-powered business-growth partner — four divisions and eight AI-powered services across media, marketing, technology, and healthcare. Co-founded by Arifuzzaman Antor (CTO).",
    founder: { "@type": "Person", name: "Arifuzzaman Antor", url: SITE },
    foundingDate: "2026",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AZAI Labs",
    url: "https://azailabs.dev",
    slogan: "Build with agents, not headcount.",
    description: "AI agents lab shipping practical automation for quality, operations, and decision-making — AI products, services & augmented AI talent.",
    founder: { "@type": "Person", name: "Arifuzzaman Antor", url: SITE },
    foundingDate: "2025",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AZADEMY",
    url: "https://azademy.org",
    slogan: "Learning meets earning.",
    description: "Tech academy teaching CS, AI & technology, freelancing, and how to land remote jobs — founded by Arifuzzaman Antor.",
    founder: { "@type": "Person", name: "Arifuzzaman Antor", url: SITE },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Personal Brand Studio",
    url: `${SITE}/personal-brand-studio`,
    slogan: "Premium personal-brand websites, built for you.",
    description: "Bespoke, animated personal-brand websites for doctors, founders, consultants, and executives — founded by Arifuzzaman Antor.",
    founder: { "@type": "Person", name: "Arifuzzaman Antor", url: SITE },
  },
  {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Silent Sacrifice Abdus Sattar Foundation",
    url: "https://ssasf.vercel.app",
    description: "Scholarships, mentorship, Quran education, and community support in Bangladesh — founded by Arifuzzaman Antor in honor of his father.",
    founder: { "@type": "Person", name: "Arifuzzaman Antor", url: SITE },
  },
];

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgsLd) }}
        />
        <div className="aurora-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
