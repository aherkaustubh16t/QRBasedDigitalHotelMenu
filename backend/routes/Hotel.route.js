const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// Add Hotel
router.post("/add", async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).json({ success: true, data: hotel });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  }
})

// Get All Hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
})

// Get Single Hotel
router.get('/:id', getHotel, (req, res) => {
  res.json(res.hotel);
});
async function getHotel(req, res, next) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ success: false, message: 'Hotel not found' });
    res.hotel = hotel;
    next();
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

// Update Hotel
router.put('/:id', getHotel, async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedHotel);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
})

// Delete Hotel
router.delete('/:id', getHotel, async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Hotel deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
})


module.exports = router;