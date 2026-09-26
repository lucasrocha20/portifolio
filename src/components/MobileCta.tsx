"use client";

import { useEffect, useState } from "react";

type Props = {
  label: string;
  /** Show the button once this element (the top CTA) is scrolled past... */
  afterId: string;
  /** ...and hide it again while the target section is on screen. */
  targetId: string;
};

/** Floating call-to-action for small screens on long pages. */
export function MobileCta({ label, afterId, targetId }: Props) {
  const [pastTop, setPastTop] = useState(false);
  const [atTarget, setAtTarget] = useState(false);

  useEffect(() => {
    const top = document.getElementById(afterId);
    const target = document.getElementById(targetId);
    if (!top || !target) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === top) {
          // Only "past" once it left through the top of the viewport.
          setPastTop(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        } else {
          setAtTarget(entry.isIntersecting);
        }
      }
    });
    observer.observe(top);
    observer.observe(target);
    return () => observer.disconnect();
  }, [afterId, targetId]);

  const visible = pastTop && !atTarget;

  return (
    <a
      href={`#${targetId}`}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`fixed inset-x-4 bottom-4 z-30 rounded-lg bg-accent py-3 text-center font-semibold text-bg shadow-lg shadow-black/20 transition duration-200 sm:hidden print:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {label}
    </a>
  );
}
