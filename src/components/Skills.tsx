import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

import { Section, Tag } from "./Section";

type Props = { locale: Locale; dict: Dictionary };

export function Skills({ locale, dict }: Props) {
  return (
    <Section id="skills" title={dict.skills.title}>
      <div className="space-y-6">
        {profile.skillGroups.map((group) => (
          <div key={group.name.en}>
            <h3 className="mb-3 text-sm font-semibold text-fg">
              {group.name[locale]}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
