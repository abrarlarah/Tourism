"use client";
import React, { useCallback } from 'react';
import Image from 'next/image';
import GetQuoteButton from './GetQuoteButton';
import { useRouter } from 'next/navigation';
import { img } from '../utils/basePath';

// Outside component — stable, never re-allocated
const packages = [
  { id: 1, name: 'Splendid Ladakh',          image: img('/images/ladakh.png'),      price: '$2000', days: '7 days' },
  { id: 2, name: 'Kashmir Heaven on Earth',   image: img('/images/kashmir.png'),     price: '$1800', days: '5 days' },
  { id: 3, name: 'Srinagar',                  image: img('/images/srinagar.png'),    price: '$2200', days: '6 days' },
  { id: 4, name: 'Yusmarg',                   image: img('/images/yousmarg.png'),    price: '$2100', days: '5 days' },
  { id: 5, name: 'Sonamarg',                  image: img('/images/sonamarg.png'),    price: '$2500', days: '8 days' },
  { id: 6, name: 'Pahalgams',                 image: img('/images/pahalgam.png'),    price: '$1500', days: '4 days' },
];

const Packages = () => {
  const router = useRouter();
  const handleViewAll = useCallback(() => router.push('/packages'), [router]);

  return (
    <section className="p-4 md:p-6 lg:p-8 space-y-6">
      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4 font-allura underline-animation">
        Checkout our Packages
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore the best packages curated for your travel needs. Experience adventure, relaxation, and unforgettable moments with our tailored travel options.
      </p>

      <div className="space-y-10 mx-auto max-w-6xl px-4 sm:px-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative flex flex-col lg:flex-row items-stretch shadow-md rounded-lg overflow-hidden bg-gradient-to-br from-white to-blue-50 transition-shadow duration-300 hover:shadow-lg group"
          >
            {/* Image */}
            <div className="relative w-full h-56 md:h-64 lg:h-auto lg:w-1/2">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between p-4 md:p-6 space-y-4 lg:w-1/2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-poppins text-center lg:text-left">
                {pkg.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center lg:text-left">
                Experience the beauty of {pkg.name} with a tailored package for {pkg.days}. Immerse yourself in the culture, scenery, and adventure that awaits.
              </p>
              <div className="flex space-x-4 text-sm text-gray-500 justify-center lg:justify-start">
                <span>Duration: {pkg.days}</span>
                <span>|</span>
                <span>Price: {pkg.price}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center items-center bg-yellow-500 text-white p-4 md:p-6 lg:w-1/3 w-full text-center space-y-5 mx-auto my-4 lg:my-0 lg:mx-0 lg:h-auto lg:max-w-xs rounded-lg shadow-md">
              <span className="text-2xl md:text-3xl font-bold">{pkg.price}</span>
              <span className="text-xs">per person</span>
              <GetQuoteButton />
            </div>

            {/* Hover border effect */}
            <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
              <div className="absolute bottom-0 right-0 h-0 w-[2px] bg-yellow-500 transition-all duration-300 group-hover:h-full" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleViewAll}
          className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-300 shadow-md"
        >
          View All Packages
        </button>
      </div>
    </section>
  );
};

export default Packages;
