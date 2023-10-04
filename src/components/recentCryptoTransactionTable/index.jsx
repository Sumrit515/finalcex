import React from 'react'
import { useFetchCryptoTransactions } from '../../hooks/useFetchCryptoTransactions'
import {useQuery} from 'react-query'
import { DataTable } from '../ui/data-table';
import { columns } from './components/column';

const RecentCryptoTransactions = () => {

    const { data, error, isLoading } = useQuery('posts', useFetchCryptoTransactions, {
        refetchInterval: 10000, // 10 seconds in milliseconds
      });

     

      let first10Elements;
      let formattedFirst10Elements;
      if(data){
         first10Elements = data?.result?.slice(0, 10);
      formattedFirst10Elements = first10Elements?.map((item) =>(
          {
            "hash": item.hash,
            "from" : item.from,
            "contractAddress": item.contractAddress,
            "timeStamp": item.timeStamp,
            "value": (Number(item.value)/ 10**18).toFixed(5),
            "to": item.to
          }
        )
        
        
      
      )

      console.log(data)
        }

      const dataTemp = [
        {
         hash: "adsd",
         from: "asd",
         contractAddress: "sda",
         timeStamp:"asd",
         to:"dasd",
         value: "asd" 
        }
    ]

  return (
    <div>
       <DataTable
     columns={columns}
     data={data?.result?.length > 0? formattedFirst10Elements : dataTemp }
     searchKey='hash'
     />
    </div>
  )
}

export default RecentCryptoTransactions