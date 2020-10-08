// import React from 'react';
// import GlobalStyles from './styledComponents/GlobalStyles';

// function App() {
//   return (
//     <div className="App">
//       <GlobalStyles />
//       <h1>Theming with Styled Components</h1>
//     </div>
//   );
// }

// export default App

//==================================================

import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyleswithTheme from './styledComponents/GlobalStyleswithTheme';
import theme from './styledComponents/themex';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyleswithTheme />
        <h1>Theming with Styled Components</h1>
      </div>
    </ThemeProvider>
  );
}

export default App
