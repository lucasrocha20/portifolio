import { profile } from "@/content/profile";

/** mailto: link with a pre-filled subject. */
export function mailtoUrl(subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${profile.links.email}${query}`;
}

/** tel: link, or undefined without a phone number. */
export function telUrl() {
  const { phone } = profile.links;
  if (!phone) return undefined;
  return `tel:+${phone.replace(/\D/g, "")}`;
}

/** wa.me link with a pre-filled message, or undefined without a WhatsApp number. */
export function whatsappUrl(message?: string) {
  const { whatsapp } = profile.links;
  if (!whatsapp) return undefined;
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${whatsapp}${query}`;
}
