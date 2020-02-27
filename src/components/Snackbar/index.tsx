/** @jsx jsx */

import React, { PureComponent } from 'react';

import { jsx } from '@emotion/core';
import styles from './styles';

import ctx, { openParam } from './context';

interface Props {
  style?: React.CSSProperties;
  onOpen?: (param: openParam) => void;
}

interface State {
  message: string;
}

class Snackbar extends PureComponent<Props, State> {
  static context = ctx;
  state = {
    message: '',
  };
  handleOpen = ({ time, message }: openParam) => {
    this.setState({
      message,
    });

    if (this.props.onOpen) this.props.onOpen({ time: time || 2000, message });

    setTimeout(() => this.setState({ message: '' }), time || 2000);
  };
  render() {
    return (
      <ctx.Provider
        value={{
          open: this.handleOpen,
        }}
      >
        <React.Fragment>
          {this.props.children}
          <div
            style={this.props.style}
            className={this.state.message ? 'active' : ''}
            id="snack-w3"
            css={styles}
          >
            {this.state.message}
          </div>
        </React.Fragment>
      </ctx.Provider>
    );
  }
}

export default Snackbar;
