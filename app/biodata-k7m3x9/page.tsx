import type { Metadata } from "next";
import BiodataClient from "./BiodataClient";

export const metadata: Metadata = {
  title: "Biodata — Arifuz Zaman Antor",
  description: "Personal biodata.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function BiodataPage() {
  return <BiodataClient />;
}
