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
      en: "Automated lead follow-up: captures, scores and contacts leads over WhatsApp and email, and keeps HubSpot in sync.",
      pt: "Follow-up automático de leads: captura, pontua e contata leads por WhatsApp e e-mail, e mantém o HubSpot sincronizado.",
    },
  },
  {
    repo: "marketing-ia",
    description: {
      en: "AI-generated Instagram content ideas (Reels, carousels, Stories) from a niche and a short description.",
      pt: "Ideias de conteúdo para Instagram (Reels, carrosséis, Stories) geradas com IA a partir de um nicho e uma descrição.",
    },
  },
];
