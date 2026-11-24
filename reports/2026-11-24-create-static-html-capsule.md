# Create Static HTML capsule — platform audit

- **Run:** 2026-11-24T07:06:55Z
- **Environment:** https://test-platform.codecapsules.io
- **Guide:** No how-to on `main`
- **Manifest goal reached:** no

## Actions taken

1. **fail** — Log in and open **Quick Start**. _Actual:_ Account verification wall. ([failure-step-1.jpg](/img/guides/create-static-html-capsule/failure-step-1.jpg))
2. **blocked** — **Deploy Now** on Static HTML card. _Depends on:_ action 1.
3. **blocked** — Goal on **Deploy → Builds**. _Depends on:_ action 1.

## Guide alignment

| # | Status | Guide expects | Observed | Screenshot |
|---|--------|---------------|----------|------------|
| 1 | fail | Logged-in Quick Start | Verify your email | [failure-step-1.jpg](/img/guides/create-static-html-capsule/failure-step-1.jpg) |
| 2 | blocked | Static HTML deploy | Not attempted | — |
| 3 | blocked | Build in progress | Not attempted | — |

## Mismatches / issues

- Missing Static HTML how-to on `main`.
- Cannot confirm Quick Start card labels without login.

## Suggested fixes

- Add Static HTML how-to (parallel Angular/React structure).
- Provide verified automation credentials.