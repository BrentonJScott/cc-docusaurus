# Format report: flask--plus--htmx

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/full-stack/flask-+-htmx.md`
- **Feature:** Create Flask + HTMX capsules
- **Goal:** Expect to see the app load with its capsules connected
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.8)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/space-name-1.png Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Image missing in static/: /gitbook-assets/get-started/bind-persistent-capsule-backend.png Image missing in static/: /gitbook-assets/get-started/flask-htmx.png Broken internal link: /gitbook-assets/get-started/space-name-1.png Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Broken internal link: /gitbook-assets/get-started/bind-persistent-capsule-backend.png Broken internal link: /gitbook-assets/get-started/flask-htmx.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/space-name-1.png Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Image missing in static/: /gitbook-assets/get-started/bind-persistent-capsule-backend.png Image missing in static/: /gitbook-assets/get-started/flask-htmx.png Broken internal link: /gitbook-assets/get-started/space-name-1.png Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Broken internal link: /gitbook-assets/get-started/bind-persistent-capsule-backend.png Broken internal link: /gitbook-assets/get-started/flask-htmx.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/space-name-1.png
- Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Image missing in static/: /gitbook-assets/get-started/bind-persistent-capsule-backend.png
- Image missing in static/: /gitbook-assets/get-started/flask-htmx.png
- Broken internal link: /gitbook-assets/get-started/space-name-1.png
- Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Broken internal link: /gitbook-assets/get-started/bind-persistent-capsule-backend.png
- Broken internal link: /gitbook-assets/get-started/flask-htmx.png

## Tickets

### flask--plus--htmx-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/space-name-1.png
- Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Image missing in static/: /gitbook-assets/get-started/bind-persistent-capsule-backend.png
- Image missing in static/: /gitbook-assets/get-started/flask-htmx.png
- Broken internal link: /gitbook-assets/get-started/space-name-1.png
- Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Broken internal link: /gitbook-assets/get-started/bind-persistent-capsule-backend.png
- Broken internal link: /gitbook-assets/get-started/flask-htmx.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

