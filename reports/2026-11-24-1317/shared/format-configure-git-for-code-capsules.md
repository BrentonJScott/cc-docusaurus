# Format report — configure-git-for-code-capsules

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/shared/configure-git-for-code-capsules.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Configure Git for Code Capsules
- **Goal:** Expect to see the repository in the Git Repository dropdown
- **Format check:** fail

## Content list

1. (`explain`) under `Steps` — (prose)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### configure-git-for-code-capsules-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### configure-git-for-code-capsules-2
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### configure-git-for-code-capsules-3
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

### configure-git-for-code-capsules-4
- **Type:** Format fix
- **Title:** Import DocCardList
- **Problem:** Missing DocCardList import after frontmatter.
- **Rule:** writing_style.md Page pieces
- **Change:** Add `import DocCardList from '@theme/DocCardList';`
- **Done when:** Import present.

## Proposed outline

(Rewrite `docs/shared/configure-git-for-code-capsules.md` to match how_to_format.md — see tickets above.)
