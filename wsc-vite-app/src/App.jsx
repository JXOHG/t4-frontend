import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import ExecutiveTeam from './pages/ExecutiveTeam'
import Events from './pages/Events'
import ContactUs from './pages/Contact'
import Sponsors from './pages/Sponsors'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TESTING */}
      <main className="flex-grow pt-[384px] px-4">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/executive-team" element={<ExecutiveTeam />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App;
