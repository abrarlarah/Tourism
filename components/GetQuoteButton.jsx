"use client";

import React from 'react';

const GetQuoteButton = ({ className = '' }) => {
  const handleGetQuote = () => {
    window.open('https://wa.me/+917889400477?text=I am interested in getting a quote for your travel services.', '_blank');
  };

  return (
    <button
      onClick={handleGetQuote}
      className={`px-4 py-2 md:px-5 md:py-3 text-sm md:text-base bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:from-gray-700 hover:to-gray-600 hover:scale-105 hover:shadow-2xl active:scale-95 active:from-gray-600 active:to-gray-500 ${className}`}
      style={{
        perspective: '500px', // Create a 3D perspective
      }}
    >
      <span
        className="block transform transition-transform duration-300 ease-in-out"
        style={{
          transform: 'translateZ(5px)', // Push the button content outwards for a 3D feel
        }}
      >
        Get Quote
      </span>
    </button>
  );
};

export default GetQuoteButton;
