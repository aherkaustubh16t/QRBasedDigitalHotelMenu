import React from "react";

const HotelDetails = () => {
  const data = {
    hotel: {
      name: "Biryani House",
      name_mr: "बिर्याणी हाऊस",
      address: "MG Road, Pune",
      phone: "+91 9876543210",
      openingHours: "10:00 AM - 11:00 PM",
      location_en: "City Center",
      location_mr: "शहर केंद्र",
      createdAt: "2025-04-07T10:30:00.000Z",
      isActive: true,
      qrLink: "https://example.com/qr/biryani-house.png",
    },
    admin: {
      name: "Ravi Shinde",
      email: "ravi@biryanihouse.com",
      role: "admin",
    },
    categoryCount: 3,
    menuItemCount: 6,
    menu: [
      {
        categoryName: "Starters",
        items: [
          {
            name: "Paneer Tikka",
            price: "₹180",
            description: "Grilled paneer cubes marinated in spices",
          },
          {
            name: "Chicken Pakoda",
            price: "₹200",
            description: "Crispy fried chicken fritters",
          },
        ],
      },
      {
        categoryName: "Main Course",
        items: [
          {
            name: "Veg Biryani",
            price: "₹220",
            description: "Fragrant rice cooked with vegetables",
          },
          {
            name: "Chicken Biryani",
            price: "₹260",
            description: "Spicy and aromatic rice with chicken",
          },
        ],
      },
      {
        categoryName: "Beverages",
        items: [
          {
            name: "Masala Chai",
            price: "₹30",
            description: "Indian spiced tea",
          },
          {
            name: "Cold Coffee",
            price: "₹60",
            description: "Chilled creamy coffee with ice",
          },
        ],
      },
    ],
  };

  const { hotel, admin, categoryCount, menuItemCount, menu } = data;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-orange-700 shadow-xl rounded-2xl text-orange-100">
      {/* Header */}
      <div className="mb-6 border-b border-orange-300 pb-4">
        <h1 className="text-2xl font-bold">{hotel.name}</h1>
        <h2 className="text-lg text-orange-300">{hotel.name_mr}</h2>
      </div>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p>
            <span className="font-semibold">Address:</span> {hotel.address}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {hotel.phone}
          </p>
          <p>
            <span className="font-semibold">Opening Hours:</span>{" "}
            {hotel.openingHours}
          </p>
          <p>
            <span className="font-semibold">Created At:</span>{" "}
            {new Date(hotel.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Location (EN):</span>{" "}
            {hotel.location_en}
          </p>
          <p>
            <span className="font-semibold">Location (MR):</span>{" "}
            {hotel.location_mr}
          </p>
          <p>
            <span className="font-semibold">Menu Status:</span>{" "}
            <span
              className={hotel.isActive ? "text-green-300" : "text-red-300"}
            >
              {hotel.isActive ? "Active" : "Blocked"}
            </span>
          </p>
        </div>
      </div>

      {/* Admin Info */}
      <div className="mt-8 border-t border-orange-300 pt-4">
        <h3 className="text-xl font-semibold mb-2">Admin Information</h3>
        <p>
          <span className="font-semibold">Name:</span> {admin.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {admin.email}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {admin.role}
        </p>
      </div>

      {/* QR Code */}
      <div className="mt-8 border-t border-orange-300 pt-4 flex items-center gap-4 flex-wrap">
        <div>
          <h3 className="text-xl font-semibold mb-2">QR Code</h3>
          <img
            src={hotel.qrLink}
            alt="QR Code"
            className="w-40 h-40 border border-orange-200 rounded-lg bg-white"
          />
        </div>
        <div className="text-sm break-words">
          <p className="font-semibold mb-1">QR Link:</p>
          <a
            href={hotel.qrLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline break-all"
          >
            {hotel.qrLink}
          </a>
        </div>
      </div>

      {/* Menu Summary */}
      <div className="mt-8 border-t border-orange-300 pt-4">
        <h3 className="text-xl font-semibold mb-2">Menu Overview</h3>
        <p>
          Total Categories: <span className="font-bold">{categoryCount}</span>
        </p>
        <p>
          Total Menu Items: <span className="font-bold">{menuItemCount}</span>
        </p>
      </div>

      {/* Full Menu */}
      <div className="mt-8 border-t border-orange-300 pt-4">
        <h3 className="text-2xl font-bold mb-4">Menu</h3>
        {menu.map((cat, i) => (
          <div key={i} className="mb-6">
            <h4 className="text-xl font-semibold border-b border-orange-300 pb-1">
              {cat.categoryName}
            </h4>
            <ul className="mt-3 space-y-2">
              {cat.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-start border border-orange-300 rounded-md p-3 bg-orange-100 text-orange-900"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-orange-700">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-green-700 font-semibold">{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelDetails;
