import type { Metadata } from "next";

import { profile } from "@/content/profile";
import { type Locale, locales } from "@/i18n/config";

import { languageAlternates, localePath, localeTags } from "./site";

const ogLocale = (l: Locale) => localeTags[l].replace("-", "_");

/**
 * Canonical, hreflang, Open Graph and Twitter tags for one page.
 * Pages must return all of these: nested fields like `openGraph` replace the
 * layout's instead of merging with them. That also drops the image from
 * `[lang]/opengraph-image.tsx`, so pages below the home point to it explicitly.
 */
export function pageMetadata(
  lang: Locale,
  path: string,
  { title, description }: { title: string; description: string },
): Metadata {
  const image =
    path === ""
      ? undefined
      : {
          url: localePath(lang, "/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${profile.name}, ${profile.role[lang]}`,
        };

  return {
    title,
    description,
    alternates: {
      canonical: localePath(lang, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "profile",
      url: localePath(lang, path),
      siteName: profile.name,
      title,
      description,
      locale: ogLocale(lang),
      alternateLocale: locales.filter((l) => l !== lang).map(ogLocale),
      ...(image && { images: [image] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}
