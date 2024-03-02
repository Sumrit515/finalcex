import React from 'react'
import { DataTable } from '../../../../../components/ui/data-table'
import { columns } from './columns'
import { useQuery } from 'react-query'
import { useFetchPendingOrders } from '../../../../../hooks/useApis'

const OrderTable = () => {

    const {data, isLoading} = useQuery("pendingOrders", useFetchPendingOrders, {
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
    <DataTable columns={columns} data={data ? data: dummyData} isLoading={isLoading} searchKey="id"/>
  )
}

export default OrderTable