---
slug: "/sandbox/environments"
title: "Sandbox Environments & Flavors"
description: "Available sandbox flavors and what's preinstalled in each Linux environment."
sidebar_label: "Environments"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Environments

Pick a sandbox flavor and resource limits that match your agent workload.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sandbox API access (private beta waitlist).'},
    {type: 'link', href: '/sandbox/quickstart', label: '🚀 Quick start', description: 'Install an SDK and API key.'},
  ]}
/>

## Choose your sandbox flavor

1. **Review available flavors**

   | Flavor | Preinstalled |
   |--------|-------------|
   | `python-3.12` | Python 3.12, pip, numpy, pandas, requests, git |
   | `node-20` | Node.js 20, npm, yarn, git |
   | `browser` | Chromium, Playwright, xvfb, Python 3.12 |
   | `full` | Everything above + jq, ffmpeg, ImageMagick |

   The default flavor is `python-3.12`.

2. **Set memory, CPU, and TTL**

   | Setting | Default | Maximum |
   |---------|---------|---------|
   | Memory | 512 MB | 8192 MB |
   | vCPU | 1 | 4 |
   | TTL | 60 min | 480 min |

3. **Pass options when creating a sandbox**

   Use `flavor`, `memory`, `cpu`, and `ttl` in `Sandbox.create()` (TypeScript) or `Sandbox.create("flavor", memory=…)` (Python). Install extra packages at runtime with `exec()` — they last for the lifetime of that sandbox only.

## Troubleshooting

<details>
<summary>A command fails because a package is missing</summary>

Run `pip install`, `npm install`, or `apt-get install` inside the sandbox with `exec()`. Sandboxes start from a clean image on every create.

</details>