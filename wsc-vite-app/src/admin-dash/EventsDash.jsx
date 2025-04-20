import React, { useState } from 'react';
import MyEventCalendar from '../components/Calendar';
import Navbar from '../components/Nav';
import AdminEvent from '../components/AdminEvent';
import EventModal from '../components/EventModal';
import { format } from 'date-fns';

export default function EventsDash() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Store events in a state array (initially with some hard-coded events)
    const [events, setEvents] = useState([
        { title: "Guest Speaker - Consumer Behaviour", date: "Monday, March 17", time: "7:00PM", location: "Western University Campus" },
        { title: "Guest Speaker - Consumer Behaviour", date: "Monday, March 17", time: "7:00PM", location: "Western University Campus" },
        { title: "Guest Speaker - Consumer Behaviour", date: "Monday, March 17", time: "7:00PM", location: "Western University Campus" },
    ]);

    const handleUpdateEvent = (indexToUpdate, updatedEvent) => {
        setEvents((prevEvents) => {
          const newEvents = [...prevEvents];
          newEvents[indexToUpdate] = updatedEvent;
          return newEvents;
        });
    };

    const handleDeleteEvent = (indexToDelete) => {
        setEvents((prevEvents) => prevEvents.filter((_, index) => index !== indexToDelete));
    };

    return ( 
        <>
        <Navbar />
        <div className="p-8">
            <h1 className="text-4xl font-georgia text-left ml-64 font-bold mb-8 text-white">Events Dashboard</h1>
            
            <div className="flex gap-8"> 
                <div className="w-1/2 flex flex-col gap-4">
                {events.map((ev, index) => (
                <AdminEvent
                    key={index}
                    title={ev.title}
                    date={ev.date}
                    time={ev.time}
                    location={ev.location}
                    onUpdate={(updatedEvent) => handleUpdateEvent(index, updatedEvent)}
                    onDelete={() => handleDeleteEvent(index)}
                />
                ))}
            </div>
                <div className="w-1/3 flex flex-col gap-4 ml-48 mr-20">
                    <div className="bg-white rounded-3xl p-6 shadow-lg">
                        <MyEventCalendar 
                            onDateSelect={setSelectedDate} 
                            selectedDate={selectedDate}
                        />
                    </div>
                    
                    <button 
                        onClick={() => setModalOpen(true)}
                        className="bg-[#F9C726] hover:bg-[#ffd95a] text-black font-bold py-4 px-6 rounded-2xl mt-2 transition duration-300">
                        Add New Event
                    </button>
                </div>
            </div>
        </div>

        <EventModal
            title=""
            date={selectedDate.toLocaleDateString()}
            location=""
            type="add"
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onSave={(e) => {
                e.preventDefault();
            
                const formData = new FormData(e.target);
                const submittedTitle = formData.get('title');
                const submittedTime = formData.get('time');
                const submittedLocation = formData.get('location');
            
                // Combine selected date and time into one ISO string
                const fullDate = new Date(selectedDate);
                const [hours, minutes] = submittedTime.split(":");
                fullDate.setHours(parseInt(hours), parseInt(minutes));
            
                const payload = {
                    title: submittedTitle,
                    description: `${submittedTitle} @ ${submittedLocation}`, // Placeholder
                    eventDate: fullDate.toUTCString(), // Backend expects GMT format
                    location: submittedLocation
                };
            
                fetch("https://flask-app-250624862173.us-central1.run.app/events", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include", // important to send cookies/session to Flask
                    body: JSON.stringify(payload)
                })
                .then(response => {
                    if (!response.ok) throw new Error("Failed to create event");
                    return response.json();
                })
                .then(() => {
                    // Add to frontend state for now
                    const formattedDate = fullDate.toLocaleDateString(undefined, {
                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                    });
            
                    setEvents(prev => [
                        ...prev,
                        { title: submittedTitle, date: formattedDate, time: submittedTime, location: submittedLocation }
                    ]);
                })
                .catch(err => {
                    console.error("Error posting event:", err);
                    alert("Failed to create event. Are you logged in?");
                });
            
                setModalOpen(false);
            }}            
        />
        </>
    );
}
