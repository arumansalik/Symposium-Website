import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { EventProvider } from './context/EventContext'; // Import the EventProvider

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Events = lazy(() => import('./pages/Events'));
const EventDetails = lazy(() => import('./pages/EventDetails'));

// Loading Component
const Loader = () => (
    <div className="flex justify-center items-center h-screen bg-symposium-background">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-symposium-primary"></div>
    </div>
);

// Class-based Error Boundary
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center h-screen bg-red-50 p-8">
                    <h1 className="text-4xl font-bold text-red-600 mb-4">
                        Oops! Something Went Wrong
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        We're experiencing some technical difficulties.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-symposium-primary text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <EventProvider> {/* Wrap entire routing with EventProvider */}
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/about"
                                element={<AboutUs />}
                            />
                            <Route
                                path="/events"
                                element={<Events />}
                            />
                            <Route
                                path="/events/:eventId"
                                element={<EventDetails />}
                            />
                            {/* Catch-all route for undefined paths */}
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </Routes>
                    </Suspense>
                </EventProvider>
            </Router>
        </ErrorBoundary>
    );
}

export default App;