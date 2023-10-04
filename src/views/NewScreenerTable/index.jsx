import { columns } from "./components/columns"
import { DataTable } from "../../components/ui/data-table"
import TrialTable from "../../components/TrialTable"
import React, { useEffect, useRef, useState } from "react";
import { Item } from "@radix-ui/react-dropdown-menu";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../components/ui/table"
import Row from "./components/Row";
  

// interface ScreenerTableProps {
// isFull  : boolean;
// isCaption: boolean;
// }

const PriceTable = ({
    isFull,
    isCaption
}) => {

    // const socketRef = useRef<WebSocket | null>(null);
    // const [socketData, setSocketData] = useState<{ c: number; p: number, q: number, v: number, h: number, l: number , s: string}>({ c: 0, p: 0, q: 0,v: 0, h:0, l:0, s: "" });
    const data = [
        {
            id: "1",
            label: "btcusdt@ticker",
            createdAt: 'saddadsa',
            price: "24",
            change: '+5',
            volume: '5454',
            symbol: "BTC",
            name: "Bitcoin",
            src: "/images/CryptoLogos/bitcoin.png",
            link: "/BTC_USDT"
        }, 
        {
            id: "2",
            label: "bnbusdt@ticker",
            createdAt: 'saddadsa',
            price: '56',
            change: '-9',
            volume: '46545',
            symbol: "BNB",
            name: "Binance Coin",
            src: "/images/CryptoLogos/binance.png",
            link: "/BNB_USDT"
        },
        {
            id: "2",
            label: "trxusdt@ticker",
            createdAt: 'saddadsa',
            price: '56',
            change: '-9',
            volume: '46545',
            symbol: "TRX",
            name: "TRON",
            src: "/images/CryptoLogos/tron.png",
            link: "/TRX_USDT"
        },
        {
            id: "2",
            label: "ethusdt@ticker",
            createdAt: 'saddadsa',
            price: '56',
            change: '-9',
            volume: '46545',
            symbol: "ETH",
            name: "Ethereum",
            src: "/images/CryptoLogos/ethereum.png",
            link: "/ETH_USDT"
        },
        {
            id: "2",
            label: "maticusdt@ticker",
            createdAt: 'saddadsa',
            price: '56',
            change: '-9',
            volume: '46545',
            symbol: "MATIC",
            name: "Polygon",
            src: "/images/CryptoLogos/polygon.png",
            link: "/MATIC_USDT"
        },
        {
            id: "2",
            label: "dotusdt@ticker",
            createdAt: 'saddadsa',
            price: '56',
            change: '-9',
            volume: '46545',
            symbol: "DOT",
            name: "Polkadot",
            src: "/images/CryptoLogos/polkadot.png",
            link: "/DOT_USDT"
        },
        {
            id: "2",
            label: "lptusdt@ticker",
            createdAt: 'saddadsa',
            price: '56',
            change: '-9',
            volume: '46545',
            symbol: "LPT",
            name: "Livepeer",
            src: "/images/CryptoLogos/livepeer.png",
            link: "/LPT_USDT"
        },
        {
            id: "2",
            label: "nearusdt@ticker",
            createdAt: 'saddadsa',
            price: '56',
            change: '-9',
            volume: '46545',
            symbol: "NEAR",
            name: "Near",
            src: "/images/CryptoLogos/near.png",
            link: "/NEAR_USDT"
        }

    ]





  return (
    <div className="container mx-auto py-10">


<Table>
 {isCaption && <TableCaption>A list of all the cryptocurrency pairs.</TableCaption>}
  <TableHeader>
    <TableRow>
      {isFull && <TableHead className="w-[100px]">S no.</TableHead>}
      <TableHead>Symbol</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Change</TableHead>
      {isFull && <TableHead>Volume</TableHead>}
      {/* <TableHead className="text-right">Amount</TableHead> */}
    </TableRow>
  </TableHeader>
  <TableBody>
    {
        data?.map((item, i) => (
            <Row
            isFull={isFull}
            key={i}
            id={i}
            tableData={item}
            />
        ))
    }

  </TableBody>
</Table>


    </div>
  )
}

export default PriceTable