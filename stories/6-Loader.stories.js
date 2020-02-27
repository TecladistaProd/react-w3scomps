import React, { useState } from 'react';

import Editor from './Editor';

import { Loader } from '../';

export default {
  title: 'Components|Loader',
  component: Index,
};

const code = `<Loader size='120px' timing='ease-in' time="2s" loadColor="#3498db" bgColor="#f3f3f3"/>
// you not need pass any props to these component, because it have default value
// size should be css valid size, px, em, rem, etc
// timing should be css valid timing like cubic-bezier, steps, linear etc
// loadColor and bgColor should be css valid color
`;

export const Index = () => (
  <>
    <Loader size="120px" timing="ease-in" />
    <Editor lang="jsx">{code}</Editor>
  </>
);

export function Custom() {
  const [customProps, setCP] = useState({
    time: 2000,
    size: 120,
    timing: 'linear',
    loadColor: '#3498db',
    bgColor: '#f3f3f3',
  });
  return (
    <>
      <input
        value={customProps.time}
        type="number"
        onChange={({ target: { value } }) =>
          setCP({ ...customProps, time: value })
        }
      />
      <input
        value={customProps.size}
        type="number"
        onChange={({ target: { value } }) =>
          setCP({ ...customProps, size: value })
        }
      />
      <input
        value={customProps.timing}
        type="text"
        onChange={({ target: { value } }) =>
          setCP({ ...customProps, timing: value })
        }
      />
      <input
        value={customProps.loadColor}
        type="color"
        onChange={({ target: { value } }) =>
          setCP({ ...customProps, loadColor: value })
        }
      />
      <input
        value={customProps.bgColor}
        type="color"
        onChange={({ target: { value } }) =>
          setCP({ ...customProps, bgColor: value })
        }
      />
      <Loader
        style={{ marginTop: 20 }}
        size={customProps.size + 'px'}
        timing={customProps.timing}
        time={customProps.time + 'ms'}
        loadColor={customProps.loadColor}
        bgColor={customProps.bgColor}
      />
    </>
  );
}
