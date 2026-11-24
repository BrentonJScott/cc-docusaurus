# Walkthrough: configure (docker-capsule)

- **Run:** 2026-11-24T11:09:00+02:00
- **Guide:** `docs/products/docker-capsule/configure.md`
- **Feature:** Configure Docker capsule
- **Goal:** Expect to see updated capsule parameters and environment variables saved and a data capsule connected
- **Environment:** https://test-platform.codecapsules.io
- **Capsule:** `simple-docker` — Docker Capsule in space **to-delete** (image deploy, capsule id `1c95fd7c-3885-fc26-737d-a3a5caca9af9`)
- **Goal reached:** **no**

## Actions taken

1. **(not testable)** Prerequisites — used existing image-based `simple-docker`; capsule **stopped**.
2. Opened the **Config** tab.
3. In **Capsule Parameters**, looked for **Build** with **Docker File** and **Docker Build Context**; checked **Runtime** (network port, health check).
4. Opened environment-variable controls (**show**, **Key/Val Editor**); checked for platform **`PORT`**.
5. Opened **Data capsules**; attempted to confirm bind/connection to a data capsule (not completed).

## Guide alignment

| Action | Status | Guide expects | What happened | Screenshot |
|--------|--------|---------------|---------------|------------|
| 1 | not testable | Docker Capsule in a Space | Image-based `simple-docker` | — |
| 2 | pass | **Config** tab | **Config** loads | — |
| 3 | fail (partial) | **Build** + **Runtime** under **Capsule Parameters** | **Runtime** read view shows Network Port `3000`, Health check **Automatic**, endpoint `/`; no **Build** row with **Docker File** / **Docker Build Context** (correct for image deploy per guide prose, but walkthrough used only image capsule) | — |
| 4 | fail (partial) | Env vars saved; **`PORT`** injected per runtime port | **Key/Val Editor** / **show** present; visible table shows **`APP_URL`** only, not **`PORT`** | — |
| 5 | fail (partial) | Data capsule connected | **Data capsules** with **View** / **Bind**; bind not completed — goal not met | — |

## Mismatches / issues

1. **Build settings (action 3):** Guide’s parameter table implies **Build** is always visible; **Build** is Git-only — image capsules show **Runtime** only. Walkthrough did not use a Git-based Docker capsule for full parameter save path.
2. **`PORT` env (action 4):** Guide says `PORT` is injected; not listed in the env table shown during the run.
3. **Data bind (action 5):** Connection/bind flow not finished; capsule **stopped**.

## Suggested fixes

- In **Capsule parameters**, lead with deploy type: image capsules see **Runtime** only; Git capsules see **Build** + **Runtime**.
- Document where **`PORT`** appears (runtime injection vs env table visibility).
- Call out **running** state or prerequisites before binding **Data capsules**.