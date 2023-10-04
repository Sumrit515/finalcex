import CryptoBalance from '../../../views/TransactionView/components/CryptoBalance'
import SpotBalance from '../../../views/TransactionView/components/SpotBalance'
import React from 'react'

const FundsView = () => {
  return (
    <div className='
    font-semibold
   mt-6
    '>
      Funds

      <div className='
flex
flex-col
gap-8

items-start
justify-start
p-8
'>
  <CryptoBalance/>
  <SpotBalance/>
</div>
    </div>
  )
}

export default FundsView