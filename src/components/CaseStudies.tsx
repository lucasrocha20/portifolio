import { profile } from "@/content/profile";
import { GITHUB_USERNAME } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

import { GitHubIcon } from "./icons";
import { Section, Tag } from "./Section";

type Props = { locale: Locale; dict: Dictionary };

export function CaseStudies({ locale, dict }: Props) {
  const labels = dict.services.caseStudies;

  return (
    <Section id="cases" title={labels.title} titleStyle="heading">
      <div className="space-y-6">
        {profile.caseStudies.map((study) => {
          const href =
            study.url ??
            (study.repo &&
              `https://github.com/${GITHUB_USERNAME}/${study.repo}`);
          const steps = [
            { label: labels.problem, text: study.problem[locale] },
            { label: labels.solution, text: study.solution[locale] },
            { label: labels.result, text: study.result[locale] },
          ];

          return (
            <article
              key={study.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-fg">{study.title}</h3>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-accent"
                  >
                    <GitHubIcon width={16} height={16} />
                    {labels.source}
                  </a>
                )}
              </div>
              <dl className="mt-4 grid gap-4 md:grid-cols-3">
                {steps.map(({ label, text }) => (
                  <div key={label}>
                    <dt className="text-xs font-bold tracking-widest text-accent uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed">{text}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech">
                {study.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
