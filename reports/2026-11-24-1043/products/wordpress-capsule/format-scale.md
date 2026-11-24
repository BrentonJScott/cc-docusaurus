# Format report: scale

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/wordpress-capsule/scale.md`
- **Feature:** Scale WordPress capsule
- **Goal:** Expect to see new resources saved in the scale tab
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.807)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-edit.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-custom.png Broken internal link: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-edit.png Broken internal link: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-custom.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-edit.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-custom.png Broken internal link: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-edit.png Broken internal link: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-custom.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-edit.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-custom.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-edit.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-custom.png

## Tickets

### scale-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-edit.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-custom.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-edit.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/scale/wordpress-scale-custom.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

