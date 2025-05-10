import React from "react";

export default function EventModal({
  title,
  date,
  time,
  location,
  description = "",
  type,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) {
  if (!isOpen) return null; // Render nothing if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-black">
          {type === "edit" ? "Edit Event" : "Add New Event"}
        </h2>
        <form onSubmit={onSave}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="time"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              defaultValue={description}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-24"
              name="description"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Event Image
            </label>

            <div className="flex justify-start flex-row">
              <label className="relative cursor-pointer">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    // Justin use this for api call
                    const file = e.target.files[0];
                    console.log("Selected file:", file);
                  }}
                />
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border-2 border-gray-300 transition duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Choose Image</span>
                </div>
              </label>
              <div className="ml-2">
                <span className="text-sm text-gray-500 text-left block">
                  Max size: 5MB
                </span>
                <span className="text-sm text-gray-500 text-left">
                  Supported formats: JPG, PNG, GIF
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {type === "edit" && (
              <button
                type="button"
                onClick={onDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Delete Event
              </button>
            )}

            <div className={type === "edit" ? "" : "ml-auto"}>
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
