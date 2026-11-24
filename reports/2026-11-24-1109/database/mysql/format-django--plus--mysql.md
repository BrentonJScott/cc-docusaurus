# Format report: django--plus--mysql

- **Run timestamp:** 2026-11-24T11:09:00+02:00
- **Doc file:** `docs/database/mysql/django-+-mysql.md`
- **Feature:** Create Django with MySQL capsules
- **Goal:** Expect to see the Django app load with MySQL bound
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png Image missing in static/: /gitbook-assets/get-started/cc-django-app-1.png Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Broken internal link: /gitbook-assets/get-started/sql-bind-env.png Broken internal link: /gitbook-assets/get-started/cc-django-app-1.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png Image missing in static/: /gitbook-assets/get-started/cc-django-app-1.png Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Broken internal link: /gitbook-assets/get-started/sql-bind-env.png Broken internal link: /gitbook-assets/get-started/cc-django-app-1.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png
- Image missing in static/: /gitbook-assets/get-started/cc-django-app-1.png
- Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Broken internal link: /gitbook-assets/get-started/sql-bind-env.png
- Broken internal link: /gitbook-assets/get-started/cc-django-app-1.png

## Tickets

### django--plus--mysql-1: Bring page in line with its template.
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
- Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png
- Image missing in static/: /gitbook-assets/get-started/cc-django-app-1.png
- Broken internal link: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Broken internal link: /gitbook-assets/get-started/sql-bind-env.png
- Broken internal link: /gitbook-assets/get-started/cc-django-app-1.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

