
import React, { useState, useEffect } from 'react'
import list from '../constants/cryptoCurrencyList.json'

// interface WebSocketPriceProps {
//     socket?: WebSocket;
//     symbol?: String;
// }

const WebSoketPrice= ({
socket,
symbol
}) => {

  // const [data, setData] = useState({})
 
  // const newArray = list.map(item => `${item.symbol}usdt@ticker`)

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
const daa = 1;

const [data, setData] = useState({ c: 0, p: 0 });




  return (
    <div>
      <div>
      {data?.c}
      </div>

{data?.p}
    </div>
  )
}

export default WebSoketPrice