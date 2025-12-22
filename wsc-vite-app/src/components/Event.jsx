"use client"

import { useState } from "react"

function Event({ image, title, date, location, description }) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    console.error("Failed to load image:", image)
    setImageError(true)
  }

  const rawDate = date.split(' ').slice(0, 3);
  const pureDate = `${rawDate[0]} ${rawDate[2]} ${rawDate[1]}`;

  const rawTime = date.split(' ')[4]; 
  const sTime = rawTime.split(':');
  const hours = parseInt(sTime[0], 10);
  const minutes = sTime[1];
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const pureTime = `${formattedHours}:${minutes} ${ampm}`;

  return (
    <div className="flex flex-col items-center bg-[#2C2C2C] text-white rounded-lg shadow-md m-4 md:flex-row w-full md:max-w-7xl mx-auto border border-gray-700 hover:border-gray-500 transition-colors duration-300">
      <div className="w-full md:w-1/3 flex justify-center">
        {image && !imageError ? (
          <img
            src={image || "/w2.png"}
            alt={title}
            className="h-64 w-64 object-contain rounded"
            onError={handleImageError}
          />
        ) : (
          <div className="h-64 w-64 bg-gray-800 flex items-center justify-center rounded">
            <span className="text-white-400 text-lg font-medium">No Image</span>
          </div>
        )}
      </div>
      <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6 text-center md:text-left">
        <h2 className="text-2xl font-bold text-white-200">{title}</h2>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start sm:items-center text-white-400 py-2">
          <p className="flex items-center justify-center md:justify-start">
            <i className="far fa-calendar-alt mr-2"></i>
            {pureDate}
          </p>
          <p className="flex items-center justify-center md:justify-start mt-2 sm:mt-0">
            <i className="far fa-clock mr-2"></i>
            {pureTime}
          </p>
        </div>
        <p className="flex items-center justify-center md:justify-start mt-2 sm:mt-0">
            <i className="fas fa-map-marker-alt mr-2"></i>
            {location}
          </p>
        <p className="text-white-400 p-4">{description}</p>
      </div>
    </div>
  )
}

export default Event
