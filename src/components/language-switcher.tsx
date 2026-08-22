"use client";

import { useLocale } from "next-intl";

const LANGUAGES = [
  {
    locale: "en",
    name: "English",
    imageUrl: "/img/langs/en.png",
  },
  {
    locale: "pl",
    name: "Polish",
    imageUrl: "/img/langs/pl.png",
  },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const language = LANGUAGES.find((l) => l.locale === locale);

  const handleChange = () => {};
}
