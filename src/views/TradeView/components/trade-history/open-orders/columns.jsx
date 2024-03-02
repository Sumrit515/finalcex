"use client"

import { ColumnDef } from "@tanstack/react-table"

export const columns = [
  {
    accessorKey: "id",
    header: "Order Id",
  },
  {
    accessorKey: "placedAt",
    header: "Order Placed",
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
