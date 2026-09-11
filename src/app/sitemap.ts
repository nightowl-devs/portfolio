import type { MetadataRoute } from "next";
import { localizedSiteUrl, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: localizedSiteUrl("en"),
          pl: localizedSiteUrl("pl"),
        },
      },
    },
  ];
}
