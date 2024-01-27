import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import axios from "axios";
import { Order } from "@prisma/client";

// interface OrderBookProps {
//   count: number;
//   isSell?: boolean;
//   tradeSymbolFirst?: string
//   tradeSymbolSecond?: string
// }

const OrderBook = ({ count, isSell,
tradeSymbolFirst,
tradeSymbolSecond
}) => {


  const [buyOrders, setBuyOrders] = useState([]);

  const orderBookList = [
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
    {
      price: "1.02",
      amount: "4.20",
      total: "4.36",
    },
  ];

 
    useEffect(() => {
      async function fetchOrders() {
        try {
          const {data} = await axios.get(`/api/orderBook?tradeSymbolFirst=${tradeSymbolFirst?.toLowerCase()}&tradeSymbolSecond=${tradeSymbolSecond?.toLowerCase()}`);
          console.log(data)
         let newData =  data?.filter((order)  => order.type === `${isSell? "sell": "buy"}`);
         setBuyOrders(newData)
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      }
      fetchOrders()
  }, [tradeSymbolSecond, tradeSymbolFirst])



  const shortOrderBookList = orderBookList.slice(0, 5);

  return (
    <>
    <table class="table h-[350px]
    overflow-y-auto">
      <thead>
        <tr>
          <th className="h-12 px-2 text-left align-middle font-medium  ">Price({tradeSymbolSecond})</th>
          <th className="h-12 px-2 text-left align-middle font-medium  ">Amount({tradeSymbolFirst})</th>
          <th className="h-12 px-2 text-left align-middle font-medium  ">Total</th>
          </tr></thead>
          <tbody>
                 <tr><td>37008.72</td><td>0.465</td><td class="red">1.546</td></tr>
                 <tr><td>37245.24</td><td>0.541</td><td class="green">345.012</td></tr>
                 <tr><td>35771.43</td><td>1.287</td><td class="red">465.200</td></tr>
                 <tr><td>37454.16</td><td>0.497</td><td class="green">1205.321</td></tr>
                 <tr><td>37711.84</td><td>0.154</td><td class="red">48.154</td></tr>
                 <tr><td>37142.89</td><td>4.124</td><td class="red">466571.651</td></tr>
{/* 
// buddy time has come to take risk let's try this out and see what happens next let's rock it and find out , why man i broke the vows and this resulte me in the loss of 32.6 k all i can do is hope now  it;s own man i am excited for today trade last 2 days have been awesome , time to make today as awesome as well, just i imagine if some how i successfully captures the adani's intraday trade and it gave me even the 10% returns in a day, man it's gonna be a blast for me , rest depends on the strategy let's see what the strate
// buddy i should not have breeak the rules now this has costed me one more month delay, it's gonna be a little hard now, but the hopes are still up, jan or march could be the booking date, the delay cannot be longer that 23 may 2024 by that time i must have to book the car, all i am waiting is the reply from , so now, the point is i won't do the intraday until i books my car , and that too from my money that i am ready to loss 100 %, from now on no intraday trade till i have that extra 100k to blow if i don't have that kind of money then just let it go man , why to worry this much about this
// now you cannot do anything about this, what happend has happend, you cannot change it any possible way so time to accept this fact and move on, and let's decide the today's work, and focus on that now, what to do about her 
// time to freaking understand that there is no zero to hero for me now, i have lost a lot today, and if i still don't understand this, then i am gonna blow up a lot more than that, so time to decide what to do, so till may 2024        
// today was not a good day from the trading prospective i lost the amount of money i should not have , no matter how muxh dp i pay, i must have atleast 500k in my account even after paying for the car
// if thigs remain liked this then i don't when i will be able to buy one, but i cannot delay more than you can assume that the dp must be minimum 7 lacs, let's do one thing from now on, let's just simply go with the flow and         
// man man man what i did today, i repeated the same mistake that i did back in time, but now thinking of back is of no use, well i will earn back everything, this is normal humna behaviour everyone is looking to book the profit but there will be new  
// looks like it's true that th history repeats, remember buddy for now the stock market is the way to multiply your earning not blow that earning, let me hold this much amount in the account until and unless i gets atleast 7% returns       
// did not though one bad day at trading spoiled the day for me , and now i am not able to concentrate on any thing other than this now, which is a bad thing for me , things should not had to be like this, but now it is what it is.
// for now let's do one thing, let's work on slowly increasing your port, at home i need to 2 things today,. so after 6 months from now my target is to reach the 1500k mark and i am gonna react that no matter what, according to my calculation right now i need to make atleast 500k from anyother source, it could be any thing
// but it's a must if i don't do so, then it can cost me my goal, so, for now, no more zero 2 hero trades, i am gonna focus on slow and study, in last 6 months i have made nearly 100k from trading and i have also blown up the equal amont of money, but now the difference is 
// i have got experience, so from now on no intraday, no overtrading, actually i do have control over that, i even recovered some loss today, around 8k but then i ended up losing 32.7 k which was the key reason to lose the money today. well that stock was giving good returns till a point, tommorow i am thinking of taking my money out of the stocks which already have gave me the returns of more than 10 %
// , it will be round 3-4 k or something around that and i am gonna put that money back into the system. and tommorow's target is again min 500 or 1k max , this will be my targets until i make my capital 30k using opit
// looks like today's market is going to be side ways totally, so there won't be any trading opportunites today, it seems like that, anyways let's see what happens i have already placed my orders let's see the 
// for today my focus will be on smart contract as today is thrusday and then there is friday and saturday after day, i am planning to done with the smart contract by friday and after that on saturday and sunday i will focus on the uniswap integration and then i will be done with this, 
// well, things are looking good for now my focus will be on the slow and consistent earning. man my focus is moving from here to there , i have not worked much since yesterday, does this mean i am stuck at a same level 
// time to plan what to do with this, so for now i will try 
dig +short myip.opendns.com @resolver1.opendns.com

206.189.135.130 */}

          {count > 6
            ? buyOrders.map((item) => {
                return (
        //           <div
        //             key={item.amount}
        //             className="w-full 
        //         font-semibold
        //         relative"
        //           >
        //             <div
        //               className={`
        //         w-full h-10
                
        //         flex
        //         `}
        //               style={{
        //                 background: `${isSell ? "#F23645" : "#089981"}`,
        //               }}
        //             >
        //               <div
        //                 className="h-full bg-white"
        //                 style={{
        //                   width: `${Math.floor(Math.random() * 91) + 10}%`,
        //                 }}
        //               ></div>
        //             </div>
        //             <div
        //               className="
        //         absolute
        //          inset-0 
        //         grid
        //         md:grid-cols-3
        //         grid-cols-2
        //        text-sm
        //         place-items-center
        //    "
        //             >
        //               <div>{(Number(item.amount )/ Number(item.quantity)).toFixed(2)}</div>
        //               <div>{item.quantity}</div>
        //               <div
        //                 className="
      
        //                 place-items-center
        // hidden
        // md:block
        // "
        //               >
        //                 {item.amount}
        //               </div>
        //             </div>
        //           </div>
        <tr
        key={item.amount}
        ><td>{Number(item.price)}</td><td>{item.quantity}</td><td class="red"> {item.value}</td></tr>
                );
              })
            : shortOrderBookList.map((item) => {
                return (
                  // <div
                  //   className="
                  //           font-bold
                  //           grid
                  //           grid-cols-3
                  //           place-items-center
                  //           "
                  //   key={item.price}
                  // >
                  //   <div
                  //     className="
                  //       text-sm
                  //       place-self-start
                  //       "
                  //   >
                  //     {item.price}
                  //   </div>
                  //   <div
                  //     className="
                  //       text-md
                        
                  //       "
                  //   >
                  //     {item.amount}
                  //   </div>
                  //   <div
                  //     className="
                  //       text-sm
                  //       place-self-end
                  //       hidden
                  //       md:block
                  //       "
                  //   >
                  //     {item.total}
                  //   </div>
                  // </div>
                  <tr
                  key={item.amount}
                  ><td>{Number(item.price)}</td><td>{item.quantity}</td><td class="red"> {item.value}</td></tr>
                );
              })}
      
      </tbody>
      </table>
    </>
  );
};

export default OrderBook;


// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { GoTriangleDown } from "react-icons/go";
// import axios from "axios";
// import { Order } from "@prisma/client";

// // interface OrderBookProps {
// //   count: number;
// //   isSell?: boolean;
// //   tradeSymbolFirst?: string
// //   tradeSymbolSecond?: string
// // }

// const OrderBook = ({ count, isSell,
// tradeSymbolFirst,
// tradeSymbolSecond
// }) => {


//   const [buyOrders, setBuyOrders] = useState([]);

//   const orderBookList = [
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//     {
//       price: "1.02",
//       amount: "4.20",
//       total: "4.36",
//     },
//   ];

 
//     useEffect(() => {
//       async function fetchOrders() {
//         try {
//           const {data} = await axios.get(`/api/orderBook?tradeSymbolFirst=${tradeSymbolFirst.toLowerCase()}&tradeSymbolSecond=${tradeSymbolSecond.toLowerCase()}`);
          
//          let newData =  data?.filter((order)  => order.type === `${isSell? "sell": "buy"}`);
//          setBuyOrders(newData)
//         } catch (error) {
//           console.error('Error fetching orders:', error);
//         }
//       }
//       fetchOrders()
//   }, [tradeSymbolSecond, tradeSymbolFirst])



//   const shortOrderBookList = orderBookList.slice(0, 5);

//   return (
//     <>
//       <div
//         className="
//     outline
//     rounded-md
//     p-2
//     m-2
//     text-sm
//     flex
//     flex-col
//     gap-2
//     max-w-[300px]
//     md:min-w-[300px]
//     h-[350px]
//     overflow-y-auto
//     "
//       >
//         <div
//           className="
//         flex
//         flex-cols
//         justify-between
//         items-center
       
//         "
//         >
//           {/* <div
//           className="
//             grid
//             grid-cols-3
//             gap-2
//             "
//         >
//           <div>o1</div>
//           <div>o2</div>
//           <div>o3</div>
//         </div> */}
//           {/* <div
//           className="
//  grid
//  grid-cols-2
//  gap-2
//  place-items-end
//  "
//         >
//           <div
//             className="
// flex 
// flex-rows
// items-center
// gap-2
// "
//           >
//             0.111
//             <GoTriangleDown />
//           </div>
//           <div>
//             <BsThreeDotsVertical />
//           </div>
//         </div> */}
//         </div>
//         <div
//           className="
//         grid
//         md:grid-cols-3
//         grid-cols-2
//         text-sm
//         gap-4
//         place-items-center
//         "
//         >
//           <div
//             className="
    
//     place-self-center
//     "
//           >
//             Price({tradeSymbolSecond})
//           </div>
//           <div
//             className="

//     place-self-center
//     "
//           >
//             Amount({tradeSymbolFirst})
//           </div>
//           <div
//             className="
//     text-sm
   
//     hidden
//     md:inline-block
//     "
//           >
//             Total
//           </div>
//         </div>
//         <div>
//           {count > 6
//             ? buyOrders.map((item) => {
//                 return (
//                   <div
//                     key={item.amount}
//                     className="w-full 
//                 font-semibold
//                 relative"
//                   >
//                     <div
//                       className={`
//                 w-full h-10
                
//                 flex
//                 `}
//                       style={{
//                         background: `${isSell ? "#F23645" : "#089981"}`,
//                       }}
//                     >
//                       <div
//                         className="h-full
                    
//                     bg-white"
//                         style={{
//                           width: `${Math.floor(Math.random() * 91) + 10}%`,
//                         }}
//                       ></div>
//                     </div>
//                     <div
//                       className="
//                 absolute
//                  inset-0 
//                 grid
//                 md:grid-cols-3
//                 grid-cols-2
//                text-sm
//                 place-items-center
//            "
//                     >
//                       <div>{item.price}</div>
//                       <div>{item.quantity}</div>
//                       <div
//                         className="
//                         place-items-center
//                         hidden
//                         md:block
//                         "
//                       >
//                         {item.value}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })
//             : shortOrderBookList.map((item) => {
//                 return (
//                   <div
//                     className="
//                             font-bold
//                             grid
//                             grid-cols-3
//                             place-items-center
//                             "
//                     key={item.price}
//                   >
//                     <div
//                       className="
//                         text-sm
//                         place-self-start
//                         "
//                     >
//                       {item.price}
//                     </div>
//                     <div
//                       className="
//                         text-md
                        
//                         "
//                     >
//                       {item.amount}
//                     </div>
//                     <div
//                       className="
//                         text-sm
//                         place-self-end
//                         hidden
//                         md:block
//                         "
//                     >
//                       {item.total}
//                     </div>
//                   </div>
//                 );
//               })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderBook;
