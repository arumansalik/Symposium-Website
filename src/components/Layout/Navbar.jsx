import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-purple-500">SANSCINCO 2025</Link>
                <div className="hidden md:flex space-x-6">
                    <Link to="/about" className="hover:text-purple-400 transition">About</Link>
                    <Link to="/events" className="hover:text-purple-400 transition">Events</Link>
                    <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
                </div>
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-gray-900 p-4 space-y-3"
                >
                    <Link to="/about" className="block hover:text-purple-400" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/events" className="block hover:text-purple-400" onClick={() => setIsOpen(false)}>Events</Link>
                    <Link to="/contact" className="block hover:text-purple-400" onClick={() => setIsOpen(false)}>Contact</Link>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;