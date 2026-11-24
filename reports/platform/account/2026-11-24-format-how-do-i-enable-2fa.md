# Format report: how-do-i-enable-2fa

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/account/how-do-i-enable-2fa.md`
- **Doc type:** how-to
- **Feature:** Enable two-factor authentication
- **Goal:** Expect to be asked for a 2FA code at the next login
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/platform/account/account-2fa.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/platform/account/account-2fa.png Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### how-do-i-enable-2fa-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/platform/account/account-2fa.png
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/platform/account/account-2fa.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/platform/account/account-2fa.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
