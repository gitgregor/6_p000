import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @import url('${props => props.theme.fontSource}');

  html:{
    
  }

  body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: ${props => props.theme.fontFamily};
    // max-width: ${props => props.theme.width};
    padding: ${props => props.theme.padding};
    border: ${props => props.theme.border};
`;

export default GlobalStyles