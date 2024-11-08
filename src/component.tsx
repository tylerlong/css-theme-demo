import React from 'react';

import 'github-markdown-css/github-markdown.css';

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
  return (
    <article className="markdown-body" data-theme={theme}>
      <h1>{props.title}</h1>
    </article>
  );
};

export default Component;
