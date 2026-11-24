# Documentation audit run summary — 2026-11-24-1317

Run timestamp: **2026-11-24T13:17:00+02:00**
Target: **https://test-platform.codecapsules.io**
Manifest source: `cc-site/DOCUMENTED_FEATURES.MD` (239 features)

## Walkthrough status

Walkthrough is **disabled** per `WALKTHROUGH.md`. How-to guides and tutorials are marked `Walkthrough: disabled`.

## Format summary

- Format **pass:** 111
- Format **fail:** 128

## Feature table

| Feature | Guide | Type | Format check | Walkthrough | Report |
|---------|-------|------|--------------|-------------|--------|
| Go Hosting Reference | `docs/backend/go/index.md` | reference | pass | not applicable | — |
| Backend Hosting Reference | `docs/backend/index.md` | reference | pass | not applicable | — |
| Node.js Application Hosting Reference | `docs/backend/node.js/index.md` | reference | pass | not applicable | — |
| Python Application Hosting Reference | `docs/backend/python/index.md` | reference | pass | not applicable | — |
| Get Started: Deploy Your First App | `docs/index.md` | reference | fail | not applicable | [format-index.md](docs/format-index.md) |
| Platform Guides — Accounts, Billing, Teams & Domains | `docs/platform/index.md` | reference | pass | not applicable | — |
| Platform Overview | `docs/platform/platform.md` | explanation | pass | not applicable | — |
| What Is Code Capsules? PaaS Overview | `docs/platform/what-is-code-capsules.md` | explanation | pass | not applicable | — |
| App, Database & WordPress Hosting Products | `docs/products/index.md` | reference | pass | not applicable | — |
| Connect GitHub or GitLab | `docs/platform/account/connect-version-control.md` | how-to | pass | disabled | — |
| Add a Payment Method | `docs/platform/account/how-do-i-add-a-payment-method.md` | how-to | pass | disabled | — |
| Enable Two-Factor Authentication (2FA) | `docs/platform/account/how-do-i-enable-2fa.md` | how-to | pass | disabled | — |
| Reset Your Password | `docs/platform/account/how-do-i-reset-my-password.md` | how-to | pass | disabled | — |
| Change Billing Details | `docs/platform/billing/how-do-i-change-my-billing-details.md` | how-to | pass | disabled | — |
| View Your Invoices | `docs/platform/billing/how-do-i-view-my-invoices.md` | how-to | pass | disabled | — |
| How Does the Pricing Work? | `docs/platform/billing/how-does-the-pricing-work.md` | explanation | pass | not applicable | — |
| Add and Remove Spaces | `docs/platform/spaces/how-do-i-add-remove-a-space.md` | how-to | pass | disabled | — |
| What Is a Space? | `docs/platform/spaces/what-is-a-space.md` | explanation | pass | not applicable | — |
| Add and Remove Teams | `docs/platform/teams/how-do-i-add-remove-teams.md` | how-to | pass | disabled | — |
| Add Team Members to a Team | `docs/platform/teams/how-do-i-add-team-members.md` | how-to | pass | disabled | — |
| Share a Repo with a Team | `docs/platform/teams/share-a-repo-with-a-team.md` | how-to | pass | disabled | — |
| What Is a Team? | `docs/platform/teams/what-is-a-team.md` | explanation | pass | not applicable | — |
| Set Up Deployment Notifications | `docs/platform/capsules/deployment-notifications.md` | how-to | pass | disabled | — |
| Configure Health Checks | `docs/platform/capsules/health-checks.md` | how-to | pass | disabled | — |
| Add, Remove, and Stop Hosted Apps | `docs/platform/capsules/how-do-i-add-remove-stop-capsules.md` | how-to | pass | disabled | — |
| Add a Custom Domain to a Capsule | `docs/platform/capsules/how-to-add-a-custom-domain.md` | how-to | pass | disabled | — |
| Hosting Environments (Containers) Explained | `docs/platform/capsules/what-is-a-capsule.md` | explanation | pass | not applicable | — |
| Available Regions and Locations | `docs/platform/regions/what-regions-does-code-capsules-support.md` | reference | pass | not applicable | — |
| Add HTTP Basic Authentication | `docs/platform/security/basic-auth.md` | how-to | pass | disabled | — |
| Configure Git for Code Capsules | `docs/shared/configure-git-for-code-capsules.md` | how-to | fail | disabled | [format-configure-git-for-code-capsules.md](shared/format-configure-git-for-code-capsules.md) |
| Connect GitHub to Code Capsules | `docs/shared/connect-github.md` | how-to | pass | disabled | — |
| Create a Discord Bot | `docs/shared/create-a-discord-bot.md` | how-to | pass | disabled | — |
| Create a Space | `docs/shared/create-a-space.md` | how-to | pass | disabled | — |
| Create a Telegram Bot | `docs/shared/create-a-telegram-bot.md` | how-to | pass | disabled | — |
| Create a Code Capsules Account | `docs/shared/create-an-account.md` | how-to | pass | disabled | — |
| Fork a Demo Repository | `docs/shared/fork-a-demo-repo.md` | how-to | pass | disabled | — |
| Shared Prerequisites Reference | `docs/shared/index.md` | reference | pass | not applicable | — |
| Set Up a Twilio WhatsApp Sandbox | `docs/shared/set-up-twilio-whatsapp-sandbox.md` | how-to | pass | disabled | — |
| Host an Angular Application | `docs/frontend/angular.md` | how-to | pass | disabled | — |
| Frontend & Static Site Hosting | `docs/frontend/index.md` | reference | pass | not applicable | — |
| Host a Next.js App | `docs/frontend/next.js.md` | how-to | pass | disabled | — |
| Host a React Application | `docs/frontend/react.md` | how-to | pass | disabled | — |
| Host a Static HTML Website | `docs/frontend/static-html.md` | how-to | pass | disabled | — |
| Host a Svelte Application | `docs/frontend/svelte.md` | how-to | pass | disabled | — |
| Host a Vue Application | `docs/frontend/vue.md` | how-to | pass | disabled | — |
| Deploy a Container Frontend | `docs/products/frontend-capsule/container/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/frontend-capsule/container/format-deploy.md) |
| Frontend Framework Deployment Guides | `docs/products/frontend-capsule/deploy.md` | explanation | fail | not applicable | [format-deploy.md](products/frontend-capsule/format-deploy.md) |
| Deploy a Static Frontend | `docs/products/frontend-capsule/static/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/frontend-capsule/static/format-deploy.md) |
| Configure a Frontend App | `docs/products/frontend-capsule/configure.md` | how-to | fail | disabled | [format-configure.md](products/frontend-capsule/format-configure.md) |
| Add a Custom Domain to a Frontend App | `docs/products/frontend-capsule/custom-domains.md` | how-to | fail | disabled | [format-custom-domains.md](products/frontend-capsule/format-custom-domains.md) |
| Frontend App Hosting | `docs/products/frontend-capsule/index.md` | reference | pass | not applicable | — |
| View Logs for a Frontend App | `docs/products/frontend-capsule/logs.md` | how-to | pass | disabled | — |
| Monitor a Frontend App | `docs/products/frontend-capsule/monitor.md` | how-to | pass | disabled | — |
| Scale a Frontend App | `docs/products/frontend-capsule/scale.md` | how-to | pass | disabled | — |
| Static Frontend Free and Paid Plans | `docs/products/frontend-capsule/static/plans.md` | reference | fail | not applicable | [format-plans.md](products/frontend-capsule/static/format-plans.md) |
| Supported Frontend Frameworks and Runtimes | `docs/products/frontend-capsule/supported-runtimes.md` | how-to | fail | disabled | [format-supported-runtimes.md](products/frontend-capsule/format-supported-runtimes.md) |
| Deploy a Go Telegram Bot from GitHub | `docs/backend/go/go-telegram-bot.md` | how-to | fail | disabled | [format-go-telegram-bot.md](backend/go/format-go-telegram-bot.md) |
| Host a Go Application | `docs/backend/go/go.md` | how-to | pass | disabled | — |
| Host a Java Application | `docs/backend/java.md` | how-to | pass | disabled | — |
| Host an Express.js Application | `docs/backend/node.js/express.js.md` | how-to | pass | disabled | — |
| Host a Node.js Discord Bot | `docs/backend/node.js/node.js-discord-bot.md` | how-to | pass | disabled | — |
| Host a Node.js Telegram Bot | `docs/backend/node.js/node.js-telegram-bot.md` | how-to | pass | disabled | — |
| Deploy a Node.js Slack Bot | `docs/backend/node.js/slack-bot.md` | explanation | fail | not applicable | [format-slack-bot.md](backend/node.js/format-slack-bot.md) |
| Host a Django Application | `docs/backend/python/django.md` | how-to | pass | disabled | — |
| Host a Flask Application | `docs/backend/python/flask.md` | how-to | pass | disabled | — |
| Host a Python Discord Bot | `docs/backend/python/python-discord-bot.md` | how-to | pass | disabled | — |
| Host a Python Telegram Bot | `docs/backend/python/python-telegram-bot.md` | how-to | pass | disabled | — |
| Host a Python Application | `docs/backend/python/python.md` | how-to | pass | disabled | — |
| Host a Python WhatsApp Bot | `docs/backend/python/whatsapp-bot.md` | how-to | pass | disabled | — |
| Deploy a Backend Application | `docs/products/backend-capsule/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/backend-capsule/format-deploy.md) |
| Add a Procfile to a Backend Capsule | `docs/products/backend-capsule/add-procfile.md` | how-to | fail | disabled | [format-add-procfile.md](products/backend-capsule/format-add-procfile.md) |
| Configure a Backend Application | `docs/products/backend-capsule/configure.md` | how-to | fail | disabled | [format-configure.md](products/backend-capsule/format-configure.md) |
| Backend Application Hosting | `docs/products/backend-capsule/index.md` | reference | fail | not applicable | [format-index.md](products/backend-capsule/format-index.md) |
| View Logs for a Backend Application | `docs/products/backend-capsule/logs.md` | how-to | pass | disabled | — |
| Monitor a Backend Application | `docs/products/backend-capsule/monitor.md` | how-to | pass | disabled | — |
| Scale a Backend Application | `docs/products/backend-capsule/scale.md` | how-to | pass | disabled | — |
| Supported Backend Runtimes and Versions | `docs/products/backend-capsule/supported-runtimes.md` | how-to | fail | disabled | [format-supported-runtimes.md](products/backend-capsule/format-supported-runtimes.md) |
| Host a Caddy Site with Docker | `docs/backend/docker/caddy-docker-site.md` | how-to | pass | disabled | — |
| Host a Laravel Application with Docker | `docs/backend/docker/docker-laravel-app.md` | how-to | pass | disabled | — |
| Host a PHP Application with Docker | `docs/backend/docker/docker-php-app.md` | how-to | pass | disabled | — |
| Host a Flask Application with Docker | `docs/backend/docker/flask-docker-app.md` | how-to | pass | disabled | — |
| Docker Deployment Guides Reference | `docs/backend/docker/index.md` | reference | pass | not applicable | — |
| Deploy a Docker Capsule | `docs/products/docker-capsule/deploy.md` | reference | pass | not applicable | — |
| Deploy a Dockerfile From Git | `docs/products/docker-capsule/git/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/docker-capsule/git/format-deploy.md) |
| Deploy an Existing Docker Image | `docs/products/docker-capsule/image/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/docker-capsule/image/format-deploy.md) |
| Configure a Docker Container | `docs/products/docker-capsule/configure.md` | how-to | fail | disabled | [format-configure.md](products/docker-capsule/format-configure.md) |
| Docker Container Runtime Requirements | `docs/products/docker-capsule/container-requirements.md` | how-to | fail | disabled | [format-container-requirements.md](products/docker-capsule/format-container-requirements.md) |
| Manage Docker Container Deployments | `docs/products/docker-capsule/deployments.md` | how-to | fail | disabled | [format-deployments.md](products/docker-capsule/format-deployments.md) |
| Build Docker Images From Git | `docs/products/docker-capsule/git/builds.md` | how-to | fail | disabled | [format-builds.md](products/docker-capsule/git/format-builds.md) |
| Update a Deployed Docker Image | `docs/products/docker-capsule/image/updates.md` | how-to | fail | disabled | [format-updates.md](products/docker-capsule/image/format-updates.md) |
| Docker Container Hosting | `docs/products/docker-capsule/index.md` | reference | fail | not applicable | [format-index.md](products/docker-capsule/format-index.md) |
| View Logs for a Docker Container | `docs/products/docker-capsule/logs.md` | how-to | pass | disabled | — |
| Monitor a Docker Container | `docs/products/docker-capsule/monitor.md` | how-to | pass | disabled | — |
| Scale a Docker Container | `docs/products/docker-capsule/scale.md` | how-to | pass | disabled | — |
| Deploy Django with MongoDB | `docs/database/mongodb/django-+-mongodb.md` | how-to | fail | disabled | [format-django-+-mongodb.md](database/mongodb/format-django-+-mongodb.md) |
| Deploy Express with MongoDB | `docs/database/mongodb/express-+-mongodb.md` | how-to | fail | disabled | [format-express-+-mongodb.md](database/mongodb/format-express-+-mongodb.md) |
| Deploy Flask with MongoDB | `docs/database/mongodb/flask-+-mongodb.md` | how-to | fail | disabled | [format-flask-+-mongodb.md](database/mongodb/format-flask-+-mongodb.md) |
| Managed MongoDB Hosting | `docs/database/mongodb/index.md` | reference | fail | not applicable | [format-index.md](database/mongodb/format-index.md) |
| Deploy Django with MySQL | `docs/database/mysql/django-+-mysql.md` | how-to | fail | disabled | [format-django-+-mysql.md](database/mysql/format-django-+-mysql.md) |
| Deploy Flask with MySQL | `docs/database/mysql/flask-+-mysql.md` | how-to | fail | disabled | [format-flask-+-mysql.md](database/mysql/format-flask-+-mysql.md) |
| Managed MySQL Hosting | `docs/database/mysql/index.md` | reference | fail | not applicable | [format-index.md](database/mysql/format-index.md) |
| Deploy Java with MySQL | `docs/database/mysql/java-+-mysql.md` | how-to | fail | disabled | [format-java-+-mysql.md](database/mysql/format-java-+-mysql.md) |
| Managed PostgreSQL Hosting | `docs/database/postgres.md` | explanation | fail | not applicable | [format-postgres.md](database/format-postgres.md) |
| Managed Redis Hosting | `docs/database/redis.md` | how-to | fail | disabled | [format-redis.md](database/format-redis.md) |
| Deploy a DocumentDB Database | `docs/products/database-capsule/documentdb/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/database-capsule/documentdb/format-deploy.md) |
| Deploy and bind MongoDB | `docs/products/database-capsule/mongodb/deploy-and-bind.md` | how-to | pass | disabled | — |
| Deploy a MongoDB Database | `docs/products/database-capsule/mongodb/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/database-capsule/mongodb/format-deploy.md) |
| Deploy and bind MySQL | `docs/products/database-capsule/mysql/deploy-and-bind.md` | how-to | pass | disabled | — |
| Deploy a MySQL Database | `docs/products/database-capsule/mysql/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/database-capsule/mysql/format-deploy.md) |
| Deploy and bind PostgreSQL | `docs/products/database-capsule/postgresql/deploy-and-bind.md` | how-to | pass | disabled | — |
| Deploy a PostgreSQL Database | `docs/products/database-capsule/postgresql/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/database-capsule/postgresql/format-deploy.md) |
| Deploy and bind Redis | `docs/products/database-capsule/redis/deploy-and-bind.md` | how-to | pass | disabled | — |
| Deploy a Redis Database | `docs/products/database-capsule/redis/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/database-capsule/redis/format-deploy.md) |
| Managed Database Hosting — MySQL, MongoDB, Postgres & Redis | `docs/database/index.md` | reference | fail | not applicable | [format-index.md](database/format-index.md) |
| Back Up a DocumentDB Database | `docs/products/database-capsule/documentdb/backups.md` | how-to | pass | disabled | — |
| Configure a DocumentDB Database | `docs/products/database-capsule/documentdb/configure.md` | how-to | fail | disabled | [format-configure.md](products/database-capsule/documentdb/format-configure.md) |
| Connect to DocumentDB Locally | `docs/products/database-capsule/documentdb/connect-locally.md` | how-to | fail | disabled | [format-connect-locally.md](products/database-capsule/documentdb/format-connect-locally.md) |
| View Logs for a DocumentDB Database | `docs/products/database-capsule/documentdb/logs.md` | how-to | pass | disabled | — |
| Monitor a DocumentDB Database | `docs/products/database-capsule/documentdb/monitor.md` | how-to | pass | disabled | — |
| Scale a DocumentDB Database | `docs/products/database-capsule/documentdb/scale.md` | how-to | pass | disabled | — |
| Managed Database Hosting | `docs/products/database-capsule/index.md` | reference | fail | not applicable | [format-index.md](products/database-capsule/format-index.md) |
| Back Up a MongoDB Database | `docs/products/database-capsule/mongodb/backups.md` | how-to | pass | disabled | — |
| Configure a MongoDB Database | `docs/products/database-capsule/mongodb/configure.md` | how-to | fail | disabled | [format-configure.md](products/database-capsule/mongodb/format-configure.md) |
| Monitor a MongoDB Database | `docs/products/database-capsule/mongodb/monitor.md` | how-to | pass | disabled | — |
| Scale a MongoDB Database | `docs/products/database-capsule/mongodb/scale.md` | how-to | pass | disabled | — |
| Supported MongoDB Versions | `docs/products/database-capsule/mongodb/versions.md` | how-to | pass | disabled | — |
| Upgrade MongoDB 7.0 to 8.0 | `docs/products/database-capsule/mongodb/versions/upgrades/7-0-to-8-0.md` | how-to | pass | disabled | — |
| Upgrade MongoDB Versions | `docs/products/database-capsule/mongodb/versions/upgrades/index.md` | reference | fail | not applicable | [format-index.md](products/database-capsule/mongodb/versions/upgrades/format-index.md) |
| Back Up a MySQL Database | `docs/products/database-capsule/mysql/backups.md` | how-to | pass | disabled | — |
| Configure a MySQL Database | `docs/products/database-capsule/mysql/configure.md` | how-to | fail | disabled | [format-configure.md](products/database-capsule/mysql/format-configure.md) |
| Connect to MySQL Locally | `docs/products/database-capsule/mysql/connect-locally.md` | how-to | fail | disabled | [format-connect-locally.md](products/database-capsule/mysql/format-connect-locally.md) |
| View Logs for a MySQL Database | `docs/products/database-capsule/mysql/logs.md` | how-to | pass | disabled | — |
| Monitor a MySQL Database | `docs/products/database-capsule/mysql/monitor.md` | how-to | pass | disabled | — |
| Scale a MySQL Database | `docs/products/database-capsule/mysql/scale.md` | how-to | pass | disabled | — |
| Run Database Migrations | `docs/products/database-capsule/mysql/schema-migrations.md` | how-to | fail | disabled | [format-schema-migrations.md](products/database-capsule/mysql/format-schema-migrations.md) |
| Supported MySQL Versions | `docs/products/database-capsule/mysql/versions.md` | how-to | fail | disabled | [format-versions.md](products/database-capsule/mysql/format-versions.md) |
| Upgrade MySQL 5.7 to 8.0 | `docs/products/database-capsule/mysql/versions/upgrades/5-7-to-8-0.md` | how-to | pass | disabled | — |
| Upgrade MySQL Versions | `docs/products/database-capsule/mysql/versions/upgrades/index.md` | reference | fail | not applicable | [format-index.md](products/database-capsule/mysql/versions/upgrades/format-index.md) |
| Back Up a PostgreSQL Database | `docs/products/database-capsule/postgresql/backups.md` | how-to | pass | disabled | — |
| Configure a PostgreSQL Database | `docs/products/database-capsule/postgresql/configure.md` | how-to | fail | disabled | [format-configure.md](products/database-capsule/postgresql/format-configure.md) |
| Connect to PostgreSQL Locally | `docs/products/database-capsule/postgresql/connect-locally.md` | how-to | fail | disabled | [format-connect-locally.md](products/database-capsule/postgresql/format-connect-locally.md) |
| View Logs for a PostgreSQL Database | `docs/products/database-capsule/postgresql/logs.md` | how-to | pass | disabled | — |
| Monitor a PostgreSQL Database | `docs/products/database-capsule/postgresql/monitor.md` | how-to | pass | disabled | — |
| Scale a PostgreSQL Database | `docs/products/database-capsule/postgresql/scale.md` | how-to | pass | disabled | — |
| Configure a Redis Database | `docs/products/database-capsule/redis/configure.md` | how-to | fail | disabled | [format-configure.md](products/database-capsule/redis/format-configure.md) |
| Connect to Redis Locally | `docs/products/database-capsule/redis/connect-locally.md` | how-to | fail | disabled | [format-connect-locally.md](products/database-capsule/redis/format-connect-locally.md) |
| View Logs for a Redis Database | `docs/products/database-capsule/redis/logs.md` | how-to | pass | disabled | — |
| Monitor a Redis Database | `docs/products/database-capsule/redis/monitor.md` | how-to | pass | disabled | — |
| Scale a Redis Database | `docs/products/database-capsule/redis/scale.md` | how-to | pass | disabled | — |
| Use Persistent Storage | `docs/persistent-storage.md` | how-to | fail | disabled | [format-persistent-storage.md](docs/format-persistent-storage.md) |
| Deploy a Persistent Storage | `docs/products/storage-capsule/deploy.md` | explanation | fail | not applicable | [format-deploy.md](products/storage-capsule/format-deploy.md) |
| Back Up a Persistent Storage | `docs/products/storage-capsule/backups.md` | how-to | pass | disabled | — |
| Configure a Persistent Storage | `docs/products/storage-capsule/configure.md` | how-to | fail | disabled | [format-configure.md](products/storage-capsule/format-configure.md) |
| How Persistent Storage State Works | `docs/products/storage-capsule/how-state-works.md` | explanation | pass | not applicable | — |
| View Logs for a Persistent Storage | `docs/products/storage-capsule/logs.md` | how-to | pass | disabled | — |
| Monitor a Persistent Storage | `docs/products/storage-capsule/monitor.md` | how-to | pass | disabled | — |
| Scale a Persistent Storage | `docs/products/storage-capsule/scale.md` | how-to | pass | disabled | — |
| Deploy a WordPress Site | `docs/products/wordpress-capsule/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/wordpress-capsule/format-deploy.md) |
| Managed WordPress Hosting | `docs/wordpress.md` | explanation | fail | not applicable | [format-wordpress.md](docs/format-wordpress.md) |
| Back Up a WordPress Site | `docs/products/wordpress-capsule/backups.md` | how-to | pass | disabled | — |
| Enable WordPress Caching | `docs/products/wordpress-capsule/caching.md` | how-to | fail | disabled | [format-caching.md](products/wordpress-capsule/format-caching.md) |
| Configure a WordPress Site | `docs/products/wordpress-capsule/configure.md` | how-to | fail | disabled | [format-configure.md](products/wordpress-capsule/format-configure.md) |
| Schedule WordPress Cron Jobs | `docs/products/wordpress-capsule/cron.md` | how-to | fail | disabled | [format-cron.md](products/wordpress-capsule/format-cron.md) |
| View Logs for a WordPress Site | `docs/products/wordpress-capsule/logs.md` | how-to | pass | disabled | — |
| Monitor a WordPress Site | `docs/products/wordpress-capsule/monitor.md` | how-to | pass | disabled | — |
| Maximize WordPress Performance | `docs/products/wordpress-capsule/performance.md` | explanation | fail | not applicable | [format-performance.md](products/wordpress-capsule/format-performance.md) |
| Configure WordPress Routing | `docs/products/wordpress-capsule/routing.md` | explanation | fail | not applicable | [format-routing.md](products/wordpress-capsule/format-routing.md) |
| Scale a WordPress Site | `docs/products/wordpress-capsule/scale.md` | how-to | pass | disabled | — |
| Secure a WordPress Site | `docs/products/wordpress-capsule/security.md` | explanation | fail | not applicable | [format-security.md](products/wordpress-capsule/format-security.md) |
| Deploy an AI Agent | `docs/products/agent-capsule/deploy.md` | how-to | fail | disabled | [format-deploy.md](products/agent-capsule/format-deploy.md) |
| AI Agent Templates — Prebuilt Starting Points | `docs/products/agent-capsule/templates.md` | how-to | fail | disabled | [format-templates.md](products/agent-capsule/format-templates.md) |
| Add a Chat Interface to an AI Agent | `docs/products/agent-capsule/chat/index.md` | reference | fail | not applicable | [format-index.md](products/agent-capsule/chat/format-index.md) |
| Configure an AI Agent | `docs/products/agent-capsule/configure.md` | how-to | fail | disabled | [format-configure.md](products/agent-capsule/format-configure.md) |
| View Logs for an AI Agent | `docs/products/agent-capsule/logs.md` | how-to | pass | disabled | — |
| Monitor an AI Agent | `docs/products/agent-capsule/monitor.md` | how-to | pass | disabled | — |
| Scale an AI Agent | `docs/products/agent-capsule/scale.md` | how-to | pass | disabled | — |
| Deploy a Flask + HTMX App | `docs/full-stack/flask-+-htmx.md` | how-to | fail | disabled | [format-flask-+-htmx.md](full-stack/format-flask-+-htmx.md) |
| Full-Stack Application Hosting | `docs/full-stack/index.md` | reference | fail | not applicable | [format-index.md](full-stack/format-index.md) |
| Deploy a MEAN Stack Application | `docs/full-stack/mean-stack.md` | how-to | fail | disabled | [format-mean-stack.md](full-stack/format-mean-stack.md) |
| Deploy a MERN Stack Application | `docs/full-stack/mern-stack.md` | how-to | fail | disabled | [format-mern-stack.md](full-stack/format-mern-stack.md) |
| Next.js Full-Stack Hosting | `docs/full-stack/next.js/index.md` | reference | fail | not applicable | [format-index.md](full-stack/next.js/format-index.md) |
| Deploy Next.js with Express.js | `docs/full-stack/next.js/next.js-+-express.js.md` | explanation | fail | not applicable | [format-next.js-+-express.js.md](full-stack/next.js/format-next.js-+-express.js.md) |
| Deploy Next.js with MongoDB | `docs/full-stack/next.js/next.js-+-mongodb.md` | how-to | fail | disabled | [format-next.js-+-mongodb.md](full-stack/next.js/format-next.js-+-mongodb.md) |
| Deploy a File-Sharing Site with Flask and Caddy | `docs/full-stack/next.js/static-file-share-with-flask-and-caddy.md` | how-to | fail | disabled | [format-static-file-share-with-flask-and-caddy.md](full-stack/next.js/format-static-file-share-with-flask-and-caddy.md) |
| CLI Overview and Commands | `docs/cli/index.md` | reference | fail | not applicable | [format-index.md](cli/format-index.md) |
| CLI Global Options Reference | `docs/cli/readme/global-options.md` | reference | fail | not applicable | [format-global-options.md](cli/readme/format-global-options.md) |
| Getting Started With the CLI | `docs/cli/readme/getting-started/index.md` | reference | fail | not applicable | [format-index.md](cli/readme/getting-started/format-index.md) |
| Install and Use the CLI | `docs/cli/readme/getting-started/installation-and-usage.md` | how-to | fail | disabled | [format-installation-and-usage.md](cli/readme/getting-started/format-installation-and-usage.md) |
| CLI Prerequisites & Requirements | `docs/cli/readme/getting-started/prerequisites.md` | how-to | fail | disabled | [format-prerequisites.md](cli/readme/getting-started/format-prerequisites.md) |
| CLI Quick Start Guide | `docs/cli/readme/getting-started/quick-start.md` | how-to | fail | disabled | [format-quick-start.md](cli/readme/getting-started/format-quick-start.md) |
| CLI Commands Reference | `docs/cli/readme/commands/index.md` | reference | fail | not applicable | [format-index.md](cli/readme/commands/format-index.md) |
| Log In With the CLI (login command) | `docs/cli/readme/commands/login.md` | how-to | fail | disabled | [format-login.md](cli/readme/commands/format-login.md) |
| Log Out With the CLI (logout command) | `docs/cli/readme/commands/logout.md` | how-to | fail | disabled | [format-logout.md](cli/readme/commands/format-logout.md) |
| Proxy a Database Connection With the CLI | `docs/cli/readme/commands/proxy.md` | how-to | fail | disabled | [format-proxy.md](cli/readme/commands/format-proxy.md) |
| Check Your CLI Session (whoami command) | `docs/cli/readme/commands/whoami.md` | how-to | fail | disabled | [format-whoami.md](cli/readme/commands/format-whoami.md) |
| Sandbox Environments & Flavors | `docs/sandbox/environments.md` | how-to | fail | disabled | [format-environments.md](sandbox/format-environments.md) |
| AI Agent Sandboxes: Firecracker microVMs | `docs/sandbox/index.md` | reference | fail | not applicable | [format-index.md](sandbox/format-index.md) |
| Sandbox SDK Quick Start | `docs/sandbox/quickstart.md` | explanation | fail | not applicable | [format-quickstart.md](sandbox/format-quickstart.md) |
| Python Sandbox SDK Methods & Types | `docs/sandbox/python/api-reference.md` | reference | fail | not applicable | [format-api-reference.md](sandbox/python/format-api-reference.md) |
| Sandbox SDK for Python | `docs/sandbox/python/index.md` | explanation | fail | not applicable | [format-index.md](sandbox/python/format-index.md) |
| TypeScript Sandbox SDK Methods & Types | `docs/sandbox/typescript/api-reference.md` | reference | fail | not applicable | [format-api-reference.md](sandbox/typescript/format-api-reference.md) |
| Sandbox SDK for TypeScript & Node.js | `docs/sandbox/typescript/index.md` | reference | fail | not applicable | [format-index.md](sandbox/typescript/format-index.md) |
| Deploy Business Automation Agents | `docs/agentic-automation/deployment.md` | how-to | fail | disabled | [format-deployment.md](agentic-automation/format-deployment.md) |
| Design AI Agents for Business Automation | `docs/agentic-automation/designing-agents.md` | how-to | fail | disabled | [format-designing-agents.md](agentic-automation/format-designing-agents.md) |
| Agentic Automation for Business Processes | `docs/agentic-automation/index.md` | reference | fail | not applicable | [format-index.md](agentic-automation/format-index.md) |
| The Agentic Automation Framework | `docs/agentic-automation/the-framework.md` | explanation | fail | not applicable | [format-the-framework.md](agentic-automation/format-the-framework.md) |
| Why Business Automation Fails at Scale | `docs/agentic-automation/the-problem.md` | explanation | fail | not applicable | [format-the-problem.md](agentic-automation/format-the-problem.md) |
| Run a PaaS on AWS — Enterprise Deployment | `docs/enterprise/aws.md` | explanation | fail | not applicable | [format-aws.md](enterprise/format-aws.md) |
| Run a PaaS on Azure — Enterprise Deployment | `docs/enterprise/azure.md` | explanation | fail | not applicable | [format-azure.md](enterprise/format-azure.md) |
| Run a PaaS on GCP — Enterprise Deployment | `docs/enterprise/gcp.md` | explanation | fail | not applicable | [format-gcp.md](enterprise/format-gcp.md) |
| Enterprise PaaS on Your Own Cloud | `docs/enterprise/index.md` | explanation | fail | not applicable | [format-index.md](enterprise/format-index.md) |
| Run a PaaS on VMware — Enterprise Deployment | `docs/enterprise/vmware.md` | explanation | fail | not applicable | [format-vmware.md](enterprise/format-vmware.md) |
| Enterprise Clusters — Run the Platform on Your Own Cloud | `docs/products/enterprise-clusters/overview.md` | explanation | fail | not applicable | [format-overview.md](products/enterprise-clusters/format-overview.md) |
| MEAN/MERN/MEVN Project Structure | `docs/tutorials/best-practices-for-structuring-mean-mern-mevn-projects.md` | explanation | pass | not applicable | — |
| Generative Art App with Flask | `docs/tutorials/build-a-generative-art-application-with-pillow-flask-and-htmx.md` | tutorial | fail | disabled | [format-build-a-generative-art-application-with-pillow-flask-and-htmx.md](tutorials/format-build-a-generative-art-application-with-pillow-flask-and-htmx.md) |
| Build a MERN Job Board | `docs/tutorials/build-a-mern-job-board.md` | tutorial | fail | disabled | [format-build-a-mern-job-board.md](tutorials/format-build-a-mern-job-board.md) |
| Telegram Calendar Assistant Tutorial | `docs/tutorials/build-a-personal-calendar-assistant-with-telegram-and-agent-capsules.md` | tutorial | fail | disabled | [format-build-a-personal-calendar-assistant-with-telegram-and-agent-capsules.md](tutorials/format-build-a-personal-calendar-assistant-with-telegram-and-agent-capsules.md) |
| Build a Monitoring Slackbot | `docs/tutorials/build-a-slackbot-with-node.js-to-monitor-your-applications.md` | tutorial | fail | disabled | [format-build-a-slackbot-with-node.js-to-monitor-your-applications.md](tutorials/format-build-a-slackbot-with-node.js-to-monitor-your-applications.md) |
| PHP Book Recommendations App | `docs/tutorials/building-a-book-recommendations-app-with-php-sqlite-and-docker.md` | tutorial | fail | disabled | [format-building-a-book-recommendations-app-with-php-sqlite-and-docker.md](tutorials/format-building-a-book-recommendations-app-with-php-sqlite-and-docker.md) |
| Full Stack App with Express and HTMx | `docs/tutorials/building-a-full-stack-application-with-express-and-htmx.md` | tutorial | fail | disabled | [format-building-a-full-stack-application-with-express-and-htmx.md](tutorials/format-building-a-full-stack-application-with-express-and-htmx.md) |
| Full Stack App with Flask and HTMx | `docs/tutorials/building-a-full-stack-application-with-flask-and-htmx.md` | tutorial | fail | disabled | [format-building-a-full-stack-application-with-flask-and-htmx.md](tutorials/format-building-a-full-stack-application-with-flask-and-htmx.md) |
| Build a Game Catalogue API | `docs/tutorials/building-a-game-catalogue-api.md` | tutorial | fail | disabled | [format-building-a-game-catalogue-api.md](tutorials/format-building-a-game-catalogue-api.md) |
| Build a Web File Store on Code Capsules | `docs/tutorials/building-a-web-file-store.md` | tutorial | fail | disabled | [format-building-a-web-file-store.md](tutorials/format-building-a-web-file-store.md) |
| Host a Node.js Telegram Bot | `docs/tutorials/create-and-host-a-telegram-bot-with-node.js-on-code-capsules.md` | tutorial | fail | disabled | [format-create-and-host-a-telegram-bot-with-node.js-on-code-capsules.md](tutorials/format-create-and-host-a-telegram-bot-with-node.js-on-code-capsules.md) |
| Create and Host an API with Flask | `docs/tutorials/create-and-host-an-api-with-flask.md` | tutorial | fail | disabled | [format-create-and-host-an-api-with-flask.md](tutorials/format-create-and-host-an-api-with-flask.md) |
| Host a Go AI Telegram Bot | `docs/tutorials/create-and-host-go-ai-telegram-bot.md` | tutorial | fail | disabled | [format-create-and-host-go-ai-telegram-bot.md](tutorials/format-create-and-host-go-ai-telegram-bot.md) |
| Deploy an EmDash CMS Site | `docs/tutorials/deploy-emdash-on-code-capsules.md` | tutorial | fail | disabled | [format-deploy-emdash-on-code-capsules.md](tutorials/format-deploy-emdash-on-code-capsules.md) |
| Deploy Paperclip on Code Capsules | `docs/tutorials/deploy-paperclip-ai-orchestration-on-code-capsules.md` | tutorial | fail | disabled | [format-deploy-paperclip-ai-orchestration-on-code-capsules.md](tutorials/format-deploy-paperclip-ai-orchestration-on-code-capsules.md) |
| Getting Started with MEAN Stack | `docs/tutorials/getting-started-with-mean-stack-a-step-by-step-tutorial.md` | tutorial | fail | disabled | [format-getting-started-with-mean-stack-a-step-by-step-tutorial.md](tutorials/format-getting-started-with-mean-stack-a-step-by-step-tutorial.md) |
| Migrate From Heroku to Code Capsules: 2026 Guide | `docs/tutorials/heroku-migration-guide.md` | tutorial | fail | disabled | [format-heroku-migration-guide.md](tutorials/format-heroku-migration-guide.md) |
| Host a Python Telegram Bot | `docs/tutorials/how-to-create-and-host-a-telegram-bot-on-code-capsules.md` | tutorial | fail | disabled | [format-how-to-create-and-host-a-telegram-bot-on-code-capsules.md](tutorials/format-how-to-create-and-host-a-telegram-bot-on-code-capsules.md) |
| Host a Production WordPress Blog | `docs/tutorials/how-to-simply-host-a-production-wordpress-blog.md` | tutorial | fail | disabled | [format-how-to-simply-host-a-production-wordpress-blog.md](tutorials/format-how-to-simply-host-a-production-wordpress-blog.md) |
| Deployment Tutorials & Step-by-Step Guides | `docs/tutorials/index.md` | reference | pass | not applicable | — |
| Deploy a Nuxt 3 App with Nitro | `docs/tutorials/nuxt3-and-nitro.md` | tutorial | fail | disabled | [format-nuxt3-and-nitro.md](tutorials/format-nuxt3-and-nitro.md) |
| MERN Stack Performance Tips | `docs/tutorials/optimizing-performance-in-mern-stack-tips-and-techniques.md` | explanation | fail | not applicable | [format-optimizing-performance-in-mern-stack-tips-and-techniques.md](tutorials/format-optimizing-performance-in-mern-stack-tips-and-techniques.md) |
| Deploy with an AI Coding Agent | `docs/tutorials/use-codecapsules-with-an-agent.md` | tutorial | fail | disabled | [format-use-codecapsules-with-an-agent.md](tutorials/format-use-codecapsules-with-an-agent.md) |
| Video Tutorials — Deploy Apps Step by Step | `docs/tutorials/video-guides.md` | reference | pass | not applicable | — |
| White-Label Your App | `docs/tutorials/white-label-your-app-with-code-capsules.md` | tutorial | fail | disabled | [format-white-label-your-app-with-code-capsules.md](tutorials/format-white-label-your-app-with-code-capsules.md) |
| Set Up Deployment Notifications | `docs/products/alerting.md` | how-to | pass | disabled | — |