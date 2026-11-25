# Format report — manifest guides not published on main

- **Run:** 2026-11-25-0516
- **Doc file:** _(179 manifest paths)_
- **Doc type:** —
- **Template:** —
- **Feature:** 179 entries in `cc-site/DOCUMENTED_FEATURES.MD`
- **Goal:** _(per manifest line)_
- **Format check:** fail

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | not applicable | No file under `docs/` |
| Prerequisites | not applicable | No file under `docs/` |
| Links | not applicable | No file under `docs/` |
| Format and style | fail | Guide path missing from `docs/` |

## Summary

After the `docs/site-styling` merge on `main`, **60** of **239** manifest guide paths exist under `docs/`. The other **179** paths resolve only to `docs.bak/` (same relative path with `docs.bak` instead of `docs`). Docusaurus does not publish `docs.bak/`, so those features have no live guide to format-check or walk through.

## Tickets

### manifest-1: Restore published guides from docs.bak

- **Type:** New guide
- **Title:** Copy manifest-listed guides from `docs.bak/` back to `docs/`.
- **Problem:** `DOCUMENTED_FEATURES.MD` names paths such as `docs/platform/billing/how-does-the-pricing-work.md`, but only `docs.bak/platform/billing/how-does-the-pricing-work.md` exists on `main`.
- **Rule:** PROMPT.MD — each feature has one matching guide in the docs.
- **Change:** For each of the 179 paths below, restore the file to the matching `docs/...` path (or update the manifest if the path changed intentionally). Re-run `formats/FORMAT.MD` on each restored file before walkthrough.
- **Done when:** Every `docs/...` path in `DOCUMENTED_FEATURES.MD` exists under `docs/` on `main` and appears in the docs site build.

### Affected manifest paths (179)

<details>
<summary>Click to expand full path list</summary>

