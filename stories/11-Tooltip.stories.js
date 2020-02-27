import React, { useState, useContext } from 'react';
// import { action } from '@storybook/addon-actions';

import Editor from './Editor';

import { Tooltip } from '../';

export default {
  title: 'Components|Tooltip',
  component: Index,
};

const code = `<Tooltip tooltipText="World" text="hello" position="top" />
// tooltipText is an string that should be passed
// text is an string that should be passed
// position is a position of tooltip message, you not need to pass
`;

export const Index = () => (
  <>
    <div
      style={{
        marginTop: '30px',
        marginBottom: '50px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip tooltipText="World" text="Hello" />
    </div>
    <Editor lang="jsx">{code}</Editor>
  </>
);

export const Top = () => (
  <div
    style={{
      marginTop: '30px',
      marginBottom: '50px',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Tooltip position="top" tooltipText="Hello World" text="Hello" />
  </div>
);

export const Left = () => (
  <div
    style={{
      marginTop: '30px',
      marginBottom: '50px',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Tooltip position="left" tooltipText="Hello World" text="Hello" />
  </div>
);

export const Bottom = () => (
  <div
    style={{
      marginTop: '30px',
      marginBottom: '50px',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Tooltip position="bottom" tooltipText="Hello World" text="Hello" />
  </div>
);

export const Right = () => (
  <div
    style={{
      marginTop: '30px',
      marginBottom: '50px',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Tooltip position="right" tooltipText="Hello World" text="Hello" />
  </div>
);
