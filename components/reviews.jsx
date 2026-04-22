"use client";
import React, { useEffect, useState, useCallback, useRef } from 'react';

// Outside component — stable reference
const reviews = [
  { id: 1, name: 'John Doe',      review: 'Amazing experience! The tour was well organized and I had a great time.' },
  { id: 2, name: 'Jane Smith',    review: 'Wonderful! The guide was very knowledgeable, and I felt very comfortable throughout the trip.' },
  { id: 3, name: 'Mark Johnson',  review: 'A trip to remember! Everything was perfect, from the accommodations to the itinerary.' },
  { id: 4, name: 'Emily Davis',   review: 'Highly recommend! Great customer service and wonderful destinations.' },
  { id: 5, name: 'Michael Brown', review: 'I loved every moment of it! Thank you for such an amazing experience.' },
];

const TOTAL = reviews.length;

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Use a ref to pause auto-play when user manually navigates
  const isPausedRef = useRef(false);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
  }, []);

  const handleManualPrev = useCallback(() => {
    isPausedRef.current = true;
    goPrev();
    setTimeout(() => { isPausedRef.current = false; }, 4000);
  }, [goPrev]);

  const handleManualNext = useCallback(() => {
    isPausedRef.current = true;
    goNext();
    setTimeout(() => { isPausedRef.current = false; }, 4000);
  }, [goNext]);

  // Simple auto-play — no complex transition state machine needed
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPausedRef.current) goNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section className="p-6 md:p-8 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-8 font-allura underline-animation">
        What Our Clients Say
      </h2>

      <div className="relative flex items-center justify-center overflow-hidden">
        <button
          onClick={handleManualPrev}
          aria-label="Previous review"
          className="z-10 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 absolute left-0 md:left-4"
        >
          &#8249;
        </button>

        {/* Sliding track */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-full px-8 md:px-16"
                aria-hidden={index !== currentIndex}
              >
                <div
                  className={`bg-white p-8 shadow-lg rounded-xl transition-all duration-300 ${
                    index === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                  }`}
                >
                  <div className="flex text-yellow-500 mb-4">★★★★★</div>
                  <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                    &ldquo;{review.review}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-right font-bold text-yellow-500">— {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleManualNext}
          aria-label="Next review"
          className="z-10 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 absolute right-0 md:right-4"
        >
          &#8250;
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-yellow-500 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
