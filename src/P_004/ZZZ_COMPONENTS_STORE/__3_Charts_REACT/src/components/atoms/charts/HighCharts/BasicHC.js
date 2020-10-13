import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {
    HighchartsChart, Chart, HighchartsProvider, XAxis, YAxis, Title, Legend, ColumnSeries,Tooltip,
     SplineSeries, PieSeries, ScatterSeries
  } from 'react-jsx-highcharts';
// import '../Styles/main.scss'
import  '../../../../App.css'


const optionsCH1 = {
  title: {
    text: 'lICZBA LOGÓW PO TYPACH'
  },
  xAxis: {
    categories: ['INICJALIZACJA', 'BŁĄD', 'KRYTYCZNE'],
  },
  series: [{
    data: [1, 2, 3]
  }],

// yAxis: {min: 0, max:100,tickInterval: 25,
//     title: {
//         text: "title"
//     },
//     labels: {
//         format: '{value}%',
//     }
// }

}



const optionsCH2 = {
  title: {
    text: 'LICZBA LOGÓW KRYTYCZNYCH'
  },
  series: [{
    data: [54]
  }]
}

const BasicHC = () => {


return(

<div className="grid">

    <HighchartsReact
        highcharts={Highcharts}
        options={optionsCH1}
    >
            <YAxis.Title>WOLUMEN</YAxis.Title>
    </HighchartsReact>

  <HighchartsReact
    highcharts={Highcharts}
    options={optionsCH2}
  />

</div>
)
}


export default BasicHC