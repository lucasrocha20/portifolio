import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/en";

import { MailIcon } from "./icons";
import { Section } from "./Section";
import { SocialLinks } from "./SocialLinks";

export function Contact({ dict }: { dict: Dictionary }) {
  const { email } = profile.links;

  return (
    <Section id="contact" title={dict.contact.title}>
      <p className="leading-relaxed">{dict.contact.text}</p>
      <a
        href={`mailto:${email}`}
        className="mt-6 inline-flex items-center gap-2 text-lg font-semibold break-all text-fg hover:text-accent"
      >
        <MailIcon className="shrink-0 text-accent" />
        {email}
      </a>
      <SocialLinks className="mt-6" />
    </Section>
  );
}
