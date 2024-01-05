import React, { useState } from 'react';
import SearchSection from '../../components/dashboard/SearchSection';
import Notification from '../../components/dashboard/Notification';
import Profile from '../../components/dashboard/Profile';
import LatestOrdersTable from '../../components/dashboard/LatestOrdersTable';
import SelectDropdown from '../../components/dashboard/SelectDropdown';
import AddProductModal from '../../components/dashboard/AddProductModal';

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const genderOptions = ['Male', 'Female'];
  const categoryOptions = ['Makeup', 'Skincare', 'Haircare'];
  const priceOptions = ['Low to High', 'High to Low'];

  return (
    <div className="container mx-auto p-5 overflow-x-auto">
      {/* Search and Profile Sections */}
      <div className="flex items-center justify-between mb-5">
        <SearchSection />
        <div className="flex items-center gap-5">
          <Notification />
          <Profile />
        </div>
      </div>

      {/* Filter Sections */}
      <div className="flex justify-between mb-5">
        <SelectDropdown options={genderOptions} placeholder="Select Gender" />
        <SelectDropdown options={categoryOptions} placeholder="Select Category" />
        <SelectDropdown options={priceOptions} placeholder="Sort by Price" />
        <div></div>
      </div>

      {/* Add Section */}
      <div className="flex justify-end mb-5">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Add Product
        </button>
      </div>
      <AddProductModal showModal={showModal} setShowModal={setShowModal} />

      {/* Products Table */}
      <div className="">
        <LatestOrdersTable />
      </div>
    </div>
  );
}

export default Dashboard;
