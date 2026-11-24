# Format report — connect-locally

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/products/database-capsule/mysql/connect-locally.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Connect to MySQL Locally
- **Goal:** Expect the mysql client to connect through the proxy tunnel
- **Format check:** fail

## Content list

1. (`goal`) under `When to Use This` — - Run ad-hoc SQL or inspect tables
2. (`goal`) under `When to Use This` — - Check your MySQL version before an upgrade
3. (`goal`) under `When to Use This` — - Import or export data with `mysqldump`
4. (`goal`) under `When to Use This` — - Debug application issues against the live database
5. (`goal`) under `Get Credentials` — - **Username**
6. (`goal`) under `Get Credentials` — - **Password**
7. (`goal`) under `Get Credentials` — - **Database name**

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### connect-locally-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### connect-locally-2
- **Type:** Format fix
- **Title:** Use DocCardList for prerequisites
- **Problem:** Prerequisites not a DocCardList.
- **Rule:** writing_style.md
- **Change:** Replace bullet prerequisites with DocCardList cards linking to shared pages.
- **Done when:** Prerequisites use DocCardList only.

## Proposed outline

(Rewrite `docs/products/database-capsule/mysql/connect-locally.md` to match how_to_format.md — see tickets above.)
