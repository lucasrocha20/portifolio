import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Hero } from "./Hero";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Nav } from "./Nav";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";

type Props = { locale: Locale; dict: Dictionary };

/** Left column on desktop (sticky), top of the page on mobile. */
export function Header({ locale, dict }: Props) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Hero locale={locale} dict={dict} />
        <Nav labels={dict.nav} />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6 lg:mt-0">
        <SocialLinks />
        <div className="flex items-center gap-3">
          <ThemeToggle label={dict.theme.toggle} />
          <LanguageSwitcher locale={locale} labels={dict.language} />
        </div>
      </div>
    </header>
  );
}
