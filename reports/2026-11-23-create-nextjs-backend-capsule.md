# Create NextJS backend capsule walkthrough (2026-11-23)

**Platform:** https://test-platform.codecapsules.io
**Manifest goal:** Expect to see capsule building in builds tab
**Guide:** `docs/guides/next.js.md` — **not on main**
**Run completed:** 2026-11-23T07:00:13.290Z
**Goal reached:** yes (exploratory only; no guide to align)

## Actions taken (exploratory; no guide on disk)

1. Open platform — pass: https://test-platform.codecapsules.io/auth/registration
2. Welcome back login form — pass: Login form visible
3. Log in — pass: https://test-platform.codecapsules.io/dash/overview/quick-start
4. Quick Start — pass: https://test-platform.codecapsules.io/dash/overview/quick-start
5. New Backend Capsule wizard — pass: https://test-platform.codecapsules.io/new/capsule?capsuleType=backend
6. Capsule Details — pass: Team: Personal Team; space: Personal Space  personal-space-ivbk
7. Configure Plan — pass: Plan selected
8. Plan confirmed — pass: Continuing to Git step
9. Connect a Git Repository — pass: Repository: BrentonJScott/demo-nextjs Team Repository; branch: main
10. Build & Deploy fields — pass: Run command left blank (platform auto-detect)
11. Create Capsule — pass: Ready to submit wizard
12. Deploy Builds — pass: Building state visible

## Guide alignment

| Step | Pass | guideExpects | actual |
|---|---|---|---|
| — | fail | (no guide file) | Exploratory executor only |

## Mismatches / issues

- **Next.js** is not listed on Quick Start; the guide opens **New Capsule** with **Backend** instead.
- Guide missing: docs/guides/next.js.md
- No published walkthrough guide — add docs/guides/next.js.md modeled on docs/guides/react.md.

## Suggested fixes

- Restore or author `docs/guides/next.js.md` with `### Step N` sections for test-platform.codecapsules.io, matching the exploratory flow recorded above.
- Keep feature listed in `cc-site/DOCUMENTED_FEATURES.MD` once the guide exists.