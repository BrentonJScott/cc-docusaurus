# Walkthrough: how-do-i-add-remove-a-space

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/platform/spaces/how-do-i-add-remove-a-space.md`
- **Feature:** Add and remove a space
- **Goal:** Expect to see the space created and then removed
- **Environment:** https://test-platform.codecapsules.io
- **Goal reached:** **yes**

## Actions taken

1. **(not testable)** Have a Code Capsules account and be signed in — used existing session (dashboard showed “Hello, Brenton”).
2. Open **Spaces** from the overview navigation.
3. Click the yellow **+** on the Spaces page (navigated to **New Space**; no separate “New Space” menu item appeared).
4. On **Space Details**, choose **Personal Team**, enter space name `audit-wt-1109`, select **South Africa (Johannesburg)**, click **Create Space**.
5. Return to **Spaces** and confirm `audit-wt-1109` appears in the list.
6. Open the space — **Capsules** shows no capsules (skip remove-capsule steps).
7. Open **Details**, click **Remove Space**, type `audit-wt-1109` in the confirmation field, click **Confirm**.
8. Confirm the space no longer appears on the Spaces list.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Signed-in account (prerequisite) | Active session on test-platform |
| 2 | pass | Click **Spaces** tab | Spaces overview loaded |
| 3 | pass | Yellow **+**, then **New Space** | **+** opened the New Space wizard directly |
| 4 | pass | Team, name, region, **Create Space** | Space created; redirected to new-capsule flow |
| 5 | pass | New Space in Spaces list | `audit-wt-1109` listed |
| 6 | pass | Remove all capsules | Space had zero capsules |
| 7 | pass | **Details** → **Remove Space** → confirm | Confirmation required typing the space name (not stated in guide) |
| 8 | pass | Space gone from list | Removed; team spaces list shown |

## Mismatches / issues

1. **Confirmation text:** The guide says “Confirm” only; the UI requires typing the space name (`audit-wt-1109`) before **Confirm** is accepted.
2. **New Space menu:** The guide says select **New Space** after **+**; on test-platform, **+** on the Spaces page goes straight to `/new/space` without a submenu.

## Suggested fixes

- Under step 3 (**Remove the Space**), add that the remove dialog asks for the space name before **Confirm**.
- Under step 1 (**Create a Space**), note that **+** may open the New Space form directly instead of a **New Space** menu item.