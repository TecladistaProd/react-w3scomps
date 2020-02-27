/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default css`
  --bgColor: #2196f3;
  color: white;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
  padding: 8px;
  background-color: var(--bgColor);
  &.success {
    --bgColor: #4caf50;
  }
  &.info {
    --bgColor: #2196f3;
  }
  &.warning {
    --bgColor: #ff9800;
  }
  &.danger {
    --bgColor: #f44336;
  }
`;
