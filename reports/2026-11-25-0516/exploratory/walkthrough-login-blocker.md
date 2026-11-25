# Walkthrough authentication note

- **Run timestamp:** 2026-11-25-0516
- **Status:** Resolved for this environment

## Resolution

Test-platform login uses the **`EMAIL`** and **`PASSWORD`** environment variables (injected secrets on the Cloud Agent). Headless Playwright signs in at `/auth/login` (via the **Log in** link when redirected from registration).

## Walkthroughs run with credentials

| Guide | Report | Goal reached |
|-------|--------|--------------|
| `docs/frontend/angular.md` | [walkthrough-angular.md](../frontend/walkthrough-angular.md) | no |
| `docs/frontend/vue.md` | [walkthrough-vue.md](../frontend/walkthrough-vue.md) | no |

Other how-to guides on this run remain **not run** (scope limited to republished frontend guides on `main`).