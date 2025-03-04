import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-symposium-primary">
                    Tech Symposium
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-800 hover:text-symposium-primary">Home</Link>
                    <Link to="/about" className="text-gray-800 hover:text-symposium-primary">About</Link>
                    <Link to="/events" className="text-gray-800 hover:text-symposium-primary">Events</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;