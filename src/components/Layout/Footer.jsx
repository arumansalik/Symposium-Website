import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2024 Tech Symposium. All Rights Reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="#" className="hover:text-symposium-primary">Privacy Policy</a>
                    <a href="#" className="hover:text-symposium-primary">Terms of Service</a>
                    <a href="#" className="hover:text-symposium-primary">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;