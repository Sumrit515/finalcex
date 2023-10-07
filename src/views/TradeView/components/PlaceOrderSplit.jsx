import React from 'react'

const PlaceOrderSplit = ({
    availableBalanceSecondSymbol,
    availableBalanceFirstSymbol,
    availableBalance,
    tradeSymbol,
    caption,
    tradeSymbolFirst,
    tradeSymbolSecond,
    selectMarket,
    selectLimit,
    setSelectLimit,
    setSelectMarket,
    price, 
    quantity,
    setQuantity,
    setPrice,
    onSubmit,
    buttonText,
    isLoading
}) => {
  return (
    <div>
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
          gap-4
          flex
          flex-col
          "
        >
       
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
            {availableBalance}
            <span className="
            ml-4
            ">
            {tradeSymbol}
            </span>
         
          </span>
          </div>
         
          
          <div>
 
            <div
              className="
flex
flex-col
gap-4
w-full
"
            >
        
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
              w-full
              "
              >
                <div className='
                flex
                flex-row
                w-full
                justify-between
                '>
                 <p>
                 Price ({tradeSymbolSecond}): 
                 </p>
                 <p>
                 {price}
                 </p>
                </div>
              
              
                
              </div>
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
              
              "> {caption}<span className="
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
            //    onClick={test}
                onClick={() => onSubmit()}
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
                {buttonText}
              </button>
             

  </div>

             
            </div>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default PlaceOrderSplit