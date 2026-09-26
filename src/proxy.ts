import { type NextRequest, NextResponse } from "next/server";

import {
  defaultLocale,
  hasLocale,
  type Locale,
  LOCALE_COOKIE,
  locales,
} from "@/i18n/config";

/**
 * Picks the best supported locale from Accept-Language, which the browser builds
 * from the user's language preferences (the same list as `navigator.languages`).
 * e.g. "pt-BR,pt;q=0.9,en;q=0.8" -> "pt".
 */
function localeFromHeader(header: string | null): Locale | undefined {
  if (!header) return undefined;

  return (
    header
      .split(",")
      .map((part) => {
        const [tag, ...params] = part.split(";").map((s) => s.trim());
        const qParam = params.find((p) => p.startsWith("q="));
        const q = qParam ? Number(qParam.slice(2)) : 1;
        return { lang: tag.split("-")[0].toLowerCase(), q };
      })
      // q=0 means "not acceptable"; drop it and anything malformed.
      .filter(({ q }) => q > 0)
      .sort((a, b) => b.q - a.q)
      .map(({ lang }) => lang)
      .find(hasLocale)
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    (cookie && hasLocale(cookie) ? cookie : undefined) ??
    localeFromHeader(request.headers.get("accept-language")) ??
    defaultLocale;

  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(request.nextUrl);
  // The target depends on these headers, so caches must not share the redirect.
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Skip Next internals, API routes, and files with an extension (favicon, cv.pdf, ...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
