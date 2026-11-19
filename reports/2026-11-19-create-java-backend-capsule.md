# Audit: create-java-backend-capsule (2026-11-19)

**Platform:** https://test-platform.codecapsules.io

## Summary

| Guide | feature_functional | doc_fidelity | doc_completeness |
|---|---|---|---|
| create-java-backend-capsule | pass | drift (step 6 prose, pre-PR) | pass |

## Step execution

| step_id | doc_quote | action_taken | visible_evidence | result |
|---|---|---|---|---|
| 1 | Open test-platform; **Log in** | `goto` platform root | Create your account, Log in | pass |
| 2 | **Welcome back** / **Email** | **Log in** link | Email textbox | pass |
| 3 | **Password** | observe form | Password textbox | pass |
| 4 | **Log in** | submit | `/dash/overview/quick-start` | pass |
| 5 | **Capsules** sidebar | click **Capsules** | `/dash/overview/capsules` | pass |
| 6 | **+** → **New Capsule** | click list-header **+** (`add-btn me-3`) | 2 visible **+** links; wizard opens at `/new/capsule` | pass |
| 7 | **Backend** in **Choose a Capsule** | open combobox, select **Backend** | “Node, Java, Go or Python deployments” | pass |
| 8 | **Choose a Team** / **Next** | observe team field (no deploy submit) | Search/Select a team, **Next** | pass |

## Doc fidelity

| step_id | fidelity |
|---|---|
| 1–5 | pass |
| 6 | drift (ambiguous **+** before PR) |
| 7–8 | pass |

## Mismatches

- Doc: “Click the **+** control” → Screen: two **+** links (sidebar vs list header).

## Flags

- **Ambiguous controls:** two **+** links on Capsules (fixed in PR prose).
- **Screenshot drift:** `step-4-capsules-plus.png` and `step-5-backend-wizard.png` updated from this run.

## PR

`docs/audit-2026-11-19-java-drift` — clarify header **+** control; refresh step 6–7 screenshots.