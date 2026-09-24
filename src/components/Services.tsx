import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "./Section";

type Props = { locale: Locale; dict: Dictionary };

export function Services({ locale, dict }: Props) {
  return (
    <Section id="services" title={dict.services.title}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {profile.services.map((service) => (
          <li
            key={service.title.en}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="font-semibold text-fg">{service.title[locale]}</h3>
            <p className="mt-2 text-sm leading-relaxed">{service.description[locale]}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
