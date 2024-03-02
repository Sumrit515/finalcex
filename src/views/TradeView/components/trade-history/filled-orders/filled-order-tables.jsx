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

    "id" :"",
    "price " : "",
    "placedAt" : "",
    "type" : "",
    "value" : "",
    "quantity" : "",
    "tradeSymbolFirst" : "",
    "tradeSymbolSecond" : "",
    "status" : "",
    "orderType" : ""
    }]

  return (
    <DataTable isLoading={isLoading} data={data ? data : dummyData} searchKey="id" columns={columns}/>
  )
}

export default FilledOrderTable