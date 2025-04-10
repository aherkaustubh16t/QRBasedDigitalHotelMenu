import React, { useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import AnimatedText from "../AnimatedText";

const Header = ({
  toggleProfileDropdown,
  isProfileDropdownOpen,
  handleLogout,
}) => {
  return (
    <header className="fixed top-0 w-full bg-orange-600 p-4 shadow-md flex flex-col md:flex-row justify-between items-center z-50">
      <AnimatedText prefix={"Scan"} words={["Eat", "It"]} />
      <h1 className="text-xl sm:text-2xl font-bold mb-4 md:mb-0">
        Super Admin Dashboard
      </h1>
      <div className="relative">
        <button
          onClick={toggleProfileDropdown}
          className="flex items-center space-x-2 focus:outline-none cursor-pointer"
        >
          <FaUserCircle className="text-2xl sm:text-3xl text-yellow-400" />
          <span className="text-lg font-semibold">Kaustubh Aher</span>
        </button>
        {isProfileDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-yellow-400 border-4 border-black rounded-lg shadow-lg py-2">
            <div className="px-4 py-2 text-gray-800">
              <p className="font-semibold">Kaustubh Aher</p>
              <p className="text-sm text-gray-600">Super Admin</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-gray-700 hover:text-orange-700 hover:font-bold flex items-center cursor-pointer"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
