import React, { useEffect, useState } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Event from '../components/Event';
import PageTitle from "../components/page-title";

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://flask-app-250624862173.us-central1.run.app/events')
            .then(response => {
                if (!response.ok) { throw new Error('Failed to fetch events'); }
                return response.json();
            })
            .then(data => {
                // NOTE: Adjust this path based on the actual backend response shape
                const eventsData = data.message; // this is based on your backend returning { message: [...] }

                // Some backend results may be undefined or strings; filter if needed
                const filteredEvents = eventsData.filter(e => typeof e === 'object' && e !== null);

                setEvents(filteredEvents);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching events:', err);
                setError('Could not load events.');
                setLoading(false);
            });
    }, []);
      
    return (
        <>
            <Nav />

            <PageTitle 
                title="Events" 
                description="Follow our upcoming workshops, seminars, and networking events designed to help you
                develop your sales skills and connect with industry professionals. Open to all experience levels."
            />

            <div className="flex flex-col justify-center pb-20">
                {loading && <p className="text-center text-white">Loading events...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {events.map((event, index) => (
                    <Event
                        key={index}
                        image="/tsi-logo.png" // Placeholder image
                        title={event.title}
                        date={event.eventDate}
                        location={event.location}
                        description={event.description}
                    />
                ))}
            </div>

            <Footer />
        </>
    );
}

export default Events;
