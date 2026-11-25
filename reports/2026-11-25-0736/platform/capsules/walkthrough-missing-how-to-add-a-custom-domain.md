# Walkthrough report (missing guide): Add a Custom Domain to a Capsule

- **Run**: 2026-11-25-0736
- **Guide**: (none — `docs/platform/capsules/how-to-add-a-custom-domain.md` does not exist on disk)
- **Feature**: Add a Custom Domain to a Capsule
- **Goal**: Expect to see the custom domain and subdomain listed on the capsule
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

- Documented in `DOCUMENTED_FEATURES.MD` but no `docs/platform/capsules/how-to-add-a-custom-domain.md` in the docs repo.

## Tickets

### how-to-add-a-custom-domain-wt-1

- **ID**: how-to-add-a-custom-domain-wt-1
- **Type**: New guide
- **Title**: Create `docs/platform/capsules/how-to-add-a-custom-domain.md` for Add a Custom Domain to a Capsule.
- **Problem**: The feature is listed with goal: Expect to see the custom domain and subdomain listed on the capsule. No guide exists; readers cannot reach the goal from docs.
- **Change**:
  - **Proposed path**: `docs/platform/capsules/how-to-add-a-custom-domain.md`
  - **Proposed slug**: `/platform/capsules/how-to-add-a-custom-domain`
  - **Doc type**: How-to
  - **Goal**: Expect to see the custom domain and subdomain listed on the capsule
  - **Outline**:
  - Capsule **Routing** or **Domains**: add custom domain.
  - DNS CNAME/A records; verify domain; default `*.codecapsules.space` subdomain listed.
- **Done when**: The file is published, passes a future format check, and a walkthrough run reaches the feature goal or documents any remaining site mismatches.
