"use client"

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import About from "./pages/About"
import ExecutiveTeam from "./pages/ExecutiveTeam"
import Events from "./pages/Events"
import ContactUs from "./pages/Contact"
import Sponsors from "./pages/Sponsors"
import TermsOfService from "./pages/TermsOfService"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import EventsDash from "./admin-dash/EventsDash"
import AdminLogin from "./admin-dash/AdminLogin"
import "./App.css"

// Add a scroll to top component for better UX with parallax
const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}

function App() {

  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://flask-app-250624862173.us-central1.run.app/events');
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();

        if (Array.isArray(data.message)) {
          setEvents(data.message);
          console.log("Fetched events:", data.message);
        } else {
          console.error("Unexpected API response format:", data);
          setError("Unexpected data format");
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <Landing events={events} loading={loading} error={error} />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/executive-team" element={<ExecutiveTeam />} />
            <Route path="/events" element={
              <Events events={events} loading={loading} error={error} />
            } />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/events-dashboard" element={<EventsDash />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
