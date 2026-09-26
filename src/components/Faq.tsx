import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

import { Section } from "./Section";

type Props = { locale: Locale; dict: Dictionary };

/** Native <details>, so it works with the keyboard and without JavaScript. */
export function Faq({ locale, dict }: Props) {
  return (
    <Section id="faq" title={dict.services.faq.title} titleStyle="heading">
      <div className="divide-y divide-border rounded-lg border border-border bg-surface">
        {profile.faq.map((item) => (
          <details key={item.question.en} className="group px-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-fg transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
              {item.question[locale]}
              <svg
                viewBox="0 0 24 24"
                width={18}
                height={18}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="shrink-0 text-accent transition-transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="pb-5 leading-relaxed">{item.answer[locale]}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
