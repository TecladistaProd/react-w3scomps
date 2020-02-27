import React, { useState } from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender,
} from '@testing-library/react';

import Modal from '../../src/components/Modal';

const errDispatch = console.error;
console.error = (msg: string | object) => {};

describe('Modal Component', () => {
  let modal = false;
  afterEach(() => {
    modal = false;
  });
  const onClose = jest.fn(() => (modal = false));
  const Normal = () => (
    <Modal modalOpened={modal} onClose={onClose}>
      <Modal.Header>
        <p>Hello World</p>
      </Modal.Header>
      <Modal.Body>
        <p>Hello World</p>
      </Modal.Body>
      <Modal.Footer>
        <p>Hello World</p>
      </Modal.Footer>
    </Modal>
  );

  it('should render normaly', () => {
    const { container } = rtlRender(<Normal />);

    expect(!!container.querySelector('div .modal-content')).toBe(true);
  });

  it('should dispatch an error message', () => {
    // @ts-ignore
    const res = () => rtlRender(<Modal />);

    expect(res).toThrowError('You should pass onClose and modalOpened state');
  });

  it('should open Modal', async () => {
    modal = true;
    const { container } = rtlRender(<Normal />);

    await wait(() => {
      expect(container.querySelector('.active')).toBeTruthy();
    });
  });

  it('should dispatch onClose function', async () => {
    modal = true;
    const { container } = rtlRender(<Normal />);
    const btn = container.querySelector('button.close');

    if (btn)
      act(() => {
        fireEvent.click(btn);
      });
    await wait(() => {
      expect(onClose).toBeCalled();
    });
  });
});
