---
slug: "/enterprise"
description: "Deploy Code Capsules on your own cloud infrastructure with enterprise clusters for AWS, Azure, GCP, and VMware."
title: "Enterprise PaaS on Your Own Cloud"
sidebar_label: "Enterprise"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# The Platform, on Your Cloud

Run Code Capsules inside your own cloud account with dedicated enterprise clusters.

## Overview

Enterprise deployment keeps apps and data in your AWS, Azure, Google Cloud, or VMware estate while Code Capsules operates the platform control plane. Dedicated clusters are provisioned for your organisation instead of shared multi-tenant hosting.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>AWS</strong></td><td>Run Code Capsules on Amazon Web Services.</td><td><a href="/enterprise/aws/">AWS</a></td></tr><tr><td><strong>Azure</strong></td><td>Run Code Capsules on Microsoft Azure.</td><td><a href="/enterprise/azure/">Azure</a></td></tr><tr><td><strong>GCP</strong></td><td>Run Code Capsules on Google Cloud Platform.</td><td><a href="/enterprise/gcp/">GCP</a></td></tr><tr><td><strong>VMware</strong></td><td>Run Code Capsules on VMware infrastructure.</td><td><a href="/enterprise/vmware/">VMware</a></td></tr></tbody></table>

## Why it matters

Enterprise clusters address data residency, compliance, and the need to align PaaS spend with existing cloud commitments. Teams that cannot use shared hosting still want managed Builds, deploys, and Capsule operations.

## How it works

Code Capsules installs the platform components into your cloud or VMware environment. Your workloads run in your accounts; operations such as upgrades and support are coordinated with Code Capsules.

## When to use it

Choose enterprise when regulatory or contractual rules require data to stay in your cloud, when you need isolated clusters, or when you want to combine Code Capsules with existing VPC networking and IAM policies. Use the standard hosted platform when shared hosting meets your requirements.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/enterprise/aws', label: '☁️ Enterprise on AWS', description: 'Deploy on Amazon Web Services.'},
    {type: 'link', href: '/products/enterprise-clusters/overview', label: '📋 Enterprise clusters', description: 'Product reference for dedicated clusters.'},
    {type: 'link', href: '/platform', label: '💡 Platform guides', description: 'Teams, Spaces, and Capsules on hosted Code Capsules.'},
  ]}
/>