"use client";
import React from 'react';
import Image from 'next/image';
import GetQuoteButton from '../components/GetQuoteButton';

const packages = [
  { id: 1, name: 'Splendid Ladakh',        image: '/images/ladakh.png',      price: '$2000', days: '7 days' },
  { id: 2, name: 'Kashmir Heaven on Earth', image: '/images/kashmir.png',     price: '$1800', days: '5 days' },
  { id: 3, name: 'Srinagar',               image: '/images/srinagar.png',    price: '$2200', days: '6 days' },
  { id: 4, name: 'Yusmarg',                image: '/images/yousmarg.png',    price: '$2100', days: '5 days' },
  { id: 5, name: 'Sonamarg',               image: '/images/sonamarg.png',    price: '$2500', days: '8 days' },
  { id: 6, name: 'Pahalgam',               image: '/images/pahalgam.png',    price: '$1500', days: '4 days' },
  { id: 7, name: 'Gulmarg Winter Retreat',  image: '/images/gulmarg.png',     price: '$2400', days: '6 days' },
  { id: 8, name: 'Leh Adventure',          image: '/images/leh.png',         price: '$3000', days: '10 days' },
  { id: 9, name: 'Doodhpathri Escape',     image: '/images/doodhpathri.png', price: '$1600', days: '5 days' },
];

const Packages = () => (
  <div className="p-6 md:p-8 space-y-6 mt-20">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-500 font-montserrat underline-animation">Explore Our Packages</h1>
    <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12">Discover the perfect travel package that suits your style.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {packages.map((pkg, i) => (
        <div key={pkg.id} className="flex flex-col shadow-lg rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="w-full h-48 md:h-56 relative">
            <Image src={pkg.image} alt={pkg.name} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover" loading={i < 3 ? 'eager' : 'lazy'} />
          </div>
          <div className="p-4 md:p-6 flex flex-col flex-1 space-y-3">
            <h3 className="text-xl font-bold text-yellow-500 font-montserrat">{pkg.name}</h3>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{pkg.days}</span>
              <span className="text-lg font-semibold text-gray-800">{pkg.price}</span>
            </div>
            <p className="text-sm text-gray-600 flex-1">Experience the beauty of {pkg.name} with a tailored package for your comfort.</p>
            <div className="mt-auto flex justify-center"><GetQuoteButton /></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Packages;
