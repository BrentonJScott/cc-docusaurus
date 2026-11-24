# Walkthrough: angular

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/frontend/angular.md`
- **Feature:** Create Angular frontend capsule
- **Goal:** Capsule building in **Builds**
- **Environment:** https://test-platform.codecapsules.io
- **Space:** Document Drift
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites (account, fork `codecapsules-io/demo-angular`, space, GitHub) — used logged-in session and space **Document Drift**; fork not verified on GitHub during this run.
2. Open **Document Drift** → yellow **+** → **New Capsule** wizard.
3. On **Capsule Details**, select **Frontend**, **Personal Team**, **Document Drift** → **Next**.
4. On **Hosting**, select **Static** → **Next**.
5. On **Plan**, select **Free** → **Next**.
6. On **Configure**, open **Git Repository** — search for `codecapsules-io/demo-angular` (not listed; forks such as `BrentonJScott/demo-angular-22` appear instead). Screenshot: [failure-step-5.jpg](./failure-step-5.jpg).
7. **(blocked)** **Deploy** build fields and **Build & Deploy** — depend on step 6.
8. **(blocked)** **Deploy** tab **Builds** — depend on new capsule. Opened existing `demo-angular-22` **Builds** tab: capsule **Stopped**, message *There are no builds currently available.*

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Account, fork, space, GitHub | Existing session and space |
| 2 | pass | **+** → **New Capsule** | Wizard opened |
| 3 | pass | **Frontend Capsule**, team, space | Type shown as **Frontend** (not “Frontend Capsule”); team and space prefilled |
| 4 | pass | **Static** hosting | **Static** available and selected |
| 5 | pass | **Free** plan | **Free** available and selected |
| 6 | fail | **Git Repository** `codecapsules-io/demo-angular`, `main` | No `codecapsules-io/*` entries in repository dropdown |
| 7 | blocked | Build command `npm run build`, path `dist/ng4-complete-guide`, **Build & Deploy** | Not reached |
| 8 | blocked | First build in progress on **Deploy** **Builds** | Not reached; existing capsule shows no builds |

## Mismatches / issues

1. **Repository name:** Guide names `codecapsules-io/demo-angular`; connected accounts see user/team forks only (e.g. `BrentonJScott/demo-angular-22`), not the upstream org slug in the dropdown. See [failure-step-5.jpg](./failure-step-5.jpg).
2. **Capsule type label:** Guide says **Frontend Capsule**; wizard option is **Frontend**.
3. **Builds location:** Guide points to **Deploy** tab **Builds** section; UI also exposes a top-level **Builds** tab.

## Suggested fixes

- State that the repository dropdown shows the connected account’s fork path (e.g. `your-user/demo-angular`) after forking, not `codecapsules-io/demo-angular`.
- Align capsule type wording with wizard label **Frontend**.
- Mention the dedicated **Builds** tab as well as the **Deploy** page **Builds** section.