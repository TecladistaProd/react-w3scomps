import React, { useState, useContext } from 'react';
// import { action } from '@storybook/addon-actions';

import Editor from './Editor';

import { Tab } from '../';

export default {
  title: 'Components|Tab',
  component: Index,
};

const tabs = [
  { title: 'Japan', id: 1, content: 'Hello World' },
  { title: 'Brazil', id: 2, content: 'Hello World 2' },
];

const code = `const tabs = [
  { title: 'Japan', id: 1, content: 'Hello World' },
  { title: 'Brazil', id: 2, content: 'Hello World 2' },
];

<Tab tabsTitle={tabs.map(({ title, id }) => ({ title, id }))}>
  {tabs.map(i => (
    <Tab.Content id={i.id} key={i.id}>
      <p>{i.content}</p>
    </Tab.Content>
  ))}
</Tab>`;

export const Index = () => (
  <>
    <Tab tabsTitle={tabs.map(({ title, id }) => ({ title, id }))}>
      {tabs.map(i => (
        <Tab.Content id={i.id} key={i.id}>
          <p>{i.content}</p>
        </Tab.Content>
      ))}
    </Tab>
    <Editor lang="jsx">{code}</Editor>
  </>
);

export const Vertical = () => (
  <Tab type="vertical" tabsTitle={tabs.map(({ title, id }) => ({ title, id }))}>
    {tabs.map(i => (
      <Tab.TabContent id={i.id} key={i.id}>
        <p>{i.content}</p>
      </Tab.TabContent>
    ))}
  </Tab>
);
