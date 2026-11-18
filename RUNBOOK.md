# Runbook — ChemCoach

## Deployment

Production deploys from `main` via GitHub Actions (`.github/workflows/deploy.yml`, synced from MathMate).

- Live URL: `https://tiennm99dev.github.io/chemcoach/`
- Build: `npm run build` (SvelteKit static), with `SITE_BASE=/chemcoach` in CI
- Deploy mechanism: `actions/upload-pages-artifact` + `actions/deploy-pages`; versions are pinned in `.github/workflows/deploy.yml`
- Pages source: GitHub Actions (`build_type=workflow`)
- Concurrency: `pages-deploy` group, cancel-in-progress disabled

## Rollback

GitHub Pages keeps the last successful deployment. To roll back:

1. Find the offending commit on `main`: `git log --oneline main`
2. Revert it: `git revert <sha>` and push to `main`
3. The next workflow run rebuilds and re-deploys the prior good state
4. Verify the live site

If the workflow itself is broken, re-run a previous successful deployment from the **Actions** tab, then fix the workflow in MathMate and sync it here.

## Syncing the shared core

Shared code (core, routes, scripts, configs, workflows) comes from `tiennm99dev/mathmate`:

1. Change and commit it in MathMate.
2. From a clean MathMate checkout: `scripts/sync-core.sh <path to chemcoach>`.
3. Here: `npm install`, then lint, format:check, check, test and build; commit with the new `CORE_VERSION`.

Never edit a file carrying the "Synced from tiennm99dev/mathmate" header in this repo.

## Things to NOT do

- Never `git push --force` to `main`.
- Never edit `VERSION` or `package.json.version` independently — they must agree.
- Never re-run `scripts/import-curriculum.js --force` over hand-edited `lop-N.json` files without reviewing the diff.
