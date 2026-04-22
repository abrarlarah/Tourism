"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import GetQuoteButton from '../components/GetQuoteButton';
import { FaPhoneAlt } from 'react-icons/fa';

const heroContent = [
  {
    title: "Explore Kashmir's Hidden Gems",
    description: 'From the serene waters of Dal Lake in Srinagar to the snow-covered peaks of Gulmarg, experience the untouched beauty of Kashmir like never before.',
    image: '/images/kashmir.png',
  },
  {
    title: 'Adventure Awaits in Leh',
    description: 'Discover the rugged landscapes and ancient monasteries of Leh with our exclusive adventure packages.',
    image: '/images/leh.png',
  },
  {
    title: 'Relax in the Meadows of Sonamarg',
    description: 'Unwind amidst the lush green meadows and pristine rivers of Sonamarg.',
    image: '/images/sonamarg.png',
  },
  {
    title: 'Charming Beauty of Pahalgam',
    description: 'Escape to Pahalgam, where lush green meadows meet the tranquil Lidder River for a perfect getaway.',
    image: '/images/pahalgam.png',
  },
  {
    title: 'Cultural Wonders of Srinagar',
    description: 'Immerse yourself in the rich cultural heritage of Srinagar with its Mughal Gardens and houseboats on Dal Lake.',
    image: '/images/srinagar.png',
  },
  {
    title: 'Thrills in Gulmarg',
    description: 'Enjoy skiing, snowboarding, and the breathtaking beauty of Gulmarg, the winter sports paradise of India.',
    image: '/images/gulmarg.png',
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const currentContent = heroContent[currentIndex];

  return (
    <div className="relative h-[70vh] w-full bg-gradient-to-r from-blue-50 to-white mt-20 pb-20">
      <Navbar />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-gray-800 p-6 pt-20 pb-20 z-10">
        {/* Left Side - Text Content */}
        <div className="space-y-6 md:w-1/2 text-center md:text-left md:pr-6 bg-black bg-opacity-60 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight font-montserrat uppercase text-white md:text-gray-800">
            {currentContent.title.split(' ').map((word, i) => (
              <span key={i} className={word === 'Gems' || word === 'Leh' || word === 'Sonamarg' || word === 'Pahalgam' || word === 'Srinagar' || word === 'Gulmarg' ? 'text-yellow-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-md md:text-xl text-gray-300 md:text-gray-600 leading-relaxed">
            {currentContent.description}
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center md:justify-start">
            <GetQuoteButton />
            <a
              href="tel:+919906512509"
              className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              <FaPhoneAlt />
              <span className="font-bold">+91 7889400477</span>
            </a>
          </div>
          <div className="flex space-x-6 mt-6 justify-center md:justify-start">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white md:text-gray-800">50+</h2>
              <p className="text-gray-300 md:text-gray-500">Destinations</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white md:text-gray-800">100+</h2>
              <p className="text-gray-300 md:text-gray-500">Happy Clients</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white md:text-gray-800">750+</h2>
              <p className="text-gray-300 md:text-gray-500">Tour Packages</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative mt-8 md:mt-0 md:w-1/2 hidden md:flex items-center justify-center">
          <div className="relative w-full h-[300px] md:h-[400px] flex justify-center">
            <Image
              src={currentContent.image}
              alt={currentContent.title}
              width={500}  // Set the width according to your needs
              height={100} // Set the height according to your needs
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Background Image for Small Screens */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={currentContent.image}
          alt={currentContent.title}
          fill
          className="object-cover opacity-70"
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-6">
        <button
          onClick={handlePrev}
          className="p-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition z-20"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition z-20"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
