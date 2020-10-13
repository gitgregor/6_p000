import React from 'react';
// import BasicHC from '../components/atoms/charts/HighCharts/BasicHC'
import Combo from '../components/atoms/charts/HighCharts/Combo/Combo'
import BasicHCupdateHooks from '../components/atoms/charts/HighCharts/BasicHCupdateHooks'
import SpineLineWithPlotBands from '../components/atoms/charts/HighCharts/SpineLineWithPlotBands'
import Events from '../components/atoms/charts/HighCharts/Events'
import Pie from '../components/atoms/charts/HighCharts/Combo/Pie'


export default {
    title: 'NCBC COMPONENTS REPO/ATOMS/Charts/HighCharts',
    component: BasicHCupdateHooks
  }

// export default {
//     title: 'NCBC COMPONENTS REPO/ATOMS/Charts/HighCharts',
//     component: BasicHC,
//   }


// export function BasicHighCharts(){
//   return(
//     <BasicHC  />
//   )
// }

// export function BasicUpdateByHooksHC(){
//   return(
//     <BasicHCupdateHooks  />
//   )
// }

export function ComboHighCharts(){
  return(
    <Combo  />
  )
}

export function SpineLinePlotBands(){
  return(
    <SpineLineWithPlotBands  />
  )
}

export function PiontChartWithEvents(){
  return(
    <Events  />
  )
}

export function PieChart(){
  return(
    <Pie  />
  )
}