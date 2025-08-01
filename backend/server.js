require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(express.json());

connectDB();

// Add a root route
app.get('/', (req, res) => {
    res.send('Welcome to the Hotel Management System Backend!');
});

app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

