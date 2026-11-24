# Format report — deploy

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/database-capsule/mongodb/deploy.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy a MongoDB Database
- **Goal:** Expect to Deploy a managed MongoDB Atlas cluster on Code Capsules with a MongoDB Capsule, then connect it to your backend app using a framework guide
- **Format check:** fail

## Content list

1. (`goal`) under `Framework Guides` — - [Django + MongoDB](/database/mongodb/django-+-mongodb/)
2. (`goal`) under `Framework Guides` — - [Express + MongoDB](/database/mongodb/express-+-mongodb/)
3. (`goal`) under `Framework Guides` — - [Flask + MongoDB](/database/mongodb/flask-+-mongodb/)

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

(Rewrite `docs/products/database-capsule/mongodb/deploy.md` to match how_to_format.md — see tickets above.)
