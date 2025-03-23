import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Event from '../components/Event';

function Events() {
    return (
        <>
            <Nav />
            <div className="mb-10">
                <div className="w-full flex justify-center py-10">
                    <div className="w-1/2">
                        <h2 className="text-4xl font-georgia font-bold mb-4">Events</h2>
                        <hr className="w-full border-1 border-[#F9C726] mb-6" />
                        <p className="text-gray-300 font-georgia leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <Event image="/tsi-logo.png" title="Sales Workshop" date="March 25, 2025" location="Western University" description="Learn the basics of sales and how to effectively communicate with clients." />
                <Event image="/instagram-brands.svg" title="Annual General Meeting" date="March 29, 2025" location="Morrisette" description="Meet Western Sales Club Executives and members!"/>
                <Event image="/linkedin-brands.svg" title="Sales Pitch Competition" date="April 12, 2025" location="Sommerville Hall" description="Compete against other sales teams to win prizes!"/>
            </div>
            <Footer />
        </>
    );
}

export default Events;
