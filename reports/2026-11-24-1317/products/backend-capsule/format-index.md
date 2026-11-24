# Format report — index

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/backend-capsule/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Backend Application Hosting
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`build`) under `Prerequisites` — - [Build and Deploy](/products/backend-capsule/deploy/) — supported languages, frameworks, and deployment steps
2. (`build`) under `Prerequisites` — - [Supported Runtimes](/products/backend-capsule/supported-runtimes/) — language versions and runtime pinning
3. (`build`) under `Prerequisites` — - [Configure](/products/backend-capsule/configure/) — environment variables, build settings, and runtime options
4. (`build`) under `Prerequisites` — - [Scale](/products/backend-capsule/scale/) — allocate resources as your traffic grows
5. (`build`) under `Prerequisites` — - [Monitor](/products/backend-capsule/monitor/) — view metrics and performance data
6. (`build`) under `Prerequisites` — - [Logs](/products/backend-capsule/logs/) — access build and runtime logs
7. (`build`) under `Prerequisites` — - [Alerting](/products/alerting/) — set up notifications for capsule events
8. (`build`) under `Prerequisites` — - [Add a Procfile](/products/backend-capsule/add-procfile/) — customise the start command for your app

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

## Tickets

### index-1
- **Type:** Format fix
- **Title:** Add Overview section
- **Problem:** Reference missing ## Overview.
- **Rule:** reference_format.md
- **Change:** Add overview facts.
- **Done when:** Overview present.

### index-2
- **Type:** Format fix
- **Title:** Add Related section
- **Problem:** Reference missing ## Related.
- **Rule:** reference_format.md
- **Change:** Add DocCardList Related with 2+ cards.
- **Done when:** Related with 2+ links.

### index-3
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** reference_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/products/backend-capsule/index.md` to match reference_format.md — see tickets above.)
