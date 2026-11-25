# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/database/mongodb/index.md`
- **Doc type:** Reference
- **Template:** `reference_format.md`
- **Feature:** Managed MongoDB Hosting
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

| # | Label | Heading | Statement |
|---|---|---|---|
| 1 | fact | `## Overview` | MongoDB Capsules are managed clusters on MongoDB Atlas; connection string on **Details**. |
| 2 | fact | `## Guides` | No framework guides are published for MongoDB yet. |
| 3 | remove | `## Guides` | Pointer to configuration reference is navigation, not a fact table row. |

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | pass | Overview states facts only. |
| Check 2: Prerequisites | not applicable | |
| Check 3: Links | pass | Related and configure links resolve under `docs/`. |
| Check 4: Format and style | fail | `## Guides` is prose; Reference subject sections must be mostly a table. |

## Tickets

### mongodb-index-1

- **ID:** mongodb-index-1
- **Type:** Format fix
- **Title:** Replace Guides prose with a table
- **Problem:** `## Guides` is one sentence instead of a table of published or planned framework guides.
- **Rule:** `reference_format.md` Subject sections: values in a table
- **Change:** Add a table (columns such as Guide, Deploys, Demo repository) mirroring `docs/database/mysql/index.md`, or move the "not published" note into Overview and list zero rows explicitly.
- **Done when:** Every `##` subject section after Overview uses a table for its values.

## Proposed outline

Reference: Overview (Atlas connection facts), Guides table (empty or linked rows), Related DocCardList.