# Walkthrough: express.js

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/backend/node.js/express.js.md`
- **Feature:** Create Express.js backend capsule
- **Goal:** Capsule building in **Builds**
- **Environment:** https://test-platform.codecapsules.io
- **Space:** Document Drift
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, fork `demo-express-js`, space **Document Drift**, GitHub) — used logged-in Playwright session; `BrentonJScott/demo-express-js` known from connect-version-control audit; fork on GitHub not re-verified.
2. Open **Document Drift** (`/dash/spaces/document-drift/capsules`) and start **New Capsule** via **+** (also validated wizard at `/new/capsule?…spaceId=334f6faa-ff61-4613-b589-a1a8072791ca`).
3. On **Capsule Details**, select **Backend**, **Personal Team**, **Document Drift** → **Next** (guide: **Backend Capsule**).
4. On **Configure Plan**, select **Basic** → **Next** (guide: **Plan**, **Basic**).
5. On **Connect a Git Repository**, search `demo-express-js`, select **BrentonJScott/demo-express-js**, open **Branch** and choose **master** → **Next** (guide: **Source Code**, `demo-express-js` fork, `master`).
6. **(blocked)** On **Build and Deploy Settings**, leave **Run Command** blank (guide: **Build and Deploy Settings**). Repeated navigation away from wizard prevented reaching **Deploy** / **Create Capsule** reliably during this run.
7. **(blocked)** **Create Capsule** and open **Builds** for first build in progress — no new `demo-express-js` capsule appeared in **Document Drift**; space lists other demo backends (e.g. `demo-java-hffl`) but no Express app.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Account, fork, space, GitHub | Active session; **Document Drift** space |
| 2 | pass | **+** in Space | Wizard opens for **Document Drift** |
| 3 | pass | **Backend Capsule**, team, space | **Backend** type; **Personal Team** and **Document Drift** prefilled |
| 4 | pass | **Plan**, **Basic** | **Basic** ($8.75); step titled **Configure Plan** |
| 5 | pass | `demo-express-js` fork, `master` branch | **BrentonJScott/demo-express-js** in **Git Repository**; **master** listed under **Branch** |
| 6 | blocked | Blank **Run Command** on **Build and Deploy Settings** | **Deploy** step not completed in browser during run |
| 7 | blocked | **Create Capsule** → **Builds** shows build in progress | No Express capsule created in space to inspect |

## Mismatches / issues

1. **Wizard labels:** Guide **Source Code** / **Repository** map to **Connect a Git Repository** and **Search/Select a Repository** (`/new/capsule/backend/repo`).
2. **Repository display name:** Guide names `demo-express-js`; dropdown shows fully qualified fork **BrentonJScott/demo-express-js** (same pattern as other demo backend guides).
3. **Capsule type label:** Guide **Backend Capsule** vs wizard **Backend**.
4. **Deploy step title:** Guide **Build and Deploy Settings** vs wizard breadcrumb **Deploy**.
5. **Run completion:** Could not finish **Create Capsule** and **Builds** goal check in this run (shared Playwright session redirected mid-wizard); no build observed for Express in **Document Drift**.

## Suggested fixes

- Align step 4–6 with wizard copy: **Connect a Git Repository**, **Configure Plan**, **Deploy** (and **Run Command** field on deploy step).
- Note that the connected fork appears as `your-user/demo-express-js` in **Git Repository**, not bare `demo-express-js`.
- Use **Backend** as the wizard type label, or mention it alongside **Backend Capsule**.