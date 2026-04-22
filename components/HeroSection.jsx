"use client";

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import GetQuoteButton from '../components/GetQuoteButton';
import { FaPhoneAlt } from 'react-icons/fa';

// Defined OUTSIDE component — never re-created on each render
const heroContent = [
  {
    title: "Explore Kashmir's Hidden Gems",
    description: 'From the serene waters of Dal Lake in Srinagar to the snow-covered peaks of Gulmarg, experience the untouched beauty of Kashmir like never before.',
    image: '/images/kashmir.png',
    highlight: 'Gems',
  },
  {
    title: 'Adventure Awaits in Leh',
    description: 'Discover the rugged landscapes and ancient monasteries of Leh with our exclusive adventure packages.',
    image: '/images/leh.png',
    highlight: 'Leh',
  },
  {
    title: 'Relax in the Meadows of Sonamarg',
    description: 'Unwind amidst the lush green meadows and pristine rivers of Sonamarg.',
    image: '/images/sonamarg.png',
    highlight: 'Sonamarg',
  },
  {
    title: 'Charming Beauty of Pahalgam',
    description: 'Escape to Pahalgam, where lush green meadows meet the tranquil Lidder River for a perfect getaway.',
    image: '/images/pahalgam.png',
    highlight: 'Pahalgam',
  },
  {
    title: 'Cultural Wonders of Srinagar',
    description: 'Immerse yourself in the rich cultural heritage of Srinagar with its Mughal Gardens and houseboats on Dal Lake.',
    image: '/images/srinagar.png',
    highlight: 'Srinagar',
  },
  {
    title: 'Thrills in Gulmarg',
    description: 'Enjoy skiing, snowboarding, and the breathtaking beauty of Gulmarg, the winter sports paradise of India.',
    image: '/images/gulmarg.png',
    highlight: 'Gulmarg',
  },
];

const TOTAL = heroContent.length;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [goNext]);

  const current = heroContent[currentIndex];

  // Pre-compute title JSX to avoid inline map on every render tick
  const titleWords = useMemo(
    () =>
      current.title.split(' ').map((word, i) => (
        <span key={i} className={word === current.highlight ? 'text-yellow-500' : ''}>
          {word}{' '}
        </span>
      )),
    [current.title, current.highlight]
  );

  return (
    // Navbar is already rendered by the root layout — NOT duplicated here
    <div className="relative h-[70vh] w-full bg-gradient-to-r from-blue-50 to-white mt-20 pb-20">
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-gray-800 p-6 pt-20 pb-20 z-10">
        {/* Left — Text */}
        <div className="space-y-6 md:w-1/2 text-center md:text-left md:pr-6 bg-black bg-opacity-60 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight font-montserrat uppercase text-white md:text-gray-800">
            {titleWords}
          </h1>
          <p className="text-md md:text-xl text-gray-300 md:text-gray-600 leading-relaxed">
            {current.description}
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center md:justify-start">
            <GetQuoteButton />
            <a
              href="tel:+917889400477"
              className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              <FaPhoneAlt />
              <span className="font-bold">+91 7889400477</span>
            </a>
          </div>
          <div className="flex space-x-6 mt-6 justify-center md:justify-start">
            {[['50+', 'Destinations'], ['100+', 'Happy Clients'], ['750+', 'Tour Packages']].map(([num, label]) => (
              <div key={label} className="text-center">
                <h2 className="text-2xl font-bold text-white md:text-gray-800">{num}</h2>
                <p className="text-gray-300 md:text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image (desktop only) */}
        <div className="relative mt-8 md:mt-0 md:w-1/2 hidden md:flex items-center justify-center">
          <div className="relative w-full h-[300px] md:h-[400px] flex justify-center">
            <Image
              src={current.image}
              alt={current.title}
              width={500}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background image for mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={current.image}
          alt={current.title}
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-6">
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="p-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition z-20"
        >
          &#10094;
        </button>
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="p-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition z-20"
        >
          &#10095;
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {heroContent.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-yellow-500 w-4' : 'bg-white bg-opacity-60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
