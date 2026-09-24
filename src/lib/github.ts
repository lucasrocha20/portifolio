import { GITHUB_USERNAME, projects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Project, ProjectConfig } from "@/types";

const REVALIDATE_SECONDS = 60 * 60 * 24;

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  pushed_at: string;
};

function repoPath(repo: string) {
  return repo.includes("/") ? repo : `${GITHUB_USERNAME}/${repo}`;
}

async function fetchRepo(repo: string): Promise<GitHubRepo | null> {
  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${repoPath(repo)}`, {
      headers,
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.warn(`GitHub: failed to fetch ${repo} (${res.status})`);
      return null;
    }
    return (await res.json()) as GitHubRepo;
  } catch (error) {
    console.warn(`GitHub: failed to fetch ${repo}`, error);
    return null;
  }
}

function toProject(
  config: ProjectConfig,
  repo: GitHubRepo | null,
  locale: Locale,
): Project {
  const path = repoPath(config.repo);

  return {
    name: repo?.name ?? path.split("/")[1],
    description: config.description?.[locale] ?? repo?.description ?? "",
    url: repo?.html_url ?? `https://github.com/${path}`,
    homepage: repo?.homepage || undefined,
    language: repo?.language ?? undefined,
    stars: repo?.stargazers_count ?? 0,
    topics: repo?.topics ?? [],
    updatedAt: repo?.pushed_at,
    featured: config.featured ?? false,
  };
}

/** Selected projects merged with live GitHub data; falls back to local config on failure. */
export async function getProjects(locale: Locale): Promise<Project[]> {
  const repos = await Promise.all(projects.map((p) => fetchRepo(p.repo)));
  const merged = projects.map((config, i) => toProject(config, repos[i], locale));

  // Stable sort: featured first, otherwise keep the configured order.
  return merged.sort((a, b) => Number(b.featured) - Number(a.featured));
}
