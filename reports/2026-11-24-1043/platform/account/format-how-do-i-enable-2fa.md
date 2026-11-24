# Format report: how-do-i-enable-2fa

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/platform/account/how-do-i-enable-2fa.md`
- **Feature:** Enable two-factor authentication
- **Goal:** Expect to be asked for a 2FA code at the next login
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/platform/account/account-2fa.png Broken internal link: /gitbook-assets/platform/platform/account/account-2fa.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/platform/platform/account/account-2fa.png Broken internal link: /gitbook-assets/platform/platform/account/account-2fa.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/platform/account/account-2fa.png
- Broken internal link: /gitbook-assets/platform/platform/account/account-2fa.png

## Tickets

### how-do-i-enable-2fa-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/platform/account/account-2fa.png
- Broken internal link: /gitbook-assets/platform/platform/account/account-2fa.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

