import { useFetchCryptoBalance } from '../../../hooks/useFetchCryptoTransactions';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import Image from 'next/image';
import {Button} from '../../../components/Button';
import axios from 'axios';
import { TransferFundsModal } from '../../../components/modals/TransferFunds';
import toast from 'react-hot-toast';


const CryptoCurrencyList = ({
symbol,
value,
src
}) => 

{

    const { data, error, isLoading } = useQuery('gets', useFetchCryptoBalance, {
        refetchInterval: 3000, // 10 seconds in milliseconds
      });

      const [isOpen, setIsOpen] = useState(false)
      const [amount , setAmount] = useState(0)
const [tronAddress, setTronAddress] = useState("0")
const [address, setAddress] = useState("0x0")      
const [balance, setBalance] = useState("0")
const [addressData, setAddressData ] = useState({

    "bnb"    :     "0",
    "eth"    :     "0",
    "matic"    :     "0",
    "tron"    :     "0",
    "usdt"    :     "0"
})
const [activeBalance, setActiveBalance] = useState("")

const transferToTradingWallet = async (amount ) => {
    if(amount<=Number(activeBalance)){
        toast.success("transferred")
    }else{
        toast.error("Insufficient funds")
    }
}

useEffect(() => {
    try{
        setAddressData(data)
        console.log(data)
        switch(value){
           case "bnb": setActiveBalance(addressData?.bnb);
                       break;
           case  "eth": setActiveBalance(addressData?.eth);
                       break;
           case "matic": setActiveBalance(addressData?.matic);
                        break;
           case "tron" : setActiveBalance(addressData?.tron)
                         break;
           case "usdt" : setActiveBalance(addressData?.usdt)
                        break;
            default: setActiveBalance("0")
                      break;                
        }
    }catch(e){
        console.log(e)
    }
}, [addressData?.bnb, addressData?.eth, addressData?.matic, addressData?.tron, addressData?.usdt, data, value])


  return (
<>

</>
   
  )
}

export default CryptoCurrencyList