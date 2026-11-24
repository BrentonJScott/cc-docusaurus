# Format report: angular

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/frontend/angular.md`
- **Doc type:** how-to
- **Feature:** Create Angular frontend capsule
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/get-started/cc-angular-app.png Image missing in static/: /gitbook-assets/get-started/space-name-1.png Image missing in static/: /gitbook-assets/get-started/angular-build-logs.png Image missing in static/: /gitbook-assets/get-started/cc-angular-app.png Broken internal link: /platform/platform/ Broken internal link: /platform/capsules/what-is-a-capsule/ Broken internal link: /tutorials/video-guides/ |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/cc-angular-app.png Image missing in static/: /gitbook-assets/get-started/space-name-1.png Image missing in static/: /gitbook-assets/get-started/angular-build-logs.png Image missing in static/: /gitbook-assets/get-started/cc-angular-app.png Broken internal link: /platform/platform/ Broken internal link: /platform/capsules/what-is-a-capsule/ Broken internal link: /tutorials/video-guides/ Missing `## Prerequisites`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Missing `## Troubleshooting`. Title uses "in Minutes" (forbidden by how_to_format.md). |

## Tickets

### angular-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Links to live codecapsules.io instead of internal docs paths.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/cc-angular-app.png
- Image missing in static/: /gitbook-assets/get-started/space-name-1.png
- Image missing in static/: /gitbook-assets/get-started/angular-build-logs.png
- Image missing in static/: /gitbook-assets/get-started/cc-angular-app.png
- Broken internal link: /platform/platform/
- Broken internal link: /platform/capsules/what-is-a-capsule/
- Broken internal link: /tutorials/video-guides/
- Missing `## Prerequisites`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Missing `## Troubleshooting`.
- Title uses "in Minutes" (forbidden by how_to_format.md).
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/cc-angular-app.png
- Image missing in static/: /gitbook-assets/get-started/space-name-1.png
- Image missing in static/: /gitbook-assets/get-started/angular-build-logs.png
- Image missing in static/: /gitbook-assets/get-started/cc-angular-app.png
- Broken internal link: /platform/platform/
- Broken internal link: /platform/capsules/what-is-a-capsule/
- Broken internal link: /tutorials/video-guides/
- Missing `## Prerequisites`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Missing `## Troubleshooting`.
- Title uses "in Minutes" (forbidden by how_to_format.md).
