# Walkthrough: static-html

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/frontend/static-html.md`
- **Feature:** Create Static HTML capsule
- **Goal:** Capsule building in **Builds**
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** existing `demo-html` (create flow blocked at repo step)
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — session; existing `demo-html` from prior fork deploy.
2.–5. Wizard through **Frontend** → **Static** → **Free** (pass).
6. **Configure:** `codecapsules-io/demo-html` not in dropdown (`BrentonJScott/demo-html` listed). [failure-step-5.jpg](./failure-step-5.jpg).
7. **(blocked)** Empty build command, path `/`, **Build & Deploy**.
8. Opened `demo-html` **Builds** tab: capsule **Stopped**; *There are no builds currently available* (not in progress as guide states after deploy).

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Session + existing capsule |
| 2 | pass | Open wizard | Pass |
| 3 | pass | **Frontend Capsule**, team, space | **Frontend** |
| 4 | pass | **Static** | Pass |
| 5 | pass | **Free** | Pass |
| 6 | fail | `codecapsules-io/demo-html` | Not listed |
| 7 | blocked | Empty build, path `/` | Not reached |
| 8 | blocked | Build in progress on **Builds** | No active build visible |

## Mismatches / issues

1. **Repository slug** mismatch. [failure-step-5.jpg](./failure-step-5.jpg).
2. **Builds** tab on stopped capsule shows no builds rather than in-progress state.

## Suggested fixes

- Fork path for **Git Repository** step.
- Clarify **Builds** tab vs **Deploy** page **Builds** section.