import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [newOrders, setNeworders] = useState([]);

  async function handleOrders() {
    const url = "http://localhost:3000/restaurant/orders";
    try {
      const response = await fetch(url);
      const orders = await response.json();
      setNeworders(orders);
    } catch (err) {
      console.error(err);
      alert("Cannot fetch orders");
    }
  }

  useEffect(() => {
    // handleOrders();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">New Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-6 py-3">Order ID</th>
              <th className="text-left px-6 py-3">Customer Name</th>
              <th className="text-left px-6 py-3">Food Item(s)</th>
              <th className="text-left px-6 py-3">Action</th>
              <th className="text-left px-6 py-3">Notify Agent</th>
            </tr>
          </thead>
          <tbody>
            {newOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer?.name || "N/A"}</td>
                <td className="px-6 py-4">
                  {Array.isArray(order.food_items)
                    ? order.food_items.map((item) => item.name).join(", ")
                    : order.food_item?.name || "N/A"}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md text-sm">
                    Accept
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm">
                    Reject
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm">
                    Pick up
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
