# Format report — index

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/database/mongodb/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Managed MongoDB Hosting
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`build`) under `Create a MongoDB Capsule` — 1. **Cluster Type** — choose **Dedicated** for dedicated CPU and RAM on an instance size you select, or **Shared** for l
2. (`build`) under `Create a MongoDB Capsule` — 2. **Version** — select a MongoDB major version. Dedicated clusters support **7.0**, **8.0**, and **latest** (automatic 
3. (`build`) under `Create a MongoDB Capsule` — 3. **Plan** — choose an instance size. For Dedicated clusters, adjust **Storage** and **Replicas** (3, 5, or 7). Shared 
4. (`build`) under `Create a MongoDB Capsule` — 4. **Capsule Name** — enter a name for your capsule.
5. (`build`) under `View Connection Details` — - Database name
6. (`build`) under `View Connection Details` — - Username
7. (`build`) under `View Connection Details` — - Password

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

## Tickets

### index-1
- **Type:** Wrong doc type
- **Title:** Rewrite as how-to or split
- **Problem:** Reference page contains numbered deployment steps.
- **Rule:** FORMAT.MD Step 1
- **Change:** Move steps to a how-to guide.
- **Done when:** No numbered task steps on reference page.

### index-2
- **Type:** Format fix
- **Title:** Add Overview section
- **Problem:** Reference missing ## Overview.
- **Rule:** reference_format.md
- **Change:** Add overview facts.
- **Done when:** Overview present.

### index-3
- **Type:** Format fix
- **Title:** Add Related section
- **Problem:** Reference missing ## Related.
- **Rule:** reference_format.md
- **Change:** Add DocCardList Related with 2+ cards.
- **Done when:** Related with 2+ links.

### index-4
- **Type:** Move to another doc
- **Title:** Move steps out of reference
- **Problem:** Reference contains numbered steps.
- **Rule:** reference_format.md
- **Change:** Move instructions to a how-to and link from Related.
- **Done when:** No step instructions on page.

### index-5
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** reference_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/database/mongodb/index.md` to match reference_format.md — see tickets above.)
