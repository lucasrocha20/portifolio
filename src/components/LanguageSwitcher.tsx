"use client";

import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Props = {
  locale: Locale;
  labels: Dictionary["language"];
};

export function LanguageSwitcher({ locale, labels }: Props) {
  const pathname = usePathname();

  function changeLocale(next: Locale) {
    // Remember the choice so "/" redirects to it next time.
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    const rest = pathname.replace(/^\/[^/]+/, "");
    // Full page load on purpose: a client navigation re-renders <html> and drops the
    // theme class set by the inline script. Pages are static, so this is cheap.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign(`/${next}${rest}${window.location.hash}`);
  }

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="sr-only">{labels.label}</span>
      <select
        value={locale}
        onChange={(e) => changeLocale(e.target.value as Locale)}
        className="rounded-md border border-current/20 bg-transparent px-2 py-1"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {labels[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
