import type { MetadataRoute } from "next";

const siteUrl = "https://botwinka.dev";

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
          en: `${siteUrl}/en`,
          pl: `${siteUrl}/pl`,
        },
      },
    },
  ];
}
