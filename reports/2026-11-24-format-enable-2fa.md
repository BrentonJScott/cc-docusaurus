# Format report: enable-2fa

| Field | Value |
|---|---|
| Run timestamp | 2026-11-24T08:21:00Z |
| Doc file | `docs/platform/account/how-do-i-enable-2fa.md` |
| Doc type | How-to guide |
| Template | `how_to_format.md` |
| Feature | Enable two-factor authentication |
| Goal | Expect to be asked for a 2FA code at the next login |
| Format check | **fail** |

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | goal | (title area) | Navigate to the **Account** tab in your dashboard. |
| 2 | goal | (title area) | In the **Security** section, click **Enable 2FA**. |
| 3 | remove | (title area) | Screenshot: Enable 2FA in Account Tab |

## Check results

| Check | Status | Reason |
|---|---|---|
| Step 1: Doc type | pass | Single 2FA setup task. |
| Check 1: Content | fail | Steps stop before enrollment completes; no mention of 2FA prompt at next login; steps not in a dedicated steps section. |
| Check 2: Prerequisites | fail | No `## Prerequisites`. |
| Check 3: Links | fail | Image `/gitbook-assets/platform/platform/account/account-2fa.png` not under `static/`. |
| Check 4: Format and style | fail | Missing `doc_version`; no `DocCardList`; intro uses colon then numbered list under title; title marketing tone; no Troubleshooting. |

## Tickets

### enable-2fa-1

- **Type:** Format fix
- **Title:** Restructure enable 2FA as a how-to guide
- **Problem:** Two steps under the title after "To set up two-factor authentication (2FA) for your Code Capsules account:" plus one screenshot.
- **Rule:** `how_to_format.md`, Sections; `writing_style.md`, Words (no "in Seconds" style marketing in titles)
- **Change:**
  - [ ] Add `doc_version: drift`; align `description` with goal (2FA at next login).
  - [ ] Add `DocCardList` import; replace `# Protect Your Account With 2FA` with a plain task title; repeat description under title.
  - [ ] Add `## Prerequisites` (account card).
  - [ ] Add `## Enable two-factor authentication` with full enrollment steps (authenticator app, backup codes if applicable) and a final step: log out and log in—prompted for 2FA code.
  - [ ] Remove screenshot.
  - [ ] Add `## Troubleshooting`.
- **Done when:** Last step describes 2FA challenge at login.

### enable-2fa-2

- **Type:** Missing goal step
- **Title:** Complete 2FA setup and verify at login
- **Problem:** Doc ends at **Enable 2FA** click with no setup or login verification.
- **Rule:** `FORMAT.MD`, Check 1 How-to
- **Change:** Add steps through enrollment and explicit next-login 2FA prompt.
- **Done when:** Goal from DOCUMENTED_FEATURES is stated in the last step.

### enable-2fa-3

- **Type:** Broken link
- **Title:** Remove missing 2FA screenshot
- **Problem:** gitbook-assets path not in `static/`.
- **Rule:** Check 3
- **Change:** Remove image.
- **Done when:** No images on page.

## Proposed outline

```md
## Prerequisites
## Enable two-factor authentication (steps through login verification)
## Troubleshooting
```