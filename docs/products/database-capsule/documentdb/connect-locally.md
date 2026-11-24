---
slug: "/products/database-capsule/documentdb/connect-locally"
title: "How to Connect to DocumentDB Locally"
description: >-
  Connect to a DocumentDB Capsule from your local machine with the Code Capsules CLI proxy and mongosh.
sidebar_label: "Connect Locally"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Connect to Your DocumentDB From Your Machine

Connect to a private DocumentDB Capsule with the CLI proxy and `mongosh`.

## Prerequisites

<DocCardList
  items={[
    {type: 'link', href: '/cli/readme/getting-started/installation-and-usage', label: '🛠️ Code Capsules CLI', description: 'Install and run codecaps login.'},
    {type: 'link', href: '/products/database-capsule/documentdb/deploy', label: '🛠️ DocumentDB Capsule', description: 'Create the Capsule first.'},
  ]}
/>

## Connect to your DocumentDB locally

1. **Install mongosh**

   Install MongoDB Shell (`mongosh`) for your platform.

2. **Open a proxy tunnel**

   Run the proxy command from **Details**, for example on port `27017`.

3. **Copy credentials**

   Reveal connection details on **Details**.

4. **Connect with mongosh**

   Run `mongosh "mongodb://<username>:<password>@127.0.0.1:27017/<database>?tls=true&tlsAllowInvalidCertificates=true"`.

## Troubleshooting

<details>
<summary>TLS handshake errors</summary>

Include `tls=true&tlsAllowInvalidCertificates=true` in the connection string when using the local proxy.

</details>