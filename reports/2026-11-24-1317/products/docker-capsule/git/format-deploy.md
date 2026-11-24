# Format report — deploy

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/docker-capsule/git/deploy.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy a Dockerfile From Git
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`goal`) under `Prerequisites` — - A [Code Capsules](/docs/shared/create-an-account) account with a Team and Space
2. (`goal`) under `Prerequisites` — - A repository containing a working `Dockerfile` — see [Prepare your Dockerfile](#prepare-your-dockerfile)
3. (`goal`) under `Prerequisites` — - Your version control account linked under [Connect Version Control](/platform/account/connect-version-control/)
4. (`goal`) under `Next steps` — - [Builds & Auto-deploy](/products/docker-capsule/git/builds/) — manual builds, auto-deploy on push, and changing the re
5. (`goal`) under `Next steps` — - [Deployments](/products/docker-capsule/deployments/) — deployment strategy, build history, and rollback
6. (`goal`) under `Example guides` — - [Flask Docker App](/backend/docker/flask-docker-app/)
7. (`goal`) under `Example guides` — - [Docker PHP App](/backend/docker/docker-php-app/)
8. (`goal`) under `Example guides` — - [Docker Laravel App](/backend/docker/docker-laravel-app/)
9. (`goal`) under `Example guides` — - [Caddy Docker Site](/backend/docker/caddy-docker-site/)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### deploy-1
- **Type:** Remove content
- **Title:** Remove ## Next steps
- **Problem:** Doc has forbidden section `## Next steps`.
- **Rule:** how_to_format.md, sections
- **Change:** Remove `## Next steps` and relocate content per template.
- **Done when:** Section absent.

### deploy-2
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### deploy-3
- **Type:** Format fix
- **Title:** Use DocCardList for prerequisites
- **Problem:** Prerequisites not a DocCardList.
- **Rule:** writing_style.md
- **Change:** Replace bullet prerequisites with DocCardList cards linking to shared pages.
- **Done when:** Prerequisites use DocCardList only.

### deploy-4
- **Type:** Wrong doc type
- **Title:** How-to has non-how-to sections
- **Problem:** Extra sections: Next steps
- **Rule:** how_to_format.md Sections
- **Change:** Remove or retype page.
- **Done when:** Only template sections remain.

## Proposed outline

(Rewrite `docs/products/docker-capsule/git/deploy.md` to match how_to_format.md — see tickets above.)
