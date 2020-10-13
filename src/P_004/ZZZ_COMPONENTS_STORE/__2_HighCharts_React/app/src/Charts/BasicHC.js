import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import '../Styles/main.scss'


const optionsCH1 = {
  title: {
    text: 'chart #1'
  },
  series: [{
    data: [1, 2, 3]
  }]
}
const optionsCH2 = {
  title: {
    text: 'chart #2'
  },
  series: [{
    data: [1, 5, 2,8]
  }]
}

const BasicHC = () => <div className="grid">
  <HighchartsReact
    highcharts={Highcharts}
    options={optionsCH1}
  />

  <HighchartsReact
    highcharts={Highcharts}
    options={optionsCH2}
  />


</div>

export default BasicHC