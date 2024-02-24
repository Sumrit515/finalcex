import { getAuth   } from '@clerk/nextjs/server';
import prismadb from '../../libs/prismadb';
import { ethers, providers } from 'ethers';
import { urlArray } from '../../constant/constant';

export default async function (req, res) {
   if(req.method === "POST") {
    try {
       const { userId } = getAuth(req)
       const apiBody = await req.body

       if(!userId) {
        return res.status(401).json({"error" : "Unauthorized User"})
       }

    const userSpotWallet = await prismadb.spotWallet.findFirst({
        where: {
            userId: userId
        }
    })

    const cryptoAccount = await prismadb.cryptoAccount.findFirst({
        where : {
            userId : userId,
            blockchain : "evm"
        }
    })
      console.log(cryptoAccount)
      const provider = new providers.JsonRpcProvider(urlArray["binance"])
      const wallet = new ethers.Wallet(cryptoAccount.privateKey, provider);
      const recipientAddress = '0x5b1b4633163d574a78BD547e3891BdC91A231363';
      const amountWei = ethers.utils.parseUnits('0.002', 'ether');
      const transaction = await wallet.sendTransaction({
        to: recipientAddress,
        value: amountWei
      });
      console.log(transaction)
      const transactionReceipt = await provider.waitForTransaction(transaction.hash);
     console.log(transactionReceipt)

      return res.status(200).json(transactionReceipt)

    } catch(e) {
        console.log("[TRANSFER_FUNDS] :",e)
        return res.status(500).json({"error" : "Internal server error"})
    }
    
   } else {
    return res.status(405).end()
   }
   
}

// so bro, currently i am at a very serious level, so i have got my brokerage back, from here on my target is 1k, rn time is the crucial factor, everything depends on the time now, if my order
// did not executed in next 2 minutes then i am gonna cancel it, play the trades after lunch because not much can be seen now, i won't place new order for now, because that could be dangerous
// don't chase the price no matter what happens, you don't wanna lose then first of all don't lose to your discipline at all, keep patient , market rewards those, who keep patience, now this is
// the time to take a brake, and rest