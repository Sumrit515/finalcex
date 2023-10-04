import React, {useState} from 'react'
import {HiOutlineSwitchHorizontal} from 'react-icons/hi'


const PairListTable = () => {

const [showVolume, setShowVolume] = useState(false) 

    const data = [
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
        {
"pair" : "BTC/USDT",
"price":"27400",
"Change" : "2.0",
"volume": "150000"
    },
] 

const toggleVolume =  () => {
    setShowVolume(value => !value)
}

  return (
    <div className='
    flex
  
    justify-center
    flex-col
    '>
        <div className='
        grid
        grid-cols-3
        gap-3
        text-[16px]
        md:text-[15px]
        pb-2
        font-bold
        md:font-semibold
        '>
            
            <div
            className='
            place-self-start
            '
            >
Pair
            </div>
            <div className='
            place-self-end
            '>
Price
            </div>
            <div className='
            place-self-end
            flex
            flex-row
            items-end
            justify-between
            gap-2
            '>
{showVolume? 'Volume' : 'Change'}
<HiOutlineSwitchHorizontal
onClick={toggleVolume}
/>
            </div>
            </div>
            {data.map((item) => {
return(
    <div 
    className='
    pb-1
    grid 
    grid-cols-3
    gap-3
text-[12px]
md:font-light
md:text-[14px]
    '
    key={item.pair}>
        <div
        
        className='
        place-self-start
        '>
            {item.pair}
            </div>
        <div 
        className='
        place-self-end
        '
        >
            {item.price}
            </div>
        <div
          className='
          place-self-end
          '
        >
            {showVolume ? item.volume : item.Change} 
            </div>
  
        </div>
)
            })}

         

    </div>
  )
}

export default PairListTable