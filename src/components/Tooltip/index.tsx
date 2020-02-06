/** @jsx jsx */

import React, { PureComponent } from "react";

import { jsx } from '@emotion/core';
import styles from './styles';

interface Props {
  tooltipText: string,
  text: string,
  position?: string,
  style?: React.CSSProperties
}

interface State {}

const Tooltip: React.FC<Props> = (props) => {
  if(!props.text || typeof props.text !== 'string')
    throw new Error('you should pass text props and should be string type')
  let posCl = ''
  switch(props.position) {
    case 'bottom':
      posCl += 'bottom'
    break;
    case 'right':
      posCl += 'right'
    break;
    case 'left':
      posCl += 'left'
    break;
    default:
      posCl += 'top'
    break;
  }
  return(
    <div style={props.style} css={styles}>
      <span className={`tooltiptext ${posCl}`}>{props.tooltipText}</span>
      {props.text}
    </div>
  )
}

export default Tooltip;