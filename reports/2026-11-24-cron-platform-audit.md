# Cron platform audit — 2026-11-24

Run timestamp: **2026-11-24T08:21:00Z**  
Target: **https://test-platform.codecapsules.io**  
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (39 features)  
Docs branch base: `docs/how-to-layout` + `docs/b` and `docs/e` from `main`

## Manifest goals reached

**Manifest goals reached (all features): no**

| Feature | Guide | Format check | Walkthrough | Goal reached |
|---------|-------|--------------|-------------|--------------|
| Create Angular frontend capsule | `docs/b/angular.md` | fail | not run (format fail) | **no** |
| Create React frontend capsule | `docs/b/react.md` | fail | not run (format fail) | **no** |
| Create Vue frontend capsule | no | n/a | not run (no guide) | **no** |
| Create NextJS backend capsule | no | n/a | not run (no guide) | **no** |
| Create Static HTML capsule | no | n/a | not run (no guide) | **no** |
| Create Svelte frontend capsule | no | n/a | not run (no guide) | **no** |
| Connect GitHub or GitLab | `docs/platform/account/connect-version-control.md` | fail | not run (format fail) | **no** |
| Add a payment method | `docs/platform/account/how-do-i-add-a-payment-method.md` | fail | not run (format fail) | **no** |
| Enable two-factor authentication | `docs/platform/account/how-do-i-enable-2fa.md` | fail | not run (format fail) | **no** |
| Reset password | `docs/platform/account/how-do-i-reset-my-password.md` | fail | not run (format fail) | **no** |
| Change billing details | `docs/platform/billing/how-do-i-change-my-billing-details.md` | fail | not run (format fail) | **no** |
| View invoices | `docs/platform/billing/how-do-i-view-my-invoices.md` | fail | not run (format fail) | **no** |
| Understand pricing | `docs/platform/billing/how-does-the-pricing-work.md` | fail | not applicable | **no** |
| Add and remove a team | `docs/platform/teams/how-do-i-add-remove-teams.md` | fail | not run (format fail) | **no** |
| Add team members | `docs/platform/teams/how-do-i-add-team-members.md` | fail | not run (format fail) | **no** |
| Share a repo with a team | `docs/platform/teams/share-a-repo-with-a-team.md` | fail | not run (format fail) | **no** |
| Understand teams | `docs/platform/teams/what-is-a-team.md` | fail | not applicable | **no** |
| Add and remove a space | `docs/platform/spaces/how-do-i-add-remove-a-space.md` | fail | not run (format fail) | **no** |
| Understand spaces | `docs/platform/spaces/what-is-a-space.md` | fail | not applicable | **no** |
| Add, remove and stop a capsule | `docs/platform/capsules/how-do-i-add-remove-stop-capsules.md` | fail | not run (format fail) | **no** |
| Add custom domain to a capsule | `docs/platform/capsules/how-to-add-a-custom-domain.md` | fail | not run (format fail) | **no** |
| Configure health checks | `docs/platform/capsules/health-checks.md` | fail | not run (format fail) | **no** |
| Add HTTP basic authentication | `docs/platform/security/basic-auth.md` | fail | not run (format fail) | **no** |
| Understand capsules | `docs/platform/capsules/what-is-a-capsule.md` | fail | not applicable | **no** |
| View available regions | `docs/platform/regions/what-regions-does-code-capsules-support.md` | fail | not applicable | **no** |
| View platform guides index | `docs/platform/index.md` | fail | not applicable | **no** |
| View platform overview | `docs/platform/platform.md` | fail | not applicable | **no** |
| Understand Code Capsules | `docs/platform/what-is-code-capsules.md` | fail | not applicable | **no** |
| View database hosting index | `docs/database/index.md` | fail | not applicable | **no** |
| Create MySQL database capsule | `docs/database/mysql/index.md` | fail | not run (format fail) | **no** |
| Create PostgreSQL database capsule | `docs/database/postgres.md` | fail | not run (format fail) | **no** |
| Create MongoDB database capsule | `docs/database/mongodb/index.md` | fail | not run (format fail) | **no** |
| Create Redis database capsule | `docs/database/redis.md` | fail | not run (format fail) | **no** |
| Create Django with MySQL capsules | `docs/database/mysql/django-+-mysql.md` | fail | not run (format fail) | **no** |
| Create Flask with MySQL capsules | `docs/database/mysql/flask-+-mysql.md` | fail | not run (format fail) | **no** |
| Create Java with MySQL capsules | `docs/database/mysql/java-+-mysql.md` | fail | not run (format fail) | **no** |
| Create Django with MongoDB capsules | `docs/database/mongodb/django-+-mongodb.md` | fail | not run (format fail) | **no** |
| Create Express with MongoDB capsules | `docs/database/mongodb/express-+-mongodb.md` | fail | not run (format fail) | **no** |
| Create Flask with MongoDB capsules | `docs/database/mongodb/flask-+-mongodb.md` | fail | not run (format fail) | **no** |

## Cross-cutting findings

1. **Format gate:** 0 of 35 guides with a matching doc passed `formats/FORMAT.MD`. Legacy GitBook pages (inline steps, `/gitbook-assets/` images not in `static/`, missing `doc_version: drift` and `DocCardList`) dominate `docs/platform/` and `docs/database/`. Reformatted how-tos on `docs/b/` (Angular, React) still fail Check 3/4 (live-site links, section naming, prerequisite cards).
2. **Missing how-tos:** Vue, Next.js backend, Static HTML, and Svelte are listed on `docs/b/index.md` but have no dedicated guide files on `main`. See the four `2026-11-24-create-*-frontend-capsule.md` exploratory reports.
3. **Wrong doc type:** `health-checks.md` reads as reference/explanation but the manifest expects a how-to for configuring health checks (`health-checks-1` wrong-doc-type ticket).
4. **Broken doc links:** Multiple pages link to `/products/...` paths that do not exist under `docs/` (pricing, MySQL/MongoDB indexes).
5. **Empty index:** `docs/database/index.md` is a stub; it cannot satisfy “View database hosting index.”
6. **Test platform:** No verified automation login; see [2026-11-24-exploratory-common-login.md](./2026-11-24-exploratory-common-login.md). Walkthroughs were skipped for format failures before login was attempted.

## Shared page tickets (create first)

Docs on `docs/b/` and reformatted targets depend on shared pages under `docs/e/` (slugs `/docs/shared/...`). Several platform guides still explain prerequisites inline instead of linking. When promoting platform guides to `how_to_format.md`, create or consolidate:

- `shared-create-a-space` (already in `docs/e/create-a-space.md`)
- `shared-create-an-account` (`docs/e/create-an-account.md`)
- `shared-fork-a-demo-repo` (`docs/e/fork-a-demo-repo.md`)
- `shared-configure-git-for-code-capsules` (`docs/e/configure-git-for-code-capsules.md`)

Reference existing tickets inside each format report rather than opening duplicates.

## Report index

- **Run summary:** this file
- **Login blocker:** [2026-11-24-exploratory-common-login.md](./2026-11-24-exploratory-common-login.md)
- **Missing guides:** [vue](./2026-11-24-create-vue-frontend-capsule.md), [nextjs](./2026-11-24-create-nextjs-backend-capsule.md), [static](./2026-11-24-create-static-html-capsule.md), [svelte](./2026-11-24-create-svelte-frontend-capsule.md)
- **Format reports:** `reports/2026-11-24-format-*.md` (+ matching `.json`) — 35 files