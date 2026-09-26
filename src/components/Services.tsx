import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

import { Section, Tag, type TitleStyle } from "./Section";

type Props = {
  locale: Locale;
  dict: Dictionary;
  /** Adds the problem, outcome and tech of each service (services page). */
  detailed?: boolean;
  titleStyle?: TitleStyle;
};

export function Services({
  locale,
  dict,
  detailed = false,
  titleStyle,
}: Props) {
  return (
    <Section id="services" title={dict.services.title} titleStyle={titleStyle}>
      <ul
        className={`grid gap-4 sm:grid-cols-2 ${detailed ? "lg:grid-cols-3" : ""}`}
      >
        {profile.services.map((service) => (
          <li
            key={service.title.en}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="font-semibold text-fg">{service.title[locale]}</h3>
            <p className="mt-2 text-sm leading-relaxed">
              {service.description[locale]}
            </p>
            {detailed && (
              <>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-fg">
                      {dict.services.problem}
                    </dt>
                    <dd>{service.problem[locale]}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-fg">
                      {dict.services.outcome}
                    </dt>
                    <dd>{service.outcome[locale]}</dd>
                  </div>
                </dl>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech">
                  {service.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
