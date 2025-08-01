const express = require('express');
const Room = require('../models/roomModel');
const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
    const rooms = await Room.find();
    res.json(rooms);
});

// Add room
router.post('/add', async (req, res) => {
    try {
        const room = new Room(req.body);
        await room.save();
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ message: 'Error adding room', error });
    }
});

module.exports = router;
