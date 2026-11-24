# Format report: django--plus--mongodb

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/database/mongodb/django-+-mongodb.md`
- **Feature:** Create Django with MongoDB capsules
- **Goal:** Expect to see the Django app load with MongoDB bound
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Image missing in static/: /gitbook-assets/get-started/bind-mongodb-capsule-env.png Image missing in static/: /gitbook-assets/get-started/cc-django-mongodb-app.png Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Broken internal link: /gitbook-assets/get-started/bind-mongodb-capsule-env.png Broken internal link: /gitbook-assets/get-started/cc-django-mongodb-app.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Image missing in static/: /gitbook-assets/get-started/bind-mongodb-capsule-env.png Image missing in static/: /gitbook-assets/get-started/cc-django-mongodb-app.png Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Broken internal link: /gitbook-assets/get-started/bind-mongodb-capsule-env.png Broken internal link: /gitbook-assets/get-started/cc-django-mongodb-app.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Image missing in static/: /gitbook-assets/get-started/bind-mongodb-capsule-env.png
- Image missing in static/: /gitbook-assets/get-started/cc-django-mongodb-app.png
- Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Broken internal link: /gitbook-assets/get-started/bind-mongodb-capsule-env.png
- Broken internal link: /gitbook-assets/get-started/cc-django-mongodb-app.png

## Tickets

### django--plus--mongodb-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Image missing in static/: /gitbook-assets/get-started/bind-mongodb-capsule-env.png
- Image missing in static/: /gitbook-assets/get-started/cc-django-mongodb-app.png
- Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Broken internal link: /gitbook-assets/get-started/bind-mongodb-capsule-env.png
- Broken internal link: /gitbook-assets/get-started/cc-django-mongodb-app.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

