import React, { useEffect, useState } from 'react'

// interface TrialTableProps{
//     symbol: string;
// }

const TrialTable = ({
    symbol
}) => {

    const socketRef = React.useRef<WebSocket | null>(null);
    const [data, setData] = useState({ c: 0, p: 0, q: 0,v: 0, h:0, l:0, s: "" });

    useEffect(() => {
  
      const socket = new WebSocket('wss://data-stream.binance.vision/ws');
     
       
      socket.onopen = ( ) => {
        const subscribePayload = {
          method: 'SUBSCRIBE',
          params: [
              "btcusdt@ticker"
          ],
          id: 1
        };
        socket.send(JSON.stringify(subscribePayload));
      }
  
    
        const handleWebSocketMessage = (event) => {
          const message = JSON.parse(event.data);
    console.log(message)
            setSocketData(JSON.parse(event.data));
           
        };
        socket.addEventListener('message', handleWebSocketMessage);
  
        return () => {
          socket.removeEventListener('message', handleWebSocketMessage);
          socket.onopen = ( ) => {
            const unsubscribePayload = {
              method: 'UNSUBSCRIBE',
              params: ["btcusdt@ticker"],
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
    }, [])


  return (
    <div>{data?.p}</div>
  )
}

export default TrialTable