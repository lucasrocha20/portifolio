import type { ProjectConfig } from "@/types";

export const GITHUB_USERNAME = "lucasrocha20";

export const projects: ProjectConfig[] = [
  {
    repo: "DocuMindAI",
    featured: true,
    description: {
      en: "Upload invoice PDFs and get structured data back: AI extracts supplier, totals and line items, and every field is validated before it's saved.",
      pt: "Envie PDFs de faturas e receba os dados estruturados: a IA extrai fornecedor, totais e itens, e cada campo é validado antes de ser salvo.",
    },
  },
  {
    repo: "LeadFlow",
    description: {
      en: "Automated lead follow-up: captures and scores leads, contacts them over WhatsApp and email in seconds, and keeps HubSpot in sync.",
      pt: "Follow-up automático de leads: captura e pontua leads, faz o contato por WhatsApp e e-mail em segundos e mantém o HubSpot sincronizado.",
    },
  },
  {
    repo: "bot-notify",
    featured: true,
    description: {
      en: "Instant delivery for Kiwify sales: when a purchase is approved, it emails the buyer and grants access to the product's Google Drive folder, with no manual work and no duplicate orders.",
      pt: "Entrega automática de vendas da Kiwify: quando a compra é aprovada, envia um e-mail ao comprador e libera o acesso à pasta do produto no Google Drive, sem trabalho manual e sem pedidos duplicados.",
    },
  },
];
