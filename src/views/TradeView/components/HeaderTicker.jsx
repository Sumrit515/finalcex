import React, { useEffect, useState } from 'react'
import {FaInfoCircle} from 'react-icons/fa'
import TickerDetails from './TickerDetails'
import SkeletonLoader from '../../../components/SkeletonLoader';


// interface HeaderTickerProps  {
// tradeSymbol?: string;

// }

const HeaderTicker = ({
    tradeSymbol,
    tradeSymbolFirst,
    tradeSymbolSecond
}) => {



    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({ c: 0, p: 0, q: 0,v: 0, h:0, l:0, s: "" });
    useEffect(() => {
setIsLoading(true)
        const parts = tradeSymbol?.split("_");
       
const symbol = parts?.map(part => part.toLowerCase()).join("");
      
        const socket = new WebSocket('wss://data-stream.binance.vision/ws');
        socket.onopen = ( ) => {
          const subscribePayload = {
            method: 'SUBSCRIBE',
            params: [ 
                `${symbol}@ticker`
            ],
            id: 1
          };
          socket.send(JSON.stringify(subscribePayload));
        }
      
          const handleWebSocketMessage = (event) => {
            const message = JSON.parse(event.data);
      //  console.log('[HEADER_TICKER]',message)
              setData(JSON.parse(event.data));
         setIsLoading(false)
          };
          socket.addEventListener('message', handleWebSocketMessage);
    
          return () => {
            socket.removeEventListener('message', handleWebSocketMessage);
            socket.onopen = ( ) => {
              const unsubscribePayload = {
                method: 'UNSUBSCRIBE',
                params: [`${symbol}@ticker`],
                id: 1,
              };
              socket.send(JSON.stringify(unsubscribePayload));
            }
      
          };
      
      
          //  socket.onmessage = (event) => {
          //   const message = JSON.parse(event.data);
          //   setData(JSON.parse(event.data as string));
          //   console.log('Received message:', data?.c);
          //   // Handle the received message and perform necessary actions
          // };
      }, [tradeSymbol])


  return (

    <>
    <div className='
    m-2
    
    flex
   
    
    md:flex-row
    items-center
    '>
      
        <div className='
        flex-1
        md:flex
        md:flex-row
        col-md-3
        '>
        <div className='
       flex
       flex-col
        '>
        
            <div className='
            flex
            flex-row
            gap-2
            items-center
            '>

        <div className='
        md:text-xl
        text-md
       
        '>
    {tradeSymbolFirst}/{tradeSymbolSecond}
    </div>
<div>
    <FaInfoCircle size={15}/>
    </div>
{/* <div className='
font-semibold
text-[14px]
'>
    {data?.s}
    </div> */}
    </div>
        
        <div className='
        flex
        flex-row
        '>
        <div className='
        text-sm
        p-1
        mt-1
      
        rounded-md
        max-w-[35px]
        text-purple-800
        bg-purple-200
        '>
            DeFi
        </div>
        <div className='
        
        flex
        flex-col
        pl-6
            '>
               
                
                <div className={`
                 text-[18px]
                 font-bold
                 ${data?.p?.toString()[0] === "-"? "text-[#F23645]" : "text-[#089981]"}
                `}
               
                >
               {  isLoading?<SkeletonLoader/> : Number(data?.c).toFixed(2)}
                    </div>
               
            </div>
        </div>
       
            </div>
      

 
            </div>
     
        <div className='
        p-2
      flex-1
      col-md-9
    justify-between
    gap-6
    font-semibold
    text-[8px]
    md:items-start

    md:text-[14px]
    md:justify-start
    '>
        <div 
        className='
        grid
        grid-cols-2
        grid-rows-2
        gap-10
        md:flex
        md:flex-row
    
        '
        >
            
            <div className='
            hidden
            md:inline-block
            '>
            <div className='
        flex
        flex-col
        color-ticker
      
        text-[12px]
        '>
24h Change
<span className={`
text-[14px]
${data?.p?.toString()[0] === "-"? "text-[#F23645]" : "text-[#089981]"}
`}


>
 {isLoading ? <SkeletonLoader/> :  data?.p?.toString()[0] === "-"?  Number(data?.p)?.toFixed(2) : `+${Number(data?.p)?.toFixed(2)}`}
</span>
        </div>
                </div>
       
        <div className='
        flex
        flex-col
        color-ticker

        '>
24h High
<span className='
text-[14px]
text-[#089981]
'>
{isLoading? <SkeletonLoader/> : Number(data?.h)?.toFixed(2)}
</span>
        </div>
        <div className='
        flex
        
        flex-col
        color-ticker
        '>
24h Low
<span className='
text-[14px]
text-[#F23645]
'>
{isLoading? <SkeletonLoader/> : Number(data?.l)?.toFixed(2)}
</span>
        </div>
        <div className='
        flex
        flex-col
        color-ticker

        '>
24h Volume({tradeSymbolFirst})
<span className='
ticker-value
text-[14px]

'>
{isLoading? <SkeletonLoader/> : Number(data?.v)?.toFixed(2)}
</span>
        </div>
        <div className='
        flex
        flex-col
        color-ticker
        '>
24h Volume({tradeSymbolSecond})
<span className=' ticker-value
text-[14px]

'>
{isLoading? <SkeletonLoader/> : Number(data?.q)?.toFixed(2)}
</span>
        </div>
        </div>
    </div>

    </div>
    </>
  )
}

export default HeaderTicker

