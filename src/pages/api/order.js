/* eslint-disable react-hooks/rules-of-hooks */
import bcrypt from 'bcrypt';
import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
 

    // const { email, name, password } = req.body;

    const { userId } = getAuth(req);
    const body = await req.body
    const id = userId?.toString() 
    const {

      type,
      amount,
      quantity, 
      symbol,
      status,
      orderType, 
      isCompleted 
    } = body

    if(!id) {
         return res.status(401);
    }

    if(!type){
        return res.status(400);
    }


    const order = await prismadb.order.create({
        data: {
            userId: id,
            type,
            amount,
            quantity, 
            symbol,
            status,
            orderType, 
            isCompleted 
        }
    })

   // return NextResponse.json(order)

     return res.status(200).json(order);
     
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}