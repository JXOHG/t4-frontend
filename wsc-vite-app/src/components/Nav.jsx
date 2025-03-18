import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();

    const getLinkClass = (path) =>
      location.pathname === path 
          ? "text-white font-semi-bold"
          : "text-white opacity-60";   

    return (
      <header className="fixed top-0 left-0 w-full z-50 text-white bg-transparent">
        <div className="px-20 py-12 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold">Western Sales Club</a>
            <nav>
            <ul className="flex space-x-6">
                <li><Link to="/about" className={getLinkClass("/about")}>About Us</Link></li>
                <li><Link to="/executive-team" className={getLinkClass("/executive-team")}>Executive Team</Link></li>
                <li><Link to="/events" className={getLinkClass("/events")}>Events</Link></li>
                <li><Link to="/contact-us" className={getLinkClass("/contact-us")}>Contact Us</Link></li>
                <li><Link to="/sponsors" className={getLinkClass("/sponsors")}>Sponsors</Link></li>
            </ul>
            </nav>
        </div>
      </header>
    );
}

export default Nav;