import { auto } from 'manate/react';
import React from 'react';

import Component from './component';

const App = auto(() => {
  return (
    <>
      <Component theme="light" title="Light Theme" />
      <Component theme="dark" title="Dark Theme" />
      <Component theme="auto" title="Auto Theme" />
    </>
  );
});

export default App;
