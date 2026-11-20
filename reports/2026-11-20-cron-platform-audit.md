# Cron platform audit (2026-11-20)

**Run completed:** 2026-11-20T12:24:09.157Z
**Manifest:** `cc-site/DOCUMENTED_FEATURES.MD` — 6 features
**Target:** https://test-platform.codecapsules.io

| DOCUMENTED_FEATURES | Guide |
|---|---|
| Create Angular frontend capsule | `docs/guides/angular.md` |
| Create React frontend capsule | `docs/guides/react.md` |
| Create Vue frontend capsule | `docs/guides/vue.md` |
| Create NextJS backend capsule | `docs/guides/next.js.md` |
| Create Static HTML capsule | `docs/guides/static-html.md` |
| Create Svelte frontend capsule | `docs/guides/svelte.md` |

**Manifest goals reached:** no (see per-feature tables)

## Create Angular frontend capsule

**Goal reached:** no
**Guide steps in doc:** 0

### Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| — | fail | (no alignment rows) | Guide not walkthrough-shaped or run blocked |

### Executor step results

| Step | Pass | Detail |
|---|---|---|

Walkthrough JSON: `reports/2026-11-20-create-angular-frontend-capsule.json`

## Create React frontend capsule

**Goal reached:** no
**Guide steps in doc:** 11

### Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| 1 | pass | Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun | https://test-platform.codecapsules.io/auth/registration |
| 2 | pass | On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. | Login form visible |
| 3 | pass | Click **Log in**. | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 | fail | On the dashboard, click **Create New Capsule** and pick **React**. You should reach **New Capsule** at `/new/capsule?cap | https://test-platform.codecapsules.io/dash/overview/quick-start — mismatch: Guide step topic (new capsule) does not matc |
| 5 | fail | On **Capsule Details**: | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend — mismatch: Guide step topic (capsule details) do |
| 6 | fail | On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation | Team: Personal Team; space: Personal Space  personal-space-ivbk — mismatch: Guide step topic (hosting) does not match ex |
| 7 | fail | On **Plan**, select the **Starter** plan card, then **Next**. | Static selected — mismatch: Guide step topic (plan) does not match executor evidence (hosting) |
| 8 | fail | On **Connect a Git Repository**: | Free plan selected — mismatch: Guide step topic (git) does not match executor evidence (plan) |
| 9 | fail | On **Build & Deploy**, fill the fields that use placeholder examples on the live form: | Repository: BrentonJScott/demo-react Team Repository; branch: main — mismatch: Guide step topic (build) does not match e |
| 10 | pass | Click **Create Capsule**. | npm run build; build |
| 11 | pass | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | Ready to submit wizard |

### Executor step results

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

Walkthrough JSON: `reports/2026-11-20-create-react-frontend-capsule.json`

## Create Vue frontend capsule

**Goal reached:** yes
**Guide steps in doc:** 12

### Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| 1 | pass | Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun | https://test-platform.codecapsules.io/auth/registration |
| 2 | pass | On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. | Login form visible |
| 3 | pass | Click **Log in**. | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 | pass | Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?** | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 | pass | On **Quick Start**, find the **Vue** card (**Vue applications**) and click **Deploy Now**. You should reach **New Capsul | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 | pass | On **Capsule Details**: | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 | pass | On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation | Static selected |
| 8 | pass | On **Plan**, select the **Free** plan card, then **Next**. | Free plan selected |
| 9 | pass | On **Connect a Git Repository**: | Repository: BrentonJScott/demo-vue Team Repository; branch: main |
| 10 | pass | On **Build & Deploy**, fill the fields that use placeholder examples on the live form: | npm run build; dist |
| 11 | pass | Click **Create Capsule**. | Ready to submit wizard |
| 12 | pass | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | Building state visible |

### Executor step results

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 Vue Deploy Now → New Capsule | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 Capsule Details | pass | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 Hosting Static | pass | Static selected |
| 8 Plan Free | pass | Free plan selected |
| 9 Connect a Git Repository | pass | Repository: BrentonJScott/demo-vue Team Repository; branch: main |
| 10 Build & Deploy fields | pass | npm run build; dist |
| 11 Create Capsule | pass | Ready to submit wizard |
| 12 Deploy Builds | pass | Building state visible |

Walkthrough JSON: `reports/2026-11-20-create-vue-frontend-capsule.json`

## Create NextJS backend capsule

**Goal reached:** no
**Guide steps in doc:** 10

### Guide alignment

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

### Executor step results

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

Walkthrough JSON: `reports/2026-11-20-create-nextjs-backend-capsule.json`

## Create Static HTML capsule

**Goal reached:** yes
**Guide steps in doc:** 12

### Guide alignment

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

### Executor step results

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

Walkthrough JSON: `reports/2026-11-20-create-static-html-capsule.json`

## Create Svelte frontend capsule

**Goal reached:** yes
**Guide steps in doc:** 12

### Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| 1 | pass | Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun | https://test-platform.codecapsules.io/auth/registration |
| 2 | pass | On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. | Login form visible |
| 3 | pass | Click **Log in**. | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 | pass | Open **Quick Start** in the sidebar. Confirm the heading **What type of capsule would you like to deploy?** | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 | pass | **Svelte** is not on **Quick Start**. Open [https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend](http | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 | pass | On **Capsule Details**: | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 | pass | On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation | Static selected |
| 8 | pass | On **Plan**, select the **Free** plan card, then **Next**. | Free plan selected |
| 9 | pass | On **Connect a Git Repository**: | Repository: BrentonJScott/demo-svelte Team Repository; branch: main |
| 10 | pass | On **Build & Deploy**, fill the fields that use placeholder examples on the live form: | npm run build; public |
| 11 | pass | Click **Create Capsule**. | Ready to submit wizard |
| 12 | pass | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | Building state visible |

### Executor step results

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Quick Start | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 5 New Capsule wizard (Svelte) | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend |
| 6 Capsule Details | pass | Team: Personal Team; space: Personal Space  personal-space-ivbk |
| 7 Hosting Static | pass | Static selected |
| 8 Plan Free | pass | Free plan selected |
| 9 Connect a Git Repository | pass | Repository: BrentonJScott/demo-svelte Team Repository; branch: main |
| 10 Build & Deploy fields | pass | npm run build; public |
| 11 Create Capsule | pass | Ready to submit wizard |
| 12 Deploy Builds | pass | Building state visible |

Walkthrough JSON: `reports/2026-11-20-create-svelte-frontend-capsule.json`

## Mismatches / issues

- Create Angular frontend capsule: Guide not walkthrough-shaped (no `### Step N` sections)
- Create Angular frontend capsule: Manifest lists Create Angular frontend capsule but `docs/guides/angular.md` has no `### Step N` walkthrough — restore walkthrough doc or remove from DOCUMENTED_FEATURES.MD.
- Create React frontend capsule: Step 4: Guide step topic (new capsule) does not match executor evidence (quick start)
- Create React frontend capsule: Step 4: Guide: Create New Capsule; executor used Quick Start
- Create React frontend capsule: Step 5: Guide step topic (capsule details) does not match executor evidence (new capsule)
- Create React frontend capsule: Step 6: Guide step topic (hosting) does not match executor evidence (capsule details)
- Create React frontend capsule: Step 7: Guide step topic (plan) does not match executor evidence (hosting)
- Create React frontend capsule: Step 8: Guide step topic (git) does not match executor evidence (plan)
- Create React frontend capsule: Step 9: Guide step topic (build) does not match executor evidence (git)
- Create React frontend capsule: Walkthrough executor recorded 12 numbered steps; guide defines 11 (`### Step N`). Step numbers must match 1:1.
- Create NextJS backend capsule: **Next.js** is not listed on Quick Start; the guide opens **New Capsule** with **Backend** instead.
- Create NextJS backend capsule: Step 7: Guide step topic (git) does not match executor evidence (plan)
- Create NextJS backend capsule: Walkthrough executor recorded 12 numbered steps; guide defines 10 (`### Step N`). Step numbers must match 1:1.
- Create Svelte frontend capsule: **Svelte** is not listed on Quick Start; the guide opens **New Capsule** directly and selects **Frontend**.