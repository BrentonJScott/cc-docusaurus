# Cron platform audit — 2026-11-23

Run timestamp: **2026-11-23T09:11:10Z**  
Target: **https://test-platform.codecapsules.io**  
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (6 features)

## Manifest goals reached

| Feature | Guide on main | Format check | Walkthrough | Goal reached |
|---------|---------------|--------------|-------------|--------------|
| Create Angular frontend capsule | yes | pass | run | **no** |
| Create React frontend capsule | yes | pass | run | **no** |
| Create Vue frontend capsule | no | n/a | exploratory | **no** |
| Create NextJS backend capsule | no | n/a | exploratory | **no** |
| Create Static HTML capsule | no | n/a | exploratory | **no** |
| Create Svelte frontend capsule | no | n/a | exploratory | **no** |

**Manifest goals reached (all features): no**

## Cross-cutting findings

1. After login, the dashboard is **Quick Start** with framework cards and **Deploy Now**; the React guide still describes **Create New Capsule**.
2. **Deploy Now** on Angular, React, Vue, and Static HTML opens `…/new/capsule?capsuleType=backend` while frontend guides require **Frontend** on Capsule Details.
3. Plan step on the test platform lists **Free** only; the React guide requires **Starter**.
4. Connected repos use default branch **main**; guides specify **master**.
5. Prerequisites reference fork **demo-angular**; the team repo list shows **demo-angular-22** instead of a repo named `demo-angular`.
6. **Svelte** has no Quick Start card; **demo-svelte** exists only as a Git repository option elsewhere.

## Format reports

- [2026-11-23-format-create-angular-frontend-capsule.md](./2026-11-23-format-create-angular-frontend-capsule.md)
- [2026-11-23-format-create-react-frontend-capsule.md](./2026-11-23-format-create-react-frontend-capsule.md)

## Walkthrough / exploratory reports

- [2026-11-23-create-angular-frontend-capsule.md](./2026-11-23-create-angular-frontend-capsule.md)
- [2026-11-23-create-react-frontend-capsule.md](./2026-11-23-create-react-frontend-capsule.md)
- [2026-11-23-create-vue-frontend-capsule.md](./2026-11-23-create-vue-frontend-capsule.md)
- [2026-11-23-create-nextjs-backend-capsule.md](./2026-11-23-create-nextjs-backend-capsule.md)
- [2026-11-23-create-static-html-capsule.md](./2026-11-23-create-static-html-capsule.md)
- [2026-11-23-create-svelte-frontend-capsule.md](./2026-11-23-create-svelte-frontend-capsule.md)