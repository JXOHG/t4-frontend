import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();

    const getLinkClass = (path) =>
      location.pathname === path 
          ? "text-white font-semi-bold"
          : "text-white opacity-60";   

    return (
      <header className="top-0 left-0 w-full z-50 text-white bg-transparent z-500">
        <div className="px-3 lg:px-20 py-6 lg:py-12 flex items-center justify-between">
            <a href="/" className="text-sm lg:text-2xl font-bold whitespace-nowrap">Western Sales Club</a>
            <nav>
            <ul className="flex space-x-2 lg:space-x-6">
                <li><Link to="/about" className={`${getLinkClass("/about")} text-sm lg:text-lg whitespace-nowrap`}>About Us</Link></li>
                <li><Link to="/executive-team" className={`${getLinkClass("/executive-team")} text-sm lg:text-lg whitespace-nowrap`}>Executive Team</Link></li>
                <li><Link to="/events" className={`${getLinkClass("/events")} text-sm lg:text-lg whitespace-nowrap`}>Events</Link></li>
                <li><Link to="/sponsors" className={`${getLinkClass("/sponsors")} text-sm lg:text-lg whitespace-nowrap`}>Sponsors</Link></li>
                <li><Link to="/contact-us" className={`${getLinkClass("/contact-us")} text-sm lg:text-lg whitespace-nowrap`}>Contact Us</Link></li>
            </ul>
            </nav>
        </div>
      </header>
    );
}
export default Nav;