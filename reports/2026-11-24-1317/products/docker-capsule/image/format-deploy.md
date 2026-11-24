# Format report — deploy

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/docker-capsule/image/deploy.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy an Existing Docker Image
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`goal`) under `Prerequisites` — - A [Code Capsules](/docs/shared/create-an-account) account with a Team and Space
2. (`goal`) under `Prerequisites` — - A public container image, for example on Docker Hub or GitHub Container Registry
3. (`goal`) under `Next steps` — - [Image Updates](/products/docker-capsule/image/updates/) — deploy a newer version of your tag, change the image, and f
4. (`goal`) under `Next steps` — - [Deployments](/products/docker-capsule/deployments/) — deployment strategy, deploy history, and rollback

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

(Rewrite `docs/products/docker-capsule/image/deploy.md` to match how_to_format.md — see tickets above.)
