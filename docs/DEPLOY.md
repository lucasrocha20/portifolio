# Deploy (Vercel)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new). The defaults for Next.js work as they are.
2. Add the environment variables from the README under **Settings → Environment Variables**.
3. Deploy. Other branches get preview URLs from Vercel's Git integration.
   Production is deployed by GitHub Actions (`.github/workflows/deploy.yml`) on each push to `main`, after lint, format and typecheck pass. `vercel.json` turns off Vercel's own deploys for `main` so it isn't deployed twice. The workflow needs these repo secrets (**Settings → Secrets and variables → Actions**):
   - `VERCEL_TOKEN`: create at [vercel.com/account/tokens](https://vercel.com/account/tokens).
   - `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`: run `vercel link`, then copy `orgId` and `projectId` from `.vercel/project.json`.
4. Optional: add a custom domain under **Settings → Domains**, then set `NEXT_PUBLIC_SITE_URL` to it and redeploy.

## Troubleshooting

- **Workflow fails at "Pull Vercel settings and env"**: one of the three secrets is missing or wrong. Check them under **Settings → Secrets and variables → Actions**.
- **Workflow fails at "Check"**: run `npm run lint`, `npm run format:check` and `npm run typecheck` locally and fix what they report.
- **`main` deployed twice**: make sure `vercel.json` still disables Git deploys for `main`.
