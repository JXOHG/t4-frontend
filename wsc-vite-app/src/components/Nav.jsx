import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const getLinkClass = (path) => 
    location.pathname === path
      ? "text-white font-semibold"
      : "text-white opacity-60 hover:opacity-100 transition-opacity";
  
  return (
    <header className="relative top-0 left-0 w-full z-40 text-white bg-transparent">
      <div className="px-5 md:px-20 py-6 flex items-center justify-between">
        <Link to="/" className="text-xl lg:text-2xl font-bold whitespace-nowrap">Western Sales Club</Link>
        
        {/* Desktop Nav - visible at 600px (md) and up */}
        <nav className="hidden md:flex ml-auto">
          <ul className="flex space-x-8 items-center">
            <li><Link to="/about" className={`${getLinkClass("/about")} text-lg`}>About Us</Link></li>
            <li><Link to="/executive-team" className={`${getLinkClass("/executive-team")} text-lg`}>Executive Team</Link></li>
            <li><Link to="/events" className={`${getLinkClass("/events")} text-lg`}>Events</Link></li>
            <li><Link to="/contact-us" className={`${getLinkClass("/contact-us")} text-lg`}>Contact Us</Link></li>
            <li><Link to="/sponsors" className={`${getLinkClass("/sponsors")} text-lg`}>Sponsors</Link></li>
          </ul>
        </nav>
        
        {/* Completely new sticky hamburger button - absolutely minimal with no background/outline */}
        <div className="fixed top-6 right-8 md:hidden z-50">
          <div
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
          >
            {isOpen ? (
              // X icon when menu is open
              <div className="relative w-8 h-8">
                <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-white transform -rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-white transform rotate-45"></span>
              </div>
            ) : (
              // Three lines when menu is closed
              <div className="w-8 h-8 flex flex-col justify-center gap-1.5">
                <span className="block w-8 h-0.5 bg-white"></span>
                <span className="block w-8 h-0.5 bg-white"></span>
                <span className="block w-8 h-0.5 bg-white"></span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Full-screen Mobile Nav - hidden at 600px (md) and up */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black flex flex-col justify-center items-center z-40">
          <nav className="w-full">
            <ul className="flex flex-col space-y-8 items-center">
              <li><Link to="/" onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold">Home</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)} className="text-white text-2xl">About Us</Link></li>
              <li><Link to="/executive-team" onClick={() => setIsOpen(false)} className="text-white text-2xl">Executive Team</Link></li>
              <li><Link to="/events" onClick={() => setIsOpen(false)} className="text-white text-2xl">Events</Link></li>
              <li><Link to="/contact-us" onClick={() => setIsOpen(false)} className="text-white text-2xl">Contact Us</Link></li>
              <li><Link to="/sponsors" onClick={() => setIsOpen(false)} className="text-white text-2xl">Sponsors</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav;