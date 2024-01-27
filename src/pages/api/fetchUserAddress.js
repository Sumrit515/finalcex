/* eslint-disable react-hooks/rules-of-hooks */
import bcrypt from 'bcrypt';
import { clerkClient } from "@clerk/nextjs";

import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Order } from '@prisma/client';
import { generateAccount, generateTronAccount } from '../../utils/AccountUtils';
import { currencyDetails } from '../../constant/constant';

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

        const account = await generateAccount("1")



        const newAddress = await prismadb.cryptoAccount.create({
            data: {
             blockchain: "evm",
             networkName: currencyDetails[blockchain?.toString()].networkName ,
             currencyName: currencyDetails[blockchain?.toString()].currencyName,
             currencySymbol: currencyDetails[blockchain?.toString()].currencySymbol,
             walletAddress: account.account.address,
             privateKey: account.account.privateKey,
             userId: id.toString()
            }
        })
    } else {
        const account = await generateTronAccount()

        const newAddress = await prismadb.cryptoAccount.create({
          data: {
            blockchain: "tron",
            networkName: currencyDetails[blockchain?.toString()].networkName ,
            currencyName: currencyDetails[blockchain?.toString()].currencyName,
            currencySymbol: currencyDetails[blockchain?.toString()].currencySymbol,
            walletAddress: account.account,
            privateKey: account.privateKey,
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