import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

import { Section } from "./Section";

type Props = { locale: Locale; dict: Dictionary };

/** Big numbers from real work, plus years of experience. */
export function Metrics({ locale, dict }: Props) {
  const metrics = [
    {
      value: `${profile.yearsOfExperience}+`,
      label: dict.services.results.years,
    },
    ...profile.metrics.map((m) => ({
      value: m.value[locale],
      label: m.label[locale],
    })),
  ];

  return (
    <Section
      id="results"
      title={dict.services.results.title}
      titleStyle="heading"
    >
      <dl className="grid gap-4 sm:grid-cols-3">
        {metrics.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col-reverse rounded-lg border border-border bg-surface p-6"
          >
            <dt className="mt-2 text-sm leading-relaxed">{label}</dt>
            <dd className="text-4xl font-bold tracking-tight text-accent">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
