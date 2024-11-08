import React from 'react';

import * as darkStyles from './github-markdown-dark.module.css';
import * as lightStyles from './github-markdown-light.module.css';

const Component = (props: {
  theme: 'dark' | 'light' | 'auto';
  title: string;
}) => {
  let theme = props.theme;
  theme =
    theme === 'auto'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;
  const styles = theme === 'light' ? lightStyles : darkStyles;
  return (
    <article className={styles['markdown-body']} data-theme={theme}>
      <h1>{props.title}</h1>
      <p>Hello world!</p>
    </article>
  );
};

export default Component;
