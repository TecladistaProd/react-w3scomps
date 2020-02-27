import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Modal } from '../';

export default {
  title: 'Components|Modal',
  component: Index,
};

export const Index = () => (
  <Modal modalOpened={true} onClose={action('onClose')}>
    <Modal.Header>
      <h1>Modal Header</h1>
    </Modal.Header>
    <Modal.Body>
      <h1>Modal Body</h1>
    </Modal.Body>
    <Modal.Footer>
      <h1>Modal Footer</h1>
    </Modal.Footer>
  </Modal>
);

export function Functional() {
  const [opModal, setOpModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpModal(true)}>Open Modal</button>
      <Modal modalOpened={opModal} onClose={() => setOpModal(false)}>
        <Modal.Header>
          <h1>Modal Header</h1>
        </Modal.Header>
        <Modal.Body style={{ padding: '2rem' }}>
          <h1>Modal Body</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}
