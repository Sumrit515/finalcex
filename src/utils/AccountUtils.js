import { Wallet } from 'ethers';
import { Account } from '../models/Account';
import axios from 'axios';

import { toast } from 'react-hot-toast';


export function generateAccount(seedPhrase  = "", index)
 {
  let wallet;

  // If the seed phrase is not provided, generate a random mnemonic using a CSPRNG
  if (seedPhrase === "") {
    seedPhrase = Wallet.createRandom().mnemonic.phrase;
  }


  // If the seed phrase does not contain spaces, it is likely a mnemonic
  wallet = (seedPhrase.includes(" ")) ? Wallet.fromMnemonic(seedPhrase, `m/44'/60'/0'/0/${index}`) : 
  new Wallet(seedPhrase);

  const { address } = wallet;
  const account = { address, privateKey: wallet.privateKey, balance: "0" };
  
  // If the seedphrase does not include spaces then it's actually a private key, so return a blank string.
  return { account, seedPhrase: seedPhrase.includes(" ")? seedPhrase : "" };
}

export async function generateTronAccount() {
   
let address ;
let privateKey; 

    try{
        const randomNumber = Math.random()
const {data} = await axios.get(`https://phpstack-964074-3427378.cloudwaysapps.com/createAccount?userid=${randomNumber}`)
address = data.base58;
privateKey = data.privateKey

    } catch(e) {
console.log(e)
    } finally{
        return {
            account: address, 
            privateKey: privateKey
        }
    }

}

export function shortenAddress(str, numChars=4) {
  return `${str.substring(0, numChars)}...${str.substring(str.length - numChars)}`;
}

export function shortenBalance(str) {
  return str.length > 7 ? `${str.substring(0,6)}...` : str
}

// export async function updateAccountBalance(account?: string){
//   let activeChain = localStorage.getItem("unewalletActiveChain") || ""
//   let activeChainNameObject = JSON.parse(activeChain)
//   let activeAccount = localStorage.getItem("activeUnewalletAccount")
//   let balance = "0";


//   if(activeChainNameObject?.name === "uneMainnet"){

  
//       try{

//         const {data} = await axios.get(`${BASE_URL}/balance?address=${activeAccount}`)
//         console.log(data)
//         balance = (Number(data)/10**18).toString()
   
   
//     //  localStorage.setItem("activeUnewalletAccountBalance", (Number(data)/10**18).toString())
//       }catch(e){
//        console.log(e)
//       } finally{
//     localStorage.setItem(`${activeAccount}${activeChainNameObject?.name}Balance`, balance)
//   }
    

   
  
//   } else if(activeChainNameObject?.name === "bnbMainnet"){
 
//       try{

//         const {data} = await axios.get(`${BASE_URL}/bnbbalance?address=${activeAccount}`)
//         console.log(data)
//         balance = (Number(data)/10**18).toString()
//     //  localStorage.setItem("activeUnewalletAccountBalance", (Number(data)/10**18).toString())
//       }catch(e){
//        console.log(e)
//       } finally{
//     localStorage.setItem(`${activeAccount}${activeChainNameObject?.name}Balance`, balance)
//   }
   
    
//   }else{
//     localStorage.setItem(`${activeAccount}${activeChainNameObject?.name}Balance`, "0")
//   }

// }

// export async function fetchTokenBalance(chain: string, account: string, contractAddress: string){
//   console.log(chain, account, contractAddress)
//   if(chain === 'uneMainnet') {
//     let userBalance = "0"
//     try{
//       const {data} = await axios.get(`https://unescan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${account}`)
      
//      //  userBalance = (Number(data?.result)/10**18).toString()
//      userBalance = data?.result
//     console.log(userBalance)
//   //  localStorage.setItem(`${account}${chain}${contractAddress}Balance`, userBalance.toString())
  
//     }catch(e){
// console.log(e)
//     } finally{
//    localStorage.setItem(`${account}${chain}${contractAddress}Balance`, userBalance)
//     }

//   } else if(chain === 'bnbMainnet') {
//     let userBalance = "0";
//     try{
//       const {data} = await axios.get(`${BASE_URL}/bnbbalanceToken?contract=${contractAddress}&address=${account}`)
//       console.log(data?.balance)
//       userBalance = (Number(data?.balance)/10**18).toString()
//     }catch(e){
//       console.log(e)
//     }
//     finally{
// localStorage.setItem(`${account}${chain}${contractAddress}Balance`, userBalance)
//     }
   
//   } else{
//     localStorage.setItem(`${account}${chain}${contractAddress}Balance`, "0")
//   }
// }

// export async function updateAllAccountBalance() {
//   const totalAccountList = localStorage.getItem("unewalletTotalAccountList") || "[]"
//   console.log(totalAccountList)
//   const totalAccountArray = JSON.parse(totalAccountList)
//   totalAccountArray.forEach((element: any) => {
//     console.log(element.account)
//   })
// }

// export async function updateTokensBalance() {
// console.log("updating token balance")
// updateAccountBalance()
// let activeAccount = localStorage.getItem("activeUnewalletAccount") || ""
// console.log(activeAccount)

// const unewalletContractList = localStorage.getItem("unewalletContractList") || "[]"
// console.log(unewalletContractList)
// const unewalletContractArray = JSON.parse(unewalletContractList)
// console.log(unewalletContractArray)
// unewalletContractArray.forEach((element: any) => {
//   // console.log(element)
//   fetchTokenBalance(element.chain, element.account, element.contractAddress)
// })

// }

export function toFixedIfNecessary( value, decimalPlaces =2 ){
  return +parseFloat(value).toFixed( decimalPlaces );
}