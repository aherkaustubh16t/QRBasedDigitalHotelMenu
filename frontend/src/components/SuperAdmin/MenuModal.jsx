import React from "react";
import { FaTimes } from "react-icons/fa";

const MenuModal = ({ isMenuModalOpen, closeMenuModal, selectedMenu }) => {
  if (!isMenuModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-orange-700 to-orange-800 rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={closeMenuModal}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="space-y-4">
          {selectedMenu.length > 0 ? (
            selectedMenu.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-orange-500 p-4 rounded-lg"
              >
                <span className="text-lg">{item.name}</span>
                <span className="text-lg font-semibold">{item.price}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-300">No menu available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
