import type { Profile } from "@/types";

// TODO: replace the placeholders below with data from LinkedIn.
// Translatable texts use { en, pt }; names and tech stay as plain strings.
export const profile: Profile = {
  name: "Lucas Rocha",
  role: {
    en: "Senior Software Engineer",
    pt: "Engenheiro de Software Sênior",
  },
  tagline: {
    en: "I build reliable, scalable products from backend to UI.",
    pt: "Construo produtos confiáveis e escaláveis, do backend à interface.",
  },
  bio: {
    en: [
      "Senior Software Engineer with experience designing and shipping production systems end to end.",
      "I care about clean architecture, developer experience, and turning complex problems into simple solutions.",
    ],
    pt: [
      "Engenheiro de Software Sênior com experiência em projetar e entregar sistemas em produção de ponta a ponta.",
      "Me importo com arquitetura limpa, experiência do desenvolvedor e em transformar problemas complexos em soluções simples.",
    ],
  },
  location: { en: "Brazil", pt: "Brasil" },
  yearsOfExperience: 8,
  focusAreas: {
    en: ["Backend", "Frontend", "Cloud"],
    pt: ["Backend", "Frontend", "Cloud"],
  },
  links: {
    github: "https://github.com/lucasrocha20",
    linkedin: "https://www.linkedin.com/in/your-username",
    email: "lucas.rochaadev@gmail.com",
  },
  cvUrl: { en: "/cv-en.pdf", pt: "/cv-pt.pdf" },
  experiences: [
    {
      company: "Company Name",
      role: {
        en: "Senior Software Engineer",
        pt: "Engenheiro de Software Sênior",
      },
      start: "2022-01",
      location: { en: "Remote", pt: "Remoto" },
      highlights: {
        en: [
          "Led the redesign of X, cutting latency by Y%.",
          "Mentored engineers and drove code review standards.",
        ],
        pt: [
          "Liderei o redesign de X, reduzindo a latência em Y%.",
          "Mentorei engenheiros e defini padrões de code review.",
        ],
      },
      tech: ["TypeScript", "Node.js", "React", "AWS"],
    },
    {
      company: "Previous Company",
      role: { en: "Software Engineer", pt: "Engenheiro de Software" },
      start: "2019-03",
      end: "2021-12",
      highlights: {
        en: ["Built and maintained services handling Z requests/day."],
        pt: ["Desenvolvi e mantive serviços processando Z requisições/dia."],
      },
      tech: ["Java", "Spring", "PostgreSQL"],
    },
  ],
  skillGroups: [
    {
      name: { en: "Languages", pt: "Linguagens" },
      skills: ["TypeScript", "JavaScript", "Java", "SQL"],
    },
    {
      name: { en: "Frontend", pt: "Frontend" },
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      name: { en: "Backend", pt: "Backend" },
      skills: ["Node.js", "Spring", "REST", "GraphQL"],
    },
    {
      name: { en: "Cloud / DevOps", pt: "Cloud / DevOps" },
      skills: ["AWS", "Docker", "CI/CD"],
    },
    {
      name: { en: "Data", pt: "Dados" },
      skills: ["PostgreSQL", "Redis"],
    },
  ],
};
