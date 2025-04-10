const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

// 📌 Add a new menu item
router.post("/add", async (req, res) => {
  try {
    const menuItem = new Menu(req.body);
    await menuItem.save();
    res.status(201).json({ success: true, data: menuItem });
  } catch (err) {
    console.log(err)
    res.status(400).json({ success: false, message: err.message });
  }
});

// 📌 Get all menu items for a specific hotel
router.get("/:hotelId", async (req, res) => {
  try {
    const menu = await Menu.find({ hotel: req.params.hotelId });
    res.status(200).json({ success: true, data: menu });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 📌 Delete a menu item
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Menu.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Menu item not found" });
    }
    res.status(200).json({ success: true, message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 📌 Optional: Update a menu item
router.put("/:id", async (req, res) => {
  try {
    const updated = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Menu item not found" });
    }
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
