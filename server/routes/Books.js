import express from 'express';
import { Books } from '../models/Books.js';
import { verifyAdmin } from './auth.js';

const router = express.Router();

router.post('/add', verifyAdmin, async (req, res) => {
    try {
        const { name, author, imageUrl } = req.body;
        const newBook = new Books({
            name,
            author,
            imageUrl
        });
        await newBook.save();
        return res.json({ added: true });
    } catch (err) {
        return res.json({ message: "Error in adding book", error: err.message });
    }
});

router.get('/books', async (req, res) => {
    try {
        const books = await Books.find();
        return res.json(books);
    } catch (err) {
        return res.json({ message: "Error fetching books", error: err.message });
    }
});

router.get('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Books.findById(id);
        if (!book) {
            return res.json({ message: "Book not found" });
        }
        return res.json(book);
    } catch (err) {
        return res.json({ message: "Error fetching book", error: err.message });
    }
});

router.put('/book/:id', verifyAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Books.findByIdAndUpdate(id, req.body, { new: true });
        if (!book) {
            return res.json({ message: "Book not found" });
        }
        return res.json({ updated: true, book });
    } catch (err) {
        return res.json({ message: "Error updating book", error: err.message });
    }
});

router.delete('/book/:id', verifyAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Books.findByIdAndDelete(id);
        if (!book) {
            return res.json({ message: "Book not found" });
        }
        return res.json({ deleted: true, book });
    } catch (err) {
        return res.json({ message: "Error deleting book", error: err.message });
    }
});

export { router as BooksRouter };
