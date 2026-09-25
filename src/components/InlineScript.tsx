"use client";

/**
 * Inline script that runs during HTML parsing on full page loads.
 * On client renders React never executes scripts and warns about them, so the
 * client output is marked `text/plain` (the DOM from the server wins).
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
