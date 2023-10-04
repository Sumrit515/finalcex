import React, { useEffect, useState } from "react";
import {auth} from '@clerk/nextjs'
import axios from "axios";
import { data } from "autoprefixer";
import { toast } from "react-hot-toast";

// interface PlaceOrderProps {
//   tradeSymbolFirst ?: string;
//   tradeSymbolSecond ?: string;
// }

const PlaceOrder = ({
  tradeSymbolFirst,
  tradeSymbolSecond
}) => {
  const [selectBuy, setSelectBuy] = useState(true);
  const [selectSell, setSelectSell] = useState(false);
  const [selectLimit, setSelectLimit] = useState(false);
  const [selectMarket, setSelectMarket] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [quantity, setQuantity] = useState("0")
  const [price, setPrice] = useState("")
  const [availableBalanceFirstSymbol, setAvailableBalanceFirstSymbol] = useState(30000)
  const [availableBalanceSecondSymbol, setAvailableBalanceSecondSymbol] = useState(30000)
  

  useEffect(() => {
    const fetch =async () =>{
      try{
        const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${tradeSymbolFirst?.toUpperCase()}${tradeSymbolSecond?.toUpperCase()}`)
        //  console.log(res?.data)
        const response = await axios.get(`http://localhost:3000/api/fetch-user-tradingwallet`)
        // setAvailableBalanceFirstSymbol(response.data[tradeSymbolSecond?.toLowerCase() || "usdt"])
        //   setAvailableBalanceSecondSymbol(response.data[tradeSymbolSecond?.toLowerCase() || "usdt"])
          //  console.warn(tradeSymbolSecond?.toLowerCase())
              setPrice(Number(res?.data?.price).toFixed(3))
      }catch(e){
        console.log(e)
      }
     
    }
fetch()
 
  }, [])


  const onBuy = async () => {
      setIsLoading(true)
      alert(Number(quantity)>0)
   try{
    if(availableBalanceFirstSymbol >= Number(quantity)){
      if(Number(quantity)>0) {
        try{

          const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${tradeSymbolFirst?.toUpperCase()}${tradeSymbolSecond?.toUpperCase()}`)
    //  console.log(res?.data)
          setPrice(Number(res?.data?.price).toFixed(3))
          console.log(price)
          const data = {
            type: "buy",
            amount: (Number(quantity) * Number(Number(res?.data?.price).toFixed(3)))?.toFixed(4),
            quantity: quantity.toString() ,
            symbol: `${tradeSymbolFirst?.toLowerCase()}_${tradeSymbolSecond?.toLowerCase()}`,
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
   
     }
else{
toast.error("Insufficient Funds")
}
   } catch(e){
    console.log(e)
   }
   finally{
    setIsLoading(false)
   }
   
     

  }
  const onSell = async () => {
    setIsLoading(true)

    try{

      const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${tradeSymbolFirst?.toUpperCase()}${tradeSymbolSecond?.toUpperCase()}`)
//  console.log(res?.data)
      setPrice(Number(res?.data?.price).toFixed(3))
      console.log(price)
      const data = {
        type: "sell",
        amount: (Number(quantity) * Number(Number(res?.data?.price).toFixed(3)))?.toFixed(4),
        quantity: quantity.toString() ,
        symbol: `${tradeSymbolFirst?.toLowerCase()}_${tradeSymbolSecond?.toLowerCase()}`,
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

  return (
    <>
      <div
        className="
          flex
          flex-col
          gap-4
          w-full
          h-full
          "
      >
        <div
          className="
          self-center
          font-bold
          text-[20px]
          "
        >
          SPOT
        </div>
        <div
          className="
          gap-4
          flex
          flex-col
          "
        >
          <div
            className="
            flex
            flex-row
          bg-slate-100
            p-1
            gap-8
            items-center
            justify-center
            text-center
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
   pr-3
   `}
            >
              MARKET
            </div>
            {/* <div
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
            </div> */}
          </div>
          <div className="
          flex
          flex-row
          gap-4

          " >
            <p 
            className="
            font-semibold
            "
            >
            Available Balance :
            </p>
            
          <span className="
       
          
          ">
            {availableBalanceFirstSymbol}
            <span className="
            ml-4
            ">
            {tradeSymbolSecond}
            </span>
         
          </span>
          </div>
          <div className="
          flex
          flex-row
          gap-4

          " >
            <p 
            className="
            font-semibold
            "
            >
            Available Balance :
            </p>
            
          <span className="
       
          
          ">
            {availableBalanceSecondSymbol}
            <span className="
            ml-4
            ">
            {tradeSymbolFirst}
            </span>
         
          </span>
          </div>
          
          <div>
            {/* <div
              className="
    grid
    mb-2
    grid-cols-2
    place-items-center
    bg-slate-100
    p-1
    "
            >
              <div
                onClick={() => {
                  setSelectBuy(true);
                  setSelectSell(false);
                  
                }}
                className={`
w-full
text-center
${selectBuy ? "bg-green-300" : ""}
${selectBuy ? "text-white" : "text-black"}
hover:cursor-pointer
`}
              >
                BUY
              </div>
              <div
                onClick={() => {
                  setSelectBuy(false);
                  setSelectSell(true);
                }}
                className={`
w-full
text-center
${selectSell ? "bg-red-300" : ""}
${selectSell ? "text-white" : "text-black"}
hover:cursor-pointer
`}
              >
                SELL
              </div>
            </div> */}
            <div
              className="
flex
flex-col
gap-4
"
            >
              {/* <div
                className="
    w-full
    flex
    flex-row
    border-[1px]
    p-2
    focus:border-purple-700
    rounded-lg
    border-black
    gap-2
    font-semibold
    "
              >
                Price ({tradeSymbolSecond}):{" "}
                <input
                  className="
grow
text-right
outline-none
"
                />
              </div> */}
              <div
                className="
              flex
              flex-row
              border-[1px]
              p-2
              rounded-lg
              border-black
              gap-2
              font-semibold
              "
              >
                Quantity ({tradeSymbolFirst}):{" "}
                <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                  className="
                grow
                text-right
                outline-none
                "
                />
                
              </div>
              <p className="
              
              "> You will have to pay :<span className="
              font-semibold
              ml-4
              ">
                {Number(price) * Number(quantity)}
                </span> </p>
              <div className="
              flex
              flex-row
              justify-between
              gap-4
              ">
   <button
              disabled={isLoading}
                onClick={() => onBuy()}
                className={`
    w-full
    text-center
    p-2
    rounded-lg
    disabled:opacity-80
    disabled:cursor-not-allowed
   bg-black
  hover:opacity-80
  text-white
    font-semibold
    `}
              >
                BUY
              </button>
              <button
              disabled={isLoading}
                onClick={() => onSell()}
                className={`
    w-full
    text-center
    p-2
    rounded-lg
    disabled:opacity-80
    disabled:cursor-not-allowed
   bg-black
   hover:opacity-80
  text-white
    font-semibold
    `}
              >
                SELL
              </button>


  </div>

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
