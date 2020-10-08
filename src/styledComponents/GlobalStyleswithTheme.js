import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @import url('${props => props.theme.fontSource}');

  body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: ${props => props.theme.fontFamily};
  }
`;

export default GlobalStyles