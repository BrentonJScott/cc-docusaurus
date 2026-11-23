# Exploratory — Create NextJS backend capsule

- **Run:** 2026-11-23T09:11:10Z
- **Target:** https://test-platform.codecapsules.io
- **Guide on main:** no
- **Goal reached:** no

## Actions

1. Logged in to **Quick Start**.
2. Used **Node.js** card as closest manifest match for a Next.js backend (no Next.js-labeled card).
3. Clicked **Deploy Now** on **Node.js**.
4. Looked for backend capsule flow toward **Builds** (no guide on `main`).

## Findings

| Step | Status | Notes |
|------|--------|-------|
| Framework entry | pass | **Node.js** Quick Start card present |
| Next.js-specific steps | fail | No Next.js card or doc; wizard opens backend type as expected for Node |
| Connect `demo-nextjs` | not fully tested | Repo `BrentonJScott/demo-nextjs Team Repository` visible in team repo list during Angular exploratory |
| Builds goal | fail | No guide; flow not completed in this run |

## Suggested new guide

Add `docs/guides/nextjs.md` for backend capsule: Quick Start **Node.js** or dedicated Next.js card if product adds one; **Backend** type; team repo `demo-nextjs`; build/start commands for Next.js; goal on **Deploy → Builds**.

Screenshot: `failure-step-1.jpg` (Quick Start, Node.js entry).