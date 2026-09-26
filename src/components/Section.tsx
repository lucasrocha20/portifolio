import type { ReactNode } from "react";

/**
 * - "sticky": for pages with the side `Nav` (desktop). The title is hidden on
 *   desktop and sticks below the SiteHeader on mobile.
 * - "heading": for single-column pages. A normal, always visible heading.
 */
export type TitleStyle = "sticky" | "heading";

type Props = {
  id: string;
  title: string;
  titleStyle?: TitleStyle;
  children: ReactNode;
};

/** Content section with an anchor `id` and an `<h2>` title. */
export function Section({ id, title, titleStyle = "sticky", children }: Props) {
  if (titleStyle === "heading") {
    return (
      <section
        id={id}
        aria-labelledby={`${id}-title`}
        className="mb-16 scroll-mt-[calc(var(--header-h)+2rem)] md:mb-24"
      >
        <h2
          id={`${id}-title`}
          className="mb-6 text-2xl font-bold tracking-tight text-fg"
        >
          {title}
        </h2>
        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mb-16 scroll-mt-(--header-h) md:mb-24 lg:mb-32 lg:scroll-mt-[calc(var(--header-h)+4rem)] print:mb-8"
    >
      <div className="sticky top-(--header-h) z-10 -mx-6 mb-6 bg-bg/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only print:static print:py-2">
        <h2
          id={`${id}-title`}
          className="text-sm font-bold tracking-widest text-fg uppercase"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
      {children}
    </li>
  );
}
