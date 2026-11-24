# Format report: platform

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/platform/platform.md`
- **Feature:** View platform overview
- **Goal:** Expect every link on the page to open an existing page
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/platform/teamspacecapsule.png Image missing in static/: /gitbook-assets/platform/simple-and-complex-projects.png Broken internal link: /gitbook-assets/platform/teamspacecapsule.png Broken internal link: /gitbook-assets/platform/simple-and-complex-projects.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/platform/teamspacecapsule.png Image missing in static/: /gitbook-assets/platform/simple-and-complex-projects.png Broken internal link: /gitbook-assets/platform/teamspacecapsule.png Broken internal link: /gitbook-assets/platform/simple-and-complex-projects.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/platform/teamspacecapsule.png
- Image missing in static/: /gitbook-assets/platform/simple-and-complex-projects.png
- Broken internal link: /gitbook-assets/platform/teamspacecapsule.png
- Broken internal link: /gitbook-assets/platform/simple-and-complex-projects.png

## Tickets

### platform-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/platform/teamspacecapsule.png
- Image missing in static/: /gitbook-assets/platform/simple-and-complex-projects.png
- Broken internal link: /gitbook-assets/platform/teamspacecapsule.png
- Broken internal link: /gitbook-assets/platform/simple-and-complex-projects.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

