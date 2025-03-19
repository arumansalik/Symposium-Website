import { useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar.jsx";
import Footer from "../components/Layout/Footer.jsx";
import { motion } from "framer-motion";

// Countdown Timer Logic
const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-10T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {};
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }
    return timeLeft;
};

const Home = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Navbar />

            {/* Hero Section with Video Background */}
            <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">

                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/videos/bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>

                {/* Hero Content */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-wide">
                        🚀 Welcome to <span className="text-purple-400">Our College Symposium!</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Join us for an incredible journey of knowledge, innovation, and fun! Participate in exciting events and win amazing prizes.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="relative px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg font-bold rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                        <a href="/events">Explore Events</a>
                    </motion.button>
                </motion.div>
            </section>

            {/* Countdown Timer */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-5xl font-bold text-green-500 mb-6">⏳ Countdown to the Event</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    The symposium is just around the corner! Get ready to participate in exciting events.
                </p>
                <div className="flex justify-center gap-4 text-4xl font-extrabold text-white">
                    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">{timeLeft.days}d</div>
                    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">{timeLeft.hours}h</div>
                    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">{timeLeft.minutes}m</div>
                    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">{timeLeft.seconds}s</div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
