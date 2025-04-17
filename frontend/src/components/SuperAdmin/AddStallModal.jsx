import React, { useState } from "react";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

const AddStallModal = ({
  isAddStallModalOpen,
  closeAddStallModal,
  newStall,
  handleInputChange,
  handleAddStall,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isAddStallModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-start overflow-y-auto">
      <div className="mt-10 bg-gradient-to-br from-orange-700 to-orange-800 rounded-lg shadow-lg w-full max-w-2xl p-6 space-y-4 mx-4 mb-20 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Add New Hotel</h2>
          <button
            onClick={closeAddStallModal}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Hotel Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Hotel Name (English)"
            name="name"
            value={newStall.name}
            onChange={handleInputChange}
            placeholder="Enter hotel name"
          />
          <Input
            label="Hotel Name (Marathi)"
            name="name_mr"
            value={newStall.name_mr}
            onChange={handleInputChange}
            placeholder="हॉटेलचे मराठी नाव"
          />
          <Input
            label="Address"
            name="address"
            value={newStall.address}
            onChange={handleInputChange}
            placeholder="Enter address"
          />
          <Input
            label="QR Link"
            name="qrLink"
            value={newStall.qrLink}
            onChange={handleInputChange}
            placeholder="Paste QR code link"
          />
          <Input
            label="Location (English)"
            name="location_en"
            value={newStall.location_en}
            onChange={handleInputChange}
            placeholder="Enter location"
          />
          <Input
            label="Location (Marathi)"
            name="location_mr"
            value={newStall.location_mr}
            onChange={handleInputChange}
            placeholder="ठिकाण"
          />
          <Input
            label="Phone"
            name="phone"
            value={newStall.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
          />
          <Input
            label="Opening Hours"
            name="openingHours"
            value={newStall.openingHours}
            onChange={handleInputChange}
            placeholder="e.g. 9 AM - 11 PM"
          />
          <Input
            label="Description (English)"
            name="description_en"
            value={newStall.description_en}
            onChange={handleInputChange}
            placeholder="Short description"
          />
          <Input
            label="Description (Marathi)"
            name="description_mr"
            value={newStall.description_mr}
            onChange={handleInputChange}
            placeholder="वर्णन"
          />
          <Input
            label="Highlights (comma-separated)"
            name="highlights_en"
            value={newStall.highlights_en}
            onChange={handleInputChange}
            placeholder="e.g. Fresh food, Fast service"
          />
        </div>

        {/* Admin Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Input
            label="Admin Name"
            name="admin"
            value={newStall.admin}
            onChange={handleInputChange}
            placeholder="Enter admin name or ID"
          />
          <Input
            label="Admin Email"
            name="adminEmail"
            type="email"
            value={newStall.adminEmail}
            onChange={handleInputChange}
            placeholder="admin@example.com"
          />

          {/* Password with toggle visibility */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={newStall.password}
                onChange={handleInputChange}
                placeholder="Set a secure password"
                className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-4 mt-6">
          <button
            onClick={handleAddStall}
            className="w-full bg-yellow-400 text-orange-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition cursor-pointer"
          >
            Add Hotel
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Component
const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) => (
  <div>
    <label className="block text-sm font-medium text-white mb-1">{label}</label>
    <input
      required
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>
);

export default AddStallModal;
