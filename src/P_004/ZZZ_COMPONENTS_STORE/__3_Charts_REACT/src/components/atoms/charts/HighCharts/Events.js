import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, HighchartsProvider, XAxis, YAxis, Title, Legend, ScatterSeries, Tooltip
} from 'react-jsx-highcharts';
// import ExampleCode from '../utils/ExampleCode';
// import code from './exampleCode';
// import { addDataPoint } from '../UTILS/data-helepers';


const value = "wartość"

const data = [
    // [12,30,56,25],
    [25],
    [15],
    [30],
  ];

  const ydata = {
    category1: 'inicjalizacja',
    category2: 'błąd',
    category3: 'incydent'
  }


const Events = () => {
    return (
        <div>
                 <div>
        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsChart>
            <Chart zoomType="xy" />

            <Title>Liczba Logów wg kategorii</Title>

            <Legend>
              <Legend.Title>Legenda</Legend.Title>
            </Legend>

            <XAxis categories={[ydata.category1, ydata.category2, ydata.category3]} >
              <XAxis.Title>TYPY LOGÓW</XAxis.Title>
              <Tooltip
                                outside
                                borderWidth={1}
                                shadow={false}
                                hideDelay={0}
                                padding={8}
                                headerFormat={`<b>${value}:</b> `}
                                pointFormat={'{point.y:,.0f}'}
                            />
            </XAxis>

            <YAxis  >
              <YAxis.Title>LICZBA LOGÓW</YAxis.Title>
              <ScatterSeries name="Pokaż / Schowaj dane" data={data} />
            </YAxis>
          </HighchartsChart>
        </HighchartsProvider>
      </div>
        </div>
    )
}

export default Events



// class Events extends Component {

//   constructor (props) {
//     super(props);

//     // this.state = {
//     //   userClicks: [],
//     //   clickCounter: 0
//     // };
//   }

// //   handleClick = e => {
// //     this.setState({
// //       userClicks: addDataPoint(this.state.userClicks, [e.xAxis[0].value, e.yAxis[0].value]),
// //       clickCounter: this.state.clickCounter + 1
// //     });
// //   }

//   handleShow = () => {
//     alert('Series shown');
//   }

//   handleHide = () => {
//     alert('Series hidden');
//   }

//   render() {
//     const myClicks = [
//       [154, 97],
//       [458, 235],
//       [314, 127],
//       [430, 207],
//       [196, 113],
//       [354, 223],
//       [444, 253],
//       [182, 59],
//       [244, 249],
//       [414, 253],
//       [458, 209]
//     ];
//     // const { userClicks, clickCounter } = this.state;

//     return (
//       <div className="app">
//         <HighchartsProvider Highcharts={Highcharts}>
//           <HighchartsChart>
//             <Chart zoomType="xy" />
//             {/* <Chart zoomType="xy" onClick={this.handleClick} /> */}

//             <Title>Click to add data</Title>

//             <Legend>
//               <Legend.Title>Legend</Legend.Title>
//             </Legend>

//             <XAxis>
//               <XAxis.Title>X Coord</XAxis.Title>
//             </XAxis>

//             <YAxis>
//               <YAxis.Title>Y Coord</YAxis.Title>
//               <ScatterSeries name="My clicks" data={myClicks} />
//               {/* <ScatterSeries name="Your clicks" data={userClicks} onHide={this.handleHide} onShow={this.handleShow} /> */}
//             </YAxis>
//           </HighchartsChart>
//         </HighchartsProvider>
//         {/* <p>Click count: <span>{clickCounter}</span></p> */}

//         {/* <ExampleCode name="Events">{code}</ExampleCode> */}
//       </div>
//     );
//   }
// }

// export default Events;
