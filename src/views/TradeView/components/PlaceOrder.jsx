import React, { useEffect, useState } from "react";
import {auth} from '@clerk/nextjs'
import axios from "axios";
import { data } from "autoprefixer";
import { toast } from "react-hot-toast";
import { useFetchTradingWalletBalance } from "../../../hooks/useFetchCryptoTransactions";
import { useQuery } from "react-query";
import PlaceOrderSplit from "./PlaceOrderSplit";

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
        const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${tradeSymbolFirst?.toUpperCase()}${tradeSymbolSecond?.toUpperCase()}`)
        //  console.log(res?.data)
        const response = await axios.get(`http://localhost:3000/api/fetch-user-tradingwallet`)
        // setAvailableBalanceFirstSymbol(response.data[tradeSymbolSecond?.toLowerCase() || "usdt"])
        //   setAvailableBalanceSecondSymbol(response.data[tradeSymbolSecond?.toLowerCase() || "usdt"])
          //  console.warn(tradeSymbolSecond?.toLowerCase())
          setAvailableBalanceFirstSymbol(data[tradeSymbolFirst?.toLowerCase()])
          setAvailableBalanceSecondSymbol(data[tradeSymbolSecond?.toLowerCase()])
          setBuyPrice(Number(res?.data?.price).toFixed(3))
          setSellPrice(Number(res?.data?.price).toFixed(3))
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
    const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${tradeSymbolFirst?.toUpperCase()}${tradeSymbolSecond?.toUpperCase()}`)
    if(availableBalanceSecondSymbol > 0) {
       const total = (Number(buyQuantity) * Number(Number(res?.data?.price).toFixed(3)))?.toFixed(4)
       alert(total)
        if(Number(availableBalanceSecondSymbol) > Number(total)){
         
            if(Number(buyQuantity)>0) {
              try{
      
                
          //  console.log(res?.data)
          setBuyPrice(Number(res?.data?.price).toFixed(3))
                setSellPrice(Number(res?.data?.price).toFixed(3))
                console.log(price)
                const data = {
                  type: "buy",
                  price:   Number(res?.data?.price).toFixed(3)  ,
                  value: (Number(buyQuantity) * Number(Number(res?.data?.price).toFixed(3)))?.toFixed(4),
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
          toast.error(`Insufficient ${tradeSymbolSecond} one Balance`)
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

      const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${tradeSymbolFirst?.toUpperCase()}${tradeSymbolSecond?.toUpperCase()}`)
