const express = require('express');
const Booking = require('../models/bookingModel');
const Room = require('../models/roomModel');
const router = express.Router();

// Create booking
router.post('/book', async (req, res) => {
    try {
        const { user, room, checkIn, checkOut, totalAmount } = req.body;

        const booking = new Booking({ user, room, checkIn, checkOut, totalAmount });
        await booking.save();

        // Update room status
        await Room.findByIdAndUpdate(room, { status: 'booked' });

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
});

// Get all bookings
router.get('/', async (req, res) => {
    const bookings = await Booking.find().populate('user').populate('room');
    res.json(bookings);
});

module.exports = router;
