# Cron platform audit — 2026-11-23

Run timestamp: **2026-11-23T07:10:00Z**
Target: **https://test-platform.codecapsules.io**
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (6 features)

## Manifest goals reached

| Feature | Guide on main | Goal reached |
|---------|---------------|--------------|
| Create React frontend capsule | yes | **no** |
| Create Angular frontend capsule | yes | **no** |
| Create Vue frontend capsule | no | **no** |
| Create NextJS backend capsule | no | **no** |
| Create Static HTML capsule | no | **no** |
| Create Svelte frontend capsule | no | **no** |

**Manifest goals reached (all features): no** — every feature had at least one failed or blocked action, or exploratory entry failed (Svelte).

## Cross-cutting findings

1. Dashboard entry is **Quick Start** framework cards with **Deploy Now**, not **Create New Capsule** + framework picker (React guide step 4).
2. Plan step shows **Free** on the test platform; React guide specifies **Starter**.
3. Branch selector lists **main** with surrounding whitespace; guides that require **master** fail when that option is absent.
4. Legacy Angular guide targets production signup/fork flows; test-platform uses a multi-step capsule wizard.
5. No guides on `main` for Vue, Next.js, Static HTML, or Svelte; Svelte has no Quick Start card.

## Per-feature reports

- [2026-11-23-create-react-frontend-capsule.md](./2026-11-23-create-react-frontend-capsule.md)
- [2026-11-23-create-angular-frontend-capsule.md](./2026-11-23-create-angular-frontend-capsule.md)
- [2026-11-23-create-vue-frontend-capsule.md](./2026-11-23-create-vue-frontend-capsule.md)
- [2026-11-23-create-nextjs-backend-capsule.md](./2026-11-23-create-nextjs-backend-capsule.md)
- [2026-11-23-create-static-html-capsule.md](./2026-11-23-create-static-html-capsule.md)
- [2026-11-23-create-svelte-frontend-capsule.md](./2026-11-23-create-svelte-frontend-capsule.md)