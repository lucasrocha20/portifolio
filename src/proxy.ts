import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";

/** Picks the best supported locale from the browser's Accept-Language header. */
function localeFromHeader(header: string | null): Locale | undefined {
  if (!header) return undefined;

  const languages = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.split("-")[0].toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  return languages.map((l) => l.lang).find(hasLocale);
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
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, API routes, and files with an extension (favicon, cv.pdf, ...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
