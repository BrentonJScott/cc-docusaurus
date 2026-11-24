# Format report: how-do-i-add-remove-teams

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/teams/how-do-i-add-remove-teams.md`
- **Doc type:** how-to
- **Feature:** Add and remove a team
- **Goal:** Expect to see the team created and then removed
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/new-team-1.png Image missing in static/: /gitbook-assets/platform/create-team-1.png Image missing in static/: /gitbook-assets/platform/platform/teams/remove-team.png Broken internal link: /platform/spaces/how-do-i-add-remove-a-space/ |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/new-team-1.png Image missing in static/: /gitbook-assets/platform/create-team-1.png Image missing in static/: /gitbook-assets/platform/platform/teams/remove-team.png Broken internal link: /platform/spaces/how-do-i-add-remove-a-space/ Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### how-do-i-add-remove-teams-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/new-team-1.png
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/new-team-1.png
- Image missing in static/: /gitbook-assets/platform/create-team-1.png
- Image missing in static/: /gitbook-assets/platform/platform/teams/remove-team.png
- Broken internal link: /platform/spaces/how-do-i-add-remove-a-space/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/new-team-1.png
- Image missing in static/: /gitbook-assets/platform/create-team-1.png
- Image missing in static/: /gitbook-assets/platform/platform/teams/remove-team.png
- Broken internal link: /platform/spaces/how-do-i-add-remove-a-space/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
