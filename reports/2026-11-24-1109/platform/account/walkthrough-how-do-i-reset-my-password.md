# Walkthrough: how-do-i-reset-my-password

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/platform/account/how-do-i-reset-my-password.md`
- **Feature:** Reset password
- **Goal:** Expect to log in with the new password
- **Environment:** https://test-platform.codecapsules.io
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Code Capsules account (prerequisite) — no active Playwright session; `CC_EMAIL` / `TEST_USER_EMAIL` unset; `/dash/overview/quick-start` and `/dash/overview/account` redirect to `/auth/registration` (contrast with [exploratory-common-login](../../exploratory-common-login.md) at run start).
2. Open the **Account** tab in the dashboard — browsed to `/dash/overview/account`; redirected to **Create your account** registration, not Account settings.
3. **(blocked)** In **Security**, click **Change Password** — depends on action 2.
4. **(blocked)** Enter current, new, and confirmation passwords and save — depends on action 2.
5. Open `/auth/login` via **Log in** from registration; confirm **Forgot password?** is present (troubleshooting path).
6. Click **Forgot password?** — `/auth/forgot-password` loads **Reset your password** with email field and **Send reset code** (troubleshooting vs guide “reset link in your inbox”).

## Guide alignment

| Action | Status | Guide expects | What happened | Screenshot |
|--------|--------|---------------|---------------|------------|
| 1 | not testable | Signed-in account | No session / creds for automation | — |
| 2 | fail | **Account** tab in dashboard | Redirect to registration; no **Account** or **Security** | [failure-step-1.jpg](./failure-step-1.jpg) |
| 3 | blocked | **Security** → **Change Password** | Blocked by action 2 | — |
| 4 | blocked | Set new password and confirm login | Blocked by action 2 | — |
| 5 | pass | **Forgot password** on login page | **Forgot password?** on `/auth/login` | — |
| 6 | fail | Email + reset **link** in inbox | **Send reset code** copy; inbox not verified | [failure-step-4.jpg](./failure-step-4.jpg) |

## Mismatches / issues

1. **Session (action 2):** Could not reach **Account** without signing in; walkthrough could not verify **Security** / **Change Password** on test-platform during this run.
2. **Forgot-password wording (action 6):** Troubleshooting says follow the reset **link** in your inbox; UI prompts for email and **Send reset code**.

## Suggested fixes

- Document the overview **Account** route (for example `/dash/overview/account`) if that is the canonical entry, matching other platform guides.
- Align troubleshooting copy with the login recovery flow (**reset code** / email instructions as implemented on test-platform).
- Ensure automation runs retain a signed-in test-platform session (or team secrets for `CC_EMAIL` / `CC_PASSWORD`) so password-change steps can be exercised end-to-end.