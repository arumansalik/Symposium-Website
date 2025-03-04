import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const CollegeCard = ({ title, description, icon }) => (
    <div className="bg-white shadow-lg rounded-xl p-6 transform transition hover:scale-105 hover:shadow-xl">
        <div className="flex items-center mb-4">
            <div className="mr-4 text-3xl text-symposium-primary">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
    </div>
);

const AboutUs = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        // GSAP Animations for sections
        sectionRefs.current.forEach((section, index) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: index * 0.3,
                    ease: "power3.out"
                }
            );
        });
    }, []);

    const collegeDetails = [
        {
            title: 'Our Institution',
            description: 'A premier technical institution dedicated to fostering innovation and technological excellence.',
            icon: '🏫'
        },
        {
            title: 'Vision & Mission',
            description: 'Empowering students to become global leaders in technology and innovation through comprehensive education.',
            icon: '🚀'
        },
        {
            title: 'Symposium Goals',
            description: 'Creating a platform for students to showcase their technical skills, network, and explore cutting-edge technologies.',
            icon: '💡'
        }
    ];

    return (
        <div className="bg-symposium-background min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-symposium-primary to-symposium-secondary text-white py-20 text-center">
                <h1 className="text-5xl font-bold mb-4">About Our Tech Symposium</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Bridging Innovation, Inspiring Tomorrow's Technologists
                </p>
            </div>

            {/* College Details Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {collegeDetails.map((detail, index) => (
                        <div
                            key={detail.title}
                            ref={el => sectionRefs.current[index] = el}
                        >
                            <CollegeCard
                                title={detail.title}
                                description={detail.description}
                                icon={detail.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div
                ref={el => sectionRefs.current[3] = el}
                className="bg-white py-16"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Get In Touch
                    </h2>
                    <div className="max-w-2xl mx-auto bg-gray-100 rounded-xl p-8 shadow-lg">
                        <form className="space-y-6">
                            <div>
                                <label className="block mb-2 text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-symposium-primary"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-symposium-primary"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-symposium-primary"
                                    rows="4"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-symposium-secondary text-white py-3 rounded-lg hover:bg-green-600 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Location Section */}
            <div
                ref={el => sectionRefs.current[4] = el}
                className="py-16 bg-gray-50"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Location
                    </h2>
                    <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4328685233!2d80.13647437480715!3d13.067386987260309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3dd1%3A0x6d5987aef251fb23!2sAnna%20University!5e0!3m2!1sen!2sin!4v1693378213633!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;