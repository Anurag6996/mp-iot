import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-500 rounded-md flex items-center justify-center text-white text-lg font-semibold shadow-sm">
            <i className="ri-shield-check-line"></i>
          </div>
          <span className="text-xl font-semibold text-gray-900 font-[Pacifico]">
            SmartGuard
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-8 text-sm font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-teal-500"
                : "text-gray-700 hover:text-teal-500 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "text-teal-500"
                : "text-gray-700 hover:text-teal-500 transition"
            }
          >
            Product
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-teal-500"
                : "text-gray-700 hover:text-teal-500 transition"
            }
          >
            About
          </NavLink>

          {/* Live Dashboard Button */}
          <NavLink
            to="/dashboard"
            className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition"
          >
            Live Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
