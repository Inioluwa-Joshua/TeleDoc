import React, { useState } from 'react'
import { SearchBar } from '../components/landing';
import SearchResult from '../components/SearchResult';
// import {results} from '../components/landing/SearchBar'

const SearchResultPage = () => {
  const [results, setResults] = useState([]);

  // console.log(results)


    return (
        <div>
          <SearchBar setResults={setResults}/>
          <SearchResult results={results}/>
        </div>
      );
}

export default SearchResultPage;