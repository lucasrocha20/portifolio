import type { Dictionary } from "@/i18n/dictionaries/en";

import { Section } from "./Section";

export function Process({ dict }: { dict: Dictionary }) {
  const { title, steps } = dict.services.process;

  return (
    <Section id="process" title={title} titleStyle="heading">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <span
              aria-hidden
              className="flex size-8 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-bold text-accent"
            >
              {i + 1}
            </span>
            <h3 className="mt-4 font-semibold text-fg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
