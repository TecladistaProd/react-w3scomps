/** @jsx jsx */

import React, { PureComponent } from 'react';

import { jsx } from '@emotion/core';
import styles from './styles';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';

interface Props {
  modalOpened: boolean;
  onClose: () => void;
}

interface State {}

class Modal extends PureComponent<Props, State> {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;
  render() {
    if (
      !this.props.onClose ||
      // @ts-ignore
      this.props.modalOpened === 'undefined' ||
      typeof this.props.onClose !== 'function'
    ) {
      throw new Error('You should pass onClose and modalOpened state');
    }
    return (
      <div className={this.props.modalOpened ? 'active' : ''} css={styles}>
        <div className="modal-content">
          <button className="close" onClick={this.props.onClose}>
            <span>&times;</span>
          </button>
          {this.props.children || <p>nothing here</p>}
        </div>
      </div>
    );
  }
}

export default Modal;
