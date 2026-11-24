---
slug: "/enterprise/aws"
description: "Deploy Code Capsules on Amazon Web Services with dedicated enterprise clusters for your organisation."
title: "Run a PaaS on AWS — Enterprise Deployment"
sidebar_label: "AWS"
doc_version: drift
---

import DocCardList from '@theme/DocCardList';

# Run Code Capsules on Your AWS

Enterprise on AWS runs the Code Capsules platform inside your AWS account so apps and data stay in your cloud.

## Overview

Enterprise on AWS is coming soon. When available, dedicated clusters will run in your VPC with your IAM and networking policies.

## Why it matters

AWS enterprise deployment supports data residency, compliance frameworks that require customer-controlled accounts, and alignment with existing AWS spend and networking.

## How it works

The control plane and Capsule runtime components deploy into AWS infrastructure you designate. Code Capsules coordinates cluster lifecycle; compute and data remain in your account.

## When to use it

Choose AWS enterprise when your organisation standardises on AWS, needs private networking to other AWS services, or cannot use multi-tenant hosted Code Capsules. Compare with [Enterprise on Azure](/enterprise/azure/) or [Enterprise on GCP](/enterprise/gcp/) if your estate spans multiple clouds.

## Related

<DocCardList
  items={[
    {type: 'link', href: '/enterprise', label: '💡 Enterprise overview', description: 'Compare AWS, Azure, GCP, and VMware.'},
    {type: 'link', href: '/products/enterprise-clusters/overview', label: '📋 Enterprise clusters', description: 'Capsule types and limits on dedicated clusters.'},
    {type: 'link', href: '/platform/regions/what-regions-does-code-capsules-support', label: '🌍 Regions', description: 'Hosted platform regions for comparison.'},
  ]}
/>