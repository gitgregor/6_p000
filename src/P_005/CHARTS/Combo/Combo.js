import React, { Component } from 'react';
import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';
import {
  HighchartsChart, Chart, HighchartsProvider, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries, Tooltip
} from 'react-jsx-highcharts';

// import  '../../../../../styles/highcharts.css'

// import  '../../../../../styles/org.css'


const status = {
    category1: 'ini',
    category2: 'failed',
    category3: 'What ???'
}

const name = {
    numberOfEvents: "ilość zdarzeń",
    percentOfEvents: "% zdarzeń"
}

const data = {
    numberOfEventsDATA: [6, 2, 1]
}


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
    
const value1 = 6/9
const value2 = 2/9
const value3 = 1/9
console.log(value1)

const val1 = value1.toFixed(2)
const val2 = value2.toFixed(2)
const val3 = value3.toFixed(2)

console.log(val1)

const lineData = {
    data: [67, 22, 12]
    // data: [val1, val2, val3]
}


// Apply Highcharts More module
addHighchartsMore(Highcharts);

const Combo = () => {

    // const Percentagevalue = "wartość"
    const value = "wartość"

    return (
        <div className="app">
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart>
                    <Chart />
                    <Title>Statusy  X'a</Title>
                    <Legend />
                    <XAxis categories={[status.category1, status.category2, status.category3]} />
                    <YAxis>
                        <ColumnSeries name={name.numberOfEvents} data={data.numberOfEventsDATA} >
                        <Tooltip
                                outside
                                borderWidth={1}
                                shadow={false}
                                hideDelay={0}
                                padding={8}
                                headerFormat={`<b>${value}:</b> `}
                                pointFormat={'{point.y:,.0f}'}
                            />
                        </ColumnSeries>
                    </YAxis>
                    <YAxis labels={{format:"{value}%"}}  min={0} max={100} tickInterval={25}>
                        {/* <SplineSeries name={name.percentOfEvents} data={[Math.floor((6 / 9) * 100), Math.floor(toFixed(2), Math.floor((2 / 9) * 100)]} /> */}
                        {/* // <SplineSeries name={name.percentOfEvents} data={[val1, val2, val3]} /> */}
                        <SplineSeries name={name.percentOfEvents} data={lineData.data} >
                        {/* <Tooltip
                                outside
                                borderWidth={1}
                                shadow={false}
                                hideDelay={0}
                                padding={8}
                                headerFormat={`<b>${value}:</b> `}
                                pointFormat={'{point.y:,.0f}'}
                            /> */}
                        </SplineSeries>

                        {/* <PieSeries name="Total" data={pieData} center={[100, 80]} size={50} showInLegend={false} /> */}
                    </YAxis>
                </HighchartsChart>
            </HighchartsProvider>
        </div>
    );
}

export default Combo;

// === percentage Y axis =========

// yAxis: {min: 0, max:100,tickInterval: 25,
//     title: {
//         text: "title"
//     },
//     labels: {
//         format: '{value}%',
//     }
// }


//============ V1 ===================================
// addHighchartsMore(Highcharts);

// const Combo = (props) => {




//   const pieData = [{
//     name: 'device #1',
//     y: 13
//   }, {
//     name: 'device #2',
//     y: 23
//   }, {
//     name: 'device #3',
//     y: 19
//   }];

//   return (
//     <div className="app">
//       <HighchartsProvider Highcharts={Highcharts}   >
//         <HighchartsChart  >
//           <Chart backgroundColor={"green"}   />
//           {/* inject propos from container doesnt work */}
//           {/* <Title containerProps={{ className: "cssstyles" }} >Logs View</Title>  */}
//           {/* <Title style={{color: "red"}} >Logs View</Title>  */}
//           <Title  >Logs View</Title> 

//           <Legend />

//           <XAxis categories={['Init', 'Fault', 'Incident', 'Service mode', 'Changed Location']} />

//           <YAxis>
//             <ColumnSeries  name="device#1" data={[3, 2, 1, 3, 4]} />
//             <ColumnSeries name="device#2" data={[2, 3, 5, 7, 6]} />
//             <ColumnSeries name="device#3" data={[4, 3, 3, 9, 0]} />
//             <SplineSeries name="Average" data={[3, 2.67, 3, 6.33, 3.33]} />
//             <PieSeries name="Total" data={pieData} center={[100, 80]} size={50} showInLegend={false} />
//           </YAxis>
//         </HighchartsChart>
//       </HighchartsProvider>
//     </div>
//   );
// }

// export default Combo;


// containerProps={{ className: "highcharts-series" }}