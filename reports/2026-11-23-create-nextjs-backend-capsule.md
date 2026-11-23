# Create NextJS backend capsule walkthrough (2026-11-23)
**Platform:** https://test-platform.codecapsules.io
**Manifest goal:** Expect to see capsule building in builds tab
**Run completed:** 2026-11-23T06:34:46.211Z
**Goal reached:** yes
## Step results
| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 New Backend Capsule wizard | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=backend |
| 6 Capsule Details | pass | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 Connect a Git Repository | pass | Repository: BrentonJScott/demo-nextjs Team Repository; branch: main |
| 8 Build & Deploy fields | pass | Start Command: npm start |
| 9 Create Capsule | pass | Ready to submit wizard |
| 10 Deploy Builds | pass | Building state visible |
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
| 7 | pass | On **Connect a Git Repository**: | Repository: BrentonJScott/demo-nextjs Team Repository; branch: main |
| 8 | pass | On **Build & Deploy**, set **Start Command** to `npm start`. Adjust **Capsule Name** if needed. | Start Command: npm start |
| 9 | pass | Click **Create Capsule**. | Ready to submit wizard |
| 10 | pass | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | Building state visible |

## Mismatches / issues

- **Next.js** is not listed on Quick Start; the guide opens **New Capsule** with **Backend** instead.
- Guide step 7 is **Connect a Git Repository** immediately after **Capsule Details**; live wizard inserted a **Plan** / **Configure Plan** step first.

## Actions taken

1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”. — **pass** (https://test-platform.codecapsules.io/auth/registration)
2. On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. — **pass** (Login form visible)
3. Click **Log in**. — **pass** (https://test-platform.codecapsules.io/dash/overview/quick-start)
4. Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?** — **pass** (https://test-platform.codecapsules.io/dash/overview/quick-start)
5. **Next.js** is not listed on **Quick Start**. Open [https://test-platform.codecapsules.io/new/capsule?capsuleType=backend](https://test-platform.codecapsules.io/new/capsule?capsuleType=backend) (or use **New Capsule** in the sidebar). On **Capsule Details**, choose **Backend** if another capsule type is still selected. — **pass** (https://test-platform.codecapsules.io/new/capsule?capsuleType=backend)
6. On **Capsule Details**: — **pass** (Team: Personal Team; space: Personal Space  personal-space-ivbk)
7. On **Connect a Git Repository**: — **pass** (Repository: BrentonJScott/demo-nextjs Team Repository; branch: main)
8. On **Build & Deploy**, set **Start Command** to `npm start`. Adjust **Capsule Name** if needed. — **pass** (Start Command: npm start)
9. Click **Create Capsule**. — **pass** (Ready to submit wizard)
10. On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progress**. — **pass** (Building state visible)

## Suggested fixes

- Add a **Configure Plan** (or **Plan**) step between **Capsule Details** and **Connect a Git Repository** so the guide matches the live backend wizard.
- Keep the note that **Next.js** is not on **Quick Start**; step 5 already documents opening `/new/capsule?capsuleType=backend`.
