import type { ReactNode } from "react";

import type { Dictionary } from "@/i18n/dictionaries/en";

import { Nav, type SectionId } from "./Nav";
import { SocialLinks } from "./SocialLinks";

type Props = {
  dict: Dictionary;
  /** Sections linked in the desktop nav. */
  sections: readonly SectionId[];
  /** Page intro above the nav (contains the page's `<h1>`). */
  children: ReactNode;
};

/** Left column on desktop (sticky below the SiteHeader), top of the page on mobile. */
export function Header({ dict, sections, children }: Props) {
  return (
    <div className="lg:sticky lg:top-(--header-h) lg:flex lg:max-h-[calc(100vh-var(--header-h))] lg:w-1/2 lg:flex-col lg:justify-between lg:py-16">
      <div>
        {children}
        <Nav sections={sections} labels={dict.nav} />
      </div>

      <SocialLinks className="mt-8 lg:mt-0 print:hidden" />
    </div>
  );
}
