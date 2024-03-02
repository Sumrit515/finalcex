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
    const {orderStatus} = req.query
    const id = userId?.toString() 
   

    if(!id) {
         return res.status(401);
    }

    if(!orderStatus){
        return res.status(400);
    }


    let orderStatusCheckArray = []

    if(orderStatus === "notFilled")
    orderStatusCheckArray = ["pending", "partiallyFilled" ]

    if(orderStatus === "filled")
    orderStatusCheckArray =["filled"]


    const order = await prismadb.order.findMany({
       where : {
        userId,
        status : {
            in: orderStatusCheckArray
        }
       },
       orderBy : {
        placedAt: "desc"
       }
    })

   // return NextResponse.json(order)

     return res.status(200).json(order);
     
  } catch (error) {
    return res.status(500).json({ error: `Something went wrong: ${error}` });
  }
}