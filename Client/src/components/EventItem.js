import React from "react";

const EventItem = ({ imageSrc, title, onClick }) => {
  return (
    <div className="relative h-96 mb-9">
      <div
        className="group rounded-lg bg-black bg-opacity-15 shadow-sm shadow-black bg-opacity-25 mb-8 overflow-hidden transition-transform duration-300 ease-in-out transform relative flex flex-col cursor-pointer"
      >
        <div className="flex-none overflow-hidden">
          <img className="size-72 transition-transform duration-300 ease-in-out transform-gpu hover:scale-110" src={imageSrc} alt={title} />
        </div>
        <div className="flex-grow flex flex-col justify-between bg-gradient-to-t from-black to-transparent">
          <div className="p-4">
            <h1 className="font-bold text-white size-auto">{title}</h1>
          </div>
          <button
            className="font-semibold text-white p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-full"
            onClick={onClick} // Handle click to view details
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
