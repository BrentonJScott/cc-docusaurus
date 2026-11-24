# Format report: basic-auth

- **Run timestamp:** 2026-11-24T10:35:00+02:00
- **Doc file:** `docs/platform/security/basic-auth.md`
- **Doc type:** how-to
- **Feature:** Add HTTP basic authentication
- **Goal:** Expect the capsule URL to ask for the credentials shown in the dashboard
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | Legacy layout / missing goal structure. |
| Prerequisites | fail | DocCardList prerequisites required. |
| Links | fail | Image missing in static/: /gitbook-assets/platform/platform/security/https-setup.png |
| Format and style | fail | Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/platform/security/https-setup.png Missing `## Prerequisites`. Missing `## Troubleshooting`. |

## Tickets

### basic-auth-1: Bring page in line with its template.
- **Type:** Format fix
- **Problem:** Missing or incorrect `doc_version: drift` in frontmatter. Missing `import DocCardList from '@theme/DocCardList';`. Image missing in static/: /gitbook-assets/platform/platform/security/https-setup.png
- **Rule:** how_to_format.md
- **Change:** Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/platform/security/https-setup.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
- **Done when:** FORMAT.MD re-check passes for this doc type.

## Mechanical findings

- Missing or incorrect `doc_version: drift` in frontmatter.
- Missing `import DocCardList from '@theme/DocCardList';`.
- Image missing in static/: /gitbook-assets/platform/platform/security/https-setup.png
- Missing `## Prerequisites`.
- Missing `## Troubleshooting`.
