import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { formatMonth } from "@/lib/format";
import { Section, Tag } from "./Section";

type Props = { locale: Locale; dict: Dictionary };

export function Experience({ locale, dict }: Props) {
  const experiences = [...profile.experiences].sort((a, b) =>
    b.start.localeCompare(a.start),
  );

  return (
    <Section id="experience" title={dict.experience.title}>
      <ol className="relative space-y-10 border-l border-border pl-6">
        {experiences.map((job) => {
          const end = job.end ? formatMonth(job.end, locale) : dict.experience.present;
          return (
            <li key={`${job.company}-${job.start}`} className="relative">
              <span
                aria-hidden
                className="absolute top-1.5 -left-[29px] size-2.5 rounded-full border-2 border-accent bg-bg"
              />
              <p className="text-xs font-semibold uppercase tracking-wide">
                {formatMonth(job.start, locale)} — {end}
                {job.location && ` · ${job.location[locale]}`}
              </p>
              <h3 className="mt-1 font-semibold text-fg">
                {job.role[locale]} · <span className="text-accent">{job.company}</span>
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed marker:text-accent">
                {job.highlights[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech">
                {job.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
