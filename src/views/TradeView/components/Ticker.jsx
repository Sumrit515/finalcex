import React from 'react'
import {BsArrowDown} from 'react-icons/bs'

const Ticker = () => {
  return (
    <div className='
    flex
    flex-rows
    justify-between
    items-center
    m-2
    '>
        <div className='s
        flex
        flex-rows
        justify-between
        gap-1
        items-center
        '>
        <div className='
        text-2xl
        font-semibold
        text-red-400
        '>
1.454

        </div>
<div>
<BsArrowDown
color='red'/>
</div>
        <div className='
        text-sm
        pl-3
        '>
$1.454
        </div>
        </div>

        <div 
        className='
        hover:text-purple-500
        hover:cursor-pointer
        '
        >
More
        </div>
    </div>
  )
}

export default Ticker