// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;



export default function TradingViewWidget( {
  tradeSymbol,
  tradeSymbolFirst,
  tradeSymbolSecond
}) {
  const onLoadScriptRef = useRef();
console.log(tradeSymbol)
// console.log(tradeSymbolFirst)
// console.log(tradeSymbolSecond)
const firstSymbol = 
  useEffect(

   
    () => {
      // console.log(tradeSymbol)
      // const splitSymbol = tradeSymbol?.split("_")
      // const tradeSymbolFirst = splitSymbol?.[0]
      // const tradeSymbolSecond = splitSymbol?.[1]
      console.log(tradeSymbolFirst)
      console.log(tradeSymbolSecond)
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_16b6c') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: "autosize",
            height: 600,
            symbol: `BINANCE:${tradeSymbolFirst}${tradeSymbolSecond}`, 
            interval: "D",
            timezone: "Asia/Kolkata",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: false,
            container_id: "tradingview_16b6c"
          });
        }
      }
    },
    [tradeSymbol, tradeSymbolFirst, tradeSymbolSecond]
  );

  return (
    <div className='
    relative
    z-1
    '>
      <div id='tradingview_16b6c' 
      className='

      h-[600px]
      '
      />
   
    </div>
  );
}
