import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { useEventContext } from '../context/EventContext';

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-xl p-8 max-w-md w-full relative"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
                >
                    ✕
                </motion.button>
                <h2 className="text-2xl font-bold mb-4 text-symposium-primary">
                    {event.name}
                </h2>
                <div className="space-y-4 mb-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-700"
                    >
                        {event.description}
                    </motion.p>
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <strong>Date:</strong> {event.date}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <strong>Time:</strong> {event.time}
                        </motion.div>
                    </div>
                </div>
                <Link
                    to={`/events/${event.id}`}
                    className="w-full block text-center bg-symposium-secondary text-white py-3 rounded-lg hover:bg-green-600 transition"
                >
                    View Full Details
                </Link>
            </motion.div>
        </motion.div>
    );
};

const Events = () => {
    const { events = [], selectedEvent, setSelectedEvent } = useEventContext();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    // Defensive check for events
    const filteredEvents = events.filter(event =>
        event &&
        typeof event === 'object' &&
        event.id &&
        event.name &&
        event.description
    );

    // Fallback UI if no events
    if (filteredEvents.length === 0) {
        return (
            <div className="bg-symposium-background min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-symposium-primary mb-4">
                        No Events Available
                    </h2>
                    <p className="text-gray-600">
                        Check back later for upcoming events.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-symposium-background min-h-screen">
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 py-16"
            >
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-4xl font-bold text-center mb-12 text-symposium-primary"
                >
                    Symposium Events
                </motion.h1>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-3 gap-8"
                >
                    {filteredEvents.map((event) => (
                        <motion.div
                            key={event.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-4 text-symposium-primary">
                                    {event.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {(event.description || '').substring(0, 100)}...
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">
                                        {event.date || 'Date TBA'}
                                    </span>
                                    <div className="flex space-x-2">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setSelectedEvent(event)}
                                            className="px-4 py-2 bg-symposium-secondary text-white rounded-lg hover:bg-green-600 transition"
                                        >
                                            Quick View
                                        </motion.button>
                                        <Link
                                            to={`/events/${event.id}`}
                                            className="px-4 py-2 bg-symposium-primary text-white rounded-lg hover:bg-blue-700 transition"
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedEvent && (
                        <EventModal
                            event={selectedEvent}
                            onClose={() => setSelectedEvent(null)}
                        />
                    )}
                </AnimatePresence>
            </motion.div>

            <Footer />
        </div>
    );
};

export default Events;