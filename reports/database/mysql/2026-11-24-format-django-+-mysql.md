# Format report: django-+-mysql

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/database/mysql/django-+-mysql.md`
- **Doc type:** how-to
- **Feature:** Create Django with MySQL capsules
- **Goal:** Expect to see the Django app load with MySQL bound
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png Image missing in static/: /gitbook-assets/get-started/cc-django-app-1.png Broken internal link: /platform/capsules/what-is-a-capsule/ |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png Image missing in static/: /gitbook-assets/get-started/cc-django-app-1.png Broken internal link: /platform/capsules/what-is-a-capsule/ Missing `## Prerequisites`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Missing `## Troubleshooting`. |

## Tickets

### django-+-mysql-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Links to live codecapsules.io instead of internal docs paths.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png
- Image missing in static/: /gitbook-assets/get-started/cc-django-app-1.png
- Broken internal link: /platform/capsules/what-is-a-capsule/
- Missing `## Prerequisites`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/backend-capsule-build-logs-1.png
- Image missing in static/: /gitbook-assets/get-started/sql-bind-env.png
- Image missing in static/: /gitbook-assets/get-started/cc-django-app-1.png
- Broken internal link: /platform/capsules/what-is-a-capsule/
- Missing `## Prerequisites`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Missing `## Troubleshooting`.
