"use client";
import React from 'react';
import Image from 'next/image';

const photos = [
  { id: 1, src: '/images/ladakh.png',   alt: 'Beautiful landscape of Ladakh' },
  { id: 2, src: '/images/srinagar.png', alt: 'Scenic view of Dal Lake' },
  { id: 3, src: '/images/kupwara.png',  alt: 'Sunset over the valleys' },
  { id: 4, src: '/images/gulmarg.png',  alt: 'Snow-covered landscapes' },
  { id: 5, src: '/images/footer.png',   alt: 'Mountain range view' },
  { id: 6, src: '/images/pahalgam.png', alt: 'Beautiful scenery of Pahalgam' },
];

const Gallery = () => (
  <div className="p-6 md:p-10 lg:p-16 mt-20">
    <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-4 underline-animation font-montserrat">Gallery</h1>
    <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">Discover breathtaking moments captured in our gallery.</p>
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-center text-yellow-500 mb-10 tracking-widest uppercase">Photos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {photos.map((p, i) => (
          <div key={p.id} className="flex flex-col shadow-lg rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-full h-60 relative">
              <Image src={p.src} alt={p.alt} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover" loading={i < 3 ? 'eager' : 'lazy'} />
            </div>
            <div className="w-full p-4 bg-gray-50"><p className="text-center text-gray-800">{p.alt}</p></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
