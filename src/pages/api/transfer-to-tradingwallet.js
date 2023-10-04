/* eslint-disable react-hooks/rules-of-hooks */
import bcrypt from 'bcrypt';
import { clerkClient } from "@clerk/nextjs";
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../libs/prismadb';
import Web3 from 'web3'
import { getAuth   } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Order } from '@prisma/client';
import { generateAccount, generateTronAccount } from '../../utils/AccountUtils';
import ethers, {providers, Wallet,utils} from 'ethers';

const blockchainProviders = {
  "eth": "",
  "bnb": "",
  "matic": "",
}

const transferEvm = async (privateKey ,sender, amount, blockchain, reciever ) => {

const provider = new providers.AnkrProvider("https://data-seed-prebsc-1-s1.binance.org:8545/")

const senderPrivateKey = privateKey

const senderWallet = new Wallet(senderPrivateKey, provider)

const tx = await senderWallet.sendTransaction({
  to: reciever,
  from: sender,
  value: utils.parseEther(amount)
})

console.log(tx.hash)
return tx.hash
} 

const waitForMe = async (ms ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const transferTx = async (key ,address, amount, blockchain, reciever )=> {

  let sendData = {
    txHash: " ",
    msg: "",
    reciever: reciever?.toString(),
    address: address?.toString(),
    amount: amount?.toString()
  }  

  try{

  

        
  const privateK = key?.toString()  || ""



  const web3 =  new Web3('https://rpc.ankr.com/bsc_testnet_chapel/b71b17f5ec6d40268436c98d4d20afecdcaa300c05360d40e9c919a8f871f404');
  const senderAddress = address;
  const senderPrivateKey = privateK;
  
  // Unlock the account
  web3.eth.accounts.wallet.add({
    address: address,
    privateKey: privateK
  });

  const receiverAddress = reciever;
const amountToSend = web3.utils.toWei(amount, 'ether'); // Convert to Wei (1 Ether = 10^18 Wei)

const transactionObject = {
from: senderAddress,
to: receiverAddress,
value: amountToSend,
gas: 21000, // Gas limit for a basic Ether transfer
};


const data = await web3.eth.sendTransaction(transactionObject)

.on('transactionHash', async (hash) => {
console.log(`Transaction hash: ${hash}`);
sendData.txHash = hash


sendData.msg = "success"
return hash

})

.on('error', (error) => {
sendData.txHash = ""
sendData.msg = "failed"

console.log('Transaction error:', error);
return sendData
});
// await waitForMe(3000)
return data
} catch(e){
return e
} 
}

export default async function handler(req, res) {
    
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

 const { currency, amount } = req.query

if(!currency && !amount){
    return res.status(401).end()
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

       let address = await prismadb.cryptoAccount.findFirst({

    where: {
        blockchain: "evm" ,
        userId: id?.toString()
    }
   })

   const hash = await transferTx(address?.privateKey || "", address?.walletAddress || "", amount?.toString() || "0", "bnb", "0x409d4B7FC6a11935Ba17743A0E4120DE0649D34c")

    return res.status(200).json({txHash: hash});

   }
   else{
    return res.status(401).json({msg: "wallet doesn't exist"})
   }

  //  const data = {
  //  isExist:  verifiedUser ? true : false,
  //  verificationStatus: verifiedUser ? verifiedUser.verifcationStatus : "" 
  //  }

//    if(verifiedUser?.verifcationStatus === "pending"){

//    }

  //  let address = await prismadb.cryptoAccount.findFirst({
  //   where: {
  //       blockchain: blockchain?.toString() === "tron"? "tron": "evm" ,
  //       userId: id?.toString()
  //   }
  //  })

  //  if(address === null){

  //   if(blockchain !== "tron") {

  //       const account = await generateAccount()



  //       const newAddress = await prismadb.cryptoAccount.create({
  //           data: {
  //            blockchain: "evm",
  //            nativeCurrency: "evm",
  //            currencyName: "evm",
  //            currencySymbol: "evm",
  //            walletAddress: account.account.address,
  //            privateKey: account.account.privateKey,
  //            quantity: 0,
  //            userId: id.toString()
  //           }
  //       })
  //   } else {
  //       const account = await generateTronAccount()

  //       const newAddress = await prismadb.cryptoAccount.create({
  //           data: {
  //            blockchain: "tron",
  //            nativeCurrency: "trx",
  //            currencyName: "trx",
  //            currencySymbol: "trx",
  //            walletAddress: account.account,
  //            privateKey: account.privateKey,
  //            quantity: 0,
  //            userId: id.toString()
  //           }
  //       })
  //   }
 
    
  //  }
   
  //   address = await prismadb.cryptoAccount.findFirst({

  //   where: {
  //       blockchain: blockchain?.toString() === "tron"? "tron": "evm" ,
  //       userId: id?.toString()
  //   }

  //  })

//    const sendData = {
//     address: address?.walletAddress,
//     blockchain: address?.blockchain
// }




// const walletData = {
// userId: id,
// tron: 0,
// ethereum: 0,
// binance :0,
// usdt :0,
// bitcoin :0,
// matic : 0
// }

// const wallet = await prismadb.spotWallet.create({
// data: {
//   userId: id,
//   tron: 0,
//   matic: 0,
//   ethereum: 0,
//   binance: 0,
//   bitcoin: 0,
//   usdt: 0
// }
// })


    
 

    

   
     
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}