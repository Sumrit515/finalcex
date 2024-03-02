import React from 'react'
import { DataTable } from '../../../../../components/ui/data-table'
import { useQuery } from 'react-query'
import { useFetchFilledOrders, useFetchPendingOrders, useFetchUserTrades } from '../../../../../hooks/useApis'
import { columns } from './columns'

const TradeTable = () => {
    
   
    const {data, isLoading} = useQuery("userTrades", useFetchUserTrades, {
        refetchInterval: 1000
    })

//     accessorKey: "id",
//     header: "Order Id",
//   },
//   {
//     accessorKey: "createdAt",
//     header: "Trade Time",
//   },
//   {
//     accessorKey: "tradeSymbolFirst",
//     header: "Trading Pair",
//   },
//   {
//     accessorKey: "status",
//     header: "Trade Status",
//   },
//   {
//     accessorKey: "price",
//     header: "Traded Price",
//   },
//   {
//     accessorKey: "quantity",
//     header: "Trade Quantity",
//   },
//   {
//     accessorKey: "value",
//     header: "Trade Value",

    const dummyData = [{

    "id" :"",
    "createdAt " : "",
    "tradeSymbolFirst" : "",
    "status" : "",
    "price" : "",
    "quantity" : "",
    "value" : "",

    }]

  return (
  <DataTable data={data ? data : dummyData} isLoading={isLoading} searchKey="id" columns={columns}/>
  )
}

export default TradeTable