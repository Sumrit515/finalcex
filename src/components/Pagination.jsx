

import React, { useState, useEffect, ReactNode, Suspense } from 'react';

import list from '../constants/cryptoCurrencyList.json'
import ReactPaginate, {ReactPaginateProps} from 'react-paginate';
import WebSoketPrice from './WebSoketPrice';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';




const Pagination= ({ data, itemsPerPage }) => {


  const [data00, setData00] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data5, setData5] = useState(null);
  const [data6, setData6] = useState(null);
  const [data7, setData7] = useState(null);
  const [data8, setData8] = useState(null);
  const [data9, setData9] = useState(null);
  const [data10, setData10] = useState(null);
  const [data11, setData11] = useState(null);
  const [data12, setData12] = useState(null);
  const [data13, setData13] = useState(null);
  const [data1inch, setData1inch] = useState(null)
  const [dataaava, setDataaave] = useState(null)
  const [dataaca, setDataaca] = useState(null)
  const [dataach, setDataach] = useState(null)
  const [dataacm, setDataacm] = useState(null)
  const [dataada, setDataada] = useState(null)
  const [ataadx, setDataadx] = useState(null)
  const [dataaergo, setDataaergo] = useState(null)
  const [dataagix, setDataagix] = useState(null)
  const [dataagld, setDataagld] = useState(null)
   const [tempData, setTempData ]= useState(null) ;
const [dataArray, setDataArray] = useState([])
const [mounted, setMounted] = useState(false)
const socket = new WebSocket('wss://data-stream.binance.vision/ws');
  useEffect(() => {

    const newArray = list.map(item => `${item.symbol}usdt@ticker`)
    //console.log(newArray)
    
setMounted(true)
    // socket.onopen = () => {
    //   const subscribePayload = {
    //     method: 'SUBSCRIBE',
    //     params: [
        
    // ...newArray
          
    //     ],
    //     id: 1
    //   };
    //   socket.send(JSON.stringify(subscribePayload));
    // };

    // socket.onmessage = (event) => {
    //   const message = JSON.parse(event.data);
    //   console.log('Received message:', message);
    //   // Handle the received message and perform necessary actions
    // };

    // socket.addEventListener('open', () => {
    //   console.log('Connected to WebSocket');
    // });

    // socket.addEventListener('message', (event) => {
    //   setData00(JSON.parse(event.data as string));
    //   // console.log(event.data)
    //   setTempData(JSON.parse(event.data as string))
    //   const message = JSON.parse(event.data);
     


    //   if(message?.s === '1INCHUSDT'){
    //     setData1inch(JSON.parse(event.data as string))
    //   }
     
    //   if(message?.s === 'AAVEUSDT'){
    //     setDataaave(JSON.parse(event.data as string))
    //     // console.log(message)
    //   }
    
    //   if(message?.s === 'ACAUSDT')
    //   setDataaca(JSON.parse(event.data as string))
    //   if(message?.s === 'ACHUSDT')
    //   setDataach(JSON.parse(event.data as string))
    //   if(message?.s === 'ACMUSDT')
    //   setDataacm(JSON.parse(event.data as string))
    //   if(message?.s === 'ADAUSDT')
    //   setDataada(JSON.parse(event.data as string))
    //   if(message?.s === 'ADXUSDT')
    //   setDataadx(JSON.parse(event.data as string))
    //   if(message?.s === 'AERGOUSDT')
    //   setDataaergo(JSON.parse(event.data as string))
     
    //   // console.log('Received message:', message);
    // });

    // socket.addEventListener('close', () => {
    //   console.log('Disconnected from WebSocket');
    // });
// list.map((item) => {
//     fetchCryptoPrice(item?.symbol);
// })


// console.log(tempData)
    // return () => {
    //   socket.close();
    // };
  }, []);



  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const displayedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const reactPaginateProps = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    pageCount,
    onPageChange: handlePageChange,
    containerClassName: 'flex flex-row justify-between items-center align-center mt-8 border-2 p-3 rounded-full shadow-xl bg-gray-100',
    previousLinkClassName: 'font-bold text-purple-600 hover:text-purple-400',
    nextLinkClassName: 'text-purple-600 font-bold hover:text-purple-400',
    disabledClassName: '',
    activeClassName: 'text-white hover:bg-purple-600 w-5 h-5 bg-purple-700 rounded-full  bold flex justify-center items-center text-center p-6 shadow-xl',
    pageClassName: '  w-5 h-5 font-bold hover:bg-gray-100 text-gray-500 bg-gray-200  rounded-full  bold flex justify-center items-center p-4 shadow-xl'
  };

  if(!mounted) {
    return(
      <div>
        Loading...
      </div>
    )
  }
else{
  return ( 

   
    <div className='
       m-5
       '>
           <div className='
           grid
           grid-cols-4
           gap-4
           place-items-center
           m-2
           pb-2
           bg-gray-100
           p-2
           rounded-full
           font-bold
           text-xl
           text-purple-600
           '>
               <div>
               Name  
               </div>
               <div>
               Price
               </div>
               <div>
               Change
               </div>
               <div>
               Volume
               </div>
           </div>
         {displayedData.map((item, i) =>{
          
   
   
   
   
   
           return   (
             
  
            
   
   
             <div 
             className='
             w-full
             grid
             grid-cols-4
             hover:bg-gray-200
             
             border-b-2
             m-2
             rounded-lg
             p-2
             '
             key={i}>
                 <div className='
                flex
                flex-row
                items-center
                justify-start
                hover:cursor-pointer
                 '>
                   <div className='
                   w-25
                   h-25
                   
                   ' >
               <Image
               src={item?.img}
               width={50}
               height={50}
   alt='logo'
               />
                     </div>
                    <div
                    className='
                    px-5
                    
                    '
                    >
                   {item?.symbol.toUpperCase()}
                    </div>
                    <span className='
                  
                   
                   text-gray-500
                   text-sm
                 ' >
                   {item?.name.length < 8 ? item?.name : `${item?.name.slice(0,8)}...`}</span>
                     </div>
                   
                 
                 <div
                 className='
                 justify-self-center
                 '
                 >
          ${item?.price}
                   </div>
                 {/* <div>
           <WebSoketPrice
           socket={socket}
           symbol={`${item?.symbol}usdt@ticker`}/>
                   </div> */}
                   <div
                   className='
                   justify-self-center
                   '
                   >
                 {item?.change}
                     </div>
                   <div className='
                   justify-self-center
                   '>
                 {item?.volume}
                     </div>
                 </div>
             
           )
         }
        )}
   
         <ReactPaginate {...reactPaginateProps} />
       </div>
   
      
     );
}
 
};

export default Pagination;
