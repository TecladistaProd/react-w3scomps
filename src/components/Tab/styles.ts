/** @jsx jsx */

import { jsx, css } from '@emotion/core';

export default {
  horizontal: css`
    &,
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    width: 100%;
    height: auto;
    .tabs {
      overflow: hidden;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
    }
    .tabs button {
      background-color: inherit;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      transition: 0.3s;
    }
    .tabs button:hover {
      background-color: #ddd;
    }
    .tabs button.active {
      background-color: #ccc;
    }
    .tabcontent {
      display: none;
      padding: 6px 12px;
      border: 1px solid #ccc;
      border-top: none;
      animation: fadeEffect 1s;
    }
    .tabcontent.active {
      display: block;
    }
    @keyframes fadeEffect {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  vertical: css`
    &,
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    .tabs {
      border: 1px solid #ccc;
      background-color: #f1f1f1;
      width: 30%;
      height: 300px;
    }
    .tabs button {
      display: block;
      background-color: inherit;
      color: black;
      padding: 22px 16px;
      width: 100%;
      border: none;
      outline: none;
      text-align: left;
      cursor: pointer;
      transition: 0.3s;
    }
    .tabs button:hover {
      background-color: #ddd;
    }
    .tabs button.active {
      background-color: #ccc;
    }
    .tabcontent {
      display: none;
      padding: 0px 12px;
      border: 1px solid #ccc;
      width: 70%;
      border-left: none;
      height: 300px;
      animation: fadeEffect 1s;
    }
    .tabcontent.active {
      display: block;
    }
    @keyframes fadeEffect {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
};
