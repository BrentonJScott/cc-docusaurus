# Format report: deploy

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/products/wordpress-capsule/deploy.md`
- **Feature:** Create managed WordPress capsule
- **Goal:** Expect to see the WordPress setup screen load
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/add-capsule.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-capsule-type.jpg Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-choose-plan.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-configure-capsule.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-version.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-git-managed.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-logs.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-url.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-setup.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-welcome.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/add-capsule.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-capsule-type.jpg Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-choose-plan.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-configure-capsule.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-version.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-git-managed.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-logs.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-url.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-setup.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-welcome.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/add-capsule.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-capsule-type.jpg Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-choose-plan.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-configure-capsule.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-version.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-git-managed.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-logs.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-url.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-setup.png Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-welcome.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/add-capsule.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-capsule-type.jpg Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-choose-plan.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-configure-capsule.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-version.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-git-managed.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-logs.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-url.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-setup.png Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-welcome.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/add-capsule.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-capsule-type.jpg
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-choose-plan.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-configure-capsule.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-version.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-git-managed.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-logs.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-url.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-setup.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-welcome.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/add-capsule.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-capsule-type.jpg
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-choose-plan.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-configure-capsule.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-version.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-git-managed.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-logs.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-url.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-setup.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-welcome.png

## Tickets

### deploy-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/add-capsule.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-capsule-type.jpg
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-choose-plan.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-configure-capsule.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-version.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-git-managed.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-logs.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-url.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-setup.png
- Image missing in static/: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-welcome.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/add-capsule.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-capsule-type.jpg
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-choose-plan.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-configure-capsule.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-version.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-git-managed.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-logs.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-url.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-setup.png
- Broken internal link: /gitbook-assets/products/wordpress-capsule/deploy/wordpress-welcome.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

