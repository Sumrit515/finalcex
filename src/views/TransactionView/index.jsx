import React from 'react'
import CryptoBalance from './components/CryptoBalance'
import SpotBalance from './components/SpotBalance'

const TransactionView = () => {
  return (
    <div className='
    flex
    flex-col
    gap-8
    h-screen
    items-start
    justify-start
    p-8
    '>
      <CryptoBalance/>
      <SpotBalance/>
    </div>
  )
}

export default TransactionView