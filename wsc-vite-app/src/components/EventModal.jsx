import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/config";

export default function EventModal({
  title,
  date,
  time,
  location,
  description = "",
  eventId = null, // Add eventId prop to identify the event
  type,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  // Fetch existing image if editing an event
  useEffect(() => {
    const fetchEventImage = async () => {
      if (type === "edit" && eventId) {
        try {
          setImageLoading(true);
          const token = localStorage.getItem("authToken");
          const response = await fetch(`${BASE_URL}/events/${eventId}/image`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          });

          if (response.ok) {
            const data = await response.json();
            if (data.image_url) {
              setCurrentImage(data.image_url);
            }
          }
        } catch (err) {
          console.error("Error fetching event image:", err);
        } finally {
          setImageLoading(false);
        }
      }
    };

    if (isOpen) {
      fetchEventImage();
    }
  }, [eventId, type, isOpen]);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission with image upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const eventData = {
      title: formData.get("title"),
      date: formData.get("date"),
      time: formData.get("time"),
      location: formData.get("location"),
      description: formData.get("description") || "",
    };
    
    try {
      // First save the event data
      await onSave(e, eventData);
      
      // If there's a selected file and we have an event ID (either existing or newly created)
      if (selectedFile && eventId) {
        const token = localStorage.getItem("authToken");
        const imageFormData = new FormData();
        imageFormData.append("image", selectedFile);
        
        const imageResponse = await fetch(`${BASE_URL}/events/${eventId}/image`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: imageFormData,
        });
        
        if (!imageResponse.ok) {
          throw new Error("Failed to upload image");
        }
        
        console.log("Image uploaded successfully");
      }
    } catch (err) {
      console.error("Error saving event with image:", err);
      alert("Failed to save event with image. Please try again.");
    }
  };

  // Handle image deletion
  const handleDeleteImage = async () => {
    if (!eventId) return;
    
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`${BASE_URL}/events/${eventId}/image`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete image");
      }
      
      setCurrentImage(null);
      setSelectedFile(null);
      setFilePreview(null);
      console.log("Image deleted successfully");
    } catch (err) {
      console.error("Error deleting image:", err);
      alert("Failed to delete image. Please try again.");
    }
  };

  if (!isOpen) return null; // Render nothing if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-black">
          {type === "edit" ? "Edit Event" : "Add New Event"}
        </h2>
        <form onSubmit={handleSubmit}>
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
              required
              maxLength={20}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Event Image
            </label>

            {/* Show current image if available - UPDATED TO SQUARE */}
            {(currentImage || filePreview) && (
              <div className="mb-3">
                <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={filePreview || currentImage} 
                    alt="Event preview" 
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleDeleteImage}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full"
                    title="Remove image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-start flex-row">
              <label className="relative cursor-pointer">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
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
                  <span>{selectedFile ? "Change Image" : "Choose Image"}</span>
                </div>
              </label>
              <div className="ml-2">
                <span className="text-sm text-gray-500 text-left block">
                  Max size: 5MB
                </span>
                <span className="text-sm text-gray-500 text-left">
                  Supported formats: JPG, JPEG, PNG
                </span>
              </div>
            </div>
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-600">
                Selected file: {selectedFile.name}
              </p>
            )}
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