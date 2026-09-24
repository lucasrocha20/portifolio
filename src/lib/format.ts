import type { Locale } from "@/i18n/config";

const intlLocale: Record<Locale, string> = { en: "en-US", pt: "pt-BR" };

/** "2022-01" -> "Jan 2022" / "jan. de 2022". */
export function formatMonth(yearMonth: string, locale: Locale) {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(intlLocale[locale], {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1)));
}
