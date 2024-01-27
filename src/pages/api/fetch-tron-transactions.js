import axios from 'axios';
import TronWeb from 'tronweb'
import prismadb from '../../libs/prismadb';
import { getAuth   } from '@clerk/nextjs/server';

export default async function handler(req, res) {
    
    try {
      if (req.method !== 'GET') {
        return res.status(405).end();
      }
  
  
//    const { userId } = getAuth(req);
  
//     const user =  await clerkClient.users.getUser(userId || "")
  
  
    
//       const id = userId?.toString() 
  
  
//       if(!id) {
//           return res.status(401);
//       }
  
  
  
  
//    const verifiedUser = await prismadb.verifiedUser.findFirst({
//        where: {
//            userId: id.toString() , // Replace 'specificType' with your desired type
//          },
      
//      });
  
  
  
//      if(verifiedUser){
//       let wallet = await prismadb.spotWallet.findFirst({
//         where: {
//           userId: id
//         }
//       })


const { userId } = getAuth(req)

  
    const id = userId?.toString() 

const address = await prismadb.cryptoAccount.findFirst({

    where: {
        blockchain: "tron" ,
        userId: id?.toString()
    }

   })


const userAddressTron = address?.walletAddress

     const tronweb = await new TronWeb({   
    // fullHost: 'https://nile.trongrid.io/',  // For testnet
       fullHost: 'https://api.trongrid.io/',  // For Mainnet
       headers: { "TRON-PRO-API-KEY": '321dfe31-257e-4d56-9c85-9badac9441fb' },
       privateKey: 'ef2c32ca700f0c3ded92cef23853600f50cc8aedd7a02001df2a4a26b60ab2f5'
       // privateKey: 'e132443195a546210ea0af895cc65a3466daa1b5d5f6b66358b9186c9bb408f3' //testnet
   })
      

  const hexAddress = tronweb.address.toHex(userAddressTron)
  
  const tronTransactions = await axios.get(`https://api.trongrid.io/v1/accounts/${userAddressTron}/transactions`)

  const tronSortedTransactions = tronTransactions.data?.data?.map((tx) => {
     if (tx.raw_data.contract[0].parameter.value.to_address === hexAddress)
     {
       return {from : tronweb.address.fromHex(tx?.raw_data.contract[0].parameter.value.owner_address) , to : tronweb.address.fromHex(tx?.raw_data.contract[0].parameter.value.to_address), hash: tx?.txID, timeStamp: tx?.raw_data?.timestamp, value: Number(tx?.raw_data.contract[0].parameter.value.amount)/10**6, confirmation: tx?.blockNumber}
     }
  })

  const filteredTronSortedTransactions = tronSortedTransactions?.filter(element => element != null)

      return res.status(200).json({filteredTronSortedTransactions});
  
       
    } catch (error) {
      return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }