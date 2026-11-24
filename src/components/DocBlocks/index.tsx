import React, {Children, isValidElement, type CSSProperties, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

// Page building blocks shared by every doc type. They are registered globally
// in src/theme/MDXComponents.tsx, so docs use them without importing. Each one
// wraps plain Markdown, so headings, lists, and text stay in the doc source.

/** Shows the page's frontmatter `description` as the lead under the title. */
export function Description() {
  const {frontMatter} = useDoc();
  if (!frontMatter.description) {
    return null;
  }
  return <p className={styles.description}>{frontMatter.description}</p>;
}

const ICONS: Record<string, ReactNode> = {
  account: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </>
  ),
  fork: (
    <>
      <circle cx="6" cy="5" r="2" />
      <circle cx="18" cy="5" r="2" />
      <circle cx="12" cy="19" r="2" />
      <path d="M6 7v1a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V7M12 12v5" />
    </>
  ),
  space: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  git: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  ),
  guide: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
    </>
  ),
  tutorial: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </>
  ),
  reference: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  explanation: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3z" />
    </>
  ),
  tool: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  page: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  example: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M12 8v8" />
    </>
  ),
};

function Icon({name}: {name: string}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {ICONS[name] ?? ICONS.page}
    </svg>
  );
}

/** A grid of link cards, for Prerequisites, Next steps, and Related. */
export function LinkCards({children}: {children: ReactNode}) {
  return <div className={styles.cardGrid}>{children}</div>;
}

type LinkCardProps = {
  title: string;
  to: string;
  icon?: string;
  children?: ReactNode;
};

export function LinkCard({title, to, icon = 'page', children}: LinkCardProps) {
  return (
    <Link to={to} className={styles.card}>
      <span className={styles.cardIcon}>
        <Icon name={icon} />
      </span>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>{title}</div>
        {children && <div className={styles.cardText}>{children}</div>}
      </div>
      <span className={styles.cardArrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}

/**
 * Wraps a Markdown numbered list and draws each number as a circle, joined by
 * one line. A list that starts at another number, such as `4.`, keeps it.
 */
export function Steps({children}: {children: ReactNode}) {
  const list = Children.toArray(children).find(
    (child) => isValidElement<{start?: number}>(child) && child.props.start,
  );
  const start = isValidElement<{start?: number}>(list) ? Number(list.props.start) : 1;
  return (
    <div className={styles.steps} style={{'--steps-start': start - 1} as CSSProperties}>
      {children}
    </div>
  );
}

const CALLOUT_LABELS: Record<string, {label?: string; icon?: string}> = {
  checkpoint: {label: 'Checkpoint', icon: 'check'},
  example: {label: 'Example', icon: 'example'},
  goal: {},
};

type CalloutProps = {
  kind?: 'goal' | 'checkpoint' | 'example';
  title?: string;
  children: ReactNode;
};

/** A highlighted box for a checkpoint, a worked example, or a goal. */
export function Callout({kind = 'goal', title, children}: CalloutProps) {
  const {label, icon} = CALLOUT_LABELS[kind] ?? {};
  const heading = title ?? label;
  return (
    <div className={`${styles.callout} ${styles[kind]}`}>
      {heading && (
        <div className={styles.calloutLabel}>
          {icon && <Icon name={icon} />}
          {heading}
        </div>
      )}
      <div className={styles.calloutBody}>{children}</div>
    </div>
  );
}

/** Wraps `<details>` blocks so each shows as a collapsible troubleshooting item. */
export function Accordion({children}: {children: ReactNode}) {
  return <div className={styles.accordion}>{children}</div>;
}
