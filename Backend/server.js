// backend/server.js
require('dotenv').config(); // Loads environment variables from .env file
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const bookRoutes = require('./routes/books'); // Import the book routes
app.use('/api/books', bookRoutes); // Use the book routes

// Sample route
app.get('/', (req, res) => {
    res.send('Backend server is working!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if DB connection fails
  });