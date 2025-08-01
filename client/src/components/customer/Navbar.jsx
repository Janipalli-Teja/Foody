import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarForm from "./SidebarForm";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserID] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const checkRestaurant = async (id) => {
    try {
      const res = await fetch("http://localhost:3000/restaurant/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ userID: id }),
      });
      return res.ok;
    } catch (err) {
      console.error("Restaurant check failed:", err);
      return false;
    }
  };

  const checkDeliveryAgent = async () => {
    try {
      const res = await fetch("http://localhost:3000/agent/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ userID: userId }),
      });
      return res.ok;
    } catch (err) {
      console.error("Agent check failed:", err);
      return false;
    }
  };

useEffect(() => {
  const checkAndRedirect = async () => {
    try {
      const res = await fetch("http://localhost:3000/", {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.name);
        setUserID(data.id); // for later use, but don't rely on it right now

        const isRestaurant = await checkRestaurant(data.id);  // pass ID directly
        if (isRestaurant) {
          navigate("/restaurant/dashboard"); 
        }
      } else {
        setUser(null);
        setUserID(null);
      }
    } catch (err) {
      console.error("User check failed:", err);
      setUser(null);
      setUserID(null);
    }
  };

  checkAndRedirect();
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
              `px-2 py-1 rounded transition ${isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            Join us
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition ${isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/offers-near-me"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition ${isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            Offers
          </NavLink>
          <NavLink
            to="/my-account"
            onClick={handleAccountClick}
            className={({ isActive }) =>
              `px-2 py-1 rounded transition ${isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            {user ? `${user}` : "Sign In"}
          </NavLink>
          <NavLink
            to="/my-cart"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition ${isActive ? "text-red-600 font-semibold" : "hover:text-blue-500"
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
