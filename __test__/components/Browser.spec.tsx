import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender,
} from '@testing-library/react';

import Browser from '../../src/components/Browser';

const errDispatch = console.error;
console.error = (msg: string | object) => {};

describe('Browser Component', () => {
  it('should render normaly', () => {
    const { container } = rtlRender(
      <Browser>
        <h1>Hello World</h1>
      </Browser>,
    );

    expect(!!container.querySelector('div header.browser-header')).toBe(true);
  });

  it('should dispatch an function', async () => {
    const onChange = jest.fn();
    const { container } = rtlRender(
      <Browser
        inputProps={{
          onChange,
          type: 'number',
        }}
      >
        <h1>Hello World</h1>
      </Browser>,
    );

    const input = container.querySelector('div header.browser-header input');
    if (input)
      act(() => {
        fireEvent.change(input, { target: { value: '123' } });
      });
    await wait(() => {
      expect(onChange).toBeCalled();
      // expect(input?.nodeValue).toBe('123');
    });
  });
});
