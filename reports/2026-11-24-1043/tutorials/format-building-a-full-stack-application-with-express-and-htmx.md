# Format report: building-a-full-stack-application-with-express-and-htmx

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/tutorials/building-a-full-stack-application-with-express-and-htmx.md`
- **Feature:** Build a full stack app with Express and HTMX
- **Goal:** Expect to see the app load
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 1.927)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/tutorials/book-app.png Broken internal link: /gitbook-assets/tutorials/book-app.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/tutorials/book-app.png Broken internal link: /gitbook-assets/tutorials/book-app.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/tutorials/book-app.png
- Broken internal link: /gitbook-assets/tutorials/book-app.png

## Tickets

### building-a-full-stack-application-with-express-and-htmx-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/tutorials/book-app.png
- Broken internal link: /gitbook-assets/tutorials/book-app.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

