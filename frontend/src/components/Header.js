import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="p-4 bg-blue-500 text-white">
            <nav className="flex justify-between">
                <h1 className="text-xl">Hotel Management System</h1>
                <div>
                    <Link className="mx-2" to="/">Rooms</Link>
                    <Link className="mx-2" to="/login">Login</Link>
                    <Link className="mx-2" to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
