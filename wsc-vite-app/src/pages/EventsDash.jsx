import React, { useState } from 'react';
import MyEventCalendar from '../components/Calendar';
import Navbar from '../components/Nav';
import AdminEvent from '../components/AdminEvent';
import EventModal from '../components/EventModal';

export default function EventsDash() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

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
                    <AdminEvent title="Guest Speaker - Consumer Behaviour" date="Monday, March 17 • 7:00 PM" location="Western University Campus" />                    
                    <AdminEvent title="Guest Speaker - Consumer Behaviour" date="Monday, March 17 • 7:00 PM" location="Western University Campus" />                    
                    <AdminEvent title="Guest Speaker - Consumer Behaviour" date="Monday, March 17 • 7:00 PM" location="Western University Campus" />                    
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

                // Handle saving new event logic here
                    // Add a new AdminEvent object to where all of the events are shown to the admin
                        // Will have to use a list of sorts and refactor how events are displayed to the admin
                    // New AdminEvent object should be created with admin input passed through arguments

                setModalOpen(false);
            }}
        />
        </>
    );
}
