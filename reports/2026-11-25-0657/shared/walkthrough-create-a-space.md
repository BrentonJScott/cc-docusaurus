# Walkthrough report: create-a-space

- **Run timestamp:** 2026-11-25T06:57:29Z
- **Target:** https://test-platform.codecapsules.io
- **Guide file:** `docs/shared/create-a-space.md`
- **Format check:** pass (no format report)
- **Goal reached:** no

## Actions taken

1. (pass) On the dashboard, click **+** and select **New Space**.
   - **Actual:** **+** is a sidebar link, not a button; **New Space** opened the create flow.
2. (fail) On **Create Space**, set Team, Name, Region.
   - **Actual:** No **Create Space** heading and no fields matched `getByLabel` for Team, Name, or Region; the URL was `https://test-platform.codecapsules.io/new/space` with a **Create Space** submit control.
3. (pass) Click **Create Space** and confirm the Space is ready.
   - **Actual:** After **Create Space**, the Space view loaded at the new URL with name `audit-space-vpnsl7`.

## Guide alignment

| # | Status | Guide expects | What happened | Screenshot |
|---|--------|---------------|---------------|------------|
| 1 | pass | Dashboard **+**, then **New Space** | Sidebar link **+**; **New Space** in menu | — |
| 2 | fail | **Create Space** form with Team, Name, Region labels | Form present but labels not exposed as documented | [failure-step-2-team.jpg](screenshots-create-a-space/failure-step-2-team.jpg) |
| 3 | pass | New Space open and ready for capsules | Space opened after create | — |

## Mismatches / issues

- Step 1: Guide says click **+** on the dashboard; on test-platform the control is a navigation link labeled **+**, not a button.
- Step 2: Guide describes fields under **Create Space** with **Team**, **Name**, and **Region** labels; automation could not resolve those labels even though creation succeeded.

## Tickets

### create-a-space-wt-1: Describe the + control as a sidebar link

- **Type:** Guide fix
- **Title:** Say the **+** navigation link opens the create menu.
- **Problem:** Action 1 — guide implies a generic dashboard **+**; the live UI uses a sidebar link **+**.
- **Change:** State that **+** is in the main navigation and opens **New Space**, **New Capsule**, and related items.
- **Done when:** Action 1 passes using only guide wording.

### create-a-space-wt-2: Match Space form field labels to the create screen

- **Type:** Guide fix
- **Title:** Align Team, Name, and Region with visible labels on `/new/space`.
- **Problem:** Action 2 — documented label names did not match accessible labels on test-platform.
- **Change:** Quote the exact field labels shown on **Create Space** (or **New Space**) today.
- **Done when:** Action 2 passes by label, not by URL guessing.