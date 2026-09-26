import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Project } from "@/types";

import { ArrowUpRightIcon, GitHubIcon, StarIcon } from "./icons";
import { Tag } from "./Section";

type Props = { project: Project; labels: Dictionary["projects"] };

export function ProjectCard({ project, labels }: Props) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-fg">
          <a
            href={project.homepage ?? project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 hover:text-accent"
          >
            {project.name}
            <ArrowUpRightIcon width={14} height={14} />
          </a>
        </h3>
        {project.featured && (
          <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
            {labels.featured}
          </span>
        )}
      </div>

      {project.description && (
        <p className="mt-2 flex-1 text-sm leading-relaxed">
          {project.description}
        </p>
      )}

      {project.topics.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
          {project.topics.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-center gap-4 text-xs">
        {project.language && <span>{project.language}</span>}
        {project.stars > 0 && (
          <span className="inline-flex items-center gap-1">
            <StarIcon width={12} height={12} />
            {project.stars}
            <span className="sr-only">{labels.stars}</span>
          </span>
        )}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer noopener"
          className="ml-auto inline-flex items-center gap-1 font-semibold hover:text-accent"
        >
          <GitHubIcon width={14} height={14} />
          {labels.source}
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold hover:text-accent"
          >
            {labels.demo}
          </a>
        )}
      </div>
    </article>
  );
}
