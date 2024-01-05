import React, { useState, useEffect } from 'react';
import productService from '../services/productService'; // Service to interact with the backend

function EditProductModal({ product, onClose }) {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  useEffect(() => {
    setEditedProduct({ ...product });
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productService.updateProduct(editedProduct); // Call your service to update the product
      onClose(); // Close the modal after updating the product
    } catch (error) {
      // Handle error updating product
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={editedProduct.name}
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
              value={editedProduct.description}
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
              Save Changes
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

export default EditProductModal;
