# Platform documentation audit (2026-11-20)

**Platform:** https://test-platform.codecapsules.io  
**Feature source:** `cc-site/DOCUMENTED_FEATURES.MD` (after pull: single feature — Create Angular frontend capsule)

## Inventory

| DOCUMENTED_FEATURES | Guide file | Action |
|---|---|---|
| Create Angular frontend capsule (GOAL: building on Deploy → Builds) | `docs/guides/create-angular-frontend-capsule.md` | Replace stale GitBook steps with test-platform flow |
| *(removed from list)* | `create-react-frontend-capsule.md`, `create-java-backend-capsule.md` | Already removed on `main` — no extra doc deletion |

## Acceptance test: Create Angular frontend capsule

| Step | Doc expectation | Result | Notes |
|---|---|---|---|
| 1–3 | Test-platform login (**Create your account** / **Log in**, **Welcome back**) | pass | Matches live labels |
| 4–5 | **Quick Start** → **Angular** **Deploy Now** | pass | Opens `/new/capsule?capsuleType=frontend` |
| 6 | **Capsule Details** — Frontend, team, space | pass (with drift) | Sometimes shows **Backend** until **Frontend** is chosen in **Search/Select a Capsule Type** |
| 7–8 | **Hosting** **Static**, **Plan** **Free** | pass | Screenshots updated |
| 9 | **Git Repository** selection | **blocked** | Dropdown showed **No items found** for audit credentials; cannot click **Create Capsule** |
| 10–12 | **Build & Deploy**, **Create Capsule**, **Deploy** → **Builds** **Building** | **not verified** | Blocked by step 9 |

**functional:** fail (goal not reached — no build started)  
**doc_fidelity (main before PR):** fail (GitBook/marketing steps; no test-platform path to **Deploy → Builds**)

## Doc drift vs previous `main` guide

| Doc claim (main) | Screen (test-platform) |
|---|---|
| **Sign Up** on www.codecapsules.io | **Create your account** + **Log in** on test-platform |
| Yellow `+` / **Spaces** tab flow | **Quick Start** → **Angular** **Deploy Now** |
| Long GitBook fork/setup narrative | Wizard: **Capsule Details** → **Hosting** → **Plan** → **Git** → **Build & Deploy** |

## Issues flagged (product / environment — not fixed in code)

1. **Git Repository empty:** Audit account could not list repositories; goal “building in builds tab” could not be exercised end-to-end.
2. **Choose a Capsule default:** Quick Start Angular path occasionally displayed **Backend** copy until **Frontend** was reselected.

## PR

Branch `docs/cron-platform-audit-2026-11-20`: rewritten Angular guide, refreshed screenshots through Git step, this report.