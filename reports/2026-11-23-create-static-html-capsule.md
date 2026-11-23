# Exploratory — Create Static HTML capsule

- **Run:** 2026-11-23T09:11:10Z
- **Target:** https://test-platform.codecapsules.io
- **Guide on main:** no
- **Goal reached:** no

## Actions

1. Logged in; confirmed **Static HTML** on **Quick Start**.
2. Clicked **Deploy Now** on **Static HTML**.
3. Attempted frontend static hosting path toward **Builds** (no guide).

## Findings

| Step | Status | Notes |
|------|--------|-------|
| **Static HTML** card | pass | Visible with **Deploy Now** |
| Wizard type | fail | **Deploy Now** opens `capsuleType=backend` URL (same cross-cutting issue as other Quick Start cards) |
| `demo-html` repo | not tested to goal | `BrentonJScott/demo-html Team Repository` appears in repo dropdown during other walkthroughs |
| Builds goal | fail | No guide on `main`; deployment not finished |

## Suggested new guide

Add `docs/guides/static-html.md`: Quick Start **Static HTML** → **Frontend** / static hosting steps → `demo-html` → **Builds** goal.

Screenshot: `failure-step-1.jpg`.