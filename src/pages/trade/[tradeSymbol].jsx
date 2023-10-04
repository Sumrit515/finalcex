/* eslint-disable react-hooks/exhaustive-deps */
import TradingView from '@/views/TradeView'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
import React, {useCallback, useEffect, useState} from 'react'

// export async function getServerSideProps(context: NextPageContext) {
//   const session = await getSession(context)

//   if(!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }

const Trade = () => {

  const router = useRouter()
  let {tradeSymbol} = router.query
  const [tradeSymbolFirst, setTradeSymbolFirst] = useState("BTC")
  const [tradeSymbolSecond, setTradeSymbolSecond] = useState("USDT")

  const checkSum = useCallback(() => {
    const tradeSymbolSplit = tradeSymbol?.toString()
    const tradeSymbolSplitted = tradeSymbolSplit?.split("_")
    setTradeSymbolFirst(tradeSymbolSplitted?.[0]) 
     setTradeSymbolSecond(tradeSymbolSplitted?.[1])
       let tradeSymbolFetched = tradeSymbol
  }, [ ])
     


  useEffect(() => {
    let {tradeSymbol} = router.query
    if(tradeSymbol?.toString() === "") {
      tradeSymbol = 'BTC_USDT'
        }
        checkSum()
      const tradeSymbolSplit = tradeSymbol?.toString()
     const tradeSymbolSplitted = tradeSymbolSplit?.split("_")
     setTradeSymbolFirst(tradeSymbolSplitted?.[0]) 
      setTradeSymbolSecond(tradeSymbolSplitted?.[1])
        let tradeSymbolFetched = tradeSymbol

  }, [router.query, tradeSymbol,   checkSum])

  console.log(tradeSymbolFirst)
  console.log(tradeSymbolSecond)
  return (
    <div >
    
        <TradingView
        tradeSymbol={tradeSymbol?.toString()}
        tradeSymbolFirst={tradeSymbolFirst}
        tradeSymbolSecond={tradeSymbolSecond}
        />
    </div>
  )
}

export default Trade