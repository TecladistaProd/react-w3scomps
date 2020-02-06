/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default css`
  &,
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 0 2px 1px rgba(25, 25, 25, 0.06);
  transition: 0.3s;
  &.rounded {
    border-radius: 5px;
  }
  img.card-image {
    width: 100%;
  }
  &.rounded img.card-image {
    border-radius: 5px 5px 0 0;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .card-content {
    padding: 2px 16px;
  }
`;
