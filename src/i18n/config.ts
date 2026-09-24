export const locales = ["en", "pt"] as const;
export const defaultLocale: Locale = "en";

/** Cookie that remembers the language picked in the selector. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export type Locale = (typeof locales)[number];

/** A text written in every supported language. */
export type Localized<T = string> = Record<Locale, T>;

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
