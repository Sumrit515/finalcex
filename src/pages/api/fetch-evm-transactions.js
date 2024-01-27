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

const address = await prismadb.cryptoAccount.findFirst({

    where: {
        blockchain: "evm" ,
        userId: id?.toString()
    }

   })


const userAddressEvm = address?.walletAddress


    

// const {data} = await axios.get(`https://api.bscscan.com/api?module=account&action=txlist&address=0x7AE2F5B9e386cd1B50A4550696D957cB4900f03a&startblock=0&endblock=99999999&sort=asc&apikey=BHFKF9RXVVBJN32K663EZQASR9PTWAB3UA`)
 const binanceData = await axios.get(`${blockchainApis["binance"].txUrlPart1}0x55c86f12769ac8b37828ae5d3258ff3d50e573f5${blockchainApis["binance"].txUrlPart2}`)


 const sortedBinanceData = binanceData.data.result?.map((tx) => {
   
  if (tx.to === "0x55c86f12769ac8b37828ae5d3258ff3d50e573f5" && tx.contractAddress === "")
  {
  
    return {from : tx?.from ,to : tx?.to, hash: tx?.hash, timeStamp: tx?.timeStamp, value: Number(tx?.value)/10**18, confirmation: tx?.confirmations}
  }
  
 })

 let finalBinanceData = sortedBinanceData?.filter(element => element !== undefined)

 const testAddress = "0x58B6c396B65A9Cf1bAF808B5265b834919031555"

 const polygonData = await axios.get(`${blockchainApis["polygon"].txUrlPart1}0x58B6c396B65A9Cf1bAF808B5265b834919031555${blockchainApis["polygon"].txUrlPart2}`)


 const sortedPolygonData = polygonData.data.result?.map((tx) => {
   
  if (tx.to === testAddress?.toLowerCase() && tx.contractAddress === "")
  {
  
    return {from : tx?.from ,to : tx?.to, hash: tx?.hash, timeStamp: tx?.timeStamp, value: Number(tx?.value)/10**18, confirmation: tx?.confirmations}
  }
  
 })
 let finalPolygonData = sortedPolygonData?.filter(element => element !== undefined)

 const ethereumData = await axios.get(`${blockchainApis['ethereum'].txUrlPart1}0xa83114A443dA1CecEFC50368531cACE9F37fCCcb${blockchainApis["ethereum"].txUrlPart2}`)


 const sortedEthereumData = ethereumData.data.result?.map((tx) => {
   
  if (tx.to === "0xa83114a443da1cecefc50368531cace9f37fcccb" && tx?.contractAddress === "")
  {
  
    return {from : tx?.from ,to : tx?.to, hash: tx?.hash, timeStamp: tx?.timeStamp, value: Number(tx?.value)/10**18, confirmation: tx?.confirmations}
  }
  
 })
 let finalEthereumData = sortedEthereumData?.filter(element => element !== undefined)

const finalData = [...finalBinanceData, ...finalPolygonData, ...finalEthereumData]
    

      return res.status(200).json(finalData);
  
       
    } catch (error) {
      return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }