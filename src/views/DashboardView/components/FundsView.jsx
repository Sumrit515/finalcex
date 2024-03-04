import toast from 'react-hot-toast'
import TotalBalance from '../../../components/assets/totalBalance'
import WalletBalance from '../../../components/assets/walletBalance'
import { currencyDetails, currencyDetailsArray } from '../../../constant/constant'
import CryptoBalance from '../../../views/TransactionView/components/CryptoBalance'
import SpotBalance from '../../../views/TransactionView/components/SpotBalance'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useFetchUserCryptoBalance, useFetchUserSpotBalance } from '../../../hooks/useFetchCryptoTransactions'
import { TransferFundsModal } from '../../../components/modals/TransferFunds'
import { Button } from '../../../components/ui/button'
import {useRouter} from "next/navigation"
import { useTransferFundsModal } from '../../../hooks/useTransferFundsModal'

const FundsView = () => {

  const { data, error, isLoading } = useQuery('posts', useFetchUserCryptoBalance, {
    refetchInterval: 5000, // 10 seconds in milliseconds
  });
  const spotBalance = useQuery('pos', useFetchUserSpotBalance, {
    refetchInterval: 5000, // 10 seconds in milliseconds
  });




  const [selectFirstWallet, setSelectFirstWallet] = useState("crypto")
  const [selectSecondWallet, setSelectSecondWallet] = useState("spot")
  const [selectSymbol, setSelectSymbol] = useState("USDT")
  const [selectName, setSelectName] = useState("USDT")
  const [amount, setAmount] = useState(0)
  const [balanceData, setBalanceData] = useState([
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
  
  const router = useRouter()
  const transferFundsModal = useTransferFundsModal()

  const onCreate = async () => {
    try {
       const {data} = await axios.post(`/api/create-user-spot-wallet`)
       console.log(data)
     
    } catch(e) {
      console.log(e)
    }
  }

  const onTransfer = async () => {
    try {
      const body = {
        from : "selectFirstWallet",
        to : "selectSecondWallet",
        name : selectName,
      }
     const {data} = await axios.post(`/api/transfer-funds`, body)
     console.log(data)
     transferFundsModal?.onClose()
    } catch(e) {
      console.log(e)
    }
  }

  
  return (
    <>
    <Button onClick={() => onCreate()}> create</Button>
    <TransferFundsModal
    onSubmit={onTransfer}
    selectSymbol={selectSymbol}
    setSelectSymbol={setSelectSymbol}
    selectFirstWallet={selectFirstWallet}
    setSelectFirstWallet={setSelectFirstWallet}
    selectSecondWallet={selectSecondWallet}
    setSelectSecondWallet={setSelectSecondWallet}
    amount={amount}
    setAmount={setAmount}
    />
      <div className='
      p-8
      '>
      <p className='mb-4'>Assets</p>
      <TotalBalance
      balance={50}
      />
     <div>
        <p className='my-4'>Crypto Wallet</p>
        
        <div className='flex flex-wrap gap-8'>
        {currencyDetailsArray?.map((currency, i) => (
            <WalletBalance
            key={data?.[i].networkName  ?? currency.networkName}
            setSelectSymbol={setSelectSymbol}
            setSelectName={setSelectName}
            balance={data?.[i].balance ?? 0}
            name={currency.currencyName}
            symbol={currency.currencySymbol}
            logo={currency.currencyLogo}
            isLoading={isLoading}
            set
            />
        ))}
        </div>
     </div>
     <div>

        <p className='my-4'>Spot Wallet</p>
        
        <div className='flex flex-wrap gap-8'>
        {spotBalance?.data && spotBalance?.data?.map((currency, i) => (

            <WalletBalance
            key={currency.symbol  ?? currency.networkName}
            setSelectSymbol={setSelectSymbol}
            setSelectName={setSelectName}
            balance={currency.balance ?? "0"}
            name={currency.name}
            symbol={currency.symbol}
            logo={currency.logo}
            isLoading={spotBalance?.isLoading}
            />
        ))}
        </div>
    
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
    </>
  
  )
}

export default FundsView