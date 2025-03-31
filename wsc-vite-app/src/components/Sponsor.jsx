import React from "react";
import { Link } from "react-router-dom";

function Sponsor({ image, name, description, link }) {

    return (
        <div className="bg-[#262626] flex w-1/2 mx-auto p-6 gap-6 my-5 rounded-lg hover:bg-[#363636] transition-all duration-500 ease-in-out">
            <div className="w-1/4 h-40 mx-2 my-2">
                <Link to={link} target="_blank" rel="noopener noreferrer">
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-40 object-cover rounded-lg"
                    />
                </Link>
            </div>
            <div className="w-2/3 mx-3">
                <h3 className="text-2xl font-bold mb-2 pb-3 text-left">{name}</h3>
                <p className="text-gray-400 text-left">{description}</p>
            </div>
        </div>
    );
}

export default Sponsor;
