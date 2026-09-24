import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { profile } from "@/content/profile";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

// Placeholder until the sections are built (step 4).
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-24">
      <LanguageSwitcher locale={lang} labels={dict.language} />
      <h1 className="text-4xl font-bold">{profile.name}</h1>
      <p className="text-xl">{profile.role[lang]}</p>
      <p>{profile.tagline[lang]}</p>
      <a href="#projects" className="underline">
        {dict.hero.viewProjects}
      </a>
    </main>
  );
}
