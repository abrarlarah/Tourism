// components/Customers.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import { img } from '../utils/basePath';

// Outside component — stable
const customers = [
  { id: 1, name: 'Alice Johnson', image: img('/images/05.jpg'), testimonial: 'A wonderful trip, everything was perfectly planned!' },
  { id: 2, name: 'David Lee',     image: img('/images/06.jpg'), testimonial: 'A journey I will never forget, highly recommended!' },
  { id: 3, name: 'Emily Clark',   image: img('/images/07.jpg'), testimonial: 'Excellent service and beautiful destinations!' },
  { id: 4, name: 'Michael Brown', image: img('/images/08.jpg'), testimonial: 'Amazing experience, will definitely book again!' },
  { id: 5, name: 'Sophia White',  image: img('/images/05.jpg'), testimonial: 'A seamless travel experience with fantastic guides.' },
];

const Customers = () => (
  <section className="p-6 md:p-8 bg-gradient-to-b from-gray-100 via-white to-gray-100">
    <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4 font-allura underline-animation">
      Happy Customers
    </h2>
    <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
      Meet some of our happy customers who have explored new horizons with us. Their smiles say it all!
    </p>

    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
      {customers.map((customer, index) => (
        <div
          key={customer.id}
          className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          style={{ marginTop: `${index * 10}px` }}
        >
          <div className="relative w-full h-40">
            <Image
              src={customer.image}
              alt={customer.name}
              fill
              sizes="256px"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-4 text-center space-y-2">
            <h3 className="text-xl font-bold text-yellow-500 font-montserrat">{customer.name}</h3>
            <p className="text-sm text-gray-600 italic">&ldquo;{customer.testimonial}&rdquo;</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Customers;
