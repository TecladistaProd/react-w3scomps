import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import Editor from './Editor';

import { MenuIcon } from '../';

export default {
  title: 'Components|MenuIcon',
  component: Index,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

const code = `<MenuIcon size={50} onClick={fn}/>
// size should be an number, and not need to be passed
// onClick dispatch an event with boolean value when the menu change
// false if change to X and true when change to normal
`;

export const Index = () => (
  <>
    <MenuIcon size={50} onClick={action('click-button')} />
    <Editor lang="jsx">{code}</Editor>
  </>
);
