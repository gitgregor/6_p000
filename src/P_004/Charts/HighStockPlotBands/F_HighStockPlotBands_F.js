import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, HighchartsProvider, XAxis, YAxis, Title, AreaSplineSeries, FlagsSeries, Navigator, PlotBand
} from 'react-jsx-highstock';
import { createRandomData } from './data-helper';

import Paper from '../../Apis/paper/Paper'

const App = ( ) => {

    // const now = Date.now();

    // const [state, setstate] = useState()

const array = [[Number(1601806121849), Number(95)],[Number(1601806122849), Number(42.5)],[Number(1601806123849), Number(23)],[Number(1601806124849), Number(6)],[Number(1601806125849), Number(0)],[Number(1601806126849), Number(50)]]
// const array = [[Number(1601806124849), Number(95)],[Number(1601806124849), Number(42.5)],[Number(1601806124849), Number(23)],[Number(1601806124849), Number(6)],[Number(1601806124849), Number(0)],[Number(1601806124849), Number(50)]]

   const campaigns = [
                {
                  from: array[1][0],
                  to:  array[5][0],
                //   from: unitSales[9][0],
                //   to: unitSales[23][0],
                  title: 'US TV advert campaign'
                }
   ]

  const renderPlotBand = ({ from, to, title }) => {
    const id = `band-${from}-${to}`;
    return (
      <PlotBand key={id} from={from} to={to} color="rgba(68, 170, 213, 0.3)">
        <PlotBand.Label>{title}</PlotBand.Label>
      </PlotBand>
    );
  }

  const renderNavPlotBand = ({ from, to }) => {
    const id = `nav-band-${from}-${to}`;
    return (
      <PlotBand key={id} from={from} to={to} color="rgba(68, 170, 213, 0.3)" />
    );
  }

  
    // const { unitSales, notableEvents, campaigns } = this.state;

    console.log(array)
    console.log(array[1][0])
    console.log(array[5][0])


    return (
      <div className="app">
        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsStockChart>
            <Chart zoomType="x" />

            <Title>Func Highstocks </Title>

            <XAxis>
              <XAxis.Title>Date</XAxis.Title>
              {campaigns.map(renderPlotBand)}
            </XAxis>

            <YAxis>
              <YAxis.Title>Cars sold per day</YAxis.Title>
              <AreaSplineSeries id="unitSales" name="Unit Sales" data={array} />
              {/* <FlagsSeries id="events" onSeries="unitSales" data={notableEvents} /> */}
            </YAxis>

            {/* <Navigator>
              <Navigator.Series seriesId="unitSales" />
              <Navigator.XAxis labels={{ x: 0, y: 12 }}>
                {campaigns.map(this.renderNavPlotBand)}
              </Navigator.XAxis>
            </Navigator> */}
          </HighchartsStockChart>
        </HighchartsProvider>
      </div>
    );
  
}

export default App;


//======= 4 class : constructor ========

//   constructor (props) {
//     super(props);

//     const now = Date.now();
//     const unitSales = createRandomData(now, 1e8);
//     this.state = {
//       unitSales,
//       campaigns: [
//         {
//           from: unitSales[9][0],
//           to: unitSales[23][0],
//           title: 'US TV advert campaign'
//         },
//         {
//           from: unitSales[50][0],
//           to: unitSales[57][0],
//           title: 'UK Radio advert campaign'
//         }
//       ],
//       notableEvents: [
//         {
//           x: unitSales[0][0],
//           title: 'North American Launch Date'
//         },
//         {
//           x: unitSales[30][0],
//           title: 'European Launch Date'
//         },
//         {
//           x: unitSales[80][0],
//           title: 'Asian Launch Date'
//         }
//       ]
//     };
//   }