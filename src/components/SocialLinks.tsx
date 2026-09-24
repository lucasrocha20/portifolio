import { profile } from "@/content/profile";
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from "./icons";

export function SocialLinks({ className = "" }: { className?: string }) {
  const { github, linkedin, instagram, email } = profile.links;
  const links = [
    { label: "GitHub", href: github, Icon: GitHubIcon },
    { label: "LinkedIn", href: linkedin, Icon: LinkedInIcon },
    ...(instagram ? [{ label: "Instagram", href: instagram, Icon: InstagramIcon }] : []),
    { label: "Email", href: `mailto:${email}`, Icon: MailIcon },
  ];

  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            aria-label={label}
            title={label}
            className="block text-muted transition-colors hover:text-accent"
          >
            <Icon width={22} height={22} />
          </a>
        </li>
      ))}
    </ul>
  );
}
