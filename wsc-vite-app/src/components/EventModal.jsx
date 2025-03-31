import React from 'react';

export default function EventModal({ title, date, time, location, type, isOpen, onClose, onSave }) {
  if (!isOpen) return null; // Render nothing if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-black">
          {type === 'edit' ? 'Edit Event' : 'Add New Event'}
        </h2>
        <form onSubmit={onSave}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              defaultValue={title}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input
              type="text"
              defaultValue={date}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="date"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
            <input
              type="text"
              defaultValue={time}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="time"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
            <input
              type="text"
              defaultValue={location}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="location"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
