"use client";

import { usePathname } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useEffect, useId, useRef, useState } from "react";

import { type Locale, LOCALE_COOKIE, locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Props = {
  locale: Locale;
  labels: Dictionary["language"];
};

export function LanguageSwitcher({ locale, labels }: Props) {
  const pathname = usePathname();
  const id = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(locales.indexOf(locale));
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  function changeLocale(next: Locale) {
    setOpen(false);
    if (next === locale) {
      buttonRef.current?.focus();
      return;
    }
    navigateToLocale(next, pathname);
  }

  function openList() {
    setActive(locales.indexOf(locale));
    setOpen(true);
  }

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  // Focus the list when it opens, and close it on any click outside.
  useEffect(() => {
    if (!open) return;
    listRef.current?.focus();
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function onButtonKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openList();
    }
  }

  function onListKeyDown(e: KeyboardEvent) {
    const last = locales.length - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => (i >= last ? 0 : i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => (i <= 0 ? last : i - 1));
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(last);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        changeLocale(locales[active]);
        break;
      case "Escape":
        e.preventDefault();
        close();
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div ref={rootRef} className="relative text-sm">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-label={`${labels.label}: ${labels[locale]}`}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onButtonKeyDown}
        className="flex cursor-pointer items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-medium text-fg uppercase transition-colors hover:border-accent hover:text-accent aria-expanded:border-accent aria-expanded:text-accent"
      >
        <GlobeIcon />
        {locale}
        <svg
          viewBox="0 0 24 24"
          width={14}
          height={14}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <ul
        ref={listRef}
        id={`${id}-list`}
        role="listbox"
        tabIndex={-1}
        aria-label={labels.label}
        aria-activedescendant={open ? `${id}-${locales[active]}` : undefined}
        onKeyDown={onListKeyDown}
        className={`absolute right-0 z-50 mt-2 min-w-40 origin-top-right rounded-lg border border-border bg-surface p-1 shadow-lg shadow-black/10 transition duration-150 ease-out outline-none dark:shadow-black/40 ${
          open
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0"
        }`}
      >
        {locales.map((l, i) => {
          const selected = l === locale;
          return (
            <li
              key={l}
              id={`${id}-${l}`}
              role="option"
              aria-selected={selected}
              lang={l}
              onClick={() => changeLocale(l)}
              onPointerMove={() => setActive(i)}
              className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                i === active ? "bg-accent-soft text-accent" : "text-fg"
              }`}
            >
              <span className="w-6 text-xs font-semibold text-muted uppercase">
                {l}
              </span>
              <span className="flex-1">{labels[l]}</span>
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className={`text-accent ${selected ? "" : "invisible"}`}
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Saves the choice (so "/" redirects to it next time) and loads the page in `next`. */
function navigateToLocale(next: Locale, pathname: string) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
  const rest = pathname.replace(/^\/[^/]+/, "");
  // Full page load on purpose: a client navigation re-renders <html> and drops the
  // theme class set by the inline script. Pages are static, so this is cheap.
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  window.location.assign(`/${next}${rest}${window.location.hash}`);
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}
