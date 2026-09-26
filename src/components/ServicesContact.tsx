import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { mailtoUrl, whatsappUrl } from "@/lib/contact";

import { LinkedInIcon, MailIcon, WhatsAppIcon } from "./icons";

/** Closing call to action of the services page. */
export function ServicesContact({ dict }: { dict: Dictionary }) {
  const labels = dict.services.contact;
  const whatsapp = whatsappUrl(labels.whatsappMessage);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mb-16 scroll-mt-[calc(var(--header-h)+2rem)] rounded-2xl border border-accent/40 bg-accent-soft px-6 py-12 text-center md:mb-24 md:px-12"
    >
      <h2
        id="contact-title"
        className="text-3xl font-bold tracking-tight text-balance text-fg"
      >
        {labels.title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl leading-relaxed">{labels.text}</p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={mailtoUrl(labels.emailSubject)}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-bg transition-opacity hover:opacity-90"
        >
          <MailIcon width={18} height={18} />
          {labels.email}
        </a>
        {whatsapp && (
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-accent bg-bg px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-accent-soft"
          >
            <WhatsAppIcon width={18} height={18} />
            {labels.whatsapp}
          </a>
        )}
      </div>

      <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm">
        <span>{profile.links.email}</span>
        <span aria-hidden className="hidden sm:inline">
          ·
        </span>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 font-semibold hover:text-accent"
        >
          <LinkedInIcon width={14} height={14} />
          LinkedIn
        </a>
      </p>
    </section>
  );
}
