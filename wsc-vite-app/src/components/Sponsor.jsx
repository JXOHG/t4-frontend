import React from "react";
import { Link } from "react-router-dom";

function Sponsor({ logoFileName, name, description, link }) {
    return (
        <div className="bg-[#262626] flex flex-col md:flex-row w-[90%] md:w-2/3 mx-auto p-4 md:p-6 gap-4 md:gap-6 my-5 rounded-lg hover:bg-[#363636] transition-all duration-500 ease-in-out">
            <div className="w-full md:w-1/3 h-40 mx-auto md:mx-2">
                <Link to={link} target="_blank" rel="noopener noreferrer">
                    <img 
                        src={`/data/sponsor-logos/${logoFileName}`}
                        alt={name} 
                        className="w-full h-40 object-contain rounded-lg"
                    />
                </Link>
            </div>
            <div className="w-full md:w-2/3 px-4 md:px-6">
                <h3 className="text-2xl font-bold mb-2 pb-3 text-center md:text-left">{name}</h3>
                <p className="text-gray-400 text-center md:text-left px-2 md:px-0">{description}</p>
            </div>
        </div>
    );
}

export default Sponsor;
