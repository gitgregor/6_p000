import React, { Component } from 'react';
import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';
import {
  HighchartsChart, Chart, HighchartsProvider, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries, Tooltip
} from 'react-jsx-highcharts';

import  '../../../../../styles/highcharts.css'

// import  '../../../../../styles/org.css'


const pieData = [{
        name: 'inicjalizacja',
        y: 6
      }, {
        name: 'błąd',
        y: 2
      }, {
        name: 'incydent',
        y: 1
      }];
    

// Apply Highcharts More module
addHighchartsMore(Highcharts);

const Combo = () => {

const value = "wartość"
    return (
        <div className="app">
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart>
                    <Chart />
                    <Title>Statusy Urządzenia X</Title>
                    <Legend />
                        <PieSeries name="Total" data={pieData} center={[100, 200]} size={100} showInLegend={true} />
                            <Tooltip
                                outside
                                borderWidth={1}
                                shadow={false}
                                hideDelay={0}
                                padding={8}
                                headerFormat={`<b>${value}:</b> `}
                                pointFormat={'{point.y:,.0f}'}
                            />
                </HighchartsChart>
            </HighchartsProvider>
        </div>
    );
}

export default Combo;



