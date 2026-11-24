# Format report — deploy

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/database-capsule/mysql/deploy.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy a MySQL Database
- **Goal:** Expect to Deploy a managed MySQL database on Code Capsules with a MySQL Capsule, then connect it to your backend app using a framework guide
- **Format check:** fail

## Content list

1. (`goal`) under `Framework Guides` — - [Django + MySQL](/database/mysql/django-+-mysql/)
2. (`goal`) under `Framework Guides` — - [Flask + MySQL](/database/mysql/flask-+-mysql/)
3. (`goal`) under `Framework Guides` — - [Java + MySQL](/database/mysql/java-+-mysql/)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### deploy-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

## Proposed outline

(Rewrite `docs/products/database-capsule/mysql/deploy.md` to match how_to_format.md — see tickets above.)
