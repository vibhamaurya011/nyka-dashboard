import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Search() {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <AiOutlineSearch className="text-gray-400" />
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-500 w-72 md:w-96 lg:w-1150"
      />
    </div>
  );
}

export default Search;
