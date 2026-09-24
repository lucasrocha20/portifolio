import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { DownloadIcon } from "./icons";
import { Section } from "./Section";

type Props = { locale: Locale; dict: Dictionary };

export function Resume({ locale, dict }: Props) {
  const cvUrl = profile.cvUrl?.[locale];
  if (!cvUrl) return null;

  return (
    <Section id="resume" title={dict.resume.title}>
      <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-relaxed">{dict.resume.text}</p>
        <a
          href={cvUrl}
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          <DownloadIcon width={16} height={16} />
          {dict.resume.download}
        </a>
      </div>
    </Section>
  );
}
