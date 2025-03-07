import React, { useState, useEffect } from 'react';

interface CryptoPrice {
  id: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,litecoin&order=market_cap_desc&sparkline=false'
        );
        const data = await response.json();
        setPrices(data);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/90 text-white py-2 overflow-hidden">
      <div className="flex animate-scroll">
        {prices.map((crypto) => (
          <div key={crypto.id} className="flex items-center space-x-2 mx-4 whitespace-nowrap">
            <span className="font-bold">{crypto.name}</span>
            <span>${crypto.current_price.toLocaleString()}</span>
            <span className={crypto.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}>
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}