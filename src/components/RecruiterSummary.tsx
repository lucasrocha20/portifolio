import { Fragment } from "react";

import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { getCvUrl } from "@/lib/cv";

import { DownloadIcon, LinkedInIcon } from "./icons";

type Props = { locale: Locale; dict: Dictionary };

/** Top of the recruiters page: who, availability and the CV. */
export function RecruiterSummary({ locale, dict }: Props) {
  const cvUrl = getCvUrl(locale);
  const { email, phone, linkedin, github } = profile.links;
  const status = [
    profile.availability[locale],
    profile.workModel[locale],
    `${profile.location[locale]} (${profile.timeZone})`,
  ];

  return (
    <div className="fade-in">
      <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-fg sm:text-xl">
        {profile.role[locale]}
      </p>

      <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <span aria-hidden className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
        </span>
        {status.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && <span aria-hidden>·</span>}
            <span className={i === 0 ? "font-semibold text-fg" : ""}>
              {item}
            </span>
          </Fragment>
        ))}
      </p>

      {/* Printed instead of the buttons and icons. */}
      <p className="mt-2 hidden text-sm print:block">
        {[email, phone, linkedin, github].filter(Boolean).join(" · ")}
      </p>

      <div className="mt-8 flex flex-wrap gap-3 print:hidden">
        {cvUrl && (
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            <DownloadIcon width={16} height={16} />
            {dict.hero.downloadCv}
          </a>
        )}
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
            cvUrl
              ? "border border-accent text-accent hover:bg-accent-soft"
              : "bg-accent text-bg hover:opacity-90"
          }`}
        >
          <LinkedInIcon width={16} height={16} />
          {dict.recruiters.linkedin}
        </a>
      </div>
    </div>
  );
}
