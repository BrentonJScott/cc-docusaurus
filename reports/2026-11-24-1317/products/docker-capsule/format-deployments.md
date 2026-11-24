# Format report — deployments

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/docker-capsule/deployments.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Manage Docker Container Deployments
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`goal`) under `Change the source` — - Change the repository or branch, for a capsule deployed from Git
2. (`goal`) under `Change the source` — - Change the image reference, for a capsule deployed from a container image
3. (`goal`) under `View build logs` — - Select a build from the list on the left
4. (`goal`) under `View build logs` — - Read the full build log on the right
5. (`goal`) under `Cannot start a new build` — - Wait for the current build to finish or cancel it.
6. (`goal`) under `Build or deploy fails` — - For a capsule deployed from Git, see [Troubleshooting builds](/products/docker-capsule/git/builds/#troubleshooting-bui
7. (`goal`) under `Build or deploy fails` — - For a capsule deployed from an existing image, see [Image deploy fails](/products/docker-capsule/image/updates/#image-

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### deployments-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### deployments-2
- **Type:** Format fix
- **Title:** Style troubleshooting as details
- **Problem:** Troubleshooting without `<details>` blocks.
- **Rule:** how_to_format.md Troubleshooting
- **Change:** Use styled details blocks per writing_style.md.
- **Done when:** Troubleshooting uses details styling.

## Proposed outline

(Rewrite `docs/products/docker-capsule/deployments.md` to match how_to_format.md — see tickets above.)
