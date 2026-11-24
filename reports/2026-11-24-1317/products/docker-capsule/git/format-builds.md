# Format report — builds

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/docker-capsule/git/builds.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Build Docker Images From Git
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list

1. (`goal`) under `Build fails immediately` — - Confirm a repository is linked to the capsule.
2. (`goal`) under `Build fails immediately` — - Check that the linked branch exists and contains your Dockerfile.
3. (`goal`) under `Docker build errors` — - Read the full build log in the **Builds** tab.
4. (`goal`) under `Docker build errors` — - Verify the [Docker File](/products/docker-capsule/configure/#docker-file) path and [Docker Build Context](/products/do
5. (`goal`) under `Docker build errors` — - Test locally: `docker build -f <dockerfile-path> <context-path>`
6. (`goal`) under `Auto-deploy not triggering` — - Verify [auto-deploy](#auto-deploy) has not been turned off.
7. (`goal`) under `Auto-deploy not triggering` — - Confirm you pushed to the branch linked to the capsule, not a different branch.
8. (`goal`) under `Auto-deploy not triggering` — - Check that no other build is already running.

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### builds-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### builds-2
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### builds-3
- **Type:** Format fix
- **Title:** Use standard troubleshooting details style
- **Problem:** Troubleshooting details missing required style attribute.
- **Rule:** writing_style.md Page pieces
- **Change:** Add full details style object to each entry.
- **Done when:** Details blocks use standard style.

## Proposed outline

(Rewrite `docs/products/docker-capsule/git/builds.md` to match how_to_format.md — see tickets above.)
