import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-lg text-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Brand Name */}
                <Link to="/" className="text-2xl font-bold text-purple-400">
                    SANSCINCO 2025
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 text-lg">
                    <Link to="/about" className="hover:text-purple-400 transition">About</Link>
                    <Link to="/events" className="hover:text-purple-400 transition">Events</Link>
                    <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden focus:outline-none text-xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden absolute top-full left-0 w-full bg-black/60 backdrop-blur-lg text-center py-4 space-y-3 transform ${isOpen ? "block" : "hidden"}`}
            >
                <Link to="/about" className="block hover:text-purple-400 text-lg" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/events" className="block hover:text-purple-400 text-lg" onClick={() => setIsOpen(false)}>Events</Link>
                <Link to="/contact" className="block hover:text-purple-400 text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
            </motion.div>
        </nav>
    );
};

export default Navbar;
