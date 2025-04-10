import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddMenuItemForm = ({ onAddMenuItem }) => {
  const [newMenuItem, setNewMenuItem] = useState({
    name: "",
    nameMarathi: "",
    price: "",
    description: "",
    descriptionMarathi: "",
    category: "", // Added category field
    image: null,
  });

  // Common food categories - you can customize this list
  const foodCategories = [
    "Starters",
    "Main Course",
    "Breads",
    "Rice",
    "Desserts",
    "Drinks",
    "Specialties",
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewMenuItem({ ...newMenuItem, image: file });
    }
  };

  const handleAddMenuItem = () => {
    if (
      !newMenuItem.name ||
      !newMenuItem.price ||
      !newMenuItem.image ||
      !newMenuItem.category
    ) {
      alert(
        "Please fill all required fields (name, price, category) and upload an image."
      );
      return;
    }
    onAddMenuItem(newMenuItem);
    setNewMenuItem({
      name: "",
      nameMarathi: "",
      price: "",
      description: "",
      descriptionMarathi: "",
      category: "",
      image: null,
    });
  };

  return (
    <div className="bg-orange-700 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Menu Item</h2>
      <div className="space-y-4">
        {/* English Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Item Name (English) *
          </label>
          <input
            type="text"
            value={newMenuItem.name}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, name: e.target.value })
            }
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter item name in English"
            required
          />
        </div>

        {/* Marathi Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Item Name (Marathi)
          </label>
          <input
            type="text"
            value={newMenuItem.nameMarathi}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, nameMarathi: e.target.value })
            }
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter item name in Marathi"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category *</label>
          <input
            type="text"
            value={newMenuItem.category}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, category: e.target.value })
            }
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter category (e.g., Starters, Main Course)"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Item Price *</label>
          <input
            type="text"
            value={newMenuItem.price}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, price: e.target.value })
            }
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter item price"
            required
          />
        </div>

        {/* English Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Description (English)
          </label>
          <textarea
            value={newMenuItem.description}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, description: e.target.value })
            }
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter description in English"
            rows="2"
          ></textarea>
        </div>

        {/* Marathi Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Description (Marathi)
          </label>
          <textarea
            value={newMenuItem.descriptionMarathi}
            onChange={(e) =>
              setNewMenuItem({
                ...newMenuItem,
                descriptionMarathi: e.target.value,
              })
            }
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter description in Marathi"
            rows="2"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Upload Image *
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {newMenuItem.image && (
          <div className="flex justify-center">
            <img
              src={URL.createObjectURL(newMenuItem.image)}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
        )}

        <button
          onClick={handleAddMenuItem}
          className="w-full bg-yellow-400 text-orange-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white cursor-pointer transition"
        >
          <FaPlus className="inline-block mr-2" /> Add Item
        </button>
      </div>
    </div>
  );
};

export default AddMenuItemForm;
