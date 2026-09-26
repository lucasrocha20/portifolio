import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

import { DownloadIcon } from "./icons";

type Props = { locale: Locale; dict: Dictionary };

export function Hero({ locale, dict }: Props) {
  const cvUrl = profile.cvUrl?.[locale];

  return (
    <div className="fade-in">
      <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-fg sm:text-xl">
        {profile.role[locale]}
      </p>
      <p className="mt-4 max-w-xs leading-relaxed">{profile.tagline[locale]}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          {dict.hero.viewProjects}
        </a>
        <a
          href="#contact"
          className="rounded-md border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
        >
          {dict.hero.contact}
        </a>
        {cvUrl && (
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
          >
            <DownloadIcon width={16} height={16} />
            {dict.hero.downloadCv}
          </a>
        )}
      </div>
    </div>
  );
}
