/** @jsx jsx */

import React, { PureComponent } from 'react';

import { jsx } from '@emotion/core';
import styles from './styles';

interface Props {
  inputProps?: object;
  style?: React.CSSProperties;
}

interface State {}

class Browser extends PureComponent<Props, State> {
  render() {
    return (
      <div style={this.props.style} css={styles}>
        <header className="browser-header">
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <input type="text" {...this.props.inputProps} />
        </header>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default Browser;
