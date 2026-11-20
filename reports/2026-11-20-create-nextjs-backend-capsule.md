# Create NextJS backend capsule walkthrough (2026-11-20)
**Platform:** https://test-platform.codecapsules.io
**Manifest goal:** Expect to see capsule building in builds tab
**Run completed:** 2026-11-20T12:21:57.388Z
**Goal reached:** no
## Step results
| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 New Backend Capsule wizard | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=backend |
| 6 Capsule Details | pass | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 Configure Plan | pass | Plan selected |
| 8 Plan confirmed | pass | Continuing to Git step |
| 9 Connect a Git Repository | pass | Repository: BrentonJScott/demo-nextjs Team Repository; branch: main |
| 10 Build & Deploy fields | pass | Run command left blank (platform auto-detect) |
| 11 Create Capsule | pass | Ready to submit wizard |
| 12 Deploy Builds | pass | Building state visible |
## Guide steps in doc

**Count:** 10

- **Step 1:** Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun
- **Step 2:** On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox.
- **Step 3:** Click **Log in**.
- **Step 4:** Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?**
- **Step 5:** **Next.js** is not listed on **Quick Start**. Open [https://test-platform.codecapsules.io/new/capsule?capsuleType=backen
- **Step 6:** On **Capsule Details**:
- **Step 7:** On **Connect a Git Repository**:
- **Step 8:** On **Build & Deploy**, set **Start Command** to `npm start`. Adjust **Capsule Name** if needed.
- **Step 9:** Click **Create Capsule**.
- **Step 10:** On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres

## Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| 1 | pass | Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun | https://test-platform.codecapsules.io/auth/registration |
| 2 | pass | On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. | Login form visible |
| 3 | pass | Click **Log in**. | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 | pass | Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?** | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 | pass | **Next.js** is not listed on **Quick Start**. Open [https://test-platform.codecapsules.io/new/capsule?capsuleType=backen | https://test-platform.codecapsules.io/new/capsule?capsuleType=backend |
| 6 | pass | On **Capsule Details**: | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 | fail | On **Connect a Git Repository**: | Plan selected — mismatch: Guide step topic (git) does not match executor evidence (plan) |
| 8 | pass | On **Build & Deploy**, set **Start Command** to `npm start`. Adjust **Capsule Name** if needed. | Continuing to Git step |
| 9 | pass | Click **Create Capsule**. | Repository: BrentonJScott/demo-nextjs Team Repository; branch: main |
| 10 | pass | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | Run command left blank (platform auto-detect) |

## Mismatches / issues

- **Next.js** is not listed on Quick Start; the guide opens **New Capsule** with **Backend** instead.
- Step 7: Guide step topic (git) does not match executor evidence (plan)
- Walkthrough executor recorded 12 numbered steps; guide defines 10 (`### Step N`). Step numbers must match 1:1.