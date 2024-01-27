import React from 'react'

const TotalBalance = ({balance}) => {
  return (
    <div className='px-8 py-6 border-gray-800 border-[1px] rounded-xl'>
        TotalBalance
        <p>{balance}</p>
        </div>
  )
}

export default TotalBalance