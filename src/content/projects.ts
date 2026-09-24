import type { ProjectConfig } from "@/types";

export const GITHUB_USERNAME = "lucasrocha20";

// Repos shown on the page, in display order (featured ones are listed first).
// Without a `description`, the GitHub description is used for every language.
export const projects: ProjectConfig[] = [
  {
    repo: "DocuMindAI",
    featured: true,
    description: {
      en: "Intelligent document processing platform.",
      pt: "Plataforma inteligente de processamento de documentos.",
    },
  },
  {
    repo: "LeadFlow",
    description: {
      en: "TODO: short description of LeadFlow.",
      pt: "TODO: descrição curta do LeadFlow.",
    },
  },
  {
    repo: "marketing-ia",
    description: {
      en: "TODO: short description of marketing-ia.",
      pt: "TODO: descrição curta do marketing-ia.",
    },
  },
];
