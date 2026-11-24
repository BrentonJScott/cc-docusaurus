# Cron platform audit — 2026-11-24

Run timestamp: **2026-11-24T10:35:00+02:00**  
Target: **https://test-platform.codecapsules.io**  
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (39 features)

## Manifest goals reached

**Manifest goals reached (all features): no**

| Feature | Guide | Format check | Walkthrough | Goal reached |
|---------|-------|--------------|-------------|--------------|
| Create Angular frontend capsule | `docs/frontend/angular.md` | fail | not run (format fail) | **no** |
| Create React frontend capsule | `docs/frontend/react.md` | fail | not run (format fail) | **no** |
| Create Vue frontend capsule | `docs/frontend/vue.md` | fail | not run (format fail) | **no** |
| Create NextJS backend capsule | `docs/frontend/next.js.md` | fail | not run (format fail) | **no** |
| Create Static HTML capsule | `docs/frontend/static-html.md` | fail | not run (format fail) | **no** |
| Create Svelte frontend capsule | `docs/frontend/svelte.md` | fail | not run (format fail) | **no** |
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

1. **Format gate:** 0 of 39 docs passed mechanical `formats/FORMAT.MD` checks. 30 how-to guides failed and were not walked through.
2. **Legacy GitBook:** `docs/frontend/`, `docs/platform/`, and `docs/database/` pages still use Setup/account/space sections, gitbook images, and live-site links instead of `doc_version: drift`, `DocCardList` prerequisites, and `## Troubleshooting`.
3. **Index stubs:** `docs/database/index.md` is effectively empty; `docs/platform/index.md` must be link-checked separately.
4. **Next.js mapping:** Manifest feature **Create NextJS backend capsule** is tested against `docs/frontend/next.js.md` (server-rendered backend path described in the guide intro).
5. **Test platform login:** See [exploratory login report](./2026-11-24-exploratory-common-login.md).

## Report layout

Per `formats/FORMAT.MD` and `WALKTHROUGH.md`, format reports live under `reports/<doc folder>/` (mirroring `docs/`, without the `docs/` prefix).

- **Run summary:** this file
- **Login blocker:** [2026-11-24-exploratory-common-login.md](./2026-11-24-exploratory-common-login.md)
- **Format reports:** `reports/**/2026-11-24-format-*.{md,json}` — 39 feature guides

