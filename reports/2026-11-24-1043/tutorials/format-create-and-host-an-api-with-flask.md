# Format report: create-and-host-an-api-with-flask

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/tutorials/create-and-host-an-api-with-flask.md`
- **Feature:** Create and host an API with Flask
- **Goal:** Expect to see the API return exchange-rate and weather data
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 1.718)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | pass | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/tutorials/env-active-1.png Broken internal link: /gitbook-assets/tutorials/env-active-1.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/tutorials/env-active-1.png Broken internal link: /gitbook-assets/tutorials/env-active-1.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/tutorials/env-active-1.png
- Broken internal link: /gitbook-assets/tutorials/env-active-1.png

## Tickets

### create-and-host-an-api-with-flask-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/tutorials/env-active-1.png
- Broken internal link: /gitbook-assets/tutorials/env-active-1.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

