import React, { useState, useEffect } from 'react';
import SearchSection from '../../components/dashboard/SearchSection';
import Notification from '../../components/dashboard/Notification';
import Profile from '../../components/dashboard/Profile';
import LatestOrdersTable from '../../components/dashboard/LatestOrdersTable';

function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="flex ml-5 mr-5 items-center justify-between">
        <SearchSection />
        <div className="flex items-center gap-5 space-x-3">
          <Notification />
          <Profile />
        </div>
      </div>

      <div className="flex gap-5 mt-5">
        {/* Filter by Gender */}
        <div className="relative">
          <select className="block appearance-none border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        
        {/* Filter by Category */}
        <div className="relative">
          <select className="block appearance-none border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500">
            <option>Select Category</option>
            <option>Makeup</option>
            <option>Skincare</option>
            <option>Haircare</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        
        {/* Sort by Price */}
        <div className="relative">
          <select className="block appearance-none border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500">
            <option>Sort by Price</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Add Product
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          {/* Add Product Modal Content */}
          <div className="bg-white p-8 rounded-md">
            {/* Your form inputs for adding a product */}
            {/* Name, Picture URL, Description, Gender, Category, Price */}
            <form>
              {/* ... */}
              {/* Your form fields */}
              {/* ... */}
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onClick={() => setShowModal(false)}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="ml-4 text-gray-500 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
      <LatestOrdersTable/>
    </div>
  );
}

export default Dashboard;
