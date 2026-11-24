# Format report: flask-docker-app

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/backend/docker/flask-docker-app.md`
- **Feature:** Create Flask Docker capsule
- **Goal:** Expect to see capsule building in builds tab
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/space-name-1.png Image missing in static/: /gitbook-assets/get-started/docker-build.png Image missing in static/: /gitbook-assets/get-started/dcoker-port-5000.png Image missing in static/: /gitbook-assets/get-started/flask-docker-application.png Broken internal link: /gitbook-assets/get-started/space-name-1.png Broken internal link: /gitbook-assets/get-started/docker-build.png Broken internal link: /gitbook-assets/get-started/dcoker-port-5000.png Broken internal link: /gitbook-assets/get-started/flask-docker-application.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/space-name-1.png Image missing in static/: /gitbook-assets/get-started/docker-build.png Image missing in static/: /gitbook-assets/get-started/dcoker-port-5000.png Image missing in static/: /gitbook-assets/get-started/flask-docker-application.png Broken internal link: /gitbook-assets/get-started/space-name-1.png Broken internal link: /gitbook-assets/get-started/docker-build.png Broken internal link: /gitbook-assets/get-started/dcoker-port-5000.png Broken internal link: /gitbook-assets/get-started/flask-docker-application.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/space-name-1.png
- Image missing in static/: /gitbook-assets/get-started/docker-build.png
- Image missing in static/: /gitbook-assets/get-started/dcoker-port-5000.png
- Image missing in static/: /gitbook-assets/get-started/flask-docker-application.png
- Broken internal link: /gitbook-assets/get-started/space-name-1.png
- Broken internal link: /gitbook-assets/get-started/docker-build.png
- Broken internal link: /gitbook-assets/get-started/dcoker-port-5000.png
- Broken internal link: /gitbook-assets/get-started/flask-docker-application.png

## Tickets

### flask-docker-app-1: Bring page in line with its template.
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
- Image missing in static/: /gitbook-assets/get-started/docker-build.png
- Image missing in static/: /gitbook-assets/get-started/dcoker-port-5000.png
- Image missing in static/: /gitbook-assets/get-started/flask-docker-application.png
- Broken internal link: /gitbook-assets/get-started/space-name-1.png
- Broken internal link: /gitbook-assets/get-started/docker-build.png
- Broken internal link: /gitbook-assets/get-started/dcoker-port-5000.png
- Broken internal link: /gitbook-assets/get-started/flask-docker-application.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

