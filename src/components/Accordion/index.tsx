/** @jsx jsx */

import React, { PureComponent } from 'react';

import { jsx } from '@emotion/core';
import styles from './styles';

interface State {
  active: boolean;
  panelHeight: number;
}

interface Props {
  buttonTitle: string;
  style?: React.CSSProperties;
}

interface CustomCss extends React.CSSProperties {
  '--panelHeight': string;
}

class Accordion extends PureComponent<Props, State> {
  state = {
    active: false,
    panelHeight: 0,
  };

  refPanel: null | HTMLDivElement = null;

  handleClick = () => {
    let { active } = this.state;
    active = !active;

    this.setState({ active });
  };

  mountPanel = (el: HTMLDivElement) => {
    this.refPanel = el;
    if (el) this.setState({ panelHeight: el.scrollHeight });
  };

  componentDidMount() {
    window.onresize = () => {
      if (this.refPanel && this.refPanel.scrollHeight)
        this.setState({ panelHeight: this.refPanel.scrollHeight });
    };
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  render() {
    if (!this.props.buttonTitle || !this.props.children) {
      throw new Error('You should pass buttonTitle and children props');
    }

    const divStyle = {
      '--panelHeight': this.state.panelHeight + 'px',
      ...this.props.style,
    } as CustomCss;

    return (
      <div
        css={styles}
        style={divStyle}
        className={`${this.state.active ? 'active' : ''}`}
      >
        <button onClick={this.handleClick} className="accordion">
          {this.props.buttonTitle}
        </button>
        <div ref={this.mountPanel} className="panel">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Accordion;
