// UI texts in English. `pt.ts` must have the same keys (enforced by the Dictionary type).
export const en = {
  meta: {
    title: "Lucas Rocha | Senior Software Engineer",
    description:
      "Portfolio of Lucas Rocha, Senior Software Engineer: experience, projects, and skills.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    services: "Services",
    contact: "Contact",
    resume: "Resume",
  },
  skipToContent: "Skip to content",
  hero: {
    viewProjects: "View projects",
    contact: "Get in touch",
    downloadCv: "Download CV",
  },
  about: {
    title: "About",
    yearsOfExperience: "years of experience",
    location: "Location",
    focus: "Focus",
  },
  experience: {
    title: "Experience",
    present: "Present",
  },
  projects: {
    title: "Projects",
    featured: "Featured",
    stars: "stars",
    source: "Source",
    demo: "Live demo",
  },
  skills: {
    title: "Skills",
  },
  services: {
    title: "How can I help you?",
  },
  contact: {
    title: "Contact",
    text: "Open to new opportunities and conversations. Feel free to reach out.",
  },
  resume: {
    title: "Resume",
    text: "A one-page summary of my experience, skills, and education.",
    download: "Download resume (EN)",
  },
  footer: {
    builtWith: "Built with Next.js and Tailwind CSS.",
  },
  language: {
    label: "Language",
    en: "English",
    pt: "Português",
  },
};

export type Dictionary = typeof en;
