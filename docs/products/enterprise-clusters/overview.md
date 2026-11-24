---
slug: "/products/enterprise-clusters/overview"
title: "Enterprise Clusters — Run the Platform on Your Own Cloud"
description: >-
  Deploy Code Capsules on your own cloud infrastructure with dedicated enterprise clusters for AWS, Azure, GCP, and VMware.
sidebar_label: Overview
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Enterprise Clusters, on Your Cloud

Deploy Code Capsules on your own cloud infrastructure with dedicated enterprise clusters for AWS, Azure, GCP, and VMware.

## Overview

Enterprise clusters run the Code Capsules platform inside your AWS, Azure, GCP, or VMware environment. **Enterprise on your own cloud is coming soon** on the hosted product; the sections below describe what those clusters provide when they are available.

## Why it matters

Enterprise clusters keep apps and data in your cloud account for residency, compliance, and existing cloud spend. Platform operations stay consistent with the hosted Code Capsules experience while infrastructure runs on hardware you control.

## How it works

Each enterprise offering maps to a provider-specific cluster type. Code Capsules manages the control plane and capsule lifecycle; compute, networking, and storage run in your account according to the provider guide.

| Provider | Guide |
| --- | --- |
| AWS | [Enterprise on AWS](/enterprise/aws/) |
| Azure | [Enterprise on Azure](/enterprise/azure/) |
| Google Cloud | [Enterprise on GCP](/enterprise/gcp/) |
| VMware | [Enterprise on VMware](/enterprise/vmware/) |

## When to use it

Use this approach when you must meet data residency or compliance rules in your own cloud, or when central IT requires workloads to stay off the shared hosted platform. Use the standard hosted platform when you want the fastest path to production without operating cluster infrastructure.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/enterprise', label: '📋 Enterprise hosting', description: 'Compare provider options.'},
    {type: 'link', href: '/platform/what-is-code-capsules', label: '💡 What is Code Capsules', description: 'How the hosted platform works.'},
    {type: 'link', href: '/enterprise/aws', label: '📋 Enterprise on AWS', description: 'AWS cluster overview.'},
    {type: 'link', href: '/enterprise/azure', label: '📋 Enterprise on Azure', description: 'Azure cluster overview.'},
  ]}
/>