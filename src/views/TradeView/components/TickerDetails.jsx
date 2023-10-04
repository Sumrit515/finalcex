import React from 'react'

const TickerDetails = () => {
  return (
    <div className='
    p-6
    flex
    flex-rows
    justify-between
    gap-6
    text-sm
    '>
        <div className='
        flex
        flex-col
        '>
24h Change
<span className='
text-[12px]

'>
0.274
</span>
        </div>
        <div className='
        flex
        flex-col
        '>
24h High
<span className='
text-[12px]

'>
0.274
</span>
        </div>
        <div className='
        flex
        flex-col
        '>
24h Low
<span className='
text-[12px]

'>
0.274
</span>
        </div>
        <div className='
        flex
        flex-col
        '>
24h Volume(1INCH)
<span className='
text-[12px]

'>
0.274
</span>
        </div>
        <div className='
        flex
        flex-col
        '>
24h Volume(USDT)
<span className='
text-[12px]

'>
0.274
</span>
        </div>
    </div>
  )
}

export default TickerDetails