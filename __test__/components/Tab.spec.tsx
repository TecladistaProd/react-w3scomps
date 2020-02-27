import React from 'react';

import {
  act,
  fireEvent,
  wait,
  render as rtlRender,
} from '@testing-library/react';

import Tab from '../../src/components/Tab';

const errDispatch = console.error;
console.error = (msg: string | object) => {};

describe('Tab Component', () => {
  const tabs = [
    {
      title: 'title',
      id: 0,
      text: 'Something',
    },
    {
      title: 'title 2',
      id: 1,
      text: 'Something',
    },
  ];

  const NormalTab = () => (
    <Tab tabsTitle={tabs.map(({ title, id }) => ({ title, id }))}>
      {tabs.map(i => (
        <Tab.TabContent id={i.id} key={i.id}>
          <p>{i.text}</p>
        </Tab.TabContent>
      ))}
    </Tab>
  );

  it('should render normaly', () => {
    const { container } = rtlRender(<NormalTab />);

    expect(!!container.querySelector('div')).toBe(true);
    expect(container.querySelectorAll('.tabcontent').length).toBe(tabs.length);
  });

  it('should dispatch an error', () => {
    const res = () =>
      rtlRender(
        // @ts-ignore
        <Tab />,
      );

    expect(res).toThrow();
  });
  it('should change active tab', async () => {
    const { container } = rtlRender(<NormalTab />);
    const btn = container.querySelectorAll('.tabs button')[1];
    if (btn)
      act(() => {
        fireEvent.click(btn);
      });
    await wait(() => {
      const cl = container.querySelectorAll('.tabcontent')[1].className;
      expect(cl.match(/active/g)).toBeTruthy();
    });
  });
});
