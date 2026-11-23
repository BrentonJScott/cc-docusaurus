# Create React frontend capsule walkthrough (2026-11-23)
**Platform:** https://test-platform.codecapsules.io
**Manifest goal:** Expect to see capsule building in builds tab
**Run completed:** 2026-11-23T06:58:54.554Z
**Goal reached:** no
## Step results
| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 React Deploy Now → New Capsule | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 Capsule Details | pass | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 Hosting Static | pass | Static selected |
| 8 Plan Free | pass | Free plan selected |
| 9 Connect a Git Repository | pass | Repository: BrentonJScott/demo-react Team Repository; branch: main |
| 10 Build & Deploy fields | pass | npm run build; build |
| 11 Create Capsule | pass | Ready to submit wizard |
| 12 Deploy Builds | pass | Building state visible |
## Guide steps in doc

**Count:** 11

- **Step 1:** Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun
- **Step 2:** On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox.
- **Step 3:** Click **Log in**.
- **Step 4:** On the dashboard, click **Create New Capsule** and pick **React**. You should reach **New Capsule** at `/new/capsule?cap
- **Step 5:** On **Capsule Details**:
- **Step 6:** On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation
- **Step 7:** On **Plan**, select the **Starter** plan card, then **Next**.
- **Step 8:** On **Connect a Git Repository**:
- **Step 9:** On **Build & Deploy**, fill the fields that use placeholder examples on the live form:
- **Step 10:** Click **Create Capsule**.
- **Step 11:** On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres

## Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| 1 | pass | Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun | https://test-platform.codecapsules.io/auth/registration |
| 2 | pass | On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. | Login form visible |
| 3 | pass | Click **Log in**. | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 | fail | On the dashboard, click **Create New Capsule** and pick **React**. You should reach **New Capsule** at `/new/capsule?cap | https://test-platform.codecapsules.io/dash/overview/quick-start — mismatch: Guide step topic (new capsule) does not match executor evidence (quick start); Guide: Create New Capsule; executor used Quic |
| 5 | fail | On **Capsule Details**: | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend — mismatch: Guide step topic (capsule details) does not match executor evidence (new capsule) |
| 6 | fail | On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation | Team: Personal Team; space: Personal Space  personal-space-ivbk — mismatch: Guide step topic (hosting) does not match executor evidence (capsule details) |
| 7 | fail | On **Plan**, select the **Starter** plan card, then **Next**. | Static selected — mismatch: Guide step topic (plan) does not match executor evidence (hosting) |
| 8 | fail | On **Connect a Git Repository**: | Free plan selected — mismatch: Guide step topic (git) does not match executor evidence (plan) |
| 9 | fail | On **Build & Deploy**, fill the fields that use placeholder examples on the live form: | Repository: BrentonJScott/demo-react Team Repository; branch: main — mismatch: Guide step topic (build) does not match executor evidence (git) |
| 10 | pass | Click **Create Capsule**. | npm run build; build |
| 11 | pass | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | Ready to submit wizard |

## Mismatches / issues

- Step 4: Guide step topic (new capsule) does not match executor evidence (quick start)
- Step 4: Guide: Create New Capsule; executor used Quick Start
- Step 5: Guide step topic (capsule details) does not match executor evidence (new capsule)
- Step 6: Guide step topic (hosting) does not match executor evidence (capsule details)
- Step 7: Guide step topic (plan) does not match executor evidence (hosting)
- Step 8: Guide step topic (git) does not match executor evidence (plan)
- Step 9: Guide step topic (build) does not match executor evidence (git)
- Walkthrough executor recorded 12 numbered steps; guide defines 11 (`### Step N`). Step numbers must match 1:1.

## Suggested fixes

- **Step 4:** On the test platform, **Quick Start → React → Deploy Now** reaches the wizard; update the guide to match that path (or document **Create New Capsule** if that control is restored).
- **Steps 5–9 numbering:** Split login/navigation from wizard screens so each `### Step N` maps to one wizard screen (executor uses 12 actions; guide has 11).
- **Step 7 (Plan):** Guide names **Starter**; audit account only offered **Free** on Plan — document the plan card shown on test-platform or name **Free** when that is the only option.
- **Step 8 (branch):** Guide says **master**; connected repo uses **main** — match the demo repository’s default branch name.