```
docs/backend/go/index.md
docs/backend/index.md
docs/backend/node.js/index.md
docs/backend/python/index.md
docs/platform/index.md
docs/platform/platform.md
docs/platform/what-is-code-capsules.md
docs/platform/account/how-do-i-add-a-payment-method.md
docs/platform/account/how-do-i-enable-2fa.md
docs/platform/account/how-do-i-reset-my-password.md
docs/platform/billing/how-do-i-change-my-billing-details.md
docs/platform/billing/how-do-i-view-my-invoices.md
docs/platform/billing/how-does-the-pricing-work.md
docs/platform/spaces/how-do-i-add-remove-a-space.md
docs/platform/spaces/what-is-a-space.md
docs/platform/teams/how-do-i-add-remove-teams.md
docs/platform/teams/how-do-i-add-team-members.md
docs/platform/teams/share-a-repo-with-a-team.md
docs/platform/teams/what-is-a-team.md
docs/platform/capsules/deployment-notifications.md
docs/platform/capsules/health-checks.md
docs/platform/capsules/how-do-i-add-remove-stop-capsules.md
docs/platform/capsules/how-to-add-a-custom-domain.md
docs/platform/capsules/what-is-a-capsule.md
docs/frontend/next.js.md
docs/frontend/react.md
docs/frontend/static-html.md
docs/frontend/svelte.md
docs/backend/go/index.md
docs/backend/index.md
docs/backend/node.js/index.md
docs/backend/python/index.md
docs/platform/index.md
docs/platform/platform.md
docs/platform/what-is-code-capsules.md
docs/platform/account/how-do-i-add-a-payment-method.md
docs/platform/account/how-do-i-enable-2fa.md
docs/platform/account/how-do-i-reset-my-password.md
docs/platform/billing/how-do-i-change-my-billing-details.md
docs/platform/billing/how-do-i-view-my-invoices.md
docs/platform/billing/how-does-the-pricing-work.md
docs/platform/spaces/how-do-i-add-remove-a-space.md
docs/platform/spaces/what-is-a-space.md
docs/platform/teams/how-do-i-add-remove-teams.md
docs/platform/teams/how-do-i-add-team-members.md
docs/platform/teams/share-a-repo-with-a-team.md
docs/platform/teams/what-is-a-team.md
docs/platform/capsules/deployment-notifications.md
docs/platform/capsules/health-checks.md
docs/platform/capsules/how-do-i-add-remove-stop-capsules.md
docs/platform/capsules/how-to-add-a-custom-domain.md
docs/platform/capsules/what-is-a-capsule.md
docs/frontend/next.js.md
docs/frontend/react.md
docs/frontend/static-html.md
docs/frontend/svelte.md
docs/products/frontend-capsule/container/deploy.md
docs/products/frontend-capsule/deploy.md
docs/products/frontend-capsule/static/deploy.md
docs/products/frontend-capsule/configure.md
docs/products/frontend-capsule/custom-domains.md
docs/products/frontend-capsule/logs.md
docs/products/frontend-capsule/monitor.md
docs/products/frontend-capsule/scale.md
docs/products/frontend-capsule/supported-runtimes.md
docs/backend/go/go-telegram-bot.md
docs/backend/go/go.md
docs/backend/java.md
docs/backend/node.js/express.js.md
docs/backend/node.js/node.js-discord-bot.md
docs/backend/node.js/node.js-telegram-bot.md
docs/backend/node.js/slack-bot.md
docs/backend/python/django.md
docs/backend/python/flask.md
docs/backend/python/python-discord-bot.md
docs/backend/python/python-telegram-bot.md
docs/backend/python/python.md
docs/backend/python/whatsapp-bot.md
docs/products/backend-capsule/deploy.md
docs/products/backend-capsule/add-procfile.md
docs/products/backend-capsule/configure.md
docs/products/backend-capsule/monitor.md
docs/products/backend-capsule/scale.md
docs/products/backend-capsule/supported-runtimes.md
docs/backend/docker/docker-laravel-app.md
docs/backend/docker/docker-php-app.md
docs/backend/docker/flask-docker-app.md
docs/backend/docker/index.md
docs/products/docker-capsule/deploy.md
docs/products/docker-capsule/git/deploy.md
docs/products/docker-capsule/image/deploy.md
docs/products/docker-capsule/configure.md
docs/products/docker-capsule/deployments.md
docs/products/docker-capsule/git/builds.md
docs/products/docker-capsule/image/updates.md
docs/products/docker-capsule/logs.md
docs/products/docker-capsule/monitor.md
docs/products/docker-capsule/scale.md
docs/database/mongodb/django-+-mongodb.md
docs/database/mongodb/express-+-mongodb.md
docs/database/mongodb/flask-+-mongodb.md
docs/database/mysql/django-+-mysql.md
docs/database/mysql/java-+-mysql.md
docs/database/redis.md
docs/products/database-capsule/documentdb/deploy.md
docs/products/database-capsule/mongodb/deploy-and-bind.md
docs/products/database-capsule/mongodb/deploy.md
docs/products/database-capsule/mysql/deploy-and-bind.md
docs/products/database-capsule/mysql/deploy.md
docs/products/database-capsule/postgresql/deploy-and-bind.md
docs/products/database-capsule/postgresql/deploy.md
docs/products/database-capsule/redis/deploy-and-bind.md
docs/products/database-capsule/redis/deploy.md
docs/products/database-capsule/documentdb/backups.md
docs/products/database-capsule/documentdb/configure.md
docs/products/database-capsule/documentdb/connect-locally.md
docs/products/database-capsule/documentdb/logs.md
docs/products/database-capsule/documentdb/monitor.md
docs/products/database-capsule/documentdb/scale.md
docs/products/database-capsule/mongodb/backups.md
docs/products/database-capsule/mongodb/monitor.md
docs/products/database-capsule/mongodb/scale.md
docs/products/database-capsule/mongodb/versions.md
docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md
docs/products/database-capsule/mysql/backups.md
docs/products/database-capsule/mysql/configure.md
docs/products/database-capsule/mysql/connect-locally.md
docs/products/database-capsule/mysql/logs.md
docs/products/database-capsule/mysql/monitor.md
docs/products/database-capsule/mysql/scale.md
docs/products/database-capsule/mysql/schema-migrations.md
docs/products/database-capsule/mysql/versions.md
docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md
docs/products/database-capsule/postgresql/backups.md
docs/products/database-capsule/postgresql/configure.md
docs/products/database-capsule/postgresql/connect-locally.md
docs/products/database-capsule/postgresql/logs.md
docs/products/database-capsule/postgresql/monitor.md
docs/products/database-capsule/postgresql/scale.md
docs/products/database-capsule/redis/configure.md
docs/products/database-capsule/redis/connect-locally.md
docs/products/database-capsule/redis/logs.md
docs/products/database-capsule/redis/monitor.md
docs/products/database-capsule/redis/scale.md
docs/products/storage-capsule/deploy.md
docs/products/storage-capsule/backups.md
docs/products/storage-capsule/configure.md
docs/products/storage-capsule/how-state-works.md
docs/products/storage-capsule/logs.md
docs/products/storage-capsule/monitor.md
docs/products/storage-capsule/scale.md
docs/products/wordpress-capsule/deploy.md
docs/wordpress.md
docs/products/wordpress-capsule/backups.md
docs/products/wordpress-capsule/caching.md
docs/products/wordpress-capsule/configure.md
docs/products/wordpress-capsule/cron.md
docs/products/wordpress-capsule/logs.md
docs/products/wordpress-capsule/monitor.md
docs/products/wordpress-capsule/scale.md
docs/products/wordpress-capsule/security.md
docs/products/agent-capsule/deploy.md
docs/products/agent-capsule/templates.md
docs/products/agent-capsule/configure.md
docs/products/agent-capsule/logs.md
docs/products/agent-capsule/monitor.md
docs/products/agent-capsule/scale.md
docs/full-stack/flask-+-htmx.md
docs/full-stack/index.md
docs/full-stack/mean-stack.md
docs/full-stack/mern-stack.md
docs/full-stack/next.js/next.js-+-mongodb.md
docs/cli/readme/global-options.md
docs/cli/readme/getting-started/prerequisites.md
docs/cli/readme/getting-started/quick-start.md
docs/cli/readme/commands/login.md
docs/cli/readme/commands/logout.md
docs/cli/readme/commands/whoami.md
docs/sandbox/quickstart.md
docs/sandbox/python/api-reference.md
docs/agentic-automation/deployment.md
docs/agentic-automation/index.md
docs/agentic-automation/the-framework.md
docs/agentic-automation/the-problem.md
docs/enterprise/aws.md
docs/enterprise/azure.md
docs/enterprise/gcp.md
docs/enterprise/index.md
docs/enterprise/vmware.md
docs/products/enterprise-clusters/overview.md
docs/tutorials/best-practices-for-structuring-mean-mern-mevn-projects.md
docs/tutorials/build-a-generative-art-application-with-pillow-flask-and-htmx.md
docs/tutorials/build-a-mern-job-board.md
docs/tutorials/build-a-slackbot-with-node.js-to-monitor-your-applications.md
docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md
docs/tutorials/building-a-full-stack-application-with-flask-and-htmx.md
docs/tutorials/building-a-game-catalogue-api.md
docs/tutorials/create-and-host-go-ai-telegram-bot.md
docs/tutorials/deploy-emdash-on-code-capsules.md
docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md
docs/tutorials/getting-started-with-mean-stack-a-step-by-step-tutorial.md
docs/tutorials/heroku-migration-guide.md
docs/tutorials/how-to-create-and-host-a-telegram-bot-on-code-capsules.md
docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md
docs/tutorials/nuxt3-and-nitro.md
docs/tutorials/use-codecapsules-with-an-agent.md
docs/products/alerting.md
```

</details>

## Proposed outline

None — restore existing `docs.bak/` content per path, then align to templates in `formats/` as needed.