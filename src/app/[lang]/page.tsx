import { notFound } from "next/navigation";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PathCards } from "@/components/PathCards";
import { Projects } from "@/components/Projects";
import { profile } from "@/content/profile";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getProjects } from "@/lib/github";
import { localePath, localeTags, siteUrl } from "@/lib/site";

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
    sameAs: [
      profile.links.github,
      profile.links.linkedin,
      profile.links.instagram,
    ].filter(Boolean),
  };

  return (
    <div className="mx-auto min-h-screen w-full max-w-6xl px-6 md:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main id="content" className="pb-12">
        <Hero locale={lang} />
        <PathCards locale={lang} labels={dict.home.paths} />
        <About locale={lang} dict={dict} short titleStyle="heading" />
        <Projects
          projects={projects}
          dict={dict}
          featuredOnly
          seeAll={{
            href: `${localePath(lang, "/recruiters")}#projects`,
            label: dict.home.seeAllProjects,
          }}
          titleStyle="heading"
        />
        <Contact dict={dict} compact titleStyle="heading" />
        <Footer />
      </main>
    </div>
  );
}
