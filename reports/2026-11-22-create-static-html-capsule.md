# Create Static HTML frontend capsule walkthrough (2026-11-22)
**Platform:** https://test-platform.codecapsules.io
**Manifest goal:** Expect to see capsule building in builds tab
**Run completed:** 2026-11-22T07:06:57.385Z
**Goal reached:** yes
## Step results
| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 Static HTML Deploy Now → New Capsule | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 Capsule Details | pass | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 Hosting Static | pass | Static selected |
| 8 Plan Free | pass | Free plan selected |
| 9 Connect a Git Repository | pass | Repository: BrentonJScott/demo-html Team Repository; branch: main |
| 10 Build & Deploy fields | pass | build command and output path left empty |
| 11 Create Capsule | pass | Ready to submit wizard |
| 12 Deploy Builds | pass | Building state visible |
## Guide steps in doc

**Count:** 12

- **Step 1:** Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun
- **Step 2:** On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox.
- **Step 3:** Click **Log in**.
- **Step 4:** Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?**
- **Step 5:** On **Quick Start**, find the **Static HTML** card and click **Deploy Now**. You should reach **New Capsule** at `/new/ca
- **Step 6:** On **Capsule Details**:
- **Step 7:** On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation
- **Step 8:** On **Plan**, select the **Free** plan card, then **Next**.
- **Step 9:** On **Connect a Git Repository**:
- **Step 10:** On **Build & Deploy**, leave **Build Command** and **Path to static content** blank unless your repo needs a build step.
- **Step 11:** Click **Create Capsule**.
- **Step 12:** On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres

## Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| 1 | pass | Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun | https://test-platform.codecapsules.io/auth/registration |
| 2 | pass | On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. | Login form visible |
| 3 | pass | Click **Log in**. | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 | pass | Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?** | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 | pass | On **Quick Start**, find the **Static HTML** card and click **Deploy Now**. You should reach **New Capsule** at `/new/ca | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 | pass | On **Capsule Details**: | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 | pass | On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation | Static selected |
| 8 | pass | On **Plan**, select the **Free** plan card, then **Next**. | Free plan selected |
| 9 | pass | On **Connect a Git Repository**: | Repository: BrentonJScott/demo-html Team Repository; branch: main |
| 10 | pass | On **Build & Deploy**, leave **Build Command** and **Path to static content** blank unless your repo needs a build step. | build command and output path left empty |
| 11 | pass | Click **Create Capsule**. | Ready to submit wizard |
| 12 | pass | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | Building state visible |

## Mismatches / issues

- None observed for this run.