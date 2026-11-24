# Format report: connect-version-control

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/platform/account/connect-version-control.md`
- **Feature:** Connect GitHub or GitLab
- **Goal:** Expect to see repos listed when creating a capsule
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/choose-version-control-providers.png Image missing in static/: /gitbook-assets/platform/github-integration.png Broken internal link: /gitbook-assets/platform/choose-version-control-providers.png Broken internal link: /gitbook-assets/platform/github-integration.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/platform/choose-version-control-providers.png Image missing in static/: /gitbook-assets/platform/github-integration.png Broken internal link: /gitbook-assets/platform/choose-version-control-providers.png Broken internal link: /gitbook-assets/platform/github-integration.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/choose-version-control-providers.png
- Image missing in static/: /gitbook-assets/platform/github-integration.png
- Broken internal link: /gitbook-assets/platform/choose-version-control-providers.png
- Broken internal link: /gitbook-assets/platform/github-integration.png

## Tickets

### connect-version-control-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/choose-version-control-providers.png
- Image missing in static/: /gitbook-assets/platform/github-integration.png
- Broken internal link: /gitbook-assets/platform/choose-version-control-providers.png
- Broken internal link: /gitbook-assets/platform/github-integration.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

