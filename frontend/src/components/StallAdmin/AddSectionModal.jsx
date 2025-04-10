import React, { useState } from "react";

const AddSectionModal = ({ onClose, onSave }) => {
  const [sectionName, setSectionName] = useState("");
  const [sectionNameMarathi, setSectionNameMarathi] = useState("");

  const handleSave = () => {
    if (!sectionName.trim() || !sectionNameMarathi.trim()) {
      alert("Please enter section names in both English and Marathi.");
      return;
    }

    onSave(sectionName, sectionNameMarathi);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold text-yellow-400 mb-4">
          Add Section | विभाग जोडा
        </h2>

        {/* Section Name in English */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300">
            Section Name (English)
          </label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            placeholder="Enter section name (e.g., Snacks)"
          />
        </div>

        {/* Section Name in Marathi */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300">
            विभागाचे नाव (मराठी)
          </label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={sectionNameMarathi}
            onChange={(e) => setSectionNameMarathi(e.target.value)}
            placeholder="विभागाचे नाव प्रविष्ट करा (उदा. नाश्ता)"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
          >
            Save Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSectionModal;
