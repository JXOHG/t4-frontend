import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Sponsors() {
    return (
              <>
                <Nav />
                <div className=" text-white pt-6 pb-12 px-6">
                  {/* Title */}
                  <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2">About Our Sponsors</h1>
                    <div className="w-90 mx-auto border-t-2 border-yellow-500 mb-4"></div>
                    <p className="max-w-2xl mx-auto text-gray-400">
                      Thank You to Our Amazing Sponsors!
                      We are extremely grateful for all our sponsors. Without them we would not be where we are today. 
                      We look forward to continuing this journey together and achieving even more in the future. Thank you for being a part of our mission!
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4"></div>

                  {/* Sponsor List */}
                  <div className="mt-8 space-y-8">
                    {/* Sponsor Item */}
                    <div className="flex items-center space-x-6 border-b border-gray-700 pb-4">
                      <img
                        src="tsilogo.jpeg"
                        alt="Western Tech for Social Impact"
                        className="w-50 h-50 object-contain"
                      />
                      <div>
                        <h2 className="text-xl font-semibold">Western Tech for Social Impact</h2>
                        <p className="text-sm text-gray-400">January 2025</p>
                        <p className="text-gray-300 mt-2">
                          TSI is the best and they created this amazing website for us
                        </p>
                      </div>
                    </div>
          
                    <div className="flex items-center space-x-6 border-b border-gray-700 pb-4">
                      <img
                        src="ogpressure.png"
                        alt="OG Pressure Washing"
                        className="w-41 h-40 object-contain"
                      />
                      <div>
                        <h2 className="text-xl font-semibold">OG Pressure Washing</h2>
                        <p className="text-sm text-gray-400">January 2025</p>
                        <p className="text-gray-300 mt-2">
                          OG pressure washing is another one of our wonderful sponsors
                        </p>
                      </div>
                    </div>
          
                    <div className="flex items-center space-x-6 border-b border-gray-700 pb-4">
                      <img
                        src="lebron.jpeg"
                        alt="BOOM BOOM BOOM BOOM"
                        className="w-44 h-44 object-cover"
                      />
                      <div>
                        <h2 className="text-xl font-semibold">BOOM BOOM BOOM BOOM</h2>
                        <p className="text-sm text-gray-400">January 2025</p>
                        <p className="text-gray-300 mt-2">
                          THE KING THE LEGOAT THE ONE AND ONLY LEBROONNNNNNN
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </>
            );
          }

export default Sponsors;