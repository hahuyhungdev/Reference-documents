import React, { useEffect } from 'react';

export const BitcoinStockChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.innerHTML = `
    new TradingView.widget(
        {
        "autosize": true,
        "symbol": "NASDAQ:TSLA",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "allow_symbol_change": true,
        "save_image": false,
        "container_id": "tradingview_462b3"
      }
      );`;

    document.body.appendChild(script);
  }, []);
  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_462b3" className="w-full h-[600px]"></div>
    </div>
  );
};
