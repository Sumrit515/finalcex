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
 
    const {tradeSymbolFirst, tradeSymbolSecond} = req.query

    // const { email, name, password } = req.body;

    const { userId } = getAuth(req);
  
    const id = userId?.toString() 
   
// console.log(symbol)
    if(!id) {
         return res.status(401);
    }




    const latestOrders = await prismadb.order.findMany({
        take: 20, // Limit to 10 orders
        where: {
            tradeSymbolFirst: tradeSymbolFirst ,
            tradeSymbolSecond: tradeSymbolSecond, // Replace 'specificType' with your desired type
          },
        orderBy: {
          placedAt: 'desc', // Sort by placedAt in descending order
        },
      });

   // return NextResponse.json(order)

     return res.status(200).json(latestOrders);
     
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}