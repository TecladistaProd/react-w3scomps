/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default css`
  &,
  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
  }
  --bgColor: #f44336;
  background-color: var(--bgColor);
  color: white;
  position: relative;
  display: none;
  &.active {
    padding: 20px;
    display: block;
    animation: appear 400ms ease-out forwards;
  }
  .closebtn {
    border: none;
    background: none;
    position: absolute;
    top: 7px;
    right: 7px;
    span {
      &:hover {
        color: black;
      }
      color: white;
      font-weight: bold;
      font-size: 22px;
      line-height: 20px;
      cursor: pointer;
      transition: 0.3s;
    }
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
