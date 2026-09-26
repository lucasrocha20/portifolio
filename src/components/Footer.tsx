import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="pb-16 text-sm sm:pb-0">
      <p>
        © {new Date().getFullYear()} {profile.name}.
      </p>
    </footer>
  );
}
