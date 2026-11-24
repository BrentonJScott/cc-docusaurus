# Walkthrough: svelte

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/frontend/svelte.md`
- **Feature:** Create Svelte frontend capsule
- **Goal:** Capsule building in **Builds**
- **Environment:** https://test-platform.codecapsules.io
- **Space:** Document Drift
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — session, **Document Drift**.
2.–5. Wizard: **New Capsule** → **Frontend** → **Static** → **Free** (pass).
6. **Configure:** `codecapsules-io/demo-svelte` not in **Git Repository** (`BrentonJScott/demo-svelte` available). [failure-step-5.jpg](./failure-step-5.jpg).
7.–8. **(blocked)** Deploy (`public` output) and **Builds** verification — no Svelte capsule in space.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Session + space |
| 2 | pass | Open wizard | Pass |
| 3 | pass | **Frontend Capsule**, team, space | **Frontend** |
| 4 | pass | **Static** | Pass |
| 5 | pass | **Free** | Pass |
| 6 | fail | `codecapsules-io/demo-svelte` | Not listed |
| 7 | blocked | Build settings | Not reached |
| 8 | blocked | Build in progress | Not reached |

## Mismatches / issues

1. **Repository slug** — org path in guide vs fork path in dropdown. [failure-step-5.jpg](./failure-step-5.jpg).

## Suggested fixes

- Document selecting the team fork (e.g. `your-user/demo-svelte`) instead of `codecapsules-io/demo-svelte`.