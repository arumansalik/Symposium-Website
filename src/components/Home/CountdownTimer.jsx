import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ eventDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const difference = eventDate - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    return (
        <div className="flex space-x-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                    key={unit}
                    className="bg-symposium-primary text-white p-4 rounded-lg shadow-lg"
                >
                    <span className="text-3xl font-bold block">{value}</span>
                    <span className="text-sm">{unit}</span>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;