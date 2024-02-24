/* eslint-disable react-hooks/rules-of-hooks */
import bcrypt from 'bcrypt';
import { clerkClient } from "@clerk/nextjs";

import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';


export default async function handler(req, res) {
    
  try {
    if (req.method === 'GET') {



 const { userId } = getAuth(req);

//  const user =  await clerkClient.users.getUser(userId || "")


  
 const id = userId?.toString() 


 if(!id) {
      return res.status(401);
 }




 const userSpotWallet = await prismadb.spotWallet.findFirst({
     where: {
         userId: id.toString() , // Replace 'specificType' with your desired type
       },
    
   });


 const userSpotWalletArray = [
    {
        "networkName" : "Ethereum",
        "currencySymbol" : "ETH",
        "currencyName" : "Ethereum",
        "currencyLogo" : "/images/CryptoLogos/ethereum.png",
        "balance" : userSpotWallet?.eth
    },
     {
        "networkName" : "Matic",
        "currencySymbol" : "Matic",
        "currencyName" : "Matic",
        "currencyLogo" : "/images/CryptoLogos/polygon.png",
        "balance" : userSpotWallet?.matic
    }, 
    {
        "networkName" : "Binance Smart Chain (BSC)",
        "currencySymbol" : "BNB",
        "currencyName" : "BNB",
        "currencyLogo" : "/images/CryptoLogos/binance.png",
        "balance" : userSpotWallet?.bnb
    },
   {
        "networkName" : "Tron",
        "currencySymbol" : "TRX",
        "currencyName" : "Tron",
        "currencyLogo" : "/images/CryptoLogos/tron.png",
        "balance" : userSpotWallet?.tron
    },
   {
        "networkName" : "Tron",
        "currencySymbol" : "USDT",
        "currencyName" : "USDT",
        "currencyLogo" : "/images/CryptoLogos/usdt.png",
        "balance" : userSpotWallet?.usdt
    }
]


  return res.status(200).json(userSpotWalletArray);
    
}  else{
        return res.status(405).end();
      }

     
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}

