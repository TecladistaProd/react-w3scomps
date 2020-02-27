import React from 'react';

import { Card } from '../';

import Editor from './Editor';

// import { action } from '@storybook/addon-actions';

export default {
  title: 'Components|Card',
  component: Index,
};

const code = `<Card>
  <Card.Image src="https://picsum.photos/400/200"/>
  <Card.Content>
    <p>Hello World</p>
  </Card.Content>
</Card>`;

export const Index = () => (
  <>
    <Card style={{ width: 300, marginBottom: 20 }}>
      <Card.Image
        src="https://picsum.photos/400/200"
        // style={{ width: '100%', height: 'auto' }}
      />
      <Card.Content>
        <p>Hello World</p>
      </Card.Content>
    </Card>
    <Editor lang="jsx">{code}</Editor>
  </>
);
