# Walkthrough report (missing guide): What Is Code Capsules? PaaS Overview

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/what-is-code-capsules.md` does not exist on disk)
- **Feature**: What Is Code Capsules? PaaS Overview
- **Goal**: Expect to know the platform's key features
- **Target**: https://test-platform.codecapsules.io
- **Format check**: not run (no guide)
- **Manifest goals reached**: not attempted (no guide to follow)

## Exploration

Headless Playwright sign-in at `https://test-platform.codecapsules.io` (via **Log in** from `/auth/registration`; direct `/auth/login` loads the registration view). Credential values from env vars only; not recorded. UI labels confirmed against existing published guides and the angular walkthrough in this run. No step-by-step walkthrough was run because no guide file exists on disk.

## Actions taken

None. WALKTHROUGH.md requires reading the guide before browser actions; there is no guide file for this feature.

## Guide alignment

Not applicable.

## Mismatches / issues

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/what-is-code-capsules.md` in the docs repo.

## Tickets

### what-is-code-capsules-wt-1

- **ID**: what-is-code-capsules-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/what-is-code-capsules.md` for What Is Code Capsules? PaaS Overview.
- **Problem**: The feature is listed with goal: Expect to know the platform's key features. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/what-is-code-capsules.md`
  - **Proposed slug**: `/platform/what-is-code-capsules`
  - **Doc type**: Explanation
  - **Goal**: Expect to know the platform's key features
  - **Outline**:
  - Slug `/platform/what-is-code-capsules`.
  - Cover Git deploy, capsule types, scaling, regions, observability, teams.
  - CTA links to create account and first deploy guides in `/docs/shared`.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
