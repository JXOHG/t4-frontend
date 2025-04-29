import React, { useState } from "react";

function Event({ image, title, date, location, description }) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        console.error("Failed to load image:", image);
        setImageError(true);
    };

    return (
        <div className="flex flex-col items-center text-white rounded-lg shadow-md m-6 p-6 md:flex-row w-full md:max-w-4xl mx-auto">
            <div className="w-full md:w-1/3 flex justify-center">
                {image && !imageError ? (
                    <img 
                        src={image} 
                        alt={title} 
                        className="h-48 w-48 object-contain rounded"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="h-48 w-48 bg-gray-800 flex items-center justify-center rounded">
                        <span className="text-white-400 text-lg font-medium">No Image</span>
                    </div>
                )}
            </div>
            <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6 text-left">
                <h2 className="text-2xl font-bold text-white-200">{title}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center text-white-400 mt-2">
                    <p className="mr-4 flex items-center">
                        <i className="far fa-calendar-alt mr-2"></i>
                        {date}
                    </p>
                    <p className="flex items-center mt-2 sm:mt-0">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {location}
                    </p>
                </div>
                <p className="text-white-400 mt-3">{description}</p>
            </div>
        </div>
    );
}

export default Event;
