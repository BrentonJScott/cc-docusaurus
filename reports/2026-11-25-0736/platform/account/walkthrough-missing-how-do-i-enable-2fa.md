# Walkthrough report (missing guide): Enable Two-Factor Authentication (2FA)

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/account/how-do-i-enable-2fa.md` does not exist on disk)
- **Feature**: Enable Two-Factor Authentication (2FA)
- **Goal**: Expect to see 2FA is enabled in the Security section
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/account/how-do-i-enable-2fa.md` in the docs repo.

## Tickets

### how-do-i-enable-2fa-wt-1

- **ID**: how-do-i-enable-2fa-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/account/how-do-i-enable-2fa.md` for Enable Two-Factor Authentication (2FA).
- **Problem**: The feature is listed with goal: Expect to see 2FA is enabled in the Security section. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/account/how-do-i-enable-2fa.md`
  - **Proposed slug**: `/platform/account/how-do-i-enable-2fa`
  - **Doc type**: How-to
  - **Goal**: Expect to see 2FA is enabled in the Security section
  - **Outline**:
  - Prerequisites: account login.
  - Profile or **Security**: enable 2FA, scan QR, enter verification code.
  - Confirm Security shows 2FA enabled; note backup codes if offered.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
