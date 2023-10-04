import { DataTable } from '../../../components/ui/data-table';
import React from 'react'
import { columns } from './marketTradeCloumns';

// interface TradesProps{
// tradeSymbolFirst ?: string;
// tradeSymbolSecond?: string;
// }

const Trades = ({
    tradeSymbolFirst,
    tradeSymbolSecond
}) => {

const data = [
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
    {
"price" : "0.2456",
"amount" : "700",
"time" : "11:25:48"
    },
]

  return (
    <div className='
    flex
    flex-col
    text-md
    '>
        <DataTable
        columns={columns}
        data={data}
        searchKey='amount'
        pagination={false}
        search={false}
        />
{/* <div className='
grid
grid-cols-3
gap-2
md:gap-6
pb-2
md:text-[16px]
font-bold
md:font-semibold
place-items-center
'>
    <div 
    className='

    '
    >
    Price({tradeSymbolSecond})    
    </div>
    <div
    className='
place-self-start
    '
    >
Amount({tradeSymbolFirst})
    </div>
    <div className='
    place-self-end
    '>
Time
    </div>
    
        </div>

        {
            data.map((item) => {
               return (
                <div
                key={item.amount}
                className='
                pb-1
                grid
                font-semibold
                grid-cols-3
                text-[16px]
                md:text-[15px]
                md:font-light
                gap-3
                place-items-center
                '>
                    <div className='
                    
                    '>
                        {item.price}
                        </div>
                    <div className='
                  place-self-end
                    '>
                        {item.amount}
                        </div>
                    <div className='
                    place-self-end
                    '>
                        {item.time}
                        </div>
                    </div>
               )
            })
        } */}
    </div>
  )
}

export default Trades