import React from 'react';
import MyEventCalendar from '../components/Calendar';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import AdminEvent from '../components/AdminEvent';

export default function EventsDash() {
    return ( 
        <>
        <Navbar />
        <div className="p-8">
            <h1 className="text-4xl font-georgia text-left ml-64 font-bold mb-8 text-white">Events Dashboard</h1>
            
            <div className="flex gap-8">
                <div className="w-1/2 flex flex-col gap-4">
                    <AdminEvent title="Guest Speaker - Consumer Behaviour" date="Monday, March 17 • 7:00 PM" location="Western University Campus" />                    
                    <AdminEvent title="Guest Speaker - Consumer Behaviour" date="Monday, March 17 • 7:00 PM" location="Western University Campus" />                    
                    <AdminEvent title="Guest Speaker - Consumer Behaviour" date="Monday, March 17 • 7:00 PM" location="Western University Campus" />                    
                </div>

                <div className="w-1/3 flex flex-col gap-4 ml-48 mr-20">
                    <div className="bg-white rounded-3xl p-6 shadow-lg">
                        <MyEventCalendar />
                    </div>
                    
                    <button className="bg-[#F9C726] hover:bg-[#ffd95a] text-black font-bold py-4 px-6 rounded-2xl mt-2 transition duration-300">
                        Add New Event
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
