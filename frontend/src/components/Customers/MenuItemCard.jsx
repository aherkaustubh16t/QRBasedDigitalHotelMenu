import React from "react";

const MenuItemCard = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Enhanced Shadow Effect */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-lg font-semibold text-white drop-shadow-lg">
            {item.name}
          </h3>
        </div>
      </div>

      {/* Description & Price */}
      <div className="p-5 text-center">
        <p className="text-gray-300 text-sm">{item.description}</p>
        <div className="mt-4">
          <span className="text-lg font-bold text-orange-400 bg-gray-700 px-4 py-2 rounded-full shadow-md">
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
