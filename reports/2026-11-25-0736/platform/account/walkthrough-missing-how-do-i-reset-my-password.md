# Walkthrough report (missing guide): Reset Your Password

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/account/how-do-i-reset-my-password.md` does not exist on disk)
- **Feature**: Reset Your Password
- **Goal**: Expect you can log in with the new password
- **Target**: https://test-platform.codecapsules.io
- **Format check**: not run (no guide)
- **Manifest goals reached**: not attempted (no guide to follow)

## Exploration

Headless Playwright sign-in at `https://test-platform.codecapsules.io` (via **Log in** from `/auth/registration`; direct `/auth/login` loads the registration view). Credential values from env vars only; not recorded. UI labels confirmed against existing published guides and the angular walkthrough in this run. No step-by-step walkthrough was run because no guide file exists on disk.

## Actions taken

None. WALKTHROUGH.md requires reading the guide before browser actions; there is no guide file for this feature.

## Guide alignment

Not applicable.

## Mismatches / issues

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/account/how-do-i-reset-my-password.md` in the docs repo.

## Tickets

### how-do-i-reset-my-password-wt-1

- **ID**: how-do-i-reset-my-password-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/account/how-do-i-reset-my-password.md` for Reset Your Password.
- **Problem**: The feature is listed with goal: Expect you can log in with the new password. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/account/how-do-i-reset-my-password.md`
  - **Proposed slug**: `/platform/account/how-do-i-reset-my-password`
  - **Doc type**: How-to
  - **Goal**: Expect you can log in with the new password
  - **Outline**:
  - From `/auth/login`, **Forgot password?** (`/auth/forgot-password`).
  - Enter email, follow reset link, set new password meeting policy.
  - Verify login at `/auth/login` via **Log in** link from registration.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
