# Documentation audit run summary — 2026-11-24-1252

Run timestamp: **2026-11-24T12:52:00Z**
Target: **https://test-platform.codecapsules.io**
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (6 features)

## Manifest goals reached

**Manifest goals reached (all features): no**

| Feature | Guide | Type | Format check | Walkthrough | Goal reached | Format report | Walkthrough report |
|---------|-------|------|--------------|-------------|--------------|---------------|--------------------|
| Create Angular frontend capsule | `docs/frontend/angular.md` | how-to | pass | completed | **no** | [format-angular.md](frontend/format-angular.md) | [walkthrough-angular.md](frontend/walkthrough-angular.md) |
| Create Vue frontend capsule | `docs/frontend/vue.md` | how-to | pass | completed | **no** | [format-vue.md](frontend/format-vue.md) | [walkthrough-vue.md](frontend/walkthrough-vue.md) |
| Create React frontend capsule | `docs/frontend/react.md (missing)` | — | not applicable | completed (docs.bak) | **no** | [format-react.md](frontend/format-react.md) | [walkthrough-react.md](frontend/walkthrough-react.md) |
| Create Svelte frontend capsule | `docs/frontend/svelte.md (missing)` | — | not applicable | completed (docs.bak) | **no** | [format-svelte.md](frontend/format-svelte.md) | [walkthrough-svelte.md](frontend/walkthrough-svelte.md) |
| Create Static HTML capsule | `docs/frontend/static-html.md (missing)` | — | not applicable | completed (docs.bak) | **no** | [format-static-html.md](frontend/format-static-html.md) | [walkthrough-static-html.md](frontend/walkthrough-static-html.md) |
| Create NextJS backend capsule | `docs/frontend/next.js.md (missing)` | — | not applicable | completed (docs.bak) | **no** | [format-nextjs.md](frontend/format-nextjs.md) | [walkthrough-nextjs.md](frontend/walkthrough-nextjs.md) |

## Cross-cutting issues

- Repo owner: guides say `codecapsules-io/demo-*`; the dropdown lists only BrentonJScott/* and LeeKnowles02/* repos (no codecapsules-io). Angular has no `demo-angular` repo at all, only BrentonJScott/demo-angular-22. Used BrentonJScott/demo-* (demo-angular-22 for Angular) as best effort - Configure action fails for all 6.
- "Git Repository": the label does exist ("Git Repository", placeholder "Search/Select a Repository", under heading "Connect a Git Repository", with an "or Configure Git for Code Capsules" link). The branch field is labelled "Branch" ("Select a Branch to deploy from"). An extra "Repo subpath" field (default /) is not mentioned in the guides.
- Yellow +: exists bottom-left (a.add-btn, yellow rgb(239,214,83)); click shows a menu "New Team / New Space / New Capsule" - matches the guides.
- Capsule type: guides say "Frontend Capsule"/"Backend Capsule"; wizard field is "Choose a Capsule" with options "Frontend" / "Backend" (no "Capsule" suffix). No "Capsule Details" step title; breadcrumb is "New Capsule / Hosting / Plan / Configure / Deploy" (Frontend) or "New Capsule / Plan / Configure / Deploy" (Backend). Team and Space come pre-filled when started from the Space.
- Hosting step matches (Static / Container cards).
- Plan (frontend): Free exists but is limited to 5 free capsules per account; at 5/5 the UI says "You're using all 5 of your free capsules. Upgrade or delete one to create another." and a click on "Free" text ended up creating a Paid ($3/mo) capsule in my first angular attempt (removed afterwards). Guides do not mention the limit.
- Plan (backend / Next.js): NO Free plan. Options are Basic $8.75, Standard $18.75, Premium $31.25, Custom. Next.js guide says select Free -> fails, goal blocked.
- Deploy: step heading is "Build & Deploy" but the submit button is "Create Capsule" (guides: click "Build & Deploy"). A required "Capsule Name" field is present and not in the guides. Placeholders: Build Command "example... npm run build", Path to static content "example... dist". Backend Deploy shows "Run Command" with "$" prefix.
- After Create Capsule the app lands on the Details tab, not Deploy; the user must click Deploy. "Builds" is both a section on the Deploy tab (heading "Builds - These are the latest builds available.") and a separate top-level tab. A build starts automatically and status shows "Building" / "Failed".
- Builds finish quickly (8s-75s), so "in progress or queued" is only true for the first minute.
- Build failures seen (repo/platform, not guide wording): demo-react ERR_PACKAGE_PATH_NOT_EXPORTED (postcss-safe-parser), demo-vue static-builder "fetch failed", demo-angular-22 failed after 8s.