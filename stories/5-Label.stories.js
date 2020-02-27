import React from 'react';

import Editor from './Editor';

import { Label } from '../';

// import { action } from '@storybook/addon-actions';

export default {
  title: 'Components|Label',
  component: Index,
};

const code = `<Label type="info">Hello World</Label>
// type can be 'danger', 'info', 'warning', 'success', or nothing
`;

export const Index = () => (
  <>
    <Label>Hello World</Label>
    <div style={{ marginTop: 20 }} />
    <Editor lang="jsx">{code}</Editor>
  </>
);

export const Success = () => <Label type="success">Success</Label>;

export const Info = () => <Label type="info">Info</Label>;

export const Warning = () => <Label type="Warning">Warning</Label>;

export const Danger = () => <Label type="danger">Danger</Label>;
