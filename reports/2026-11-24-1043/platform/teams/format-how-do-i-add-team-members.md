# Format report: how-do-i-add-team-members

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/platform/teams/how-do-i-add-team-members.md`
- **Feature:** Add team members
- **Goal:** Expect to see the invited member in the team's member list
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/add-team-member.png Broken internal link: /gitbook-assets/platform/add-team-member.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/platform/add-team-member.png Broken internal link: /gitbook-assets/platform/add-team-member.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/add-team-member.png
- Broken internal link: /gitbook-assets/platform/add-team-member.png

## Tickets

### how-do-i-add-team-members-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/add-team-member.png
- Broken internal link: /gitbook-assets/platform/add-team-member.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

