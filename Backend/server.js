// backend/server.js
require('dotenv').config(); // Loads environment variables from .env file
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

const app = express();
const PORT = 5000;
app.use(cors({ origin: 'http://localhost:5173' }));

const bookRoutes = require('./routes/books'); // Import the book routes

// Middleware to parse JSON
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    // You can start your server here if needed
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Use the book routes
app.use('/api/books', bookRoutes);

// Sample route
app.get('/', (req, res) => {
    res.send('Backend server is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});