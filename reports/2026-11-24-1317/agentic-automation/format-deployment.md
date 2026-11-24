# Format report — deployment

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/agentic-automation/deployment.md`
- **Doc type:** how-to
- **Template:** how_to_format.md
- **Feature:** Deploy Business Automation Agents
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`goal`) under `Cost model` — - **Orchestrator:** always-on, smallest plan sufficient for a Node.js process
2. (`goal`) under `Cost model` — - **SEO agent:** ~5 minutes of compute per week
3. (`goal`) under `Cost model` — - **Redis:** always-on, shared with orchestrator if running on the same capsule or small dedicated instance

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | fail | See tickets |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### deployment-1
- **Type:** Format fix
- **Title:** Use numbered bold step list
- **Problem:** Steps section lacks `N. **Title**` numbered items.
- **Rule:** how_to_format.md Steps
- **Change:** Convert steps to numbered list with bold titles.
- **Done when:** Each step uses numbered bold title format.

### deployment-2
- **Type:** Format fix
- **Title:** Add Troubleshooting section
- **Problem:** How-to guide missing `## Troubleshooting`.
- **Rule:** how_to_format.md
- **Change:** Add at least one styled `<details>` troubleshooting entry.
- **Done when:** Troubleshooting section exists.

### deployment-3
- **Type:** Format fix
- **Title:** Add Prerequisites section
- **Problem:** Missing ## Prerequisites.
- **Rule:** how_to_format.md
- **Change:** Add DocCardList prerequisites.
- **Done when:** Prerequisites with linked cards.

### deployment-4
- **Type:** Format fix
- **Title:** Add frontmatter field doc_version
- **Problem:** Missing frontmatter `doc_version`.
- **Rule:** writing_style.md Every doc
- **Change:** Add `doc_version` to frontmatter.
- **Done when:** All required frontmatter fields present.

### deployment-5
- **Type:** Format fix
- **Title:** Import DocCardList
- **Problem:** Missing DocCardList import after frontmatter.
- **Rule:** writing_style.md Page pieces
- **Change:** Add `import DocCardList from '@theme/DocCardList';`
- **Done when:** Import present.

## Proposed outline

(Rewrite `docs/agentic-automation/deployment.md` to match how_to_format.md — see tickets above.)
