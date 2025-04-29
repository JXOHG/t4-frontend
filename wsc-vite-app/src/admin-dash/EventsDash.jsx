import React, { useState, useEffect } from "react";
import MyEventCalendar from "../components/Calendar";
import Navbar from "../components/Nav";
import AdminEvent from "../components/AdminEvent";
import EventModal from "../components/EventModal";
import { format } from "date-fns";
import { useNavigate, useLocation } from "react-router-dom";

export default function EventsDash() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Store events in a state array
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fetch events from API
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/events", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.status}`);
      }

      const data = await response.json();
      
      // Transform events data from API to match component needs
      const formattedEvents = data.message.map(event => {
        // Parse event date to create readable format
        const eventDate = new Date(event.event_date);
        
        return {
          id: event.event_id,
          title: event.title,
          description: event.description,
          date: format(eventDate, "EEEE, MMMM d"),
          time: format(eventDate, "h:mma"),
          location: event.location,
          rawDate: event.event_date
        };
      });

      setEvents(formattedEvents);
      setError(null);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to load events. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Update event in the backend
  const handleUpdateEvent = async (indexToUpdate, updatedEvent) => {
    const eventToUpdate = events[indexToUpdate];
    
    try {
      // Parse the date and time to create a proper date string
      const dateStr = updatedEvent.date;
      const timeStr = updatedEvent.time;
      
      // Create a date object from the date and time strings
      const dateObj = new Date(`${dateStr} ${timeStr}`);
      
      const response = await fetch(`http://127.0.0.1:5000/events/${eventToUpdate.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedEvent.title,
          description: updatedEvent.description || eventToUpdate.description,
          eventDate: dateObj.toUTCString(),
          location: updatedEvent.location,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update event: ${response.status}`);
      }

      // Update local state
      setEvents((prevEvents) => {
        const newEvents = [...prevEvents];
        newEvents[indexToUpdate] = {
          ...eventToUpdate,
          ...updatedEvent,
        };
        return newEvents;
      });
    } catch (err) {
      console.error("Error updating event:", err);
      alert("Failed to update event. Please try again.");
    }
  };

  // Delete event from the backend
  const handleDeleteEvent = async (indexToDelete) => {
    const eventToDelete = events[indexToDelete];
    
    try {
      const response = await fetch(`http://127.0.0.1:5000/events/${eventToDelete.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete event: ${response.status}`);
      }

      // Remove from local state
      setEvents((prevEvents) =>
        prevEvents.filter((_, index) => index !== indexToDelete)
      );
    } catch (err) {
      console.error("Error deleting event:", err);
      alert("Failed to delete event. Please try again.");
    }
  };

  // Add new event to the backend
  const handleAddEvent = async (eventData) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error(`Failed to add event: ${response.status}`);
      }

      // Refresh events list to get the newly added event with its ID
      await fetchEvents();
    } catch (err) {
      console.error("Error adding event:", err);
      alert("Failed to add event. Please try again.");
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");

        if (!token) {
          navigate("/admin-login");
          return;
        }

        const response = await fetch("http://127.0.0.1:5000/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          throw new Error("Invalid token");
        }

        setIsAuthenticated(true);
        // Once authenticated, fetch events
        fetchEvents();
      } catch (error) {
        console.error("Token verification failed:", error);
        navigate("/admin-login");
      }
    };

    verifyToken();
  }, [navigate, location]);

  if (!isAuthenticated) {
    return <div>Verifying authentication...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-georgia text-left ml-64 font-bold mb-8 text-white">
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
          <div className="flex gap-8">
            <div className="w-1/2 flex flex-col gap-4">
              {events.length === 0 ? (
                <p className="text-white text-xl">No events found. Add an event to get started.</p>
              ) : (
                events.map((ev, index) => (
                  <AdminEvent
                    key={index}
                    title={ev.title}
                    date={ev.date}
                    time={ev.time}
                    location={ev.location}
                    description={ev.description}
                    onUpdate={(updatedEvent) =>
                      handleUpdateEvent(index, updatedEvent)
                    }
                    onDelete={() => handleDeleteEvent(index)}
                  />
                ))
              )}
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
                className="bg-[#F9C726] hover:bg-[#ffd95a] text-black font-bold py-4 px-6 rounded-2xl mt-2 transition duration-300"
              >
                Add New Event
              </button>
            </div>
          </div>
        )}
      </div>

      <EventModal
        title=""
        date={selectedDate.toLocaleDateString()}
        location=""
        description=""
        type="add"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          const submittedTitle = formData.get("title");
          const submittedTime = formData.get("time");
          const submittedLocation = formData.get("location");
          const submittedDescription = formData.get("description") || "";
          
          // Combine date and time for API
          const eventDate = new Date(selectedDate);
          const [hours, minutes] = submittedTime.split(":").map(num => parseInt(num, 10));
          eventDate.setHours(hours, minutes);

          const eventData = {
            title: submittedTitle,
            description: submittedDescription,
            eventDate: eventDate.toUTCString(),
            location: submittedLocation,
          };

          // Add the event to database
          handleAddEvent(eventData);
          setModalOpen(false);
        }}
      />
    </>
  );
}