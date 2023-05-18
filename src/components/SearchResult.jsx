import React from "react";

const SearchResult = ({results}) => {
    console.log(results)
  return (
    <div>
      <ul>
        {results.map((result) => {
         return <li key={result.id}>{result.item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
