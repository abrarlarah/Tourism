"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import "../app/globals.css";

const photos = [
  { id: 1, src: '/images/ladakh.png',    alt: 'Beautiful landscape of Ladakh' },
  { id: 2, src: '/images/srinagar.png', alt: 'Scenic view of Dal Lake' },
  { id: 3, src: '/images/kupwara.png',  alt: 'Sunset over the valleys' },
  { id: 4, src: '/images/gulmarg.png',  alt: 'Snow-covered landscapes' },
  { id: 5, src: '/images/footer.png',   alt: 'Mountain range view' },
  { id: 6, src: '/images/pahalgam.png', alt: 'Beautiful scenery of Pahalgam' },
];

const Gallery = () => {
  return (
    <>
      <Navbar transparent={false} />
      <div className="p-6 md:p-10 lg:p-16 space-y-16 mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 underline-animation">
          Gallery
        </h2>
        <p className="text-center text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Discover breathtaking moments captured in our gallery. From stunning landscapes to thrilling adventures, explore the essence of Kashmir through photos.
        </p>

        {/* Photos Section with Uniform Card Layout */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-4 text-yellow-500 mb-10">PHOTOS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105"
              >
                <div className="w-full h-60 relative">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <div className="w-full p-4 bg-gray-50">
                  <p className="text-center text-gray-800">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
