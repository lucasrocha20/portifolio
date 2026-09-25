import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "./Section";
import avatar from "@/app/assets/avatar.jpg";
import Image from "next/image";

type Props = { locale: Locale; dict: Dictionary };

export function About({ locale, dict }: Props) {
  const facts = [
    { label: dict.about.yearsOfExperience, value: `${profile.yearsOfExperience}+` },
    { label: dict.about.location, value: profile.location[locale] },
    { label: dict.about.focus, value: profile.focusAreas[locale].join(" · ") },
  ];

  return (
    <Section id="about" title={dict.about.title}>
      <div className="flex justify-center w-full">
      <Image
        src={avatar}
        alt={profile.name}
        width={128}
        height={128}
        preload
        placeholder="blur"
        className="mb-6 size-28 rounded-full object-cover ring-2 ring-accent ring-offset-4 ring-offset-bg sm:size-32"
      />
      </div>
      <div className="space-y-4 leading-relaxed">
        {profile.bio[locale].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {facts.map(({ label, value }) => (
          <div key={label} className="rounded-lg border border-border bg-surface p-4">
            <dt className="text-xs uppercase tracking-wide">{label}</dt>
            <dd className="mt-1 font-semibold text-fg">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
