import React, { useState, useContext } from 'react';
import { action } from '@storybook/addon-actions';

import { Snackbar } from '../';

export default {
  title: 'Components|Snackbar',
  component: Index,
};

export const Index = () => (
  <>
    <Snackbar>
      <CustomComp />
    </Snackbar>
  </>
);

function CustomComp() {
  const ctx = useContext(Snackbar.context);
  return (
    <button onClick={() => ctx.open({ time: 1500, message: 'Hello World' })}>
      Show Snackbar
    </button>
  );
}
