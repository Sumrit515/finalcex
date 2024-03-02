"use client"

import { ColumnDef } from "@tanstack/react-table"
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
    accessorKey: "quantity",
    header: "Quanity",
  },
  {
    accessorKey: "price",
    header: "Order Price",
  },
  {
    accessorKey: "value",
    header: "Order Value",
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
