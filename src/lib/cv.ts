import { existsSync } from "node:fs";
import path from "node:path";

import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";

/** CV link for `locale`, or undefined while the PDF isn't in `public/` (no broken link). */
export function getCvUrl(locale: Locale): string | undefined {
  const url = profile.cvUrl?.[locale];
  if (!url) return undefined;
  return existsSync(path.join(process.cwd(), "public", url)) ? url : undefined;
}
