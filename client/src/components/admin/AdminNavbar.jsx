// components/super-admin/SuperAdminNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Dashboard", to: "/admin/dashboard" },
    { label: "Restaurants", to: "/admin/restaurants" },
    { label: "Agents", to: "/admin/agents" },
    { label: "Customers", to: "/admin/customers" },
    { label: "Reports", to: "/admin/reports" },
    { label: "Settings", to: "/admin/settings" },
  ];

  return (
    <nav className="bg-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand */}
        <h1 className="text-xl font-bold">Super Admin</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className="hover:text-gray-200 transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 border-t border-indigo-500">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block hover:text-gray-200 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
