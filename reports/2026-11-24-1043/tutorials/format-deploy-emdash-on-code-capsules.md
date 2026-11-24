# Format report: deploy-emdash-on-code-capsules

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/tutorials/deploy-emdash-on-code-capsules.md`
- **Feature:** Deploy an EmDash CMS site
- **Goal:** Expect to see the site redeploy on push
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.845)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | pass | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/bind-persistent-1.png Broken internal link: /gitbook-assets/get-started/bind-persistent-1.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Troubleshooting`. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/bind-persistent-1.png Broken internal link: /gitbook-assets/get-started/bind-persistent-1.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/bind-persistent-1.png
- Broken internal link: /gitbook-assets/get-started/bind-persistent-1.png

## Tickets

### deploy-emdash-on-code-capsules-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Troubleshooting`.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/bind-persistent-1.png
- Broken internal link: /gitbook-assets/get-started/bind-persistent-1.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

