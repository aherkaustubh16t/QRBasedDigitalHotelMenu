import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const MenuItemsList = ({ menu, onEdit, onDelete }) => {
  return (
    <div className="bg-orange-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Menu Items</h2>
      <div className="space-y-4">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-orange-600 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <span className="text-lg">{item.name}</span>
                <span className="text-lg font-semibold block">
                  ₹ {item.price}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(item)}
                className="bg-yellow-400 text-orange-900 px-3 py-1 rounded-full hover:bg-yellow-200 cursor-pointer transition"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 cursor-pointer transition"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemsList;
