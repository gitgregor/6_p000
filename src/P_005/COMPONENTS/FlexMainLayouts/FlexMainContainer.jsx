import React from 'react'
import './flexMain.css'
import Layout from '../GridLayout/Layout'

const FlexMainContainer = () => {
    return (
        <div class="wrapper">
  <header class="header">Header</header>
  <article class="main">
      <div>
    <p className="drop-cap">Presented Charts made via Highcharts
     are full-responsive at any resolution. If you really 
    want check it out, just fell free and try as many as you can.
     They are AWSOME. Have a gud FUN :)</p>  
          <Layout />
      </div>
  </article>
  <aside class="aside aside-1">Aside 1</aside>
  <aside class="aside aside-2">Aside 2</aside>
  <footer class="footer">Footer</footer>
</div>
    )
}

export default FlexMainContainer
