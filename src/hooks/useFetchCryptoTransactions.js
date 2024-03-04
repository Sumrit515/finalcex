import axios from 'axios'
import toast from 'react-hot-toast'


export const useFetchCryptoTransactions = async () => {

   

    const {data} = await axios.get(`/api/fetch-evm-transactions`)
 return data
}

export const useFetchCryptoBalance = async () => {
let data = {}
try{

    const tronAddressData = await axios.get(`/api/fetchUserAddress?blockchain=tron`) 
    const addressData = await axios.get(`/api/fetchUserAddress?blockchain=evm`)
    const usdtContractAddress = "0x55d398326f99059ff775485246999027b3197955"
    const binanceData = await axios.get(`https://api.bscscan.com/api?module=account&action=balance&address=${addressData?.data?.address}&apikey=BHFKF9RXVVBJN32K663EZQASR9PTWAB3UA`)
    const maticData = await axios.get(`https://api.polygonscan.com/api?module=account&action=balance&address=${addressData?.data?.address}&apikey=X4AQUWMJSXFEF3Q5JM4AABZYWK5TSMRKY1`)
    const tronData = await axios.get(`https://apilist.tronscanapi.com/api/accountv2?address=${tronAddressData?.data?.address}`)
    const ethData = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${addressData?.data?.address}&tag=latest&apikey=s4dai6er88jdc43w3kw1yg873kdusfj7n2`)
    const usdtData = await axios.get(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${usdtContractAddress}&address=${addressData?.data?.address}&tag=latest&apikey=BHFKF9RXVVBJN32K663EZQASR9PTWAB3UA`)

     data = {
        "bnb": binanceData?.data?.result,
        "matic": maticData?.data?.result,
        "tron": tronData?.data?.balance,
        "eth": ethData?.data?.result,
        "usdt": usdtData?.data?.result
    }

    return data
} catch(e){
console.log(e)
return data

}



}

export const useFetchTokenList = async () => {
  const resp = await axios.get("/api/fetch-token-list")
  // console.log('[HOOKS_FETCH_TOKENS_LIST]',resp.data)
  return resp.data.tokenList;
}

export const useFetchTradingWalletBalance = async () => {
    let response ={}
    try{
       const{data} = await axios.get(`/api/fetch-user-spot-balance`)
     
       return data
    } catch(e){
        console.log(e)
       return response
    }
}

export const useFetchUserCryptoBalance = async () => {

   
        try {
          const {data} = await axios.get(`/api/fetch-user-crypto-balance`)
          console.log(data)
          return data
        } catch(e) {
          toast.error("Failed to fetch balance")
          console.log(e)
          return e
        } 
   
}

export const useFetchUserSpotBalance = async () => {
  try {
  
  const {data} = await axios.get(`/api/fetch-user-spot-balance`)
  console.log('[SPOT_WALLET]',data)
  return data

  } catch(e) {
    toast.error("Failed to fetch balance")
    console.log("[FETCH_SPOT_BALANCE]",e)
    return e
  }
}