# Format report: wordpress

- **Run timestamp:** 2026-11-24T11:09:00+02:00
- **Doc file:** `docs/wordpress.md`
- **Feature:** Secure WordPress capsule
- **Goal:** Expect to see secure headers, blocked paths, rate limiting and login protection in place
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** fuzzy match (score 0.695)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/add-capsule.png Image missing in static/: /gitbook-assets/get-started/wordpress-capsule-type.jpg Image missing in static/: /gitbook-assets/get-started/wordpress-choose-plan.png Image missing in static/: /gitbook-assets/get-started/wordpress-configure-capsule.png Image missing in static/: /gitbook-assets/get-started/wordpress-version.png Image missing in static/: /gitbook-assets/get-started/wordpress-git-managed.png Image missing in static/: /gitbook-assets/get-started/wordpress-logs.png Image missing in static/: /gitbook-assets/get-started/wordpress-url.png Image missing in static/: /gitbook-assets/get-started/wordpress-setup.png Image missing in static/: /gitbook-assets/get-started/wordpress-welcome.png Broken internal link: /gitbook-assets/get-started/add-capsule.png Broken internal link: /gitbook-assets/get-started/wordpress-capsule-type.jpg Broken internal link: /gitbook-assets/get-started/wordpress-choose-plan.png Broken internal link: /gitbook-assets/get-started/wordpress-configure-capsule.png Broken internal link: /gitbook-assets/get-started/wordpress-version.png Broken internal link: /gitbook-assets/get-started/wordpress-git-managed.png Broken internal link: /gitbook-assets/get-started/wordpress-logs.png Broken internal link: /gitbook-assets/get-started/wordpress-url.png Broken internal link: /gitbook-assets/get-started/wordpress-setup.png Broken internal link: /gitbook-assets/get-started/wordpress-welcome.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Legacy Setup/Create an Account sections instead of Prerequisites + steps section. Links to live codecapsules.io instead of internal docs paths. Image missing in static/: /gitbook-assets/get-started/add-capsule.png Image missing in static/: /gitbook-assets/get-started/wordpress-capsule-type.jpg Image missing in static/: /gitbook-assets/get-started/wordpress-choose-plan.png Image missing in static/: /gitbook-assets/get-started/wordpress-configure-capsule.png Image missing in static/: /gitbook-assets/get-started/wordpress-version.png Image missing in static/: /gitbook-assets/get-started/wordpress-git-managed.png Image missing in static/: /gitbook-assets/get-started/wordpress-logs.png Image missing in static/: /gitbook-assets/get-started/wordpress-url.png Image missing in static/: /gitbook-assets/get-started/wordpress-setup.png Image missing in static/: /gitbook-assets/get-started/wordpress-welcome.png Broken internal link: /gitbook-assets/get-started/add-capsule.png Broken internal link: /gitbook-assets/get-started/wordpress-capsule-type.jpg Broken internal link: /gitbook-assets/get-started/wordpress-choose-plan.png Broken internal link: /gitbook-assets/get-started/wordpress-configure-capsule.png Broken internal link: /gitbook-assets/get-started/wordpress-version.png Broken internal link: /gitbook-assets/get-started/wordpress-git-managed.png Broken internal link: /gitbook-assets/get-started/wordpress-logs.png Broken internal link: /gitbook-assets/get-started/wordpress-url.png Broken internal link: /gitbook-assets/get-started/wordpress-setup.png Broken internal link: /gitbook-assets/get-started/wordpress-welcome.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/add-capsule.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-capsule-type.jpg
- Image missing in static/: /gitbook-assets/get-started/wordpress-choose-plan.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-configure-capsule.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-version.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-git-managed.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-logs.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-url.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-setup.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-welcome.png
- Broken internal link: /gitbook-assets/get-started/add-capsule.png
- Broken internal link: /gitbook-assets/get-started/wordpress-capsule-type.jpg
- Broken internal link: /gitbook-assets/get-started/wordpress-choose-plan.png
- Broken internal link: /gitbook-assets/get-started/wordpress-configure-capsule.png
- Broken internal link: /gitbook-assets/get-started/wordpress-version.png
- Broken internal link: /gitbook-assets/get-started/wordpress-git-managed.png
- Broken internal link: /gitbook-assets/get-started/wordpress-logs.png
- Broken internal link: /gitbook-assets/get-started/wordpress-url.png
- Broken internal link: /gitbook-assets/get-started/wordpress-setup.png
- Broken internal link: /gitbook-assets/get-started/wordpress-welcome.png

## Tickets

### wordpress-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Legacy Setup/Create an Account sections instead of Prerequisites + steps section.
- Links to live codecapsules.io instead of internal docs paths.
- Image missing in static/: /gitbook-assets/get-started/add-capsule.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-capsule-type.jpg
- Image missing in static/: /gitbook-assets/get-started/wordpress-choose-plan.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-configure-capsule.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-version.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-git-managed.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-logs.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-url.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-setup.png
- Image missing in static/: /gitbook-assets/get-started/wordpress-welcome.png
- Broken internal link: /gitbook-assets/get-started/add-capsule.png
- Broken internal link: /gitbook-assets/get-started/wordpress-capsule-type.jpg
- Broken internal link: /gitbook-assets/get-started/wordpress-choose-plan.png
- Broken internal link: /gitbook-assets/get-started/wordpress-configure-capsule.png
- Broken internal link: /gitbook-assets/get-started/wordpress-version.png
- Broken internal link: /gitbook-assets/get-started/wordpress-git-managed.png
- Broken internal link: /gitbook-assets/get-started/wordpress-logs.png
- Broken internal link: /gitbook-assets/get-started/wordpress-url.png
- Broken internal link: /gitbook-assets/get-started/wordpress-setup.png
- Broken internal link: /gitbook-assets/get-started/wordpress-welcome.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

