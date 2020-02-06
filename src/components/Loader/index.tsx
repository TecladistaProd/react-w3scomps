/** @jsx jsx */

import React, { PureComponent } from "react";

import { jsx } from '@emotion/core';
import styles from './styles';

interface CustomCss extends React.CSSProperties {
  '--timing'?: string,
  '--size'?: string,
  '--time'?: string,
  '--loadColor'?: string,
  '--bgColor'?: string,
}

interface Props {
  timing?: string,
  size?: string,
  time?: string,
  loadColor?: string,
  bgColor?: string,
  style?: CustomCss
}

const Loader: React.FC<Props> = ({ timing, size, time, loadColor, bgColor, style }) => {
  const st: CustomCss = {
    '--timing': timing || 'linear',
    '--size': size || '120px',
    '--time': time || '2000ms',
    '--loadColor': loadColor|| '#3498db',
    '--bgColor': bgColor || '#f3f3f3',
    ...style
  }
  return(
    <div style={st} css={styles}></div>
  )
}

export default Loader;