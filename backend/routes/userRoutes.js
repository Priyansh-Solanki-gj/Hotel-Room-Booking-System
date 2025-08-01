const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const router = express.Router();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.userId = decoded.id;
        next();
    });
};

// Test route for API health check
router.get('/', (req, res) => {
    res.send('Users API is working!');
});

// Register User
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Get user profile (protected route)
router.get('/profile', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error });
    }
});

module.exports = router;

