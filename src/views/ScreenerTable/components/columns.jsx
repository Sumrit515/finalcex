"use client"

import { ColumnDef } from "@tanstack/react-table"


// export type BillboardColumn = {
//   id: string;
//   label: string;
//   createdAt: string;
//   price: string;
//   change: string;
//   volume: string;
// }

export const columns = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "change",
    header: "24h Change",
  },
  {
    accessorKey: "volume",
    header: "24h Volume",
  },

]
