"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";

export const SECTION_IDS = [
  "about",
  "experience",
  "projects",
  "skills",
  "services",
  "contact",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

/** Desktop nav; highlights the last section whose top passed the upper third of the viewport. */
export function Nav({ labels }: { labels: Dictionary["nav"] }) {
  const [active, setActive] = useState<SectionId>(SECTION_IDS[0]);
  // While scrolling to a clicked link, keep that link active.
  const clicked = useRef<SectionId | null>(null);

  useEffect(() => {
    function update() {
      if (clicked.current) return;

      const { innerHeight, scrollY } = window;
      // The last sections are too short to reach the line, so the bottom of the page wins.
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
        return setActive(SECTION_IDS[SECTION_IDS.length - 1]);
      }

      let current: SectionId = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= innerHeight / 3) current = id;
      }
      setActive(current);
    }

    function release() {
      clicked.current = null;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("scrollend", release);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("scrollend", release);
    };
  }, []);

  function onClick(id: SectionId) {
    clicked.current = id;
    setActive(id);
    // Fallback for browsers without `scrollend`, or when the page doesn't need to scroll.
    setTimeout(() => {
      if (clicked.current === id) clicked.current = null;
    }, 1000);
  }

  return (
    <nav aria-label="Main" className="mt-10 hidden lg:block">
      <ul className="space-y-1">
        {SECTION_IDS.map((id) => {
          const isActive = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => onClick(id)}
                aria-current={isActive ? "location" : undefined}
                className="group flex items-center py-1.5"
              >
                <span
                  className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-fg ${
                    isActive ? "w-16 bg-accent" : "w-8 bg-muted"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-fg ${
                    isActive ? "text-accent" : "text-muted"
                  }`}
                >
                  {labels[id]}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
