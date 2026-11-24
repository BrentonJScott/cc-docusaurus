# Create NextJS backend capsule — platform audit

- **Run:** 2026-11-24T07:06:55Z
- **Environment:** https://test-platform.codecapsules.io
- **Guide:** No how-to on `main` for Next.js backend capsules
- **Guide choice:** None in `DOCUMENTED_FEATURES.MD`; exploratory path assumes Quick Start **Deploy Now** on Next.js (backend) after login
- **Manifest goal reached:** no

## Actions taken

1. **fail** — Log in. _Actual:_ Email verification required; dashboard unreachable. ([failure-step-1.jpg](/img/guides/create-nextjs-backend-capsule/failure-step-1.jpg))
2. **blocked** — Start Next.js backend capsule from Quick Start. _Depends on:_ action 1.
3. **blocked** — Confirm build on **Deploy → Builds**. _Depends on:_ action 1.

## Guide alignment

| # | Status | Guide expects | Observed | Screenshot |
|---|--------|---------------|----------|------------|
| 1 | fail | Authenticated session | Verify your email | [failure-step-1.jpg](/img/guides/create-nextjs-backend-capsule/failure-step-1.jpg) |
| 2 | blocked | Next.js backend deploy flow | Not attempted | — |
| 3 | blocked | Building on **Deploy → Builds** | Not attempted | — |

## Mismatches / issues

- No Next.js backend how-to under `docs/` on `main`.
- Login gate prevents exploring backend capsule cards.

## Suggested fixes

- Add a backend Next.js how-to aligned with the test-platform wizard and manifest goal.
- Bind verified test-platform credentials to the cron environment.