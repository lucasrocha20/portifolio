import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Hero } from "./Hero";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SocialLinks } from "./SocialLinks";

type Props = { locale: Locale; dict: Dictionary };

export const SECTION_IDS = [
  "about",
  "experience",
  "projects",
  "skills",
  "services",
  "resume",
  "contact",
] as const;

/** Left column on desktop (sticky), top of the page on mobile. */
export function Header({ locale, dict }: Props) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Hero locale={locale} dict={dict} />

        <nav aria-label="Main" className="mt-16 hidden lg:block">
          <ul className="space-y-1">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="group flex items-center py-2">
                  <span className="mr-4 h-px w-8 bg-muted transition-all group-hover:w-16 group-hover:bg-fg" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted transition-colors group-hover:text-fg">
                    {dict.nav[id]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6 lg:mt-0">
        <SocialLinks />
        <LanguageSwitcher locale={locale} labels={dict.language} />
      </div>
    </header>
  );
}
