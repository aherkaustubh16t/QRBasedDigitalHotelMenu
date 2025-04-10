import React, { useState } from "react";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

const EditStallModal = ({
  editingStall,
  closeEditStallModal,
  handleEditInputChange,
  handleUpdateStall,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!editingStall) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-start overflow-y-auto">
      <div className="mt-10 bg-gradient-to-br from-orange-700 to-orange-800 rounded-lg shadow-lg w-full max-w-2xl p-6 space-y-4 mx-4 mb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Edit Hotel</h2>
          <button
            onClick={closeEditStallModal}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Hotel Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Hotel Name (English)"
            name="name"
            value={editingStall.name}
            onChange={handleEditInputChange}
          />
          <Input
            label="Hotel Name (Marathi)"
            name="name_mr"
            value={editingStall.name_mr}
            onChange={handleEditInputChange}
          />
          <Input
            label="Address"
            name="address"
            value={editingStall.address}
            onChange={handleEditInputChange}
          />
          <Input
            label="QR Link"
            name="qrLink"
            value={editingStall.qrLink}
            onChange={handleEditInputChange}
          />
          <Input
            label="Location (English)"
            name="location_en"
            value={editingStall.location_en}
            onChange={handleEditInputChange}
          />
          <Input
            label="Location (Marathi)"
            name="location_mr"
            value={editingStall.location_mr}
            onChange={handleEditInputChange}
          />
          <Input
            label="Phone"
            name="phone"
            value={editingStall.phone}
            onChange={handleEditInputChange}
          />
          <Input
            label="Opening Hours"
            name="openingHours"
            value={editingStall.openingHours}
            onChange={handleEditInputChange}
          />
          <Input
            label="Description (English)"
            name="description_en"
            value={editingStall.description_en}
            onChange={handleEditInputChange}
          />
          <Input
            label="Description (Marathi)"
            name="description_mr"
            value={editingStall.description_mr}
            onChange={handleEditInputChange}
          />
          <Input
            label="Highlights (comma-separated)"
            name="highlights_en"
            value={editingStall.highlights_en}
            onChange={handleEditInputChange}
          />
        </div>

        {/* Admin Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Input
            label="Admin Name"
            name="admin"
            value={editingStall.admin}
            onChange={handleEditInputChange}
          />
          <Input
            label="Admin Email"
            name="email"
            value={editingStall.email}
            onChange={handleEditInputChange}
          />
        </div>

        {/* Password with toggle */}
        <div className="mt-2">
          <label className="block text-sm font-medium text-white mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={editingStall.password}
              onChange={handleEditInputChange}
              className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-10"
              placeholder="Update password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleUpdateStall}
          className="w-full bg-yellow-400 text-orange-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition mt-4 cursor-pointer"
        >
          Update Hotel
        </button>
      </div>
    </div>
  );
};

// Reusable Input
const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-white mb-1">{label}</label>
    <input
      required
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>
);

export default EditStallModal;
