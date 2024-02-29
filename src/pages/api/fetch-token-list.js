import axios from 'axios';
import TronWeb from 'tronweb'
import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';

export default async function handler(req, res) {
    
    try {
      if (req.method !== 'GET') {
        return res.status(405).end();
      }


const { userId } = getAuth(req)

if(!userId) {
    return res.status(405).end();
}
  

const tokenList = await prismadb.tokens.findMany()


      return res.status(200).json({tokenList});
  
       
    } catch (error) {
      return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }