import React from 'react'
import Image from 'next/image'
import SkeletonLoader from '../SkeletonLoader'
import { Button } from '../ui/button'
import { useTransferFundsModal } from '../../hooks/useTransferFundsModal'

const WalletBalance = ({
    balance,
    name,
    symbol,
    logo,
    isLoading
}) => {

  const transferFundsModal = useTransferFundsModal()

  return (
    <div className='flex flex-col gap-8 w-36 h-48 border-[1px] border-gray-800 rounded-xl p-4  cursor-pointer overflow-hidden'>
      {!isLoading ? <p className='text-center text-3xl'>{balance.toString().length > 4 ? `${balance.toString().substring(0,5)}..` : balance}</p> : <SkeletonLoader/>}
        <div className='flex flex-row justify-center gap-6 items-center'>
         <Image
         className='w-6 h-6'
         src={logo}
         alt='logo'
         width={50}
         height={50}
         />
         <p className='text-lg'>{symbol}</p>
        </div>
        <Button onClick={() => transferFundsModal.onOpen()}>
          Transfer
        </Button>
        
    </div>
  )
}

export default WalletBalance