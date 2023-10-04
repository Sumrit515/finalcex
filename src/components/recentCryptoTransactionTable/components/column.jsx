"use client"

import { ColumnDef } from "@tanstack/react-table"


// export type BillboardColumn = {
//     hash: string;
//     from: string;
//     contractAddress: string;
//     timeStamp: string;
//     to: string;
//     value: string;
// }

export const columns = [
  {
    accessorKey: "hash",
    header: "Hash",
  },
  {
    accessorKey: "from",
    header: "From",
  },
 
  {
    accessorKey: "to",
    header: "To",
  },
  {
    accessorKey: "timeStamp",
    header: "Timestamp",
  },
  {
    accessorKey: "value",
    header: "Value",
  },

]
