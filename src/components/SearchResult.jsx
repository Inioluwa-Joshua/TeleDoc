import React from "react";

const SearchResult = ({results}) => {
    console.log(results)
  return (
    <div>
      <ul>
        {results.map((result, item) => {
         return <li key={item}>{result}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
