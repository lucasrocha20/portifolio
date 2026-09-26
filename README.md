# portifolio

Personal portfolio of Lucas Rocha, Senior Software Engineer. Built with Next.js (App Router), TypeScript and Tailwind CSS, in English and Portuguese (`/en`, `/pt`).

## Development

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
```

`npm run build` and `npm run lint` must pass before deploying.

## Editing content

| What                                     | Where                                                          |
| ---------------------------------------- | -------------------------------------------------------------- |
| Bio, experience, skills, services, links | `src/content/profile.ts` (texts as `{ en, pt }`)               |
| GitHub projects shown                    | `src/content/projects.ts` (repo names + optional descriptions) |
| UI labels (buttons, titles)              | `src/i18n/dictionaries/en.ts` and `pt.ts`                      |
| Resume files                             | `public/cv-en.pdf` and `public/cv-pt.pdf`                      |

Project stars, languages and topics are fetched from GitHub and refreshed daily.

## Environment variables

| Name                   | Required    | Purpose                                                                                  |
| ---------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `GITHUB_TOKEN`         | No          | Avoids the GitHub API rate limit (a token with no scopes is enough)                      |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public URL for canonical links, sitemap and link previews, e.g. `https://lucasrocha.dev` |

## Deploy (Vercel)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new). The defaults for Next.js work as they are.
2. Add the environment variables above under **Settings → Environment Variables**.
3. Deploy. Each push to `main` deploys to production, and other branches get preview URLs.
4. Optional: add a custom domain under **Settings → Domains**, then set `NEXT_PUBLIC_SITE_URL` to it and redeploy.
