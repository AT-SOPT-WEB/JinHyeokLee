import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import './font.css';

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Pretendard Variable', Pretendard, sans-serif;
  }

  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const GlobalStyle = () => <Global styles={globalStyle} />;

export default GlobalStyle;
