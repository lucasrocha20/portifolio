import type { Localized } from "@/i18n/config";

export type SocialLinks = {
  github: string;
  linkedin: string;
  email: string;
};

export type Experience = {
  company: string;
  role: Localized;
  /** Format "YYYY-MM"; omit `end` for the current position. */
  start: string;
  end?: string;
  location?: Localized;
  /** 2–4 impact-focused bullets. */
  highlights: Localized<string[]>;
  tech: string[];
};

export type SkillGroup = {
  name: Localized;
  skills: string[];
};

export type Profile = {
  name: string;
  role: Localized;
  /** One-line value statement shown in the hero. */
  tagline: Localized;
  /** Short paragraphs for the About section. */
  bio: Localized<string[]>;
  location: Localized;
  yearsOfExperience: number;
  focusAreas: Localized<string[]>;
  links: SocialLinks;
  /** Resume file per language, e.g. { en: "/cv-en.pdf", pt: "/cv-pt.pdf" }. */
  cvUrl?: Localized;
  experiences: Experience[];
  skillGroups: SkillGroup[];
};

/** A repo selected in `content/projects.ts`. */
export type ProjectConfig = {
  /** Repo name, or "owner/name" for repos outside the default owner. */
  repo: string;
  /** Custom blurb; takes precedence over the GitHub description. */
  description?: Localized;
  featured?: boolean;
};

/** A selected repo merged with its GitHub metadata. */
export type Project = {
  name: string;
  description: string;
  url: string;
  homepage?: string;
  language?: string;
  stars: number;
  topics: string[];
  updatedAt?: string;
  featured: boolean;
};
