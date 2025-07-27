import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarForm from "./SidebarForm"; // Assuming your sidebar form component

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const checkUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/", {
        credentials: "include", // important for httpOnly cookies
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.name);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("User check failed:", err);
      setUser(null);
    }
  };
  
  useEffect(() => {
    checkUser();
  }, []);

  const handleAccountClick = (e) => {
    if (!user) {
      e.preventDefault();
      setShowSidebar(true);
    }
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <Link to="/home">
            <img src="logo.png" alt="Logo" className="h-10 w-auto rounded" />
          </Link>
          <input
            type="text"
            placeholder="Select your location"
            id="my-location"
            aria-label="Select your location"
            className="hidden md:block px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Right side */}
        <nav className="flex items-center space-x-4 text-gray-700 font-medium">
          <NavLink
            to="/join-us"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition ${
                isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            Join us
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition ${
                isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/offers-near-me"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition ${
                isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            Offers
          </NavLink>
          <NavLink
            to="/my-account"
            onClick={handleAccountClick}
            className={({ isActive }) =>
              `px-2 py-1 rounded transition ${
                isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            {user ? `${user}` : "Sign In"}
          </NavLink>
          <NavLink
            to="/my-cart"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition ${
                isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            Cart
          </NavLink>
        </nav>
      </div>

      {/* Sidebar for login/signup */}
      {showSidebar && <SidebarForm onClose={() => setShowSidebar(false)} />}
    </header>
  );
};

export default Navbar;
