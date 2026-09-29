import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudies } from "@/components/CaseStudies";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Metrics } from "@/components/Metrics";
import { MobileCta } from "@/components/MobileCta";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { ServicesContact } from "@/components/ServicesContact";
import { PITCH_CTA_ID, ServicesPitch } from "@/components/ServicesPitch";
import { profile } from "@/content/profile";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { whatsappUrl } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";
import { localePath, siteUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return pageMetadata(lang, "/services", getDictionary(lang).services.meta);
}

export default async function ServicesPage({
  params,
}: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const url = `${siteUrl}${localePath(lang, "/services")}`;
  const personId = `${siteUrl}/#person`;

  // One Service per offering, all provided by the same Person.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        jobTitle: profile.role[lang],
        url: `${siteUrl}${localePath(lang)}`,
        email: `mailto:${profile.links.email}`,
        ...(profile.links.whatsapp && {
          telephone: `+${profile.links.whatsapp}`,
        }),
        sameAs: [profile.links.github, profile.links.linkedin],
      },
      ...profile.services.map((service) => ({
        "@type": "Service",
        name: service.title[lang],
        description: service.description[lang],
        serviceType: service.title[lang],
        url,
        provider: { "@id": personId },
      })),
    ],
  };

  return (
    <div className="mx-auto min-h-screen w-full max-w-6xl px-6 md:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main id="content" className="pb-12">
        <ServicesPitch dict={dict} />
        <Metrics locale={lang} dict={dict} />
        <Services locale={lang} dict={dict} detailed titleStyle="heading" />
        <Process dict={dict} />
        <CaseStudies locale={lang} dict={dict} />
        <Faq locale={lang} dict={dict} />
        <ServicesContact dict={dict} />
        <Footer />
      </main>
      <MobileCta
        label={dict.services.cta}
        afterId={PITCH_CTA_ID}
        targetId="contact"
        href={
          dict.services.primaryChannel === "whatsapp"
            ? whatsappUrl(dict.services.contact.whatsappMessage)
            : undefined
        }
      />
    </div>
  );
}
