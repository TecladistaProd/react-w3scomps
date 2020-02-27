import React from 'react';
import { action } from '@storybook/addon-actions';

import Editor from './Editor';

import { Alert } from '../';
import { useCallback } from 'react';
import { useState } from 'react';

export default {
  title: 'Components|Alert',
  component: Default,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

const code = `<Alert onClose={fn} active={boolean} text="Hello World"/>

// active should be an boolean
// type can be 'danger', 'info', 'warning', 'success', or nothing
// onClose dispatch an event when close button is clicked
`;
export const Default = () => (
  <>
    <Alert onClose={action('close')} active={true} text="Hello World" />
    <Editor lang="jsx">{code}</Editor>
  </>
);

export const Danger = () => (
  <Alert onClose={action('close')} active={true} text="Danger" type="danger" />
);

export const Warning = () => (
  <Alert
    onClose={action('close')}
    active={true}
    text="Warning"
    type="warning"
  />
);

export const Success = () => (
  <Alert
    onClose={action('close')}
    active={true}
    text="Success"
    type="success"
  />
);

export const Info = () => (
  <Alert onClose={action('close')} active={true} text="info" type="info" />
);

export function Functional() {
  const handleClick = useCallback(
    e => {
      if (e !== 'close') setActive(true);
      else setActive(false);
    },
    [active],
  );
  const [active, setActive] = useState(false);
  return (
    <>
      <Alert
        onClose={handleClick.bind(null, 'close')}
        active={active}
        text="Hello World"
        type="info"
      />
      <button onClick={handleClick}>Click to show alert</button>
    </>
  );
}
