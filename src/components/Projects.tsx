import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

type Props = { projects: Project[]; dict: Dictionary };

export function Projects({ projects, dict }: Props) {
  return (
    <Section id="projects" title={dict.projects.title}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.url}>
            <ProjectCard project={project} labels={dict.projects} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
