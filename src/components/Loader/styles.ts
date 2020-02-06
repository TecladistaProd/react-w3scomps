/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default css`
  --timing: ease-out;
  --size: 120px;
  --time: 2000ms;
  --loadColor: #3498db;
  --bgColor: #f3f3f3;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  border: calc(var(--size) * 0.14) solid var(--bgColor);
  border-top: calc(var(--size) * 0.14) solid var(--loadColor);
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  animation: spin var(--time) var(--timing) infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
