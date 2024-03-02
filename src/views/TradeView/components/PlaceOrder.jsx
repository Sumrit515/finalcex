import React, { useEffect, useState } from "react";
import {auth} from '@clerk/nextjs'
import axios from "axios";
import { data } from "autoprefixer";
import { toast } from "react-hot-toast";
import { useFetchTradingWalletBalance } from "../../../hooks/useFetchCryptoTransactions";
import { useQuery } from "react-query";
import PlaceOrderSplit from "./PlaceOrderSplit";
import { PRICEURL, coingecko } from "../../../constant/constant";

// interface PlaceOrderProps {
//   tradeSymbolFirst ?: string;
//   tradeSymbolSecond ?: string;
// }

const PlaceOrder = ({
  tradeSymbolFirst,
  tradeSymbolSecond
}) => {

  const { data, error } = useQuery('bets', useFetchTradingWalletBalance, {
    refetchInterval: 3000, // 10 seconds in milliseconds
  });

  const [selectBuy, setSelectBuy] = useState(true);
  const [selectSell, setSelectSell] = useState(false);
  const [selectLimit, setSelectLimit] = useState(false);
  const [selectMarket, setSelectMarket] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [buyQuantity, setBuyQuantity] = useState("0")
  const [sellQuantity, setSellQuantity] = useState("0")
  const [buyPrice, setBuyPrice] = useState("")
  const  [sellPrice, setSellPrice] = useState("")
  const [availableBalanceFirstSymbol, setAvailableBalanceFirstSymbol] = useState("0")
  const [availableBalanceSecondSymbol, setAvailableBalanceSecondSymbol] = useState("0")
  

  useEffect(() => {
    const fetch =async () =>{
      try{
        
        const res = await axios.get(`${PRICEURL}?ids=${coingecko[tradeSymbolFirst]}&vs_currencies=usd`)
        //  console.log(res?.data)
        // const response = await axios.get(`http://localhost:3000/api/fetch-user-tradingwallet`)
        // setAvailableBalanceFirstSymbol(response.data[tradeSymbolSecond?.toLowerCase() || "usdt"])
        //   setAvailableBalanceSecondSymbol(response.data[tradeSymbolSecond?.toLowerCase() || "usdt"])
          //  console.warn(tradeSymbolSecond?.toLowerCase())
          console.log(data)
          const firstSymbol = coingecko[tradeSymbolFirst]
          const secondSymbol = coingecko[tradeSymbolSecond]
          setAvailableBalanceFirstSymbol(data[tradeSymbolFirst?.toLowerCase()])
          setAvailableBalanceSecondSymbol(data[tradeSymbolSecond?.toLowerCase()])
      
          setBuyPrice(Number(res?.data?.[firstSymbol].usd).toFixed(3))
          setSellPrice(Number(res?.data?.[firstSymbol].usd).toFixed(3))
      }catch(e){
        console.log(e)
      }
     
    }
fetch()
 
  }, [tradeSymbolFirst, tradeSymbolSecond, data])


  const onBuy = async () => {
      setIsLoading(true)
      // alert(Number(quantity)>0)
   try{
    const res = await axios.get(`${PRICEURL}?ids=${coingecko[tradeSymbolFirst]}&vs_currencies=usd`)
    const firstSymbol = coingecko[tradeSymbolFirst]
    const secondSymbol = coingecko[tradeSymbolSecond]
    if(availableBalanceSecondSymbol > 0) {
       const total = (Number(buyQuantity) * Number(Number(res?.data?.[firstSymbol].usd).toFixed(3)))?.toFixed(4)
      // alert(total)
        if(Number(availableBalanceSecondSymbol) > Number(total)){
         
            if(Number(buyQuantity)>0) {
              try{
      
                
          //  console.log(res?.data)
          setBuyPrice(Number(res?.data?.[firstSymbol].usd).toFixed(3))
                setSellPrice(Number(res?.data?.[firstSymbol].usd).toFixed(3))
              //  console.log(price)
                const data = {
                  type: "buy",
                  price:   Number(res?.data?.[firstSymbol].usd).toFixed(3)  ,
                  value: (Number(buyQuantity) * Number(Number(res?.data?.[firstSymbol].usd).toFixed(3)))?.toFixed(4),
                  quantity: buyQuantity.toString() ,
                  tradeSymbolFirst: tradeSymbolFirst.toLowerCase(),
                  tradeSymbolSecond: tradeSymbolSecond.toLowerCase(),
                  status: 'pending',
                  orderType: selectMarket? "market" : "limit" ,
                  isCompleted: false
                      }
                
                      await axios.post(`/api/order`, data)
                
                      toast.success("Order Placed")
              } catch(e){
        console.log(e)
        toast.error("Something went wrong")
              } finally{
        setIsLoading(false)
              }
            }
            else{
              toast.error("Quantity should be more than 0")
            }
         
      
        } else{
          toast.error(`Insufficient ${tradeSymbolSecond} Balance`)
        }
    } else {
      toast.error(`Insufficient ${tradeSymbolSecond} Balance`)
    }

  
   } catch(e){
    console.log(e)
   }
   finally{
    setIsLoading(false)
   }
   
     

  }

  const test = () => {
    alert(availableBalanceSecondSymbol)
  }
  const onSell = async () => {
    setIsLoading(true)
   
    try{

      const res = await axios.get(`${PRICEURL}?ids=${coingecko[tradeSymbolFirst]}&vs_currencies=usd`)
      const firstSymbol = coingecko[tradeSymbolFirst]
      const secondSymbol = coingecko[tradeSymbolSecond]
      //  console.log(res?.data)
      setBuyPrice(Number(res?.data?.[firstSymbol].usd).toFixed(3))
      setSellPrice(Number(res?.data?.[firstSymbol].usd).toFixed(3))
      // console.log(price)
   

            const data = {
              type: "sell",
              price:   Number(res?.data?.[firstSymbol].usd).toFixed(3)  ,
              value: sellQuantity?.toString() ,
              quantity: sellQuantity.toString() ,
              tradeSymbolFirst: tradeSymbolFirst.toLowerCase(),
              tradeSymbolSecond: tradeSymbolSecond.toLowerCase(),
              status: 'pending',
              orderType: selectMarket? "market" : "limit" ,
              isCompleted: false
                  }
      
            await axios.post(`/api/order`, data)
      
            toast.success("Order Placed")
    } catch(e){
console.log(e)
toast.error(`Insufficient ${tradeSymbolFirst} Balance`)
    } finally{
setIsLoading(false)
    }

}

  return (

<>

        <div
          className="
          font-bold
          text-[20px]
          text-center
          w-full
          "
        >
          SPOT
        </div>

        {/* <div
            className="
            flex
            flex-row
            bg-slate-100
            p-1
            w-full
            items-center
            justify-center
        
            "
          >
            <div
              onClick={() => {
                setSelectLimit(false);
                setSelectMarket(true);
              }}
              className={`
              font-semibold
              hover:cursor-pointer
              p-1
              rounded-md
              ${selectMarket ? "text-white" : "text-black"}
              ${selectMarket ? "bg-black" : ""}
              ${selectMarket ? "hover:opacity-80" : ""}
              px-2
              `}
                        >
              MARKET
            </div>
            <div
              onClick={() => {
                setSelectLimit(true);
                setSelectMarket(false);
              }}
              className={`
              font-semibold
              rounded-md
              hover:cursor-pointer
              ${selectLimit ? "text-white" : "text-black"}
              ${selectLimit ? "bg-black" : ""}
              ${selectLimit ? "hover:opacity-80" : ""}
              p-1
              pr-3
              `}
            >
              LIMIT
            </div>
          </div> */}

              <div class="market-trade">
                  <ul id="myTab" role="tablist" class="nav nav-tabs">
                      <li role="presentation" class="nav-item"><button id="limit-tab" data-bs-toggle="tab" data-bs-target="#limit" type="button" role="tab" aria-controls="limit" aria-selected="true" class="nav-link active"> Market </button></li>
                      
                  </ul>
               
              </div>

        <div className="
        flex
        flex-row
        gap-8
        ">
          <div className="
          flex-1
          ">
          <PlaceOrderSplit 
            caption={"You will have to Pay :"}
            availableBalanceFirstSymbol={availableBalanceFirstSymbol}
            availableBalanceSecondSymbol={availableBalanceSecondSymbol}
            availableBalance={availableBalanceSecondSymbol}
            tradeSymbol={tradeSymbolSecond}
            tradeSymbolFirst={tradeSymbolFirst}
            tradeSymbolSecond={tradeSymbolSecond}
            selectMarket={selectMarket}
            selectLimit={selectLimit}
            setSelectLimit={setSelectLimit}
            setSelectMarket={setSelectMarket}
            price={buyPrice}
            quantity={buyQuantity}
            setQuantity={setBuyQuantity}
            setPrice={setBuyPrice}
            onSubmit={onBuy}
            isLoading={isLoading}
            buttonText="Buy"
          />
          </div>
          <div className="flex-1">
          <PlaceOrderSplit
          caption={"You will Recieve :"}
          availableBalanceFirstSymbol={availableBalanceFirstSymbol}
          availableBalanceSecondSymbol={availableBalanceSecondSymbol}
          availableBalance={availableBalanceFirstSymbol}
          tradeSymbol={tradeSymbolFirst}
          tradeSymbolFirst={tradeSymbolFirst}
          tradeSymbolSecond={tradeSymbolSecond}
          selectMarket={selectMarket}
          selectLimit={selectLimit}
          setSelectLimit={setSelectLimit}
          setSelectMarket={setSelectMarket}
          price={sellPrice}
          quantity={sellQuantity}
          setQuantity={setSellQuantity}
          setPrice={setSellPrice}
          onSubmit={onSell}
          isLoading={isLoading}
          buttonText="Sell"
          />
          </div>

</div>
</>

  );
};

export default PlaceOrder;


// this is the new file that i should work on now, i got tasks to do now, time to start the work now, first this is a ego problem, and 2nd what is this man i can't stop laughimg , it's hilarious , oh man man man it was , but what should i do now, what should i tell her now, the boy is right, man it looks good, 