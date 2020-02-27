import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender,
} from '@testing-library/react';

import Label from '../../src/components/Label';

const errDispatch = console.error;
console.error = (msg: string | object) => {};

describe('Label Component', () => {
  it('should render normaly', () => {
    const { container } = rtlRender(<Label>Hello World</Label>);

    expect(!!container.querySelector('span')).toBe(true);
  });
});
