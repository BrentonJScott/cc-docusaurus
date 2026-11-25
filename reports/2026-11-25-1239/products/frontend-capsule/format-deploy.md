# Format report — deploy (Frontend framework index)

- **Run:** 2026-11-25-1239
- **Doc:** `docs/products/frontend-capsule/deploy.md`
- **Doc type:** Explanation
- **Template:** `formats/explanation_format.md`
- **Feature:** Frontend framework deployment guides index
- **Goal:** Expect every named framework to link to an existing how-to guide
- **Format check:** fail

## Content list

| # | Label | Heading | Statement |
|---|--------|---------|-----------|
| 1 | explain | (under `#`) | Guides for React, Angular, Vue, Next.js, Svelte, and static HTML Frontend Capsules. |
| 2 | explain | `## Overview` | Frontend Capsules build from Git; framework guides set wizard values; Static and Container hosting share build settings. |
| 3 | explain | `## Why it matters` | One path covers many frameworks without memorizing per-stack settings. |
| 4 | explain | `## How it works` | Build command, output directory, HTTPS; demo repos per guide. |
| 5 | explain | `## When to use it` | Rows for new deploy, static vs container, custom stack. |
| 6 | instruction | `## When to use it` | “Open the framework guide for React, Angular, Vue, Next.js, Svelte, or static HTML.” |
| 7 | explain | `## Related` | DocCardList to React, Angular, Vue, Next.js, Svelte how-tos. |

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Check 1: Content (understanding only) | fail | The **When to use it** table tells the reader to open framework guides (`instruction`), not only to describe when each option applies. |
| Check 2: Prerequisites | not applicable | Explanation. |
| Check 3: Links | pass | Framework cards and in-body links resolve under `docs/frontend/` and product deploy pages. |
| Check 4: Format and style | pass | Required Explanation sections appear in order; **Related** has multiple cards. |

## Tickets

### deploy-1

- **Type:** Move to another doc
- **Title:** Rephrase the new-framework row without imperative steps.
- **Problem:** Under `## When to use it`, the row “New framework deploy” says “Open the framework guide for React, Angular, Vue, Next.js, Svelte, or static HTML.”
- **Rule:** `FORMAT.MD`, Check 1 (Explanation) — `instruction` content belongs in How-to guides; link targets from **Related**.
- **Change:** Rephrase as understanding-only text (for example that each listed stack has a dedicated how-to in **Related**) without “Open the guide.” Keep framework links in **Related**.
- **Done when:** No row in **When to use it** uses imperative “open” / “choose” language.

## Proposed outline

```md
## When to use it

| Situation | What to expect |
| --- | --- |
| New framework deploy | A how-to exists for each supported stack; see **Related**. |
| Static vs container | Hosting mode is chosen in the static or container deploy how-to. |
| Custom stack | No framework guide matches; static deploy how-to sets build settings manually. |
```