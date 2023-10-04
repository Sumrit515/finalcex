/* eslint-disable @next/next/no-sync-scripts */
 <reference types="react" />

import React from 'react';

const TvChart = () => {
  return (
    <>
      <div
      className='
      fixed
      
      '
        dangerouslySetInnerHTML={{
          __html: `
            <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
            <coingecko-coin-price-marquee-widget
              coin-ids="bitcoin,ethereum,eos,ripple,litecoin,tron,polkadot,matic-network"
              currency="usd"
              background-color="#ffffff"
              locale="en"
            ></coingecko-coin-price-marquee-widget>
          `,
        }}
      />
    </>
  );
};

export default TvChart;
