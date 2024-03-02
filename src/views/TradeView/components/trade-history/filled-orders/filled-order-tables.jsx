import React from 'react'
import { DataTable } from '../../../../../components/ui/data-table'
import { columns } from './columns'
import { useQuery } from 'react-query'
import { useFetchFilledOrders } from '../../../../../hooks/useApis'

const FilledOrderTable = () => {
    
    const {data, isLoading} = useQuery("pendingOrders", useFetchFilledOrders, {
        refetchInterval: 2000
    })


    const dummyData = [{

    "id" :"65e2c881257f78113c1121ba",
    "price " : "1.084",
    "placedAt" : "2024-03-02T06:34:41.703+00:00",
    "type" : "buy",
    "value" : "1.0840",
    "quantity" : "0",
    "tradeSymbolFirst" : "matic",
    "tradeSymbolSecond" : "usdt",
    "status" : "filled",
    "orderType" : "market"
    }]

  return (
    <DataTable isLoading={isLoading} data={data ? data : dummyData} searchKey="id" columns={columns}/>
  )
}

export default FilledOrderTable