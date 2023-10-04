import { title } from 'process';
import React from 'react'
import CryptoSvg from '../../public/next.svg'
import Image from 'next/image';



const Card = ({
  title,
  body
}) => {
  return (
    <div
    className='
    bg-white
    border-black
    border-2
    p-4
    rounded-xl
    text-center
    text-black
    w-[600px]
    h-[460px]
    hover:shadow-xl
    cursor-pointer
    transition
    duration-800
    flex
    flex-col
    justify-between
    overflow-hidden
    items-center
    gap-4
    hover:scale-105
    '
    >
        
       
          <Image
          src={body}
          alt='IMG'
          width={300}
          height={300}
          />
          
       
            <h1 className='
    font-bold
    text-[30px]
    '>
        {title}
        </h1>       
            </div>
  )
}

export default Card