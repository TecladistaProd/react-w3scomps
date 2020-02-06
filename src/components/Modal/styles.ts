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
  display: block;
  position: fixed;
  z-index: 5;
  left: 0;
  top: -110vh;
  opacity: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-out 400ms;
  &.active {
    top: 0;
    opacity: 1;
  }
  .modal-content {
    position: relative;
    background-color: #fefefe;
    border: 1px solid #888;
    width: 80%;
    max-height: 85%;
    overflow: auto;
  }
  .modal-header {
    padding: 2px 16px;
    --bgColor: #5cb85c;
    background-color: var(--bgColor);
    color: white;
  }
  .modal-footer {
    padding: 2px 16px;
    --bgColor: #5cb85c;
    background-color: var(--bgColor);
    color: white;
  }
  .modal-body {
    padding: 2px 16px;
    --bgColor: #eee;
    background-color: var(--bgColor);
  }
  button.close {
    border: none;
    outline: 0;
    background: none;
    position: absolute;
    top: 10px;
    right: 10px;
    text-shadow: 0.5px 1px #eee, 1px 1.5px #fff, 2px 2px rgba(75, 75, 75, 0.7);
    span {
      color: #333;
      font-size: 28px;
      font-weight: bold;
      &:hover,
      &:focus {
        text-shadow: 0.5px 1px #fff, 1px 1.5px rgba(75, 75, 75, 0.7);
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`;
