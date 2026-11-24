# Format report: svelte

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/frontend/svelte.md`
- **Feature:** Create Svelte frontend capsule
- **Goal:** Expect to see capsule building in builds tab
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/space-name-1.png Image missing in static/: /gitbook-assets/get-started/frontend-build-logs.png Image missing in static/: /gitbook-assets/get-started/svelte-app.png Broken internal link: /gitbook-assets/get-started/space-name-1.png Broken internal link: /gitbook-assets/get-started/frontend-build-logs.png Broken internal link: /gitbook-assets/get-started/svelte-app.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Title uses "in Minutes" (forbidden by how_to_format.md). Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/space-name-1.png Image missing in static/: /gitbook-assets/get-started/frontend-build-logs.png Image missing in static/: /gitbook-assets/get-started/svelte-app.png Broken internal link: /gitbook-assets/get-started/space-name-1.png Broken internal link: /gitbook-assets/get-started/frontend-build-logs.png Broken internal link: /gitbook-assets/get-started/svelte-app.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Title uses "in Minutes" (forbidden by how_to_format.md).
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/space-name-1.png
- Image missing in static/: /gitbook-assets/get-started/frontend-build-logs.png
- Image missing in static/: /gitbook-assets/get-started/svelte-app.png
- Broken internal link: /gitbook-assets/get-started/space-name-1.png
- Broken internal link: /gitbook-assets/get-started/frontend-build-logs.png
- Broken internal link: /gitbook-assets/get-started/svelte-app.png

## Tickets

### svelte-1: Bring page in line with its template.
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
- Image missing in static/: /gitbook-assets/get-started/space-name-1.png
- Image missing in static/: /gitbook-assets/get-started/frontend-build-logs.png
- Image missing in static/: /gitbook-assets/get-started/svelte-app.png
- Broken internal link: /gitbook-assets/get-started/space-name-1.png
- Broken internal link: /gitbook-assets/get-started/frontend-build-logs.png
- Broken internal link: /gitbook-assets/get-started/svelte-app.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

