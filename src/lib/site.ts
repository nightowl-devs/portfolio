export const siteUrl = (
  process.env.NEXT_PUBLIC_URL ?? "https://nightowl.dev"
).replace(/\/$/, "");

export function localizedSiteUrl(locale: string) {
  return `${siteUrl}/${locale}`;
}
