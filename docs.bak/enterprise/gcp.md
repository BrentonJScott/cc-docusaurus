---
slug: "/enterprise/gcp"
description: "Deploy Code Capsules on Google Cloud Platform with dedicated enterprise clusters for your organisation."
title: "Run a PaaS on GCP — Enterprise Deployment"
sidebar_label: "GCP"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Run Code Capsules on Your GCP

Enterprise on Google Cloud runs the Code Capsules platform inside your GCP projects.

## Overview

Enterprise on GCP is coming soon. Clusters will deploy into VPC networks and projects you designate.

## Why it matters

GCP enterprise deployment suits teams invested in Google Cloud, BigQuery adjacent workloads, or GKE-adjacent networking that must stay inside customer projects.

## How it works

Runtime and control components land in your GCP project. You retain ownership of networks, service accounts, and data stores; Code Capsules operates the PaaS experience on top.

## When to use it

Choose GCP enterprise when regulatory or architectural rules require customer-owned GCP projects. Evaluate hosted Code Capsules when shared infrastructure is acceptable.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/enterprise', label: '💡 Enterprise overview', description: 'Compare cloud deployment options.'},
    {type: 'link', href: '/enterprise/aws', label: '☁️ Enterprise on AWS', description: 'AWS alternative.'},
    {type: 'link', href: '/products/enterprise-clusters/overview', label: '📋 Enterprise clusters', description: 'Dedicated cluster reference.'},
  ]}
/>