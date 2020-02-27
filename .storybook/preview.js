/** @jsx jsx */
import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import { Global, css, jsx } from '@emotion/core';

addParameters({
  options: {
    storySort: (a, b) => {
      if (a[0].includes('introduction')) return 0;
      else if (b[0].includes('introduction')) return 1;
      else
        return a[1].kind === b[1].kind
          ? 0
          : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    },
  },
});

addDecorator(storyFn => {
  return (
    <>
      <Global
        styles={css`
          body {
            padding: 0.5rem 1rem;
            font-family: Arial, Helvetica, sans-serif;
          }
        `}
      />
      {storyFn()}
    </>
  );
});
