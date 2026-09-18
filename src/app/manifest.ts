import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stanisław Botwina | Portfolio",
    short_name: "Stanisław Botwina",
    description:
      "Stanisław Botwina - full-stack developer & UI designer from Poland. I build modern web & mobile apps with Next.js, React, TypeScript and Java.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone"],
    orientation: "any",
    background_color: "#fdfdfd",
    theme_color: "#0134fb",
    lang: "en",
    dir: "ltr",
    categories: ["technology", "portfolio", "developer"],
    prefer_related_applications: false,
    icons: [
      {
        src: "/img/home/profile.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/img/og/og-image.png",
        sizes: "1620x1020",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
