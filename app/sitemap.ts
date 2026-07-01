import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://azantor.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/personal-brand-studio`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
