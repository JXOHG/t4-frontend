import React, { useState, useEffect } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Event from '../components/Event';
import PageTitle from "../components/page-title";

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch events when the component mounts
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://flask-app-250624862173.us-central1.run.app/events');
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Check if data.message is an array before setting it
                if (Array.isArray(data.message)) {
                    setEvents(data.message);
                } else {
                    console.error("Unexpected API response format:", data);
                    setEvents([]);
                    setError("Unexpected data format received from server");
                }
            } catch (err) {
                console.error("Failed to fetch events:", err);
                setError("Failed to load events. Please try again later.");
                setEvents([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            // Format: Month Day, Year
            return date.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
            });
        } catch (error) {
            console.error("Error formatting date:", error);
            return dateString; // Return original string if formatting fails
        }
    };

    return (
        <>
            <Nav />
            
            <PageTitle 
                title="Events" 
                description="Follow our upcoming workshops, seminars, and networking events designed to help you
                develop your sales skills and connect with industry professionals. Open to all experience levels."
            />
            
            <div className="flex flex-col justify-center pb-20">
                {loading ? (
                    <div className="flex flex-col items-center space-y-4">
                    {[...Array(3)].map((_, index) => (
                        <div
                        key={index}
                        className="flex flex-col md:flex-row items-center rounded-lg shadow-md m-4 p-6 w-full md:max-w-4xl mx-auto border border-gray-700 animate-pulse"
                        >
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="h-48 w-48 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6">
                            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                            <div className="h-16 bg-gray-300 rounded w-full"></div>
                        </div>
                        </div>
                    ))}
                    </div>

                ) : error ? (
                    <div className="text-center py-10">
                        <p className="text-xl text-red-600">{error}</p>
                    </div>
                ) : events.length === 0 ? (
                    <div className="text-center py-10">
                        <p className="text-xl text-gray-600">No upcoming events...</p>
                    </div>
                ) : (
                    // Map through events array to render Event components
                    events.map((event) => (
                        <Event 
                            key={event.event_id}
                            image={event.image_url}
                            title={event.title}
                            date={formatDate(event.event_date)}
                            location={event.location}
                            description={event.description}
                        />
                    ))
                )}
            </div>
            <Footer />
        </>
    );
}

export default Events;