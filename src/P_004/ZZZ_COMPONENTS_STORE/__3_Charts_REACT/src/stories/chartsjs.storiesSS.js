import React from 'react'
import LineGraph from '../components/atoms/charts/Chart.js/LineGraph'
import BarChart from '../components/atoms/charts/Chart.js/BarChart'
import PieCharts from '../components/atoms/charts/Chart.js/PieCharts'


export default {
    title: 'NCBC COMPONENTS REPO/ATOMS/Charts/CHARTS.JS',
    component: LineGraph ,
  }

  export function Basic_LineGraph(){
    return(
      <LineGraph  />
    )
  }
  
  export function Basic_BarChart(){
    return(
      <BarChart  />
    )
  }
  
  export function Basic_PieChart(){
    return(
      <PieCharts  />
    )
  }