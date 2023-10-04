
import React, {Suspense} from 'react';
import Pagination from './Pagination';
import list from '../constants/cryptoCurrencyList.json'

const MarketData = () => {

const newArray = list.splice(0, 10)
  return (
    <div>
     
      
      <Pagination data={list} itemsPerPage={10} />
      
      
    </div>
  );
};

export default MarketData;
