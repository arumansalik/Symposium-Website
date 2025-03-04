import React, { createContext, useState, useContext } from 'react';

// Initial events data
const initialEvents = [
    {
        id: 1,
        name: 'Tech Hackathon',
        shortDescription: 'A 24-hour coding marathon to solve real-world challenges.',
        fullDescription: 'Comprehensive hackathon for innovative tech solutions.',
        date: 'September 16, 2024',
        venue: 'Main Campus Auditorium',
        registrationLink: 'https://forms.gle/example1'
    },
    // Add more events
];

// Create Context
const EventContext = createContext();

// Provider Component
export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState(initialEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const addEvent = (newEvent) => {
        setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    };

    const updateEvent = (updatedEvent) => {
        setEvents(events.map(event =>
            event.id === updatedEvent.id ? updatedEvent : event
        ));
    };

    const deleteEvent = (eventId) => {
        setEvents(events.filter(event => event.id !== eventId));
    };

    return (
        <EventContext.Provider value={{
            events,
            selectedEvent,
            setSelectedEvent,
            addEvent,
            updateEvent,
            deleteEvent
        }}>
            {children}
        </EventContext.Provider>
    );
};

// Custom Hook for using the context
export const useEventContext = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};