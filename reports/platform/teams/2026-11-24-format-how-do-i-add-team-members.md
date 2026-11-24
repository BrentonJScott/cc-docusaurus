# Format report: how-do-i-add-team-members

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/teams/how-do-i-add-team-members.md`
- **Doc type:** how-to
- **Feature:** Add team members
- **Goal:** Expect to see the invited member in the team's member list
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/add-team-member.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/add-team-member.png Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### how-do-i-add-team-members-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/add-team-member.png
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/add-team-member.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/add-team-member.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
