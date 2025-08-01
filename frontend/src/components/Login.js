import { useState } from 'react';
import { api } from '../services/api';

function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/users/login', credentials)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                alert('Login successful!');
            })
            .catch((err) => alert('Login failed!'));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-2xl mb-4">Login</h2>
            <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 mb-2 w-full" />
            <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
        </form>
    );
}

export default Login;
