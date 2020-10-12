import React from 'react'
import Provider from './Provider003'
import Component1 from './Component1'
import Component2 from './Component2'

const MainComponent = () => {
    return (
        <>
        <Provider>
        <Component1 />
        </Provider>
        <Provider>
        <Component2 />
        </Provider>
        </>
    )
}

export default MainComponent
