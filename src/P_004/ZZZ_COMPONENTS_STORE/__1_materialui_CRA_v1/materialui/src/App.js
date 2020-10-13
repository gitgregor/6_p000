import React from 'react';
import './App.css';
import T1 from './components/Test/T1'


function App() {

  const ThemeContext = React.createContext('light');

  return (
    <div className="App">
      <T1 />
    </div>
  );
}

export default App;
