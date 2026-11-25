# Format report — database-capsule

- **Run timestamp:** 2026-11-25T06:57:29Z
- **Doc file:** `docs/products/database-capsule/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Managed Database Hosting
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`build`) under `MySQL` — - [Deploy](/products/database-capsule/mysql/deploy/) — framework guides and getting started
2. (`build`) under `MySQL` — - [Configure](/products/database-capsule/mysql/configure/) — connection details, SQL modes, and version settings
3. (`build`) under `MySQL` — - [Connect Locally](/products/database-capsule/mysql/connect-locally/) — connect from your laptop via CLI proxy
4. (`build`) under `MySQL` — - [Versions](/products/database-capsule/mysql/versions/) — supported versions and upgrade guides
5. (`build`) under `MySQL` — - [Schema Migrations](/products/database-capsule/mysql/schema-migrations/) — application schema migrations with db-migra
6. (`build`) under `MySQL` — - [Scale](/products/database-capsule/mysql/scale/) — allocate resources as your workload grows
7. (`build`) under `MySQL` — - [Backups](/products/database-capsule/mysql/backups/) — manual and scheduled backups
8. (`build`) under `MySQL` — - [Monitor](/products/database-capsule/mysql/monitor/) — view metrics and performance data
9. (`build`) under `MySQL` — - [Logs](/products/database-capsule/mysql/logs/) — access system logs
10. (`build`) under `MySQL` — - [Alerting](/products/alerting/) — set up notifications for capsule events
11. (`build`) under `MongoDB` — - [Deploy](/products/database-capsule/mongodb/deploy/) — create a capsule and framework guides
12. (`build`) under `MongoDB` — - [Configure](/products/database-capsule/mongodb/configure/) — connection details and version settings
13. (`build`) under `MongoDB` — - [Versions](/products/database-capsule/mongodb/versions/) — supported versions and upgrade guides
14. (`build`) under `MongoDB` — - [Scale](/products/database-capsule/mongodb/scale/) — change instance size, storage, replicas, or upgrade Shared to Ded
15. (`build`) under `MongoDB` — - [Backups](/products/database-capsule/mongodb/backups/) — manual and scheduled backups
16. (`build`) under `MongoDB` — - [Monitor](/products/database-capsule/mongodb/monitor/) — view usage and metrics
17. (`build`) under `MongoDB` — - [Alerting](/products/alerting/) — set up notifications for capsule events
18. (`build`) under `DocumentDB` — - [Deploy](/products/database-capsule/documentdb/deploy/) — create a capsule and connect applications
19. (`build`) under `DocumentDB` — - [Configure](/products/database-capsule/documentdb/configure/) — connection details and binding to application capsules
20. (`build`) under `DocumentDB` — - [Connect Locally](/products/database-capsule/documentdb/connect-locally/) — connect from your laptop via CLI proxy
21. (`build`) under `DocumentDB` — - [Scale](/products/database-capsule/documentdb/scale/) — allocate resources as your workload grows
22. (`build`) under `DocumentDB` — - [Backups](/products/database-capsule/documentdb/backups/) — manual and scheduled backups
23. (`build`) under `DocumentDB` — - [Monitor](/products/database-capsule/documentdb/monitor/) — view metrics and usage data
24. (`build`) under `DocumentDB` — - [Logs](/products/database-capsule/documentdb/logs/) — access system logs
25. (`build`) under `DocumentDB` — - [Alerting](/products/alerting/) — set up notifications for capsule events
26. (`build`) under `PostgreSQL` — - [Deploy](/products/database-capsule/postgresql/deploy/) — getting started
27. (`build`) under `PostgreSQL` — - [Configure](/products/database-capsule/postgresql/configure/) — connection details
28. (`build`) under `PostgreSQL` — - [Connect Locally](/products/database-capsule/postgresql/connect-locally/) — connect from your laptop via CLI proxy
29. (`build`) under `PostgreSQL` — - [Scale](/products/database-capsule/postgresql/scale/) — allocate resources as your workload grows
30. (`build`) under `PostgreSQL` — - [Backups](/products/database-capsule/postgresql/backups/) — manual and scheduled backups
31. (`build`) under `PostgreSQL` — - [Monitor](/products/database-capsule/postgresql/monitor/) — view metrics and performance data
32. (`build`) under `PostgreSQL` — - [Logs](/products/database-capsule/postgresql/logs/) — access system logs
33. (`build`) under `PostgreSQL` — - [Alerting](/products/alerting/) — set up notifications for capsule events
34. (`build`) under `Redis` — - [Deploy](/products/database-capsule/redis/deploy/) — getting started
35. (`build`) under `Redis` — - [Configure](/products/database-capsule/redis/configure/) — connection details
36. (`build`) under `Redis` — - [Connect Locally](/products/database-capsule/redis/connect-locally/) — connect from your laptop via CLI proxy
37. (`build`) under `Redis` — - [Scale](/products/database-capsule/redis/scale/) — allocate resources as your workload grows
38. (`build`) under `Redis` — - [Monitor](/products/database-capsule/redis/monitor/) — view metrics and performance data
39. (`build`) under `Redis` — - [Logs](/products/database-capsule/redis/logs/) — access system logs
40. (`build`) under `Redis` — - [Alerting](/products/alerting/) — set up notifications for capsule events
41. (`build`) under `Deployment Guides` — - [All Database Deployment Guides](/database/)

## Check results

| Check | Status | Reason |
|-------|--------|--------|
| Content | fail | See tickets |
| Prerequisites | not applicable | — |
| Links | fail | See tickets |
| Format and style | pass | OK |

## Tickets

### index-1
- **Type:** Format fix
- **Title:** Add Overview section
- **Problem:** Reference missing ## Overview.
- **Rule:** reference_format.md
- **Change:** Add overview facts.
- **Done when:** Overview present.

### index-2
- **Type:** Format fix
- **Title:** Add Related section
- **Problem:** Reference missing ## Related.
- **Rule:** reference_format.md
- **Change:** Add DocCardList Related with 2+ cards.
- **Done when:** Related with 2+ links.

### index-3
- **Type:** Format fix
- **Title:** Add two Related links
- **Problem:** Related has 0 cards (need 2+).
- **Rule:** reference_format.md Related
- **Change:** Add DocCardList with at least two cards.
- **Done when:** Related lists 2+ valid links.

## Proposed outline

(Rewrite `docs/products/database-capsule/index.md` to match reference_format.md — see tickets above.)
