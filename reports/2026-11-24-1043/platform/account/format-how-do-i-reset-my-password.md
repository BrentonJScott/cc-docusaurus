# Format report: how-do-i-reset-my-password

- **Run timestamp:** 2026-11-24T10:43:00+02:00
- **Doc file:** `docs/platform/account/how-do-i-reset-my-password.md`
- **Feature:** Reset password
- **Goal:** Expect to log in with the new password
- **Doc type:** how-to
- **Format check:** fail
- **Guide match:** curated (score 1.0)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/platform/account/account-password.png Broken internal link: /gitbook-assets/platform/platform/account/account-password.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Missing `## Prerequisites`. Missing `## Troubleshooting`. Image missing in static/: /gitbook-assets/platform/platform/account/account-password.png Broken internal link: /gitbook-assets/platform/platform/account/account-password.png |

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/platform/account/account-password.png
- Broken internal link: /gitbook-assets/platform/platform/account/account-password.png

## Tickets

### how-do-i-reset-my-password-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter.
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- Image missing in static/: /gitbook-assets/platform/platform/account/account-password.png
- Broken internal link: /gitbook-assets/platform/platform/account/account-password.png
- **Done when:** FORMAT.MD re-check passes for this doc type.

