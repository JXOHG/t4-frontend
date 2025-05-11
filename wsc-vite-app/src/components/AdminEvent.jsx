import React, { useState } from "react";
import EventModal from "./EventModal";

export default function AdminEvent({
  title,
  date,
  time,
  location,
  description,
  rawDate,
  rawTime,
  eventId,
  imageUrl,
  onUpdate,
  onDelete,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateEvent = async (e, eventData) => {
    e.preventDefault();
    
    // Call the parent onUpdate function
    onUpdate(eventData);
    
    // Close the modal
    setIsModalOpen(false);
  };

  // Format the date and time to match the screenshot
  const formatDisplayDate = () => {
    return `${date} @ ${time}`;
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-3xl p-6 shadow-lg mb-4">
      <div className="flex flex-row justify-between">
        <div className="flex-1 text-left">
          <h3 className="text-xl font-bold text-black">{title}</h3>
          {description && (
            <p className="text-gray-700 mt-2 text-left">{description}</p>
          )}
          <div className="mt-4">
            <p className="text-gray-600 font-medium text-left">{formatDisplayDate()}</p>
            <p className="text-gray-600 text-left">{location}</p>
          </div>
        </div>
        
        {/* Image positioned on the right side */}
        {imageUrl && (
          <div className="w-24 h-24 ml-4 flex-shrink-0">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
        >
          Edit
        </button>
      </div>

      {/* Event Editing Modal */}
      <EventModal
        title={title}
        date={rawDate}
        time={rawTime}
        location={location}
        description={description}
        eventId={eventId}
        type="edit"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleUpdateEvent}
        onDelete={onDelete}
      />
    </div>
  );
}