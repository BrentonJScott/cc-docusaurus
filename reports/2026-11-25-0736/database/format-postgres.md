# Format report

- **Run:** 2026-11-25-0736
- **Doc file:** `docs/database/postgres.md`
- **Doc type:** Explanation
- **Template:** `explanation_format.md`
- **Feature:** Managed PostgreSQL Hosting
- **Goal:** Expect the reader to understand: In this tutorial, we'll create a PostgreSQL Data Capsule to provide persistent storage for your applications hosted on Code Capsules
- **Format check:** fail

## Content list

(See doc; key failures captured in tickets.)

## Check results

| Check | Status | Reason |
|---|---|---|
| Check 1: Content | fail | `How it works` tells the reader to create a capsule, open Config, and link databases (instructions). |
| Check 2: Prerequisites | not applicable |  |
| Check 3: Links | pass | Related links resolve. |
| Check 4: Format and style | fail | Explanation must not contain deploy instructions; link How-to from Related. |

## Tickets

### postgres-1

- **ID:** postgres-1
- **Type:** Move to another doc
- **Title:** Move deploy steps out of How it works
- **Problem:** `## How it works` says "You create a **PostgreSQL** capsule" and "open the Backend Capsule **Config** tab".
- **Rule:** explanation_format.md How it works: no steps
- **Change:** Rewrite as architecture only; add or link a How-to for creating and binding PostgreSQL.
- **Done when:** How it works has no imperatives; deploy steps live on a How-to linked from Related.

## Proposed outline

Explanation sections Overview–Related per explanation_format.md.
