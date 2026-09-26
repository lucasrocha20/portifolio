import { defaultLocale, type Locale, locales } from "@/i18n/config";

/** Public URL: explicit env var, else Vercel's production domain, else local dev. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** Locale -> BCP 47 tag used for <html lang>, hreflang and Open Graph. */
export const localeTags: Record<Locale, string> = { en: "en", pt: "pt-BR" };

/** Page paths below the locale prefix ("" is the home). Listed in the sitemap. */
export const routes = ["", "/recruiters", "/services"] as const;

/** e.g. localePath("pt", "/services") -> "/pt/services". */
export function localePath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

/** hreflang map for `path` in every locale, plus x-default. */
export function languageAlternates(path = ""): Record<string, string> {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [localeTags[locale], localePath(locale, path)]),
    ),
    "x-default": localePath(defaultLocale, path),
  };
}
