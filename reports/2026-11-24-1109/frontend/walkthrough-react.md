# Walkthrough: react

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/frontend/react.md`
- **Feature:** Create React frontend capsule
- **Goal:** Capsule building in **Builds**
- **Environment:** https://test-platform.codecapsules.io
- **Space:** Document Drift
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — logged-in session, **Document Drift** space.
2. Open space → yellow **+** → **New Capsule**.
3. **Capsule Details:** **Frontend**, **Personal Team**, **Document Drift** → **Next**.
4. **Hosting:** **Static** → **Next**.
5. **Plan:** **Free** → **Next**.
6. **Configure:** **Git Repository** — `codecapsules-io/demo-react` not in dropdown (`BrentonJScott/demo-react` present). Screenshot: [failure-step-5.jpg](./failure-step-5.jpg).
7. **(blocked)** **Deploy** (`npm run build`, path `build`) → **Build & Deploy**.
8. **(blocked)** Verify build on **Builds** — no new capsule created; no React capsule in space to inspect.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Session + space |
| 2 | pass | Open wizard | Wizard opened |
| 3 | pass | **Frontend Capsule**, team, space | **Frontend** selected |
| 4 | pass | **Static** | Selected |
| 5 | pass | **Free** | Selected |
| 6 | fail | `codecapsules-io/demo-react`, `main` | Org repo slug not listed |
| 7 | blocked | Build settings and deploy | Not reached |
| 8 | blocked | Build in progress on **Builds** | Not reached |

## Mismatches / issues

1. **Repository slug:** Guide requires `codecapsules-io/demo-react`; dropdown lists forks under user/team names only. See [failure-step-5.jpg](./failure-step-5.jpg).
2. **Capsule type label:** **Frontend Capsule** vs wizard **Frontend**.

## Suggested fixes

- Document fork naming in the repository dropdown after GitHub connect.
- Match **Frontend** wizard label in step 2.