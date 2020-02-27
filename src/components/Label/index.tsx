/** @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';
import styles from './styles';

interface CustomCSS extends React.CSSProperties {
  '--bgColor': string;
}

interface Props {
  type?: 'success' | 'info' | 'warning' | 'danger';
  style?: CustomCSS;
}

const Label: React.FC<Props> = ({ children, type, style }) => {
  const st = { ...style } as CustomCSS;
  switch (type) {
    case 'success':
      st['--bgColor'] = '#4caf50';
      break;
    case 'warning':
      st['--bgColor'] = '#ff9800';
      break;
    case 'danger':
      st['--bgColor'] = '#f44336';
      break;
    default:
      st['--bgColor'] = '#2196f3';
      break;
  }
  return (
    <span style={st} css={styles}>
      {children}
    </span>
  );
};

export default Label;
