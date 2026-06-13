import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arifuzzaman “Antor” — Founder · Technical Project Manager · Sr. Software Engineer",
  description:
    "The person who turns chaos into shipped products. Founder & CEO of AZAI Labs, Technical Project Manager at Platformz, Sr. Software Engineer at Kintsugi, podcaster, and AI tech instructor. Explore the interactive portfolio — earn XP while you're at it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="grain">
        <div className="aurora-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
