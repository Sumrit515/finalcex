

import Page from '../../components/Page'


import React from 'react'
import Card from './components/Card'
import ScreenerTable from '../ScreenerTable'


export const MarketView = () => {

   
  return (

    <Page>
        
  <div>
        <div className='
        text-4xl
        '>
Market Overview
        </div>
        <div className='
        
        mt-2
            text-sm'>
            All price information is in <span className='
            hover:underline
            font-bold
            hover:cursor-pointer
            '>USD</span>
        </div>
        <div className='
        grid
        mt-5
        grid-cols-4
        gap-2
        '>
        <div>
          <Card
          cardHeading="Highlight Coin"/>
          </div>
        <div>
          <Card
           cardHeading="New Lisiting"
           />
          </div>
        <div>
          <Card
           cardHeading="Top Gainers"
          />
          </div>
        <div>
          <Card
           cardHeading="Top Losers"
          />
          </div>
        </div>
        
        <div>
      
         <ScreenerTable
         isCaption={true}
         isFull={true}
         />
        </div>

    </div>
    </Page>
  
  )
}

