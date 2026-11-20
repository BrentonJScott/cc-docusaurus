#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const react = fs.readFileSync(path.join(root, 'docs/guides/react.md'), 'utf8');

const guides = [
  {
    file: 'vue.md',
    slug: '/frontend/vue',
    title: 'How to Host a Vue Application',
    label: 'Vue',
    h1: 'Create Vue frontend capsule',
    intro: 'Vue',
    framework: 'Vue',
    card: 'Vue',
    cardHint: 'Vue applications',
    img: 'create-vue-frontend-capsule',
    repo: 'BrentonJScott/demo-vue Team Repository',
    repoFilter: 'demo-vue',
    output: '`dist` (Vue CLI / Vite default output folder)',
    troubleshooting: 'Vue',
  },
  {
    file: 'svelte.md',
    slug: '/frontend/svelte',
    title: 'How to Host a Svelte Application',
    label: 'Svelte',
    h1: 'Create Svelte frontend capsule',
    intro: 'Svelte',
    framework: 'Svelte',
    card: null,
    cardHint: null,
    img: 'create-svelte-frontend-capsule',
    repo: 'BrentonJScott/demo-svelte Team Repository',
    repoFilter: 'demo-svelte',
    output: '`public` (SvelteKit static adapter output on the audit repo)',
    troubleshooting: 'Svelte',
    step5Extra:
      '**Svelte** is not on **Quick Start**. Open [https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend](https://test-platform.codecapsules.io/new/capsule?capsuleType=frontend) (sidebar **New Capsule** works too). On **Capsule Details**, choose **Frontend** if **Backend** is pre-selected.',
  },
  {
    file: 'static-html.md',
    slug: '/frontend/static-html',
    title: 'How to Host a Static HTML Website',
    label: 'Static HTML',
    h1: 'Create Static HTML capsule',
    intro: 'static HTML',
    framework: 'Static HTML',
    card: 'Static HTML',
    cardHint: 'Static HTML',
    img: 'create-static-html-capsule',
    repo: 'BrentonJScott/demo-html Team Repository',
    repoFilter: 'demo-html',
    output: 'Leave **Build Command** and **Path to static content** empty (files served from repo root)',
    troubleshooting: 'Static HTML',
    step10:
      'On **Build & Deploy**, leave **Build Command** and **Path to static content** blank unless your repo needs a build step.',
  },
];

for (const g of guides) {
  let md = react
    .replace('/frontend/react', g.slug)
    .replaceAll('React Frontend', `${g.framework} Frontend`)
    .replaceAll('create-react-frontend-capsule', g.img)
    .replaceAll('Create React frontend capsule', g.h1)
    .replaceAll('React frontend capsule', `${g.framework} frontend capsule`)
    .replaceAll('React app', `${g.framework} app`)
    .replaceAll('React GitHub', `${g.framework} GitHub`)
    .replaceAll('BrentonJScott/demo-react Team Repository', g.repo)
    .replaceAll('demo-react', g.repoFilter)
    .replaceAll('How to Host a React Application', g.title)
    .replace('sidebar_label: "React"', `sidebar_label: "${g.label}"`)
    .replace('static output under `build`', `static output under dist or public per your bundler`)
    .replace(
      '- Output directory placeholder → `build` (Create React App output folder)',
      `- Output directory placeholder → ${g.output}`,
    );

  md = md.replace('# Create React frontend capsule', `# ${g.h1}`);

  if (g.step5Extra) {
    md = md.replace(
      /### Step 5\n\n[\s\S]*?!\[Step 5[\s\S]*?\n\n/,
      `### Step 5\n\n${g.step5Extra}\n\n![Step 5 — New Capsule wizard entry](/img/guides/${g.img}/step-5.jpg)\n\n`,
    );
  } else {
    md = md.replaceAll('**React**', `**${g.card}**`);
    md = md.replaceAll('React applications', g.cardHint);
    md = md.replace('React Deploy Now', `${g.card} Deploy Now`);
  }

  if (g.step10) {
    md = md.replace(
      /### Step 10\n\n[\s\S]*?!\[Step 10[\s\S]*?\n\n/,
      `### Step 10\n\n${g.step10}\n\n![Step 10 — Build & Deploy fields](/img/guides/${g.img}/step-10.jpg)\n\n`,
    );
  } else if (g.output.startsWith('`dist`')) {
    md = md.replace(
      '- Output directory placeholder → `build` (Create React App output folder)',
      `- Output directory placeholder → ${g.output}`,
    );
    md = md.replace('- Output directory placeholder → `dist` (Vue CLI / Vite default output folder)', `- Output directory placeholder → dist`);
  }

  md = md.replaceAll('successful React build', `successful ${g.framework} build`);
  md = md.replaceAll('React repo', `${g.troubleshooting} repo`);

  fs.writeFileSync(path.join(root, 'docs/guides', g.file), md);
  console.log('wrote', g.file);
}