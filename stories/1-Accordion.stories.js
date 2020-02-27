import React from 'react';

import Editor from './Editor';

import { Accordion } from '../';

export default {
  title: 'Components|Accordion',
  component: Index,
};

const code = `<Accordion butttonTitle="Click-me">
  <p style={{ padding: '1rem' }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, saepe.
  </p>
</Accordion>
`;

export const Index = () => (
  <>
    <Accordion buttonTitle="Click-me">
      <p style={{ padding: '1rem' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, saepe.
      </p>
    </Accordion>
    <Editor lang="jsx">{code}</Editor>
  </>
);
