import React, { useState } from 'react';
import productService from '../services/productService'; // Service to interact with the backend

function AddProductModal({ onClose }) {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    gender: '',
    category: '',
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productService.addProduct(productData); // Call your service to add the product
      onClose(); // Close the modal after adding the product
    } catch (error) {
      // Handle error adding product
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={productData.name}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          {/* Add other input fields for description, gender, category, price */}
          {/* Example:
          <div className="mb-4">
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={productData.description}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          </div> */}
          {/* Add input fields for other product details */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Product
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 ml-2 bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
