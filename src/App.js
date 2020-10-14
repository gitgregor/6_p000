
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
import Provider004 from './P_004/Providers/Provider004'
import SpineLineWithPlotBands from './P_004/ZZZ_COMPONENTS_STORE/SpineLineWithPlotBands'
import SplinePlotBandsChart_PL from './P_004/ZZZ_COMPONENTS_STORE/SplinePlotBandsChart_PL'
import Layout from './P_005/COMPONENTS/GridLayout/Layout'
import FlexMainContainer from './P_005/COMPONENTS/FlexMainLayouts/FlexMainContainer'

const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
// background:  conic-gradient(#fff, #000);
background-image: linear-gradient(to bottom right, #fff, #000);
// background-image: linear-gradient(to bottom right, red, yellow);
// background-image: linear-gradient(to bottom lightgreen, green, darkgreen);
border-radius:50px;
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
        <h1>Dashboard</h1>
{/* <AppCtnxReducer/> */}
{/* <MainComponent /> */}
{/* <HighStockPlotBands /> */}


{/* <Provider004>
<FHighStockPlotBandsF />
<SpineLineWithPlotBands/>
<SplinePlotBandsChart_PL />
</Provider004> */}


{/* <Paper /> */}
{/* <Randomizer /> */}

<FlexMainContainer/>
{/* <Layout/> */}

        </Container>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App






//==================================================

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
