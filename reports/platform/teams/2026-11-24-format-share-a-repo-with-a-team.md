# Format report: share-a-repo-with-a-team

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/teams/share-a-repo-with-a-team.md`
- **Doc type:** how-to
- **Feature:** Share a repo with a team
- **Goal:** Expect to see the repo available to team members when creating a capsule
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/add-repo.png Broken internal link: /platform/account/connect-version-control/ |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/add-repo.png Broken internal link: /platform/account/connect-version-control/ Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### share-a-repo-with-a-team-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/add-repo.png
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/add-repo.png
- Broken internal link: /platform/account/connect-version-control/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/add-repo.png
- Broken internal link: /platform/account/connect-version-control/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
