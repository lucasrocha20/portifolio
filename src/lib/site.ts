import type { Locale } from "@/i18n/config";

/** Public URL: explicit env var, else Vercel's production domain, else local dev. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** Locale -> BCP 47 tag used for <html lang>, hreflang and Open Graph. */
export const localeTags: Record<Locale, string> = { en: "en", pt: "pt-BR" };

/** hreflang map for every locale page, plus x-default. */
export const languageAlternates = {
  en: "/en",
  "pt-BR": "/pt",
  "x-default": "/en",
};
