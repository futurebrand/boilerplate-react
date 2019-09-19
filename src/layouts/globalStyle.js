import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    transition: all 300ms ease;
  }

  p,
  li {
    line-height: 1.3em;
  }

  img {
    display: block;
    width: 100%;
  }

  input {
    outline: none;
  }

  button {
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    border-radius: 0;
    -webkit-appearance: none;
  }
`;
