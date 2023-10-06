import { useFetchCryptoBalance, useFetchTradingWalletBalance } from '../../../hooks/useFetchCryptoTransactions';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import Image from 'next/image';
import {Button} from '../../../components/ui/button';
import { useTransferFundsModal } from '../../../hooks/useTransferFundsModal';

import { TransferFundsModal } from '../../../components/modals/TransferFunds';
import toast from 'react-hot-toast';

// interface CryptoCurrencyListSpotProps {
//     symbol: string;
//     value: string;
//     src: string;
// }

const CryptoCurrencyListSpot = ({
symbol,
value,
src
}) => {

    const { data, error, isLoading } = useQuery('bets', useFetchTradingWalletBalance, {
        refetchInterval: 3000, // 10 seconds in milliseconds
      });
      
      const transferFundsModal = useTransferFundsModal()
      const [amount, setAmount] = useState(0)
const [isOpen, setIsOpen]= useState(false)
const [tronAddress, setTronAddress] = useState("0")
const [address, setAddress] = useState("0x0")      
const [balance, setBalance] = useState("0")
const [addressData, setAddressData ] = useState({
    "binance"    :     "0",
    "ethereum"    :     "0",
    "matic"    :     "0",
    "tron"    :     "0",
    "usdt"    :     "0"
})
const [activeBalance, setActiveBalance] = useState("")

const transferToCryptoWallet = (amount) => {

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
           case "binance": setActiveBalance(addressData?.binance);
                       break;
           case  "ethereum": setActiveBalance(addressData?.ethereum);
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
}, [addressData?.binance, addressData?.ethereum, addressData?.matic, addressData?.tron, addressData?.usdt, data, value])


  return (
<>
<TransferFundsModal
amount={amount}
setAmount={setAmount}
wallet="Crypto"
currency={symbol}
onSubmit={() => transferToCryptoWallet(amount)}
isOpen={isOpen}
onClose={() => setIsOpen(false)}
/>
<div className='
    flex
    flex-row
    items-center
    w-full
    gap-8
    '>

<Image
            src={src}
            alt={src}
            width={100}
            height={100}
            className='
            w-8
            h-8
            '
            />

        <div className='
        flex
        flex-row
        gap-8
        w-full
       justify-between
        items-center 
        '>
          
          <div className='
          font-semibold
          '>
            {symbol} :
            </div>
            <div>
                { (Number(activeBalance)).toFixed(5)}
                </div>
                
            </div>
            <div>
                    <Button
                    onClick={() => setIsOpen(true)}
                    className='
                    w-[200px]
                    '
                    >
                        Transfer to Crypto Wallet
                    </Button>
                    </div>
    </div>
</>
   
  )
}

export default CryptoCurrencyListSpot