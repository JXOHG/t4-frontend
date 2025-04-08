import React from 'react';
import MyEventCalendar from '../components/Calendar';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import AdminEvent from '../components/AdminEvent';

export default function EventsDash() {
    return ( 
        <>
        <Navbar />
        <div className="p-4 md:p-8 mx-4 md:mx-8">
            
            
            <div className="flex flex-col md:flex-row gap-8">
                {/* Calendar appears first on mobile, then events */}
                <div className="w-full md:w-1/3 flex flex-col gap-4 mb-8 md:mb-0 md:order-2">
                    <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg">
                        <MyEventCalendar />
                    </div>
                    
                    <button className="bg-[#F9C726] hover:bg-[#ffd95a] text-black font-bold py-4 px-6 rounded-2xl mt-2 transition duration-300 w-full md:w-auto">
                        Add New Event
                    </button>
                </div>

                <div className="w-full md:w-2/3 flex flex-col gap-4 md:order-1">
                    <AdminEvent title="Guest Speaker - Consumer Behaviour" date="Monday, March 17 • 7:00 PM" location="Western University Campus" />                    
                    <AdminEvent title="Guest Speaker - Consumer Behaviour" date="Monday, March 17 • 7:00 PM" location="Western University Campus" />                    
                    <AdminEvent title="Guest Speaker - Consumer Behaviour" date="Monday, March 17 • 7:00 PM" location="Western University Campus" />                    
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
