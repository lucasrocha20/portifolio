import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, locales, type Locale } from "@/i18n/config";
import { InlineScript } from "@/components/InlineScript";
import { profile } from "@/content/profile";
import { getDictionary } from "@/i18n/get-dictionary";
import { languageAlternates, localeTags, siteUrl } from "@/lib/site";
import { themeScript } from "@/lib/theme";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Only /en and /pt exist; any other segment is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const { meta } = getDictionary(lang);
  const ogLocale = (l: Locale) => localeTags[l].replace("-", "_");

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    authors: [{ name: profile.name, url: siteUrl }],
    alternates: {
      canonical: `/${lang}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "profile",
      url: `/${lang}`,
      siteName: profile.name,
      title: meta.title,
      description: meta.description,
      locale: ogLocale(lang),
      alternateLocale: locales.filter((l) => l !== lang).map(ogLocale),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    // The theme script changes <html class> before hydration.
    <html
      lang={localeTags[lang]}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
