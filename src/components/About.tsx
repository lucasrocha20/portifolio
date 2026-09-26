import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

import { Section, type TitleStyle } from "./Section";

type Props = {
  locale: Locale;
  dict: Dictionary;
  /** Only the first bio paragraph (home). */
  short?: boolean;
  titleStyle?: TitleStyle;
};

export function About({ locale, dict, short = false, titleStyle }: Props) {
  const bio = profile.bio[locale];
  const paragraphs = short ? bio.slice(0, 1) : bio;
  const facts = [
    {
      label: dict.about.yearsOfExperience,
      value: `${profile.yearsOfExperience}+`,
    },
    { label: dict.about.location, value: profile.location[locale] },
    { label: dict.about.focus, value: profile.focusAreas[locale].join(" | ") },
  ];

  return (
    <Section id="about" title={dict.about.title} titleStyle={titleStyle}>
      <div className="max-w-3xl space-y-4 leading-relaxed">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {facts.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-surface p-4"
          >
            <dt className="text-xs tracking-wide uppercase">{label}</dt>
            <dd className="mt-1 font-semibold text-fg">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
