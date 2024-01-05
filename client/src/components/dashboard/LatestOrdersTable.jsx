import React from 'react';

const LatestOrdersTable = () => {
  // Dummy data for example
  const orders = [
    {
      id: 1,
      product: 'Product A',
      gender: 'Male',
      category: 'Skincare',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 2,
      product: 'Product B',
      gender: 'Female',
      category: 'Makeup',
      price: '$30',
      description: 'Consectetur adipiscing elit.',
    },
    // Add more dummy data as needed...
  ];

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-lg font-bold mb-4">Latest Orders</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">{order.product}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {/* Add action buttons here */}
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestOrdersTable;
