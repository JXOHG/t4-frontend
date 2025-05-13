import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path 
        ? "text-white font-semi-bold"
        : "text-white opacity-60";   

  return (
    <header className="top-0 left-0 w-full z-50 text-white bg-transparent">
      <div className="px-4 md:px-10 lg:px-16 py-3 md:py-6 lg:py-8 flex items-center justify-between">
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        <a href="/" className="text-md md:text-xl lg:text-2xl font-bold whitespace-nowrap">Western Sales Club</a>
        <nav
          className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:translate-x-0 md:bg-transparent md:flex-row md:space-x-4`}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none md:hidden"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 space-y-6 md:space-y-0 px-4 md:px-0 py-4 md:py-0">
            <li><Link to="/about" className={`${getLinkClass("/about")} text-md md:text-sm lg:text-lg whitespace-nowrap`} onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/executive-team" className={`${getLinkClass("/executive-team")} text-md md:text-sm lg:text-lg whitespace-nowrap`} onClick={() => setIsOpen(false)}>Executive Team</Link></li>
            <li><Link to="/events" className={`${getLinkClass("/events")} text-md md:text-sm lg:text-lg whitespace-nowrap`} onClick={() => setIsOpen(false)}>Events</Link></li>
            <li><Link to="/sponsors" className={`${getLinkClass("/sponsors")} text-md md:text-sm lg:text-lg whitespace-nowrap`} onClick={() => setIsOpen(false)}>Sponsors</Link></li>
            <li><Link to="/contact-us" className={`${getLinkClass("/contact-us")} text-md md:text-sm lg:text-lg whitespace-nowrap`} onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Nav;