# Format report — updates

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/docker-capsule/image/updates.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Update a Deployed Docker Image
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list

1. (`goal`) under `Image deploy fails` — - Check that the **Image reference** is spelled correctly and that the tag exists.
2. (`goal`) under `Image deploy fails` — - Confirm the image is public. Private images are not supported.
3. (`goal`) under `Image deploy fails` — - Confirm the image is hosted on a supported public registry, such as Docker Hub or GitHub Container Registry. If the re
4. (`goal`) under `Newer image not deployed` — - Publishing a new image does not update your capsule. Click **Pull & Deploy** to pull the tag again.
5. (`goal`) under `Newer image not deployed` — - If you reference an image by digest, the same version is deployed each time. Change the image reference to deploy a di
6. (`goal`) under `Newer image not deployed` — - Check that your new image was pushed to the same tag your capsule references.

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### updates-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### updates-2
- **Type:** Format fix
- **Title:** Style troubleshooting as details
- **Problem:** Troubleshooting without `<details>` blocks.
- **Rule:** how_to_format.md Troubleshooting
- **Change:** Use styled details blocks per writing_style.md.
- **Done when:** Troubleshooting uses details styling.

## Proposed outline

(Rewrite `docs/products/docker-capsule/image/updates.md` to match how_to_format.md — see tickets above.)
