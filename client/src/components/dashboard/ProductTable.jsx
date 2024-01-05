import React from 'react';

function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border-b-2 p-2">Image</th>
            <th className="border-b-2 p-2">Product Name</th>
            <th className="border-b-2 p-2">Description</th>
            <th className="border-b-2 p-2">Gender</th>
            <th className="border-b-2 p-2">Category</th>
            <th className="border-b-2 p-2">Price</th>
            <th className="border-b-2 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border-b p-2">{/* Product Image */}</td>
              <td className="border-b p-2">{product.name}</td>
              <td className="border-b p-2">{product.description}</td>
              <td className="border-b p-2">{product.gender}</td>
              <td className="border-b p-2">{product.category}</td>
              <td className="border-b p-2">{product.price}</td>
              <td className="border-b p-2">
                {/* Edit and Delete Buttons */}
                <button onClick={() => onEdit(product)}>Edit</button>
                <button onClick={() => onDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
