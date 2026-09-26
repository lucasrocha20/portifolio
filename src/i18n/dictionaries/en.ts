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
    text: "Open to new opportunities, freelance projects, and collaborations. Whether you're looking for a software engineer to join your team or to build and automate a solution for your business, feel free to reach out.",
  },
  theme: {
    toggle: "Toggle dark mode",
  },
  language: {
    label: "Language",
    en: "English",
    pt: "Português",
  },
};

export type Dictionary = typeof en;
