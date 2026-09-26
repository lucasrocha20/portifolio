import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

// AI crawlers and assistants, allowed explicitly so the portfolio can be
// found and cited by AI search and chat tools.
const aiBots = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google Gemini / Apple Intelligence
  "Google-Extended",
  "Applebot-Extended",
  // Others
  "meta-externalagent",
  "Amazonbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiBots, allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
