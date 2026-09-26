"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePath } from "@/lib/site";

const PAGES = [
  { key: "home", path: "" },
  { key: "recruiters", path: "/recruiters" },
  { key: "services", path: "/services" },
] as const;

type Props = {
  locale: Locale;
  labels: Dictionary["siteNav"];
  className?: string;
};

/** Links between the audience pages; client-side only to mark the current one. */
export function SiteNav({ locale, labels, className = "" }: Props) {
  const pathname = usePathname().replace(/\/$/, "");

  return (
    <nav aria-label={labels.label} className={className}>
      <ul className="flex items-center gap-1">
        {PAGES.map(({ key, path }) => {
          const href = localePath(locale, path);
          const isCurrent = pathname === href;
          return (
            <li key={key}>
              <Link
                href={href}
                aria-current={isCurrent ? "page" : undefined}
                className={`block rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isCurrent
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {labels[key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
