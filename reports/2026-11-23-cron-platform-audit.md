# Cron platform audit (2026-11-23)

**Run completed:** 2026-11-23T06:36:28.429Z
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
**Guide steps in doc:** 6

### Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| 1 | pass | Sign in to GitHub, and fork the example application from the Code Capsules GitHub repository (demo-angular). | Fork control visible on github.com/codecapsules-io/demo-angular |
| 2 | fail | Navigate to the Code Capsules site and click **Sign Up** in the top right corner, or log in to an existing account. | No Sign Up control on production homepage |
| 3 | fail | On first login click **Go To Personal Team**, or when signing in again click the **Spaces** tab. | Production login flow not exercised in audit (guide targets www.codecapsules.io, not test-platform); Spaces / Go To Pers |
| 4 | fail | Navigate to the **Spaces** tab, click the yellow `+` icon, follow prompts, and click **Create Space**. | test-platform sidebar has **Spaces** (https://test-platform.codecapsules.io/dash/overview/quick-start) but guide’s yello |
| 5 | pass | In a Space, click the yellow `+`, choose **Frontend Capsule**, team, plan, GitHub repo, build command `npm run build`, o | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend — New Capsule wizard present (guide’s numbered li |
| 6 | fail | While the build is in progress, view progress; on **Deploy** tab under **Builds** confirm build activity. | Builds tab not reached — prior guide steps target production / legacy UI, not a completed test-platform deploy |

### Executor step results

| Step | Pass | Detail |
|---|---|---|
| 1 Fork demo-angular on GitHub | pass | Fork control visible on github.com/codecapsules-io/demo-angular |
| 2 Create or sign in at codecapsules.io | fail | No Sign Up control on production homepage |
| 3 Go To Personal Team or Spaces tab | fail | Production login flow not exercised in audit (guide targets www.codecapsules.io, not test-platform); Spaces / Go To Personal Team not verified. |
| 4 Create a Space (yellow + on Spaces) | fail | test-platform sidebar has **Spaces** (https://test-platform.codecapsules.io/dash/overview/quick-start) but guide’s yellow + on Spaces layout does not match current UI |
| 5 Create Frontend Capsule (wizard list) | pass | https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend — New Capsule wizard present (guide’s numbered list differs from current wizard steps) |
| 6 View build on Deploy → Builds | fail | Builds tab not reached — prior guide steps target production / legacy UI, not a completed test-platform deploy |

Walkthrough JSON: `reports/2026-11-23-create-angular-frontend-capsule.json`

## Create React frontend capsule

**Goal reached:** no
**Guide steps in doc:** 11

### Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| 1 | pass | Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your accoun | https://test-platform.codecapsules.io/auth/registration |
| 2 | pass | On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. | Login form visible |
| 3 | pass | Click **Log in**. | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 | fail | On the dashboard, click **Create New Capsule** and pick **React**. You should reach **New Capsule** at `/new/capsule?cap | https://test-platform.codecapsules.io/dash/overview/quick-start — no control labeled **Create New Capsule** on the dashb |
| 5 | fail | On **Capsule Details**: | No executor action for this guide step number |
| 6 | fail | On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation | No executor action for this guide step number |
| 7 | fail | On **Plan**, select the **Starter** plan card, then **Next**. | No executor action for this guide step number |
| 8 | fail | On **Connect a Git Repository**: | No executor action for this guide step number |
| 9 | fail | On **Build & Deploy**, fill the fields that use placeholder examples on the live form: | No executor action for this guide step number |
| 10 | fail | Click **Create Capsule**. | No executor action for this guide step number |
| 11 | fail | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | No executor action for this guide step number |

### Executor step results

| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Create New Capsule + React | fail | https://test-platform.codecapsules.io/dash/overview/quick-start — no control labeled **Create New Capsule** on the dashboard |

Walkthrough JSON: `reports/2026-11-23-create-react-frontend-capsule.json`

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

Walkthrough JSON: `reports/2026-11-23-create-vue-frontend-capsule.json`

## Create NextJS backend capsule

**Goal reached:** yes
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
| 7 | pass | On **Connect a Git Repository**: | Repository: BrentonJScott/demo-nextjs Team Repository; branch: main |
| 8 | pass | On **Build & Deploy**, set **Start Command** to `npm start`. Adjust **Capsule Name** if needed. | Start Command: npm start |
| 9 | pass | Click **Create Capsule**. | Ready to submit wizard |
| 10 | pass | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | Building state visible |

### Executor step results

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

Walkthrough JSON: `reports/2026-11-23-create-nextjs-backend-capsule.json`

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

Walkthrough JSON: `reports/2026-11-23-create-static-html-capsule.json`

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

Walkthrough JSON: `reports/2026-11-23-create-svelte-frontend-capsule.json`

## Mismatches / issues

- Create Angular frontend capsule: Guide targets www.codecapsules.io and legacy GitBook steps (Fork, Spaces yellow +, Frontend Capsule list); manifest GOAL and other framework guides use https://test-platform.codecapsules.io with `### Step` walkthroughs.
- Create Angular frontend capsule: Manifest lists **Create Angular frontend capsule** with GOAL “building in builds tab” on test platform; angular.md does not describe test-platform login or Quick Start / New Capsule flows.
- Create Angular frontend capsule: Action 2: Guide says “Navigate to the Code Capsules site and click **Sign Up** in the top right corner, or log in to an ex…” — observed: No Sign Up control on production homepage
- Create Angular frontend capsule: Action 3: Guide says “On first login click **Go To Personal Team**, or when signing in again click the **Spaces** tab.…” — observed: Production login flow not exercised in audit (guide targets www.codecapsules.io, not test-platform); Spaces / Go To Personal Team not verified.
- Create Angular frontend capsule: Action 4: Guide says “Navigate to the **Spaces** tab, click the yellow `+` icon, follow prompts, and click **Create Space*…” — observed: test-platform sidebar has **Spaces** (https://test-platform.codecapsules.io/dash/overview/quick-start) but guide’s yellow + on Spaces layout does not match current UI
- Create Angular frontend capsule: Action 6: Guide says “While the build is in progress, view progress; on **Deploy** tab under **Builds** confirm build acti…” — observed: Builds tab not reached — prior guide steps target production / legacy UI, not a completed test-platform deploy
- Create React frontend capsule: Guide step 4: click **Create New Capsule** and pick **React**; the live dashboard has no **Create New Capsule** control (sidebar **+** offers **New Capsule**; **Quick Start** lists React **Deploy Now** instead).
- Create React frontend capsule: Walkthrough executor recorded 4 numbered steps; guide defines 11 (`### Step N`). Step numbers must match 1:1.
- Create NextJS backend capsule: **Next.js** is not listed on Quick Start; the guide opens **New Capsule** with **Backend** instead.
- Create NextJS backend capsule: Guide step 7 is **Connect a Git Repository** immediately after **Capsule Details**; live wizard inserted a **Plan** / **Configure Plan** step first.
- Create Svelte frontend capsule: **Svelte** is not listed on Quick Start; the guide opens **New Capsule** directly and selects **Frontend**.

## Actions taken

Per-feature numbered actions are in each `reports/2026-11-23-create-*-capsule.md` file.

## Suggested fixes

See **Suggested fixes** in each feature report. Priority: Angular walkthrough gap; React step 4 entry path; Next.js Plan step in the guide.
