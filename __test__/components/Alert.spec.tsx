import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender,
} from '@testing-library/react';

import Alert from '../../src/components/Alert';

const errDispatch = console.error;
console.error = (msg: string | object) => {};

describe('Alert Component', () => {
  let alertState = false;
  afterEach(() => {
    alertState = false;
  });
  const onClose = jest.fn(() => (alertState = false));
  const Normal = () => (
    <Alert active={alertState} text="Hello World" onClose={onClose} />
  );
  it('should render normaly', () => {
    const { container } = rtlRender(<Normal />);

    expect(!!container.querySelector('div')).toBe(true);
  });
  it('should dispatch an error', () => {
    const res = () =>
      rtlRender(
        // @ts-ignore
        <Alert />,
      );

    expect(res).toThrowError('you should pass props active and props text');
  });
  it('should open Alert', async () => {
    alertState = true;
    const { container } = rtlRender(<Normal />);

    await wait(() => {
      expect(container.querySelector('.active')).toBeTruthy();
    });
  });

  it('should dispatch onClose function', async () => {
    alertState = true;
    const { container } = rtlRender(<Normal />);
    const btn = container.querySelector('button.closebtn');

    if (btn)
      act(() => {
        fireEvent.click(btn);
      });
    await wait(() => {
      expect(onClose).toBeCalled();
    });
  });
});
