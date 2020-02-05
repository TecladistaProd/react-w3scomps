/** @jsx jsx */

import { jsx, css } from '@emotion/core';

export default css`
  width: 100%;
  height: auto;
  --panelHeight: 0px;
  --panelColor: #e5e5e5;
  --buttonColor: #eee;
  --titleColor: #444;
  --hoverColor: #ccc;
  .accordion {
    background: var(--buttonColor);
    color: var(--titleColor);
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    &:hover {
      background-color: var(--hoverColor);
    }
    &:after {
      content: '\\02795';
      font-size: 13px;
      color: #777;
      float: right;
      margin-left: 5px;
    }
  }
  .panel {
    padding: 0 18px;
    background-color: white;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    max-height: 0;
    background: var(--panelColor);
  }
  &.active {
    & .accordion {
      background-color: var(--hoverColor);
      &:after {
        content: '\\2796';
      }
    }
    & .panel {
      max-height: var(--panelHeight);
    }
  }
`;
