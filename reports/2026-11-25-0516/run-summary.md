# Documentation audit run summary — 2026-11-25-0516

Run timestamp: **2026-11-25T05:16:14Z**
Target: **https://test-platform.codecapsules.io**
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (239 features)

## Manifest goals reached

**Manifest goals reached (all features): no**

Walkthroughs were not run: no authenticated test session in this environment (see [walkthrough-login-blocker.md](exploratory/walkthrough-login-blocker.md)).

## Publication gap

- Guides **published** under `docs/`: **60**
- Guides listed in the manifest but only in `docs.bak/`: **179**

Until copies move back from `docs.bak/` to `docs/`, most features have no published guide on `main`. See [missing-published-guides.md](manifest/missing-published-guides.md).

## Format summary

- Format **pass:** 60 (all files currently under `docs/` passed the automated structure scan)
- Format **fail:** 179 (manifest path has no file under `docs/`; copy exists in `docs.bak/`)

## Walkthrough summary

- How-to guides and tutorials on `main`: **not run (login blocked)**
- How-to guides and tutorials with no published file: **not run (guide missing)**
- Reference and explanation pages: **not applicable**

## Feature table

| Feature | Guide | Type | Published | Format check | Walkthrough | Report |
|---------|-------|------|-----------|--------------|-------------|--------|
| Go Hosting Reference | `docs/backend/go/index.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Backend Hosting Reference | `docs/backend/index.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Node.js Application Hosting Reference | `docs/backend/node.js/index.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Python Application Hosting Reference | `docs/backend/python/index.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Get Started: Deploy Your First App | `docs/index.md` | reference | yes | pass | not applicable | — |
| Platform Guides — Accounts, Billing, Teams & Domains | `docs/platform/index.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Platform Overview | `docs/platform/platform.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| What Is Code Capsules? PaaS Overview | `docs/platform/what-is-code-capsules.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| App, Database & WordPress Hosting Products | `docs/products/index.md` | reference | yes | pass | not applicable | — |
| Connect GitHub or GitLab | `docs/platform/account/connect-version-control.md` | how-to | yes | pass | not run (login blocked) | — |
| Add a Payment Method | `docs/platform/account/how-do-i-add-a-payment-method.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Enable Two-Factor Authentication | `docs/platform/account/how-do-i-enable-2fa.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Reset Your Password | `docs/platform/account/how-do-i-reset-my-password.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Change Billing Details | `docs/platform/billing/how-do-i-change-my-billing-details.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| View Your Invoices | `docs/platform/billing/how-do-i-view-my-invoices.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| How Does the Pricing Work? | `docs/platform/billing/how-does-the-pricing-work.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Add and Remove Spaces | `docs/platform/spaces/how-do-i-add-remove-a-space.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| What Is a Space? | `docs/platform/spaces/what-is-a-space.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Add and Remove Teams | `docs/platform/teams/how-do-i-add-remove-teams.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Add Team Members to a Team | `docs/platform/teams/how-do-i-add-team-members.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Share a Repo with a Team | `docs/platform/teams/share-a-repo-with-a-team.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| What Is a Team? | `docs/platform/teams/what-is-a-team.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Set Up Deployment Notifications | `docs/platform/capsules/deployment-notifications.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure Health Checks | `docs/platform/capsules/health-checks.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Add, Remove, and Stop Hosted Apps | `docs/platform/capsules/how-do-i-add-remove-stop-capsules.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Add a Custom Domain to a Capsule | `docs/platform/capsules/how-to-add-a-custom-domain.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Hosting Environments | `docs/platform/capsules/what-is-a-capsule.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Available Regions and Locations | `docs/platform/regions/what-regions-does-code-capsules-support.md` | reference | yes | pass | not applicable | — |
| Add HTTP Basic Authentication | `docs/platform/security/basic-auth.md` | how-to | yes | pass | not run (login blocked) | — |
| Configure Git for Code Capsules | `docs/shared/configure-git-for-code-capsules.md` | how-to | yes | pass | not run (login blocked) | — |
| Connect GitHub to Code Capsules | `docs/shared/connect-github.md` | how-to | yes | pass | not run (login blocked) | — |
| Create a Discord Bot | `docs/shared/create-a-discord-bot.md` | how-to | yes | pass | not run (login blocked) | — |
| Create a Space | `docs/shared/create-a-space.md` | how-to | yes | pass | not run (login blocked) | — |
| Create a Telegram Bot | `docs/shared/create-a-telegram-bot.md` | how-to | yes | pass | not run (login blocked) | — |
| Create a Code Capsules Account | `docs/shared/create-an-account.md` | how-to | yes | pass | not run (login blocked) | — |
| Fork a Demo Repository | `docs/shared/fork-a-demo-repo.md` | how-to | yes | pass | not run (login blocked) | — |
| Shared Prerequisites Reference | `docs/shared/index.md` | reference | yes | pass | not applicable | — |
| Set Up a Twilio WhatsApp Sandbox | `docs/shared/set-up-twilio-whatsapp-sandbox.md` | how-to | yes | pass | not run (login blocked) | — |
| Host an Angular Application | `docs/frontend/angular.md` | how-to | yes | pass | not run (login blocked) | [walkthrough-login-blocker.md](exploratory/walkthrough-login-blocker.md) |
| Frontend & Static Site Hosting | `docs/frontend/index.md` | reference | yes | pass | not applicable | — |
| Host a Next.js App | `docs/frontend/next.js.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a React Application | `docs/frontend/react.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Static HTML Website | `docs/frontend/static-html.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Svelte Application | `docs/frontend/svelte.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Vue Application | `docs/frontend/vue.md` | how-to | yes | pass | not run (login blocked) | [walkthrough-login-blocker.md](exploratory/walkthrough-login-blocker.md) |
| Deploy a Container Frontend | `docs/products/frontend-capsule/container/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Frontend Framework Deployment Guides | `docs/products/frontend-capsule/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a Static Frontend | `docs/products/frontend-capsule/static/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a Frontend App | `docs/products/frontend-capsule/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Add a Custom Domain to a Frontend App | `docs/products/frontend-capsule/custom-domains.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Frontend App Hosting | `docs/products/frontend-capsule/index.md` | reference | yes | pass | not applicable | — |
| View Logs for a Frontend App | `docs/products/frontend-capsule/logs.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Monitor a Frontend App | `docs/products/frontend-capsule/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale a Frontend App | `docs/products/frontend-capsule/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Static Frontend Free and Paid Plans | `docs/products/frontend-capsule/static/plans.md` | reference | yes | pass | not applicable | — |
| Supported Frontend Frameworks and Runtimes | `docs/products/frontend-capsule/supported-runtimes.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a Go Telegram Bot from GitHub | `docs/backend/go/go-telegram-bot.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Go Application | `docs/backend/go/go.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Java Application | `docs/backend/java.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host an Express.js Application | `docs/backend/node.js/express.js.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Node.js Discord Bot | `docs/backend/node.js/node.js-discord-bot.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Node.js Telegram Bot | `docs/backend/node.js/node.js-telegram-bot.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a Node.js Slack Bot | `docs/backend/node.js/slack-bot.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Django Application | `docs/backend/python/django.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Flask Application | `docs/backend/python/flask.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Python Discord Bot | `docs/backend/python/python-discord-bot.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Python Telegram Bot | `docs/backend/python/python-telegram-bot.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Python Application | `docs/backend/python/python.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Python WhatsApp Bot | `docs/backend/python/whatsapp-bot.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a Backend Application | `docs/products/backend-capsule/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Add a Procfile to a Backend Capsule | `docs/products/backend-capsule/add-procfile.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a Backend Application | `docs/products/backend-capsule/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Backend Application Hosting | `docs/products/backend-capsule/index.md` | reference | yes | pass | not applicable | — |
| View Logs for a Backend Application | `docs/products/backend-capsule/logs.md` | how-to | yes | pass | not run (login blocked) | — |
| Monitor a Backend Application | `docs/products/backend-capsule/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale a Backend Application | `docs/products/backend-capsule/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Supported Backend Runtimes and Versions | `docs/products/backend-capsule/supported-runtimes.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Caddy Site with Docker | `docs/backend/docker/caddy-docker-site.md` | how-to | yes | pass | not run (login blocked) | — |
| Host a Laravel Application with Docker | `docs/backend/docker/docker-laravel-app.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a PHP Application with Docker | `docs/backend/docker/docker-php-app.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Flask Application with Docker | `docs/backend/docker/flask-docker-app.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Docker Deployment Guides Reference | `docs/backend/docker/index.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a Docker Capsule | `docs/products/docker-capsule/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a Dockerfile From Git | `docs/products/docker-capsule/git/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy an Existing Docker Image | `docs/products/docker-capsule/image/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a Docker Container | `docs/products/docker-capsule/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Docker Container Runtime Requirements | `docs/products/docker-capsule/container-requirements.md` | how-to | yes | pass | not run (login blocked) | — |
| Manage Docker Container Deployments | `docs/products/docker-capsule/deployments.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Build Docker Images From Git | `docs/products/docker-capsule/git/builds.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Update a Deployed Docker Image | `docs/products/docker-capsule/image/updates.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Docker Container Hosting | `docs/products/docker-capsule/index.md` | reference | yes | pass | not applicable | — |
| View Logs for a Docker Container | `docs/products/docker-capsule/logs.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Monitor a Docker Container | `docs/products/docker-capsule/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale a Docker Container | `docs/products/docker-capsule/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy Django with MongoDB | `docs/database/mongodb/django-+-mongodb.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy Express with MongoDB | `docs/database/mongodb/express-+-mongodb.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy Flask with MongoDB | `docs/database/mongodb/flask-+-mongodb.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Managed MongoDB Hosting | `docs/database/mongodb/index.md` | reference | yes | pass | not applicable | — |
| Deploy Django with MySQL | `docs/database/mysql/django-+-mysql.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy Flask with MySQL | `docs/database/mysql/flask-+-mysql.md` | how-to | yes | pass | not run (login blocked) | — |
| Managed MySQL Hosting | `docs/database/mysql/index.md` | reference | yes | pass | not applicable | — |
| Deploy Java with MySQL | `docs/database/mysql/java-+-mysql.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Managed PostgreSQL Hosting | `docs/database/postgres.md` | explanation | yes | pass | not applicable | — |
| Managed Redis Hosting | `docs/database/redis.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a DocumentDB Database | `docs/products/database-capsule/documentdb/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy and bind MongoDB | `docs/products/database-capsule/mongodb/deploy-and-bind.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a MongoDB Database | `docs/products/database-capsule/mongodb/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy and bind MySQL | `docs/products/database-capsule/mysql/deploy-and-bind.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a MySQL Database | `docs/products/database-capsule/mysql/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy and bind PostgreSQL | `docs/products/database-capsule/postgresql/deploy-and-bind.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a PostgreSQL Database | `docs/products/database-capsule/postgresql/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy and bind Redis | `docs/products/database-capsule/redis/deploy-and-bind.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a Redis Database | `docs/products/database-capsule/redis/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Managed Database Hosting — MySQL, MongoDB, Postgres & Redis | `docs/database/index.md` | reference | yes | pass | not applicable | — |
| Back Up a DocumentDB Database | `docs/products/database-capsule/documentdb/backups.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a DocumentDB Database | `docs/products/database-capsule/documentdb/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Connect to DocumentDB Locally | `docs/products/database-capsule/documentdb/connect-locally.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| View Logs for a DocumentDB Database | `docs/products/database-capsule/documentdb/logs.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Monitor a DocumentDB Database | `docs/products/database-capsule/documentdb/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale a DocumentDB Database | `docs/products/database-capsule/documentdb/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Managed Database Hosting | `docs/products/database-capsule/index.md` | reference | yes | pass | not applicable | — |
| Back Up a MongoDB Database | `docs/products/database-capsule/mongodb/backups.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a MongoDB Database | `docs/products/database-capsule/mongodb/configure.md` | how-to | yes | pass | not run (login blocked) | — |
| Monitor a MongoDB Database | `docs/products/database-capsule/mongodb/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale a MongoDB Database | `docs/products/database-capsule/mongodb/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Supported MongoDB Versions | `docs/products/database-capsule/mongodb/versions.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Upgrade MongoDB 7.0 to 8.0 | `docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Upgrade MongoDB Versions | `docs/products/database-capsule/mongodb/versions/upgrades/index.md` | reference | yes | pass | not applicable | — |
| Back Up a MySQL Database | `docs/products/database-capsule/mysql/backups.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a MySQL Database | `docs/products/database-capsule/mysql/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Connect to MySQL Locally | `docs/products/database-capsule/mysql/connect-locally.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| View Logs for a MySQL Database | `docs/products/database-capsule/mysql/logs.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Monitor a MySQL Database | `docs/products/database-capsule/mysql/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale a MySQL Database | `docs/products/database-capsule/mysql/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Run Database Migrations | `docs/products/database-capsule/mysql/schema-migrations.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Supported MySQL Versions | `docs/products/database-capsule/mysql/versions.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Upgrade MySQL 5.7 to 8.0 | `docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Upgrade MySQL Versions | `docs/products/database-capsule/mysql/versions/upgrades/index.md` | reference | yes | pass | not applicable | — |
| Back Up a PostgreSQL Database | `docs/products/database-capsule/postgresql/backups.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a PostgreSQL Database | `docs/products/database-capsule/postgresql/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Connect to PostgreSQL Locally | `docs/products/database-capsule/postgresql/connect-locally.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| View Logs for a PostgreSQL Database | `docs/products/database-capsule/postgresql/logs.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Monitor a PostgreSQL Database | `docs/products/database-capsule/postgresql/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale a PostgreSQL Database | `docs/products/database-capsule/postgresql/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a Redis Database | `docs/products/database-capsule/redis/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Connect to Redis Locally | `docs/products/database-capsule/redis/connect-locally.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| View Logs for a Redis Database | `docs/products/database-capsule/redis/logs.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Monitor a Redis Database | `docs/products/database-capsule/redis/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale a Redis Database | `docs/products/database-capsule/redis/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Use Persistent Storage | `docs/persistent-storage.md` | how-to | yes | pass | not run (login blocked) | — |
| Deploy a Persistent Storage | `docs/products/storage-capsule/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Back Up a Persistent Storage | `docs/products/storage-capsule/backups.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a Persistent Storage | `docs/products/storage-capsule/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| How Persistent Storage State Works | `docs/products/storage-capsule/how-state-works.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| View Logs for a Persistent Storage | `docs/products/storage-capsule/logs.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Monitor a Persistent Storage | `docs/products/storage-capsule/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale a Persistent Storage | `docs/products/storage-capsule/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a WordPress Site | `docs/products/wordpress-capsule/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Managed WordPress Hosting | `docs/wordpress.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Back Up a WordPress Site | `docs/products/wordpress-capsule/backups.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Enable WordPress Caching | `docs/products/wordpress-capsule/caching.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Configure a WordPress Site | `docs/products/wordpress-capsule/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Schedule WordPress Cron Jobs | `docs/products/wordpress-capsule/cron.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| View Logs for a WordPress Site | `docs/products/wordpress-capsule/logs.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Monitor a WordPress Site | `docs/products/wordpress-capsule/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Maximize WordPress Performance | `docs/products/wordpress-capsule/performance.md` | explanation | yes | pass | not applicable | — |
| Configure WordPress Routing | `docs/products/wordpress-capsule/routing.md` | explanation | yes | pass | not applicable | — |
| Scale a WordPress Site | `docs/products/wordpress-capsule/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Secure a WordPress Site | `docs/products/wordpress-capsule/security.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy an AI Agent | `docs/products/agent-capsule/deploy.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| AI Agent Templates — Prebuilt Starting Points | `docs/products/agent-capsule/templates.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Add a Chat Interface to an AI Agent | `docs/products/agent-capsule/chat/index.md` | reference | yes | pass | not applicable | — |
| Configure an AI Agent | `docs/products/agent-capsule/configure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| View Logs for an AI Agent | `docs/products/agent-capsule/logs.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Monitor an AI Agent | `docs/products/agent-capsule/monitor.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Scale an AI Agent | `docs/products/agent-capsule/scale.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a Flask + HTMX App | `docs/full-stack/flask-+-htmx.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Full-Stack Application Hosting | `docs/full-stack/index.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a MEAN Stack Application | `docs/full-stack/mean-stack.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a MERN Stack Application | `docs/full-stack/mern-stack.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Next.js Full-Stack Hosting | `docs/full-stack/next.js/index.md` | reference | yes | pass | not applicable | — |
| Deploy Next.js with Express.js | `docs/full-stack/next.js/next.js-+-express.js.md` | explanation | yes | pass | not applicable | — |
| Deploy Next.js with MongoDB | `docs/full-stack/next.js/next.js-+-mongodb.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy a File-Sharing Site with Flask and Caddy | `docs/full-stack/next.js/static-file-share-with-flask-and-caddy.md` | how-to | yes | pass | not run (login blocked) | — |
| CLI Overview and Commands | `docs/cli/index.md` | reference | yes | pass | not applicable | — |
| CLI Global Options Reference | `docs/cli/readme/global-options.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Getting Started With the CLI | `docs/cli/readme/getting-started/index.md` | reference | yes | pass | not applicable | — |
| Install and Use the CLI | `docs/cli/readme/getting-started/installation-and-usage.md` | how-to | yes | pass | not run (login blocked) | — |
| CLI Prerequisites & Requirements | `docs/cli/readme/getting-started/prerequisites.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| CLI Quick Start Guide | `docs/cli/readme/getting-started/quick-start.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| CLI Commands Reference | `docs/cli/readme/commands/index.md` | reference | yes | pass | not applicable | — |
| Log In With the CLI | `docs/cli/readme/commands/login.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Log Out With the CLI | `docs/cli/readme/commands/logout.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Proxy a Database Connection With the CLI | `docs/cli/readme/commands/proxy.md` | reference | yes | pass | not applicable | — |
| Check Your CLI Session | `docs/cli/readme/commands/whoami.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Sandbox Environments & Flavors | `docs/sandbox/environments.md` | how-to | yes | pass | not run (login blocked) | — |
| AI Agent Sandboxes: Firecracker microVMs | `docs/sandbox/index.md` | reference | yes | pass | not applicable | — |
| Sandbox SDK Quick Start | `docs/sandbox/quickstart.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Python Sandbox SDK Methods & Types | `docs/sandbox/python/api-reference.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Sandbox SDK for Python | `docs/sandbox/python/index.md` | explanation | yes | pass | not applicable | — |
| TypeScript Sandbox SDK Methods & Types | `docs/sandbox/typescript/api-reference.md` | reference | yes | pass | not applicable | — |
| Sandbox SDK for TypeScript & Node.js | `docs/sandbox/typescript/index.md` | reference | yes | pass | not applicable | — |
| Deploy Business Automation Agents | `docs/agentic-automation/deployment.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Design AI Agents for Business Automation | `docs/agentic-automation/designing-agents.md` | how-to | yes | pass | not run (login blocked) | — |
| Agentic Automation for Business Processes | `docs/agentic-automation/index.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| The Agentic Automation Framework | `docs/agentic-automation/the-framework.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Why Business Automation Fails at Scale | `docs/agentic-automation/the-problem.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Run a PaaS on AWS — Enterprise Deployment | `docs/enterprise/aws.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Run a PaaS on Azure — Enterprise Deployment | `docs/enterprise/azure.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Run a PaaS on GCP — Enterprise Deployment | `docs/enterprise/gcp.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Enterprise PaaS on Your Own Cloud | `docs/enterprise/index.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Run a PaaS on VMware — Enterprise Deployment | `docs/enterprise/vmware.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Enterprise Clusters — Run the Platform on Your Own Cloud | `docs/products/enterprise-clusters/overview.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| MEAN/MERN/MEVN Project Structure | `docs/tutorials/best-practices-for-structuring-mean-mern-mevn-projects.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Generative Art App with Flask | `docs/tutorials/build-a-generative-art-application-with-pillow-flask-and-htmx.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Build a MERN Job Board | `docs/tutorials/build-a-mern-job-board.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Telegram Calendar Assistant Tutorial | `docs/tutorials/build-a-personal-calendar-assistant-with-telegram-and-agent-capsules.md` | tutorial | yes | pass | not run (login blocked) | — |
| Build a Monitoring Slackbot | `docs/tutorials/build-a-slackbot-with-node.js-to-monitor-your-applications.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| PHP Book Recommendations App | `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Full Stack App with Express and HTMx | `docs/tutorials/building-a-full-stack-application-with-express-and-htmx.md` | tutorial | yes | pass | not run (login blocked) | — |
| Full Stack App with Flask and HTMx | `docs/tutorials/building-a-full-stack-application-with-flask-and-htmx.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Build a Game Catalogue API | `docs/tutorials/building-a-game-catalogue-api.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Build a Web File Store on Code Capsules | `docs/tutorials/building-a-web-file-store.md` | tutorial | yes | pass | not run (login blocked) | — |
| Host a Node.js Telegram Bot | `docs/tutorials/create-and-host-a-telegram-bot-with-node.js-on-code-capsules.md` | tutorial | yes | pass | not run (login blocked) | — |
| Create and Host an API with Flask | `docs/tutorials/create-and-host-an-api-with-flask.md` | tutorial | yes | pass | not run (login blocked) | — |
| Host a Go AI Telegram Bot | `docs/tutorials/create-and-host-go-ai-telegram-bot.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy an EmDash CMS Site | `docs/tutorials/deploy-emdash-on-code-capsules.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deploy Paperclip on Code Capsules | `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Getting Started with MEAN Stack | `docs/tutorials/getting-started-with-mean-stack-a-step-by-step-tutorial.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Migrate From Heroku to Code Capsules: 2026 Guide | `docs/tutorials/heroku-migration-guide.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Python Telegram Bot | `docs/tutorials/how-to-create-and-host-a-telegram-bot-on-code-capsules.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Host a Production WordPress Blog | `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Deployment Tutorials & Step-by-Step Guides | `docs/tutorials/index.md` | reference | yes | pass | not applicable | — |
| Deploy a Nuxt 3 App with Nitro | `docs/tutorials/nuxt3-and-nitro.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| MERN Stack Performance Tips | `docs/tutorials/optimizing-performance-in-mern-stack-tips-and-techniques.md` | tutorial | yes | pass | not run (login blocked) | — |
| Deploy with an AI Coding Agent | `docs/tutorials/use-codecapsules-with-an-agent.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
| Video Tutorials — Deploy Apps Step by Step | `docs/tutorials/video-guides.md` | reference | yes | pass | not applicable | — |
| White-Label Your App | `docs/tutorials/white-label-your-app-with-code-capsules.md` | tutorial | yes | pass | not run (login blocked) | — |
| Set Up Deployment Notifications | `docs/products/alerting.md` | — | no | fail | not run (guide missing) | [missing-published-guides.md](manifest/missing-published-guides.md) |
