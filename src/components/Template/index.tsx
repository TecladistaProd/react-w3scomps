/** @jsx jsx */

import React, { PureComponent } from 'react';

import { jsx } from '@emotion/core';
import styles from './styles';

interface Props {}

interface State {}

class Template extends PureComponent<Props, State> {
  render() {
    return <div css={styles}></div>;
  }
}

export default Template;
