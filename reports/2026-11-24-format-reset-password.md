# Format report: reset-password

| Field | Value |
|---|---|
| Run timestamp | 2026-11-24T08:21:00Z |
| Doc file | `docs/platform/account/how-do-i-reset-my-password.md` |
| Doc type | How-to guide |
| Template | `how_to_format.md` |
| Feature | Reset password |
| Goal | Expect to log in with the new password |
| Format check | **fail** |

## Content list (Check 1)

| # | Label | Heading | Instruction |
|---|---|---|---|
| 1 | goal | (title area) | Navigate to the **Account** tab in the dashboard. |
| 2 | goal | (title area) | In the **Security** section, click **Change Password**. |
| 3 | remove | (title area) | Screenshot: Reset Password In Account Tab |

## Check results

| Check | Status | Reason |
|---|---|---|
| Step 1: Doc type | pass | Password reset task. |
| Check 1: Content | fail | Missing steps to set a new password and log in; title says "in Seconds" (marketing); steps not in steps section. |
| Check 2: Prerequisites | fail | No `## Prerequisites`. |
| Check 3: Links | fail | Image not under `static/`. |
| Check 4: Format and style | fail | Missing `doc_version`; no `DocCardList`; no Troubleshooting; violates "don't use easy/in Minutes" spirit via "in Seconds". |

## Tickets

### reset-password-1

- **Type:** Format fix
- **Title:** Restructure reset password as a how-to guide
- **Problem:** `# Reset Your Password in Seconds` with two steps and a screenshot only opens the change-password UI.
- **Rule:** `how_to_format.md`; `writing_style.md`, Words
- **Change:**
  - [ ] Add `doc_version: drift`; align description with goal (log in with new password).
  - [ ] Retitle without "in Seconds"; add `DocCardList` and `## Prerequisites` if logged-in flow needs account.
  - [ ] Add `## Reset your password` with steps: open **Change Password**, enter current and new password, save, log out, log in with new password.
  - [ ] Remove screenshot; add `## Troubleshooting`.
- **Done when:** Last step confirms login with new password.

### reset-password-2

- **Type:** Missing goal step
- **Title:** Add password change and login verification steps
- **Problem:** Stops at clicking **Change Password**.
- **Rule:** `FORMAT.MD`, Check 1
- **Change:** Document entering new password and successful login.
- **Done when:** DOCUMENTED_FEATURES goal is explicit.

### reset-password-3

- **Type:** Broken link
- **Title:** Remove missing password screenshot
- **Problem:** gitbook-assets path absent from `static/`.
- **Rule:** Check 3
- **Change:** Remove image.
- **Done when:** No images.

## Proposed outline

```md
## Prerequisites (if needed: logged-in account)
## Reset your password (through successful login with new password)
## Troubleshooting
```