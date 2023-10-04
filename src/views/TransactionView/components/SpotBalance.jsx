import React, { useState } from 'react'
import CryptoCurrencyList from './CryptoCurrencyList'
import CryptoCurrencyListSpot from './CryptoCurrencyListSpot'

const SpotBalance = () => {

    const [trxBalance, setTrxBalance] = useState("0")
    const [bnbBalance, setBnbBalance] = useState("0")
    const [usdtBalance, setUsdtBalance] = useState("0")
    const [ethBalance, setEthBalance] = useState("0")
    const [maticBalance, setMaticBalance] = useState("0")


  return (
    <div className='
 h-full
    '>
        <div className='
        font-semibold
        '> 
        Trading Balance
        </div>
       

        <div className='
     flex
     mt-8
     flex-col
     gap-8
     h-full
     w-full
        '>
             <CryptoCurrencyListSpot
             symbol='Tron'
             value='tron'
             src="/images/CryptoLogos/tron.png"
             />
             <CryptoCurrencyListSpot
             symbol='BNB'
             value='bnb'
             src='/images/CryptoLogos/binance.png'
             />
             <CryptoCurrencyListSpot
             symbol='ETH'
             value='eth'
             src='/images/CryptoLogos/ethereum.png'
             />
             <CryptoCurrencyListSpot
             symbol='USDT'
             value='usdt'
             src='/images/CryptoLogos/usdt.png'
             />
             <CryptoCurrencyListSpot
             symbol='MATIC'
             value='matic'
             src='/images/CryptoLogos/polygon.png'
             />
            </div>
    </div>
  )
}

export default SpotBalance