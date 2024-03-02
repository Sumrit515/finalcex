/* eslint-disable react-hooks/rules-of-hooks */
import bcrypt from 'bcrypt';
import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }
 

    // const { email, name, password } = req.body;

    const { userId } = getAuth(req);
  
    const id = userId?.toString() 
   

    if(!id) {
         return res.status(401);
    }




    const tarde = await prismadb.trades.findMany({
        where : {
            OR: [
                { buyerId: userId }, // Filter by buyerId
                { sellerId: userId }, // Filter by sellerId
              ],
        },
        orderBy : {
          createdAt: "desc"
        }
    })

   // return NextResponse.json(order)

     return res.status(200).json(tarde);
     
  } catch (error) {
    return res.status(500).json({ error: `Something went wrong: ${error}` });
  }
}