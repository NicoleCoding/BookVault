const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();  // Ensure the Book model is correctly connected to the database
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);  // Log error to the backend
        res.status(500).json({ message: error.message });  // Send error message back to the client
    }
});

// Update a book by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a book by ID
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;