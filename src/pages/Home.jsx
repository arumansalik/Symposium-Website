import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CountdownTimer from '../components/Home/CountdownTimer';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const Home = () => {
    const heroRef = useRef(null);
    const eventsSectionRef = useRef(null);

    useEffect(() => {
        // Check if refs are current
        if (heroRef.current && heroRef.current.children) {
            const heroElements = heroRef.current.children;
            gsap.fromTo(
                heroElements,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out"
                }
            );
        }

        // Scroll Trigger Animations
        if (eventsSectionRef.current) {
            gsap.fromTo(
                eventsSectionRef.current,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: eventsSectionRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, []);

    return (
        <div className="bg-symposium-background min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div ref={heroRef} className="relative h-[90vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-6xl font-bold text-symposium-primary mb-4">
                    Tech Symposium 2024
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                    Innovate, Inspire, Transform
                </p>

                {/* Countdown Timer */}
                <CountdownTimer
                    eventDate={new Date('2025-03-27')}
                    className="mb-8"
                />

                <button className="px-8 py-3 bg-symposium-secondary text-white rounded-full hover:bg-green-600 transition">
                    Register Now
                </button>
            </div>

            {/* Featured Events Section */}
            <div
                ref={eventsSectionRef}
                className="container mx-auto px-4 py-16"
            >
                <h2 className="text-4xl font-bold text-center mb-12">
                    Featured Events
                </h2>
                {/* Add event cards or highlights */}
            </div>

            <Footer />
        </div>
    );
};

export default Home;