"use client";
import React from 'react';
import Image from 'next/image';
import GetQuoteButton from '../components/GetQuoteButton';
import { img } from '../utils/basePath';

const services = [
  { id: 1, title: 'Customized Tour Packages', description: 'Tailor-made packages to suit your travel needs.', image: img('/images/services/tour.jpg') },
  { id: 2, title: 'Luxury Hotel Bookings', description: 'Best accommodations at the best prices.', image: img('/images/services/luxury.jpg') },
  { id: 3, title: 'Local Guided Tours', description: 'Discover hidden gems with our local guides.', image: img('/images/services/guide.jpg') },
  { id: 4, title: 'Adventure Activities', description: 'Trekking, water sports, and more thrilling adventures.', image: img('/images/services/adventure.jpg') },
  { id: 5, title: 'Transportation Services', description: 'Safe and reliable transport between destinations.', image: img('/images/services/transport.jpg') },
  { id: 6, title: 'Travel Insurance', description: 'Comprehensive coverage for worry-free journeys.', image: img('/images/services/insurance.webp') },
  { id: 7, title: 'Visa Assistance', description: 'Expert visa processing and documentation.', image: img('/images/services/visa.jpg') },
  { id: 8, title: 'Destination Weddings', description: 'Turn your wedding dreams into reality.', image: img('/images/services/weddings.jpg') },
];

const Services = () => (
  <div className="p-6 md:p-10 lg:p-16 mt-20">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-yellow-500 font-montserrat underline-animation">Our Services</h1>
    <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">Exceptional travel experiences for every kind of traveler.</p>
    <div className="space-y-16 max-w-6xl mx-auto">
      {services.map((s, i) => (
        <div key={s.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-64 lg:h-80 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image src={s.image} alt={s.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" loading={i < 2 ? 'eager' : 'lazy'} />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 font-montserrat">{s.title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">{s.description}</p>
            <GetQuoteButton />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
