import React from "react";

const RoleToggle = ({ isAdmin, toggleRole }) => {
  return (
    <div className="flex justify-center items-center mb-6">
      <span className="text-sm font-medium text-gray-700 mr-2">Admin</span>
      <button
        type="button"
        onClick={toggleRole}
        className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-300 cursor-pointer ${
          isAdmin ? "bg-orange-400" : "bg-orange-800"
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isAdmin ? "translate-x-0" : "translate-x-6"
          }`}
        ></div>
      </button>
      <span className="text-sm font-medium text-gray-700 ml-2">
        Super Admin
      </span>
    </div>
  );
};

export default RoleToggle;
