const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected successfully!');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    // Retry connection in 5 seconds if it fails
    setTimeout(connectDB, 5000);
  }
};

connectDB();

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'MERN Social API is running!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
