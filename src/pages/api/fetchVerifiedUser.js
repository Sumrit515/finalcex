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
      
 

    //  const user = getAuth(req);
    //  console.log(user)




     const { userId } = getAuth(req);

    const userDetails =  await clerkClient.users.getUser(userId || "")

    const data = {
      userId: userDetails?.id,
      userName : `${userDetails.username}`,
      fullName : `${userDetails.firstName} ${userDetails.lastName}`,
      email: userDetails.emailAddresses[0].emailAddress,
      isVerified : false,
      profilePicture : userDetails.imageUrl
    }
    console.log(data)
      
    
   

     if(!userId) {
          return res.status(401);
     }
 
   const newUser = await prismadb.verifiedUser.create({data})


   const userSpotWallet = await prismadb.spotWallet.create({
    userId : userDetails?.id,
    tron: 0,
    eth: 0,
    btc: 0,
    matic: 0,
    usdt: 0,
    bnb: 0
   })


 
      return res.status(200).json({name : ""});
      

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