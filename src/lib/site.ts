export const siteUrl = (
  process.env.NEXT_PUBLIC_URL ?? "https://botwinka.dev"
).replace(/\/$/, "");

export function localizedSiteUrl(locale: string) {
  return `${siteUrl}/${locale}`;
}
