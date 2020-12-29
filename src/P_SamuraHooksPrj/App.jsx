import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import AsideMenu from './componennts/AsideMenu/AsideMenu'
import Content from './componennts/Content/Content'
import Header from './componennts/Header/Header'
import StoreProvider from './store/StoreProvider'

import './App.scss'

const App = () => {
  return (
      <StoreProvider>
     <Header />
     <Router>
        <div className="content-wrapper">
            <AsideMenu />
            <Content />
        </div>
     </Router>
      </StoreProvider>
 
  )
}

export default App
