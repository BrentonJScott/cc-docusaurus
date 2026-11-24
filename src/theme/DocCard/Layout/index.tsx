import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Heading from '@theme/DocCard/Heading';
import Description from '@theme/DocCard/Description';
import type {Props} from '@theme/DocCard/Layout';

import {cardIcon} from './icons';

import styles from './styles.module.css';

function Container({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: ReactNode;
}): ReactNode {
  // No padding--lg: Infima layers it with !important, so custom.css couldn't
  // set the card padding.
  return (
    <Link
      href={href}
      className={clsx(
        'card',
        ThemeClassNames.docs.docCard.container,
        styles.cardContainer,
        className,
      )}>
      {children}
    </Link>
  );
}

export default function DocCardLayout({
  item,
  className,
  href,
  icon,
  title,
  description,
}: Props): ReactNode {
  return (
    <Container href={href} className={className}>
      <Heading item={item} icon={cardIcon(icon)} title={title} />
      {description && <Description item={item} description={description} />}
    </Container>
  );
}
