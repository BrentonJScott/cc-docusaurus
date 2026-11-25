# Format report — deploy

- **Run:** 2026-11-25-0828
- **Doc:** `docs/products/frontend-capsule/deploy.md`
- **Doc type:** Explanation
- **Template:** `formats/explanation_format.md`
- **Feature:** Frontend framework deployment guides index
- **Format check:** fail

## Content list

| # | Label | Heading | Statement |
|---|--------|---------|-----------|
| 1 | explain | (under `#`) | Step-by-step guides for deploying React, Angular, Vue, Next.js, Svelte, and static HTML sites on Code Capsules Frontend Capsules. |
| 2 | explain | `## Overview` | Frontend Capsules build static sites and SPAs from Git; framework guides walk through the wizard; guides apply to Static and Container hosting. |
| 3 | explain | `## Why it matters` | One hosting path covers many frameworks; teams pick the matching guide for a working deploy. |
| 4 | explain | `## How it works` | Build command, output directory, HTTPS; framework guides set values for forkable demos. |
| 5 | fact | `## How it works` (table) | Six framework guide links (React, Angular, Vue, Next.js, Svelte, Static HTML) plus frontend hosting index. |
| 6 | explain | `## How it works` | Pointer to Supported Runtimes for Container Node versions. |
| 7 | explain | `## When to use it` | When to follow framework guides vs static/container mode vs custom stack. |
| 8 | instruction | `## When to use it` | Custom stack: start from Static deploy and set build settings manually. |
| 9 | explain | `## When to use it` | Use Docker Capsule when a custom image is needed instead of platform builds. |
| 10 | — | `## Related` | Four `DocCardList` cards (static deploy, supported runtimes, all frontend guides, configure). |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (understanding only) | fail | `## How it works` is mostly a framework lookup table (`fact`); `## When to use it` tells the reader to open Static deploy and set build settings (instruction). |
| Check 2: Prerequisites | not applicable | Explanation. |
| Check 3: Links | fail | Twelve internal targets have no file under `docs/` (framework guides, `/frontend`, supported-runtimes, configure, Docker Capsule index). |
| Check 4: Format and style | pass | Required Explanation sections, order, `DocCardList` Related, and frontmatter match `explanation_format.md` and `writing_style.md`. |

## Tickets

### deploy-1

- **Type:** Move to another doc
- **Title:** Move manual build settings to Static deploy how-to.
- **Problem:** Under `## When to use it`, the row for a custom stack says “start from [Static deploy](/products/frontend-capsule/static/deploy/) and set build settings manually.”
- **Rule:** `FORMAT.MD`, Check 1 (Explanation) — statements labelled `instruction` belong in a How-to guide; link the target from `## Related`.
- **Change:** Remove the imperative from this page. Add or expand copy on `docs/products/frontend-capsule/static/deploy.md` (or a dedicated how-to) that describes setting build command and output path when no framework guide exists. Keep at most a one-sentence pointer here with a link in Related.
- **Done when:** No row in `## When to use it` tells the reader to perform dashboard steps; the how-to holds those steps.

### deploy-2

- **Type:** Move to another doc
- **Title:** Move the framework guide table to a Reference page.
- **Problem:** The `## How it works` table lists each framework with a link and “Deploys” column — a lookup list, not conceptual explanation.
- **Rule:** `FORMAT.MD`, Check 1 (Explanation) — `fact` lists must not occupy a whole section.
- **Change:** Create or restore a Reference page (for example `docs/products/frontend-capsule/supported-frameworks.md` or restore `docs/frontend/index.md` as a guide index) with the table. Replace the table here with two to four sentences on how builds and publishing work, and link the Reference from `## Related`.
- **Done when:** `## How it works` is prose (optional `###` parts only); the framework matrix lives on a Reference page linked from Related.

### deploy-3

- **Type:** Broken link
- **Title:** Restore or add framework guide pages under `docs/frontend/`.
- **Problem:** Links target `/frontend/react/`, `/frontend/angular/`, `/frontend/vue/`, `/frontend/next.js/`, and `/frontend/svelte/`; only `docs/frontend/static-html.md` exists in `docs/` (others are in `docs.bak/`).
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Restore `docs/frontend/react.md`, `angular.md`, `vue.md`, `next.js.md`, `svelte.md`, and `index.md` from `docs.bak/` (or add new how-tos with matching slugs). Until restored, remove or replace table links so every href resolves.
- **Done when:** Each framework href in the body table maps to a file under `docs/`.

### deploy-4

- **Type:** Broken link
- **Title:** Fix Related and body links to missing product pages.
- **Problem:** `href` values `/frontend`, `/products/frontend-capsule/supported-runtimes`, `/products/frontend-capsule/configure`, and `/products/docker-capsule/` have no matching files under `docs/` (only under `docs.bak/`).
- **Rule:** `FORMAT.MD`, Check 3 (Links).
- **Change:** Restore `docs/products/frontend-capsule/supported-runtimes.md`, `configure.md`, `docs/frontend/index.md`, and a Docker Capsule overview at `docs/products/docker-capsule/index.md`, or update links to existing slugs. Related cards must use paths that resolve.
- **Done when:** Every internal link and Related card `href` in `deploy.md` resolves under `docs/`.

## Proposed outline

```md
# Frontend Framework Deployment Guides

<Repeat description: one or two sentences on what the index explains.>

## Overview

<What Frontend Capsule framework guides are; static vs container both use the same guides.>

## Why it matters

<Problem: many stacks, one hosting path; audience: teams choosing a guide.>

## How it works

<Prose only: build command, output dir, Git source, HTTPS — no framework matrix.>

## When to use it

<Comparison table: new framework deploy / hosting mode / no guide yet — pointers only, no manual wizard steps.>

## Related

<DocCardList: static deploy how-to, container deploy how-to, framework Reference index, supported runtimes Reference, configure how-to.>
```