import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender,
} from '@testing-library/react';

import Snackbar from '../../src/components/Snackbar';

const errDispatch = console.error;
console.error = (msg: string | object) => {};

describe('Snackbar Component', () => {
  const Normal = () => (
    <Snackbar>
      <h1>Hello World</h1>
      <Snackbar.context.Consumer>
        {({ open }) => (
          <button id="btn" onClick={() => open({ message: 'Hello World' })}>
            btn
          </button>
        )}
      </Snackbar.context.Consumer>
    </Snackbar>
  );
  it('should render normaly', () => {
    const { container } = rtlRender(<Normal />);

    expect(!!container.querySelector('div')).toBe(true);
  });
  it('should open snackbar', async () => {
    const { container } = rtlRender(<Normal />);

    let btn = container.querySelector('button#btn');
    if (!!btn)
      act(() => {
        // @ts-ignore
        fireEvent.click(btn);
      });
    await wait(() => {
      expect(
        container.querySelector('#snack-w3')?.className.match(/active/g),
      ).toBeTruthy();
      expect(container.querySelector('#snack-w3')?.textContent).toBe(
        'Hello World',
      );
    });
  });
});
