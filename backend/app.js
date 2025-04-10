const express = require('express');
const DBConnect = require('./config/db')
const menuRoutes = require('./routes/Menu.route');
const UserRoutes = require('./routes/User.route');
const HotelRouter = require('./routes/Hotel.route')
const app = express();
DBConnect();

app.use(express.json());

// Add menu item routes
app.use("/api/menu", menuRoutes);

// Add new User routes
app.use("/api/user", UserRoutes);

// Add Hotel routes
app.use("/api/hotel", HotelRouter);

module.exports = app;