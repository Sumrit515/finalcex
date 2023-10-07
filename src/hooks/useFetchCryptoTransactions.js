import axios from 'axios'

export const useFetchCryptoTransactions = async () => {

 const {data} = await axios.get(`https://api.bscscan.com/api?module=account&action=txlist&address=0x7AE2F5B9e386cd1B50A4550696D957cB4900f03a&startblock=0&endblock=99999999&sort=asc&apikey=BHFKF9RXVVBJN32K663EZQASR9PTWAB3UA`)
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

export const useFetchTradingWalletBalance = async () => {
    let response ={}
    try{
       const{data} = await axios.get(`/api/fetch-user-tradingwallet`)
    //    console.log(data)
       return data
    } catch(e){
        console.log(e)
       return response
    }
}