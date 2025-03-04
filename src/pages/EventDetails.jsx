import React, { createContext, useState, useContext } from 'react';

// Event Data
export const eventsData = [
    {
        id: 1,
        name: 'Tech Hackathon',
        description: 'A 24-hour coding marathon to solve real-world challenges.',
        date: 'September 16, 2024',
        time: '10:00 AM',
        venue: 'Main Campus Auditorium',
        fullDescription: `
        Our Tech Hackathon is more than just a coding competition – it's a platform for aspiring technologists to push their boundaries, collaborate with peers, and solve real-world challenges.

        Key Highlights:
        - 24-hour non-stop coding challenge
        - Interdisciplinary team formations
        - Professional mentorship
        - Cutting-edge problem statements
        - Prizes worth INR 1,00,000
        `,
        registrationFee: 'INR 500 per team',
        teamSize: '3-4 members',
        prizes: [
            '1st Place: INR 50,000',
            '2nd Place: INR 30,000',
            '3rd Place: INR 20,000'
        ],
        criteria: [
            'Innovation',
            'Technical Complexity',
            'Presentation',
            'Practical Applicability',
            'Teamwork'
        ],
        sponsors: [
            { name: 'Google', logo: '/google-logo.png' },
            { name: 'Microsoft', logo: '/microsoft-logo.png' },
            { name: 'IBM', logo: '/ibm-logo.png' }
        ],
        googleFormLink: 'https://forms.gle/example1'
    },
    {
        id: 2,
        name: 'AI & Machine Learning Workshop',
        description: 'Hands-on workshop exploring cutting-edge AI technologies.',
        date: 'September 17, 2024',
        time: '2:00 PM',
        venue: 'Tech Innovation Center',
        fullDescription: `
        Dive deep into the world of Artificial Intelligence and Machine Learning with our comprehensive workshop.

        Workshop Highlights:
        - Practical machine learning techniques
        - Live coding sessions
        - Industry expert talks
        - Hands-on project development
        - Networking opportunities
        `,
        registrationFee: 'INR 750',
        teamSize: 'Individual',
        prizes: [
            'Best Project: Advanced AI Tools',
            'Runner-up: Machine Learning Resources',
            'Participant Certificate'
        ],
        criteria: [
            'Technical Understanding',
            'Project Complexity',
            'Innovation',
            'Presentation Skills'
        ],
        sponsors: [
            { name: 'NVIDIA', logo: '/nvidia-logo.png' },
            { name: 'DeepMind', logo: '/deepmind-logo.png' }
        ],
        googleFormLink: 'https://forms.gle/example2'
    },
    {
        id: 3,
        name: 'Cybersecurity Seminar',
        description: 'Expert talks on the latest cybersecurity trends and practices.',
        date: 'September 18, 2024',
        time: '11:00 AM',
        venue: 'Conference Hall',
        fullDescription: `
        Explore the cutting-edge world of cybersecurity with industry leaders and experts.

        Seminar Focus:
        - Latest cybersecurity threats
        - Defensive strategies
        - Ethical hacking techniques
        - Compliance and risk management
        - Career opportunities
        `,
        registrationFee: 'INR 500',
        teamSize: 'Individual',
        prizes: [
            'Best Security Solution: Cybersecurity Toolkit',
            'Top Performer: Security Consultation',
            'Participant Certificate'
        ],
        criteria: [
            'Technical Knowledge',
            'Problem-Solving Skills',
            'Practical Insights',
            'Innovative Thinking'
        ],
        sponsors: [
            { name: 'Cisco', logo: '/cisco-logo.png' },
            { name: 'Palo Alto Networks', logo: '/paloalto-logo.png' }
        ],
        googleFormLink: 'https://forms.gle/example3'
    }
];

// Create Event Context
const EventContext = createContext();

// Event Provider Component
export const EventProvider = ({ children }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const findEventById = (id) => {
        return eventsData.find(event => event.id === parseInt(id));
    };

    const contextValue = {
        events: eventsData,
        selectedEvent,
        setSelectedEvent,
        findEventById
    };

    return (
        <EventContext.Provider value={contextValue}>
            {children}
        </EventContext.Provider>
    );
};

// Custom hook to use Event Context
export const useEventContext = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};