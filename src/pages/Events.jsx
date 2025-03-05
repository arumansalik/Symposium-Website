import { useState } from "react";
import Navbar from "../components/Layout/Navbar.jsx";
import Footer from "../components/Layout/Footer.jsx";
import { motion, AnimatePresence } from "framer-motion";

const technicalEvents = [
    {
        id: 1,
        title: "Tech Quiz",
        description: "Challenge yourself with mind-blowing tech questions.",
        date: "April 12, 2025",
        rules: [
            "Each team can have a maximum of 2 members.",
            "No internet or external help allowed.",
            "Decisions of the judges are final."
        ],
        formLink: "https://forms.gle/sampleTech1"
    },
    {
        id: 2,
        title: "Paper Presentation",
        description: "Showcase your research and innovative ideas.",
        date: "April 13, 2025",
        rules: [
            "Each team can have a maximum of 2 members.",
            "Time limit: 10 minutes presentation + 5 minutes Q&A.",
            "Only original content is allowed."
        ],
        formLink: "https://forms.gle/sampleTech2"
    },
    {
        id: 3,
        title: "Paper Presentation",
        description: "Showcase your research and innovative ideas.",
        date: "April 13, 2025",
        rules: [
            "Each team can have a maximum of 2 members.",
            "Time limit: 10 minutes presentation + 5 minutes Q&A.",
            "Only original content is allowed."
        ],
        formLink: "https://forms.gle/sampleTech2"
    }
];

const nonTechnicalEvents = [
    {
        id: 4,
        title: "Treasure Hunt",
        description: "Solve clues, find the treasure, and claim your prize!",
        date: "April 14, 2025",
        rules: [
            "Teams of 3-4 members.",
            "Follow the given path and clues.",
            "No external help allowed."
        ],
        formLink: "https://forms.gle/sampleNonTech1"
    },
    {
        id: 5,
        title: "Gaming Arena",
        description: "Compete in exciting console and PC gaming battles.",
        date: "April 15, 2025",
        rules: [
            "Single-player and multiplayer formats available.",
            "Specific game rules will be explained before the match.",
            "Fair play is mandatory."
        ],
        formLink: "https://forms.gle/sampleNonTech2"
    }
];

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 bg-[radial-gradient(circle,#3a0ca3,#000000)] opacity-75"></div>

            <div className="container mx-auto px-6 py-24 text-center relative z-10">
                <h1 className="text-6xl font-extrabold text-purple-400 mb-6 tracking-wide">
                    🔥 EVENTS & COMPETITIONS 🔥
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
                    Explore thrilling tech & non-tech events, participate, and win exciting prizes!
                </p>

                {/* Technical Events */}
                <section>
                    <h2 className="text-4xl font-bold text-indigo-500 mb-6">⚙️ Technical Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technicalEvents.map(event => (
                            <motion.div
                                key={event.id}
                                className="glass-card p-8 rounded-xl shadow-lg cursor-pointer bg-gradient-to-br from-purple-800 to-indigo-900 hover:scale-105 transition-transform duration-300"
                                onClick={() => setSelectedEvent(event)}
                            >
                                <h2 className="text-3xl font-bold text-white">{event.title}</h2>
                                <p className="text-gray-300 mt-2">{event.description}</p>
                                <p className="text-gray-400 mt-2 text-sm">{event.date}</p>
                                <button className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition">
                                    View Details
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Non-Technical Events */}
                <section className="mt-16">
                    <h2 className="text-4xl font-bold text-yellow-500 mb-6">🎭 Non-Technical Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {nonTechnicalEvents.map(event => (
                            <motion.div
                                key={event.id}
                                className="glass-card p-8 rounded-xl shadow-lg cursor-pointer bg-gradient-to-br from-yellow-500 to-orange-700 hover:scale-105 transition-transform duration-300"
                                onClick={() => setSelectedEvent(event)}
                            >
                                <h2 className="text-3xl font-bold text-white">{event.title}</h2>
                                <p className="text-gray-300 mt-2">{event.description}</p>
                                <p className="text-gray-400 mt-2 text-sm">{event.date}</p>
                                <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition">
                                    View Details
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Event Details Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gray-900 p-8 rounded-xl shadow-lg text-center max-w-3xl flex flex-col md:flex-row"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <div className="w-full md:w-2/3 text-left">
                                <h2 className="text-3xl font-bold text-purple-400">{selectedEvent.title}</h2>
                                <p className="text-gray-300 mt-4">{selectedEvent.description}</p>
                                <p className="text-gray-400 mt-2 text-sm">{selectedEvent.date}</p>
                                <h3 className="text-lg font-semibold text-yellow-400 mt-4">Rules & Regulations:</h3>
                                <ul className="list-disc list-inside text-gray-300">
                                    {selectedEvent.rules.map((rule, index) => (
                                        <li key={index}>{rule}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 flex flex-col justify-center items-center mt-6 md:mt-0">
                                <a href={selectedEvent.formLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition text-lg">
                                    Register Now
                                </a>
                                <button className="mt-4 text-gray-400 hover:text-white transition" onClick={() => setSelectedEvent(null)}>
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default Events;
