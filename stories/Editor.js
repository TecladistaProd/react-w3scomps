import React from 'react';

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import darcula from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';

export default ({ lang, children }) => (
  <SyntaxHighlighter language={lang} style={darcula}>
    {children}
  </SyntaxHighlighter>
);
