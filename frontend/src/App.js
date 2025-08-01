import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RoomList from './components/RoomList';
import BookingForm from './components/BookingForm';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
    const [selectedRoom, setSelectedRoom] = useState(null);

    return (
        <Router>
            <Header />
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<RoomList setSelectedRoom={setSelectedRoom} />} />
                    <Route path="/book" element={<BookingForm selectedRoom={selectedRoom} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;



