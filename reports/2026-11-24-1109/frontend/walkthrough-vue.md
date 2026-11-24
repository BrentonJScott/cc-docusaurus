# Walkthrough: vue

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/frontend/vue.md`
- **Feature:** Create Vue frontend capsule
- **Goal:** Capsule building in **Builds**
- **Environment:** https://test-platform.codecapsules.io
- **Space:** Document Drift
- **Capsule:** existing `demo-vue` (post-wizard steps blocked on create)
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — session, **Document Drift**.
2.–5. Same wizard path as other static frontend guides: **Frontend** → **Static** → **Free** (pass).
6. **Configure:** `codecapsules-io/demo-vue` not in **Git Repository** dropdown (`BrentonJScott/demo-vue` listed). Screenshot: [failure-step-5.jpg](./failure-step-5.jpg).
7.–8. **(blocked)** Deploy and **Builds** check. Opened existing `demo-vue` **Builds** tab: capsule **Stopped**, *There are no builds currently available.*

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Session + space |
| 2 | pass | Open wizard | Pass |
| 3 | pass | **Frontend Capsule**, team, space | **Frontend** |
| 4 | pass | **Static** | Pass |
| 5 | pass | **Free** | Pass |
| 6 | fail | `codecapsules-io/demo-vue` | Slug not in dropdown |
| 7 | blocked | `npm run build`, path `dist` | Not reached |
| 8 | blocked | Build in progress | Not reached; existing **Builds** empty |

## Mismatches / issues

1. **Repository slug** mismatch (org vs fork path). [failure-step-5.jpg](./failure-step-5.jpg).
2. **Frontend Capsule** vs **Frontend** label.

## Suggested fixes

- Use fork path examples in the **Configure** step.
- Note **Builds** tab when capsule is stopped may show no rows.