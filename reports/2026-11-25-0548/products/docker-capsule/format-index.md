# Format report — docker-capsule

- **Run timestamp:** 2026-11-25T05:48:48Z
- **Doc file:** `docs/products/docker-capsule/index.md`
- **Doc type:** reference
- **Template:** reference_format.md
- **Feature:** Docker Container Hosting
- **Goal:** Expect every link on the page to open an existing page
- **Format check:** fail

## Content list

1. (`build`) under `When to use a Docker Capsule` — - You maintain a `Dockerfile` in your repository
2. (`build`) under `When to use a Docker Capsule` — - You already publish a public container image, for example to Docker Hub or GitHub Container Registry
3. (`build`) under `When to use a Docker Capsule` — - You need a specific base image or system packages
4. (`build`) under `When to use a Docker Capsule` — - Your application has a multi-stage or non-standard build
5. (`build`) under `When to use a Docker Capsule` — - You want full control over how your capsule is built and run
6. (`build`) under `Documentation` — - [Container requirements](/products/docker-capsule/container-requirements/) — what every container needs to run on Code
7. (`build`) under `Documentation` — - **From Git**
8. (`build`) under `Documentation` — - **From an existing image**
9. (`build`) under `Documentation` — - [Deployments](/products/docker-capsule/deployments/) — change the source, set the deployment strategy, view build logs
10. (`build`) under `Documentation` — - [Configure](/products/docker-capsule/configure/) — network port, environment variables, data capsules, and (for Git de
11. (`build`) under `Documentation` — - [Scale](/products/docker-capsule/scale/) — allocate CPU, memory, and replicas as traffic grows
12. (`build`) under `Documentation` — - [Monitor](/products/docker-capsule/monitor/) — view metrics and performance data
13. (`build`) under `Documentation` — - [Logs](/products/docker-capsule/logs/) — view runtime and access logs
14. (`build`) under `Documentation` — - [Notifications](/products/alerting/) — set up notifications for capsule events
15. (`build`) under `Guides` — - [Flask Docker App](/backend/docker/flask-docker-app/)
16. (`build`) under `Guides` — - [Docker PHP App](/backend/docker/docker-php-app/)
17. (`build`) under `Guides` — - [Docker Laravel App](/backend/docker/docker-laravel-app/)
18. (`build`) under `Guides` — - [Caddy Docker Site](/backend/docker/caddy-docker-site/)
19. (`build`) under `Guides` — - [All Docker deployment guides](/backend/docker/)

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

(Rewrite `docs/products/docker-capsule/index.md` to match reference_format.md — see tickets above.)
