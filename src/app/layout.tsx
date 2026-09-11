import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { localizedSiteUrl, siteUrl } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0134fb",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  const locale = await getLocale();
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | Stanisław Botwina",
    },
    description,
    keywords: [
      "Stanisław Botwina",
      "botwinka",
      "nightowl",
      "full-stack developer",
      "portfolio",
      "polska programista",
      "warszawa programista",
      "UI designer polska",
      "warszawa UI designer",
      "polska UI designer",
      "polska developer",
      "aplikacje mobilne",
      "freelance developer",
    ],
    authors: [{ name: "Stanisław Botwina", url: siteUrl }],
    creator: "Stanisław Botwina",
    publisher: "Stanisław Botwina",
    category: "technology",
    classification: "Portfolio",
    applicationName: "Stanisław Botwina Portfolio",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
      languages: {
        en: localizedSiteUrl("en"),
        pl: localizedSiteUrl("pl"),
        "x-default": siteUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/img/home/profile.jpeg", type: "image/jpeg" },
      ],
      apple: [{ url: "/img/home/profile.jpeg" }],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      type: "website",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      alternateLocale: locale === "pl" ? ["en_US"] : ["pl_PL"],
      url: siteUrl,
      siteName: "Stanisław Botwina | Portfolio",
      title,
      description,
      images: [
        {
          url: "/img/og/og-image.png",
          width: 1620,
          height: 1020,
          alt: title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/img/og/og-image.png"],
      creator: "@botwinkaaa",
    },
    appleWebApp: {
      capable: true,
      title: "Stanisław Botwina",
      statusBarStyle: "default",
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Stanisław Botwina",
        alternateName: "botwinka",
        url: siteUrl,
        image: `${siteUrl}/img/home/profile.jpeg`,
        jobTitle: "Full-Stack Developer",
        description:
          "Full-stack developer and UI designer from Poland building modern web and mobile applications.",
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "Java",
          "UI Design",
          "Tailwind CSS",
        ],
        sameAs: [
          "https://github.com/nightowl-devs",
          "https://www.linkedin.com/in/stanisław-botwina-693724388/",
          "https://zaliczto.pl",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Stanisław Botwina Portfolio",
        description:
          "Portfolio of Stanisław Botwina — full-stack developer and UI designer from Poland.",
        inLanguage: locale,
        publisher: { "@id": `${siteUrl}/#person` },
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) } as never}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
