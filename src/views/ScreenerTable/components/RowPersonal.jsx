
import { TableCell, TableRow } from '../../../components/ui/table'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import {useRouter as newRouter} from 'next/navigation'
import Skeleton from 'react-loading-skeleton';
import SkeletonLoader from '../../../components/SkeletonLoader';
import { io } from 'socket.io-client'

// interface RowProps{
// tableData: {
//         id: string,
//         label: string,
//         createdAt: string,
//         price: string,
//         change: string,
//         volume: string,
//         symbol: string,
//         name: string,
//         src: string,
//         link: string
//     };
//     id: number;
//     isFull: boolean;

// }

const RowPersonal = ({
    tableData,
    id,
    isFull,
}) => {

  const router = useRouter()
  const nouter = newRouter()
    const socketRef = useRef(null);
    const [socketData, setSocketData] = useState({ c: 0, p: 0, q: 0,v: 0, h:0, l:0, s: "" });
    const [isLoading, setIsLoading] = useState(false)
      useEffect(() => {
        //console.log("I am in personal")
        // socketRef.current = new WebSocket('wss://data-stream.binance.vision/ws');
        // const socket = socketRef?.current;
        const socket = io("http://localhost:3005")
        setIsLoading(true)
        
        socket.on(`message:${tableData.label}`, (message) => {
         // console.log(message)
      })
      
      // setSocket(socket)

        // socket.onopen = ( ) => {
        //   const subscribePayload = {
        //     method: 'SUBSCRIBE',
        //     params: [
        //         tableData.label
        //     ],
        //     id: 1
        //   };
        //   socket.send(JSON.stringify(subscribePayload));
        // }
    
      
          const handleWebSocketMessage = (event) => {
            // const message = JSON.parse(event.data);
           // console.log(event)
      
            setSocketData(event);
             setIsLoading(false)
          };
          socket.addEventListener(`message:${tableData.label}`, handleWebSocketMessage);
    
          return () => {
            socket.removeEventListener(`message:${tableData.label}`, handleWebSocketMessage);
            // socket.onopen = ( ) => {
            //   const unsubscribePayload = {
            //     method: 'UNSUBSCRIBE',
            //     params: [tableData.label],
            //     id: 1,
            //   };
            //   socket.send(JSON.stringify(unsubscribePayload));
            // }
      
          };
      
      
          //  socket.onmessage = (event) => {
          //   const message = JSON.parse(event.data);
          //   setData(JSON.parse(event.data as string));
          //   console.log('Received message:', data?.c);
          //   // Handle the received message and perform necessary actions
          // };
      }, [])

      const switchCryptoPair = ()=> {
        router.push(`/trade/${tableData.link}`)
        //nouter.refresh()
      }

  return (
    <TableRow 
    className='
    hover:cursor-pointer
    '
    onClick={switchCryptoPair}>
   {isFull && <TableCell className="font-medium">{id+1}</TableCell>}
    <TableCell className='
    flex
    flex-row
    gap-2
   
    items-center
    '>
      <Image
      src={tableData.src}
      alt='logo'
      width={4}
      height={4}
      className='
      w-4
      h-4
      rounded-full
      '
      />

      <p>
      {tableData.name}
        </p></TableCell>
    <TableCell> 
      {isLoading? (<SkeletonLoader/>) :Number(socketData?.c).toFixed(3)}
      </TableCell>
    <TableCell
    className={
    `
    ${socketData?.p?.toString()[0] === "-" ? "text-[#F23645]": "text-[#089981]"}
    `
    }
    > {isLoading? <SkeletonLoader/> : socketData?.p?.toString()[0] === "-"?  Number(socketData?.p).toFixed(3) : Number(socketData?.p).toFixed(3) } </TableCell>
    {isFull &&<TableCell>{isLoading ? <SkeletonLoader/> : Number(socketData?.v).toFixed(3) }</TableCell>}
  </TableRow>
  )
}

export default RowPersonal
