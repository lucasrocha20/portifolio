import Link from "next/link";

import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Project } from "@/types";

import { ArrowUpRightIcon } from "./icons";
import { ProjectCard } from "./ProjectCard";
import { Section, type TitleStyle } from "./Section";

const FEATURED_MAX = 3;

type Props = {
  projects: Project[];
  dict: Dictionary;
  /** Only featured projects, up to 3 (falls back to the first ones if none is featured). */
  featuredOnly?: boolean;
  /** Link below the grid, e.g. to the full list on another page. */
  seeAll?: { href: string; label: string };
  titleStyle?: TitleStyle;
};

export function Projects({
  projects,
  dict,
  featuredOnly = false,
  seeAll,
  titleStyle,
}: Props) {
  const featured = projects.filter((p) => p.featured);
  const shown = featuredOnly
    ? (featured.length ? featured : projects).slice(0, FEATURED_MAX)
    : projects;

  return (
    <Section id="projects" title={dict.projects.title} titleStyle={titleStyle}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {shown.map((project) => (
          <li key={project.url}>
            <ProjectCard project={project} labels={dict.projects} />
          </li>
        ))}
      </ul>
      {seeAll && (
        <Link
          href={seeAll.href}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-fg hover:text-accent"
        >
          {seeAll.label}
          <ArrowUpRightIcon width={14} height={14} />
        </Link>
      )}
    </Section>
  );
}
