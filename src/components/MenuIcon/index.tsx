/** @jsx jsx */

import React, { PureComponent } from "react";

import { jsx } from '@emotion/core';
import styles from './styles';

interface Props {
  size?: number,
  style?: React.CSSProperties,
  color?: string,
  onClick: (arg: boolean) => void
}

interface State {
  active: boolean
}

interface CustomCss extends React.CSSProperties {
  '--size'?: string,
  '--color'?: string
}


class MenuIcon extends PureComponent<Props, State> {
  state = {
    active: false
  }

  handleClick = () => {
    let { active } = this.state;
    active = !active;

    this.props.onClick(!active)

    this.setState({ active })
  }

  render() {
    const { size, style, color, onClick } = this.props;
    if(!onClick || typeof onClick !== 'function') throw new Error('You should pass onClick props')
    const divStyle = { 
      "--size": (size || 38) + 'px',
      '--color': color || '#333',
      ...style
    } as CustomCss;

    return (
      <button
        onClick={this.handleClick}
        style={divStyle}
        css={styles}
        className={this.state.active ? 'active' : ''}
      >
        <div className='bar is-1'></div>
        <div className='bar is-2'></div>
        <div className='bar is-3'></div>
      </button>
    );
  }
}

export default MenuIcon;
