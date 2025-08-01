import { useState } from 'react';
import { api } from '../services/api';

function BookingForm() {
    const [formData, setFormData] = useState({
        user: '',
        room: '',
        checkIn: '',
        checkOut: '',
        totalAmount: 0,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/bookings/book', formData)
            .then((res) => alert('Booking successful!'))
            .catch((err) => alert('Booking failed!'));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-2xl mb-4">Book a Room</h2>
            <input name="user" placeholder="User ID" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <input name="room" placeholder="Room ID" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <input type="date" name="checkIn" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <input type="date" name="checkOut" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <input name="totalAmount" placeholder="Total Amount" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <button type="submit" className="bg-blue-500 text-white p-2">Book Room</button>
        </form>
    );
}

export default BookingForm;
