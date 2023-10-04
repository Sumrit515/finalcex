import React, { useState } from 'react'
import CryptoCurrencyList from './CryptoCurrencyList'



const CryptoBalance = () => {

    const [trxBalance, setTrxBalance] = useState("0")
    const [bnbBalance, setBnbBalance] = useState("0")
    const [usdtBalance, setUsdtBalance] = useState("0")
    const [ethBalance, setEthBalance] = useState("0")
    const [maticBalance, setMaticBalance] = useState("0")


  return (
    <div className='
 
    '>
        <div className='
        font-semibold
        '> 
        Crypto Balance
        </div>
       

        <div className='
     flex
     mt-8
     flex-col
     gap-8
    w-full
    h-full
        '>
             <CryptoCurrencyList
             symbol='Tron'
             value='tron'
             src="/images/CryptoLogos/tron.png"
             />
             <CryptoCurrencyList
             symbol='BNB'
             value='bnb'
             src='/images/CryptoLogos/binance.png'
             />
             <CryptoCurrencyList
             symbol='ETH'
             value='eth'
             src='/images/CryptoLogos/ethereum.png'
             />
             <CryptoCurrencyList
             symbol='USDT'
             value='usdt'
             src='/images/CryptoLogos/usdt.png'
             />
             <CryptoCurrencyList
             symbol='MATIC'
             value='matic'
             src='/images/CryptoLogos/polygon.png'
             />
            </div>
    </div>
  )
}

export default CryptoBalance