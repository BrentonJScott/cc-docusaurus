# Walkthrough report: health-checks.md

- **Run:** 2026-11-25-0931
- **Guide:** `docs/platform/capsules/health-checks.md`
- **Doc type:** How-to guide (Format check: pass)
- **Target:** https://test-platform.codecapsules.io (headless Playwright)
- **Goal:** Expect to see the health check settings saved on the capsule
- **Manifest goals reached:** no (action 2 failed; the final goal check itself passed)

## Setup (not testable)

- Account: signed in with the existing test account (credentials from environment, not recorded). Sign-up from the Prerequisites card was not tested.
- Capsule: the account has no Docker Capsule. I used the existing running **Backend Capsule** `demo-nextjs` (Personal Team / Document Drift). It shows a **Config** tab, which the guide allows ("or **Config**, depending on Capsule type"). This changed that capsule's health check and redeployed it.

## Actions taken

1. Opened the **Capsules** list, opened `demo-nextjs`, and selected the **Config** tab.
2. Tried to set **Health Check** to **Automatic**. The field was read-only text ("Off"). I clicked **Edit** next to **Runtime**, then chose **Automatic** in the **Health Check** dropdown. An **Endpoint** field appeared, empty.
3. Typed `/health` in **Endpoint**.
4. Clicked **Save** in the Runtime section. The site asked "Update Runtime Settings and Restart. Are you sure? Saving redeploys the capsule." and I clicked **Confirm**.
5. Left the tab (Details), reopened **Config**, and checked **Health Check** and **Endpoint**.

## Guide alignment

| # | Guide step | Guide expects | What happened | Status | Screenshot |
|---|---|---|---|---|---|
| 1 | 1. Open Configure | Open the Capsule and select **Configure** (or **Config**) | **Config** tab opened on a Backend Capsule | pass | — |
| 2 | 2. Set Automatic health check (**Health Check** to **Automatic**) | **Health Check** can be set directly on the tab | **Health Check** shows "Off" as text. The dropdown only appears after clicking **Edit** next to **Runtime**, which the guide never mentions. | fail | `step-2.jpg` |
| 3 | 2. Set **Endpoint** to `/health` | **Endpoint** field is available after choosing Automatic | **Endpoint** appeared (empty); `/health` entered | pass | — |
| 4 | 3. Apply: save or redeploy if prompted | Save or redeploy if prompted; redeploys without a new build | **Save** in Runtime, then a **Confirm** dialog ("Saving redeploys the capsule") | pass | — |
| 5 | 4. Confirm the saved settings | **Health Check** shows **Automatic** and **Endpoint** shows `/health` | Reopened **Config**: **Health Check** = Automatic, **Endpoint** = `/health` | pass | — |

Final goal check: **Health Check** = Automatic and **Endpoint** = `/health` were saved on the capsule. Pass.

## Mismatches / issues

1. Action 2. The guide says: "Set **Health Check** to **Automatic**. Set **Endpoint** to `/health`." On the site, **Health Check** is read-only until you click **Edit** under **Runtime**. Saving that section shows a confirmation dialog titled "Update Runtime Settings and Restart". See `step-2.jpg`.

Everything else matched.

## Tickets

### health-checks-wt-1

- **ID:** health-checks-wt-1
- **Type:** Missing step
- **Title:** Add "click Edit next to Runtime" before setting Health Check.
- **Problem:** Step 2 (**Set Automatic health check**) says "Set **Health Check** to **Automatic**. Set **Endpoint** to `/health`." On the **Config** tab, **Health Check** is plain text ("Off") with no dropdown. The dropdown and **Endpoint** field appear only after clicking **Edit** next to **Runtime** (action 2, `reports/2026-11-25-0931/platform/capsules/step-2.jpg`).
- **Change:** Add a step between steps 1 and 2, or to the start of step 2: "On **Config**, click **Edit** next to **Runtime**." In step 3, say "Click **Save** in **Runtime**, then **Confirm**." Keep the guide's `Configure`/`Config` wording.
- **Done when:** Re-running the guide using only its text reaches the **Health Check** dropdown and saves the settings, and every action passes.
