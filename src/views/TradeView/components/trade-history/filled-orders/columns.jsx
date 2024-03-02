"use client"

import FormatDateRender from "../../../../../components/FormatDateRender"


export const columns = [
  {
    accessorKey: "id",
    header: "Order Id",
  },
  {
    accessorKey: "placedAt",
    header: "Order Placed",
    cell: ({row}) => <FormatDateRender data={row?.original?.placedAt}/>
  },
  {
    accessorKey: "tradeSymbolFirst",
    header: "Trading Pair",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "orderType",
    header: "Order Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  }

]
