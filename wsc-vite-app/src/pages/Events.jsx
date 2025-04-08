import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Event from '../components/Event';
import PageTitle from "../components/page-title";

function Events() {
    return (
        <>
            <Nav />
            <PageTitle 
                title="Events" 
                description="Follow our upcoming workshops, seminars, and networking events designed to help you develop your sales skills and connect with industry professionals. Open to all experience levels."
                className="px-8 md:px-0 text-sm md:text-base" 
            />
            
            <div className="flex flex-col justify-center pb-20 px-8 md:px-16 max-w-7xl mx-auto w-full">
                <Event image="/tsi-logo.png" title="Sales Workshop" date="March 25, 2025" location="Western University" description="Learn the basics of sales and how to effectively communicate with clients." />
                <Event image="/instagram-brands.svg" title="Annual General Meeting" date="March 29, 2025" location="Morrisette" description="Meet Western Sales Club Executives and members!"/>
                <Event image="/linkedin-brands.svg" title="Sales Pitch Competition" date="April 12, 2025" location="Sommerville Hall" description="Compete against other sales teams to win prizes!"/>
            </div>
            <Footer />
        </>
    );
}

export default Events;
