# Walkthrough: how-do-i-add-remove-teams

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/platform/teams/how-do-i-add-remove-teams.md`
- **Feature:** Add and remove a team
- **Goal:** Expect to see the team created and then removed
- **Environment:** https://test-platform.codecapsules.io
- **Goal reached:** **yes**

## Actions taken

1. **(not testable)** Have a Code Capsules account and be signed in — used existing session (overview showed “Hello, Brenton”).
2. Click the yellow **+** in the sidebar and choose **New Team**.
3. Enter team name `audit-wt-team-1109` and click **I like it!**.
4. Open **Teams** on the overview (**/dash/overview/teams**) and confirm `audit-wt-team-1109` is listed.
5. **Remove Spaces from the Team** — team had zero spaces; no removals needed.
6. Open the team **Details** tab, click **Remove Team**, type `audit-wt-team-1109` in the confirmation field, click **Confirm**.
7. Return to **Teams** overview and confirm `audit-wt-team-1109` is no longer listed.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Signed-in account (prerequisite) | Active session on test-platform |
| 2 | pass | Yellow **+**, then **New Team** | Menu showed **New Team**, **New Space**, **New Capsule** |
| 3 | pass | Team name, **I Like It!** | Created team; button label is **I like it!** (casing differs); redirected to new-space wizard |
| 4 | pass | Team in Teams list | `audit-wt-team-1109` visible on overview **Teams** |
| 5 | pass | Remove all team spaces | Team had 0 spaces |
| 6 | pass | **Details** → **Remove Team** → confirm | Dialog required typing the team name before **Confirm** (not stated in guide) |
| 7 | pass | Team gone from list | Removed; overview teams list no longer shows `audit-wt-team-1109` |

## Mismatches / issues

1. **Confirmation text:** The guide says “Confirm” only; the UI requires typing the team name (`audit-wt-team-1109`) before **Confirm** is accepted.
2. **Button label:** The guide says **I Like It!**; the UI button reads **I like it!**.

## Suggested fixes

- Under step 3 (**Remove the Team**), add that the remove dialog asks for the team name before **Confirm**.
- Align the create step button text with the UI (**I like it!**) or describe it case-insensitively.