import React from 'react';

import Editor from './Editor';

import { Browser } from '../';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Components|Browser',
  component: Index,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

const code = `<Browser inputProps={{ onChange }}>
  <p style={{ padding: '1rem' }}>
    Hello <strong>World</strong>!
  </p>
</Browser>
// inputProps, you can handle input inside browser component like put a type to input, or handle value,
// you not need to use it
`;

export const Index = () => (
  <>
    <Browser inputProps={{ type: 'number', onChange: action('input-change') }}>
      <p style={{ padding: '1rem' }}>
        Hello <strong>World</strong>!
      </p>
    </Browser>
    <Editor lang="jsx">{code}</Editor>
  </>
);
