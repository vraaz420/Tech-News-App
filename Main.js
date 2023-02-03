import React from 'react'
import Stories from './Stories';
import Search from './Search';
import Pagination from './Pagination';

// import { useContext } from 'react';  
// import { AppContext } from './Context';

// import { useGlobalContext } from './Context'; // add custom hook

const Main = () => {
    
  return (
    <div>
    
      
      <Search />
      <Pagination />
      <Stories />
    </div>
  )
}

export default Main;
