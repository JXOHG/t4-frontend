import React from "react";

function Event({ image, title, date, location, description }) {

    return (
        <div className="bg-[#262626] flex w-1/2 mx-auto p-6 gap-6 my-5 rounded-lg hover:bg-[#363636] transition-all duration-500 ease-in-out">
            <div className="w-1/4 h-40 mx-2 my-2">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-40 object-cover rounded-lg"
                />
            </div>
            <div className="w-2/3 mx-3">
                <h3 className="text-2xl font-bold mb-2 text-left">{title}</h3>
                <div className="flex flex-col gap-2 text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-400">{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-400">{location}</span>
                    </div>
                </div>
                <p className="text-gray-400 text-left">{description}</p>
            </div>
        </div>
    );
}

export default Event;
