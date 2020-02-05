import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender
} from '@testing-library/react';

import Template from '../../src/components/Template'

const errDispatch = console.error
console.error = (msg: string|object) => {}

describe('Template Component', () => {
  it('should render normaly', () => {
    const { container } = rtlRender(
      <Template></Template>
    )

    expect(!!container.querySelector('div')).toBe(true)
  })
})