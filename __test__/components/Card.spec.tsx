import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender,
} from '@testing-library/react';

import Card from '../../src/components/Card';

const errDispatch = console.error;
console.error = (msg: string | object) => {};

describe('Card Component', () => {
  it('should render normaly', () => {
    const { container } = rtlRender(
      <Card>
        <Card.Content>
          <h1>Hello world</h1>
        </Card.Content>
      </Card>,
    );

    expect(container.querySelector('div .card-content h1')?.textContent).toBe(
      'Hello world',
    );
  });

  it('should dispatch an error', () => {
    const res = () => rtlRender(<Card></Card>);

    expect(res).toThrowError('You should pass children');
  });
});
