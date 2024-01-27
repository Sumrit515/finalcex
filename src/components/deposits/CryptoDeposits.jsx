import React, { useEffect } from 'react'
import {useQuery} from 'react-query'
import { DataTable } from '../ui/data-table'
import {columns} from "./CryptoDepositTableColumn"
import { useFetchCryptoTransactions } from '../../hooks/useFetchCryptoTransactions'
import axios from 'axios'

const CryptoDepositsTable = () => {

    
    const { data, error, isLoading } = useQuery('posts', useFetchCryptoTransactions, {
        refetchInterval: 3000, // 10 seconds in milliseconds
      });
   
      console.log(data)
     

    const dataTemp = [
        {
         hash: "adsd",
         from: "asd",
         timeStamp:"asd",
         to:"dasd",
         value: "asd",
         confirmation: "2"
        }
    ]

//     const fetchTransactionData = async () => {
// const {data} = await axios.get(`/api/fetch-user-transactions`)
// console.log(data)
//     }

//     useEffect(() => {
//     fetchTransactionData()
//     }, [])

  return (
    <DataTable
    columns={columns}
    data={ data?.length ? data : dataTemp }
    searchKey='hash'
    isLoading={isLoading}
    />
   
  )
}

export default CryptoDepositsTable