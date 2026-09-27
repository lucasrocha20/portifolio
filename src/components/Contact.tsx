import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { telUrl } from "@/lib/contact";

import { CopyEmailButton } from "./CopyEmailButton";
import { LinkedInIcon, MailIcon, PhoneIcon } from "./icons";
import { Section, type TitleStyle } from "./Section";
import { SocialLinks } from "./SocialLinks";

type Props = {
  dict: Dictionary;
  /** Just email + LinkedIn on one line (home). */
  compact?: boolean;
  /** Adds a "Copy email" button next to the address (recruiters). */
  copyEmail?: boolean;
  /** Shows the phone number below the email (recruiters). */
  showPhone?: boolean;
  titleStyle?: TitleStyle;
};

export function Contact({
  dict,
  compact = false,
  copyEmail = false,
  showPhone = false,
  titleStyle,
}: Props) {
  const { email, linkedin, phone } = profile.links;
  const tel = showPhone ? telUrl() : undefined;

  if (compact) {
    return (
      <Section id="contact" title={dict.contact.title} titleStyle={titleStyle}>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 font-semibold text-fg">
          <li>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 break-all hover:text-accent"
            >
              <MailIcon className="shrink-0 text-accent" />
              {email}
            </a>
          </li>
          <li>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 hover:text-accent"
            >
              <LinkedInIcon className="shrink-0 text-accent" />
              LinkedIn
            </a>
          </li>
        </ul>
      </Section>
    );
  }

  return (
    <Section id="contact" title={dict.contact.title} titleStyle={titleStyle}>
      <p className="leading-relaxed">{dict.contact.text}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-lg font-semibold break-all text-fg hover:text-accent"
        >
          <MailIcon className="shrink-0 text-accent" />
          {email}
        </a>
        {copyEmail && (
          <CopyEmailButton
            email={email}
            labels={{
              copy: dict.recruiters.copyEmail,
              copied: dict.recruiters.copied,
            }}
          />
        )}
      </div>
      {tel && (
        <a
          href={tel}
          className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-fg hover:text-accent"
        >
          <PhoneIcon className="shrink-0 text-accent" />
          {phone}
        </a>
      )}
      <SocialLinks className="mt-6 print:hidden" />
    </Section>
  );
}
