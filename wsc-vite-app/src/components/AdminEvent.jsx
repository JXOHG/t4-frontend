"use client"

import { useState } from "react"
import EventModal from "../components/EventModal"

export default function AdminEvent({
  title,
  date,
  time,
  location,
  description,
  rawDate, // Raw date in YYYY-MM-DD format for the form
  rawTime, // Raw time in HH:MM format for the form
  onUpdate,
  onDelete,
}) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-lg w-full max-w-md mx-auto xl:mx-0">
      <div className="flex-top mb-12">
        <h2 className="text-2xl font-bold text-gray-800 text-left font-inter">{title}</h2>
        {description && <p className="text-gray-600 mt-2 text-left font-inter">{description}</p>}
      </div>
      <div className="flex-bottom text-left">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-black flex-bottom font-inter">
              {date} @ {time}
            </p>
            <span className="flex-bottom text-black font-inter">{location}</span>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#eee] hover:bg-[#f5f5f5] text-black font-bold py-2 sm:py-3 px-4 sm:px-6 mr-2 sm:mr-4 rounded-lg transition duration-300 focus:outline-none text-sm sm:text-base"
          >
            Edit
          </button>
        </div>
      </div>

      <EventModal
        title={title}
        date={rawDate} // Use the raw date format (YYYY-MM-DD) for the input field
        time={rawTime} // Use the raw time format (HH:MM) for the input field
        location={location}
        description={description}
        type="edit"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const updatedEvent = {
            title: formData.get("title"),
            date: formData.get("date"), // This should be in YYYY-MM-DD format
            time: formData.get("time"), // This should be in HH:MM format
            location: formData.get("location"),
            description: formData.get("description"),
          }

          if (onUpdate) onUpdate(updatedEvent)
          setModalOpen(false)
        }}
        onDelete={() => {
          if (onDelete) onDelete()
          setModalOpen(false)
        }}
      />
    </div>
  )
}
