import React from 'react';

export default function EventModal({ title, date, time, location, description = "", type, isOpen, onClose, onSave, onDelete }) {
  if (!isOpen) return null; // Render nothing if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-black">
          {type === 'edit' ? 'Edit Event' : 'Add New Event'}
        </h2>
        <form onSubmit={onSave}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title*
            </label>
            <input
              type="text"
              id="title"
              defaultValue={title}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="title"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date*
            </label>
            <input
              type="date"
              id="date"
              defaultValue={date} // Should be YYYY-MM-DD format
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="date"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              Time*
            </label>
            <input
              type="time"
              id="time"
              defaultValue={time} // Should be HH:MM format
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="time"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location*
            </label>
            <input
              type="text"
              id="location"
              defaultValue={location}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="location"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              defaultValue={description}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-24"
              name="description"
            />
          </div>

          <div className="flex justify-between">
            {type === 'edit' && (
              <button
                type="button"
                onClick={onDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Delete Event
              </button>
            )}
            
            <div className={type === 'edit' ? '' : 'ml-auto'}>
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
          </div>
        </form>
      </div>
    </div>
  );
}