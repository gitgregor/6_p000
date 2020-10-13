import React from 'react';
import BasicHC from './components/atoms/charts/HighCharts/BasicHC'
import BasicHCupdateHooks from './components/atoms/charts/HighCharts/BasicHCupdateHooks'
import Combo from './components/atoms/charts/HighCharts/Combo/Combo'

import LineGraph from './components/atoms/charts/Chart.js/LineGraph'
import BarChart from './components/atoms/charts/Chart.js/BarChart'
import PieCharts from './components/atoms/charts/Chart.js/PieCharts'
import Events from './components/atoms/charts/HighCharts/Events'
import Pie from './components/atoms/charts/HighCharts/Combo/Pie'
import SpineLineWithPlotBands from './components/atoms/charts/HighCharts/SpineLineWithPlotBands'



import './App.css';

function App() {
  return (
    <div className="overwrapper">
      <div className="wrapper">
  <div className="app_container">
  <div>
      <h1 className="title">High-Charts</h1>
    </div>
    <div className="grid">
      <BasicHC />
      <Combo className="combo" />
      <BasicHCupdateHooks />
    </div>
    <hr/>
    <hr/>
    <h1 className="title">Charts.js</h1>
    <div  className="app_container grid">
      <LineGraph />
      <BarChart />
      <div className="piechart_chartjs">
      <PieCharts />
      </div>
      <Events />
      <Pie />
      <div>
        {/* <Chartist /> */}
      </div>
    </div>
      <SpineLineWithPlotBands />
    </div>
    </div>
    </div>
    
  );
}

export default App;
