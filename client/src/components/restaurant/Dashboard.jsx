import React, { useState } from 'react';
import { IndianRupee , ShoppingCart, Users, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Dashboard = () => {
  const [totalRevenue, setRevenue] = useState(10243.00);
  const [revenuePercentile, setRevenuePercentile] = useState("+42.4%");
  const [totalOrders, setOrders] = useState(23456);
  const [ordersPercentile, setOrdersPercentile] = useState("-49.4%");
  const [totalCustomers, setCustomers] = useState(1234);
  const [customersPercentile, setCustomerspercentile] = useState("+42.4%");
  const [customerComplaints, setCustomersComplaints] = useState(123);
  const [complaintsPercentile, setComplaintsPercentile] = useState("-4.4%");

  const displayCards = [
    {
      id: 1,
      title: "Total Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      Icon: IndianRupee,
      percentile: revenuePercentile,
    },
    {
      id: 2,
      title: "Total Dish Ordered",
      value: totalOrders.toLocaleString(),
      Icon: ShoppingCart,
      percentile: ordersPercentile,
    },
    {
      id: 3,
      title: "Total Customers",
      value: totalCustomers.toLocaleString(),
      Icon: Users,
      percentile: customersPercentile,
    },
    {
      id: 4,
      title: "Customer Complaints",
      value: customerComplaints.toLocaleString(),
      Icon: AlertCircle,
      percentile: complaintsPercentile,
    },
  ];

  const deliveryData = [
    { day: 'Mon', orders: 20 },
    { day: 'Tue', orders: 35 },
    { day: 'Wed', orders: 40 },
    { day: 'Thu', orders: 80 },
    { day: 'Fri', orders: 45 },
    { day: 'Sat', orders: 30 },
    { day: 'Sun', orders: 60 },
  ];

  const mealData = [
    { name: 'Breakfast', value: 0 },
    { name: 'Lunch', value: 42 },
    { name: 'Snacks', value: 6 },
    { name: 'Dinner', value: 32 },
    { name: 'Late Night', value: 20 },
  ];

  const COLORS = ['#8884d8', '#F97316', '#00C49F', '#0088FE', '#FFBB28'];
 return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-8">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayCards.map(({ id, title, value, Icon, percentile }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition duration-200"
          >
            <div className="flex items-center justify-between">
              <Icon className="w-8 h-8 text-indigo-500" />
              <span
                className={`text-sm font-semibold ${
                  percentile.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {percentile}
              </span>
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
              <p className="text-gray-500 mt-1">{title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Delivery Trend Bar Chart */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Delivery Orders Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={deliveryData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#6366f1" radius={[10, 10, 0, 0]} /> {/* Indigo */}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Mealtime Pie Chart */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Mealtime Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={mealData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
                label
              >
                {mealData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
