
import React, { useState, useEffect, useContext, createContext,  useReducer } from 'react'
import reducer, {initialState} from './reducer'


export const Context = createContext()




const Provider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState)

const actions = {
   firstAction: (data) => {
        dispatch({
            type: "actNr1", 
            payload: data
        })
    },
    secondAction: (data) => {
        dispatch({
            type: "actNr2", 
            payload: data
        })
    }
    
}

    return (
        <Context.Provider
        value={{
            state:state,
            actions: actions
        }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider


