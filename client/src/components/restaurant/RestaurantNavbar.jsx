import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

const RestaurantNavbar = () => {
  const [restaurant, setRestaurant] = useState('');



  const checkRestaurant = async () => {
    try {
      const res = await fetch("http://localhost:3000/restaurant/profile", {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) {
        const errData = await res.json();
        console.warn("Restaurant check failed:", errData.msg);
        return;
      }
      const data = await res.json();
      setRestaurant(data.name);
    } catch (err) {
      console.error("Network error (restaurant check):", err);
    }
  };


  useState(() => {
    checkRestaurant();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 flex flex-col justify-between">
        <div className="p-4 space-y-2">
          {[
            { to: '/restaurant/dashboard', label: 'Dashboard' },
            { to: '/restaurant/orders', label: 'Orders' },
            { to: '/restaurant/menu', label: 'Menu' },
            { to: '/restaurant/history', label: 'Order History' },
            { to: '/restaurant/offers', label: 'Offers' },
            { to: '/restaurant/support', label: 'Support' },
            { to: '/restaurant/settings', label: 'Settings' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded font-medium transition ${isActive
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navbar */}
        <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          {/* Left group: Search bar + logo */}
          <div className="flex items-center gap-x-6">
            <input
              type="text"
              placeholder="Search here"
              className="px-3 py-2 w-64 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Right: Account link */}
          <NavLink
            to="/restaurant/profile"
            className="text-gray-700 font-medium hover:text-indigo-600"
          >
            {restaurant || 'Account'}
          </NavLink>
        </header>


        {/* Routed Component Display Area */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RestaurantNavbar;
