import React, {useState, useEffect, createContext} from 'react'
const axios = require('axios');
    
    const Paper = () => {
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

console.log(state)
    return (
            <div>

                <h2>Ticker Data</h2>
                     {state} 
            </div>
    )
}
export default Paper



