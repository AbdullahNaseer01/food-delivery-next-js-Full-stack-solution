import React from 'react';

const ServiceCard = () => {
  return (
    <div className=" mx-auto p-4 h-[300px] md:w-1/4 md:mx-auto flex items-center justify-center flex-col border-2 border-slate-200 rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-customOrange text-indigo-500 mb-4 flex-shrink-0">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M11 5V11L15 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className=" text-center justify-items-center">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          Today 10:00am - 10:00pm
        </h2>
        <p className="leading-relaxed text-base">Working time</p>
      </div>
    </div>
    
  );
};

export default ServiceCard;
