import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { languageAlternates, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    Object.entries(languageAlternates).map(([tag, path]) => [tag, `${siteUrl}${path}`]),
  );

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
