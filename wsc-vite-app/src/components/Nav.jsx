import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path 
      ? "text-white font-semi-bold"
      : "text-white opacity-60";

  // Scroll detection logic
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY < 50);
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50); // show when scrolling up or at top
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } ${atTop ? "bg-transparent" : "bg-black bg-opacity-80 backdrop-blur"} `}
    >
      <div className="px-4 md:px-10 lg:px-16 py-3 md:py-6 lg:py-8 flex items-center justify-between">
        <button
          className="md:hidden flex flex-col space-y-2 p-4 focus:outline-none bg-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        <a href="/" className="text-md pr-4 lg:text-2xl font-bold">Western Sales Club</a>
        <nav
          className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:bg-transparent md:flex-row md:space-x-4`}
        >
          <button
            className="absolute top-3 right-3 text-white text-2xl focus:outline-none md:hidden bg-[#4f2683]"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 space-y-8 md:space-y-0 px-4 md:px-0 py-4">
            <li><Link to="/about" 
              className={`${getLinkClass("/about")} text-sm md:text-md lg:text-lg whitespace-nowrap`}
              onClick={() => { window.setScrollY(0); setIsOpen(false); }} 
            >
              About Us
            </Link></li>
            <li><Link to="/executive-team" 
              className={`${getLinkClass("/executive-team")} text-sm md:text-md lg:text-lg whitespace-nowrap`} 
              onClick={() => { window.setScrollY(0); setIsOpen(false); }}
            >
              Executive Team
            </Link></li>
            <li><Link to="/events" 
              className={`${getLinkClass("/events")} text-sm md:text-md lg:text-lg whitespace-nowrap`} 
              onClick={() => { window.setScrollY(0); setIsOpen(false); }}
            >
              Events
            </Link></li>
            <li><Link to="/sponsors" 
              className={`${getLinkClass("/sponsors")} text-sm md:text-md lg:text-lg whitespace-nowrap`} 
              onClick={() => { window.setScrollY(0); setIsOpen(false); }}
            >
              Sponsors
            </Link></li>
            <li><Link to="/contact-us" 
              className={`${getLinkClass("/contact-us")} text-sm md:text-md lg:text-lg whitespace-nowrap`} 
              onClick={() => { window.setScrollY(0); setIsOpen(false); }}
            >
              Contact Us
            </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
