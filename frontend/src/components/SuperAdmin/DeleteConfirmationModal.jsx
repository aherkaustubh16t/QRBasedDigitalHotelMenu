import React from "react";
import { FaTimes } from "react-icons/fa";

const DeleteConfirmationModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  handleDeleteStall,
  stallToDelete,
}) => {
  if (!isDeleteModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-orange-700 to-orange-800 rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Confirm Delete</h2>
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <p className="mb-6">Are you sure you want to delete this stall?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 cursor-pointer transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleDeleteStall(stallToDelete);
              setIsDeleteModalOpen(false);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
