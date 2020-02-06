/** @jsx jsx */

import { jsx, css } from '@emotion/core';
// import styled from '@emotion/styled';

const styles = css`
  &,
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  --size: 35px;
  --color: #333;
  height: var(--size);
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  width: var(--size);
  justify-content: space-around;
  border: none;
  background: 0;
  .bar {
    width: var(--size);
    height: calc(var(--size) * 0.14286);
    background-color: var(--color);
    transition: all 530ms 75ms cubic-bezier(0.6, 0.17, 0, 0.94);
  }

  &.active .is-1 {
    transform: rotate(-45deg)
      translate(calc(var(--size) / -5), calc(var(--size) / 7));
  }

  &.active .is-2 {
    opacity: 0;
  }

  &.active .is-3 {
    transform: rotate(45deg)
      translate(calc(var(--size) / -3), calc(var(--size) / -3.5));
  }
`;

export default styles;
