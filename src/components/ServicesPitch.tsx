import type { Dictionary } from "@/i18n/dictionaries/en";
import { whatsappUrl } from "@/lib/contact";

import { WhatsAppIcon } from "./icons";

/** Id of the top CTA; `MobileCta` shows up once it scrolls out of view. */
export const PITCH_CTA_ID = "pitch-cta";

export function ServicesPitch({ dict }: { dict: Dictionary }) {
  const whatsapp = whatsappUrl(dict.services.contact.whatsappMessage);

  return (
    <div className="fade-in py-12 md:py-20">
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance text-fg sm:text-5xl">
        {dict.services.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed">
        {dict.services.subtitle}
      </p>
      <div id={PITCH_CTA_ID} className="mt-8 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-2.5 font-semibold text-bg transition-opacity hover:opacity-90"
        >
          {dict.services.cta}
        </a>
        {whatsapp && (
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-accent px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-accent-soft"
          >
            <WhatsAppIcon width={18} height={18} />
            WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
