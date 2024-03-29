/* eslint-disable react-hooks/rules-of-hooks */
import bcrypt from 'bcrypt';
import { clerkClient } from "@clerk/nextjs";

import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Order } from '@prisma/client';

export default async function handler(req, res) {
    
  try {
    if (req.method === 'GET') {
      // return res.status(405).end();

 // const { email, name, password } = req.body;


 const { userId } = getAuth(req);

//  const user =  await clerkClient.users.getUser(userId || "")


  
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

// return NextResponse.json(order)

  return res.status(200).json(data);
    }
 

    else if(req.method === "POST"){
      

     const { userId } = getAuth(req);

    const userDetails =  await clerkClient.users.getUser(userId || "")


     if(!userId) {
          return res.status(401);
     }
 
   
const getAllTokens = await prismadb.tokens.findMany()

// id String @id @default(auto()) @map("_id") @db.ObjectId
// userId String 
// symbol String
// name String
// balance String
// avgPrice String

const usdtUserWallet =  await prismadb.spotWallet.create({data: {
  userId : userDetails.id,
  symbol: "USDT",
  name: "USDT",
  avgPrice: "1",
  balance: "0",
  logo: "/images/CryptoLogos/binance.png"
 }})

const userSpotWallets = getAllTokens?.map(async (token) => {
 const userWallet = await prismadb.spotWallet.create({data: {
  userId : userDetails.id,
  symbol: token.symbol,
  name: token.name,
  avgPrice: "0",
  balance: "0",
  logo: token.src
 }})
 return userWallet
})

  //  const userSpotWallet = await prismadb.spotWallet.create({data :{
  //   userId : userDetails.id,
  //   tron: 0,
  //   eth: 0,
  //   btc: 0,
  //   matic: 0,
  //   usdt: 0,
  //   bnb: 0
  //  }})

 
      return res.status(200).json({userSpotWallets});
      

    } 

    else{
      return res.status(405).end();
    }
   

   
     
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}

//       const completeAddress = `${hno}, ${street}, ${city}, ${state}, ${country}`
 
//        const fullName = `${firstName} ${middleName} ${lastName}`
//      const verifiedUser = await prismadb.verifiedUser.create({
//          data: {
//              userId: userId || "",
//              fullName,
//              userName: userDetails.username || "" ,
//              phoneNumber: "" ,
//              address: completeAddress ,
//              email: userDetails.emailAddresses[0].emailAddress,
//              verifcationStatus:"pending" ,
//              documentType,
//              documentUrl,
//              profilePicture: userDetails?.imageUrl || "",
//              passportPicture,
//              isVerified: false ,
//              upiId: "" ,
//          }
        
//        });
 
    // return NextResponse.json(order)