const mongoose = require('mongoose');

require('dotenv').config();

const DBConnect = async () => {
  try {

    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB at ${connect.connection.host}`);
  } catch (e) {
    console.error('Error connecting to MongoDB:', e.message);
    process.exit(1);
  }
};

module.exports = DBConnect;