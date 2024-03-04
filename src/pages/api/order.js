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
      price,
      value,
      quantity, 
      tradeSymbolFirst,
      tradeSymbolSecond,
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
let newWallet 

    if(type === "buy"){

     const wallet = await prismadb.spotWallet.findFirst({
        where: {
          userId: id,
          symbol : tradeSymbolSecond.toUpperCase()
        }
      })


      let balance = wallet.balance

      if(Number(balance) > Number(value)){
        console.log(balance, wallet, value)
        let newBalance = Number(balance) - Number(value)
  
        const updateBalance = await prismadb.spotWallet.update({
          where: {
            id: wallet.id,
            userId: id.toString()  // Replace 'specificType' with your desired type
            
          },
          data: {
            balance : newBalance.toString() , // Update the username field
          },
          
  
        })
     
  
        newWallet = updateBalance
      }
      else{
        return res.status(500).json({ error: `Something went wrong` });
      }
     

    }
    if(type === "sell"){

      const wallet = await prismadb.spotWallet.findFirst({
         where: {
           userId: id,
           symbol : tradeSymbolFirst.toUpperCase()
         }
       })
 
 
       let balance = wallet.balance
 
       if(Number(balance) > Number(value)){
         console.log(balance, wallet, value)
         let newBalance = Number(balance) - Number(value)
   
         const updateBalance = await prismadb.spotWallet.update({
           where: {
            id: wallet.id,
            userId: id.toString() , // Replace 'specificType' with your desired type
            
           },
           data: {
            balance : newBalance.toString() , // Update the username field
           },
           
   
         })
      
   
         newWallet = updateBalance
       }
       else{
         return res.status(500).json({ error: `Something went wrong` });
       }
      
 
     }


    const order = await prismadb.order.create({
        data: {
            userId: id,
            type,
            price,
            value,
            quantity, 
            tradeSymbolFirst,
            tradeSymbolSecond,
            status,
            orderType, 
            isCompleted 
        }
    })

   // return NextResponse.json(order)

     return res.status(200).json(order);
     
  } catch (error) {
    return res.status(500).json({ error: `Something went wrong: ${error}` });
  }
}