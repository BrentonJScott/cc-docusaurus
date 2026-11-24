# Format report — environments

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/sandbox/environments.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Sandbox Environments & Flavors
- **Goal:** Expect to see a sandbox start with the chosen flavor
- **Format check:** fail

## Content list

1. (`goal`) under `Sandbox lifetime` — - You call `delete()` or exit the context manager / `using()` block
2. (`goal`) under `Sandbox lifetime` — - The TTL expires (default 60 minutes)
3. (`goal`) under `Sandbox lifetime` — - The sandbox encounters a fatal error

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### environments-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### environments-2
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### environments-3
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

### environments-4
- **Type:** Format fix
- **Title:** Add frontmatter field doc_version
- **Problem:** Missing frontmatter `doc_version`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `doc_version` to frontmatter.
- **Done when:** All required frontmatter fields present.

### environments-5
- **Type:** Format fix
- **Title:** Import DocCardList
- **Problem:** Missing DocCardList import after frontmatter.
- **Rule:** writing_style.md Page pieces
- **Change:** Add `import DocCardList from '@theme/DocCardList';`
- **Done when:** Import present.

## Proposed outline

(Rewrite `docs/sandbox/environments.md` to match how_to_format.md — see tickets above.)
