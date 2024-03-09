import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeaderTickerPersonal from './HeaderTickerPersonal'
import HeaderTicker from './HeaderTicker'

const HeaderTickerMiddleware = ({
    tradeSymbol,
    tradeSymbolFirst,
    tradeSymbolSecond
}) => {

    console.log('[HEADER_TICKER_MIDDLEWARE]', tradeSymbol)

    const [tickerType, setTickerType] = useState("binance")

    const fetchTickerType = async() => {
        try{

            const {data} = await axios.get(`/api/fetch-token-details?tradeSymbol=${tradeSymbol}`)
            
            if(data?.token?.dataSrc === "MNB")
            setTickerType("MNB")

        } catch(e) {
            console.log("[HEADER_TICKER_MIDDLEWARE]", e)
        }
    }

    useEffect(() => {
   if(tradeSymbol)
   fetchTickerType()        

    }, [tradeSymbol])

    if(tickerType === "MNB")
    return <HeaderTickerPersonal
     tradeSymbol={tradeSymbol}
     tradeSymbolFirst={tradeSymbolFirst}
     tradeSymbolSecond={tradeSymbolSecond}
     />

    if(tickerType === "binance") 
    return <HeaderTicker 
    tradeSymbol={tradeSymbol}
    tradeSymbolFirst={tradeSymbolFirst}
    tradeSymbolSecond={tradeSymbolSecond}
    />


}

export default HeaderTickerMiddleware