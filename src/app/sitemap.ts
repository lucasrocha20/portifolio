import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";
import { languageAlternates, localePath, routes, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([tag, href]) => [
        tag,
        `${siteUrl}${href}`,
      ]),
    );

    return locales.map((locale) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
