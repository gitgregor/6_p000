import React from 'react';

import BasicHC from './Charts/BasicHC'
import BasicHCupdateHooks from './Charts/BasicHCupdateHooks'

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>HighCharts_React</h2>
      <BasicHC />
      <BasicHCupdateHooks   />
    </div>
  );
}

export default App;
