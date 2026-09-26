# Portfolio v2: Audience-Based Pages

## Goal

Split the single long page into three routes, one per audience. Each route shows only what that visitor needs and behaves differently:

| Route         | Audience                                | Goal for the visitor                                 | Tone                        |
| ------------- | --------------------------------------- | ---------------------------------------------------- | --------------------------- |
| `/`           | Anyone (first visit, shared link)       | Understand who I am in ~10 seconds, then pick a path | Short, personal             |
| `/recruiters` | Recruiters, hiring managers, tech leads | Judge fit fast: experience, stack, availability, CV  | Factual, scannable, dense   |
| `/services`   | Companies/clients who want work done    | See what I solve, proof it works, and how to start   | Outcome-focused, persuasive |

All routes stay under the locale prefix (`/en/recruiters`, `/pt/services`, ...). `src/proxy.ts` already redirects prefix-less paths such as `/recruiters` to the right locale, so shared links like `site.com/recruiters` work without changes.

Stack, data strategy, i18n, theme and UX rules from v1 still apply (see git history of this file). No new packages.

## Routes and behavior

### 1. Home `/[lang]` (reduced to the main information)

Content:

1. **Hero**: photo, name, role, tagline, social icons (as today).
2. **Short about**: first bio paragraph only + quick facts row (years of experience, location, focus areas).
3. **Choose your path**: two large cards, the main call to action of the page.
   - "I'm hiring" → `/recruiters` ("Experience, stack and CV").
   - "I need a project done" → `/services` ("What I build and how we work").
4. **Featured projects**: only projects with `featured: true` (max 3), with a "See all" link to `/recruiters#projects`.
5. **Contact**: compact line with email + LinkedIn.

Behavior:

- Single column, no sticky side nav, no scroll-spy. Should fit in about 2 screens on desktop.
- Remember the chosen path: clicking a card sets a `VISITOR_PATH` cookie (`recruiters` | `services`). On the next visit, the home highlights that card ("Continue where you left off"). **No automatic redirect**, the home must always be reachable.

### 2. Recruiters `/[lang]/recruiters`

