---
slug: "/full-stack/next.js/static-file-share-with-flask-and-caddy"
title: "How to Host a Flask and Caddy File Share"
description: >-
  Deploy a file-sharing site on Code Capsules using Flask for uploads and Caddy
  to serve files. When you finish, both capsule URLs serve the demo workflow.
sidebar_label: "Flask + Caddy file share"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Host Your Flask and Caddy File Share

Deploy a file-sharing site with Persistent Storage, a Flask Backend Capsule, and a Caddy Docker Capsule. When you finish, uploads work in Flask and downloads work through Caddy.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/docs/shared/create-an-account', label: '👤 Code Capsules account', description: 'Sign up and open your Personal Team.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork flask-file-uploads', description: 'Fork codecapsules-io/flask-file-uploads on GitHub.'},
    {type: 'link', href: '/docs/shared/fork-a-demo-repo', label: '🍴 Fork caddy-file-server', description: 'Fork codecapsules-io/caddy-file-server on GitHub.'},
    {type: 'link', href: '/docs/shared/create-a-space', label: '📦 A Space', description: 'Create a Space to deploy into.'},
    {type: 'link', href: '/docs/shared/configure-git-for-code-capsules', label: '🔌 GitHub connected', description: 'Link GitHub so both forks appear in the wizard.'},
  ]}
/>

## Deploy your file share

1. **Create the Persistent Storage capsule**

   In your Space, click **+** and select **New Capsule**. On **Capsule Details**, choose **Persistent Storage**, your Team, and Space. On **Plan**, choose a plan. Click **Create Capsule**.

2. **Create the Flask Backend capsule**

   Click **+** and choose **Backend Capsule**, your Team, and Space. On **Plan**, choose a plan. On **Configure**, select `codecapsules-io/flask-file-uploads` and branch `main`. Leave **Run Command** blank. Click **Create Capsule**.

3. **Create the Caddy Docker capsule**

   Click **+** and choose **Docker Capsule**, your Team, and Space. On **Configure**, select `codecapsules-io/caddy-file-server` and branch `main`. Set **Dockerfile location** to `Dockerfile`. Click **Create Capsule**.

4. **Wait for builds**

   On each capsule **Deploy** tab, open **Builds** and wait for the first build to finish.

5. **Bind storage to both capsules**

   On the Flask and Caddy capsules **Config** tabs, bind each capsule to the Persistent Storage capsule under **Data capsules**.

6. **Open the applications**

   Open the public URL on the Flask capsule to upload files. Open the Caddy capsule URL to list and download files.

## Troubleshooting

<details style={{'--ifm-alert-background-color': 'var(--ifm-color-emphasis-100)', '--ifm-alert-background-color-highlight': 'var(--ifm-color-emphasis-200)', '--ifm-alert-border-color': 'var(--ifm-color-warning)', '--ifm-alert-foreground-color': 'var(--ifm-font-color-base)'}}>
<summary>The UI does not match these steps</summary>

Confirm you are signed in to the correct Team and Space, then run through the steps again from the start.

</details>