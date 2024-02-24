import axios from 'axios';

import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';
import { blockchainApis } from '../../constant/constant';

export default async function handler(req, res) {
    
    try {
      if (req.method !== 'GET') {
        return res.status(405).end();
      }
  


    const { userId } = getAuth(req)

  
    const id = userId?.toString() 

    const addressEvm = await prismadb.cryptoAccount.findFirst({

        where: {
            blockchain: "evm" ,
            userId: id?.toString()
        }

    })
    const addressTron = await prismadb.cryptoAccount.findFirst({

        where: {
            blockchain: "tron" ,
            userId: id?.toString()
        }

    })


const userAddressEvm = addressEvm?.walletAddress
const userAddressTron = addressTron?.walletAddress

let userBalance = [
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
]


 const binanceData = await axios.get(`${blockchainApis["binance"].balanceUrlPart1}${userAddressEvm}${blockchainApis["binance"].balanceUrlPart2}`)

 const binanceBalanceData = binanceData?.data?.result

 const polygonData = await axios.get(`${blockchainApis["polygon"].balanceUrlPart1}${userAddressEvm}${blockchainApis["polygon"].balanceUrlPart2}`)

 const polygonBalanceData = polygonData?.data?.result

 const ethereumData = await axios.get(`${blockchainApis['ethereum'].balanceUrlPart1}${userAddressEvm}${blockchainApis["ethereum"].balanceUrlPart2}`)

 const ethereumBalanceData = ethereumData?.data?.result

 const tronData = await axios.get(`${blockchainApis['tron'].balanceUrlPart1}${userAddressTron}`)

 const tronBalanceData = tronData?.data?.balance

 const binanceUsdtData = await axios.get(`${blockchainApis["binance"].usdtUrlPart1}${blockchainApis["binance"].usdtUrlPart2}${userAddressEvm}${blockchainApis["binance"].usdtUrlPart3}`)

 const binanceUsdtBalanceData = Number(binanceUsdtData?.data?.result) / 10**18

 const polygonUsdtData = await axios.get(`${blockchainApis["polygon"].usdtUrlPart1}${blockchainApis["polygon"].usdtUrlPart2}${userAddressEvm}${blockchainApis["polygon"].usdtUrlPart3}`)

 const polygonUsdtBalanceData = Number(polygonUsdtData?.data?.result) / 10**6

 const ethereumUsdtData = await axios.get(`${blockchainApis["ethereum"].usdtUrlPart1}${blockchainApis["ethereum"].usdtUrlPart2}${userAddressEvm}${blockchainApis["ethereum"].usdtUrlPart3}`)

 const ethereumUsdtBalanceData = Number(ethereumUsdtData?.data?.result) / 10**6

 const tronUsdtData = await axios.get(`${blockchainApis["tron"].usdtUrlPart1}${userAddressTron}${blockchainApis["tron"].usdtUrlPart2}`)

 const tronUsdtBalanceData = Number(tronUsdtData?.data?.withPriceTokens?.[1]?.balance) / 10 **6

 let totalUsdtBalance = binanceUsdtBalanceData + polygonUsdtBalanceData + ethereumUsdtBalanceData + tronUsdtBalanceData

 userBalance[0].balance = Number(ethereumBalanceData) / 10**18
 userBalance[1].balance = Number(polygonBalanceData) / 10**18
 userBalance[2].balance = Number(binanceBalanceData) / 10**18
 userBalance[3].balance = Number(tronBalanceData) / 10**6
 userBalance[4].balance = totalUsdtBalance


  return res.status(200).json(userBalance);
  
       
    } catch (error) {
      return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }