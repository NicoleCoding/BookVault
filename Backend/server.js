// backend/server.js
require('dotenv').config(); // Loads environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

const bookRoutes = require('./routes/books'); // Import the book routes

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

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