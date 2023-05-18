import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Fuse from "fuse.js";

const Data = [
  { id: 1, title: "Apple" },
  { id: 2, title: "Banana" },
  { id: 3, title: "Cherry" },
  { id: 4, title: "Durian" },
  { id: 5, title: "Elderberryi" },
  // Add more data items as needed
];

const options = {
  keys: ["title"], // The property to perform the search on
  includeScore: true, // Include the search score in the results
  threshold: 0.5, // Adjust the matching threshold as needed
};

const SearchBar = ({setResults}) => {
  // const handleSubmit = (e) => e.preventDefault();

 
  const [searchTerm, setSearchTerm] = useState("");
  const navigateTo = useNavigate();
  


  const handleSearch = () => {


    // const filteredSearch =
    //   Data &&
    //   Data.filter((data) =>
    //     data.title.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    // setResults(filteredSearch);

    const fuse = new Fuse(Data, options);

    // Perform the search
    const searchResults = fuse.search(searchTerm.toLowerCase());
    
    // Update the results state
    setResults(searchResults);
    // navigateTo("/search-results");
  };
  
  return (
    <div className="mb-3">
      {/* <form className="search" onSubmit={handleSearch}> */}
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[40vw] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-200 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="How can i help you?"
          aria-label="Search"
          aria-describedby="button-addon1"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="relative z-[2] rounded-r border-2 border-neutral-300 px-6 py-2 text-xs font-medium uppercase text-white hover:bg-white hover:text-black hover:bg-opacity-1 focus:outline-none focus:ring-0"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default SearchBar;
