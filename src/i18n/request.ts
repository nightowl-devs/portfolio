import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, getLocaleFromAcceptLanguage, isValidLocale, localeCookieName } from "./routing";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return {
      locale: cookieLocale,
      messages: (await import(`../messages/${cookieLocale}.json`)).default,
    };
  }

  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const detected = getLocaleFromAcceptLanguage(acceptLanguage);
  //const locale = detected ?? defaultLocale;
   const locale = "pl";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
