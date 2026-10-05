# Changelog

All notable changes to this project are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and the project uses [Semantic Versioning](https://semver.org/).

## [0.2.2] - 2026-10-05

### ### Changed

- Autodeploy

## [0.2.1] - 2026-10-05

### Added

- Production deploys to Vercel from GitHub Actions on each push to `main`, after lint, format and typecheck pass.
- Deploy guide in `docs/DEPLOY.md`.

### Changed

- Vercel's own Git deploys are turned off for `main`; other branches keep preview URLs.
- README deploy section shortened to point to the deploy guide.

## [0.2.0] - 2026-10-05

### Added

- Profile photo on the recruiters page, beside the name so the sticky sidebar keeps its height.
- Profile photo on the services page: beside the pitch from tablet up, small above the headline on mobile.

### Changed

- Updated the English and Portuguese CVs.
- Company name in the experience list shortened to "Cast".

### Removed

- Recruiters and services links hidden from the site nav (the pages are still reachable by URL).

## [0.1.0] - 2026-09-28

### Added

- Next.js app with TypeScript, Tailwind and EN/PT i18n with locale detection.
- Home, recruiters and services pages.
- Portfolio sections, GitHub projects fetch, theme toggle and active section highlight.
- Services page with metrics, process, case studies, pricing FAQ and contact CTAs.
- CV downloads.
- SEO: localized metadata, hreflang, OG image, sitemap, robots and JSON-LD.
- Favicon and app icons.

[0.2.1]: https://github.com/lucasrocha20/portifolio/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/lucasrocha20/portifolio/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/lucasrocha20/portifolio/releases/tag/v0.1.0
