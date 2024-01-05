import React from 'react';

const SelectDropdown = ({ options, placeholder }) => {
  return (
    <div className="relative">
      <select className="block appearance-none gap-5 border border-gray-300  rounded-md px-5 py-2 pr-10 focus:outline-none focus:border-blue-500">
        <option>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default SelectDropdown;
