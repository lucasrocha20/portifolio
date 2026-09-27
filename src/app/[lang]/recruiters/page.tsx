import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { QuickFacts } from "@/components/QuickFacts";
import { RecruiterSummary } from "@/components/RecruiterSummary";
import { Skills } from "@/components/Skills";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getProjects } from "@/lib/github";
import { pageMetadata } from "@/lib/metadata";

const SECTIONS = [
  "facts",
  "experience",
  "skills",
  "projects",
  "contact",
] as const;

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/recruiters">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return pageMetadata(lang, "/recruiters", getDictionary(lang).recruiters.meta);
}

export default async function RecruitersPage({
  params,
}: PageProps<"/[lang]/recruiters">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const projects = await getProjects(lang);

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 print:max-w-none print:px-2 print:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header dict={dict} sections={SECTIONS}>
          <RecruiterSummary locale={lang} dict={dict} />
        </Header>

        <main id="content" className="pt-16 lg:w-1/2 lg:py-16 print:pt-8">
          <QuickFacts locale={lang} dict={dict} />
          <Experience locale={lang} dict={dict} />
          <Skills locale={lang} dict={dict} />
          <Projects projects={projects} dict={dict} />
          <Contact dict={dict} copyEmail showPhone />
          <Footer />
        </main>
      </div>
    </div>
  );
}
