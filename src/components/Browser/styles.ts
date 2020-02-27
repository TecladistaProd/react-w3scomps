/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default css`
  &,
  * {
    outline: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  border: 3px solid #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  header.browser-header {
    padding: 0 15px;
    background: #f1f1f1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    .dot {
      margin-top: 4px;
      height: 12px;
      width: 12px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      &:not(:last-child) {
        margin-right: 4px;
      }
      &:nth-child(1) {
        background: #ed594a;
      }
      &:nth-child(2) {
        background: #fdd800;
      }
      &:nth-child(3) {
        background: #5ac05a;
      }
    }
    input {
      width: 80%;
      min-width: 300px;
      border-radius: 3px;
      border: none;
      background-color: white;
      height: 25px;
      color: #666;
      padding: 5px;
    }
  }
  .content {
    width: 100%;
  }
`;
