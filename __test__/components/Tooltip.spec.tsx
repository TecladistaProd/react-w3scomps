import React from 'react';

import {
  act,
  fireEvent,
  wait,
  cleanup,
  render as rtlRender
} from '@testing-library/react';

import Tooltip from '../../src/components/Tooltip'

const errDispatch = console.error
console.error = (msg: string|object) => {}

describe('Tooltip Component', () => {
  afterEach(cleanup)
  it('should render normaly', () => {
    const { container } = rtlRender(
      <Tooltip
        tooltipText='World'
        text='Hello'
      ></Tooltip>
    )

    expect(
      container
      .querySelector('div span.tooltiptext')?.textContent
    ).toBe('World')
  })
  
  it('should dispatch an error', () => {
    const res = () => rtlRender(
      // @ts-ignore
      <Tooltip></Tooltip>
    )

    expect(
      res
    ).toThrowError('you should pass text props and should be string type')
  })

  it('should render normaly', async () => {
    const { container } = rtlRender(
      <Tooltip
        tooltipText='World'
        text='Hello'
      ></Tooltip>
    )

    const cont = container.querySelector('div')
    if(cont)
      act(() => {
        fireEvent.mouseEnter(cont)
      })
    
    await wait(() => {
      let span = container.querySelector('div span.tooltiptext')
      let visibility = 'none'
      
      if(span)
        visibility = window.getComputedStyle(span).visibility

      expect(visibility).toBe('visible')
    })
  })
})