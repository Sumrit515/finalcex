"use client"

import FormatDateRender from "../../../../../components/FormatDateRender"


export const columns = [
  {
    accessorKey: "id",
    header: "Order Id",
  },
  {
    accessorKey: "createdAt",
    header: "Trade Time",
    cell : ({row}) => <FormatDateRender data={row?.original?.createdAt}/>
  },
  {
    accessorKey: "tradeSymbolFirst",
    header: "Trading Pair",
  },
  {
    accessorKey: "status",
    header: "Trade Status",
  },
  {
    accessorKey: "price",
    header: "Traded Price",
  },
  {
    accessorKey: "quantity",
    header: "Trade Quantity",
  },
  {
    accessorKey: "value",
    header: "Trade Value",
  },

]
