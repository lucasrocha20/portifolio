"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localePath } from "@/lib/site";

import { ArrowUpRightIcon } from "./icons";

/** Cookie with the last path picked on the home ("recruiters" | "services"). */
const VISITOR_PATH_COOKIE = "VISITOR_PATH";

const PATHS = ["services", "recruiters"] as const;
type VisitorPath = (typeof PATHS)[number];

function readVisitorPath(): VisitorPath | null {
  const value = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${VISITOR_PATH_COOKIE}=`))
    ?.split("=")[1];
  return PATHS.find((p) => p === value) ?? null;
}

function saveVisitorPath(path: VisitorPath) {
  document.cookie = `${VISITOR_PATH_COOKIE}=${path}; path=/; max-age=31536000; samesite=lax`;
}

// The cookie only changes on navigation away, so there is nothing to subscribe to.
const subscribe = () => () => {};

type Props = { locale: Locale; labels: Dictionary["home"]["paths"] };

/**
 * The main call to action of the home. Remembers the choice and highlights
 * that card on the next visit (never redirects). The page is static, so the
 * cookie is read on the client; the server renders no highlight.
 */
export function PathCards({ locale, labels }: Props) {
  const lastPath = useSyncExternalStore(subscribe, readVisitorPath, () => null);

  return (
    <section aria-labelledby="paths-title" className="mb-16 md:mb-24">
      <h2
        id="paths-title"
        className="mb-6 text-2xl font-bold tracking-tight text-fg"
      >
        {labels.title}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {PATHS.map((path) => {
          const isLast = path === lastPath;
          return (
            <li key={path}>
              <Link
                href={localePath(locale, `/${path}`)}
                onClick={() => saveVisitorPath(path)}
                className={`group flex h-full flex-col rounded-xl border p-6 transition-colors hover:border-accent ${
                  isLast
                    ? "border-accent bg-accent-soft"
                    : "border-border bg-surface"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    {path === "recruiters" ? <BriefcaseIcon /> : <CodeIcon />}
                  </span>
                  {isLast && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-bg">
                      {labels.lastVisited}
                    </span>
                  )}
                </span>
                <span className="mt-5 flex items-center gap-1.5 text-xl font-semibold text-fg group-hover:text-accent">
                  {labels[path].title}
                  <ArrowUpRightIcon
                    width={18}
                    height={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
                <span className="mt-2 leading-relaxed">
                  {labels[path].text}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}
