# Format report — container-requirements

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/docker-capsule/container-requirements.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Docker Container Runtime Requirements
- **Goal:** Expect the container to start listening on the PORT environment variable
- **Format check:** fail

## Content list

1. (`goal`) under `Requirements` — 1. **Listen on the network port** — your application must listen on the port configured in the capsule's [Network port](
2. (`goal`) under `Requirements` — 2. **Bind to all interfaces** — your app must listen on `0.0.0.0`, not `127.0.0.1` or `localhost`.
3. (`goal`) under `Requirements` — 3. **Start your application** — the image must define a `CMD` or `ENTRYPOINT` that starts your application when the caps

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### container-requirements-1
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### container-requirements-2
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

## Proposed outline

(Rewrite `docs/products/docker-capsule/container-requirements.md` to match how_to_format.md — see tickets above.)
