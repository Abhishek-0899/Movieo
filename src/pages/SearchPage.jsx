import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      Search page
    </div>
  );
}

export default SearchPage;
