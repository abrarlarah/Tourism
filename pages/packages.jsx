"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetQuoteButton from '../components/GetQuoteButton';
import "../app/globals.css";

const Packages = () => {
  const packages = [
    { id: 1, name: 'Splendid Ladakh', image: '/images/ladakh.png', price: '$2000', days: '7 days' },
    { id: 2, name: 'Kashmir Heaven on Earth', image: '/images/kashmir.png', price: '$1800', days: '5 days' },
    { id: 3, name: 'Srinagar', image: '/images/srinagar.png', price: '$2200', days: '6 days' },
    { id: 4, name: 'Yusmarg', image: '/images/yousmarg.png', price: '$2100', days: '5 days' },
    { id: 5, name: 'Sonamarg', image: '/images/sonamarg.png', price: '$2500', days: '8 days' },
    { id: 6, name: 'Pahalgam', image: '/images/pahalgam.png', price: '$1500', days: '4 days' },
    { id: 7, name: 'Gulmarg Winter Retreat', image: '/images/gulmarg.png', price: '$2400', days: '6 days' },
    { id: 8, name: 'Leh Adventure', image: '/images/leh.png', price: '$3000', days: '10 days' },
    { id: 9, name: 'Doodhpathriiiii Escape', image: '/images/doodhpathri.png', price: '$1600', days: '5 days' },
  ];

  return (
    <>
      <Navbar transparent={false} />
      <div className="p-6 md:p-8 space-y-6 mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-500 font-montserrat underline-animation">
          Explore Our Packages
        </h2>
        <p className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Discover the perfect travel package that suits your style. From breathtaking landscapes to adventurous journeys, we have a package for everyone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative flex flex-col items-center shadow-lg rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-full h-48 md:h-64 relative">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  width={500}  // Set the width according to your needs
  height={100} 
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 md:p-6 w-full space-y-2">
                <h3 className="text-xl font-bold text-yellow-500 mb-1 font-montserrat">
                  {pkg.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{pkg.days}</span>
                  <span className="text-lg font-semibold text-gray-800">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Experience the beauty of {pkg.name} with a tailored package designed for your comfort and adventure.
                </p>
                <div className="mt-4 flex justify-center">
                  <GetQuoteButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Packages;
