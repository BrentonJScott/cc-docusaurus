import MDXComponents from '@theme-original/MDXComponents';
import {
  Accordion,
  Callout,
  Description,
  LinkCard,
  LinkCards,
  Steps,
} from '@site/src/components/DocBlocks';

// Make the page building blocks available in every .md file without imports.
export default {
  ...MDXComponents,
  Accordion,
  Callout,
  Description,
  LinkCard,
  LinkCards,
  Steps,
};
