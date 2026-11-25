# Walkthrough report (missing guide): Hosting Environments (Containers) Explained

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/capsules/what-is-a-capsule.md` does not exist on disk)
- **Feature**: Hosting Environments (Containers) Explained
- **Goal**: Expect to know each capsule type
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/capsules/what-is-a-capsule.md` in the docs repo.

## Tickets

### what-is-a-capsule-wt-1

- **ID**: what-is-a-capsule-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/capsules/what-is-a-capsule.md` for Hosting Environments (Containers) Explained.
- **Problem**: The feature is listed with goal: Expect to know each capsule type. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/capsules/what-is-a-capsule.md`
  - **Proposed slug**: `/platform/capsules/what-is-a-capsule`
  - **Doc type**: Explanation
  - **Goal**: Expect to know each capsule type
  - **Outline**:
  - Table of Backend, Frontend, Docker, Database, Storage, WordPress, Agent.
  - When to pick each; link to product index pages.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
