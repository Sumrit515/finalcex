import React from 'react'
import Image from 'next/image';
import { title } from 'process';

// interface SupportCardsProps {
//     title? : string;
//     body?: string;
//     src : string; 
// }

const SupportCards = ({
    title,
    body,
    src
}) => {
  return (
    <div className='
    hover:cursor-pointer
    transition
    duration-800
    hover:scale-105
    border-black
    border-2
    rounded-xl
    flex
    item-center
    justify-center
    gap-4
    flex-col
    text-center
    p-4
    '>
        
            <Image
            className='
            self-center
            '
            src={src}
            alt="logo"
            width={200}
            height={200}
            />
       
        <div className='
        font-semibold
        text-[32px]
        '>
            {title}
        </div>
        <div>
            {body}
        </div>
    </div>
  )
}

export default SupportCards