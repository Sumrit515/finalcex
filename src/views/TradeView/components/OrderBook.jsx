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
        //                 className="h-full
                    
        //             bg-white"
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
      
      </tbody></table>
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
