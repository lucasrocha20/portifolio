# Portfolio: Implementation Plan

## Goal
A fast single-page portfolio to me "Lucas Rocha" for a senior software engineer. It should be easy to read, rank well in search, and be easy to update. No CMS, no database, no auth. Use the example of https://brittanychiang.com/, non neccessarilly equal. Implement good pallet of colors.

## Stack
- **Next.js (App Router, latest) + TypeScript (strict)**
- **Tailwind CSS**: no component library
- **next/font**: self-hosted font (e.g. Inter / Geist)
- **Vercel** for hosting (free tier, built-in ISR)
- Nothing else. Add packages only when they're clearly needed.

## Data strategy (the key decision)
| Source | How | Why |
|---|---|---|
| GitHub projects | `src/content/projects.ts` lists the **repo names I choose**, each with an optional custom blurb or highlight. At build time, fetch the metadata (description, stars, language, topics, homepage, updated_at) from the GitHub REST API. | I choose what's shown, and stars and descriptions stay current |
| LinkedIn experience/skills | Copied by hand into `src/content/profile.ts` (typed) | LinkedIn has no public API and scraping it breaks the ToS. Updating by hand is fine because this data rarely changes. |

- Fetch with `fetch(url, { next: { revalidate: 86400 } })` so the data refreshes daily through ISR.
- Optional `GITHUB_TOKEN` env var to avoid rate limits (60 req/h without a token).
- If the GitHub call fails, fall back to the local blurb so the build never breaks.

## Folder structure
```
src/
  app/
    layout.tsx          # fonts, metadata, theme
    page.tsx            # the landing page (composes sections)
    opengraph-image.tsx # generated OG image
    sitemap.ts
    robots.ts
    globals.css
  components/
    Header.tsx          # sticky nav with anchor links + theme toggle
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    ProjectCard.tsx
    Skills.tsx
    Contact.tsx
    Footer.tsx
  content/
    profile.ts          # name, headline, bio, links, experiences, skills
    projects.ts         # selected repo names + optional overrides
  lib/
    github.ts           # getProjects(): fetch + merge with overrides
  types.ts              # Profile, Experience, Skill, Project types
```

## Page sections (in order)
1. **Hero**: name, role ("Senior Software Engineer"), a one-line value statement, CTAs (View projects, Contact, Download CV), GitHub/LinkedIn icons.
2. **About**: 2–3 short paragraphs and a few quick facts (years of experience, location, focus areas).
3. **Experience**: vertical timeline showing company, title, period, 2–4 impact bullets, and a tech tag list. Most recent first.
4. **Projects**: responsive grid (1/2/3 cols). Each card shows the name, a short blurb, main language, stars, topic tags, and links to the repo and live demo. Pinned or featured projects come first.
5. **Skills**: grouped chips (Languages, Frontend, Backend, Cloud/DevOps, Data). No progress bars.
6. **How can I help you ?**
7. **Contact**: email (mailto), LinkedIn, GitHub and Instagram. No form.

## UX guidelines
- Dark mode by default, following the system setting, plus a manual toggle (a class on `<html>` and a small inline script to prevent a flash of the wrong theme).
- Clean typography, generous whitespace, max width ~`72rem`, one accent color.
- Sticky header whose anchor links highlight the active section. Smooth scrolling.
- Mobile-first, with no horizontal scroll at 360px.
- Accessibility: semantic landmarks, visible focus states, AA contrast, `prefers-reduced-motion` respected, alt text.
- Motion: CSS fade-in only. No animation library.

## SEO
- `metadata` in `layout.tsx`: title template, description, canonical URL, `metadataBase`, Open Graph and Twitter cards.
- `opengraph-image.tsx` generated with `next/og`.
- `sitemap.ts` and `robots.ts`.
- JSON-LD `Person` schema (name, jobTitle, sameAs: GitHub/LinkedIn) in the page.
- Static rendering with ISR. Target Lighthouse ≥ 95 in every category.
- One `<h1>`, with headings in logical order.

## Implementation steps
- [x] `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"`
- [x] Define the types in `src/types.ts` and fill in `profile.ts` from LinkedIn (experience, skills, bio).
- [x] Build `lib/github.ts` (`getProjects()`), then list the chosen repos in `projects.ts`.
- [x] Build the section components and compose them in `page.tsx`.
- [x] Theme toggle and header active-section highlight (the only client components).
- [x] SEO: metadata, OG image, sitemap, robots, JSON-LD, `hreflang` alternates for `/en` and `/pt`.
- [ ] Add `public/cv-en.pdf`, `public/cv-pt.pdf` and a favicon.
  - [x] Favicon: "LR" icon in `src/app/` (`favicon.ico`, `icon.png`, `apple-icon.png`).
  - [ ] Resume PDFs: waiting for the files.
- [ ] Deploy to Vercel. Set `GITHUB_TOKEN` and the site URL env var.
  - [x] Deploy docs in `README.md`, `.env.example`, branch `feat/portfolio` pushed.
  - [ ] Import the repo at vercel.com/new and set the env vars (your account).
  - [ ] Replace placeholder content, then merge to `main` for production.
- [x] Make a internacionalization to EN and PT, getting language from navegator and a select to change language, make simple of change texts.
  - Routes `/en` and `/pt` (`app/[lang]`); `src/proxy.ts` redirects `/` using the `NEXT_LOCALE` cookie, then `Accept-Language`, then `en`.
  - UI texts: `src/i18n/dictionaries/{en,pt}.ts`. Content texts: `{ en, pt }` fields in `profile.ts` / `projects.ts`.
  - `LanguageSwitcher` select sets the cookie and navigates to the other locale.

## Out of scope (on purpose)
Blog/MDX, CMS, contact form backend, analytics beyond Vercel's, tests beyond type-check and lint. Add these later only if needed.

## Verification
- `npm run build` passes with no type or lint errors.
- `npm run dev`: every section renders, and projects show live GitHub data.
- If the GitHub token is missing or wrong, the site still builds and falls back to the local blurbs.
- Lighthouse (mobile) ≥ 95. Check the OG preview (e.g. opengraph.xyz) and `/sitemap.xml` and `/robots.txt`.
- Manual check at 360px, 768px and 1280px, in both themes, with keyboard-only navigation.
