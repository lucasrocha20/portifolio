import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="pb-16 text-sm sm:pb-0">
      <p>
        © {new Date().getFullYear()} {profile.name}. {dict.footer.builtWith}
      </p>
    </footer>
  );
}
