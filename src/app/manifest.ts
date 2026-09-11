import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stanisław Botwina Portfolio",
    short_name: "Botwina",
    description:
      "Portfolio of Stanisław Botwina - full-stack developer and UI designer from Poland.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfdfd",
    theme_color: "#0134fb",
    lang: "en",
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
