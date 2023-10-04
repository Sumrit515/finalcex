import React from 'react'
import OrderBook from './OrderBook'

const Table = () => {
  return (
    <>
    <div className='
    flex
    flex-row
    gap-2
    '>
      <div>
      <OrderBook
      count={10}
      />
        </div>
    
      <div>
      <OrderBook
      count={10}
      isSell
      />
        </div>
      
    </div>
    </>
    
  )
}

export default Table