# Walkthrough: go

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/backend/go/go.md`
- **Feature:** Create Go backend capsule
- **Goal:** Capsule building in **Builds**
- **Environment:** https://test-platform.codecapsules.io
- **Space:** Document Drift
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, fork `codecapsules-io/go-demo`, space, GitHub) — used logged-in session and space **Document Drift**; fork presence not verified on GitHub during this run.
2. Open **Document Drift** → **+** → **New Capsule** (wizard with team/space query params for the same space).
3. On **Capsule Details**, select **Backend**, **Personal Team**, **Document Drift** → **Next**.
4. On plan step (**Configure Plan**), select **Basic** → **Next**.
5. On **Connect a Git Repository** (`/new/capsule/backend/repo`), open **Search/Select a Repository** and search `go-demo` — no matching repository; team **Repos** also lists no `go-demo`. Screenshot: [failure-step-4.jpg](./failure-step-4.jpg).
6. **(blocked)** Leave **Run Command** blank on deploy — depends on step 5.
7. **(blocked)** **Create Capsule** and **Builds** in progress — no `go-demo` capsule in **Document Drift** to substitute.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Account, fork, space, GitHub | Active session and **Document Drift** |
| 2 | pass | **+** in Space | Wizard opened for the space |
| 3 | pass | **Backend Capsule**, team, space | Type **Backend** (description mentions Go); team and space prefilled |
| 4 | pass | **Plan**, **Basic** | **Basic** ($8.75) available; step titled **Configure Plan** |
| 5 | fail | **Source Code**, `go-demo` fork, `main` | **Git Repository** dropdown has no `go-demo` / `codecapsules-io/go-demo` entry |
| 6 | blocked | Blank **Run Command** on **Build and Deploy Settings** | Not reached |
| 7 | blocked | **Create Capsule** → **Builds** shows build in progress | Not reached |

## Mismatches / issues

1. **Missing repository:** Guide requires a `go-demo` fork in **Repository**; connected GitHub repos on test-platform include many `BrentonJScott/demo-*` entries but no `go-demo`. See [failure-step-4.jpg](./failure-step-4.jpg).
2. **Step naming:** Guide **Source Code** / **Repository** maps to wizard **Connect a Git Repository** and **Search/Select a Repository** (`/new/capsule/backend/repo`).
3. **Capsule type label:** Guide says **Backend Capsule**; wizard option is **Backend**.
4. **Plan heading:** Guide **Plan** step appears as **Configure Plan** in the UI.

## Suggested fixes

- Prerequisites: state that `go-demo` must be forked **and** added to the Code Capsules GitHub app (troubleshooting already covers access; document fork slug, e.g. `your-user/go-demo`, not `codecapsules-io/go-demo`).
- Align wizard labels: **Connect a Git Repository** / **Git Repository** instead of **Source Code**; **Deploy** for run command and create actions.
- Use **Backend** as the wizard type label, or note it explicitly alongside **Backend Capsule**.