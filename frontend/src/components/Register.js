import { useState } from 'react';
import { api } from '../services/api';

function Register() {
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/users/register', user)
            .then(() => {
                alert('Registration successful! You can now log in.');
            })
            .catch((err) => {
                alert('Registration failed!');
                console.error(err);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-2xl mb-4">Register</h2>
            <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <button type="submit" className="bg-green-500 text-white p-2">Register</button>
        </form>
    );
}

export default Register;



