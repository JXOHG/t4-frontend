import React from "react";

function Profile({ image, name, title }) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <img
        src={image}
        alt={name}
        className="w-56 h-56 object-cover border-2 border-gray-300 hover:shadow-lg hover:shadow-[#909090] duration-300"
        />
      <h2 className="text-xl font-bold pt-4 text-[#F9C726]">{name}</h2>
      <p className="text-gray-400 text-sm">{title}</p>
    </div>
  );
}

export default Profile;