Content (reuses today's sections):

1. **Summary header**: name, role, a "status" line (e.g. "Open to senior/staff roles · Remote or hybrid · Brazil"), primary **Download CV** button, secondary LinkedIn button.
2. **Quick facts grid**: years of experience, current company, location/time zone, languages spoken, work model, main stack.
3. **Experience**: full timeline (current `Experience` component).
4. **Skills**: grouped chips (current `Skills` component).
5. **Projects**: all selected repos with live GitHub data (current `Projects` component).
6. **Contact**: email with a **copy to clipboard** button, LinkedIn, GitHub.

Behavior:

- Two-column layout from v1 (sticky left column + scroll-spy `Nav`) since this is the long, detailed page.
- **Print-friendly**: `@media print` styles hide nav/toggles/buttons, force the light theme and fit the page as a clean resume (a fallback while the CV PDFs are missing).
- **Copy email** button with a "Copied!" confirmation (small client component, `navigator.clipboard`).
- "Download CV" hidden if the PDF for the locale doesn't exist (already handled by `cvUrl`).

### 3. Services `/[lang]/services`

Content:

1. **Pitch header**: headline focused on outcomes (e.g. "I build software that saves your team hours every week"), one-line subtitle, primary CTA **Talk about your project**.
2. **Results**: 2–3 big numbers from real work (e.g. "2,606 hours saved per month", "R$492K saved per month", "7 years shipping production systems").
3. **Services**: current `Services` data, expanded per item with: problem it solves, what you get, example tech.
4. **How we work**: 4 steps (Discovery call → Proposal → Build with weekly updates → Delivery & support).
5. **Case studies**: 2–3 projects rewritten as problem → solution → result (new `caseStudies` content, can link to a repo).
6. **FAQ**: 4–6 questions (timelines, pricing model, remote work, stack, maintenance) using native `<details>`/`<summary>`, no JS.
7. **Contact CTA**: large block with email (`mailto:` with pre-filled subject "Project inquiry") + LinkedIn.

Behavior:

- Single column, landing-page style, CTA repeated at the top and the bottom.
- No scroll-spy nav; a small sticky "Talk about your project" button on mobile after scrolling past the header.
- Service JSON-LD (`ProfessionalService` with `provider: Person`) instead of only `Person`.

## Shared changes

- **Site header** (new `SiteHeader.tsx`): logo/name linking home, route links (Home · Recruiters · Services) with `aria-current="page"` on the active one, theme toggle, language switcher. Used on all three pages. Replaces the toggles inside today's `Header`.
- **Language switcher**: already keeps the rest of the path (`/en/recruiters` → `/pt/recruiters`). Verify with the new routes.
- **Nav**: take `sections` as a prop instead of the hard-coded `SECTION_IDS`, so each page can pass its own list (only `/recruiters` uses it for now).
- **Sections**: keep `About`, `Experience`, `Projects`, `Skills`, `Services`, `Contact` as building blocks; add props where a page needs a variant (e.g. `About` with `short`, `Projects` with `featuredOnly`).

## Content and types

- `src/types.ts`:
  - `Service`: add `problem`, `outcome` (`Localized`) and `tech: string[]`.
  - New `CaseStudy` (`title`, `problem`, `solution`, `result`, optional `repo`/`url`).
  - New `Metric` (`value`, `label`: `Localized`).
  - `Profile`: add `availability` (`Localized`), `languages` (`Localized<string[]>`), `metrics: Metric[]`, `caseStudies: CaseStudy[]`, `faq: { question: Localized; answer: Localized }[]`.
- `src/content/profile.ts`: fill the new fields (EN + PT).
- `src/i18n/dictionaries/{en,pt}.ts`: new keys for `siteNav`, `home.paths`, `recruiters.*`, `services.*` (headings, CTAs, "Copied!", step titles).

## Folder structure (new or changed)

```
src/
  app/[lang]/
    page.tsx                 # home, reduced
    recruiters/page.tsx      # new
    services/page.tsx        # new
    opengraph-image.tsx      # keep for home; add per-route images if cheap
  components/
    SiteHeader.tsx           # new, shared route nav + toggles
    PathCards.tsx            # new, "choose your path" (client: sets cookie)
    QuickFacts.tsx           # new
    CopyEmailButton.tsx      # new (client)
    Metrics.tsx              # new
    Process.tsx              # new
    CaseStudies.tsx          # new
    Faq.tsx                  # new
    Nav.tsx                  # sections as prop
  lib/
    site.ts                  # languageAlternates(path) instead of a constant
```

## SEO

- `generateMetadata` in each page with its own title/description:
  - Home: "Lucas Rocha · Senior Software Engineer".
  - Recruiters: "Lucas Rocha · Experience & CV".
  - Services: "Lucas Rocha · Software Development & Automation Services".
- Canonical and `hreflang` per route: turn `languageAlternates` into a function `languageAlternates(path)`.
- `sitemap.ts`: every route × locale (6 URLs) with alternates.
- Keep one `<h1>` per page.

## Implementation steps

- [x] `lib/site.ts`: `languageAlternates(path)`; update layout metadata and sitemap to use it.
  - Also `localePath(locale, path)` and a `routes` list that drives the sitemap (add `"/recruiters"`, `"/services"` when the pages exist).
- [x] Types + content: extend `types.ts`, fill `profile.ts` (EN/PT), add dictionary keys.
  - Also added `timeZone`, `workModel` and `links.whatsapp` to `Profile`; `metrics` holds only business numbers (years come from `yearsOfExperience`).
  - Case studies: DocuMind AI, LeadFlow, Marketingia (from their READMEs). Filled the TODO blurbs in `projects.ts`.
  - Review the draft copy: FAQ answers, process steps, services headline, spoken languages.
- [x] `SiteHeader` with route links, move theme toggle and language switcher into it.
  - Rendered in `[lang]/layout.tsx` (with the skip link), so every page gets it; every page needs `<main id="content">`.
  - Sticky; its height is `--header-h` in `globals.css` (6rem mobile, two rows / 4rem from `sm`). Sticky columns, mobile section titles and anchor offsets use it.
- [x] Make `Nav` accept `sections`; add variant props to existing sections.
  - `Nav`/`Header` take `sections` (ids typed from `dict.nav`).
  - `Section` `titleStyle`: `"sticky"` (pages with the side nav) or `"heading"` (single-column pages); passed through by `About`, `Projects`, `Services`, `Contact`.
  - Variants: `About short`, `Projects featuredOnly` + `seeAll`, `Services detailed`, `Contact compact`. Used from step 5 on.
- [x] `/recruiters` page: summary header, `QuickFacts`, existing sections, `CopyEmailButton`, print styles.
  - `Header` (left column) now takes the page intro as children: `Hero` on the home, `RecruiterSummary` here.
  - `lib/cv.ts` `getCvUrl()`: the CV button only renders when the PDF exists in `public/` (also on the home). Until then LinkedIn is the primary button.
  - `lib/metadata.ts` `pageMetadata()` builds title, canonical, hreflang, Open Graph and Twitter tags per page (used by the layout too); sub-pages point `og:image` to `/[lang]/opengraph-image` explicitly.
  - Added `mainStack` to `Profile` and `nav.facts` to the dictionaries; `/recruiters` added to `routes` (sitemap).
  - Print: light palette, no header/nav/buttons/icons, links printed as text, entries not split across pages (3 A4 pages).
- [x] `/services` page: pitch, `Metrics`, expanded services, `Process`, `CaseStudies`, `Faq`, contact CTA, JSON-LD.
  - New: `ServicesPitch`, `Metrics`, `Process`, `CaseStudies`, `Faq`, `ServicesContact`, `MobileCta`, `WhatsAppIcon`, `lib/contact.ts` (`mailtoUrl`, `whatsappUrl`).
  - Contact: email (subject pre-filled) + WhatsApp (message pre-filled), LinkedIn as a small link. WhatsApp also next to the top CTA.
  - `MobileCta`: floating button below `sm`, shown after the top CTA scrolls away and hidden while the contact block is on screen.
  - JSON-LD: an `@graph` with the `Person` and one `Service` per offering (`provider` = the Person). `ProfessionalService` expects a business address, so plain `Service` fits better.
- [x] Reduce home: short about, `PathCards` (with `VISITOR_PATH` cookie), featured projects, compact contact.
  - Single column, no side nav. `Hero` now holds the photo and social icons (no buttons: the path cards are the call to action); `About` lost the photo.
  - `PathCards` (client) saves the choice on click and reads it with `useSyncExternalStore`, so the static page needs no server cookie read (no hydration mismatch).
  - Removed unused texts: `hero.viewProjects`, `hero.contact`, `nav.about`, `nav.services`.
  - Only DocuMindAI is `featured`, so the home shows one project; mark more in `projects.ts` to show up to 3.
- [x] Per-page metadata, sitemap with 6 URLs.
  - `pageMetadata()` (step 5) on every page; `/recruiters` and `/services` in `routes`, so the sitemap lists 6 URLs.
- [x] Update README (routes section).
  - Also the new content fields, the "Download CV" rule, the lint/format/typecheck scripts and how to add a page.

Carried over from v1:

- [ ] Resume PDFs `public/cv-en.pdf`, `public/cv-pt.pdf`.

## Open decisions (confirm before building)

- Recruiters status line: open to new roles or not? Which work models (remote / hybrid / on-site)? remote
- Services: show a pricing model (hourly / per project / "on request") or nothing about price? nothing about price
- Contact for services: email only, or also WhatsApp / a scheduling link (Calendly, Cal.com)? email and whatsapp, number (+55 85996973035)
- Which 2–3 projects become case studies, and which metrics can be shown publicly? the projects what already have in the project

## Out of scope

Contact form backend, blog, analytics beyond Vercel's, A/B tests, automatic redirect based on the remembered path.

## Verification

- `npm run lint`, `npm run format:check`, `npm run typecheck` and `npm run build` pass.
- `/`, `/recruiters`, `/services` (no prefix) redirect to the right locale; switching language keeps the current route and hash.
- Each page has its own title, canonical and hreflang; `/sitemap.xml` lists 6 URLs.
- Home: path cards set the cookie and the highlight shows on reload.
- Recruiters: scroll-spy works, copy email works, print preview looks like a clean one-page resume.
- Services: FAQ works with keyboard and without JS, mailto opens with the subject filled.
- Manual check at 360px, 768px and 1280px, both themes, keyboard-only.
