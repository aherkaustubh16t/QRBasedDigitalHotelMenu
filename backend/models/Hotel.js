const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true }, // English name
  name_mr: { type: String, default: "सेट नाही" }, // Marathi name

  address: { type: String },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  qrLink: { type: String },

  // 📍 Location
  location_en: { type: String, default: "Not Set" },
  location_mr: { type: String, default: "सेट नाही" },

  // 📞 Phone
  phone: { type: String, default: "Not Set" },

  // 🕒 Opening Hours
  openingHours: { type: String, default: "Not Set" },

  // ℹ️ Description
  description_en: { type: String, default: "Not Set" },
  description_mr: { type: String, default: "सेट नाही" },

  // ✨ Highlights
  highlights_en: [{ type: String }], // e.g., ["Fresh ingredients", "Quick service"]

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
