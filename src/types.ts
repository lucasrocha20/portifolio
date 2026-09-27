import type { Localized } from "@/i18n/config";

export type SocialLinks = {
  github: string;
  linkedin: string;
  email: string;
  instagram?: string;
  /** Number with country code, digits only (e.g. "5585999999999"); used for wa.me links. */
  whatsapp?: string;
  /** Phone number as displayed (e.g. "+55 85 99999-9999"); used for tel: links. */
  phone?: string;
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

export type Service = {
  title: Localized;
  description: Localized;
  /** The client's pain this service addresses. */
  problem: Localized;
  /** What the client gets at the end. */
  outcome: Localized;
  tech: string[];
};

/** A big number on the services page. Localized because number formats differ. */
export type Metric = {
  value: Localized;
  label: Localized;
};

/** A project told as problem -> solution -> result on the services page. */
export type CaseStudy = {
  title: string;
  /** Repo name under GITHUB_USERNAME, linked as the source. */
  repo?: string;
  url?: string;
  problem: Localized;
  solution: Localized;
  result: Localized;
  tech: string[];
};

export type FaqItem = {
  question: Localized;
  answer: Localized;
};

export type Profile = {
  name: string;
  role: Localized;
  /** One-line value statement shown in the hero. */
  tagline: Localized;
  /** Short paragraphs for the About section. */
  bio: Localized<string[]>;
  location: Localized;
  /** e.g. "UTC−3"; shown next to the location for recruiters. */
  timeZone: string;
  yearsOfExperience: number;
  /** Status line on the recruiters page, e.g. "Open to new opportunities". */
  availability: Localized;
  workModel: Localized;
  /** Spoken languages, with level. */
  languages: Localized<string[]>;
  /** Short "main stack" line for recruiters. */
  mainStack: string[];
  focusAreas: Localized<string[]>;
  links: SocialLinks;
  /** Resume file per language, e.g. { en: "/cv-en.pdf", pt: "/cv-pt.pdf" }. */
  cvUrl?: Localized;
  experiences: Experience[];
  skillGroups: SkillGroup[];
  /** Shown in the "How can I help you?" section. */
  services: Service[];
  /** Results on the services page; years of experience is added from `yearsOfExperience`. */
  metrics: Metric[];
  caseStudies: CaseStudy[];
  faq: FaqItem[];
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
