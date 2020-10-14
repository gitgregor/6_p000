import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, HighchartsProvider, XAxis, YAxis, Title, Subtitle, PlotBand, Legend, SplineSeries, Tooltip
} from 'react-jsx-highcharts';


class App extends Component {

  renderPlotBand = (band, index) => {
    const { from, to } = band;
    const id = `${from}-${to}`;
    const color = (index % 2) ? '#FFFFFF' : 'rgba(68, 170, 213, 0.1)';
    return (
      <PlotBand key={id} from={from} to={to} color={color}>
        <PlotBand.Label>{band.label}</PlotBand.Label>
      </PlotBand>
    );
  }

  render() {
    const plotOptions =  {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: true
        },
        pointInterval: 36000000, // one hour - 3600000, day -settings: 36000000
        // pointStart: new Date(Date.UTC(2012, 11, 20, 3, 0, 0));,  // Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])
        // pointStart: Date.UTC(2020, 0, 9).toLocaleTimeString('ar-EG'),  // Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])
        pointStart: Date.UTC(2020, 0, 9, 10, 20, 59, 345),  // Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])
        // pointEnd: Date.UTC(2020, 1, 1, 10, 20, 59, 345)  // Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])
      }
    };

    const bands = [
      { label: 'Pro', from: 0.5, to: 3 },
      { label: 'Ink', from: 3, to: 6 },
      { label: 'Per', from: 6, to: 9 },
      { label: 'Standby', from: 9, to: 12 },
      { label: 'Catastophy', from: 12, to: 14 },
      { label: 'just null', from: 14, to: 18 },
      { label: 'O my Goodnes', from: 18, to: 21 },
      { label: 'Garage', from: 21, to: 35 }
    ];

    return (
      <div className="app">
        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsChart plotOptions={plotOptions}>
            <Chart type="spline" />

            <Title>Life</Title>

            <Subtitle>Cycle of Reborning</Subtitle>

            <Legend />

            <Tooltip />
            {/* <Tooltip valueSuffix=" m/s" /> */}

            <XAxis type="datetime">
              <XAxis.Title>Czas</XAxis.Title>
            </XAxis>

            <YAxis minorGridLineWidth={0} gridLineWidth={0} alternateGridColor={null}>
              <YAxis.Title>Cycle of Existhere</YAxis.Title>
              <SplineSeries name="Pro" data={[1, 3, 2, 2.5, 1, 1, 3, 2, 2.9, 1.5]} />
              <SplineSeries name="Ink" data={[0, 0, 0, 5, 2, 4, 3.8, 4.2]} />
              {/* <SplineSeries name="Inicjalizacja" data={[4, 3, 6, 5, 2, 4, 3, 2, 5, 3.5]} /> */}
              <SplineSeries name="Per" data={[0,0,0,0,0,6,9,7,8,7.5]} />
              <SplineSeries name="Standby." data={[0,9,10,12,11,10,10]} />
              <SplineSeries name="Catastophy" data={[0,0,0,0,12,14,13]} />
              <SplineSeries name="just null" data={[0,0,17,0,0,0,0,18, 14]} />
              <SplineSeries name="O my Goodnes" data={[0,0,0,18,19,21]} />
              <SplineSeries name="Garage" data={[23, 25, 24, 22]} />

              {/* /=============== */}
              {/* <SplineSeries name="Producent" data={[0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]} />
              <SplineSeries name="Inicjalizacja" data={[0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]} />
              <SplineSeries name="Personalizacja" data={[, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0]} />
              <SplineSeries name="Gotow. B." data={[0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]} />
              <SplineSeries name="Error" data={[0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]} />
              <SplineSeries name="Do Wyzerowania" data={[0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]} />
              <SplineSeries name="Incydent" data={[0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]} />
              <SplineSeries name="Warsztat" data={[0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]} /> */}
              {/* === */}

              {bands.map(this.renderPlotBand)}
            </YAxis>
          </HighchartsChart>
        </HighchartsProvider>
      </div>
    );
  }
}

export default App;