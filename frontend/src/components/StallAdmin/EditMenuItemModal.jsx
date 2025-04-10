import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const EditMenuItemModal = ({ editingMenuItem, onClose, onSave }) => {
  const [item, setItem] = useState({
    ...editingMenuItem,
    nameMarathi: editingMenuItem.nameMarathi || "",
    description: editingMenuItem.description || "",
    descriptionMarathi: editingMenuItem.descriptionMarathi || "",
    category: editingMenuItem.category || "", // Added category field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setItem({ ...item, image: file });
    } else {
      setItem({ ...item, image: editingMenuItem.image });
    }
  };

  const handleSave = () => {
    if (!item.name || !item.price || !item.category) {
      alert("Please fill all required fields (name, price, category).");
      return;
    }
    onSave(item);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-orange-700 to-orange-800 rounded-2xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sticky -top-6 rounded-t-4xl z-10 bg-orange-800/90 backdrop-blur-sm px-4 py-6">
          <h2 className="text-xl font-bold text-white">Edit Menu Item</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white transition duration-200 cursor-pointer"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <div className="space-y-5 px-2">
          {/* English Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Item Name (English) <span className="text-red-300">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter item name in English"
              required
            />
          </div>

          {/* Marathi Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Item Name (Marathi){" "}
              <span className="text-gray-300">(optional)</span>
            </label>
            <input
              type="text"
              name="nameMarathi"
              value={item.nameMarathi}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter item name in Marathi"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Category <span className="text-red-300">*</span>
            </label>
            <input
              type="text"
              name="category"
              value={item.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="e.g., Main Course, Beverages"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Price (₹) <span className="text-red-300">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={item.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter item price"
              required
            />
          </div>

          {/* Description English */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Description (English)
            </label>
            <textarea
              name="description"
              value={item.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter description in English"
              rows="2"
            />
          </div>

          {/* Description Marathi */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Description (Marathi)
            </label>
            <textarea
              name="descriptionMarathi"
              value={item.descriptionMarathi}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter description in Marathi"
              rows="2"
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full bg-white text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Image Preview */}
          {item.image && (
            <div className="flex justify-center">
              <img
                src={
                  item.image instanceof File
                    ? URL.createObjectURL(item.image)
                    : item.image
                }
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg border border-white"
              />
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="sticky bottom-0 left-0 mt-6 bg-gradient-to-t from-orange-800 via-orange-800/80 to-transparent pt-4">
          <button
            onClick={handleSave}
            className="w-full bg-yellow-400 text-orange-900 px-4 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition duration-300 cursor-pointer"
          >
            Update Item
          </button>
        </div>
      </div>
    </div>
  );
};

EditMenuItemModal.propTypes = {
  editingMenuItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nameMarathi: PropTypes.string,
    price: PropTypes.string.isRequired,
    description: PropTypes.string,
    descriptionMarathi: PropTypes.string,
    category: PropTypes.string, // Added category to propTypes
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)])
      .isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditMenuItemModal;
