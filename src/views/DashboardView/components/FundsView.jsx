import toast from 'react-hot-toast'
import TotalBalance from '../../../components/assets/totalBalance'
import WalletBalance from '../../../components/assets/walletBalance'
import { currencyDetails, currencyDetailsArray } from '../../../constant/constant'
import CryptoBalance from '../../../views/TransactionView/components/CryptoBalance'
import SpotBalance from '../../../views/TransactionView/components/SpotBalance'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useFetchUserCryptoBalance } from '../../../hooks/useFetchCryptoTransactions'

const FundsView = () => {

  const { data, error, isLoading } = useQuery('posts', useFetchUserCryptoBalance, {
    refetchInterval: 5000, // 10 seconds in milliseconds
  });


 
  const [balanceData, setBalanceData] = useState( [
    {
        "networkName" : "Ethereum",
        "currencySymbol" : "ETH",
        "currencyName" : "Ethereum",
        "currencyLogo" : "/images/CryptoLogos/ethereum.png",
        "balance" : 0
    },
     {
        "networkName" : "Matic",
        "currencySymbol" : "Matic",
        "currencyName" : "Matic",
        "currencyLogo" : "/images/CryptoLogos/polygon.png",
        "balance" : 0
    }, 
    {
        "networkName" : "Binance Smart Chain (BSC)",
        "currencySymbol" : "BNB",
        "currencyName" : "BNB",
        "currencyLogo" : "/images/CryptoLogos/binance.png",
        "balance" : 0
    },
   {
        "networkName" : "Tron",
        "currencySymbol" : "TRX",
        "currencyName" : "Tron",
        "currencyLogo" : "/images/CryptoLogos/tron.png",
        "balance" : 0
    },
   {
        "networkName" : "Tron",
        "currencySymbol" : "USDT",
        "currencyName" : "USDT",
        "currencyLogo" : "/images/CryptoLogos/usdt.png",
        "balance" : 0
    }
])


  
  
  return (
    <div className='
    p-8
    '>
      <p className='mb-4'>Assets</p>
      <TotalBalance
      balance={50}
      />

      <p className='my-4'>Crypto Wallet</p>
     
     <div className='flex flex-wrap gap-8'>
     {currencyDetailsArray?.map((currency, i) => (
        <WalletBalance
        key={data?.[i].networkName  ?? currency.networkName}
        balance={data?.[i].balance ?? 0}
        name={currency.currencyName}
        symbol={currency.currencySymbol}
        logo={currency.currencyLogo}
        isLoading={isLoading}
        />
     ))}
     </div>
     
    

{/* 
      <div className='
flex
flex-col
gap-8

items-start
justify-start
p-8
'>
  <CryptoBalance/>
  <SpotBalance/>
</div> */}
    </div>
  )
}

export default FundsView