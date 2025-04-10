import React, { useState } from "react";

const EditStallDetailsModal = ({ stallDetails, onClose, onSave }) => {
  const [details, setDetails] = useState({
    ...stallDetails,
    highlights: stallDetails.highlights?.join(", ") || "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDetails = {
      ...details,
      highlights: details.highlights.split(",").map((item) => item.trim()),
    };
    onSave(formattedDetails);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-gray-800 text-white px-6 rounded-lg w-full max-w-md my-6 mx-2 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center w-screen mb-4 sticky top-0 bg-gray-800 pt-6 pb-4">
          <h2 className="text-xl font-bold text-yellow-400">
            Edit Stall Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                📍 Location (English):
              </label>
              <input
                type="text"
                name="location"
                value={details.location}
                onChange={handleChange}
                className="w-full p-2 text-sm rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                📍 Location (Marathi):
              </label>
              <input
                type="text"
                name="locationMarathi"
                value={details.locationMarathi || ""}
                onChange={handleChange}
                className="w-full p-2 text-sm rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                📞 Phone:
              </label>
              <input
                type="text"
                name="phone"
                value={details.phone}
                onChange={handleChange}
                className="w-full p-2 text-sm rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                🕒 Opening Hours:
              </label>
              <input
                type="text"
                name="openingHours"
                value={details.openingHours}
                onChange={handleChange}
                className="w-full p-2 text-sm rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              ℹ️ Description (English):
            </label>
            <textarea
              name="description"
              value={details.description}
              onChange={handleChange}
              rows="2"
              className="w-full p-2 text-sm rounded bg-gray-700 text-white border border-gray-600"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              ℹ️ Description (Marathi):
            </label>
            <textarea
              name="descriptionMarathi"
              value={details.descriptionMarathi || ""}
              onChange={handleChange}
              rows="2"
              className="w-full p-2 text-sm rounded bg-gray-700 text-white border border-gray-600"
            ></textarea>
          </div>

          {/* Highlights */}
          <div className="bg-gray-700 p-3 rounded-lg">
            <h3 className="text-md font-semibold text-yellow-400 mb-2">
              ✨ Highlights
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block mb-1 text-sm text-gray-300">
                  English (comma separated):
                </label>
                <input
                  type="text"
                  name="highlights"
                  value={details.highlights}
                  onChange={handleChange}
                  placeholder="Fresh ingredients, Quick service, Authentic taste"
                  className="w-full p-2 text-sm rounded bg-gray-600 text-white border border-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Preview Section */}
          {details.highlights && (
            <div className="bg-gray-700 p-2 rounded-lg">
              <h4 className="text-xs font-semibold text-gray-300 mb-1">
                Preview:
              </h4>
              <div className="flex flex-wrap gap-1">
                {details.highlights.split(",").map((item, index) => (
                  <span
                    key={index}
                    className="bg-yellow-500 text-gray-900 text-xs px-2 py-1 rounded-full"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 pt-3 sticky bottom-0 bg-gray-800 pb-6">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-sm bg-red-600 rounded-lg hover:bg-red-700 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1.5 text-sm bg-green-600 rounded-lg hover:bg-green-700 transition cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStallDetailsModal;
