// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');

// POST route for contact form submission
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });

    try {
        await newContact.save();
        res.status(201).json({ message: 'Contact message saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact message.', error });
    }
});

module.exports = router;
