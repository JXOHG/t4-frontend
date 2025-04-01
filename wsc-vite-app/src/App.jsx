import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import ExecutiveTeam from './pages/ExecutiveTeam'
import Events from './pages/Events'
import ContactUs from './pages/Contact'
import Sponsors from './pages/Sponsors'
import EventsDash from './pages/EventsDash'
import AdminLogin from './admin-dash/AdminLogin'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TESTING */}
      <main className="flex-grow">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/executive-team" element={<ExecutiveTeam />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sponsors" element={<Sponsors />} />
            { /* REMOVE THESE ROUTES LATER, FOR TESTING PURPOSES*/}
            <Route path="/events-dashboard" element={<EventsDash />} />
            <Route path="/admin-login" element={<AdminLogin />} />

          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App;
