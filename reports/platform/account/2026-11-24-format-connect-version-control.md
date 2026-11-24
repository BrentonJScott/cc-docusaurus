# Format report: connect-version-control

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/account/connect-version-control.md`
- **Doc type:** how-to
- **Feature:** Connect GitHub or GitLab
- **Goal:** Expect to see repos listed when creating a capsule
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/choose-version-control-providers.png Image missing in static/: /gitbook-assets/platform/github-integration.png Broken internal link: /platform/teams/share-a-repo-with-a-team/ |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/choose-version-control-providers.png Image missing in static/: /gitbook-assets/platform/github-integration.png Broken internal link: /platform/teams/share-a-repo-with-a-team/ Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### connect-version-control-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/choose-version-control-providers.png
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/choose-version-control-providers.png
- Image missing in static/: /gitbook-assets/platform/github-integration.png
- Broken internal link: /platform/teams/share-a-repo-with-a-team/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/choose-version-control-providers.png
- Image missing in static/: /gitbook-assets/platform/github-integration.png
- Broken internal link: /platform/teams/share-a-repo-with-a-team/
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
