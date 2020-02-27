/** @jsx jsx */

import React from 'react';

import { css, jsx } from '@emotion/core';

import Editor from './Editor';

// import { action } from '@storybook/addon-actions';

export default {
  title: 'Introduction|Getting started',
  component: Index,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

const style = css`
  width: 100%;
  height: 100%;
  h1 {
    color: #333;
  }
  .under {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-weight: bold;
      color: #333;
      text-decoration: underline;
    }
  }
`;

export const Index = () => (
  <div css={style}>
    <h1>React-W3scomps</h1>
    <p>Components based on w3school</p>
    <p>To use you need to install using:</p>
    <Editor lang="bash">{`yarn add react-w3scomps`}</Editor>
    <p>Then you need to import every component you want to use</p>
    <Editor lang="bash">{`import { ComponentName } from 'react-w3scomps'`}</Editor>
    <div className="under">
      <p>
        Under development, to help this and other projects you can donate here
      </p>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="HHWEKX97SKYAQ" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  </div>
);
