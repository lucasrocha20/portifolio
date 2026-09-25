import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { profile } from "@/content/profile";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getProjects } from "@/lib/github";
import { localeTags, siteUrl } from "@/lib/site";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const projects = await getProjects(lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role[lang],
    description: profile.tagline[lang],
    url: `${siteUrl}/${lang}`,
    email: `mailto:${profile.links.email}`,
    knowsLanguage: Object.values(localeTags),
    knowsAbout: profile.skillGroups.flatMap((g) => g.skills),
    sameAs: [profile.links.github, profile.links.linkedin, profile.links.instagram].filter(Boolean),
  };

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can't close the script tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        {dict.skipToContent}
      </a>

      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header locale={lang} dict={dict} />

        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About locale={lang} dict={dict} />
          <Experience locale={lang} dict={dict} />
          <Projects projects={projects} dict={dict} />
          <Skills locale={lang} dict={dict} />
          <Services locale={lang} dict={dict} />
          <Resume locale={lang} dict={dict} />
          <Contact dict={dict} />
          <Footer dict={dict} />
        </main>
      </div>
    </div>
  );
}