//  console.log(res?.data)
setBuyPrice(Number(res?.data?.price).toFixed(3))
      setSellPrice(Number(res?.data?.price).toFixed(3))
      console.log(price)
      const data = {
        type: "sell",
        amount: (Number(sellQuantity) * Number(Number(res?.data?.price).toFixed(3)))?.toFixed(4),
        quantity: sellQuantity.toString() ,
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
//     <>
//       <div
//         className="
//           flex
//           flex-col
//           gap-4
//           w-full
//           h-full
//           "
//       >
//         <div
//           className="
//           self-center
//           font-bold
//           text-[20px]
//           "
//         >
//           SPOT
//         </div>
//         <div
//           className="
//           gap-4
//           flex
//           flex-col
//           "
//         >
//           <div
//             className="
//             flex
//             flex-row
//           bg-slate-100
//             p-1
//             gap-8
//             items-center
//             justify-center
//             text-center
//             "
//           >
//             <div
//               onClick={() => {
//                 setSelectLimit(false);
//                 setSelectMarket(true);
//               }}
//               className={`
//    font-semibold
//    hover:cursor-pointer
//    p-1
   
//    rounded-md
   
//    ${selectMarket ? "text-white" : "text-black"}
//    ${selectMarket ? "bg-black" : ""}
//    ${selectMarket ? "hover:opacity-80" : ""}
//    pr-3
//    `}
//             >
//               MARKET
//             </div>
//             {/* <div
//               onClick={() => {
//                 setSelectLimit(true);
//                 setSelectMarket(false);
//               }}
//               className={`
//    font-semibold
//    rounded-md
//    hover:cursor-pointer
//    ${selectLimit ? "text-white" : "text-black"}
//    ${selectLimit ? "bg-black" : ""}
//    ${selectLimit ? "hover:opacity-80" : ""}
//    p-1
//    pr-3
//    `}
//             >
//               LIMIT
//             </div> */}
//           </div>
//           <div className="
//           flex
//           flex-row
//           gap-4

//           " >
//             <p 
//             className="
//             font-semibold
//             "
//             >
//             Available Balance :
//             </p>
            
//           <span className="
       
          
//           ">
//             {availableBalanceSecondSymbol}
//             <span className="
//             ml-4
//             ">
//             {tradeSymbolSecond}
//             </span>
         
//           </span>
//           </div>
//           <div className="
//           flex
//           flex-row
//           gap-4

//           " >
//             <p 
//             className="
//             font-semibold
//             "
//             >
//             Available Balance :
//             </p>
            
//           <span className="
       
          
//           ">
//             {availableBalanceFirstSymbol}
//             <span className="
//             ml-4
//             ">
//             {tradeSymbolFirst}
//             </span>
         
//           </span>
//           </div>
          
//           <div>
//             {/* <div
//               className="
//     grid
//     mb-2
//     grid-cols-2
//     place-items-center
//     bg-slate-100
//     p-1
//     "
//             >
//               <div
//                 onClick={() => {
//                   setSelectBuy(true);
//                   setSelectSell(false);
                  
//                 }}
//                 className={`
// w-full
// text-center
// ${selectBuy ? "bg-green-300" : ""}
// ${selectBuy ? "text-white" : "text-black"}
// hover:cursor-pointer
// `}
//               >
//                 BUY
//               </div>
//               <div
//                 onClick={() => {
//                   setSelectBuy(false);
//                   setSelectSell(true);
//                 }}
//                 className={`
// w-full
// text-center
// ${selectSell ? "bg-red-300" : ""}
// ${selectSell ? "text-white" : "text-black"}
// hover:cursor-pointer
// `}
//               >
//                 SELL
//               </div>
//             </div> */}
//             <div
//               className="
// flex
// flex-col
// gap-4
// "
//             >
//               {/* <div
//                 className="
//     w-full
//     flex
//     flex-row
//     border-[1px]
//     p-2
//     focus:border-purple-700
//     rounded-lg
//     border-black
//     gap-2
//     font-semibold
//     "
//               >
//                 Price ({tradeSymbolSecond}):{" "}
//                 <input
//                   className="
// grow
// text-right
// outline-none
// "
//                 />
//               </div> */}
//               <div
//                 className="
//               flex
//               flex-row
//               border-[1px]
//               p-2
//               rounded-lg
//               border-black
//               gap-2
//               font-semibold
//               "
//               >
//                 Quantity ({tradeSymbolFirst}):{" "}
//                 <input
//                 type="number"
//                 onChange={(e) => setQuantity(e.target.value)}
//                   className="
//                 grow
//                 text-right
//                 outline-none
//                 "
//                 />
                
//               </div>
//               <p className="
              
//               "> You will have to pay :<span className="
//               font-semibold
//               ml-4
//               ">
//                 {Number(price) * Number(quantity)}
//                 </span> </p>
//               <div className="
//               flex
//               flex-row
//               justify-between
//               gap-4
//               ">
//               <button
//               disabled={isLoading}
//             //    onClick={test}
//                 onClick={() => onBuy()}
//                 className={`
//     w-full
//     text-center
//     p-2
//     rounded-lg
//     disabled:opacity-80
//     disabled:cursor-not-allowed
//    bg-black
//   hover:opacity-80
//   text-white
//     font-semibold
//     `}
//               >
//                 BUY
//               </button>
//               <button
//               disabled={isLoading}
//                 onClick={() => onSell()}
//                 className={`
//     w-full
//     text-center
//     p-2
//     rounded-lg
//     disabled:opacity-80
//     disabled:cursor-not-allowed
//    bg-black
//    hover:opacity-80
//   text-white
//     font-semibold
//     `}
//               >
//                 SELL
//               </button>


//   </div>

             
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
<>
<div
          className="
          self-center
          font-bold
          text-[20px]
          w-full
        
          "
        >
          SPOT
        </div>

        <div
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
