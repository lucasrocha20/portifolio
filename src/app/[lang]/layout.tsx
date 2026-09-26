import "../globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import { InlineScript } from "@/components/InlineScript";
import { SiteHeader } from "@/components/SiteHeader";
import { profile } from "@/content/profile";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { localeTags, siteUrl } from "@/lib/site";
import { themeScript } from "@/lib/theme";

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

  return {
    metadataBase: new URL(siteUrl),
    authors: [{ name: profile.name, url: siteUrl }],
    // Home tags; the other pages return their own from `pageMetadata`.
    ...pageMetadata(lang, "", getDictionary(lang).meta),
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

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
      <body className="flex min-h-full flex-col">
        {/* Every page must have <main id="content">. */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          {dict.skipToContent}
        </a>
        <SiteHeader locale={lang} dict={dict} />
        {children}
      </body>
    </html>
  );
}
