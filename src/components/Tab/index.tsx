/** @jsx jsx */

import React, { PureComponent } from "react";

import { jsx } from '@emotion/core';
import styles from './styles';

const Content = ({ children, active }: { children: React.ReactElement<any>, active?: boolean, id: number }) => {
  return (
    <div className={'tabcontent' + `${active ? ' active': ''}`}>{children}</div>
  )
}

interface State {
  activeTab: number
}

interface tabTitle {
  title: string,
  id: number
}

interface Props {
  tabsTitle: Array<tabTitle>,
  children: Array<React.ReactElement<HTMLDivElement>>,
  style?: React.CSSProperties,
  type?: string
}

class Tab extends PureComponent<Props, State> {
  static TabContent = Content;

  constructor(props: Props) {
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  componentDidMount() {
    this.setState({
      activeTab: this.props.tabsTitle[0].id
    })
  }

  handleClick = (id: number) => {
    this.setState({ activeTab: id }) 
  }

  render() {
    let style = styles.horizontal
    if(this.props.type && this.props.type === 'vertical')
      style = styles.vertical

    // @ts-ignore
    const nChild = this.props.children.reduce((acc, i) => {
      acc = acc || []
      acc.push({
        ...i,
        props: {
          // @ts-ignore
          active: this.state.activeTab === i.props.id,
          ...i.props
        }
      })
      return acc
    }, [])
    return(
      <div
        css={style}
        style={this.props.style || {}}
      >
        <div className="tabs">
          {
            this.props.tabsTitle.map((i) => (
              <button
                key={i.id}
                className={i.id === this.state.activeTab ? 'active' : ''}
                onClick={this.handleClick.bind(null, i.id)}
              >
                {i.title}
              </button>
            ))
          }
        </div>
        {nChild}
      </div>
    )
  }
}

export default Tab