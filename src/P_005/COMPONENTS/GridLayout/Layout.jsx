import React, { useState, useEffect } from 'react'
import './layout.css'

import Provider004 from '../../../P_004/Providers/Provider004'
import F_HighStockPlotBands_F from '../../../P_004/Charts/HighStockPlotBands/F_HighStockPlotBands_F'
// import FlexMainContainer from '../FlexMainLayouts/FlexMainContainer'

import Combo from '../../CHARTS/Combo/Combo'
import Pie from '../../CHARTS/Combo/Pie'
import BasicHCupdateHooks from '../../CHARTS/BasicHCupdateHooks'
import Events from '../../CHARTS/Events'
import SpineLineWithPlotBands from '../../CHARTS/SpineLineWithPlotBands'
import ComboPie from '../../CHARTS/Combo/ComboPie'


import Faker from '../../FAKEdata/faker'

const Layout = () => {
return(
            <div class="grid">
                <Provider004>
                <div><F_HighStockPlotBands_F/></div>
                <div><Combo /></div>
                <div><Pie /></div>
                <div><BasicHCupdateHooks /></div>
                <div><Events /></div>
                <div><SpineLineWithPlotBands /></div>
                <div><ComboPie /></div>

                {/* <Faker/> */}
<div>Quibusdam, eos esse dolorum facere voluptatem eius, dolore quas totam aspernatur obcaecati harum? Nihil eligendi eos minus odit minima earum incidunt rem fugit reprehenderit, molestiae possimus eveniet itaque laudantium excepturi.</div>
<div>Ducimus quibusdam inventore delectus doloribus dignissimos. Dignissimos quos officia minus exercitationem perspiciatis harum iusto molestiae deleniti quod sunt amet recusandae autem, neque doloremque ad alias eaque consequuntur nesciunt quis eius!</div>
<div>Cumque aspernatur ex ipsum dolorum eius, tempore omnis minus sequi architecto totam sunt maxime nemo, ab repellendus. Aut voluptatem saepe voluptatibus nisi ipsum. Debitis corporis culpa ipsa error nemo doloribus.</div>
<div>Consequatur dolore, architecto quos saepe consequuntur libero minus totam? Enim optio provident commodi corporis officiis, sunt maiores? Cupiditate consequuntur, cumque natus corporis velit sunt ad magni aliquid facere deleniti molestiae.</div>
<div>Voluptatibus similique modi voluptatum voluptatem quo quod minima ducimus facere, sequi libero accusamus nisi nobis? Minima error tempore quo esse quod odit, deleniti labore nulla ullam velit nemo neque sint!</div>
<div>Qui, corporis delectus? Pariatur vel autem commodi, accusantium, voluptate obcaecati iste, a debitis facilis repellendus mollitia. Dolore dicta totam, quaerat omnis accusantium magni alias voluptates eligendi ex id aut dolorem?</div>
<div>Recusandae tempora ab error omnis exercitationem illo accusamus esse sit ipsa accusantium iure, possimus ducimus quis consequuntur qui corporis nobis culpa repudiandae! Suscipit, debitis. Omnis delectus at vitae laborum quos?</div>
<div>Dolorem saepe accusamus sed placeat porro ex, ab, vel eaque libero incidunt facilis delectus, iure odio dicta error consequuntur perspiciatis quasi? Corrupti incidunt quia asperiores quo magnam at minima laudantium?</div>
<div>Dolor ad saepe, nemo fugit tempora autem est fugiat quis porro atque nam repellendus maxime neque voluptatem rerum amet odit aspernatur voluptates iusto eos laboriosam enim vel. Eius, debitis beatae!</div>
                </Provider004>
{/* <FlexMainContainer /> */}
</div>
    )
}

export default Layout
