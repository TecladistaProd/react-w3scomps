/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default css`
  &,
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  position: relative;
  display: inline-block;
  margin: 1px;
  border-bottom: 1px dotted black;
  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltiptext.top {
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltiptext.right {
    top: -5px;
    left: 125%;
  }

  .tooltiptext.bottom {
    top: 135%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltiptext.left {
    top: -5px;
    bottom: auto;
    right: 125%;
  }

  .tooltiptext::after {
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;
  }

  .tooltiptext.top::after {
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-color: #555 transparent transparent transparent;
  }

  .tooltiptext.right::after {
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-color: transparent #555 transparent transparent;
  }

  .tooltiptext.bottom::after {
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-color: transparent transparent #555 transparent;
  }

  .tooltiptext.left::after {
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-color: transparent transparent transparent #555;
  }

  &:hover .tooltiptext,
  .tooltiptext:hover {
    visibility: visible;
    opacity: 1;
  }
`;
