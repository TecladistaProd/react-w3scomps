import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender
} from '@testing-library/react';

import Loader from '../../src/components/Loader'

const errDispatch = console.error
console.error = (msg: string|object) => {}

describe('Loader Component', () => {
  it('should render normaly', () => {
    const { container } = rtlRender(
      <Loader></Loader>
    )

    expect(!!container.querySelector('div')).toBe(true)
  })
})