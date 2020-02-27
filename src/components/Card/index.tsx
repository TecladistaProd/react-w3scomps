/** @jsx jsx */

import React, { PureComponent } from 'react';

import { jsx } from '@emotion/core';
import styles from './styles';

import Image from './Image';
import Content from './Content';

interface Props {
  style?: React.CSSProperties;
  borderType?: 'normal' | 'rounded';
}

interface State {}

class Card extends PureComponent<Props, State> {
  static Image = Image;
  static Content = Content;
  render() {
    if (!this.props.children) throw new Error('You should pass children');
    if (
      this.props.borderType &&
      !this.props.borderType.match(/(normal|rounded)/g)
    )
      throw new Error('borderType should be "normal" or "rounded"');
    return (
      <div
        className={this.props.borderType === 'rounded' ? 'rounded' : ''}
        style={this.props.style}
        css={styles}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
