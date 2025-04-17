import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaStar,
  FaFire,
  FaTimes,
} from "react-icons/fa";
import { GiHotSpices } from "react-icons/gi";

const sectionImages = {
  "Starters | स्टार्टर":
    "https://images.unsplash.com/photo-1559847844-5315695dadae",
  "Main Course | मुख्य जेवण":
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  "Indian Breads | भारतीय भाकरी":
    "https://images.unsplash.com/photo-1631515242808-497c3fbd3972",
  "Desserts | डेझर्ट":
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  "Beverages | शीतपेय":
    "https://images.unsplash.com/photo-1551024506-0bccd828d307",
  "Breakfast | नाश्ता":
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
};

const MenuSection = ({ menuData }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [reviews, setReviews] = useState({});
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    const savedReviews = localStorage.getItem("foodReviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const filteredMenu = menuData.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const hasResults = filteredMenu.some((section) => section.items.length > 0);

  const openReviewModal = (item) => {
    setCurrentItem(item);
    setShowReviewModal(true);
    setNewRating(0);
  };

  const closeReviewModal = () => {
    setShowReviewModal(false);
    setNewRating(0);
  };

  const handleRatingChange = (rating) => {
    setNewRating(rating);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    if (!currentItem) return;

    const updatedReviews = {
      ...reviews,
      [currentItem.id]: [
        ...(reviews[currentItem.id] || []),
        { rating: newRating, date: new Date().toISOString() },
      ],
    };

    setReviews(updatedReviews);
    localStorage.setItem("foodReviews", JSON.stringify(updatedReviews));
    alert("Thanks for submiting the Review");
    closeReviewModal();
  };

  const getAverageRating = (itemId) => {
    if (!reviews[itemId] || reviews[itemId].length === 0) return 0;
    const sum = reviews[itemId].reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews[itemId].length).toFixed(1);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
        Our <span className="text-orange-700">Menu | मेनू</span>
      </h2>

      <div className="flex items-center bg-gray-800 rounded-full shadow-xl p-2 mb-8 max-w-2xl mx-auto">
        <FaSearch className="text-gray-400 ml-3 mr-2" />
        <input
          type="text"
          placeholder="Search the dishes here"
          className="bg-transparent text-white w-full px-3 py-2 outline-none placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {hasResults ? (
        <div className="space-y-8">
          {filteredMenu.map((section, index) =>
            section.items.length > 0 ? (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
              >
                <div
                  className="relative group cursor-pointer"
                  onClick={() => toggleCategory(section.category)}
                >
                  <img
                    src={sectionImages[section.category]}
                    alt={section.category}
                    className="w-full h-40 object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-1">
                        {section.category.split("|")[0].trim()}
                      </h3>
                      <p className="text-orange-300 text-sm">
                        {section.category.split("|")[1].trim()}
                      </p>
                    </div>
                    <button className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl flex items-center justify-center">
                      {openCategory === section.category ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown className="animate-pulse" />
                      )}
                    </button>
                  </div>
                </div>

                {openCategory === section.category && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-transform duration-300 hover:scale-[1.02]"
                      >
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-3 right-3 flex space-x-2">
                            {!item.veg && (
                              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                                <FaFire className="mr-1" /> Non-Veg
                              </span>
                            )}
                            {item.spicyLevel > 2 && (
                              <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                                <GiHotSpices className="mr-1" /> Spicy
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-white">
                              {item.name.split("|")[0].trim()}
                            </h3>
                            <span className="text-orange-400 font-bold">
                              ₹{item.price}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">
                            {item.description.split("|")[0].trim()}
                          </p>

                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center text-yellow-400 text-sm">
                              <FaStar className="mr-1" />
                              {getAverageRating(item.id) || "No ratings"}
                              <span className="text-gray-500 text-xs ml-2">
                                ({reviews[item.id]?.length || 0} ratings)
                              </span>
                            </div>
                            <button
                              onClick={() => openReviewModal(item)}
                              className="text-xs bg-orange-600 hover:bg-orange-700 text-white px-2 py-1 rounded"
                            >
                              Rate Dish
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : null
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-5xl mb-4">🍽️</div>
          <h3 className="text-gray-300 text-xl font-medium mb-2">
            No items found
          </h3>
          <p className="text-gray-500">Try searching for different keywords</p>
        </div>
      )}

      {/* Rating Modal */}
      {showReviewModal && currentItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  Rate {currentItem.name.split("|")[0].trim()}
                </h3>
                <button
                  onClick={closeReviewModal}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleRatingSubmit}>
                <div className="mb-6 text-center">
                  <label className="block text-gray-300 mb-4">
                    Select your rating
                  </label>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`cursor-pointer text-3xl ${
                          newRating >= star
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                        onClick={() => handleRatingChange(star)}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={newRating === 0}
                  className={`w-full py-2 px-4 rounded ${
                    newRating === 0
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-orange-600 hover:bg-orange-700"
                  } text-white`}
                >
                  Submit Rating
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuSection;
