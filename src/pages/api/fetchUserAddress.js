/* eslint-disable react-hooks/rules-of-hooks */
import bcrypt from 'bcrypt';
import { clerkClient } from "@clerk/nextjs";

import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Order } from '@prisma/client';
import { generateAccount, generateTronAccount } from '@/utils/AccountUtils';

export default async function handler(req, res) {
    
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

 const { blockchain } = req.query

if(!blockchain){
    return res.status(401).end()
}
 const { userId } = getAuth(req);

  const user =  await clerkClient.users.getUser(userId || "")


  
    const id = userId?.toString() 


    if(!id) {
        return res.status(401);
    }




 const verifiedUser = await prismadb.verifiedUser.findFirst({
     where: {
         userId: id.toString() , // Replace 'specificType' with your desired type
       },
    
   });

   const data = {
   isExist:  verifiedUser ? true : false,
   verificationStatus: verifiedUser ? verifiedUser.verifcationStatus : "" 
   }

//    if(verifiedUser?.verifcationStatus === "pending"){

//    }

   let address = await prismadb.cryptoAccount.findFirst({
    where: {
        blockchain: blockchain?.toString() === "tron"? "tron": "evm" ,
        userId: id?.toString()
    }
   })

   if(address === null){

    if(blockchain !== "tron") {

        const account = await generateAccount()



        const newAddress = await prismadb.cryptoAccount.create({
            data: {
             blockchain: "evm",
             nativeCurrency: "evm",
             currencyName: "evm",
             currencySymbol: "evm",
             walletAddress: account.account.address,
             privateKey: account.account.privateKey,
             quantity: 0,
             userId: id.toString()
            }
        })
    } else {
        const account = await generateTronAccount()

        const newAddress = await prismadb.cryptoAccount.create({
            data: {
             blockchain: "tron",
             nativeCurrency: "trx",
             currencyName: "trx",
             currencySymbol: "trx",
             walletAddress: account.account,
             privateKey: account.privateKey,
             quantity: 0,
             userId: id.toString()
            }
        })
    }
 
    
   }
   
    address = await prismadb.cryptoAccount.findFirst({

    where: {
        blockchain: blockchain?.toString() === "tron"? "tron": "evm" ,
        userId: id?.toString()
    }

   })

   const sendData = {
    address: address?.walletAddress,
    blockchain: address?.blockchain
}

  return res.status(200).json(sendData);
    
 

    

   
     
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}