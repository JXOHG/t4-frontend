import React from "react";
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './Events.css';

function Events({ events, loading, error }) {
    const [scrollY, setScrollY] = React.useState(0);
    
    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="events-hero">
                <div className="contents relative z-10">
                    <Nav/>
                </div>
                <div
                    className="events-hero-background"
                    style={{ backgroundPositionY: `${scrollY * 0.3}px` }}
                ></div>
                <div className="events-hero-content">
                    <div>
                        <h1 className="events-hero-title">Our Events</h1>
                        <p className="events-hero-description">
                            Follow our upcoming workshops, seminars, and networking events designed to help you
                            develop your sales skills and connect with industry professionals.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="events-page-container">
                {error ? (
                    <div className="events-error-message">
                        <p>{error}</p>
                    </div>
                ) : events.length === 0 ? (
                    <div className="events-empty-message">
                        <p>No upcoming events...</p>
                    </div>
                ) : (
                    events.map((event) => {
                        // Parse the date string from JSON format
                        const eventDate = new Date(event.date);
                        const month = eventDate.toLocaleDateString('en-US', { month: 'short' });
                        const day = eventDate.getDate();
                        const year = eventDate.getFullYear();
                        const time = event.time || eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

                        return (
                            <div key={event.id} className="events-event-card">
                                {/* DATE BLOCK */}
                                <div className="events-event-date-block">
                                    <div className="events-event-date-month">{month} {day}</div>
                                    <div className="events-event-date-year">{year}</div>
                                    <div className="events-event-date-time">{time}</div>
                                </div>

                                {/* CONTENT BLOCK */}
                                <div className="events-event-content-block">
                                    <h3 className="events-event-title">{event.title}</h3>
                                    <p className="events-event-location">
                                        <svg className="events-event-location-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        {event.location}
                                    </p>
                                    <p className="events-event-description">{event.description}</p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            <Footer />
        </>
    );
}

export default Events;