import React from 'react'
import Image from 'next/image'

// interface CardProps {
//     cardHeading: String;
// }

const Card= ({
    cardHeading
}) => {

    const data = [
        {
"name" : "bitcoin",
"symbol" : "BTC",
"price" : "20000",
"change" : "2",
"img" : "next.svg"
 
        },
        {
            "name" : "BNB",
            "symbol" : "BNB",
            "price" : "200",
            "change" : "2",
            "img" : "next.svg"

        },
        {

            "name" : "Ethereum",
"symbol" : "ETH",
"price" : "1600",
"change" : "2",
"img" : "next.svg"
        }
    ]
  return (
    <div className='bg-slate-100
    p-2
    m-2
    rounded-lg
    hover:bg-white
    '>
        <div
        className='
        mb-2
        font-bold
        text-sm
        '
        >
{cardHeading}
        </div>
        <div>
        {
            data.map((item, i) => {
                return(
                    <div
                    key={i}
                    className='
                    grid
                    
                    grid-cols-3
                    place-items-center
                    hover:cursor-pointer
                    hover:bg-slate-100
                    '
                    >
                        <div className='
                        flex
                        flex-row
                        items-center
                        justify-start
                        '>
                            <div>
                                <Image
                                src={item?.img}
                                alt='logo'
                                width={50}
                                height={50}
                                />

                                </div>
                                <div className='
                                pl-5
                                '>
                                {item?.symbol}
                                    </div>
                            
                        </div>
                        <div>
                           ${item?.price}
                            </div>
                        <div>
                        {item?.change}
                            </div>
                        </div>
                )
            })
        }
        </div>
      
    </div>
  )
}

export default Card