import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender,
} from '@testing-library/react';

import Accordion from '../../src/components/Accordion';
const errDispatch = console.error;

console.error = (msg: string | object) => {};

describe('Accordion Component', () => {
  it('should render normaly', () => {
    let btnTitle = 'Hello World';
    const { container } = rtlRender(
      <Accordion buttonTitle={btnTitle}>
        <p>Hello World</p>
      </Accordion>,
    );

    expect(container.querySelector('button')?.textContent).toBe(btnTitle);
  });

  it('should dispatch an error', () => {
    const res = () =>
      rtlRender(
        // @ts-ignore
        <Accordion>
          <p>Hello World</p>
        </Accordion>,
      );
    expect(res).toThrowError('You should pass buttonTitle and children props');
  });

  it('should have active class when clicked', async () => {
    let btnTitle = 'Hello World';
    const { container } = rtlRender(
      <Accordion buttonTitle={btnTitle}>
        <p>Hello World</p>
      </Accordion>,
    );
    const btn = container.querySelector('button');
    if (btn)
      act(() => {
        fireEvent.click(btn);
      });

    await wait(() => expect(!!container.querySelector('.active')).toBe(true));
  });
});
