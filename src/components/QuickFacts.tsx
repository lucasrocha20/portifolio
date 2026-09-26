import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

import { Section } from "./Section";

type Props = { locale: Locale; dict: Dictionary };

export function QuickFacts({ locale, dict }: Props) {
  const labels = dict.recruiters.quickFacts;
  const current = [...profile.experiences]
    .filter((job) => !job.end)
    .sort((a, b) => b.start.localeCompare(a.start))[0];

  const facts = [
    {
      label: labels.experience,
      value: `${profile.yearsOfExperience}+ ${labels.years}`,
    },
    current && { label: labels.currentCompany, value: current.company },
    {
      label: labels.location,
      value: `${profile.location[locale]} (${profile.timeZone})`,
    },
    { label: labels.workModel, value: profile.workModel[locale] },
    { label: labels.languages, value: profile.languages[locale].join(", ") },
    { label: labels.mainStack, value: profile.mainStack.join(", ") },
  ].filter((fact) => !!fact);

  return (
    <Section id="facts" title={labels.title}>
      <dl className="grid gap-4 sm:grid-cols-2">
        {facts.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-surface p-4 print:break-inside-avoid"
          >
            <dt className="text-xs tracking-wide uppercase">{label}</dt>
            <dd className="mt-1 font-semibold text-fg">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
