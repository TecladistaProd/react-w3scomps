/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default css`
  visibility: hidden;
  min-width: 250px;
  margin: 0;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  opacity: 0;
  transition: visibility ease-out 400ms;
  &.active {
    visibility: visible;
    animation: fadein 0.5s forwards;
    opacity: 1;
  }
  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;
