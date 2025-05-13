import React, { useState, useEffect } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Event from '../components/Event';

function Events({ events, loading, error }) {

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

    const [scrollY, setScrollY] = React.useState(0);
    
    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/** HERO */}
            <div className="relative flex flex-col w-full h-[75vh] items-center">
                <div className="contents relative z-10">
                    <Nav/>
                </div>
                <div
                    className="absolute inset-0 bg-[url(/SANFRANCISCO.jpg)] bg-cover bg-top opacity-50"
                    style={{ backgroundPositionY: `${scrollY * 0.3}px` }}
                ></div>
                <div className="relative z-10 flex-grow flex px-12">
                    <div>
                        <h1 className="text-5xl text-white font-bold pt-48 lg:pt-64">Our Events</h1>
                        <p className="text-white text-lg mt-4">
                            Follow our upcoming workshops, seminars, and networking events designed to help you
                            develop your sales skills and connect with industry professionals. Open to all experience levels.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-center pb-20 pt-12 px-12">
                {loading ? (
                    <div className="flex flex-col items-center space-y-4">
                    {[...Array(3)].map((_, index) => (
                        <div
                        key={index}
                        className="flex flex-col md:flex-row items-center rounded-lg shadow-md m-4 p-6 w-full md:max-w-7xl mx-auto border border-gray-700 animate-pulse"
                        >
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="h-48 w-48 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6">
                            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
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
                            date={event.event_date}
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