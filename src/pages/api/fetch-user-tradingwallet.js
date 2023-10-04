/* eslint-disable react-hooks/rules-of-hooks */

import { clerkClient } from "@clerk/nextjs";
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';


export default async function handler(req, res) {
    
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
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



   if(verifiedUser){
    let wallet = await prismadb.spotWallet.findFirst({
      where: {
        userId: id
      }
    })

    

    return res.status(200).json(wallet);

   }
   else{
    return res.status(401).json({msg: "wallet doesn't exist"})
   }

  
 

    

   
     
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}