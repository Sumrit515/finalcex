// import axios from 'axios'
// import ws from 'ws'

// export const useFetchCryptoPrice = (symbol: string) => {
 
//     let data = '';
//     let tempData = {} ;
//         const socket = new WebSocket(`wss://data-stream.binance.vision/ws/${symbol}usdt@ticker`);
    
//         socket.addEventListener('open', () => {
//           console.log('Connected to WebSocket');
//         });
    
//         socket.addEventListener('message', (event) => {
//           data = event.data as string
//     tempData = JSON.parse(event.data as string)
//     console.log(tempData)
//         });
    
//         socket.addEventListener('close', () => {
//           console.log('Disconnected from WebSocket');
//         });
//         return data
    

// }