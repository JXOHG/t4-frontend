// AdminEvent.jsx (excerpt)
import React, { useState } from 'react';
import EventModal from '../components/EventModal';

export default function AdminEvent({ title, date, time, location, onUpdate, onDelete }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg ml-64">
      <div className="flex-top mb-12">
        <h2 className="text-2xl font-bold text-gray-800 text-left font-inter">{title}</h2>
      </div>
      <div className="flex-bottom text-left">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-black flex-bottom font-inter">{date} @ {time}</p>
            <span className="flex-bottom text-black font-inter">{location}</span>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#eee] hover:bg-[#f5f5f5] text-black font-bold py-3 px-6 mr-4 rounded-lg transition duration-300 focus:outline-none"
          >
            Edit
          </button>
        </div>
      </div>

      <EventModal
        title={title}
        date={date}
        time={time}
        location={location}
        type="edit"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const updatedEvent = {
            title: formData.get('title'),
            date: formData.get('date'),
            time: formData.get('time'),
            location: formData.get('location'),
          };

          if (onUpdate) onUpdate(updatedEvent);
            setModalOpen(false);
          }}
          onDelete={() => {
            if (onDelete) onDelete(); // ✅ call delete handler
            setModalOpen(false);

          // Handle save logic here
            // Must change the information shown on the AdminEvent the admin chose to edit
            // Should ideally interact with the title, date, location parameters of this AdminEvent function

        // THOMAS: Make POST request to backend here to update backend

          setModalOpen(false);
        }}
      />
    </div>
  );
}
