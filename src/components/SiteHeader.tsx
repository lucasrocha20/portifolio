import Link from "next/link";

import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePath } from "@/lib/site";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { SiteNav } from "./SiteNav";
import { ThemeToggle } from "./ThemeToggle";

type Props = { locale: Locale; dict: Dictionary };

/**
 * Top bar shared by every page. Its height is `--header-h` (globals.css):
 * two rows on mobile (logo + toggles, then page links), one row from `sm` up.
 */
export function SiteHeader({ locale, dict }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur print:hidden">
      <div className="mx-auto flex h-(--header-h) max-w-6xl flex-wrap content-center items-center gap-y-2 px-6 md:px-12 lg:px-24">
        <Link
          href={localePath(locale)}
          className="order-1 flex items-center gap-2.5 text-fg transition-colors hover:text-accent"
        >
          <span
            aria-hidden
            className="rounded-md bg-accent px-1.5 py-0.5 font-mono text-sm font-bold text-bg"
          >
            LR
          </span>
          <span className="sr-only font-semibold sm:not-sr-only">
            {profile.name}
          </span>
        </Link>

        <SiteNav
          locale={locale}
          labels={dict.siteNav}
          className="order-3 -mx-3 w-full sm:order-2 sm:mx-0 sm:ml-8 sm:w-auto"
        />

        <div className="order-2 ml-auto flex items-center gap-3 sm:order-3">
          <ThemeToggle label={dict.theme.toggle} />
          <LanguageSwitcher locale={locale} labels={dict.language} />
        </div>
      </div>
    </header>
  );
}
