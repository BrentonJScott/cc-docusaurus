# Format report: go

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/backend/go/go.md`
- **Feature:** Create Go backend capsule
- **Goal:** Expect to see capsule building in builds tab
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/cc-go-app.png Broken internal link: /gitbook-assets/get-started/cc-go-app.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Title uses "in Minutes" (forbidden by how_to_format.md). Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/cc-go-app.png Broken internal link: /gitbook-assets/get-started/cc-go-app.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Title uses "in Minutes" (forbidden by how_to_format.md).
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/cc-go-app.png
- Broken internal link: /gitbook-assets/get-started/cc-go-app.png

## Tickets

### go-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Title uses "in Minutes" (forbidden by how_to_format.md).
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/cc-go-app.png
- Broken internal link: /gitbook-assets/get-started/cc-go-app.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

