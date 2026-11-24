# Walkthrough: next.js

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/frontend/next.js.md`
- **Feature:** Create NextJS frontend capsule
- **Goal:** Capsule building in **Builds**
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** existing `demo-nextjs` (backend-type deploy in space)
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — session, **Document Drift**.
2. Open wizard → select **Backend** (guide: **Backend Capsule**) → **Next**.
3. **(fail)** **Plan:** guide says **Free**; wizard shows **Basic**, **Standard**, **Premium**, **Custom** only (no **Free**).
4. Did not continue to **Configure** with exact **Free** selection per guide.
5. **(blocked)** Select `codecapsules-io/demo-nextjs` — depends on plan step per guide order.
6. **(blocked)** Empty **Run Command**, **Build & Deploy**.
7. Opened existing `demo-nextjs` **Builds** tab: **Stopped**, no builds listed.

## Guide alignment

| Action | Status | Guide expects | What happened |
|--------|--------|---------------|---------------|
| 1 | not testable | Prerequisites | Session + space |
| 2 | pass | **Backend Capsule**, team, space | **Backend** type; team/space prefilled |
| 3 | fail | **Free** plan | No **Free** option on backend plan step |
| 4 | blocked | `codecapsules-io/demo-nextjs`, `main` | Not attempted (prior fail) |
| 5 | blocked | Empty **Run Command**, deploy | Not reached |
| 6 | blocked | Build in progress on **Builds** | Not reached |

## Mismatches / issues

1. **Free plan:** Guide step 3 selects **Free**; backend capsule wizard on test-platform offers paid tiers only.
2. **Repository slug:** Same `codecapsules-io/*` vs fork naming issue as static frontend guides (observed on frontend configure step). [failure-step-5.jpg](./failure-step-5.jpg) (shared repo dropdown pattern).

## Suggested fixes

- Replace **Free** with an available backend plan (e.g. **Basic**) or document that Next.js backend deploy requires a paid plan on current product.
- Document fork repository naming in **Configure**.