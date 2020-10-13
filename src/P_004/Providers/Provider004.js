
import React, { useState, useEffect, useContext, createContext,  useReducer } from 'react'
// import reducer, {initialState} from './reducer'
import Paper from '../Apis/paper/Paper'
const axios = require('axios');


// export const initialState = {user: "Xray"}

// const reducer = (state, action) => {
//     switch (action.type) {
        
//     case "actNr1":
//         return { user: action.payload }

//         case "actNr2":
//             return { user: action.payload }

//             default:
//                 return state
//             }
//         }
        
        // export default reducer
        
        export const Context004 = createContext()

        
        const Provider = ({children}) => {
//             const initialState = {user: "Xray"}
// const [state, dispatch] = useReducer(reducer, initialState)

// const state = "HenksT"

const [state, setState] = useState([])

useEffect(() => {
   setInterval(() => {
     axios('https://api.coinpaprika.com/v1/tickers/btc-bitcoin')
.then((response) => {
    const {data:{quotes:{USD:{price}}}} = response
    setState(price)
    return( price)
  });
}, 5000);
})

    return (
        <Context004.Provider
        value={{
            state ,
        }}
        >
            {children}
        </Context004.Provider>
    )
}
export default Provider


//======================================

// const actions = {
//     firstAction: (data) => {
//          dispatch({
//              type: "actNr1", 
//              payload: data
//          })
//      },
//      secondAction: (data) => {
//          dispatch({
//              type: "actNr2", 
//              payload: data
//          })
//      }
     
//  }