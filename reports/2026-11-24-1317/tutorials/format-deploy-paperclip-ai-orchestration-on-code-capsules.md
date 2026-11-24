# Format report — deploy-paperclip-ai-orchestration-on-code-capsules

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md`
- **Doc type:** tutorial
- **Template:** tutorial_format.md
- **Feature:** Deploy Paperclip on Code Capsules
- **Goal:** Expect to see capsule building in builds tab
- **Format check:** fail

## Content list

1. (`build`) under `Step 7 — Create the Docker Capsule` — 1. **Bind the Database Capsule** — Code Capsules injects `DATABASE_URL` automatically.
2. (`build`) under `Step 7 — Create the Docker Capsule` — 2. **Bind the Persistent Storage Capsule** — Code Capsules injects `PERSISTENT_STORAGE_DIR` automatically.

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | pass | OK |

## Tickets

### deploy-paperclip-ai-orchestration-on-code-capsules-1
- **Type:** Remove content
- **Title:** Remove ## Next steps
- **Problem:** Doc has forbidden section `## Next steps`.
- **Rule:** tutorial_format.md, sections
- **Change:** Remove `## Next steps` and relocate content per template.
- **Done when:** Section absent.

### deploy-paperclip-ai-orchestration-on-code-capsules-2
- **Type:** Format fix
- **Title:** Add checkpoint to Part 1
- **Problem:** Part 1 has no ### Checkpoint.
- **Rule:** tutorial_format.md
- **Change:** Add checkpoint describing what reader sees.
- **Done when:** Every part ends with checkpoint.

## Proposed outline

(Rewrite `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md` to match tutorial_format.md — see tickets above.)
