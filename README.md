# tech-from-here-mjbizcon
Tech From Here: MJBizCon — RN research, evidence, editorial and production system.

## What is public

The site is a gallery of released pieces only. `data/releases.json` is the one record the build reads: a piece is public when its `releasedAt` date (Pacific/Honolulu) is today or earlier and `hold` is false. Everything else, including the whole `archive/` research corpus, is left out of `dist/` and returns 404.

A GitHub Actions workflow (`.github/workflows/daily-release.yml`) runs just after midnight in Hawaii and redeploys on any day a piece is due.

Run `npm run build` and `npm test` before pushing.
