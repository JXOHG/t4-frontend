"use client"

import { useState, useEffect } from "react"
import MyEventCalendar from "../components/Calendar"
import Navbar from "../components/Nav"
import AdminEvent from "../components/AdminEvent"
import EventModal from "../components/EventModal"
import { format } from "date-fns"
import { useNavigate, useLocation } from "react-router-dom"
import { BASE_URL } from "../utils/config"

export default function EventsDash() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [authToken, setAuthToken] = useState(null)

  // Store events in a state array
  const [events, setEvents] = useState([])

  const navigate = useNavigate()
  const location = useLocation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Format date for date input (YYYY-MM-DD)
  const formatDateForInput = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  // Parse date string from input to date object
  const parseDateAndTime = (dateStr, timeStr) => {
    const [year, month, day] = dateStr.split("-").map(Number)
    const [hours, minutes] = timeStr.split(":").map(Number)
    return new Date(year, month - 1, day, hours, minutes)
  }

  // Format date for API in the exact format expected by backend
  const formatDateForAPI = (date) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const dayOfWeek = daysOfWeek[date.getDay()]
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")

    return `${dayOfWeek}, ${day} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`
  }

  // Fetch events from API
  const fetchEvents = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("authToken")

      if (!token) {
        throw new Error("No authentication token found")
      }

      const response = await fetch(`${BASE_URL}/events`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include", // Include cookies for session-based auth
      })

      if (!response.ok) {
        // Handle different error statuses
        if (response.status === 401 || response.status === 403) {
          // Authentication error, redirect to login
          localStorage.removeItem("authToken")
          navigate("/admin-login")
          return
        }
        throw new Error(`Failed to fetch events: ${response.status}`)
      }

      const data = await response.json()

      // Check if data has the expected structure
      if (!data.message || !Array.isArray(data.message)) {
        throw new Error("Unexpected API response format")
      }

      // Transform events data from API to match component needs
      const formattedEvents = data.message
        .map((event) => {
          try {
            // Parse event date to create readable format
            const eventDate = new Date(event.event_date)

            return {
              id: event.event_id,
              title: event.title,
              description: event.description || "",
              date: format(eventDate, "yyyy-MM-dd"), // Format for the form input
              formattedDate: format(eventDate, "EEEE, MMMM d"), // Formatted for display
              time: format(eventDate, "HH:mm"), // 24-hour format for the form input
              formattedTime: format(eventDate, "h:mma"), // Formatted for display
              location: event.location || "",
              rawDate: event.event_date,
              imageUrl: event.image_url || null, // Add image URL to display if needed
            }
          } catch (err) {
            console.error("Error processing event:", event, err)
            return null // Skip any events that can't be processed
          }
        })
        .filter((event) => event !== null) // Remove any null events

      setEvents(formattedEvents)
      console.log("Fetched and processed events:", formattedEvents)
      setError(null)
    } catch (err) {
      console.error("Error fetching events:", err)
      setError("Failed to load events. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  // Update event in the backend
  const handleUpdateEvent = async (indexToUpdate, updatedEvent) => {
    const eventToUpdate = events[indexToUpdate]

    try {
      // Parse the date and time to create a proper date string
      const dateObj = parseDateAndTime(updatedEvent.date, updatedEvent.time)
      const formattedDate = formatDateForAPI(dateObj)

      const token = localStorage.getItem("authToken")

      const response = await fetch(`${BASE_URL}/events/${eventToUpdate.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in headers
        },
        credentials: "include", // Include cookies for session
        body: JSON.stringify({
          title: updatedEvent.title,
          description: updatedEvent.description || eventToUpdate.description,
          eventDate: formattedDate,
          location: updatedEvent.location,
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to update event: ${response.status}`)
      }

      // Refresh events to get updated data from server
      await fetchEvents()
    } catch (err) {
      console.error("Error updating event:", err)
      alert("Failed to update event. Please try again.")
    }
  }

  // Delete event from the backend
  const handleDeleteEvent = async (indexToDelete) => {
    const eventToDelete = events[indexToDelete]

    try {
      const token = localStorage.getItem("authToken")

      const response = await fetch(`${BASE_URL}/events/${eventToDelete.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
        credentials: "include", // Include cookies for session
      })

      if (!response.ok) {
        throw new Error(`Failed to delete event: ${response.status}`)
      }

      // Remove from local state
      setEvents((prevEvents) => prevEvents.filter((_, index) => index !== indexToDelete))
    } catch (err) {
      console.error("Error deleting event:", err)
      alert("Failed to delete event. Please try again.")
    }
  }

  // Add new event to the backend
  const handleAddEvent = async (eventData) => {
    try {
      const token = localStorage.getItem("authToken")

      const response = await fetch(`${BASE_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in headers
        },
        credentials: "include", // Include cookies for session
        body: JSON.stringify(eventData),
      })

      if (!response.ok) {
        throw new Error(`Failed to add event: ${response.status}`)
      }

      // Refresh events list to get the newly added event with its ID
      await fetchEvents()
    } catch (err) {
      console.error("Error adding event:", err)
      alert("Failed to add event. Please try again.")
    }
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        setLoading(true)

        // Check for token in URL parameters
        const params = new URLSearchParams(location.search)
        const urlToken = params.get("token")

        if (urlToken) {
          localStorage.setItem("authToken", urlToken)
        }

        // Check for token in localStorage
        const token = localStorage.getItem("authToken")

        if (!token) {
          // No token found, redirect to login
          navigate("/admin-login")
          return
        }

        // Verify the token with backend
        const response = await fetch(`${BASE_URL}/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        })

        if (!response.ok) {
          // Token verification failed
          localStorage.removeItem("authToken")
          navigate("/admin-login")
          return
        }

        const data = await response.json()

        if (!data.valid) {
          // Token is invalid or expired
          localStorage.removeItem("authToken")
          navigate("/admin-login")
          return
        }

        // Authentication successful
        setAuthToken(token)
        setIsAuthenticated(true)

        // Fetch events with the validated token
        fetchEvents()
      } catch (err) {
        console.error("Authentication check failed:", err)
        navigate("/admin-login")
      } finally {
        setLoading(false)
      }
    }

    checkAuthentication()
  }, [navigate])

  if (!isAuthenticated) {
    return <div>Verifying authentication...</div>
  }

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-georgia text-center sm:text-left sm:ml-16 md:ml-32 lg:ml-64 font-bold mb-4 sm:mb-8 text-white">
          Events Dashboard
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-white text-xl">Loading events...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500 text-xl">{error}</p>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row gap-4 md:gap-8 max-w-7xl mx-auto">
            <div className="w-full xl:w-3/5 flex flex-col gap-4 items-center xl:items-start">
              {events.length === 0 ? (
                <p className="text-white text-xl">No events found. Add an event to get started.</p>
              ) : (
                events.map((ev, index) => (
                  <AdminEvent
                    key={index}
                    title={ev.title}
                    date={ev.formattedDate}
                    time={ev.formattedTime}
                    location={ev.location}
                    description={ev.description}
                    rawDate={ev.date} // Pass the raw date for the form
                    rawTime={ev.time} // Pass the raw time for the form
                    onUpdate={(updatedEvent) => handleUpdateEvent(index, updatedEvent)}
                    onDelete={() => handleDeleteEvent(index)}
                  />
                ))
              )}
            </div>

            <div className="w-full xl:w-2/5 flex flex-col gap-4 mx-auto xl:ml-8 mt-6 xl:mt-0">
              <div className="bg-white rounded-3xl p-6 shadow-lg max-w-md mx-auto">
                <MyEventCalendar onDateSelect={setSelectedDate} selectedDate={selectedDate} />
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#F9C726] hover:bg-[#ffd95a] text-black font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-2xl mt-2 transition duration-300 text-sm sm:text-base w-full max-w-md mx-auto"
              >
                Add New Event
              </button>
            </div>
          </div>
        )}
      </div>

      <EventModal
        title=""
        date={formatDateForInput(selectedDate)}
        time=""
        location=""
        description=""
        type="add"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(e) => {
          e.preventDefault()

          const formData = new FormData(e.target)
          const submittedTitle = formData.get("title")
          const submittedDate = formData.get("date")
          const submittedTime = formData.get("time")
          const submittedLocation = formData.get("location")
          const submittedDescription = formData.get("description") || ""

          // Create a date object from the submitted date and time
          const eventDate = parseDateAndTime(submittedDate, submittedTime)
          const formattedEventDate = formatDateForAPI(eventDate)

          const eventData = {
            title: submittedTitle,
            description: submittedDescription,
            eventDate: formattedEventDate,
            location: submittedLocation,
          }

          // Add the event to database
          handleAddEvent(eventData)
          setModalOpen(false)
        }}
      />
    </>
  )
}
