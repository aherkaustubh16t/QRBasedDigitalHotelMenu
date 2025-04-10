import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import MenuItemCard from "./MenuItemCard";

const MenuSection = ({ menuData }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // Filter menu items based on the search term
  const filteredMenu = menuData.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const hasResults = filteredMenu.some((section) => section.items.length > 0);

  // Automatically open categories when searching and close all when search is empty
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const firstMatchingCategory = filteredMenu.find(
        (section) => section.items.length > 0
      );
      if (firstMatchingCategory) {
        setOpenCategory(firstMatchingCategory.category);
      }
    } else {
      setOpenCategory(null); // Close all categories when search is cleared
    }
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Our <span className="text-orange-700">Menu | मेनू</span>
      </h2>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-lg shadow-lg p-3 mb-6">
        <FaSearch className="text-gray-400 ml-2" />
        <input
          type="text"
          placeholder="Search food items..."
          className="bg-transparent text-white w-full px-3 py-2 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display Filtered Menu */}
      {hasResults ? (
        filteredMenu.map((section, index) =>
          section.items.length > 0 ? (
            <div
              key={index}
              className="mb-6 pb-4 bg-gray-800 rounded-lg shadow-lg"
            >
              <button
                onClick={() => toggleCategory(section.category)}
                className="w-full flex justify-between items-center bg-orange-600 p-4 text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300 cursor-pointer"
              >
                <span className="text-white">{section.category}</span>
                {openCategory === section.category ? (
                  <FaChevronUp className="text-white transition-transform transform rotate-180" />
                ) : (
                  <FaChevronDown className="text-white transition-transform" />
                )}
              </button>

              {/* Show items only if the category is expanded */}
              {openCategory === section.category && (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 px-4">
                  {section.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          ) : null
        )
      ) : (
        <p className="text-center text-gray-400 text-lg mt-6">
          ❌ No items found. Try searching for something else.
        </p>
      )}
    </div>
  );
};

export default MenuSection;
