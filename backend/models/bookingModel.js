const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
