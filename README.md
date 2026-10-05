# portifolio

Personal portfolio of Lucas Rocha, Senior Software Engineer. Built with Next.js (App Router), TypeScript and Tailwind CSS, in English and Portuguese (`/en`, `/pt`).

## Development

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
```

| Script              | What it does                                          |
| ------------------- | ----------------------------------------------------- |
| `npm run lint`      | ESLint (`lint:fix` applies the automatic fixes)       |
| `npm run format`    | Prettier on every file (`format:check` only checks)   |
| `npm run typecheck` | Generates Next.js route types and runs `tsc --noEmit` |
| `npm run build`     | Production build                                      |

`lint`, `format:check`, `typecheck` and `build` must pass before deploying. In VS Code, the recommended extensions format and fix lint on save.

## Pages

Every page exists in both languages. Links without the language prefix (`/`, `/recruiters`, `/services`) redirect to the visitor's language: saved choice, then browser language, then English.

| Route                | For                         | Content                                                                                                                                                   |
| -------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/[lang]`            | Anyone                      | Short intro, "choose your path" cards, featured projects, contact. Remembers the picked path (`VISITOR_PATH` cookie) and highlights it on the next visit. |
| `/[lang]/recruiters` | Recruiters, hiring managers | Availability, quick facts, experience, skills, all projects, CV download, copy-email button. Prints as a clean resume.                                    |
| `/[lang]/services`   | Clients                     | Pitch, results, services, how we work, case studies, FAQ, contact by email or WhatsApp.                                                                   |

To add a page: create `src/app/[lang]/<name>/page.tsx` with `<main id="content">` and `generateMetadata` returning `pageMetadata(lang, "/<name>", ...)` (`src/lib/metadata.ts`), add its path to `routes` in `src/lib/site.ts` (sitemap) and a link in `src/components/SiteNav.tsx`.

## Editing content

| What                                                   | Where                                                                                               |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Bio, experience, skills, links (incl. WhatsApp)        | `src/content/profile.ts` (texts as `{ en, pt }`)                                                    |
| Availability, work model, spoken languages, main stack | `src/content/profile.ts` (recruiters page)                                                          |
| Services, results, case studies, FAQ                   | `src/content/profile.ts` (services page)                                                            |
| GitHub projects shown                                  | `src/content/projects.ts` (repo names, optional descriptions; `featured` ones on the home, up to 3) |
| UI texts (headings, buttons, process steps)            | `src/i18n/dictionaries/en.ts` and `pt.ts`                                                           |
| Resume files                                           | `public/cv-en.pdf` and `public/cv-pt.pdf`                                                           |

Project stars, languages and topics are fetched from GitHub and refreshed daily. The "Download CV" button only appears once the PDF for that language exists in `public/`.

## Environment variables

| Name                   | Required    | Purpose                                                                                  |
| ---------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `GITHUB_TOKEN`         | No          | Avoids the GitHub API rate limit (a token with no scopes is enough)                      |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public URL for canonical links, sitemap and link previews, e.g. `https://lucasrocha.dev` |

## Deploy (Vercel)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new). The defaults for Next.js work as they are.
2. Add the environment variables above under **Settings → Environment Variables**.
3. Deploy. Other branches get preview URLs from Vercel's Git integration.
   Production is deployed by GitHub Actions (`.github/workflows/deploy.yml`) on each push to `main`, after lint, format and typecheck pass. `vercel.json` turns off Vercel's own deploys for `main` so it isn't deployed twice. The workflow needs these repo secrets (**Settings → Secrets and variables → Actions**):
   - `VERCEL_TOKEN`: create at [vercel.com/account/tokens](https://vercel.com/account/tokens).
   - `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`: run `vercel link`, then copy `orgId` and `projectId` from `.vercel/project.json`.
4. Optional: add a custom domain under **Settings → Domains**, then set `NEXT_PUBLIC_SITE_URL` to it and redeploy.
