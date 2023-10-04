import React, {useEffect} from 'react'
import axios from 'axios';

const FetchingList = () => {

    const fetchCryptocurrencyList = async () => {
        try {
          const response = await axios.get('https://api.binance.com/api/v3/exchangeInfo');
          return response.data.symbols;
        } catch (error) {
          console.error('Error fetching cryptocurrency list:', error);
          return [];
        }
      };

      const createCryptocurrencyArray = async () => {
        const cryptocurrencyList = await fetchCryptocurrencyList();
        const cryptocurrencies = cryptocurrencyList.map((crypto) => ({
          name: crypto.baseAsset,
          symbol: crypto.baseAsset.toLowerCase(),
        }));
        return cryptocurrencies;
      };


      useEffect (() => {
        createCryptocurrencyArray()
        .then((cryptocurrencies) => {
          console.log(cryptocurrencies);
        });
      
      }, [])

 



  return (
    <div>FetchingList</div>
  )
}

export default FetchingList






