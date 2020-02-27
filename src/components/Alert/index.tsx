/** @jsx jsx */

import React, { PureComponent } from 'react';

import { jsx } from '@emotion/core';
import styles from './styles';

interface CustomCSS extends React.CSSProperties {
  '--bgColor': string;
}

interface Props {
  active: boolean;
  text: string;
  style?: CustomCSS;
  bgColor?: string;
  type?: 'danger' | 'success' | 'info' | 'warning';
  onClose: () => void;
}

interface State {}

class Alert extends PureComponent<Props, State> {
  render() {
    // @ts-ignore
    if (
      this.props.active === undefined ||
      !this.props.text ||
      typeof this.props.text !== 'string'
    )
      throw new Error('you should pass props active and props text');
    const st = { ...this.props.style } as CustomCSS;
    switch (this.props.type) {
      case 'danger':
        st['--bgColor'] = '#f44336';
        break;
      case 'success':
        st['--bgColor'] = '#6BBD6E';
        break;
      case 'info':
        st['--bgColor'] = '#47A8F5';
        break;
      case 'warning':
        st['--bgColor'] = '#FFAA2C';
        break;
      default:
        st['--bgColor'] = '#888';
        break;
    }
    st['--bgColor'] = this.props.bgColor || st['--bgColor'];
    return (
      <div
        style={st}
        css={styles}
        className={this.props.active ? 'active' : ''}
      >
        <button className="closebtn" onClick={this.props.onClose}>
          <span>&times;</span>
        </button>
        {this.props.text}
      </div>
    );
  }
}

export default Alert;
