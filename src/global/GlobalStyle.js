import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
  }
  .blur {
    filter: blur(0.125rem);
    -webkit-filter: blur(0.125rem);
  }
`;

export default GlobalStyle;
