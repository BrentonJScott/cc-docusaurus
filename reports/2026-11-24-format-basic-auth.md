# Format report: basic-auth

**Run:** 2026-11-24T08:21:00Z
**Doc file:** docs/platform/security/basic-auth.md
**Doc type:** How-to guide
**Template:** how_to_format.md

**Feature:** Add HTTP basic authentication

**Goal:** Expect the capsule URL to ask for the credentials shown in the dashboard

**Format check:** fail
**Walkthrough:** not run (format fail)

## Content list (Check 1)

1. [goal] ((body)) Domains → Basic Auth enabled.
2. [goal] (## View Authentication Credentials) Show username/password.

## Check results

| Check | Status | Reason |
|---|---|---|
| Content (goal steps) | fail | No verification step (open URL, receive auth prompt). |
| Prerequisites | fail | Capsule with domain not in Prerequisites. |
| Links | fail | https-setup.png missing. |
| Format and style | fail | Missing doc_version, sidebar_label, Troubleshooting, steps section. |

## Tickets

### basic-auth-1: Restructure to how-to template.

- **Type:** Format fix
- **Title:** Restructure to how-to template.
- **Problem:** Two short sections with image.
- **Rule:** how_to_format.md
- **Change:** Prerequisites; ## Enable basic auth on your capsule; final step opens URL and confirms prompt; Troubleshooting.
- **Done when:** Template match.

### basic-auth-2: Remove missing screenshot.

- **Type:** Broken link
- **Title:** Remove missing screenshot.
- **Problem:** /gitbook-assets/platform/platform/security/https-setup.png missing.
- **Rule:** writing_style.md
- **Change:** Remove image.
- **Done when:** Check 3 passes.


## Proposed outline

## Prerequisites
## Enable HTTP basic auth
## Troubleshooting
