import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Layout/Navbar.jsx";
import Footer from "../components/Layout/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const eventDate = new Date("2025-03-27T00:00:00").getTime();

        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const difference = eventDate - now;

            if (difference <= 0) {
                clearInterval(countdown);
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);



    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col items-center text-center p-6 overflow-hidden font-sans">
            <Navbar />

            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,#3a0ca3,#000000)] opacity-75"></div>

            {/* Hero Section */}
            <div className="z-10 mt-24">
                <h1 className="hero-text text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text">
                    SANSCINCO 2025
                </h1>
                <p className="hero-text text-lg md:text-xl mb-6 max-w-3xl mx-auto opacity-80 text-gray-300">
                    Experience the fusion of technology, innovation, and creativity at our annual college symposium. Participate and win exciting rewards!
                </p>
                <button className="register-btn px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg font-bold rounded-full shadow-lg hover:scale-110 transition-transform">
                    Register Now →
                </button>
            </div>

            {/* Countdown Timer */}
            <div className="mt-16 z-10">
                <h2 className="text-3xl font-semibold text-gray-200">COUNTDOWN TO THE EVENT</h2>
                <div className="flex justify-center mt-6 space-x-4 text-4xl font-bold">
                    {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((label, index) => (
                        <div key={index} className="countdown-card bg-gradient-to-r from-indigo-500 to-purple-700 px-6 py-4 rounded-xl shadow-md text-center">
                            <span>{Object.values(timeLeft)[index]}</span>
                            <span className="text-sm block text-gray-300">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Event Highlights */}
            <div className="scroll-section mt-24 z-10 max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-100">Why Attend?</h2>
                <p className="text-gray-300 mt-2 max-w-xl mx-auto">
                    Explore cutting-edge technology, compete in exciting challenges, and network with industry leaders.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {[
                        { title: "Tech Talks", desc: "Engaging sessions from industry experts." },
                        { title: "Competitions", desc: "Showcase your skills and win prizes." },
                        { title: "Workshops", desc: "Hands-on experience with real-world applications." }
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:scale-105 transition">
                            <h3 className="text-xl font-semibold text-purple-400">{item.title}</h3>
                            <p className="text-gray-300 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
