# New guide report: Reset Your Password

- **Run**: 2026-11-25-0736
- **Proposed doc**: `docs/platform/account/how-do-i-reset-my-password.md`
- **Doc type**: How-to guide
- **Slug**: `/platform/account/how-do-i-reset-my-password`
- **Feature**: Reset Your Password
- **Goal**: Expect you can log in with the new password
- **Guide status**: missing (no file at `docs/platform/account/how-do-i-reset-my-password.md`)
- **Exploration**: Desk review using walkthrough-missing report in this run and capsule-wizard patterns from existing guides; browser walkthrough captured separately in walkthrough-missing report.

## Steps explored

1. Sign in to the test platform
2. Open the account or Space area described in the guide
3. Follow each step using UI labels from the platform
4. Confirm the documented outcome

## Goal check

- **Manifest goals reached**: not verified (guide file absent; steps derived from platform flow and walkthrough-missing ticket)

## Tickets

### how-do-i-reset-my-password-ng-1

- **ID**: how-do-i-reset-my-password-ng-1
- **Type**: New guide
- **Title**: Add `docs/platform/account/how-do-i-reset-my-password.md` for Reset Your Password.
- **Problem**: `docs/platform/account/how-do-i-reset-my-password.md` is listed in `DOCUMENTED_FEATURES.md` but does not exist under `docs/`. Readers cannot follow a guide to reach the goal: Expect you can log in with the new password
- **Change**: Create `docs/platform/account/how-do-i-reset-my-password.md` as a how-to guide with slug `/platform/account/how-do-i-reset-my-password`, title aligned to the feature name, and steps that match the test platform UI. Use `/docs/...` internal links in prerequisites and cross-links.
- **Proposed path**: `docs/platform/account/how-do-i-reset-my-password.md`
- **Proposed slug**: `/platform/account/how-do-i-reset-my-password`
- **Goal**: Expect you can log in with the new password
- **Outline**:

```
# Reset Your Password
Expect you can log in with the new password

## Prerequisites
DocCardList linking shared prerequisite pages under `/docs/shared/...`.

## Reset Your Password
1. **Sign in to the test platform** — step detail from platform UI labels
2. **Open the account or Space area described in the guide** — step detail from platform UI labels
3. **Follow each step using UI labels from the platform** — step detail from platform UI labels
4. **Confirm the documented outcome** — step detail from platform UI labels

Final step states the documented goal outcome.

## Troubleshooting
<details> common blockers </details>
```

- **Done when**: The guide file exists at `docs/platform/account/how-do-i-reset-my-password.md`, passes the format check for a how-to guide, and a walkthrough on `https://test-platform.codecapsules.io` reaches the documented goal.
