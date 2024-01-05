import React, { useState } from 'react';

const AddProductModal = ({ showModal, setShowModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <form onSubmit={handleSubmit}>
              {/* Your form fields */}
              {/* Name, Picture URL, Description, Gender, Category, Price */}
              {/* ... */}
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
    </>
  );
};

export default AddProductModal;
