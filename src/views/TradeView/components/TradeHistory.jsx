
import React,{useState} from 'react'


// enum to switch between order history, trade history, open order, and the funds of the users.
// things left to do are switching content beteen the users who are logged in and who are not , i need to create some protected routes also. so that the until and unless a user is 
// logged in, it shoulld not be visible to the user, after the logging i need to start a kyc, after kyc only then the suer should be able to trade, otherwise not, 
//  



const TradeHistory = () => {

    const STEPS = {
        OPENORDER : 0,
        ORDERHISTORY : 1,
        TRADEHISTORY : 2,
        FUNDS : 3,
}

    const [step, setStep] = useState(STEPS.OPENORDER)

    let bodyContent = (
        <>
         <div class="table-responsive">
                                <table class="table">

        <thead>
                                        <tr>
        
<th>
Date    
</th>
<th>
Pair
</th>
<th>
Type
</th>
<th>
Side
</th>
<th>
Price
</th>
<th>
Amount
</th>
<th>
Total
</th>

    </tr>
   
    </thead>
    </table>
    </div>


        </>
    )

    if(step === STEPS.ORDERHISTORY){
        bodyContent = (
            <>
            <div>
                Order History
            </div>
            </>
        )
    }

   if(step === STEPS.TRADEHISTORY){
        bodyContent = (
            <>
            <div>
                Trade History
            </div>
            </>
        )
    }

    if(step === STEPS.FUNDS){
        bodyContent = (
            <>
            <div>
                Funds
            </div>
            </>
        )
    }
  return (
    <div className='
    flex
    flex-col
    gap-4
    text-sm
    font-semibold
    '>
   <div className='
    flex
    flex-row
    gap-4
justify-between
    '>
        <div

        onClick={() => setStep(STEPS.OPENORDER)}
        className='
      
        hover:text-purple-500
        hover:cursor-pointer
        '
        >
Open Orders
        </div>
        <div
                onClick={() => setStep(STEPS.ORDERHISTORY)}
            className='
            hover:text-purple-500
            hover:cursor-pointer
            '
        >
Order History
        </div>
        <div
                onClick={() => setStep(STEPS.TRADEHISTORY)}
            className='
            hover:text-purple-500
            hover:cursor-pointer
            '
        >
Trade History
        </div>
        <div
                onClick={() => setStep(STEPS.FUNDS)}
            className='
            hover:text-purple-500
            hover:cursor-pointer
            '
        >
Funds
        </div>
    </div>
   <div className='
   mt-2
   '>
   {bodyContent}
    </div>
 
    
    </div>
 
  )
}

export default TradeHistory


// import React,{useState} from 'react'


// // enum to switch between order history, trade history, open order, and the funds of the users.
// // things left to do are switching content beteen the users who are logged in and who are not , i need to create some protected routes also. so that the until and unless a user is 
// // logged in, it shoulld not be visible to the user, after the logging i need to start a kyc, after kyc only then the suer should be able to trade, otherwise not, 
// //  



// const TradeHistory = () => {

//     const STEPS = {
//         OPENORDER : 0,
//         ORDERHISTORY : 1,
//         TRADEHISTORY : 2,
//         FUNDS : 3,
// }

//     const [step, setStep] = useState(STEPS.OPENORDER)

//     let bodyContent = (
//         <>
//         <div className='
//        h-[500px]
//     '>
//     <div className='
//     grid
//     grid-cols-7
//     place-items-center
//     '>
// <div>
// Date    
// </div>
// <div>
// Pair
// </div>
// <div>
// Type
// </div>
// <div>
// Side
// </div>
// <div>
// Price
// </div>
// <div>
// Amount
// </div>
// <div>
// Total
// </div>

//     </div>
//     <div className='
//     mt-4
//     '>
//         <hr
        
//         />
//     </div>
//     </div>
//         </>
//     )

//     if(step === STEPS.ORDERHISTORY){
//         bodyContent = (
//             <>
//             <div>
//                 Order History
//             </div>
//             </>
//         )
//     }

//    if(step === STEPS.TRADEHISTORY){
//         bodyContent = (
//             <>
//             <div>
//                 Trade History
//             </div>
//             </>
//         )
//     }

//     if(step === STEPS.FUNDS){
//         bodyContent = (
//             <>
//             <div>
//                 Funds
//             </div>
//             </>
//         )
//     }
//   return (
//     <div className='
//     flex
//     flex-col
//     gap-4
//     text-sm
//     font-semibold
//     '>
//    <div className='
//     flex
//     flex-row
//     gap-4
// justify-between
//     '>
//         <div

//         onClick={() => setStep(STEPS.OPENORDER)}
//         className='
      
//         hover:text-purple-500
//         hover:cursor-pointer
//         '
//         >
// Open Orders
//         </div>
//         <div
//                 onClick={() => setStep(STEPS.ORDERHISTORY)}
//             className='
//             hover:text-purple-500
//             hover:cursor-pointer
//             '
//         >
// Order History
//         </div>
//         <div
//                 onClick={() => setStep(STEPS.TRADEHISTORY)}
//             className='
//             hover:text-purple-500
//             hover:cursor-pointer
//             '
//         >
// Trade History
//         </div>
//         <div
//                 onClick={() => setStep(STEPS.FUNDS)}
//             className='
//             hover:text-purple-500
//             hover:cursor-pointer
//             '
//         >
// Funds
//         </div>
//     </div>
//    <div className='
//    mt-2
//    '>
//    {bodyContent}
//     </div>
 
    
//     </div>
 
//   )
// }

// export default TradeHistory