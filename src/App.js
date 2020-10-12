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
import styled from 'styled-components'

// import AppCtnxReducer from './reducers/AppCtnxReducer'
import MainComponent from './P_003/MainComponent'
import HighStockPlotBands from './P_004/Charts/HighStockPlotBands/HighStockPlotBands'
import FHighStockPlotBandsF from './P_004/Charts/HighStockPlotBands/F_HighStockPlotBands_F'
import Paper from './P_004/Apis/paper/Paper'
import Randomizer from './P_004/Apis/randomizer/RandomApi'

const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyleswithTheme />
        <Wrapper>
        <Container>
        <h1>hooks</h1>
{/* <AppCtnxReducer/> */}
<MainComponent />
{/* <HighStockPlotBands /> */}
<FHighStockPlotBandsF />
{/* <Paper />
<Randomizer /> */}
        </Container>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App
