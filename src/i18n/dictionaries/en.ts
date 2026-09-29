// UI texts in English. `pt.ts` must have the same keys (enforced by the Dictionary type).
export const en = {
  meta: {
    title: "Lucas Rocha | Senior Software Engineer",
    description:
      "Portfolio of Lucas Rocha, Senior Software Engineer: experience, projects, and skills.",
  },
  nav: {
    facts: "Quick facts",
    experience: "Experience",
    projects: "Solutions I've already built",
    skills: "Skills",
    contact: "Contact",
  },
  siteNav: {
    label: "Pages",
    home: "Home",
    recruiters: "Resume",
    services: "Services",
  },
  home: {
    paths: {
      title: "What brings you here?",
      recruiters: {
        title: "I've an open role",
        text: "Experience, stack and CV",
      },
      services: {
        title: "I need a project done",
        text: "What I build and how we work",
      },
      lastVisited: "Continue where you left off",
    },
    seeAllProjects: "See more projects",
  },
  recruiters: {
    meta: {
      title: "Lucas Rocha | Experience & CV",
      description:
        "Experience, skills, projects and CV of Lucas Rocha, Senior Software Engineer. Open to remote opportunities.",
    },
    quickFacts: {
      title: "Quick facts",
      experience: "Experience",
      years: "years",
      currentCompany: "Current company",
      location: "Location",
      languages: "Languages",
      workModel: "Work model",
      mainStack: "Main stack",
    },
    copyEmail: "Copy email",
    copied: "Copied!",
  },
  skipToContent: "Skip to content",
  hero: {
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
    title: "Solutions I've already built",
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
    meta: {
      title: "Lucas Rocha | Software Development & Automation Services",
      description:
        "Custom software, process automation and AI integrations by Lucas Rocha, Senior Software Engineer. Remote, from Brazil.",
    },
    headline:
      "I develop software and automated processes that save your team hours of work",
    subtitle:
      "Custom applications, process automation and AI integrations, designed around how your business works.",
    cta: "Book a free 20-min call",
    /** Channel of the main CTAs; the other one is shown as secondary. */
    primaryChannel: "email" as "email" | "whatsapp",
    results: {
      title: "Results",
      years: "years building production systems",
    },
    problem: "The problem",
    outcome: "What you get",
    process: {
      title: "How we work",
      steps: [
        {
          title: "Discovery call",
          text: "A short conversation to understand your problem, goals and current systems.",
        },
        {
          title: "Proposal",
          text: "A clear scope with steps and an estimated timeline, so you know what to expect.",
        },
        {
          title: "Build",
          text: "Development in small steps, with weekly updates and something you can try along the way.",
        },
        {
          title: "Delivery & support",
          text: "Deployment, documentation and a handover, with support for adjustments after launch.",
        },
      ],
    },
    caseStudies: {
      title: "Case studies",
      problem: "Problem",
      solution: "Solution",
      result: "Result",
      source: "View code",
    },
    faq: {
      title: "Frequently asked questions",
    },
    contact: {
      title: "Let's talk about your project",
      text: "Tell me what you need and I'll get back to you to schedule a short call.",
      noCommitment:
        "No commitment: you get a proposal with scope and timeline before you decide.",
      email: "Send an email",
      whatsapp: "Message on WhatsApp",
      emailSubject: "Project inquiry",
      whatsappMessage:
        "Hi Lucas! I'd like to book the free 20-min call about a project.",
    },
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
