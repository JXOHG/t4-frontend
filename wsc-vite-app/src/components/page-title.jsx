import React from "react";

const PageTitle = ({ title, description, className = "" }) => {
  return (
    <div className={`mx-auto text-center max-w-3xl ${className}`}>
      <h1 className="text-3xl font-bold pb-5">{title}</h1>
      <hr className="border-t border-[#F9C726] w-full pb-5" />
      {description && (
        <p className="text-gray-300 font-georgia leading-relaxed pb-10">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
