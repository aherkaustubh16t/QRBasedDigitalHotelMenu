const express = require('express');
const User = require('../models/User')
const router = express.Router();


// Add new User routes
router.post('/add', async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user.username);
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
})


// Get All Users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// Update the user
router.put('/update/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// Delete the user
router.delete('/delete/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;