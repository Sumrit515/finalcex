import React, { useEffect } from 'react';

// declare global {
//     interface Window {
//       TradingView: {
//         colorTheme: string;
//         dateRange: string; // Add the missing property
//         showChart: boolean;
//         // ... (other properties)
//       };
//     }
//   }

const OverviewObject = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;

    // Declare the type of window.TradingView
  

    // Set the widget configuration as a global variable
    window.TradingView = {
      colorTheme: 'light',
      dateRange: '12M',
      showChart: true,
      // ... (other properties)
    };

    // Append the script to the body
    document.body.appendChild(script);

    return () => {
      // Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default OverviewObject;
