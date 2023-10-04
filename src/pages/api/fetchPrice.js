// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import WebSocket from 'ws'

// type Data = {
//   name: string
// }

export default function handler(
  req,
  res
) {

try{









//   socketRef.current = new WebSocket('wss://data-stream.binance.vision/ws');
  const soc = new WebSocket('wss://data-stream.binance.vision/ws');

  const handleWebSocketMessage = (event) => {
    const message = JSON.parse(event.data);
console.log(message)

    //   setData(JSON.parse(event.data as string));
 
  };


 
  soc.on('open',() => {
        {
            const subscribePayload = {
              method: 'SUBSCRIBE',
              params: [ 
            "btcusdt@ticker"
              ],
              id: 1
            };
            soc.send(JSON.stringify(subscribePayload));
          }
    } ) 
  
    soc.on('message', (message) => {
        // console.log(`Received: ${message}`);
      });
    
      soc.on('close', () => {
        console.log('Disconnected from the WebSocket server.');
      });
   



const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
  console.log('A client connected.');

  socket.on('message', (message) => {
    console.log(`Received: ${message}`);
    // You can send a response back to the client if needed:
    // socket.send('Hello from the server!');
  });

  socket.on('close', () => {
    console.log('A client disconnected.');
  });
});


      
    




    res.status(200).json({ name: 'John Doe' })
} catch(e){
    res.status(500)
}
  
}
