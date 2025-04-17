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
            
            {/* 
                This area likely needs to change in order to characterize "Add New Event" functionality 
                Use for loop?
            */}
            <div className="flex gap-8"> 
                <div className="w-1/2 flex flex-col gap-4">
                {events.map((ev, index) => (
                <AdminEvent
                    key={index}
                    title={ev.title}
                    date={ev.date}
                    time={ev.time}
                    location={ev.location}
                    onUpdate={(updatedEvent) => handleUpdateEvent(index, updatedEvent)} // changed but no clue
                    onDelete={() => handleDeleteEvent(index)} // added delete function
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
                const dayOfWeek = format(selectedDate, 'EEEE, MMMM d');

                console.log("New Event Data:", submittedTitle, dayOfWeek, submittedTime, submittedLocation);

                setEvents((prevEvents) => [
                    ...prevEvents,
                    { title: submittedTitle, date: dayOfWeek, time: submittedTime, location: submittedLocation },
                ]);


                /**
                Handle saving new event logic here
                    Add a new AdminEvent object to where all of the events are shown to the admin
                        Will have to use a list of sorts and refactor how events are displayed to the admin
                    New AdminEvent object should be created with admin input passed through arguments

                THOMAS: Create API endpoint here
                    Make POST request to add event to backend with event info in JSON?
                */

                setModalOpen(false);
            }}
        />
        </>
    );
}
