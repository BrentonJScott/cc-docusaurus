# Create React frontend capsule walkthrough (2026-11-23)
**Platform:** https://test-platform.codecapsules.io
**Manifest goal:** Expect to see capsule building in builds tab
**Run completed:** 2026-11-23T06:18:26.293Z
**Goal reached:** no
**Blocked:** Error: https://test-platform.codecapsules.io/dash/overview/quick-start — no control labeled **Create New Capsule** on the dashboard
## Step results
| Step | Pass | Detail |
|---|---|---|
| 1 Open platform | pass | https://test-platform.codecapsules.io/auth/registration |
| 2 Welcome back login form | pass | Login form visible |
| 3 Log in | pass | https://test-platform.codecapsules.io/dash/overview/quick-start |
| 4 Create New Capsule + React | fail | https://test-platform.codecapsules.io/dash/overview/quick-start — no control labeled **Create New Capsule** on the dashboard |
| 0 Run error | fail | Error: https://test-platform.codecapsules.io/dash/overview/quick-start — no control labeled **Create New Capsule** on the dashboard |
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
| 4 | fail | On the dashboard, click **Create New Capsule** and pick **React**. You should reach **New Capsule** at `/new/capsule?cap | https://test-platform.codecapsules.io/dash/overview/quick-start — no control labeled **Create New Capsule** on the dashboard |
| 5 | fail | On **Capsule Details**: | No executor action for this guide step number |
| 6 | fail | On **Hosting**, select the **Static** option card (row that includes **No server**), then click **Next**. If validation | No executor action for this guide step number |
| 7 | fail | On **Plan**, select the **Starter** plan card, then **Next**. | No executor action for this guide step number |
| 8 | fail | On **Connect a Git Repository**: | No executor action for this guide step number |
| 9 | fail | On **Build & Deploy**, fill the fields that use placeholder examples on the live form: | No executor action for this guide step number |
| 10 | fail | Click **Create Capsule**. | No executor action for this guide step number |
| 11 | fail | On the capsule **Deploy** tab, open **Builds**. Confirm the latest build shows **Building**, **Queued**, or **In progres | No executor action for this guide step number |

## Mismatches / issues

- Guide step 4: click **Create New Capsule** and pick **React**; the live dashboard has no **Create New Capsule** control (sidebar **+** offers **New Capsule**; **Quick Start** lists React **Deploy Now** instead).
- Walkthrough executor recorded 4 numbered steps; guide defines 11 (`### Step N`). Step numbers must match 1:1.

## Actions taken

1. Open [https://test-platform.codecapsules.io](https://test-platform.codecapsules.io). If you land on **Create your account**, use the **Log in** link under “Already have an account?”. — **pass** (https://test-platform.codecapsules.io/auth/registration)
2. On **Welcome back**, enter your email in the **Email** textbox and your password in the **Password** textbox. — **pass** (Login form visible)
3. Click **Log in**. — **pass** (https://test-platform.codecapsules.io/dash/overview/quick-start)
4. On the dashboard, click **Create New Capsule** and pick **React**. You should reach **New Capsule** at `/new/capsule?capsuleType=frontend`. — **fail** (https://test-platform.codecapsules.io/dash/overview/quick-start — no control labeled **Create New Capsule** on the dashboard)

## Suggested fixes

- Step 4: Change **Create New Capsule** to the controls that exist on the dashboard today — either open sidebar **Quick Start** and use **Deploy Now** on the React card (as in the Vue guide), or document **+** → **New Capsule** then select **Frontend** and continue.
- Step 7: Confirm whether the audit account should select **Starter** or **Free**; the live **Plan** step showed **Free** during other frontend walks on the same date.
- Step 8: Confirm default branch name (**master** vs **main**) for `BrentonJScott/demo-react Team Repository`.
- Include screenshot `static/img/guides/create-react-frontend-capsule/failure-step-4.jpg` when documenting the missing **Create New Capsule** label.
