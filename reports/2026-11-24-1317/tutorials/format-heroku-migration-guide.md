# Format report — heroku-migration-guide

- **Run:** 2026-11-24-1317
- **Doc file:** `docs/tutorials/heroku-migration-guide.md`
- **Doc type:** tutorial
- **Template:** tutorial_format.md
- **Feature:** Migrate From Heroku to Code Capsules: 2026 Guide
- **Goal:** Expect the guide's described outcome on test-platform.codecapsules.io
- **Format check:** fail

## Content list

1. (`build`) under `Why Developers Are Migrating From Heroku in 2026` — - **Feature freeze.** [Heroku is no longer adding new features](https://www.theregister.com/2026/02/09/heroku_freeze) as
2. (`build`) under `Why Developers Are Migrating From Heroku in 2026` — - **No free tier.** Heroku removed its free plans in November 2022. The cheapest option today is the $5/month Eco plan, 
3. (`build`) under `Why Developers Are Migrating From Heroku in 2026` — - **A steep pricing ladder.** The always-on Basic dyno is $7/month with 0.5 GB RAM, but the next step up is Standard-1X 
4. (`build`) under `Why Developers Are Migrating From Heroku in 2026` — - [How to Migrate from Heroku to Code Capsules](/tutorials/heroku-migration-guide/)
5. (`build`) under `Document Your Heroku System` — - Using either the Heroku CLI or web interface, list all the apps you want to migrate.
6. (`build`) under `Document Your Heroku System` — - Check each app's **Resources** tab (or `Procfile` in your repository) to see whether the dyno is `web`, which has a pu
7. (`build`) under `Document Your Heroku System` — - List all addons for each app, like databases and schedulers, and their connection settings.
8. (`build`) under `Document Your Heroku System` — - Note the exact URLs, domains, and subdomains of each app and addon.
9. (`build`) under `Document Your Heroku System` — - Copy the settings (config vars) into a spreadsheet.
10. (`build`) under `Document Your Heroku System` — - Examine the deployment process of each app. If you are migrating to Code Capsules, deployment is done by pushing to a 
11. (`build`) under `Document Your Heroku System` — - Create a database on your new host. Deploy your applications to the new host as well.
12. (`build`) under `Document Your Heroku System` — - Back up and restore static tables (enumerations) to the new database. These tables won't change, so you can migrate th
13. (`build`) under `Document Your Heroku System` — - Point your new application to the database on the old host, but write new data to both databases — new and old. This a
14. (`build`) under `An Example Full-Stack Application` — - A static web server to serve the website (or a dynamic host in something like PHP or Node.js)
15. (`build`) under `An Example Full-Stack Application` — - A backend web service that the website talks to
16. (`build`) under `An Example Full-Stack Application` — - A database, where the web service stores user data
17. (`build`) under `An Example Full-Stack Application` — - Another backend service, such as a cron job (scheduled task) that processes database data, an analytics service, or an
18. (`build`) under `An Example Full-Stack Application` — - Object storage, for storing images
19. (`build`) under `An Example Full-Stack Application` — - QA versions of the live components
20. (`build`) under `An Example Full-Stack Application` — - A message queue, like RabbitMQ
21. (`build`) under `An Example Full-Stack Application` — - An in-memory cache, like Redis
22. (`build`) under `The Frontend` — - **[API (HTTP calls)](https://devcenter.heroku.com/articles/build-and-release-using-the-api):** The simplest solution. 
23. (`build`) under `The Frontend` — - **CLI:** By downloading and running the Heroku CLI in your terminal, you can deploy your app to Heroku in three ways:
24. (`build`) under `The Frontend` — - **GitHub:** Set Heroku to pull from your repository when you push to GitHub. (GitLab, Bitbucket, and Codeberg are not 
25. (`build`) under `The Cron Job` — - You need to specify the dyno type as a `worker` not a `web`.
26. (`build`) under `The Cron Job` — - You need to attach the app to the existing database addon, instead of creating a new one.
27. (`build`) under `The Cron Job` — - You need to add a scheduler addon to the app.
28. (`build`) under `The Backend and Frontend` — - **Pricing**: A frontend Capsule's minimum configurable CPU resources (and therefore cost) are lower than a backend Cap
29. (`build`) under `The Backend and Frontend` — - **Internal networking**: A backend Capsule can access a database Capsule directly, while a frontend Capsule can't, and
30. (`build`) under `The Cron job` — - **Memory persistence**: If your Capsule restarts during a task, the schedule is lost until the process starts again.
31. (`build`) under `The Cron job` — - **Scaling**: If you scale your app to more than one Capsule, the schedule will run on every container simultaneously, 
32. (`build`) under `The Cron job` — - **Missed executions**: If the Capsule is down at the exact second a job is scheduled, the scheduler will not run misse
33. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **Object storage (file storage)**: Object storage, like AWS S3, is used for storing binary files like photos, for whic
34. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **SSL/TLS**: All Capsules are served over HTTPS automatically with managed TLS certificates. If you use a custom domai
35. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **Domains**: Each Capsule exposes a URL in the **Domains** tab you can use to create a CNAME record with your DNS prov
36. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **QA environments**: Code Capsules uses Git branches for environment management — point a separate Capsule at your QA 
37. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **Deployments**: Code Capsules builds and deploys automatically when you push to your linked branch. You can choose be
38. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **CLI automation**: Code Capsules provides a web interface for infrastructure management, along with a [CLI](/cli/read
39. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **Monitoring, logs, and dashboards**: Each Capsule provides built-in log streaming, resource usage graphs (CPU, memory
40. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **Backups**: You can configure a Code Capsules database to automatically backup your database regularly, and you can c
41. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **Scaling**: You can adjust the RAM, CPU, disk space, and number of instances for each Capsule to match your workload.
42. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **Message queues and caches**: Components like RabbitMQ and Redis can be deployed in their own backend Capsule, which 
43. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **Custom Docker containers**: If your Heroku app uses a framework beyond Code Capsules's built-in options, you can dep
44. (`build`) under `Other Components and Cross-Cutting Concerns in Code Capsules` — - **Running multiple applications in a Capsule**: If you want to run two different services in one Capsule, like a PHP a
45. (`build`) under `Your Migration Checklist` — - [ ] List every Heroku app you're migrating, with its dyno type (`web` or `worker`), size, and framework ([Document You
46. (`build`) under `Your Migration Checklist` — - [ ] List all addons (databases, schedulers) and their connection settings
47. (`build`) under `Your Migration Checklist` — - [ ] Copy all config vars into a spreadsheet
48. (`build`) under `Your Migration Checklist` — - [ ] Note every URL, domain, and subdomain in use
49. (`build`) under `Your Migration Checklist` — - [ ] Organize repositories so each app and environment can deploy from its own branch or folder
50. (`build`) under `Your Migration Checklist` — - [ ] Decide your database strategy: offline cutover or dual-write ([details](#document-your-heroku-system))
51. (`build`) under `Your Migration Checklist` — - [ ] Create a Space and one Capsule per Heroku component ([Creating the App on Code Capsules](#creating-the-app-on-code
52. (`build`) under `Your Migration Checklist` — - [ ] Deploy the database Capsule first, then export from Heroku and restore through the CLI proxy ([The Database](#the-
53. (`build`) under `Your Migration Checklist` — - [ ] Deploy backend and frontend Capsules, set their environment variables, and wire the URLs both ways ([The Backend a
54. (`build`) under `Your Migration Checklist` — - [ ] Move scheduled jobs to in-app scheduling or an external cron service ([The Cron job](#the-cron-job-1))
55. (`build`) under `Your Migration Checklist` — - [ ] Recreate any object storage, queues, or caches ([Other Components](#other-components-and-cross-cutting-concerns-in
56. (`build`) under `Your Migration Checklist` — - [ ] Delete Heroku `Procfile`s from your repositories
57. (`build`) under `Your Migration Checklist` — - [ ] Verify every component works on its Code Capsules URL (logs, health, test transactions)
58. (`build`) under `Your Migration Checklist` — - [ ] Point your custom domains at the new Capsules via CNAME records and confirm TLS certificates issue
59. (`build`) under `Your Migration Checklist` — - [ ] Do a final database sync if you used the offline-cutover approach
60. (`build`) under `Your Migration Checklist` — - [ ] Configure database backups on Code Capsules
61. (`build`) under `Your Migration Checklist` — - [ ] Watch logs and resource graphs for a full traffic cycle before decommissioning
62. (`build`) under `Your Migration Checklist` — - [ ] Downgrade, then delete, the old Heroku resources once you're confident

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | pass | — |
| Links | pass | OK |
| Format and style | fail | See tickets |

## Tickets

### heroku-migration-guide-1
- **Type:** Format fix
- **Title:** Add Part N sections
- **Problem:** Tutorial has no `## Part N:` sections.
- **Rule:** tutorial_format.md
- **Change:** Split work into parts with checkpoints.
- **Done when:** At least one Part section exists.

### heroku-migration-guide-2
- **Type:** Format fix
- **Title:** Add Summary section
- **Problem:** Tutorial missing ## Summary.
- **Rule:** tutorial_format.md
- **Change:** Add summary of what reader built.
- **Done when:** Summary section present.

### heroku-migration-guide-3
- **Type:** Format fix
- **Title:** Add Next steps section
- **Problem:** Tutorial missing ## Next steps.
- **Rule:** tutorial_format.md
- **Change:** Add DocCardList with 2–3 links.
- **Done when:** Next steps present.

### heroku-migration-guide-4
- **Type:** Format fix
- **Title:** Remove simply/just/easy
- **Problem:** Doc uses discouraged words (simply, just, or easy).
- **Rule:** writing_style.md Words
- **Change:** Rewrite those sentences.
- **Done when:** No simply/just/easy in prose.

## Proposed outline

(Rewrite `docs/tutorials/heroku-migration-guide.md` to match tutorial_format.md — see tickets above.)
