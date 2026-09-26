import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

/** Content section; on mobile the title sticks to the top while scrolling. */
export function Section({ id, title, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-10 -mx-6 mb-6 bg-bg/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
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
