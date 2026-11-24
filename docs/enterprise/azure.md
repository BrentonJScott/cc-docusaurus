---
slug: "/enterprise/azure"
description: "Deploy Code Capsules on Microsoft Azure with dedicated enterprise clusters for your organisation."
title: "Run a PaaS on Azure — Enterprise Deployment"
sidebar_label: "Azure"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Run Code Capsules on Your Azure

Enterprise on Azure runs the Code Capsules platform inside your Microsoft Azure subscription.

## Overview

Enterprise on Azure is coming soon. Dedicated clusters will target your Azure resource groups and networking when the offering is generally available.

## Why it matters

Azure enterprise deployment fits organisations that mandate Microsoft cloud, Azure Active Directory integration, or ExpressRoute connectivity to on-premises systems.

## How it works

Platform components install into Azure resources you control. Capsules run in your subscription; Code Capsules manages the PaaS layer and coordinated upgrades.

## When to use it

Select Azure enterprise when Azure is your primary cloud, when compliance requires customer-managed subscriptions, or when you need private links to other Azure services. Compare with [Enterprise on AWS](/enterprise/aws/) or hosted Code Capsules for simpler setups.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/enterprise', label: '💡 Enterprise overview', description: 'All enterprise cloud options.'},
    {type: 'link', href: '/products/enterprise-clusters/overview', label: '📋 Enterprise clusters', description: 'Product reference for dedicated clusters.'},
    {type: 'link', href: '/enterprise/gcp', label: '☁️ Enterprise on GCP', description: 'Alternative enterprise cloud.'},
  ]}
/>