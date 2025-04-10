const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  // English name
  name: { type: String, required: true },

  // Marathi name
  name_mr: { type: String, required: true },

  // English description
  description: { type: String },

  // Marathi description
  description_mr: { type: String },

  price: { type: Number, required: true },
  imageUrl: { type: String }, // optional

  category: {
    type: String,
    required: true,
  },

  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;

