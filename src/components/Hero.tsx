import Image from "next/image";

import avatar from "@/app/assets/avatar.jpg";
import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";

import { SocialLinks } from "./SocialLinks";

/** Top of the home: photo, name, role and tagline. */
export function Hero({ locale }: { locale: Locale }) {
  return (
    <div className="fade-in flex flex-col items-start gap-8 py-12 sm:flex-row sm:items-center md:py-20">
      <Image
        src={avatar}
        alt={profile.name}
        width={144}
        height={144}
        preload
        placeholder="blur"
        className="size-28 shrink-0 rounded-full object-cover ring-2 ring-accent ring-offset-4 ring-offset-bg sm:size-36"
      />
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-fg sm:text-xl">
          {profile.role[locale]}
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          {profile.tagline[locale]}
        </p>
        <SocialLinks className="mt-6" />
      </div>
    </div>
  );
}
