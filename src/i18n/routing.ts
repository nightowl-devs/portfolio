export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookieName = "NEXT_LOCALE";

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export function getLocaleFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;

  const preferences = header
    .split(",")
    .map((part) => {
      const [range, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.split("=")[1]) : 1;
      return { range: range.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { range } of preferences) {
    if (isValidLocale(range)) return range;
    const base = range.split("-")[0];
    if (isValidLocale(base)) return base;
  }

  return null;
}
