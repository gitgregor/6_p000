import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600');

  body {
    background-color: tomato;
    font-family: Poppins, sans-serif;
  }
`;

export default GlobalStyles;