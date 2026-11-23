# Create svelte frontend capsule — platform audit

- **Run:** 2026-11-23T07:10:00Z
- **Environment:** https://test-platform.codecapsules.io
- **Guide:** _No guide on `main` (exploratory audit)_
- **Manifest goal reached:** no

## Actions taken

1. **fail** — Explore Quick Start for Svelte. _Actual:_ No Svelte card on Quick Start; only Node.js, Python, Angular, React, Vue, AI Agent, WordPress, Go, ... ([failure-step-1.jpg](/img/guides/create-svelte-frontend-capsule/failure-step-1.jpg))

## Guide alignment

| # | Status | Guide expects | Observed | Screenshot |
|---|--------|---------------|----------|------------|
| 1 | fail | Explore Quick Start for Svelte | No Svelte card on Quick Start; only Node.js, Python, Angular, React, Vue, AI Agent, WordPress, Go, ... | [failure-step-1.jpg](/img/guides/create-svelte-frontend-capsule/failure-step-1.jpg) |

## Mismatches / issues

- **Action 1 (fail):** Guide: "Explore Quick Start for Svelte". Platform: No Svelte card on Quick Start; only Node.js, Python, Angular, React, Vue, AI Agent, WordPress, Go, ....

## Suggested fixes

- Add a new guide on `main` under `docs/guides/` covering login, Quick Start **Deploy Now** (or capsule creation entry), capsule details, hosting/plan, Git connect, build settings, and confirming **Deploy → Builds** shows an in-progress build.
- Add a Quick Start card or documented path for Svelte, or document using **Frontend** capsule + generic Git flow if Svelte stays unsupported on Quick Start.