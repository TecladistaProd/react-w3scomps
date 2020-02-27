import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender,
} from '@testing-library/react';

import MenuIcon from '../../src/components/MenuIcon';

const errDispatch = console.error;
console.error = (msg: string | object) => {};

describe('MenuIcon Component', () => {
  let onClick = jest.fn();
  it('should render normaly', () => {
    const { container } = rtlRender(<MenuIcon onClick={onClick} />);

    expect(!!container.querySelector('button')).toBe(true);
  });

  it('should dispatch an error', () => {
    const res = () =>
      rtlRender(
        // @ts-ignore
        <MenuIcon />,
      );

    expect(res).toThrowError('You should pass onClick props');
  });
  it('should dispatch an error', async () => {
    const { container } = rtlRender(<MenuIcon onClick={onClick} />);
    const btn = container.querySelector('button');
    if (btn)
      act(() => {
        fireEvent.click(btn);
      });

    await wait(() => {
      expect(onClick).toBeCalled();
      expect(!!container.querySelector('.active')).toBe(true);
    });
  });
});
