"use client";
import React from 'react';
import Image from 'next/image';
import GetQuoteButton from '../components/GetQuoteButton';
import { img } from '../utils/basePath';

const destinations = [
  { id: 1, name: 'Srinagar',     image: img('/images/srinagar.png'),    description: 'Experience the beauty of the Dal Lake and Mughal Gardens.' },
  { id: 2, name: 'Gulmarg',      image: img('/images/gulmarg.png'),     description: 'A paradise for skiers and nature lovers.' },
  { id: 3, name: 'Sonamarg',     image: img('/images/sonamarg.png'),    description: 'The Meadow of Gold, perfect for trekking.' },
  { id: 4, name: 'Pahalgam',     image: img('/images/pahalgam.png'),    description: 'Lush green meadows and the tranquil Lidder River.' },
  { id: 5, name: 'Leh',          image: img('/images/leh.png'),         description: 'Explore the rugged landscapes and monasteries.' },
  { id: 6, name: 'Yousmarg',     image: img('/images/yousmarg.png'),    description: 'A hidden gem for a peaceful nature retreat.' },
  { id: 7, name: 'Kupwara',      image: img('/images/kupwara.png'),     description: 'Crown of Kashmir — breathtaking landscapes.' },
  { id: 8, name: 'Doodhpathri',  image: img('/images/doodhpathri.png'), description: 'Lush green meadows ideal for relaxation.' },
  { id: 9, name: 'Gurez Valley', image: img('/images/gurez.png'),       description: 'Remote valley with stunning beauty and adventure.' },
];

const Destinations = () => (
  <div className="mt-28 mb-28">
    <h1 className="text-5xl font-bold text-center text-yellow-500 mb-4 font-montserrat underline-animation">Popular Destinations</h1>
    <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-12">Explore the best destinations to make your travel dreams come true.</p>
    <div className="max-w-6xl mx-auto px-4 space-y-16">
      {destinations.map((d, i) => (
        <div key={d.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={`relative h-64 lg:h-80 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
            <Image src={d.image} alt={d.name} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" loading={i < 2 ? 'eager' : 'lazy'} />
          </div>
          <div className={`space-y-4 p-4 lg:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl text-center lg:text-left ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
            <h3 className="text-2xl font-bold text-yellow-500 font-montserrat">{d.name}</h3>
            <p className="text-gray-700">{d.description}</p>
            <div className="flex justify-center lg:justify-start"><GetQuoteButton /></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Destinations;
